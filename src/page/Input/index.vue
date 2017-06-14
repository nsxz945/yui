<template>
  <div class="hello">
    <div style="width: 300px;margin:0 auto">
      default:
      <y-input placeholder="请输入" v-model="value1"></y-input>
      password:
      <y-input type="password" placeholder="请输入"></y-input>
      disabled:
      <y-input placeholder="请输入" disabled></y-input>
      size:
      <y-input placeholder="请输入" size="small"></y-input>
      </br>
      <y-input placeholder="请输入" size="large"></y-input>
    </div>
    <div @click="clg">获取</div>
  </div>
</template>
<script>
import Input from '../../components/Input';
export default {
  name: 'Input',
  data() {
    return {
      value1: ''
    }
  },
  components: {
    'y-input': Input
  },
  methods: {
    clg() {
      console.log(this.value1);
    }
  }
}
</script>
