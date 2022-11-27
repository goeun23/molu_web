<template>
  <div class="we-video-info">
    <ul>
      <li>
        <span class="comment" data-toggle="tooltip" title="Comments">
          <i class="fa fa-comments-o"></i>
          <ins>{{ feed.comments?.length || 0 }}</ins>
        </span>
      </li>

      <li @click="getHeart(feed)">
        <span class="like" data-toggle="tooltip" title="like">
          <i class="ti-heart"></i>
          <ins>{{ countofHeart }}</ins>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    feed: {
      type: [Object, Array],
      default: () => {},
    },
  },
  data() {
    return {
      countofHeart: 0,
    };
  },
  methods: {
    getHeart(feed) {
      try {
        this.$axios
          .patch("/v1/board/heart", {
            board_id: feed.board_id,
          })
          .catch(function (error) {
            alert(error);
          })
          .then((resposne) => {
            this.countofHeart = resposne.data.data.heart;
          });
      } catch (error) {}
    },
  },
  mounted() {
    this.countofHeart = this.feed.heart;
  },
};
</script>