<template>
  <div>
    <ul>
      <li :key="result" v-for="result in results">{{ result }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: { results: Array },
};
</script>