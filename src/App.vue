<template>
  <div id="app">
    <game
        ref="game"
        :is-end-game="isEndGame"
        @startGame="startGame"
        @endGame="endGame"></game>
  </div>
</template>

<script>
import Game from '@/components/game'

export default {
  name: 'App',
  components: {
    Game
  },
  data () {
    return {
      isEndGame: true, // 是否结束游戏，结束不可操作
    }
  },
  methods: {
    startGame () {
      this.isEndGame = false
    },
    endGame (totalRightTime) {
      this.isEndGame = true
      alert(`正确次数：${totalRightTime}`)
    }
  }
}
</script>

<style>

</style>
