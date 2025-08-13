//图表组件注册成全局组件
import { DownCircleTwoTone,UserOutlined, InteractionTwoTone ,HomeOutlined,
  CarOutlined,BarChartOutlined,UsergroupDeleteOutlined,ScheduleOutlined,SendOutlined} from '@ant-design/icons-vue'

const icons=[DownCircleTwoTone, UserOutlined, InteractionTwoTone,
    HomeOutlined, CarOutlined, BarChartOutlined,
    UsergroupDeleteOutlined, ScheduleOutlined, SendOutlined]

export default{
  install(app) {
    icons.forEach(icon => {
      app.component(icon.displayName, icon)
    })
  }
}
