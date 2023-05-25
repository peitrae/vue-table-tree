<template>
  <v-treeview
    :items="items"
    item-key="name"
    open-on-click
  >
    <template #label="{item}">
      {{item.name}}
    </template>
  </v-treeview>
</template>

<script>
export default {
  data: () => ({
    open: ["public"],
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-json",
      md: "mdi-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
    },
    tree: [],
    items: [
      {
        name: ".git",
      },
      {
        name: "node_modules",
      },
      {
        id: 123,
        name: "public",
        quantity: 3,
        children: [
          {
            name: "static",
            children: [
              {
                name: "logo.png",
                file: "png",
              },
            ],
          },
          {
            name: "favicon.ico",
            file: "png",
          },
          {
            name: "index.html",
            file: "html",
          },
        ],
      },
    ],
  }),
};
</script>