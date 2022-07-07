<template>
  <div id="app">
    <div class="container" :class="isMobile ? 'mobile-container' : ''">
      <div class="want-skill-box">
        <img v-if="wantSkillCode"
             :src="require(`@/assets/img/skill${wantSkillCode}.png`)"
             :alt="wantSkillCode">
      </div>
      <div class="video-box">
        <video
            v-if="skillCode"
            autoplay="autoplay"
            preload="auto"
            loop="loop"
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
    </div>
  </div>
</template>

<script>
import {
  allowKey,
  keyToLetterMap,
  skillMap
} from '@/common/data'

export default {
  name: 'App',
  data () {
    return {
      isMobile: true,
      wantSkillCode: 'Y',
      btnList: ['Q', 'W', 'E', 'R'],
      letterList: [],
      skillCode: ''
    }
  },
  mounted() {
    const info = navigator.userAgent
    this.isMobile = /mobile/i.test(info)
    this.watchKeyBoard()
  },
  methods: {
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
      if (letter === 'R') { // 切技能
        if (this.letterList.length === 3) {
          this.skillCode = skillMap[this.letterList.join('')]
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
    }
  }
}
</script>

<style>
@import "./common/styles/app.css";
</style>
