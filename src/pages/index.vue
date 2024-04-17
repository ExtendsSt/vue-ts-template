<script setup lang="ts">
import { test } from '~/apis/user'

const r = ref<string>()
test().then((res) => {
  r.value = res
})
</script>

<template>
  <div>
    <div class="h-screen w-screen flex-center flex-col text-center">
      <div>开发中 测试打包 罗哥是真的无聊</div>
      <div>{{ r }}</div>
      <div>
        © 2023-2024 laogewen.cn 版权所有 <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2024044706号-1</a>
      </div>
    </div>
  </div>
</template>
