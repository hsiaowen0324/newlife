<template>
 <div>
    <div class="container-fluid px-0">
        <Navbar/>
        <Sidebar/>
        <Breadcrumb/>
    </div>
</div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
export default {
  name: 'index',
  components: {
    Navbar,
    Sidebar,
    Breadcrumb
  }
}
</script>
<style>

</style>
