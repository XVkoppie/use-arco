//图表组件注册成全局组件
import { DownCircleTwoTone, InteractionTwoTone } from '@ant-design/icons-vue'

const icons=[DownCircleTwoTone, InteractionTwoTone]

export default{
  install(app) {
    icons.forEach(icon => {
      app.component(icon.displayName, icon)
    })
  }
}
