<template>
  <div>
    <!-- <input v-on:input="onInput" /> -->
    <input @input="onInput" />
  </div>
</template>
<script>
export default {
  name: "SearchBar",

  methods: {
    onInput: function (event) {
      // console.log(event.target.value);
      this.$emit("termChange", event.target.value);
    },
  },
};
</script>

<!-- add scoped to ensure any style that we add inside this style tag will only affect this single component and will not affect other component -->
<style scoped>
input {
  width: 75%;
}

div {
  text-align: center;
  margin: 20px;
}
</style>
