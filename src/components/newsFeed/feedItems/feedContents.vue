<template>
  <div class="post-meta">
    <div class="description">
      <p>
        {{ feed.content }}
      </p>
    </div>
    <feed-reactions :feed="feed" />
  </div>
</template>

<script>
import feedReactions from "./feedReactions.vue";
export default {
  components: { feedReactions },
  props: {
    feed: {
      type: [Object, Array],
      default: () => {},
    },
  },
};
</script>