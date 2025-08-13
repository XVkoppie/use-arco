<script lang="jsx">
import { defineComponent, h, resolveComponent } from 'vue';


export default defineComponent({
  name:'SideBarItem',
  setup() {
    return () => (
      <a-menu theme="light" style="width: 200px; display: inline-block;" mode="inline">
        <a-sub-menu key="1" title="基础数据管理" icon={h(resolveComponent('HomeOutlined'))}>
          <a-menu-item key="11">机构管理</a-menu-item>
          <a-menu-item key="12">机构作业范围</a-menu-item>
          <a-menu-item key="13">运费管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2" title="车辆管理" icon={h(resolveComponent('CarOutlined'))}>
          <a-menu-item key="21">车型管理</a-menu-item>
          <a-menu-item key="22">车辆列表</a-menu-item>
          <a-menu-item key="23">回车管理</a-menu-item>
        </a-sub-menu>
      </a-menu>
    )
  }
})


</script>
<style scoped lang="scss">

</style>
