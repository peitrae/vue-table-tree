
<template>
  <div>
    <VDataTable
      :headers="headers"
      :items="data"
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
import json from "./../assets/original.json";
import TreeTableRow from "./TreeTableRow.vue";

export default {
  components: {
    VDataTable,
    TreeTableRow
  },
  data() {
    const data = json.divisions;

    return {
      headers: [
        {
          text: "ID",
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "SAP Object Type", value: "sapObjectType" },
      ],
      data,
    };
  },
};
</script>