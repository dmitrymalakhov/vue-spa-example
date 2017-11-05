<template>
  <el-menu class="el-menu" mode="horizontal">
    <router-link to="main">
      <el-menu-item index="1">
        Главная
      </el-menu-item>
    </router-link>
    <router-link to="portfolio">
      <el-menu-item index="2">
        Портфолио
      </el-menu-item>
    </router-link>
    <el-submenu index="3">
      <template slot="title">Методическая копилка</template>
      <el-menu-item index="3-1">Конспекты</el-menu-item>
      <el-menu-item index="3-2">Планирование</el-menu-item>
      <el-menu-item index="3-3">Проекты</el-menu-item>
      <el-menu-item index="3-4">Картотеки</el-menu-item>
      <el-menu-item index="3-5">Презентации</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">Для вас, родители</template>
      <el-menu-item index="4-1">Консультации</el-menu-item>
      <el-menu-item index="4-2">Разное</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">Моя группа</template>
      <el-menu-item index="5-1">Это мы!</el-menu-item>
      <el-menu-item index="5-2">Наши достижения</el-menu-item>
      <el-menu-item index="5-3">Творческая мастерская</el-menu-item>
    </el-submenu>
    <el-menu-item index="6">
      Фотогалерея
    </el-menu-item>
    <router-link to="contacts">
      <el-menu-item index="7">
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