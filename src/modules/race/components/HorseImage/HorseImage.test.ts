import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HorseImage from './HorseImage.vue'
describe('HorseImage', () => {
  it('should render', () => {
    const wrapper = mount(HorseImage)

    //has button
    expect(wrapper.find('svg').exists()).toBeTruthy()
  })
  it('should show fill', async () => {
    const wrapper = mount(HorseImage, {
      props: {
        fill: '#000'
      }
    })
    expect(wrapper.attributes('fill')).toBe('#000')
  })
})
