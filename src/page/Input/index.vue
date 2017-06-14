<template>
  <div class="hello">
    <div style="width: 300px;margin:0 auto">
      default:
      <y-input placeholder="请输入" v-model="value1"></y-input>
      password:
      <y-input type="password" placeholder="请输入" v-model="value2"></y-input>
      带默认值:
      <y-input placeholder="请输入" v-model="value3"></y-input>
      disabled:
      <y-input placeholder="请输入" disabled></y-input>
      size:
      <y-input placeholder="请输入" size="small"></y-input>
      </br>
      <y-input placeholder="请输入" size="large"></y-input>
      限制最大长度10:
      <y-input placeholder="请输入" maxlength="10"></y-input>
      只读：
      <y-input placeholder="请输入" v-model="value4" readonly></y-input>
      文本域：
      <y-input type="textarea" placeholder="请输入" rows="3"></y-input>
      文本域autosize：
      <y-input type="textarea" placeholder="请输入" rows="3" :autosize="{minRows:3}" v-model="value6"></y-input>
      所有事件:
      <y-input placeholder="请输入" v-model="value5" @on-enter="onEnter" @on-focus="onFocus" @on-blur="onBlur" @on-change="onChange"></y-input>
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
      value1: '',
      value2: '',
      value3: '123abc',
      value4: '123abc',
      value5: '',
      value6: ''
    }
  },
  components: {
    'y-input': Input
  },
  methods: {
    clg() {
      console.log(this.value1);
      console.log(this.value2);
    },
    onEnter() {
      console.log('enter');
    },
    onFocus() {
      console.log('Focus');
    },
    onBlur() {
      console.log('Blur');
    },
    onChange() {
      console.log('change')
    }
  }
}
</script>
