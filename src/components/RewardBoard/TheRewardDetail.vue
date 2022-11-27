<template>
  <div class="central-meta">
    <div class="onoff-options">
      <h6>
        <a>🐻 Reward Details 🐻</a>
      </h6>

      <form method="post">
        <div
          v-for="(message, index) in reward"
          :key="index"
          class="setting-row"
        >
          <span
            >✨{{ message.from_member_name }}가 🌻칭찬스티카
            {{ message.ea }}개🌻를 줬어요!✨</span
          >

          <p>{{ message.reason }}</p>

          <label for="switch00" data-on-label="ON" data-off-label="OFF"
            ><p>{{ timeset(message.created_at) }}</p></label
          >
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    reward: {
      type: Array,
      default: [],
    },
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

  methods: {
    timeset(created_at) {
      return this.$moment(created_at).fromNow();
    },
  },
};
</script>