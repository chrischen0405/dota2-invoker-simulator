<template>
  <div class="container" :class="isMobile ? 'mobile-container' : ''">
    <template>
      <div class="score-box">
        <span>正确次数：{{ totalRightTime }}</span>
        <span>当前连击：{{ comboTime }}</span>
      </div>
      <div class="time-box">
        <span>{{ time.toFixed(1) }}</span>
      </div>
      <div class="want-skill-box">
        <img v-if="wantSkillCode"
             :src="require(`@/assets/img/skill${wantSkillCode}.png`)"
             :alt="wantSkillCode">
        <p v-if="isEndGame" @click="startGame">点击开始训练</p>
      </div>
      <div class="video-box">
        <video
            v-if="(!isEndGame) && skillCode"
            autoplay="autoplay"
            preload="auto"
            playsinline
            :src="require(`@/assets/video/skill${skillCode}.mp4`)"></video>
      </div>
      <div class="my-key-list">
        <div v-for="(letter, index) in letterList"
             class="skill-box"
             :key="index">
          <img :src="require(`@/assets/img/skill${letter}.png`)" :alt="letter">
        </div>
        <div class="skill-box">
          <img v-if="skillCode"
               :src="require(`@/assets/img/skill${skillCode}.png`)"
               :alt="skillCode">
        </div>
      </div>
      <div class="operate-box">
        <div v-for="(letter, index) in btnList"
             class="skill-btn"
             @click="clickBtn(letter)"
             :key="index">
          <img :src="require(`@/assets/img/skill${letter}.png`)" :alt="letter">
          <span class="text" @click="editKeyCode(index)">
              {{ letterKeyList[index] ? keyToLetterMap[letterKeyList[index]] : '' }}
            </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import cheatMixin from '@/mixins/cheat'
import {
  keyToLetterMap,
  skillMap,
  allSkillList
} from '@/common/data'
import {getRandomNumber10} from '@/common/utils'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'game',
  mixins: [cheatMixin],
  props: {
    isEndGame: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isMobile: true,
      totalRightTime: 0, // 总共正确数
      comboTime: 0, // 连击数
      endTime: null, // 开始时间
      time: 30, // 倒计时
      timer: null, // 定时器
      wantSkillCode: '', // 需要的技能快捷键
      btnList: ['Q', 'W', 'E', 'R'], // 键盘按键
      isEditCode: false, // 是否在改建
      editCode: 0, // 暂存的按键code
      letterKeyList: [81, 87, 69, 82], // 改建按键码
      letterList: [], // 字母组合列表
      skillCode: '', // 生成的技能快捷键
      keyToLetterMap
    }
  },
  created() {
    this.changeWantSkillCode()
  },
  mounted() {
    const info = navigator.userAgent
    this.isMobile = /mobile/i.test(info)
    this.watchKeyBoard()
  },
  methods: {
    startGame () {
      this.$emit('startGame')
      this.totalRightTime = 0
      this.comboTime = 0
      this.time = 0
      this.endTime = new Date((new Date()).getTime() + 30000)
      this.runTime()
      // this.startAutoPlay(200)
    },
    runTime () {
      if (this.timer) return
      this.timer = window.setInterval(() => {
        this.time = (this.endTime - (new Date())) / 1000
        if (this.time <= 0) {
          this.time = 0
          this.endGame()
        }
      }, 100)
    },
    editKeyCode (index) {
      if (!this.isEndGame) return
      console.log(index, this.isEndGame)
      this.isEditCode = true
      this.editCode = this.letterKeyList[index]
      this.$set(this.letterKeyList, index, '')
    },
    endGame () {
      this.$emit('endGame', this.totalRightTime)
      window.clearInterval(this.timer)
      this.timer = null
    },
    watchKeyBoard () {
      document.onkeydown = e => {
        const key = e.keyCode
        if (this.isEditCode) {
          for (let i in this.letterKeyList) {
            if (this.letterKeyList[i] === '') {
              this.$set(this.letterKeyList, i, key)
              this.isEditCode = false
            }
          }
        }
        const keyIndex = this.letterKeyList.indexOf(key)
        if (keyIndex !== -1) {
          const letter = this.btnList[keyIndex]
          this.clickBtn(letter)
        }
      }
    },
    clickBtn (letter) { // 输入字母 Q W E R 表示不同技能
      if (this.isEndGame) return
      if (letter === 'R') { // 切技能
        if (this.letterList.length === 3) {
          this.skillCode = skillMap[this.letterList.join('')]
          this.completeSkill()
        }
      } else {
        this.pushLetter(letter)
      }
    },
    pushLetter (letter) {
      if (this.letterList.length === 3) {
        this.letterList.splice(0, 1)
      }
      this.letterList.push(letter)
    },
    completeSkill () {
      if (this.wantSkillCode === this.skillCode) {
        this.totalRightTime++
        this.comboTime++
        this.changeWantSkillCode()
      } else {
        this.comboTime = 0
      }
    },
    changeWantSkillCode () {
      let newSkillCode = allSkillList[getRandomNumber10()]
      // 和上个技能不同
      while (newSkillCode === this.wantSkillCode) {
        newSkillCode = allSkillList[getRandomNumber10()]
      }
      this.wantSkillCode = newSkillCode
    }
  }
}
</script>

<style scoped>
@import "../common/styles/game.css";
</style>