<template>
  <div class="fixed-sidebar left">
    <div class="menu-left">
      <ul class="left-menu">
        <li>
          <a
            @click="moveTo('newsfeed')"
            title="π©λΉλ°κ²μνπ©"
            data-toggle="tooltip"
            data-placement="right"
            ><i class="ti-clipboard"></i
          ></a>
        </li>

        <li>
          <a
            @click="moveTo('reward')"
            title="π»μΉ­μ°¬μν°μΉ΄π»"
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