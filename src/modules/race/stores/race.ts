import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash'
import RACE from './data/race.json'

export interface Horse {
  id: number
  name: string
  condition: Number
  color: string
  color_code: string
  position: number
  finished?: Boolean
}
export interface Round {
  id: number
  name: string
  distance: number
  horses: Horse[]
}
interface RaceState {
  isRaceStarted: Boolean
  isProgramGenerated: Boolean
  roundTimer: any
  roundIndex: Number
  horses: Horse[]
  rounds: Round[]
  results: Round[]
}

export const useRaceStore = defineStore({
  id: 'race',
  state: (): RaceState => ({
    isRaceStarted: false,
    isProgramGenerated: false,
    roundTimer: null,
    roundIndex: 1,
    horses: RACE.horses,
    rounds: cloneDeep(RACE.rounds),
    results: cloneDeep(RACE.rounds)
  }),
  getters: {
    getisRaceStarted: (state): Boolean => state.isRaceStarted,
    getHorses: (state): Array<Horse> => state.horses,
    getRounds: (state): Array<Round> => state.rounds,
    getRound: (state) => {
      return state.rounds.find((round) => round.id === state.roundIndex) || state.rounds[0]
    },
    getResults: (state): Array<any> => state.results
  },
  actions: {
    shuffledArray() {
      const horses = [...this.horses]
      horses.map((horse) => {
        horse.position = 0
      })
      return horses.sort(() => 0.5 - Math.random()).slice(0, 10)
    },
    generateProgram() {
      this.isProgramGenerated = true
      this.isRaceStarted = false
      this.roundIndex = 1
      this.rounds = this.rounds.map((round) => {
        round.horses = cloneDeep(this.shuffledArray())
        return round
      })
      this.results = cloneDeep(RACE.rounds)
    },
    startStopRace() {
      if (this.isProgramGenerated) {
        this.isRaceStarted = !this.isRaceStarted
        this.isRaceStarted ? this.startRace() : this.stopRace()
      }
    },
    startRace() {
      const setResultToHorse = (horse: Horse) => {
        const resultRound = this.results.find((round) => round.id === this.roundIndex)
        resultRound?.horses.push(horse)
      }
      this.roundTimer = setInterval(() => {
        const travelledHorses = this.getRound.horses.filter((horse) => !horse.finished)

        travelledHorses.map((horse) => {
          if (horse.position <= this.getRound.distance) {
            horse.position = Number(horse.position) + Number(horse.condition)
          } else {
            horse.finished = true
            setResultToHorse(horse)
          }
        })

        const allFinished = this.getRound.horses.every((horse) => horse.finished)
        if (allFinished) {
          clearInterval(this.roundTimer)
          if (Number(this.roundIndex) < Number(this.rounds.length)) {
            this.nextRace()
            this.startRace()
          }
        }
      }, 100)
    },
    stopRace() {
      clearInterval(this.roundTimer)
    },
    nextRace() {
      this.roundIndex = Number(this.roundIndex) + 1
    }
  }
})
