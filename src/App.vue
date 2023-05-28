<template>
  <v-app>
    <TreeTable :headers="headers" :items="items"/>
  </v-app>
</template>

<script>
import TreeTable from './components/TreeTable'
import json from './assets/original.json'

export default {
  name: 'App',

  components: {
    TreeTable,
  },

  data() {
    return {
      headers: [
        {
          text: 'ID',
          value: 'id',
          align: 'center',
          sortable: false,
        },
        { text: 'Name', value: 'name', sortable: false },
        {
          text: 'SAP Object Type',
          value: 'sapObjectType',
          align: 'center',
          sortable: false,
          itemStyle: {'text-align': 'center'}
        },
      ],
      items: json.divisions,
    }
  },
}
</script>
