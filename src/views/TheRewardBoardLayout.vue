<template>
  <section>
    <div class="gap2 gray-bg">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="row merged20" id="page-contents"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataReload: false,
    };
  },
  methods: {
    reload() {
      this.dataReload = !this.dataReload;
    },
  },
};
</script>
    