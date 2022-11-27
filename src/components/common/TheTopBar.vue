<template>
  <div class="topbar stick">
    <div class="logo">
      <a title=""><img src="/images/logo.png" alt="" /></a>
    </div>

    <div class="top-area">
      <div class="top-search">
        <div class="search-box">
          <input v-model="message" type="text" placeholder="📩비밀글 남기기!" />
          <button @click="sendPost()" data-ripple>
            <i class="ti-themify-favicon"></i>
          </button>
        </div>
      </div>

      <div class="user-img">
        <img src="/images/admin.png" alt="" />
        <span class="status f-online"></span>
        <div class="user-setting">
          <a href="#" title=""><i class="ti-user"></i> view profile</a>
          <a href="#" title=""><i class="ti-pencil-alt"></i>edit profile</a>
          <a href="#" title=""><i class="ti-power-off"></i>log out</a>
        </div>
      </div>
      <span class="ti-menu main-menu" data-ripple=""></span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["reloadTop"],
  data() {
    return {
      message: "",
      title: "",
    };
  },
  methods: {
    sendPost() {
      this.title = `${this.$moment(new Date()).format(
        "MMMM Do YYYY, a h:mm:ss"
      )} 작성된 글 입니다.`;
      try {
        this.$axios
          .post("/v1/board", {
            title: this.title,
            content: this.message,
            writer: null,
          })
          .catch(function (error) {
            alert(error);
          })
          .then((resposne) => {
            alert("게시글 등록 완료!");
            this.message = "";

            setTimeout(() => {
              this.$router.go(this.$router.currentRoute);
            }, 200);
          });
      } catch (error) {}
    },
  },
};
</script>

<style scoped>
.search-box {
  display: inline-block;
  position: relative;
  width: 100%;
}

.search-box button {
  border: none;
}

.search-box input {
  background: #f4f2f2 none repeat scroll 0 0;
  border: medium none;
  font-size: 13px;
  padding: 13px 30px;
  width: 100%;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
}

.top-search input {
  background: #f4f2f2 none repeat scroll 0 0;
  border: medium none;
  font-size: 13px;
  padding: 13px 30px;
  width: 100%;
  border-radius: 5px;
}
.top-search button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  color: #b6b6b6;
  font-size: 15px;
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
}
</style>