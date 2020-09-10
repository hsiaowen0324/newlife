<template>
  <div>
    <Layout />
    <el-container class="content">
      <el-main class="main">
        <div v-for="dorm in dormitem" :key="dorm.id">
        <el-row type="flex" justify="space-between">
            <div class="title px-5">{{dorm.name}}</div>
            <EditModal />
        </el-row>
        <el-divider></el-divider>
        <el-row type="flex" class="align-center">
          <div class="demo-image__preview">
            <el-image style="width:360px; height:230px" :src="url">
            </el-image>
          </div>
          <div class="content">
            <div class="phone">連絡電話:{{dorm.phone}}</div>
            <div class="open">營業時間:{{dorm.open}}</div>
            <div class="address">地址:{{dorm.address}}</div>
            <div class="tag-group">
              <span class="tag-group__title">關鍵字</span>
              <el-tag v-for="item in items" :key="item.label" :type="item.type" class="tag-mx-2">
                {{ item.label }}
              </el-tag>
            </div>
          </div>
        </el-row>
        <el-row type="flex" justify="space-between">
          <div class="second-title px-5">常見問題</div>
          <EditModal />
        </el-row>
        <el-divider></el-divider>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Layout from '../../../../layout/index'
import EditModal from './EditModal'
export default {
  components: {
    Layout,
    EditModal
  },
  mounted () {
    console.log(this.$route)
  },
  data () {
    return {
      dormitem: [{
        id: '1',
        name: '恩慈宿舍',
        phone: '03-265-5401',
        open: '3:00-17:00',
        address: '桃園市中壢區大仁五街47號'

      }
      ],
      items: [{
        type: 'info',
        label: '系上'
      },
      {
        type: 'info',
        label: '資管系'
      },
      {
        type: 'info',
        label: '系電'
      },
      {
        type: 'info',
        label: '系辦'
      }
      ],
      url: 'https://mnya.tw/yo/wp-content/uploads/947-20.jpg'
    }
  }
}

</script>
<style scoped>
  .el-main {
    margin-left: 11%;
    padding: 2% 5%
  }

  .title {
    font-size: 26px;
    padding-bottom: 5px;
  }

  .el-divider {
    margin: 15px
  }

  .ml-2 {
    margin-left: 5px;
  }

  .mx-2 {
    margin: 0px 10px;
  }

  .tag-mx-2 {
    margin: 0px 5px;
    font-size: 16px;
    color: black;
  }

  .tag-group__title {
    font-size: 18px;
  }

  .content {
    padding: 20px 10px;
    line-height: 35px;
    font-size: 16px;
  }

  .align-center {
    align-items: center;
  }

  .second-title {
    font-size: 24px;
  }

  .demo-image__preview {
    padding: 20px 50px;
  }

</style>
