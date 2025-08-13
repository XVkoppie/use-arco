<script lang="jsx">
import { computed, defineComponent, h, resolveComponent } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
  name:'SideBarItem',
  setup() {

    const router=useRouter()

    const routes=computed(()=>{
      return router.options.routes
    })
    console.log("🚀 ~ setup ~ routes:", routes.value)

    const renderSubMenu=()=>{
      function travel(_route,nodes=[]){
        if(_route){
          _route.forEach((element)=>{
            const {icon,title}=element.meta
            const node=
              element.children && element.children.length > 0 ? (
                //一级菜单
                <a-sub-menu key={element.name}
                title={title} icon={h(resolveComponent(icon))}>
                  {/* 子菜单递归渲染 */}
                  {travel(element.children)}
                </a-sub-menu>
              ) : (
                <a-menu-item key={element.path} >
                  <router-link to={element.path}>{title}</router-link>
                </a-menu-item>
              )
            nodes.push(node)
          })
        }
        return nodes
      }
      return travel(routes.value)
    }

    return () => (
      <a-menu theme="light" style="width: 200px; display: inline-block;" mode="inline">
        {renderSubMenu()}
      </a-menu>
    )
  }
})


</script>
<style scoped lang="scss">

</style>
