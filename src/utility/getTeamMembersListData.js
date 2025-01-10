import { useEventsStore } from '@/stores/events.js'

export const getTeamMembersListData = async (res) => {
  // 獲取事件商店
  const eventsStore = useEventsStore()

  // 如果沒有活動子任務(活動目標)在進行不顯示審核數量
  const confirmIfRunningEvent = (countText) => {
    return eventsStore.eventsInfo.runningEventMissionCount ? countText : '0'
  }

  // 映射團隊成員資料的函數
  const mapTeamMember = (item, type = '') => {
    if (eventsStore.eventMissionType === 'events_health_exercises_walk') {
      let listData = type === 'eventTeamMembers' ? {
        member_username: item.member_username,
        member_name:  item.member_name,
        joinDateMMDD:  item.joinDateMMDD,
        sum_walk_steps_audit_amount_text: confirmIfRunningEvent(item.sum_walk_steps_audit_amount_text)
      } : {
        member_username: item.member_username,
        member_name:  item.member_name,
        joinDateMMDD:  item.joinDateMMDD,
        leaveDateMMDD:  item.leaveDateMMDD,
        sum_walk_steps_audit_amount_text: confirmIfRunningEvent(item.sum_walk_steps_audit_amount_text)
      }
      return listData
    } else if (eventsStore.eventMissionType === 'events_health_exercises_stair') {
      const listData =  type === 'eventTeamMembers' ? {
        member_username: item.member_username,
        member_name:  item.member_name,
        joinDateMMDD:  item.joinDateMMDD,
        sum_walk_steps_audit_amount_text: confirmIfRunningEvent(item.sum_walk_steps_audit_amount_text),
        sum_stair_times_audit_amount_text: confirmIfRunningEvent(item.sum_stair_times_audit_amount_text)
      } : {
        member_username: item.member_username,
        member_name:  item.member_name,
        joinDateMMDD:  item.joinDateMMDD,
        leaveDateMMDD:  item.leaveDateMMDD,
        sum_walk_steps_audit_amount_text: confirmIfRunningEvent(item.sum_walk_steps_audit_amount_text) ,
        sum_stair_times_audit_amount_text: confirmIfRunningEvent(item.sum_stair_times_audit_amount_text)
      }
      return listData
    } else {
      const listData = type === 'eventTeamMembers' ? {
        member_username: item.member_username,
        member_name:  item.member_name,
        joinDateMMDD:  item.joinDateMMDD,
        sum_walk_steps_audit_amount_text: confirmIfRunningEvent(item.sum_walk_steps_audit_amount_text),
        sum_video_times_audit_amount_text: confirmIfRunningEvent(item.sum_video_times_audit_amount_text)
      } : {
        member_username: item.member_username,
        member_name:  item.member_name,
        joinDateMMDD:  item.joinDateMMDD,
        leaveDateMMDD:  item.leaveDateMMDD,
        sum_walk_steps_audit_amount_text: confirmIfRunningEvent(item.sum_walk_steps_audit_amount_text),
        sum_video_times_audit_amount_text: confirmIfRunningEvent(item.sum_video_times_audit_amount_text)
      }
      return listData
    }
  }

  // 處理成員列表的函數
  const processMembers = (members, type, memberIsLeader) => {
    return members.map((item) => {
      const memberData = mapTeamMember(item, type)
      if (type === 'eventTeamMembers' && !item.isLeader && memberIsLeader) {
        //  當處理"團隊成員列表"列表資料，使用者是隊長且列表資料成員不是隊長，則將 member_id 加入 remove 屬性，以作為刪除成員的參數
        memberData.remove = item.member_id
      }
      return memberData
    })
  }

  let teamMembersListData = {}

  // 處理"團隊成員列表"列表資料
  if (res?.eventTeamMembers) {
    teamMembersListData.eventTeamMembers = processMembers(res.eventTeamMembers, 'eventTeamMembers', res.memberIsLeader)
  }

  // 處理"手動刪除紀錄"列表資料
  if (res?.manualRemoveTeamMembers) {
    teamMembersListData.manualRemoveTeamMembers = processMembers(res.manualRemoveTeamMembers, '')
  }

  // 處理"系統移除紀錄"列表資料
  if (res?.systemRemoveTeamMembers) {
    teamMembersListData.systemRemoveTeamMembers = processMembers(res.systemRemoveTeamMembers, '')
  }

  return { teamMembersListData }
}
