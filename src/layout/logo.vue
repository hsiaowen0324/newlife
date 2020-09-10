<template>
   <el-link href="#" class=" navmargin">
       <el-row type="flex" class="logo">
          <el-image style="width: 55px; height: 45px" :src="url" class="logoImg"></el-image>
          <div class="title">IM資管新生活</div>
       </el-row>
      </el-link>
</template>
<script>
export default {
  data () {
    return {
      url: 'https://i.imgur.com/N3e2OMA.png'
    }
  }
}
</script>
<style scoped>
.logoImg,.el-link{
    font-size: 22px;
    color:#548235;
}
.logo{
    align-items: center;
    margin-left: 20px;
}
.el-link:hover{
    color:#548235;
}
.title{
 margin-left: 10px;
}
</style>
