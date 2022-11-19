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
                <the-feed-add @reload="reload" />
                <the-feed-list :dataReload="dataReload" />
              </div>
              <the-my-page />
              <!-- sidebar -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheFeedList from "./TheFeedList.vue";
import TheFeedAdd from "./TheFeedAdd.vue";
import TheMyPage from "./TheMyPage.vue";
import TheShortcuts from "./TheShortcuts.vue";
export default {
  components: { TheFeedList, TheFeedAdd, TheMyPage, TheShortcuts },
  data() {
    return {
      dataReload: false,
    };
  },
  methods: {
    reload() {
      this.dataReload = !this.dataReload;
    },
  },
};
</script>
    