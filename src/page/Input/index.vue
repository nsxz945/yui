<template>
  <div class="hello">
    <div style="width: 400px;margin:0 auto">
      default:
      <pre>
            <code class="html">&lt;y-input placeholder="请输入"&gt;&lt;/y-input&gt;</code>
          </pre>
      <y-input placeholder="请输入" v-model="value1"></y-input>
      password:
      <pre>
            <code class="html">&lt;y-input type="password" placeholder="请输入"&gt;&lt;/y-input&gt;</code>
          </pre>
      <y-input type="password" placeholder="请输入" v-model="value2"></y-input>
      带默认值:
      <pre>
            <code class="html">&lt;y-input placeholder="请输入" v-model="value"&gt;&lt;/y-input&gt;</code>
          </pre>
      <y-input placeholder="请输入" v-model="value3"></y-input>
      disabled:
      <pre>
            <code class="html">&lt;y-input placeholder="请输入" disabled&gt;&lt;/y-input&gt;</code>
          </pre>
      <y-input placeholder="请输入" disabled></y-input>
      size:
      <pre>
            <code class="html">&lt;y-input placeholder="请输入" size="small"&gt;&lt;/y-input&gt;</code>
          </pre>
      <y-input placeholder="请输入" size="small"></y-input>
      </br>
      <pre>
          <code class="html">&lt;y-input placeholder="请输入" size="large"&gt;&lt;/y-input&gt;</code>
        </pre>
      <y-input placeholder="请输入" size="large"></y-input>
      限制最大长度10:
      <pre>
          <code class="html">&lt;y-input placeholder="请输入" maxlength="10"&gt;&lt;/y-input&gt;</code>
        </pre>
      <y-input placeholder="请输入" maxlength="10"></y-input>
      只读：
      <pre>
          <code class="html">&lt;y-input placeholder="请输入" readonly&gt;&lt;/y-input&gt;</code>
        </pre>
      <y-input placeholder="请输入" v-model="value4" readonly></y-input>
      label:
      <pre>
          <code class="html">&lt;y-input placeholder="请输入" label&gt;&lt;/y-input&gt;</code>
        </pre>
      <y-input placeholder="姓名" label></y-input>
      文本域：
      <pre>
          <code class="html">&lt;y-input type="textarea" placeholder="请输入" rows="3"&gt;&lt;/y-input&gt;</code>
        </pre>
      <y-input type="textarea" placeholder="请输入" rows="3"></y-input>
      文本域autosize：
      <pre>
          <code class="html">&lt;y-input type="textarea" placeholder="请输入" rows="3" :autosize="{minRows:3}"&gt;&lt;/y-input&gt;</code>
        </pre>
      <y-input type="textarea" placeholder="请输入" rows="3" :autosize="{minRows:3}" v-model="value6"></y-input>
      所有事件:
      <pre>
          <code class="html">&lt;y-input placeholder="请输入" @on-enter="onEnter" @on-focus="onFocus" @on-blur="onBlur" @on-change="onChange"&gt;&lt;/y-input&gt;</code>
        </pre>
      <y-input placeholder="请输入" v-model="value5" @on-enter="onEnter" @on-focus="onFocus" @on-blur="onBlur" @on-change="onChange"></y-input>
    </div>
  </div>
</template>
<script>
import Input from '../../components/Input';
import $ from 'jquery'
import hljs from '../../../static/highlight.pack.js'
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
  mounted() {
    hljs.initHighlightingOnLoad();
    $(function () {
      console.log($('pre code'))
      $('pre code').each(function (i, block) {
        hljs.highlightBlock(block)
      })
    })
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

