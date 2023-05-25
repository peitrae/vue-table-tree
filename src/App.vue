<template>
  <v-app>
    <TreeTable />
  </v-app>
</template>

<script>
import TreeTable from './components/TreeTable';

export default {
  name: 'App',

  components: {
    TreeTable
  },

  data: () => ({
    //
  }),
};
</script>
