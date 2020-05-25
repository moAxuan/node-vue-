<template>
  <transition name="fade">
    <div @mouseenter="show = true" @mouseleave="show = false" class="contant" v-show="show">
      <div class="div">
        <nav class="nav1">
          <nav v-for="(item, index) in navDate" :key="index">
            <a
              :href="items.url"
              v-for="(items, idx) in navDate[index].items"
              :key="idx"
            >
              <span>
                <span v-if="items.icon" :style="{background:items.icon == 'N' ? 'orange' : 'red'}" style="padding:1px 2px;border-radius:50%;">{{ items.icon }}</span>
                {{ items.subName }}
              </span>
            </a>
          </nav>
        </nav>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["show", "navDate"],
};
</script>

<style scoped>
.contant {
  width: 100%;

  transition: all 0.3s;
  position: absolute;

  left: 50%;
  transform: translate(-50%);
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
}
.div {
  margin: 0 auto;
  width: 90%;
  min-width: 1300px;
  display: flex;
}
.contant > .div > .nav1 {
  width: 52%;
  /* position: relative; */
  margin-left: 175px;
  display: flex;
  padding: 30px 0;
}
.div > .nav1 > nav {
  flex: 1;
}
.nav1 > nav > * {
  text-align: center;
  line-height: 2.4em;
}
.nav1 > nav > * > * {
  display: block;
  font-size: 1.2em;
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  height: 300px;
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0px;
  opacity: 0;
}
</style>
