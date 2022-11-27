<template>
  <section>
    <div class="gap2 gray-bg">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="row merged20" id="page-contents">
              <the-shortcuts />
              <!-- Shortcuts -->

              <div class="col-lg-8">
                <div class="central-meta">
                  <div class="frnds">
                    <ul class="nav nav-tabs">
                      <li
                        v-for="(member, index) in tabList"
                        :key="index"
                        class="nav-item"
                        @click="getStickerStatus(member)"
                      >
                        <a
                          :class="{ active: currentTab == member.key }"
                          data-toggle="tab"
                          >{{ member.name }}</a
                        >
                      </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                      <the-add-reward
                        :tabList="tabList"
                        @saveReward="saveReward"
                      />

                      <the-reward-detail
                        :reward="reward"
                        :rewardBox="rewardBox"
                        :tabList="tabList"
                        :currentTab="currentTab"
                        :total_sticker_ea="total_sticker_ea"
                      />

                      <the-reward-board
                        :rewardBox="rewardBox"
                        :tabList="tabList"
                        :currentTab="currentTab"
                        :total_sticker_ea="total_sticker_ea"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { toRaw } from "vue";

import TheShortcuts from "../components/newsFeed/TheShortcuts.vue";
import TheAddReward from "../components/RewardBoard/TheAddReward.vue";
import TheRewardBoard from "../components/RewardBoard/TheRewardBoard.vue";
import TheRewardDetail from "@/components/RewardBoard/TheRewardDetail.vue";
export default {
  components: { TheShortcuts, TheAddReward, TheRewardBoard, TheRewardDetail },
  data() {
    return {
      rewardBox: [],

      total_sticker_ea: 0,
      reward: [],
      reward2: [],
      isExpand: false,

      currentTab: 2,
      tabList: [
        {
          name: "Juno",
          key: 2,
        },
        {
          name: "Luna",
          key: 1,
        },
        // {
        //   name: "Miley",
        //   key: 3,
        // },
      ],
    };
  },
  methods: {
    async saveReward(rewardObj) {
      return await this.$axios
        .get(
          `/v1/member/sticker/simple?to=${rewardObj.to}
          &from=${rewardObj.from}&reason=${encodeURIComponent(
            rewardObj.reason
          )}&ea=${rewardObj.ea}
          `
        )
        .then((response) => {
          const { result_message } = response.data;
          alert(result_message);

          this.getStickerStatus();

          this.$forceUpdate();
        });
    },
    async getStickerStatus(member) {
      if (member) {
        this.currentTab = member.key;
      }

      await this.$axios
        .get(`/v1/member/sticker/${this.currentTab}`)
        .then((response) => {
          console.log(response, this.currentTab);
          this.total_sticker_ea = response.data.data.total_sticker_ea;
          this.reward = toRaw(response.data.data.sticker);
        });
    },
  },
  mounted() {
    this.getStickerStatus(this.tabList[0]);
    for (let i = 0; i < 30; i++) {
      this.rewardBox.push({
        idx: `box-${i + 1}`,
      });
    }
  },
};
</script>
    <style>
.box {
  align-items: center;

  color: #fff;
  border-radius: 5px;

  font-size: 150%;
  display: flex;
  justify-content: center;
}

.box:nth-child(even) {
  color: transparent;
}

.nearly-pepls {
  position: relative;
}

.wrapper {
  width: 100%;
  display: grid;
  grid-gap: 0.3%;
  grid-template-columns: repeat(5, 14%);
  justify-content: center;
  align-content: center;
  grid-template-rows: auto;
  grid-auto-flow: row;
}

select {
  display: inline-block !important;
}
.chosen-container {
  display: none !important;
}

.pepl-info {
  padding-bottom: 15px;
}
</style>