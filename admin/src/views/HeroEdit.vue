<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="data" type="border-card">
        <el-tab-pane label="基础信息" name="data">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <!--  -->
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.icon" :src="model.icon" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item of categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物理攻击力">
            <el-rate
              style="margin-top:0.6rem"
              :max="9"
              show-score
              v-model="model.scores.ad"
            ></el-rate>
          </el-form-item>
          <el-form-item label="魔法攻击力">
            <el-rate
              style="margin-top:0.6rem"
              :max="9"
              show-score
              v-model="model.scores.ap"
            ></el-rate>
          </el-form-item>
          <el-form-item label="防御能力">
            <el-rate
              style="margin-top:0.6rem"
              :max="9"
              show-score
              v-model="model.scores.tc"
            ></el-rate>
          </el-form-item>
          <el-form-item label="上手难度">
            <el-rate
              style="margin-top:0.6rem"
              :max="9"
              show-score
              v-model="model.scores.difficulty"
            ></el-rate>
          </el-form-item>

          <el-form-item label="技能">
            <el-select v-model="model.skills" multiple>
              <el-option
                v-for="item of skill"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="皮肤">
            <el-select v-model="model.skins" multiple>
              <el-option
                v-for="item of skin"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-button size="small" @click="model.usageTips.push({})">
              <i class="el-icon-plus"></i> 添加使用技巧
            </el-button>
            <el-row type="flex" style="flex-wrap: wrap">
              <el-col v-for="(item, i) in model.usageTips" :key="i">       
                <el-form-item >
                  <el-input v-model="item.tips"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    size="small"
                    type="danger"
                    @click="model.usageTips.splice(i, 1)"
                    >删除</el-button
                  >
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <!-- <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item> -->
          <el-form-item label="对抗技巧">
            <el-button size="small" @click="model.battleTips.push({})">
              <i class="el-icon-plus"></i> 添加对抗技巧
            </el-button>
            <el-row type="flex" style="flex-wrap: wrap">
              <el-col v-for="(item, i) in model.battleTips" :key="i">      
                <el-form-item >
                  <el-input v-model="item.tips"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    size="small"
                    type="danger"
                    @click="model.battleTips.splice(i, 1)"
                    >删除</el-button
                  >
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="背景故事">
            <el-input type="textarea" v-model="model.backTips"></el-input>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
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
      categories: [],
      skin: [],
      skill: [],
      model: {
        name: "",
        icon: "",
        scores: {
          difficult: 0,
        },
        usageTips:[],
        battleTips: [],
      },
    };
  },
  methods: {
    afterUpload(res) {
      this.model.icon = res.url;
    },
    async save() {
      if (this.id) {
        await this.$http.put(`rest/heroes/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/heroes", this.model);
      }
      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
    async fetchSkins() {
      const res = await this.$http.get(`rest/skins`);
      this.skin = res.data;
    },
    async fetchSkills() {
      const res = await this.$http.get(`rest/skills`);
      this.skill = res.data;
    },
  },
  created() {
    this.fetchSkins();
    this.fetchCategories();
    this.fetchSkills();
    this.id && this.fetch();
  },
};
</script>

<style></style>
