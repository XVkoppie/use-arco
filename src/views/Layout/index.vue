<script setup lang="ts">
import AppsideBar from './components/AppsideBar.vue'
</script>

<template>
<a-layout class="layout">
  <AppsideBar/>
  <a-layout class="main">
      <div>页头</div>
    <a-layout-content class="content">
      <div>内容</div>
    </a-layout-content>
    <a-layout-footer>
      <div>页脚</div>
    </a-layout-footer>
  </a-layout>
</a-layout>
</template>

<style scoped lang="scss">
.layout{
  min-height: 100vh;
}

.content{
  padding: 24px;
  overflow-y: auto;
  margin-top: 60px;
  background-color: #fff;
}
</style>
