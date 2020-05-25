<template>
  <div>
    <h1>皮肤列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>

      <el-table-column prop="" label="图标" >
        <!--加入下面的内容,scope.row代表这一行,img是显示这一行的哪个字段,我的是img,你的自己看下-->
        <template slot-scope="scope">
          <img :src="scope.row.icon" alt="" />
        </template>
      </el-table-column>

      <el-table-column prop="" label="背景图">
        <!--加入下面的内容,scope.row代表这一行,img是显示这一行的哪个字段,我的是img,你的自己看下-->
        <template slot-scope="scope" >
          <img :src="scope.row.img" alt="" style="width:120px;"/>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="皮肤名字"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/skin/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/skins");
      this.items = res.data;
      console.log(this.items);
    },
    remove(row) {
      this.$confirm(`是否确定要删除分类 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        await this.$http.delete(`rest/skins/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
  },
  created() {
    this.fetch();
  },
};
</script>
