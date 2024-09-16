<script lang="ts">
import { defineComponent } from 'vue'
import { useRaceStore } from '@/modules/race/stores/race'

export default defineComponent({
  setup() {
    const raceStore = useRaceStore()

    // @ts-ignore
    window.stores = { raceStore }

    return {
      raceStore
    }
  }
})
</script>

<template>
  <div class="horse-list">
    <div class="horse-list__header">Horse List (1-20)</div>
    <table class="horse-list__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Condition</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(horse, index) in raceStore.getHorses" :key="index">
          <td>{{ horse.name }}</td>
          <td>{{ horse.condition }}</td>
          <td :style="`color:${horse.color_code}`">{{ horse.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.horse-list {
  height: calc(100vh - 52px);
  overflow-y: auto;
  &__header {
    position: sticky;
    top: 0;
    background-color: #f8ff78;
    padding: 0.5rem 1rem;
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
