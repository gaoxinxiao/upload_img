<template>
  <div class="wrap">
    <ul
      v-for="(v, index) in listWrap"
      :key="index"
      :class="`list ${selectIndex === index ? 'list_hei' : ''}`"
    >
      <li
        @click="open(index)"
        v-for="(item, ind) in list"
        :key="ind"
        :style="`top:${
          selectIndex === index ? (100 + 10) * item : item * 10
        }px`"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [2, 1, 0],
      listWrap: [1, 2,3],
      selectIndex: null,
      flag: false,
      flag1: false,
    };
  },
  methods: {
    open(index) {
      if (this.selectIndex === index) {
        this.selectIndex = null;
        return;
      }
      this.selectIndex = index;
    },
    open1() {
      this.flag1 = !this.flag1;
    },
  },
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.list_hei {
  height: 330px !important;
}

.list {
  position: relative;
  width: 300px;
  height: 120px;
  transition: 0.3s;
}
.list li {
  width: 300px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 15px;
  margin-top: 10px;
  position: absolute;
  cursor: pointer;
  transition: 0.3s;
}
.list li:first-child {
  background: red;
}
.list li:nth-child(2) {
  background: yellow;
}
.list li:nth-child(3) {
  background: green;
}
.list1 {
  position: relative;
  width: 300px;
  height: 120px;
  margin-top: 10px;
}

.list1 li {
  width: 300px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 15px;
  margin-top: 10px;
  position: absolute;
  cursor: pointer;
  transition: 0.3s;
}

.list1 li:first-child {
  background: red;
}
.list1 li:nth-child(2) {
  background: yellow;
}
.list1 li:nth-child(3) {
  background: green;
}
</style>