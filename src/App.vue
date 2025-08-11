<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
const theme = {
  token: {
    colorPrimary: 'pink',
  }
}
</script>

<template>
  <a-config-provider :theme="theme" :locale="zhCN">
    <RouterView />
  </a-config-provider>
</template>

<style scoped>

</style>
