<template>
  <div class="post-meta">
    <img src="/images/resources/user-post.jpg" alt="" />
    <feed-reactions />
    
    <div class="description">
      <p>
        World's most beautiful car in Curabitur
        <a href="#" title="">#test drive booking !</a>
        the most beatuiful car available in america and the saudia arabia, you
        can book your test drive by our official website
      </p>
    </div>
  </div>
</template>

<script>
import feedReactions from "./feedReactions.vue";
export default {
  components: { feedReactions },
};
</script>