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
                        <span>{{ countofReward["0"] }}</span>
                      </li>
                      <li class="nav-item">
                        <a class="" href="#frends-req" data-toggle="tab">Luna</a
                        ><span>{{ countofReward["1"] }}</span>
                      </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div class="tab-pane active fade show" id="frends">
                        <ul class="nearby-contct">
                          <li>
                            <div class="nearly-pepls">
                              <div class="pepl-info">
                                <h4>
                                  <a>🐻 주노짱 Reward Board</a>
                                </h4>
                                <span>{{ countofReward["0"] }}/30</span>

                                <a
                                  href="#"
                                  title=""
                                  class="add-butn"
                                  data-ripple=""
                                  >Reward to Juno</a
                                >
                              </div>
                            </div>
                          </li>
                          <li>
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
                                <a
                                  href="#"
                                  title=""
                                  class="add-butn"
                                  data-ripple=""
                                  >Reward to Luna</a
                                >
                              </div>
                            </div>
                          </li>
                          <li>
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
    };
  },
  methods: {
    reload() {
      this.dataReload = !this.dataReload;
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
</style>