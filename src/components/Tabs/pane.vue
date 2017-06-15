<template>
  <transition name="slide-fade">
    <div class="pane" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'pane',
  props: {
    label: ''
  },
  data() {
    return {
      show: ''
    }
  }
}
</script>
<style scoped>
.pane {
  border-radius: 20px;
  border: 2px solid #7a5d2c;
  box-shadow: 7px 8px 20px 0px rgba(0,0,0,0.52);
}

.slide-fade-enter-active {
  transition: all .8s ease-in;
  position: absolute;
}

.slide-fade-leave-active {
  transition: all .3s ease-out;
  position: absolute;
  transform: translateX(10px);
  opacity: 0;
  position: absolute;
}

.slide-fade-enter {
  transform: translateX(-10px);
  opacity: 0;
  position: absolute;
}
</style>
