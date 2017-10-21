<template>
  <el-menu class="el-menu" mode="horizontal">
    <router-link to="material">
      <el-menu-item index="1">Материалы</el-menu-item>
    </router-link>
    <el-submenu index="2">
      <template slot="title">Родителям</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
    <router-link to="about">
      <el-menu-item index="3">
        О проекте
      </el-menu-item>
    </router-link>
    <router-link to="contacts">
      <el-menu-item index="4">
        Контакты
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  name: 'el-nav-custom',
}
</script>