<template>
  <div class="col-lg-3">
    <aside class="sidebar static left">
      <div class="widget">
        <h4 class="widget-title">Shortcuts</h4>
        <ul class="naves">
          <li>
            <i class="ti-clipboard"></i>
            <a href="/" title="">📩비밀게시판📩</a>
          </li>
          <li>
            <i class="ti-files"></i>
            <a @click="moveToRewardBoard('0')" title="">🌻칭찬시티카🌻</a>
          </li>

          <li>
            <i class="ti-files"></i>
            <a href="fav-page.html" title="">제이지 멋찌다 멋쪄</a>
          </li>

          <!-- <li>
            <i class="ti-comments-smiley"></i>
            <a href="messages.html" title="">Messages</a>
          </li>

          <li>
            <i class="ti-power-off"></i>
            <a href="landing.html" title="">Logout</a>
          </li> -->
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  methods: {
    moveToRewardBoard() {
      // 0 : juno / 1 : luna
      this.$router.push("/reward");
    },
  },
};
</script>