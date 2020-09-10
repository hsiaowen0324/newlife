<template>
    <div class="ml-5">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
            v-for="(breadcrumb, idx) in breadcrumbList"
            :key="idx"
            @click="routeTo(idx)"
            :class="{'linked': !!breadcrumb.link}">
            {{ breadcrumb.name }}

            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
  }
}
</script>
<style>

a{
    color: black;
}
.el-breadcrumb{
    font-size: 18px;
    margin-left: 14%;
    margin-top:20px;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
color: black;
}
</style>
