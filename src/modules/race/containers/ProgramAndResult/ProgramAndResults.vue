<script lang="ts">
import { defineComponent } from 'vue'
import { useRaceStore } from '@/modules/race/stores/race'
import ProgramTable from './ProgramTable/ProgramTable.vue'

export default defineComponent({
  components: {
    ProgramTable
  },
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
  <div class="program">
    <div class="program__list">
      <div class="program__list-header">Program</div>
      <ProgramTable :program="raceStore.getRounds" />
    </div>
    <div class="program__list">
      <div class="program__list-header program__list-header--green">Result</div>
      <ProgramTable :program="raceStore.getResults" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.program {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 52px);
  overflow-y: auto;

  &__list {
    &-header {
      position: sticky;
      top: 0;
      background-color: #57aeed;
      padding: 0.5rem 1rem;
      &--green {
        background-color: #57ed91;
      }
    }
  }
}
</style>
