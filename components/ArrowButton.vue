<template>
  <button class="btn" @click="onClick">
    <img
      class="icon"
      :src="require(`~/static/${arrowType}.svg`)"
      :alt="arrowType + ' arrow'"
    />
  </button>
</template>
<script>
export default {
  name: 'ArrowButton',
  props: { arrowType: String, onClick: Function }
};
</script>
