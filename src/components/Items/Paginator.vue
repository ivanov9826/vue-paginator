<template>
  <div>
    <ul>
      <li v-for="(pageNum, index) in totalPages" :key="index">
        <button @click="onChangePage({ page: pageNum })">{{ pageNum }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "paginator",
  computed: {
    ...mapGetters({
      totalPages: "getPagesCount",
    }),
  },
  methods: {
    ...mapActions({
      onChangePage: "changePage",
    }),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
</style>
