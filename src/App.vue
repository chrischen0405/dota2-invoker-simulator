<template>
  <div id="app">
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
              v-if="skillCode"
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
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import {
  allowKey,
  keyToLetterMap,
  skillMap,
  allSkillList
} from '@/common/data'
import {getRandomNumber10} from '@/common/utils'

export default {
  name: 'App',
  data () {
    return {
      isMobile: true,
      totalRightTime: 0, // 总共正确数
      comboTime: 0, // 连击数
      endTime: null, // 开始时间
      time: 0, // 倒计时
      timer: null, // 定时器
      isEndGame: true, // 是否结束游戏，结束不可操作
      wantSkillCode: '', // 需要的技能快捷键
      btnList: ['Q', 'W', 'E', 'R'], // 键盘按键
      letterList: [], // 字母组合列表
      skillCode: '' // 生成的技能快捷键
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
      this.totalRightTime = 0
      this.comboTime = 0
      this.time = 0
      this.endTime = new Date((new Date()).getTime() + 30000)
      this.isEndGame = false
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
    endGame () {
      this.isEndGame = true
      window.clearInterval(this.timer)
      this.timer = null
      alert(`正确次数：${this.totalRightTime}`)
    },
    watchKeyBoard () {
      document.onkeydown = e => {
        const key = e.keyCode
        if (allowKey.includes(key)) {
          const letter = keyToLetterMap[key]
          this.clickBtn(letter)
        }
      }
    },
    clickBtn (letter) {
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
    },
    startAutoPlay (time) { // 作弊自动玩
      this.autoplay(time)
      window.setInterval((time) => {
        this.autoplay(time)
      }, time)
    },
    autoplay (time) {
      if (this.isEndGame) return
      let flag = false
      for (let key in skillMap) {
        if (flag) return
        if (skillMap[key] === this.wantSkillCode) {
          flag = true
          const keyList = key.split('')
          // 每个按键之间增加间隔模仿真人按键
          window.setTimeout(() => {
            this.clickBtn(keyList[0])
          }, Math.floor(time / 4))
          window.setTimeout(() => {
            this.clickBtn(keyList[1])
          }, Math.floor(time / 2))
          window.setTimeout(() => {
            this.clickBtn(keyList[2])
          }, Math.floor(time / 4 * 3))
          window.setTimeout(() => {
            this.clickBtn('R')
          }, Math.floor(time))
        }
      }
    },

  }
}
</script>

<style>
@import "./common/styles/app.css";
</style>
