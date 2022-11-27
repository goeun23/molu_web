<template>
  <section>
    <div class="gap2 gray-bg">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="row merged20" id="page-contents">
              <the-shortcuts />
              <!-- Shortcuts -->

              <!-- sidebar -->
              <div class="col-lg-8">
                <the-feed-add @reload="reload" />
                <the-feed-list :dataReload="dataReload" />
              </div>

              <!-- sidebar -->
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
import TheShortcuts from "../components/newsFeed/TheShortcuts.vue";
export default {
  components: { TheFeedList, TheFeedAdd, TheShortcuts },
  props: {},
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
    