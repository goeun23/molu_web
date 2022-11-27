<template>
  <div class="friend-info">
    <figure>
      <h1
        class="emoji-area__emoji"
        :id="`random_emoji_${feed.board_id}`"
        alt="profile_image"
      />
    </figure>
    <div class="friend-name">
      <ins
        ><a title="">{{ feed.title }}</a></ins
      >
      <span>
        {{ feed.writer }} |
        {{ this.$moment(feed.createdAt).startOf("hour").fromNow() }}
      </span>
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
      random: "",
    };
  },
  mounted() {
    this.profile_image();
  },
  methods: {
    profile_image() {
      const emojiField = document.getElementById(
        `random_emoji_${this.feed.board_id}`
      );
      fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/").then(
        (response) => {
          response.json().then((emoji) => {
            //this.random = emoji.emoji;
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