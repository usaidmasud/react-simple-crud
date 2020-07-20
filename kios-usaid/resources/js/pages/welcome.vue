<template>
  <div>
    <div class="hero">
        <div class="hero-head">
            <navbar/>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@components/Navbar'

export default {
  metaInfo() {
    // return { title: this.$t("home") };
  },
  components : {
      Navbar
  },
  data: () => ({
    title: window.config.appName
  })
};
</script>

<style>
</style>