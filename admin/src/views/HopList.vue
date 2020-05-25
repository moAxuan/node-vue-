<template>
  <div>
    <h1>活动列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="name" label="名称" width="130"></el-table-column>
      <el-table-column prop="image" label="banner" width="220">
        <template slot-scope="scope">
          <img :src="scope.row.image" alt="" width="170">
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="开始时间" width="200"></el-table-column>
      <el-table-column prop="endTime" label="结束时间" width="200"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/hop/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/hops");
      this.items = res.data;
      console.log(this.items)
    },
    remove(row) {
      this.$confirm(`是否确定要删除 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/hops/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

