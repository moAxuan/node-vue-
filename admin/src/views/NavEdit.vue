<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}导航位</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="一级导航标题">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="一级英文标题" > 
        <el-input v-model="model.Ename" ></el-input>
      </el-form-item>
      <el-form-item label="一级导航路径" > 
        <el-input v-model="model.url" ></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})">
          <i class="el-icon-plus"></i> 添加二级导航
        </el-button>
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="24" v-for="(item, i) in model.items" :key="i">
            <el-form-item label="跳转链接 (URL)">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="二级导航标题">
              <el-input v-model="item.subName"></el-input>
            </el-form-item>
            <el-form-item label="icon">
              <el-input v-model="item.icon"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                size="small"
                type="danger"
                @click="model.items.splice(i, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {
        items: [],
      },
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/navs/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/navs", this.model);
      }
      this.$router.push("/nav/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/navs/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>
