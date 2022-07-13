import {
    skillMap
} from '@/common/data'

export default {
    methods: {
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
        }
    }
}