<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRaceStore } from "@/modules/race/stores/race";
import type { Horse } from "@/modules/race/stores/race";
import HorseImage from "@/modules/race/components/HorseImage/HorseImage.vue";
export default defineComponent({
  components: {
    HorseImage,
  },
  setup() {
    const raceStore = useRaceStore();

    const getCurrentRound = computed(() => {
      return raceStore.getRound;
    });

    function getPositionHorse(horse: Horse) {
      if (horse.position > 0) {
        const result = (horse.position / raceStore.getRound.distance) * 100;
        return result > 100 ? 100 : result;
      }
      return 0;
    }

    // @ts-ignore
    window.stores = { raceStore };
    return {
      raceStore,
      getCurrentRound,
      getPositionHorse,
    };
  },
});
</script>

<template>
  <div class="race">
    <div class="race__lap">
      <template v-if="getCurrentRound.horses.length > 0">
        <div
          v-for="(horse, index) in getCurrentRound.horses"
          :key="index"
          class="race__lap-line"
        >
          <div class="race-line">
            <div class="race-line__position">{{ index + 1 }}</div>
            <div class="race-line__line">
              <div class="race-line__horse-road">
                {{ horse.name }}
                <HorseImage
                  class="race-line__horse"
                  :fill="horse.color_code"
                  :style="`left:${getPositionHorse(horse)}%`"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div v-for="item in 10" :key="item" class="race__lap-line">
          <div class="race-line">
            <div class="race-line__position">{{ item }}</div>
            <div class="race-line__line">
              <HorseImage class="race-line__horse" fill="#000" />
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="race__info">
      <div class="race__info-name">{{ getCurrentRound.name }}</div>
      <div class="race__info-finish">Finish</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.race {
  padding-top: 1rem;
  &__lap {
    border-right: 2px solid red;
  }
  &__info {
    display: grid;
    grid-template-columns: 1fr auto;
    &-name {
      font-size: 20px;
      color: red;
    }
    &-finish {
      font-size: 20px;
      color: red;
    }
  }
}
.race-line {
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr;
  &__position {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border: 1px solid #fff;
    font-size: 22px;
    background-color: green;
    color: white;
    writing-mode: vertical-rl;
  }
  &__line {
    position: relative;
    border-top: 1px dashed #000;
    border-bottom: 1px dashed #000;
    padding-right: 50px;
  }
  &__horse-road {
    position: relative;
    width: 100%;
  }
  &__horse {
    position: absolute;
    z-index: -1;
  }
}
</style>
