<template>
  <div class="tab-pane active fade show">
    <ul class="nearby-contct">
      <li>
        <div class="nearly-pepls">
          <div class="pepl-info">
            <h4>
              <a
                >🐻 {{ tabList.find((x) => x.key == currentTab)?.name }} Reward
                Board</a
              >
            </h4>
            <span>{{ total_sticker_ea }}/30</span>
          </div>
        </div>
        <div class="nearly-pepls">
          <div class="wrapper">
            <div
              v-for="(item, index) in rewardBox"
              :key="index"
              :id="item.idx"
              class="box"
            >
              <img :src="index < total_sticker_ea ? sticker : background" />
            </div>
          </div>
        </div>
      </li>
    </ul>
    <button class="btn-view btn-load-more"></button>
  </div>
</template>

<script>
export default {
  props: {
    rewardBox: {
      type: Array,
      default: [],
    },
    total_sticker_ea: {
      type: Number,
      default: 0,
    },
    tabList: {
      type: Array,
      default: [],
    },
    currentTab: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      background:
        "https://molu-s3.s3.ap-northeast-1.amazonaws.com/images/sticker.png",
      sticker:
        "https://molu-s3.s3.ap-northeast-1.amazonaws.com/images/color.jpeg",
    };
  },
};
</script>