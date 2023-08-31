<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Paginator :totalPages="pagesTotalCount" @changePage="setCurrentPage" />
  <ItemList @setCount="setPagesCount" />
</template>

<script>
import ItemList from "./components/Items/ItemList.vue";
import Paginator from "./components/Items/Paginator.vue";

export default {
  data: () => {
    return {
      pagesTotalCount: 0,
      page: 1,
    };
  },
  components: { ItemList, Paginator },
  methods: {
    setPagesCount(val) {
      this.pagesTotalCount = val;
    },
    setCurrentPage(e) {
      this.page = e;
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
