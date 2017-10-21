<template>
  <el-container>
    <el-header height="350">
      <el-row>
        <el-col :span="18">
          <div class="grid-content bg-purple-dark">
            <el-nav-custom />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="brand-name">
            <div style="color: orange;">Воспитатель</div>
            <div style="color: green;">.Online</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="introduce-image" />
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <router-view />
          </div>
        </el-col>
      </el-row> 
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'root'
}
</script>

<style scoped>
.el-menu {
  font-family: sans-serif, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.introduce-image {
  margin-top: 30px;
  height: 170px;
  background-image: url('assets/introduce-image.png')
}

.brand-name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  height: 60px;
  text-transform: uppercase;
  font-size: 30px;
}

.brand-name div {
  font-family: sans-serif, Helvetica, Arial;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 900px) {
  .brand-name {
    font-size: 12px;
  }
}

@media (max-width: 1200px) {
  .brand-name {
    font-size: 18px;
  }
}
</style>
