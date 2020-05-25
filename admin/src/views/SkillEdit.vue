<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}技能</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-row type="flex" style="flex-wrap: wrap">
        <el-col>
          <el-form-item label="名称">
            <el-input v-model="skill.name"></el-input>
          </el-form-item>
          <el-form-item label="图标">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="(res) => $set(this.skill, 'icon', res.url)"
            >
              <img v-if="skill.icon" :src="skill.icon" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="skill.introduce" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="小提示">
            <el-input v-model="skill.teamTips" type="textarea"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item style="margin-top: 1rem;">
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
      skill: {},
    };
  },
  methods: {
    afterUpload(res) {
      this.model.avatar = res.url;
    },
    async save() {
      if (this.id) {
        await this.$http.put(`rest/skills/${this.id}`, this.skill);
      } else {
        await this.$http.post("rest/skills", this.skill);
      }
      this.$router.push("/skill/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/skills/${this.id}`);
      this.skill = Object.assign({}, this.model, res.data);
    },
    // async fetchCategories() {
    //   const res = await this.$http.get(`rest/skills`);
    //   this.categories = res.data;
    // },
    // async fetchItems() {
    //   const res = await this.$http.get(`rest/items`);
    //   this.items = res.data;
    // },
  },
  created() {
    // this.fetchItems();
    // this.fetchCategories();
    this.id && this.fetch();
  },
};
</script>

<style></style>
