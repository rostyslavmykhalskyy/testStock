<template>
  <div class="filter-select">
    <button class="filter" @focus="showItems = true">
      {{ items.name + ": " + (items.current ? items.current : "-") }}
    </button>
    <div v-if="showItems" class="filter-items">
      <button
        @click="changeFilter(item)"
        class="filter-item"
        v-for="item in items.items"
        :key="item"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showItems: false
    };
  },
  methods: {
    changeFilter(item) {
      this.$emit("changeFilter", item, this.index);
      this.showItems = false;
    }
  },
  props: {
    items: Object,
    index: Number
    // filterName: String
    //2 ways sink data (2 computed || 1 props[list of items])
  }
};
</script>

<style lang="scss"></style>
