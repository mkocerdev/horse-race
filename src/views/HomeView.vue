<script lang="ts">
import { defineComponent } from 'vue'
import { useRaceStore } from '@/modules/race/stores/race'

import AppHeader from '@/components/AppHeader/AppHeader.vue'
import HorseList from '@/modules/race/containers/HorseList/HorseList.vue'
import ProgramAndResults from '@/modules/race/containers/ProgramAndResult/ProgramAndResults.vue'
import RaceRound from '@/modules/race/containers/RaceRound/RaceRound.vue'

export default defineComponent({
  components: { AppHeader, HorseList, ProgramAndResults, RaceRound },

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
  <header>
    <AppHeader />
  </header>
  <main class="app">
    <div class="app__left">
      <HorseList />
    </div>
    <div class="app__content">
      <RaceRound />
    </div>
    <div class="app__right">
      <ProgramAndResults />
    </div>
  </main>
</template>

<style lang="scss">
.app {
  display: grid;
  grid-template-columns: 350px 1fr 400px;
  gap: 15px;
}
</style>
