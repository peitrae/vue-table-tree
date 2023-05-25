<template>
  <td :colspan="colspan">
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :item-key="itemKey"
    >
    </v-data-table>
  </td>
</template>

<script>
export default {
  name: "MyComponent",

  props: {
    headers: Array,
    items: Array,
    itemKey: String,
    colspan: Number,
  },
  mounted() {
    console.log("Items: ", this.items);
  },
};
</script>

<style scoped>
td {
  padding: 0 !important;
}

::v-deep thead {
  visibility: collapse;
}

::v-deep .v-data-footer {
  display: none;
}
</style>