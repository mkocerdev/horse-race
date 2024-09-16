import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useRaceStore } from '@/modules/race/stores/race'
import { mount } from '@vue/test-utils'
import AppHeader from './AppHeader.vue'

describe('AppHeader', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })
  it('should render', () => {
    const wrapper = mount(AppHeader)
    //has header class
    expect(wrapper.classes()).toContain('app-header')
  })

  it('click generate button', async () => {
    const wrapper = mount(AppHeader)
    const raceStore = useRaceStore()

    const button = wrapper.find('.app-header__right > button:first-child')
    await button.trigger('click')

    expect(raceStore.getRounds[0].horses.length).toBe(10)
  })

  it('click start/pause button', async () => {
    const wrapper = mount(AppHeader)
    const raceStore = useRaceStore()

    const button = wrapper.find('.app-header__right > button:last-child')
    await button.trigger('click')

    expect(raceStore.isRaceStarted).toBe(false)
    if (raceStore.isProgramGenerated) {
      expect(raceStore.isRaceStarted).toBe(true)
    }
  })
})
