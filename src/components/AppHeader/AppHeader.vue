<script lang="ts">
import { defineComponent } from 'vue'
import AppButton from '@/components/AppButton/AppButton.vue'
import { useRaceStore } from '@/modules/race/stores/race'
export default defineComponent({
  components: { AppButton },
  setup() {
    const raceStore = useRaceStore()

    // @ts-ignore
    window.stores = { raceStore }

    function generateProgram() {
      raceStore.generateProgram()
    }
    function startStopRace() {
      raceStore.startStopRace()
    }

    return {
      generateProgram,
      startStopRace,
      raceStore
    }
  }
})
</script>
<template>
  <div class="app-header">
    <div class="app-header__left">Horse Racing</div>
    <div class="app-header__right">
      <AppButton
        ref="refGenerateButton"
        class="app-header__right-button"
        label="GENERATE PROGRAM"
        @click="generateProgram"
      />
      <AppButton ref="refStartStopButton" label="START / PAUSE" @click="startStopRace" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  border: 1px solid #b0b0b0;
  background-color: #ef9a9a;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__right {
    &-button {
      margin-right: 1.5rem;
    }
  }
}
</style>
