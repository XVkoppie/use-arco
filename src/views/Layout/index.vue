<script setup lang="ts">

</script>

<template>
<a-layout class="layout">
  <div>侧边栏</div>
  <a-layout class="main">
      <div>页头</div>
    <a-layout-content class="content">
      <div>内容</div>
      <div>内容</div>
      <div>内容</div>
      <div>内容</div>
      <div>内容</div>
      <div>内容</div>
      <div>内容</div>
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
  background-color: #ccc;
}
.main{
  margin-left: 200px;
  background-color: #ccc;
}
.content{
  padding: 24px;
  overflow-y: auto;
  margin-top: 60px;
  background-color: #fff;
}
</style>
