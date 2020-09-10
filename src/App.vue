<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style>

@import 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap';

  html,
  body {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 700;
    margin:0px
  }
  .el-button,.el-form-item__label {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 700;
  }
  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
.el-table th{
  background-color: #E4E7ED;
  color: black;
}

</style>
