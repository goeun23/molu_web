<template>
  <section>
    <div class="gap2 gray-bg">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="row merged20" id="page-contents">
              <the-shortcuts />
              <!-- Shortcuts -->
              <!-- <the-recent-activity/> -->
              <!-- recent activites -->
              <!-- sidebar -->

              <div class="col-lg-6">
                <div class="central-meta">
                  <div class="frnds">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="active" href="#frends" data-toggle="tab"
                          >Juno</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="" href="#frends-req" data-toggle="tab"
                          >Luna</a
                        >
                      </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                      <ul class="nearby-contct">
                        <li>
                          <div
                            class="accordion"
                            id="accordion"
                            style="margin-top: 0; width: 100%"
                          >
                            <div class="card">
                              <div class="card-header" id="headingfive">
                                <h5 class="mb-0">
                                  <button
                                    class="btn btn-link"
                                    type="button"
                                    :aria-expanded="isExpand"
                                    @click="showExpand"
                                  >
                                    Give Rewards
                                  </button>
                                </h5>
                              </div>
                              <div class="collapse" :class="{ show: isExpand }">
                                <div class="card-body">
                                  <div class="editing-info">
                                    <h5 class="f-title">
                                      <i class="ti-info-alt"></i> Reward Details
                                    </h5>
                                    <form method="post">
                                      <div class="form-group half">
                                        <span>From {{ rewardObj.from }}</span>
                                        <select v-model="rewardObj.from">
                                          <option value="2">Juno</option>
                                          <option value="1">Luna</option>
                                        </select>
                                        <i class="mtrl-select"></i>
                                      </div>
                                      <div class="form-group half">
                                        <span>To</span>

                                        <select
                                          style="display: in !important"
                                          v-model="rewardObj.to"
                                        >
                                          <option value="2">Juno</option>
                                          <option value="1">Luna</option>
                                        </select>
                                      </div>

                                      <div class="form-group">
                                        <span>Count of Rewards</span>
                                        <select v-model="rewardObj.ea">
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                        </select>
                                      </div>
                                      <div class="form-group">
                                        <textarea
                                          v-model="rewardObj.reason"
                                          rows="4"
                                          id="textarea"
                                          required="required"
                                        ></textarea>
                                        <label
                                          class="control-label"
                                          for="textarea"
                                          >Description</label
                                        ><i class="mtrl-select"></i>
                                      </div>
                                      <div class="submit-btns">
                                        <button
                                          @click="saveReward"
                                          type="button"
                                          class="mtr-btn"
                                        >
                                          <span>Save</span>
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div class="tab-pane active fade show" id="frends">
                        <ul class="nearby-contct">
                          <li>
                            <div class="nearly-pepls">
                              <div class="pepl-info">
                                <h4>
                                  <a>🐻 주노짱 Reward Board</a>
                                </h4>
                                <span>{{ countofReward["2"] }}/30</span>
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
                                      index < countofReward['2']
                                        ? showDetails(index, 'juno')
                                        : () => false
                                    "
                                    :src="
                                      index <= countofReward['2']
                                        ? sticker
                                        : background
                                    "
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="tab-pane fade" id="frends-req">
                        <ul class="nearby-contct">
                          <li>
                            <div class="nearly-pepls">
                              <div class="pepl-info">
                                <h4>
                                  <a>🐻 루나짱 Reward Board</a>
                                </h4>
                                <span>{{ countofReward["1"] }}/30</span>
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
                                      index < countofReward['1']
                                        ? showDetails(index, 'luna')
                                        : () => false
                                    "
                                    :src="
                                      index <= countofReward['1']
                                        ? sticker
                                        : background
                                    "
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <button class="btn-view btn-load-more"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- sidebar -->
              <div id="reward-ui">luna</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { toRaw } from "vue";

import TheFeedList from "../components/newsFeed/TheFeedList.vue";
import TheFeedAdd from "../components/newsFeed/TheFeedAdd.vue";
import TheMyPage from "../components/newsFeed/TheMyPage.vue";
import TheShortcuts from "../components/newsFeed/TheShortcuts.vue";
export default {
  components: { TheFeedList, TheFeedAdd, TheMyPage, TheShortcuts },
  //public/images/sticker.png
  data() {
    return {
      dataReload: false,
      rewardBox: [],
      background: require(`../assets/images/sticker.png`),
      sticker: require(`../assets/images/color.jpeg`),
      countofReward: {
        1: 0, // j
        2: 0, // l
      },
      reward1: [],
      reward2: [],
      isExpand: false,
      rewardObj: {
        from: "1",
        to: "1",
        ea: "1",
        reason: "",
      },
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
    reload() {
      this.dataReload = !this.dataReload;
    },
    showExpand() {
      this.isExpand = !this.isExpand;
    },
    async saveReward() {
      return await this.$axios
        .get(
          `/v1/member/sticker/simple?to=${this.rewardObj.to}
          &from=${this.rewardObj.from}&reason=${encodeURIComponent(
            this.rewardObj.reason
          )}&ea=${this.rewardObj.ea}
          `
        )
        .then((response) => {
          const { result_message } = response.data;
          alert(result_message);
          this.rewardObj.reason = "";
          this.rewardObj.ea = "1";

          this.$forceUpdate();
        });
    },
    async getStickerStatus() {
      // 1 luna 2 juno
      await this.$axios.get(`/v1/member/sticker/1`).then((response) => {
        this.countofReward[1] = response.data.data.total_sticker_ea;
        this.reward1 = toRaw(response.data.data.sticker);
      });

      await this.$axios.get(`/v1/member/sticker/2`).then((response1) => {
        this.countofReward[2] = response1.data.data.total_sticker_ea;
        this.reward2 = toRaw(response1.data.data.sticker);
      });
    },
  },
  mounted() {
    this.getStickerStatus();
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
  grid-template-columns: repeat(5, 20%);
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