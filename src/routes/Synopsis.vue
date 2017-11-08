 <template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="Название">
    </el-table-column>
    <el-table-column
      width="100"
      fixed="right"
      label="Действие">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleClick(scope.$index, scope.row)"
        >
          Открыть
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

 <script>
  const linksMap = {
    0: 'https://docs.google.com/document/d/1hdXsmQxiUj36_OLi58c55kLeZ1EwnYLdFV_XoA3srjM/edit?usp=sharing',
    1: 'https://docs.google.com/document/d/1SGP5C3zA47F6N57psiS7bD_p6Ihuxj0VAAFaXOIDAf0/edit?usp=sharing',
  }

  export default {
    methods: {
      handleClick(index) {
        window.open(linksMap[index]);
      }
    },
    data() {
      return {
        tableData: [
          {
            title: 'НОД "Нам на улице не страшно"',
          },
          {
            title: 'Конспект дидактической игры "Светофор"',
          },
        ],
      };
    }
  }
</script>