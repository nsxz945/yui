<template>
  <div class="hello">
    <div>
      <Button type="default" ripple>Default</Button>
      <Button type="primary" ripple>Primary</Button>
      <Button type="info" ripple>Info</Button>
      <Button type="success" ripple>Success</Button>
      <Button type="warning" ripple>Warning</Button>
      <Button type="error" ripple>Error</Button>
    </div>
    <div>
      <Button type="default" shape="circle">Default</Button>
      <Button type="primary" shape="circle">Primary</Button>
      <Button type="info" shape="circle">Info</Button>
      <Button type="success" shape="circle">Success</Button>
      <Button type="warning" shape="circle">Warning</Button>
      <Button type="error" shape="circle">Error</Button>
    </div>
    <div>
      <Button type="default" size="big" ripple>Default<span>some info</span></Button>
      <Button type="primary" size="big" ripple>Primary<span>some info</span></Button>
      <Button type="info" size="big" ripple>Info<span>some info</span></Button>
      <Button type="success" size="big" ripple>Success<span>some info</span></Button>
      <Button type="warning" size="big" ripple>Warning<span>some info</span></Button>
      <Button type="error" size="big" ripple>Error<span>some info</span></Button>
    </div>
    <div>
      <Button type="default" long>Default</Button>
      <Button type="primary" long>Primary</Button>
      <Button type="info" long>Info</Button>
      <Button type="success" long>Success</Button>
      <Button type="warning" long>Warning</Button>
      <Button type="error" long>Error</Button>
    </div>
  </div>
</template>

<script>
import Button from '../../components/Button';
export default {
  name: 'hello',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
