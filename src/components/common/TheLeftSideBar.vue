<template>
  <div class="fixed-sidebar left">
    <div class="menu-left">
      <ul class="left-menu">
        <li>
          <a
            @click="moveTo('newsfeed')"
            title="📩비밀게시판📩"
            data-toggle="tooltip"
            data-placement="right"
            ><i class="ti-clipboard"></i
          ></a>
        </li>

        <li>
          <a
            @click="moveTo('reward')"
            title="🌻칭찬시티카🌻"
            data-toggle="tooltip"
            data-placement="right"
            ><i class="ti-themify-favicon"></i
          ></a>
        </li>
        <li>
          <a
            @click="moveTo('reward')"
            title="Messages"
            data-toggle="tooltip"
            data-placement="right"
            ><i class="ti-comment-alt"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    moveTo(path) {
      this.$router.push(path);
    },
  },
};
</script>