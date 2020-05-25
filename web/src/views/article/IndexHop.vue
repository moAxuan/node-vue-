<template>
  <section>
    <header>
      <h2>热门活动</h2>
      <ul class="hopNav">
        <li
          v-for="(item, index) in desc"
          :key="index"
          :class="{ active: descIndex == index }"
          @mouseenter="dupType(index, item)"
        >
          {{ item }}
        </li>
        <li>更多<span>·-></span></li>
      </ul>
    </header>
    <ul style="display:flex;justify-content:flex-start;margin-top:15px;">
      <li
        v-for="(item, index) in descVal"
        :key="index"
        style="background:white;position:relative;cursor:pointer;margin:0 15px 0 0;"
        class="tu"
      >
        <img :src="item.image" alt="" />
        <p>{{ item.name }}</p>
        <a href="">{{ item.endTime | data }}</a>
        <a href="" class="tuchen">
          <div>
            <h6>{{ item.name }}</h6>
            <p>{{ item.des }}</p>
            <p>
              {{ item.createdAt | beginTime }} - {{ item.endTime | endTime }}
            </p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    data(val) {
      if (!val) {
        return "长期活动";
      }
      let endTime = dayjs(val).format("YYYY-MM-DD");
      return dayjs(endTime).diff(dayjs(undefined), "day") + 1 + "天后结束";
    },
    beginTime(val) {
      return dayjs(val).format("YYYY-MM-DD");
    },
    endTime(val) {
      return dayjs(val).format("YYYY-MM-DD");
    },
  },
  data() {
    return {
      desc: ["正在进行", "商城特惠", "长期活动"],
      descIndex: 0,
      descVal: [
        {
          title: "银河战争通行证",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585723105_uploadnewsImg.jpg",
          time: "15天后结束",
          desc: "正在进行",
        },
        {
          title: "银河战争通行证",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585723105_uploadnewsImg.jpg",
          time: "15天后结束",
          desc: "正在进行",
        },
        {
          title: "银河战争通行证",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585723105_uploadnewsImg.jpg",
          time: "15天后结束",
          desc: "正在进行",
        },
        {
          title: "克隆大作战",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585312544_uploadnewsImg.jpg",
          time: "15天后结束",
          desc: "正在进行",
        },
        {
          title: "真实伤害 赛娜 至臻",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1581563070_uploadnewsImg.jpg",
          time: "13天后结束",
          desc: "正在进行",
        },
        {
          title: "峡谷勇者2020",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585626613_uploadnewsImg.jpg",
          time: "15天后结束",
          desc: "正在进行",
        },
        {
          title: "银河战争通行证",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585723105_uploadnewsImg.jpg",
          time: "长期活动",
          desc: "商城特惠",
        },
        {
          title: "克隆大作战",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585312544_uploadnewsImg.jpg",
          time: "'长期活动'",
          desc: "商城特惠",
        },
        {
          title: "真实伤害 赛娜 至臻",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1581563070_uploadnewsImg.jpg",
          time: "长期活动",
          desc: "商城特惠",
        },
        {
          title: "峡谷勇者2020",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585626613_uploadnewsImg.jpg",
          time: "长期活动",
          desc: "商城特惠",
        },
        {
          title: "银河战争通行证",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585723105_uploadnewsImg.jpg",
          time: "长期活动",
          desc: "长期活动",
        },
        {
          title: "克隆大作战",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585312544_uploadnewsImg.jpg",
          time: "长期活动",
          desc: "长期活动",
        },
        {
          title: "真实伤害 赛娜 至臻",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1581563070_uploadnewsImg.jpg",
          time: "长期活动",
          desc: "长期活动",
        },
        {
          title: "峡谷勇者2020",
          img:
            "https://ossweb-img.qq.com/images/clientpop/act/lol_1585626613_uploadnewsImg.jpg",
          time: "长期活动",
          desc: "长期活动",
        },
      ],
    };
  },
  mounted() {
    this.dupType();
    this.fetch();
  },
  methods: {
    async dupType(index = 0, type = "正在进行") {
      this.descIndex = index;
      let res = await this.$http.get(`rest/hops/${type}`);
      this.descVal = res.data;
    },
    async fetch() {
      let res = await this.$http.get("rest/hops");
      this.descVal = res.data;
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  min-width: 820px;
  /* border:1px solid; */
}
section > header {
  display: flex;
}
section > header > h2 {
  /* position: absolute; */
  padding-left: 10px;
  width: auto;
  height: 28px;
  top: 5px;
  left: -6px;
  box-sizing: border-box;
  color: #0b0b0b;
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  border-left: 5px solid #1da6ba;
}
section > header > ul.hopNav {
  display: flex;
  margin-left: 20px;
  flex: 1;
  border-bottom: 1px #e0e2e2 solid;
}
section > header > ul.hopNav > li {
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  min-width: 50px;
  height: 28px;
  overflow: visible;
  color: #676767;
}

section > header > ul.hopNav > li:last-child {
  font-size: 12px;
  margin-left: auto;
  color: #7ea1a6;
  line-height: 25px;
}
section > header > ul.hopNav > li.active {
  font-weight: 700;
  color: #1da6ba;
  border-bottom: 1px solid;
}
section > header > ul.hopNav > li:last-child:hover {
  color: #1da6ba;
  font-weight: 600;
}
section > header > ul.hopNav > li:last-child:hover > span {
  animation: move 1s infinite;
}
ul > li > p {
  margin-bottom: 40px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 6px 10px 4px 10px;
  font-size: 13px;
  color: #424242;
  line-height: 18px;
  text-align: left;
}
ul > li > a {
  position: absolute;
  font-size: 12px;
  color: #1da6ba;
  left: 10px;
  bottom: 6px;
}
.tu {
  transition: all 0.3s;
}

.tu:hover {
  transform: translateY(-5px);
}
.tu:hover p {
  color: #1da6ba;
}
.tuchen {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 74%;
  display: none;
}
.tuchen > div {
  width:100%;
  text-align: center;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
}
.tuchen > div > h6 {
  color:orange;
  font-size: 13px;
  margin-bottom: 3px;
}
.tu:hover .tuchen {
  display:block;
  background: rgba(0, 0, 0, 0.4);
}
.tuchen:hover > div > p {
  font-size: 10px;

  color:gray;
}
@keyframes move {
  0% {
    margin-left: 0;
  }
  50% {
    margin-left: 6px;
  }
  100% {
    margin-left: 0;
  }
}
</style>
