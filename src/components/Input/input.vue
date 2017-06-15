<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <input ref="input" :type="datatype" :class="inputClasses" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength" :readonly="readonly" :name="name" :value="currentValue" :number="number" :autofocus="autofocus" @keyup.enter="handleEnter" @focus="handleFocus" @blur="handleBlur" @input="handleInput" @change="handleChange">
      <i ref="icon" aria-hidden="true" :class="icon" @click="iconClick" v-show="hasInput && !readonly"></i>
    </template>
    <textarea v-else ref="textarea" :class="textareaClasses" :style="textareaStyles" :placeholder="placeholder" :disabled="disabled" :rows="rows" :maxlength="maxlength" :readonly="readonly" :name="name" :value="value" :autofocus="autofocus" @keyup.enter="handleEnter" @focus="handleFocus" @blur="handleBlur" @input="handleInput">
    </textarea>
    <label class="label" :class="{'active':isActive}" v-show="label">{{placeholder}}</label>
  </div>
</template>
<script>
import { oneOf } from '../../utils/utils.js'
import calcTextareaHeight from '../../utils/calcTextareaHeight.js'
const prefixCls = 'yui-input'

export default {
  name: 'Input',
  props: {
    type: {
      validator(value) {
        return oneOf(value, ['text', 'textarea', 'password']);
      },
      default: 'text'
    },
    label: {
      type: Boolean
    },
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large']);
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    rows: {
      type: [String, Number],
      default: 2
    },
    readonly: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    number: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      hasInput: false,
      isActive: false,
      datatype: this.type,
      isPassWord: '',
      prefixCls: prefixCls,
      prepend: true,
      append: true,
      slotReady: false,
      textareaStyles: {}
    }
  },
  created() {
    this._init();
  },
  mounted() {
    this.resizeTextarea();
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${prefixCls}-type`]: this.type,
          [`${prefixCls}-label`]: this.label
        }
      ];
    },
    inputClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    },
    textareaClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    },
    icon() {
      if (this.isPassWord && this.datatype === 'password') return 'fa fa-eye';
      if (this.isPassWord && this.datatype === 'text') return 'fa fa-eye-slash';
      if (!this.isPassWord && this.datatype === 'text') return 'fa fa-times-circle';
    }
  },
  methods: {
    _init() {
      this.isPassWord = this.datatype === 'password' ? true : false;
      if (this.value) this.hasInput = true;
    },
    iconClick() {
      if (this.isPassWord) {
        if (this.datatype === 'password') {
          this.datatype = 'text';
        } else {
          this.datatype = 'password';
        }
      } else {
        let value = ''
        this.$emit('input', value);
        this.setCurrentValue(value);
      }
    },
    handleEnter(event) {
      this.$emit('on-enter', event);
    },
    handleFocus(event) {
      this.isActive = true;
      this.$emit('on-focus', event);
    },
    handleBlur(event) {
      this.isActive = false;
      this.$emit('on-blur', event);
    },
    handleChange(event) {
      this.$emit('on-input-change', event);
    },
    handleInput(event) {
      this.hasInput = true;
      let value = event.target.value;
      if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit('input', value);
      this.setCurrentValue(value);
      this.$emit('on-change', event);
    },
    setCurrentValue(value) {
      if (value === '') this.hasInput = false;
      if (value === this.currentValue) return;
      this.$nextTick(() => {
        this.resizeTextarea();
      });
      this.currentValue = value;
    },
    resizeTextarea() {
      const autosize = this.autosize;
      if (!autosize || this.type !== 'textarea') {
        return false;
      }
      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;
      this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    }
  }
}
</script>
<style lang="less">
@import '../../../node_modules/font-awesome/css/font-awesome.min.css';
.fa {
  color: #ccc;
  position: absolute;
  top: 50%;
  margin-top: -8px;
  right: 5px;
}

input {
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 0em 0em 0em 0em;
  font: 13.3333px Arial;
  &::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #A9A9A9;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #A9A9A9;
    opacity: 1;
  }
  &::-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #A9A9A9;
  }
}

textarea {
  resize: none;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 0em 0em 0em 0em;
  font: 13.3333px Arial;
  &::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #ccc;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ccc;
    opacity: 1;
  }
  &::-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #ccc;
  }
}

.yui-input-wrapper {
  position: relative;
  input[type="text"],
  input[type="password"],
  textarea {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    line-height: 1.5;
    padding: 4px 25px 4px 7px;
    font-size: 12px;
    border: 1px solid #dddee1;
    border-radius: 4px;
    color: #495060;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    /*transition: all .2s ease-in-out;*/
    outline: 0;

    /* 鼠标覆盖样式 */
    &:hover {
      border-color: #85b7d9;
    }

    /* 选中样式 */
    &:focus {
      border: none;
      padding: 5px 25px 3px 8px;
      border-radius: 0;
      border-bottom: 2px solid #85b7d9;
      border-color: #85b7d9;
    }
  }
  input.yui-input-large {
    font-size: 14px;
    padding: 7px 7px;
    height: 36px;
    font: 15px Arial;
    &:focus {
      padding: 8px 8px 6px;
    }
  }

  input.yui-input-small {
    padding: 1px 7px;
    height: 24px;
    border-radius: 3px;
    font: 12px Arial;
    &:focus {
      padding: 2px 8px 0px;
    }
  }

  input[disabled] {
    background-color: #f3f3f3;
    opacity: 1;
    cursor: not-allowed;
    color: #ccc;
  }
}

.yui-input-label {
  padding-top: 15px;
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #A9A9A9;
    font-size: 0;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #A9A9A9;
    opacity: 1;
    font-size: 0;
  }
  input::-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #A9A9A9;
    font-size: 0;
  }
  .label {
    position: absolute;
    top: 18px;
    left: 8px;
    color: #ccc;
    transition: all .5s;
  }
  .label.active {
    top: 0px;
    left: 8px;
    color: #85b7d9;
    font-size: 5px;
  }
}
</style>
