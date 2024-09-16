<script lang="ts">
import { defineComponent, toRef } from 'vue'
import type { Round } from '@/modules/race/stores/race'

export default defineComponent({
  props: {
    program: {
      type: Array<Round>
    }
  },
  setup(props) {
    const data = toRef(props, 'program')
    return { data }
  }
})
</script>

<template>
  <div class="program-list">
    <div v-for="round in data" :key="round.id">
      <div class="program-list__title">{{ round.name }}</div>
      <table class="program-list__table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(horse, index) in round.horses" :key="index">
            <th>{{ index + 1 }}</th>
            <th :style="`color:${horse.color_code}`">{{ horse.name }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.program-list {
  &__title {
    background-color: #ef9a9a;
    padding: 0rem 1rem;
  }
  &__table {
    width: 100%;
    border-spacing: 0;
    text-align: left;
    thead {
      background-color: #e7e7e7;
    }
  }
  table,
  th,
  td {
    border: 1px solid #c3c3c3;
  }
}
</style>
