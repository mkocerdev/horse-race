import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useRaceStore } from '@/modules/race/stores/race'
import { mount } from '@vue/test-utils'
import HorseList from './HorseList.vue'

describe('HorseList', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })
  it('should render', () => {
    const wrapper = mount(HorseList)

    //has button
    expect(wrapper.find('.horse-list').exists()).toBeTruthy()
  })
  it('load horses', async () => {
    const raceStore = useRaceStore()

    expect(raceStore.getHorses.length).toBe(20)
  })
})
