<template>
  <fragment>
    <tr>
      <td></td>
      <td :style="`padding-left: ${finalPaddingLeft}px`" @click="toggleShowChildren">{{ item.id }}</td>
      <td>
        {{ item.name }}
      </td>
      <td>{{ item.sapObjectType }}</td>
    </tr>
    <template v-if="item.children && showChildren">
      <TreeTableRow
        v-for="child of item.children"
        :key="child.id"
        :item="child"
        :additionalPaddingLeft="finalPaddingLeft"
      />
    </template>
  </fragment>
</template>

<script>
export default {
  name: "TreeTableRow",
  props: {
    item: Object,
    additionalPaddingLeft: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    finalPaddingLeft() {
      return this.additionalPaddingLeft + 24;
    },
  },
  methods: {
    toggleShowChildren() {
      this.showChildren = !this.showChildren;
    },
  },
  data() {
    const showChildren = false;

    return { showChildren };
  },
};
</script>