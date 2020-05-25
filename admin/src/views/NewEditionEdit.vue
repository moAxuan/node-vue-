<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}版本信息</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="版号">
        <el-input v-model="model.edition"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="小背景图">
        <!-- :headers="getAuthHeaders()" -->
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="大背景图">
        <!-- :headers="getAuthHeaders()" -->
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload2"
        >
          <img v-if="model.img" :src="model.img" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="跳转路径">
        <el-input v-model="model.url"></el-input>
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
    afterUpload(res) {
      this.$set(this.model, "icon", res.url);
      this.model.icon = res.url;
    },
    afterUpload2(res) {
      this.$set(this.model, "img", res.url);
      this.model.img = res.url;
    },
    async save() {
      if (this.id) {
        await this.$http.put(`rest/editions/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/editions", this.model);
      }
      this.$router.push("/edition/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/edition/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>
