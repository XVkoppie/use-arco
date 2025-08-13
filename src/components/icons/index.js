//图表组件注册成全局组件
import { DownCircleTwoTone, InteractionTwoTone ,HomeOutlined,CarOutlined} from '@ant-design/icons-vue'

const icons=[DownCircleTwoTone, InteractionTwoTone, HomeOutlined, CarOutlined]

export default{
  install(app) {
    icons.forEach(icon => {
      app.component(icon.displayName, icon)
    })
  }
}
