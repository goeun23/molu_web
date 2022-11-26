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
              <img
                @click="
                  index < total_sticker_ea
                    ? showDetails(index, 'luna')
                    : () => false
                "
                :src="index < total_sticker_ea ? sticker : background"
              />
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
      background: require(`@/assets/images/sticker.png`),
      sticker: require(`@/assets/images/color.jpeg`),
    };
  },
  methods: {
    showDetails(index, name) {
      const rewardObj =
        name == "juno" ? this.reward2[index] : this.reward1[index];

      const { created_at, from_member_name, reason, ea } = rewardObj;
      alert(
        `${this.$moment(created_at)
          .startOf("hour")
          .fromNow()},\n ✨${from_member_name}가 ${reason}(해)서 🌻칭찬스티카🌻를 ${ea}개를 줬어요.✨`
      );
    },
  },
};
</script>