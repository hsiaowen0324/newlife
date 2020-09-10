<template>
  <div class="form-signin">
    <div class="demo-image">
      <div class="block" v-for="fit in fits" :key="fit">
        <center><el-image style="width: 130px; height: 110px" :src="url" :fit="fit"></el-image></center>
      </div>
      <h1 class="title">IM資管新生活</h1>
    </div>
    <el-form :label-position="labelPosition" :model="LoginForm">
      <el-form-item label="Email">
        <el-input v-model="LoginForm.account"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="LoginForm.password"></el-input>
      </el-form-item>
    </el-form>
    <el-row>
        <center><el-button type="success">登入</el-button> </center>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'top',
      LoginForm: {
        account: '',
        password: ''
      },
      fits: ['contain'],
      url: 'https://i.imgur.com/N3e2OMA.png'
    }
  }
}

</script>
<style>
  @import 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap';

  html,
  body {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 700;
    background-color: #f5f5f5;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }

  .title {
    font-size: 28px;
    color: #548235;
    text-align: center;
    padding:15px;
  }

  .form-signin {
    width: 100%;
    max-width: 320px;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    margin: auto;
    display: block;
    margin-top: 8%;
  }
  .el-form-item__label {
    font-size: 16px;
    line-height: 30px;
    color:black;
    margin: 0px;
  }
  .el-form-item {
    margin:5px;
  }
  .el-button{
    font-size: 18px;
    margin-top:20px ;
    font-family: 'Noto Sans TC';
    font-weight: 700;
    padding: 10px;
  }

</style>
