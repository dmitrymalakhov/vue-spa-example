 <template>
  <el-table
    :data="tableData"
    border
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
    0: 'https://drive.google.com/drive/folders/1s-khlvvQSHYge7ZunxY1atTc7ZZayrN1?usp=sharing',
    1: 'https://drive.google.com/drive/folders/1GLomK_3qAnC6t7ywQ4ejAHJhKBTt6kol?usp=sharing',
    2: 'https://drive.google.com/drive/folders/1bxq_1Ry_E7kPEjIgNEV8tPY_y6BECa1w?usp=sharing',
    3: 'https://drive.google.com/drive/folders/1ovYpyasYN2DqK9yOI4EP7FkstmKjddX7?usp=sharing',
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
            title: 'Обувь для детского сада',
          },
          {
            title: 'О семье и семейных традициях',
          },
          {
            title: 'Памятка родителям от ребенка',
          },
          {
            title: 'Ребенок на улице',
          },
        ],
      };
    }
  }
</script>