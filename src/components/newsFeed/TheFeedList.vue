<template>
  <div class="loadMore">
    <div class="central-meta item" v-for="(feed, index) in feeds" :key="index">
      <div class="user-post">
        <feed-writer :feed="feed" />
        <feed-contents :feed="feed" />
        <feed-comments :feed="feed" />
      </div>
    </div>
  </div>
  <button v-if="!isLast" @click="readMore" class="btn-view btn-load-more">
    Load More
  </button>
  <span v-else>마지막 글 입니다.</span>
</template>

<script>
import feedComments from "@/components/newsFeed/feedItems/feedComments.vue";
import feedContents from "./feedItems/feedContents.vue";
import feedWriter from "./feedItems/feedWriter.vue";
import { toRaw } from "vue";
export default {
  components: {
    feedComments,
    feedContents,
    feedWriter,
  },
  props: {
    dataReload: null,
  },
  data() {
    return {
      feeds: [],
      paging: {
        page: 0,
        size: 5,
      },
      isinit: false,
      isLast: false,
    };
  },

  watch: {
    dataReload() {
      // 게시글 등록 완료
      this.isinit = true;
      this.getPostList();
    },
  },
  async created() {
    this.isinit = true;
    this.getPostList();
  },
  mounted() {},
  methods: {
    readMore() {
      // 게시글 더보기
      this.isinit = false;
      this.paging.page += 1;
      this.getPostList();
    },
    async getPostList() {
      return await this.$axios
        .get(`v1/board?page=${this.paging.page}&size=${this.paging.size}`)
        .then((response) => {
          const board_list = response.data.data.board_list;
          this.isLast = response.data.data.last;
          if (this.isinit) {
            this.feeds = toRaw(board_list);
          } else {
            this.feeds = this.feeds.concat(toRaw(board_list));
          }
          this.$forceUpdate();
        });
    },
  },
};
</script>