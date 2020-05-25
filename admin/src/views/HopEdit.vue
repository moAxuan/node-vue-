<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}热门活动</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="商城类型需填">
        <el-input v-model="model.type"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

      <el-form-item label="跳转链接 (URL)">
        <el-input v-model="model.url"></el-input>
      </el-form-item>
      <el-form-item label="图片" style="margin-top: 0.5rem;">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="(res) => $set(model, 'image', res.url)"
        >
          <img v-if="model.image" :src="model.image" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="model.des"></el-input>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-input type="date" v-model="model.endTime"></el-input>
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
      model: {},
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/hops/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/hops", this.model);
      }
      this.$router.push("/hop/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
      // console.log(this.model)
    },
    async fetch() {
      const res = await this.$http.get(`rest/hops/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>
