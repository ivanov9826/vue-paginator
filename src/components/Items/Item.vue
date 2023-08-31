<template>
  <li>
    <BaseCard>
      <template #default>
        <h3>{{ title }}</h3>
        <span>{{ body }}</span>
        <p>User ID: {{ userId }}</p>
      </template>
      <template #button v-if="userId === 1">
        <button>YES</button>
        <button>NO</button>
      </template>
    </BaseCard>
  </li>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";

export default {
  name: "item",
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  components: { BaseCard },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  margin: 2rem 0;
}
</style>
