<template>
  <div id="app">
    <loading ref="loading" />
    <transition name="page" mode="out-in">
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import Loading from "@components/Loading";

export default {
  name: "app",
  data: () => ({}),
  components: {
    Loading
  },
  metaInfo() {
    const { appName } = window.config;
    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    };
  },

  mounted() {
    this.$loading = this.$refs.loading;
  }
};
</script>

<style>
</style>