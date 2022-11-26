/* eslint-disable */

<template>
  <div class="theme-layout">
    <the-responsive-header />
    <!-- responsive header -->

    <the-top-bar />
    <!-- topbar -->

    <the-left-side-bar />
    <!-- left sidebar menu -->

    <router-view />
    <!-- 
    <the-feed-layout /> -->
    <!-- feed layout -->

    <the-bottom-bar />
  </div>
  <the-side-panel />
  <!-- side panel -->
</template>

<script>
import TheBottomBar from "./components/common/TheBottomBar.vue";
import TheLeftSideBar from "./components/common/TheLeftSideBar.vue";
import TheResponsiveHeader from "./components/common/TheResponsiveHeader.vue";
import TheSidePanel from "./components/common/TheSidePanel.vue";
import TheTopBar from "./components/common/TheTopBar.vue";
import TheMyPage from "./components/newsFeed/TheMyPage.vue";
import TheShortcuts from "./components/newsFeed/TheShortcuts.vue";

export default {
  components: {
    TheShortcuts,
    TheMyPage,
    TheResponsiveHeader,
    TheTopBar,
    TheSidePanel,
    TheBottomBar,
    TheLeftSideBar,
  },
  name: "App",
  created() {
    this.$loadScript("https://code.jquery.com/jquery-3.2.1.slim.min.js").then(
      () => {
        this.$loadScript(
          "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        ).then(() => {
          this.$loadScript(
            "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          ).then(() => {
            this.$loadScript("/js/main-min.js").then(() => {
              this.$loadScript("/js/script.js").then(() => {
                this.$loadScript("/js/map-init.js").then(() => {
                  this.$loadScript(
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8c55_YHLvDHGACkQscgbGLtLRdxBDCfI"
                  ).then(() => {});
                });
              });
            });
          });
        });
      }
    );
  },
};
</script>

<style>
@import url(https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css);
@import url(@/assets/css/main.min.css);
@import url(@/assets/css/style.css);
@import url(@/assets/css/color.css);
@import url(@/assets/css/responsive.css);
</style>