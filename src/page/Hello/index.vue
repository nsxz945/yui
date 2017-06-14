<template>
  <div class="hello">
    一套基于 Vue2.0 的 UI 组件库
    <div>
      <a href="https://github.com/tclyjy/yui">github</a>
    </div>
  </div>
</template>
<script>
import Button from '../../components/Button';
export default {
  name: 'Input',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Button
  }
}
</script>
