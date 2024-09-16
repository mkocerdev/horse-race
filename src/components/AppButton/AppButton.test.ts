import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppButton from './AppButton.vue'

describe('AppButton', () => {
  it('should render', () => {
    const wrapper = mount(AppButton)

    //has button
    expect(wrapper.find('button').exists()).toBeTruthy()
  })
  it('should show label', async () => {
    const wrapper = mount(AppButton, {
      props: {
        label: 'Start'
      }
    })
    expect(wrapper.html()).toContain('Start')
  })
})
