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
                                <span>{{ countofReward["0"] }}/30</span>
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
                                    :src="
                                      index < countofReward['0']
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
                                    :src="
                                      index < countofReward['1']
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
        0: 10,
        1: 8,
      },
      isExpand: true,
      rewardObj: {
        from: "1",
        to: "1",
        ea: "1",
        reason: "",
      },
    };
  },
  methods: {
    reload() {
      this.dataReload = !this.dataReload;
    },
    showExpand() {
      this.isExpand = !this.isExpand;
    },
    async saveReward() {
      console.log(this.rewardObj);

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
  },
  mounted() {
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
  grid-gap: 10px;
  grid-template-columns: repeat(5, 90px);
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
</style>