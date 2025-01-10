import registrationWalk from '@/assets/image/img_04_walk_registration.png'
import registrationStairs from '@/assets/image/img_04_stairs_registration.png'
import registrationYoga from '@/assets/image/img_04_yoga_registration.png'
import registeredWalk from '@/assets/image/img_04_walk_start_cover.png'
import registeredStairs from '@/assets/image/img_04_stairs_start_cover.png'
import registeredYoga from '@/assets/image/img_04_yoga_start_cover.png'
import classWalk from '@/assets/image/img_04_walk_class_cover.png'
import classStairs from '@/assets/image/img_04_stairs_class_cover.png'
import classYoga from '@/assets/image/img_04_yoga_class_cover.png'
import { computed } from 'vue'
import { useEventsStore } from '@/stores/events.js'

export const useActivityImagesData = (type) => {

  const eventsStore = useEventsStore()

  const activityImagesMap = {
    events_health_exercises_walk: {
      registration: registrationWalk,
      registered: registeredWalk,
      class: classWalk
    },
    events_health_exercises_stair: {
      registration: registrationStairs,
      registered: registeredStairs,
      class: classStairs
    },
    events_health_exercises_yoga: {
      registration: registrationYoga,
      registered: registeredYoga,
      class: classYoga
    }
  }

  const titleImg = computed(() =>{ return {backgroundImage: `url(${activityImagesMap[eventsStore.eventMissionType][type]})`}})

  return { titleImg, activityImagesMap }
}