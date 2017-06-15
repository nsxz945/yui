<template>
  <div id="app">
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/button">按钮</router-link>
        </li>
        <li>
          <router-link to="/input">输入框</router-link>
        </li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
        <li>按钮</li>
      </ul>
    </nav>
    <router-link to="/">
      <img src="./assets/logo.png">
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import '../static/styles/github.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.nav {
  width: 100%;
  height: 30px;
}

.nav ul {
  list-style: none;
}

.nav ul li {
  float: left;
  width: 60px;
  cursor: pointer;
}
</style>
