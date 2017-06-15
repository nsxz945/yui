<template>
  <div id="tabs">
    <div class="tabs-header">
      <ul>
        <li v-for="(item,index) in navList">
          <span @click="toggleTag(index)" :class="{active : (showTag === index)}">{{item.label}}</span>
        </li>
      </ul>
    </div>
      <div class="tabs-content">
          <slot></slot>
      </div>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  data() {
    return {
      navList: [],
      showTag: ''
    }
  },
  props: {
    defautTab: ''
  },
  methods: {
    getTabs() {
      return this.$children.filter(item => item.$options.name === 'pane')
    },
    updateNav() {
      this.navList = [];
      this.getTabs().forEach((pane, index) => {
        this.navList.push({
          label: pane.label,
          name: pane.currentName || index
        })
      })
    },
    toggleTag(id) {
      this.showTag = id
      this.getTabs().forEach((pane, index) => {
        pane.show = (index === id)
      })
    }
  },
  mounted() {
    this.updateNav();
    this.showTag = this.defautTab || 0;
    this.toggleTag(this.showTag)
  },
  watch: {
    activeKey() {
      this.updateNav()
    }
  }
}
</script>

<style lang="less" scoped>
@default-color: #EEEEEE;
@primary-color: #009688;
@success-color: #4caf50;
@info-color: #03a9f4;
@warning-color: #ff9829;
@error-color: #f44336;

#tabs {
  ul {
    list-style: none;
    display: flex;
    padding-left: 0;
    >li {
      margin-right: 5px;
    }
  }
  .pane {
    text-align: left;
  }
}
.tabs-content{
  position:relative;
}
span.active {
  color: @warning-color
}

span {
  position: relative;
}
span:after {
  content: '';
  display: block;
  width: 0;
  height: 3px;
  position: absolute;
  left: 0;
  background: @info-color;
  transition: all 0.4s ease-in-out;
}
span:hover {
  color: @info-color;
}
span:hover:after {
  width: 100%;
}
.pane{
   transition: all 0.4s ease-out
}

</style>
