<template>
  <div :class="wrapClasses">
    <input ref="input" :type="type" :class="inputClasses" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength" :readonly="readonly" :name="name" :value="currentValue" :number="number" :autofocus="autofocus" @keyup.enter="handleEnter" @focus="handleFocus" @blur="handleBlur" @input="handleInput" @change="handleChange">
    <transition name="fade">
      <i ref="icon" aria-hidden="true" :class="icon" v-if="icon" @click="iconClick" v-show="hasInput"></i>
    </transition>
  </div>
</template>
<script>
import { oneOf } from '../../utils/utils.js'
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
      type: Number
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
      type: Number,
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
      prefixCls: prefixCls,
      prepend: true,
      append: true,
      slotReady: false,
      textareaStyles: {}
    }
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${prefixCls}-type`]: this.type
         // [`${prefixCls}-group`]: this.prepend || this.append,
         // [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append) && !!this.size,
         // [`${prefixCls}-group-with-prepend`]: this.prepend,
         // [`${prefixCls}-group-with-append`]: this.append,
         // [`${prefixCls}-hide-icon`]: this.append  // #554
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
    icon() {
      if (this.type === 'password') {
        return 'fa fa-eye-slash'
      } else {
        return 'fa fa-times-circle'
      }
    }
  },
  methods: {
    iconClick() {
      if (this.icon === 'fa fa-eye-slash') {
        this.type = 'text';
      } else if (this.icon === 'fa fa-times-circle') {
        let value = ''
        this.$emit('input', value);
        this.setCurrentValue(value);
      }
    },
    handleEnter(event) {
      this.$emit('on-enter', event);
    },
    handleIconClick(event) {
      this.$emit('on-click', event);
    },
    handleFocus(event) {
      this.$emit('on-focus', event);
    },
    handleBlur(event) {
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
      this.currentValue = value;
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
  right: 10px;
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

.yui-input-wrapper {
  position: relative;
  input[type="text"],
  input[type="password"] {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dddee1;
    border-radius: 4px;
    color: #495060;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
    outline: 0;

    /* 鼠标覆盖样式 */
    &:hover {
      border-color: #85b7d9;
    }

    /* 选中样式 */
    &:focus {
      border: none;
      padding: 5px 8px;
      border-radius: 0;
      border-bottom: 1px solid #85b7d9;
      border-color: #85b7d9;
    }
  }
  input.yui-input-large {
    font-size: 14px;
    padding: 7px 7px;
    height: 36px;
    &:focus {
      padding: 8px 8px;
    }
  }

  input.yui-input-small {
    padding: 1px 7px;
    height: 24px;
    border-radius: 3px;
    &:focus {
      padding: 2px 8px;
    }
  }

  input[disabled] {
    background-color: #f3f3f3;
    opacity: 1;
    cursor: not-allowed;
    color: #ccc;
  }
}
</style>
