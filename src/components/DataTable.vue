
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      class="elevation-1"
      item-key="id"
      show-expand
    >
      <!-- <template  #expanded-item="{ headers, item }">
        <TreeDataTable
          :colspan="headers.length"
          :headers="headers"
          :items="item.children"
          item-key="id"
        />
      </template> -->
      <!-- <template #body="{ items }">
        <v-treeview
          ref="treeview"
          :items="items"
          @update:open="setItemWidth"
          item-key="id"
          open-on-click
        >
          <template #label="{ item }">
            <div class="container">
              <div class="item item-id">{{ item.id }}</div>
              <div class="item item-name">
                {{ item.name }}
              </div>
              <div class="item item-sap">{{ item.sapObjectType }}</div>
            </div>
          </template>
        </v-treeview>
      </template> -->
      <template #item="{ item }">
        <RecursiveTableRow :item="item"/>
      </template>
    </v-data-table>
  </div>
</template>

// <script>
import { VDataTable } from "vuetify/lib";
import json from "./../assets/original.json";
import TreeDataTable from "./TreeDataTable.vue";
import RecursiveTableRow from "./RecursiveTableRow.vue";

export default {
  components: {
    VDataTable,
    // eslint-disable-next-line vue/no-unused-components
    TreeDataTable,
    RecursiveTableRow
  },
  methods: {
    setItemWidth() {
      this.$nextTick(() => {
        // console.log("Ref: ", document.getElementsByClassName("item-name"));

        const itemNameEls = document.getElementsByClassName("item-name");
        let maxItemNameWidth = 0;

        for (let element of itemNameEls) {
          maxItemNameWidth = Math.max(maxItemNameWidth, element.offsetWidth);
          this.itemNameWidth = maxItemNameWidth;
        }

        console.log("Max:", maxItemNameWidth);
      });
    },
  },
  data() {
    const data = json.divisions;
    const itemNameWidth = 0;

    return {
      headers: [
        {
          text: "ID",
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "SAP Object Type", value: "sapObjectType" },
      ],
      data: data,
      itemNameWidth,
    };
  },
};
</script>

<style scoped>
::v-deep .v-data-table__expanded__content {
  box-shadow: unset !important;
}

/* ::v-deep table {
  display: block !important;
  overflow-y: auto;
} */

::v-deep th,
.item {
  /* width: 250px; */
}

.container {
  display: flex;
}

.item {
  display: inline-block;
  padding: 0 0.75rem;
}

.item-id {
  flex-grow: 1;
}

.item-name {
  flex-basis: 400px;
}

.item-sap {
  flex-basis: 60px;
}
</style>

<!-- <tr>
          <td></td>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sapObjectType }}</td>
        </tr> -->