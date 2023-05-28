<template>
  <div>
    <VDataTable
      :headers="headers"
      :items="items"
      class="elevation-1"
      item-key="index"
    >
      <template #item="{ item }">
        <TreeTableRow :item="item" :headers="headers"/>
      </template>
    </VDataTable>
  </div>
</template>

// <script>
import { VDataTable } from "vuetify/lib";
import TreeTableRow from "./TreeTableRow.vue";

export default {
  components: {
    VDataTable,
    TreeTableRow
  },
  props: {
    itemKey: String,
    headers: Array,
    items: Array
  },
  
};
</script>