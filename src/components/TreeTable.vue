<!-- eslint-disable vue/valid-v-slot -->

<template>
  <div>
    <VDataTable
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
      item-key="id"
    >
      <template #item="{ item }">
        <TreeTableRow :item="item"/>
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
    headers: Array,
    items: Array
  },
  
};
</script>