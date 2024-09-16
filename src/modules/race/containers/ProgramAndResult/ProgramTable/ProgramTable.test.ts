import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ProgramTable from './ProgramTable.vue'
describe('ProgramTable', () => {
  it('should render', () => {
    const wrapper = mount(ProgramTable)

    //has button
    expect(wrapper.find('.program-list').exists()).toBeTruthy()
  })

  it('should show fill', async () => {
    const wrapper = mount(ProgramTable, {
      props: {
        program: [
          {
            id: 1,
            name: '1st lap - 1200m',
            distance: 1200,
            horses: [
              {
                id: 20,
                name: 'Harmony',
                condition: 70,
                color: 'Fuchsia',
                color_code: '#FF00FF',
                position: 0
              }
            ]
          }
        ]
      }
    })

    expect(wrapper.html()).toContain('Harmony')
  })
})
