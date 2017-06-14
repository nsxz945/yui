<template>
  <button :class="classes" :ripple="ripple" :long="long">
    <span v-if="showSlot" ref="slot">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import { oneOf } from '../../utils/utils.js'
const prefixCls = 'yui-btn'
export default {
  name: 'Button',
  props: {
    type: {
      validator(value) {
        return oneOf(value, ['default', 'primary', 'success', 'info', 'warning', 'error']);
      }
    },
    shape: {
      validator(value) {
        return oneOf(value, ['circle']);
      }
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'big', 'normal']);
      }
    },
    ripple: Boolean,
    long: Boolean
  },
  data() {
    return {
      showSlot: true
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-long`]: this.long,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`ripple`]: this.ripple != null && this.ripple
          // [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
        }
      ];
    }
  },
  methods: {
    click() {
      // 触发组件中定义的click
      this.$emit('click')
    }
  }
}
</script>
<style lang="less" scoped>
/*颜色变量*/

@default-color: #EEEEEE;
@primary-color: #009688;
@success-color: #4caf50;
@info-color: #03a9f4;
@warning-color: #ff9829;
@error-color: #f44336;

/*button默认样式*/

button.yui-btn {
  display: inline-block;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 2px;
  position: relative;
  padding: 8px 30px;
  margin: 10px 1px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0;
  will-change: box-shadow, transform;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  background: transparent;
  background-color: @default-color;
  color: rgba(0, 0, 0, 0.87);
  outline: 0 none !important;
  /*button 扩展样式*/
  &.yui-btn-default {
    background-color: @default-color;
    color: rgba(0, 0, 0, 0.87);
  }
  &.yui-btn-primary {
    background-color: @primary-color;
    color: rgba(255, 255, 255, 0.84);
  }
  &.yui-btn-success {
    background-color: @success-color;
    color: rgba(255, 255, 255, 0.84);
  }
  &.yui-btn-info {
    background-color: @info-color;
    color: rgba(255, 255, 255, 0.84);
  }
  &.yui-btn-warning {
    background-color: @warning-color;
    color: rgba(255, 255, 255, 0.84);
  }
  &.yui-btn-error {
    background-color: @error-color;
    color: rgba(255, 255, 255, 0.84);
  }
  &.yui-btn-circle {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
  }
  &.yui-btn-big {
    padding: 0 40px;
    padding-top: 6px;
    height: 45px;
    text-transform: uppercase;
    font: bold 18px/18px Arial, sans-serif;
    span span {
      display: block;
      text-transform: none;
      font: italic normal 12px/18px Georgia, sans-serif;
      text-shadow: 1px 1px 1px rgba(255, 255, 255, .12);
    }
  }
  &.yui-btn-long {
    width: 90%;
    margin: 5px auto;
    display: block;
  }
}

button.yui-btn:active {
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}

/*button 扩展样式*/

.ripple {
  position: relative;
  overflow: hidden
}


/*button 水波纹点击效果*/

.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform .5s, opacity 1s
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: .2;
  transition: 0s
}
</style>
