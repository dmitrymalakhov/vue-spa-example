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
    0: 'https://docs.google.com/document/d/1JgsCwpkFo-JKs1M9rnYLdqzNjNMQS_IzUciDoc3xBoc/edit?usp=sharing',
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
            title: 'Тематический план на 2017 год ср.гр.',
          },
        ],
      };
    }
  }
</script>