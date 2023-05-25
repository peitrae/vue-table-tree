<template>
  <v-app>
    <DataTable />
    <TreeView />
  </v-app>
</template>

<script>
import DataTable from './components/DataTable';
import TreeView from './components/TreeView';

export default {
  name: 'App',

  components: {
    DataTable,
    TreeView
  },

  data: () => ({
    //
  }),
};
</script>
