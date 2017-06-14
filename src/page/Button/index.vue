<template>
  <div class="hello">
    <div>
      <y-button type="default" ripple>Default</y-button>
      <y-button type="primary" ripple>Primary</y-button>
      <y-button type="info" ripple>Info</y-button>
      <y-button type="success" ripple>Success</y-button>
      <y-button type="warning" ripple>Warning</y-button>
      <y-button type="error" ripple>Error</y-button>
    </div>
    <div>
      <y-button type="default" shape="circle">Default</y-button>
      <y-button type="primary" shape="circle">Primary</y-button>
      <y-button type="info" shape="circle">Info</y-button>
      <y-button type="success" shape="circle">Success</y-button>
      <y-button type="warning" shape="circle">Warning</y-button>
      <y-button type="error" shape="circle">Error</y-button>
    </div>
    <div>
      <y-button type="default" size="big" ripple>Default
        <span>some info</span>
      </y-button>
      <y-button type="primary" size="big" ripple>Primary
        <span>some info</span>
      </y-button>
      <y-button type="info" size="big" ripple>Info
        <span>some info</span>
      </y-button>
      <y-button type="success" size="big" ripple>Success
        <span>some info</span>
      </y-button>
      <y-button type="warning" size="big" ripple>Warning
        <span>some info</span>
      </y-button>
      <y-button type="error" size="big" ripple>Error
        <span>some info</span>
      </y-button>
    </div>
    <div>
      <y-button type="default" long>Default</y-button>
      <y-button type="primary" long>Primary</y-button>
      <y-button type="info" long>Info</y-button>
      <y-button type="success" long>Success</y-button>
      <y-button type="warning" long>Warning</y-button>
      <y-button type="error" long>Error</y-button>
    </div>
  </div>
</template>

<script>
import Button from '../../components/Button';
export default {
  name: 'Button',
  data() {
    return {}
  },
  components: {
    'y-button': Button
  }
}
</script>
