<template>
  <el-menu class="el-menu" mode="horizontal">
    <router-link to="/main">
      <el-menu-item index="1">
        Главная
      </el-menu-item>
    </router-link>
    <router-link to="/portfolio">
      <el-menu-item index="2">
        Портфолио
      </el-menu-item>
    </router-link>
    <el-submenu index="3">
      <template slot="title">Методическая копилка</template>
      <router-link to="/methodical/synopsis">
        <el-menu-item index="3-1">Конспекты</el-menu-item>
      </router-link>
      <router-link to="/methodical/planning">
        <el-menu-item index="3-2">Планирование</el-menu-item>
      </router-link>
      <router-link to="/methodical/projects">
        <el-menu-item index="3-3">Проекты</el-menu-item>
      </router-link>
      <router-link to="/methodical/cards">
        <el-menu-item index="3-4">Картотеки</el-menu-item>
      </router-link>
      <router-link to="/methodical/presentations">
        <el-menu-item index="3-5">Презентации</el-menu-item>
      </router-link>
    </el-submenu>
    <router-link to="/parents">
      <el-menu-item index="4">
        Для вас, родители
      </el-menu-item>
    </router-link>
    <router-link to="/photogallery">
      <el-menu-item index="5">
        Фотогалерея
      </el-menu-item>
    </router-link>
    <router-link to="/contacts">
      <el-menu-item index="6">
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