<template>
  <div class="friend-info">
    <figure>
      <h1
        class="emoji-area__emoji"
        :id="`random_emoji_${feed.id}`"
        alt="profile_image"
      />
    </figure>
    <div class="friend-name">
      <ins
        ><a href="time-line.html" title="">{{ feed.writer }}</a></ins
      >
      <span>published: {{ feed.createdAt }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feed: {
      type: [Object, Array],
      default: () => {},
    },
    id: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      image: "",
    };
  },
  mounted() {
    this.profile_image();
  },
  methods: {
    profile_image() {
      const emojiField = document.getElementById(
        `random_emoji_${this.feed.id}`
      );
      fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/").then(
        (response) => {
          response.json().then((emoji) => {
            emojiField.innerHTML = emoji.emoji;
          });
        }
      );
    },
  },
};
</script>

<style scoped>
.emoji-area {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
}
.emoji-area__emoji {
  font-size: 2.3rem;
  margin-bottom: 0;
}
.emoji-area__subtext {
  color: #999;
  font-size: 0.875rem;
}
</style>