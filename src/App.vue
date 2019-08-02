<template>
  <div id="app">
    <div class="content">
      <header>头部</header>
      <main> <router-view/></main>
      <footer>
        <router-link to="/">首页</router-link>
        <router-link to="/cart">购物车</router-link>
        <router-link to="/my">我的</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  outline: 0;
  text-decoration: none;
  box-sizing: border-box;
  color: #000;
}
html,body,#app {
  width: 100%;
  height: 100%;
}
.content{
   width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column
}
header{
  width: 100%;
  height: 50px;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
}
main{
  flex: 1;
  overflow: auto;
  background: skyblue;
}
footer{
  width: 100%;
  height: 50px;
  background: orange;
  display: flex;
}
footer>a{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
