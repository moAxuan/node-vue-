<template>
  <footer>
    <div>
      <a href=""></a>
      <a href=""></a>
    </div>
    <ul>
      <li>
        <a href="">
          腾讯互动娱乐
        </a>
        <span>|</span>
        <a href="">
          服务条款
        </a>
        <span>|</span>
        <a href="">
          隐私保护指引
        </a>
        <span>|</span>
        <a href="">
          儿童隐私保护指引
        </a>
        <span>|</span>
        <a href="">
          腾讯游戏招聘
        </a>
        <span>|</span>
        <a href="">
          腾讯游戏客服
        </a>
        <span>|</span>
        <a href="">
          游戏列表
        </a>
        <span>|</span>
        <a href="">
          广告服务及商务合作
        </a>
      </li>
      <li>
        <a href="">腾讯公司版权所有</a>
      </li>
      <li>
        <p>COPYRIGHT © 1998 - 2020 TENCENT. ALL RIGHTS RESERVED.</p>
        <p>COPYRIGHT © 2012 Riot Games,Inc. ALL RIGHTS RESERVED.</p>
      </li>
      <li>
        <p>本网络游戏适合18+岁的用户使用；为了您的健康，请合理控制游戏时间。</p>
      </li>
      <li>
        <a href="">粤网文[2017]6138-1456号</a>
        <span>|</span>
        <a href="">（总）网出证（粤）字第057号</a>
      </li>
      <li>
        <p>批准文号：新出审字[2011]310号 |文网进字[2011] 004号 | 出版物号：ISBN 978-7-89989-145-2|全国文化市场统一举报电话：12318</p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width:100%;
  min-width: 1380px;
  height: auto;
  background: #e3e2e2;
  display: flex;
  padding:40px 0;
  margin:0 auto;
}
div {
  flex:2;
  display: flex;
  transform: translateY(50%);
}
ul {
 flex: 3;
}
div > a {
  display: block;
  background-image: url(//game.gtimg.cn/images/lol/v3/topfoot-spr.png);
  background-size: 405px 178px;
  background-repeat: no-repeat;
}
div > a:first-child {
  margin-left: 140px;
  width: 189px;
  height: 34px;
  background-position: -216px 0;
}
div > a:last-child {
  margin-left: 30px;
  width: 82px;
  height: 28px;
  background-position: -216px -84px;
}

ul > li > * {
  font-size:12px;
  font-weight: 400;
  color:#9f9378;
  line-height:24px;
}
ul > li > a:hover {
  text-decoration:underline;
}
</style>
