export const getLeaderBoardInfo = async (res) => {
  let leaderBoardInfo = res?.leaderBoardInfo
  if (res?.usage ==='member') {
    res.types.map((type) => {
      let leaderBoards = []
      if (res?.leaderBoardInfo[type]) {
        leaderBoards = res.leaderBoardInfo[type].leaderBoards.map((item) => {
          return {
            rank: item.rank,
            member_name: item.member_name,
            member_no: item.member_no,
            [`sum_${type}_audit_amount_text`]: item[`sum_${type}_audit_amount_text`]
          }
        })
      }
      leaderBoardInfo[type] = {...res.leaderBoardInfo[type], leaderBoards}
      return leaderBoards
    })
  } else {
    res.types.map((type) => {
      let leaderBoards = []
      if (res?.leaderBoardInfo[type]) {
        leaderBoards = res.leaderBoardInfo[type].leaderBoards.map((item) => {
          return {
            rank: item.rank,
            event_team_name: item.event_team_name,
            [`sum_${type}_audit_amount_text`]: item[`sum_${type}_audit_amount_text`]
          }
        })
      }
      leaderBoardInfo[type] = {...res.leaderBoardInfo[type], leaderBoards}
      return leaderBoards
    })
  }
  return { leaderBoardInfo }
}