<template>
  <div class="wrap">
    {{ hei }}
    <ul
      v-for="(pitem, index) in dataList"
      :key="index"
      :style="`height:${hei === 'auto' ? 'auto' : hei}px`"
      :class="`list ${selectIndex === index ? 'list_hei' : ''}`"
    >
      <template v-if="pitem.details.length > 3">
        <template v-if="selectIndex !== index">
          <li
            @click="open(index, pitem.details)"
            v-for="(item, ind) in pitem.details.slice(
              pitem.details.length - 3,
              pitem.details.length
            )"
            :key="ind"
            :style="`
        top:${
          selectIndex === index
            ? (100 + 10) * item.lastIndex
            : item.lastIndex * 10
        }px; 
        width:${selectIndex === index ? null : 300 - item.lastIndex * 20}px
        `"
          >
            {{ item.sendNickName }}
          </li>
        </template>
        <template v-else>
          <li
            @click="open(index, pitem.details)"
            v-for="(item, ind) in pitem.details"
            :key="ind"
            :style="`
        top:${
          selectIndex === index
            ? (100 + 10) * item.lastIndex
            : item.lastIndex * 10
        }px; 
        width:${selectIndex === index ? null : 300 - item.lastIndex * 20}px
        `"
          >
            {{ item.sendNickName }}
          </li>
        </template>
      </template>
      <template v-else>
        <li
          @click="open(index, pitem.details)"
          v-for="(item, ind) in pitem.details"
          :key="ind"
          :style="`
        top:${
          selectIndex === index
            ? (100 + 10) * item.lastIndex
            : item.lastIndex * 10
        }px; 
        width:${selectIndex === index ? null : 300 - item.lastIndex * 20}px
        `"
        >
          {{ item.sendNickName }}
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [],
      selectIndex: null,
      flag: false,
      flag1: false,
      hei: "auto",
    };
  },
  mounted() {
    let internaleNotic = [
      {
        sourceId: "OKR",
        noticeNum: 3,
        createType: "1",
        details: [
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时33分发布",
            sourceBusinessId: "20210322141300258",
            isIgnore: false,
            typeName: "OKR被@提醒",
            contentId: 7,
            msgId: 7,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 8,
            receiveTime: "2021-03-22 14:33:52",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "OKR被@提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRATRemind",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时31分发布",
            sourceBusinessId: "20210322141300257",
            isIgnore: false,
            typeName: "被对齐提醒",
            contentId: 6,
            msgId: 6,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 7,
            receiveTime: "2021-03-22 14:31:48",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "被对齐提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRAlignRemind",
          },
          {
            sendNickName: "系统通知",
            releaseTime: "2021年01月01日 14时28分发布",
            sourceBusinessId: "20210322141300253",
            isIgnore: false,
            typeName: "周期开始填报OKR",
            contentId: 5,
            msgId: 5,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 6,
            receiveTime: "2021-01-01 14:28:49",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "周期开始填报OKR",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "admin",
            typeId: "OKRPeriodFillIn",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时33分发布",
            sourceBusinessId: "20210322141300258",
            isIgnore: false,
            typeName: "OKR被@提醒",
            contentId: 7,
            msgId: 7,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 8,
            receiveTime: "2021-03-22 14:33:52",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "OKR被@提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRATRemind",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时31分发布",
            sourceBusinessId: "20210322141300257",
            isIgnore: false,
            typeName: "被对齐提醒",
            contentId: 6,
            msgId: 6,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 7,
            receiveTime: "2021-03-22 14:31:48",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "被对齐提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRAlignRemind",
          },
          {
            sendNickName: "系统通知",
            releaseTime: "2021年01月01日 14时28分发布",
            sourceBusinessId: "20210322141300253",
            isIgnore: false,
            typeName: "周期开始填报OKR",
            contentId: 5,
            msgId: 5,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 6,
            receiveTime: "2021-01-01 14:28:49",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "周期开始填报OKR",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "admin",
            typeId: "OKRPeriodFillIn",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时33分发布",
            sourceBusinessId: "20210322141300258",
            isIgnore: false,
            typeName: "OKR被@提醒",
            contentId: 7,
            msgId: 7,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 8,
            receiveTime: "2021-03-22 14:33:52",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "OKR被@提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRATRemind",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时31分发布",
            sourceBusinessId: "20210322141300257",
            isIgnore: false,
            typeName: "被对齐提醒",
            contentId: 6,
            msgId: 6,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 7,
            receiveTime: "2021-03-22 14:31:48",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "被对齐提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRAlignRemind",
          },
          {
            sendNickName: "系统通知",
            releaseTime: "2021年01月01日 14时28分发布",
            sourceBusinessId: "20210322141300253",
            isIgnore: false,
            typeName: "周期开始填报OKR",
            contentId: 5,
            msgId: 5,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 6,
            receiveTime: "2021-01-01 14:28:49",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "周期开始填报OKR",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "admin",
            typeId: "OKRPeriodFillIn",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时33分发布",
            sourceBusinessId: "20210322141300258",
            isIgnore: false,
            typeName: "OKR被@提醒",
            contentId: 7,
            msgId: 7,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 8,
            receiveTime: "2021-03-22 14:33:52",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "OKR被@提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRATRemind",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时31分发布",
            sourceBusinessId: "20210322141300257",
            isIgnore: false,
            typeName: "被对齐提醒",
            contentId: 6,
            msgId: 6,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 7,
            receiveTime: "2021-03-22 14:31:48",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "被对齐提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRAlignRemind",
          },
          {
            sendNickName: "系统通知",
            releaseTime: "2021年01月01日 14时28分发布",
            sourceBusinessId: "20210322141300253",
            isIgnore: false,
            typeName: "周期开始填报OKR",
            contentId: 5,
            msgId: 5,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 6,
            receiveTime: "2021-01-01 14:28:49",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "周期开始填报OKR",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "admin",
            typeId: "OKRPeriodFillIn",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时33分发布",
            sourceBusinessId: "20210322141300258",
            isIgnore: false,
            typeName: "OKR被@提醒",
            contentId: 7,
            msgId: 7,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 8,
            receiveTime: "2021-03-22 14:33:52",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "OKR被@提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRATRemind",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时31分发布",
            sourceBusinessId: "20210322141300257",
            isIgnore: false,
            typeName: "被对齐提醒",
            contentId: 6,
            msgId: 6,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 7,
            receiveTime: "2021-03-22 14:31:48",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "被对齐提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRAlignRemind",
          },
          {
            sendNickName: "系统通知",
            releaseTime: "2021年01月01日 14时28分发布",
            sourceBusinessId: "20210322141300253",
            isIgnore: false,
            typeName: "周期开始填报OKR",
            contentId: 5,
            msgId: 5,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 6,
            receiveTime: "2021-01-01 14:28:49",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "周期开始填报OKR",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "admin",
            typeId: "OKRPeriodFillIn",
          },
        ],
        sourceName: "OKR系统",
      },
      {
        sourceId: "week",
        noticeNum: 3,
        createType: "1",
        details: [
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时33分发布",
            sourceBusinessId: "20210322141300258",
            isIgnore: false,
            typeName: "OKR被@提醒",
            contentId: 7,
            msgId: 7,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 8,
            receiveTime: "2021-03-22 14:33:52",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "OKR被@提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRATRemind",
          },
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时31分发布",
            sourceBusinessId: "20210322141300257",
            isIgnore: false,
            typeName: "被对齐提醒",
            contentId: 6,
            msgId: 6,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 7,
            receiveTime: "2021-03-22 14:31:48",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "被对齐提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRAlignRemind",
          },
        ],
        sourceName: "OKR系统",
      },
      {
        sourceId: "week",
        noticeNum: 3,
        createType: "1",
        details: [
          {
            sendNickName: "刘恺丽",
            releaseTime: "2021年03月22日 14时33分发布",
            sourceBusinessId: "20210322141300258",
            isIgnore: false,
            typeName: "OKR被@提醒",
            contentId: 7,
            msgId: 7,
            msgDetail: null,
            receiveUserName: "wumeihong-jk",
            receiveId: 8,
            receiveTime: "2021-03-22 14:33:52",
            receiveNickName: "吴美红",
            msgContent: null,
            msgSubject: "OKR被@提醒",
            msgTitle: "周期[2021年1季度]",
            msgName: "周期[2021年1季度]",
            sendUserName: "liukaili1-jk",
            typeId: "OKRATRemind",
          },
        ],
        sourceName: "OKR系统",
      },
    ];

    internaleNotic = internaleNotic.map((item) => {
      return {
        ...item,
        details: this.formtData(item.details),
      };
    });
    console.log(internaleNotic);
    this.dataList = internaleNotic;
  },
  methods: {
    formtData(list) {
      return list.map((res, ind) => {
        return {
          lastIndex: list.length - (ind + 1),
          ...res,
        };
      });
    },
    open(index, detail) {
      if (this.selectIndex === index) {
        this.selectIndex = null;
        this.hei = "auto";
        return;
      }
      this.hei = detail.length * 120;
      this.selectIndex = index;
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
  height: auto;
  transition: 0.3s;
}

.list {
  position: relative;
  width: 300px;
  height: 120px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  background: #ccc;
}
/* .list li:first-child {
  background: red;
}
.list li:nth-child(2) {
  background: yellow;
}
.list li:nth-child(3) {
  background: green;
} */
</style>