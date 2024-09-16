import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useRaceStore } from '@/modules/race/stores/race'
import { mount } from '@vue/test-utils'
import RaceRound from './RaceRound.vue'

describe('RaceRound', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })
  it('should render', () => {
    const wrapper = mount(RaceRound)

    //has button
    expect(wrapper.find('.race__lap-line').exists()).toBeTruthy()
  })
  it('load horses', async () => {
    const raceStore = useRaceStore()

    if (raceStore.getRound.horses.length > 0) {
      expect(raceStore.getRound.horses.length).toBe(10)
    }
  })
})
