<template>
  <fragment>
    <tr>
      <td :style="`padding-left: ${finalPaddingLeft}px`">
        <div class="item-container">
          <div class="toggle-container">
            <v-btn v-if="item.children" icon @click="toggleShowChildren">
              <v-icon v-if="showChildren">mdi-chevron-up</v-icon>
              <v-icon v-else>mdi-chevron-down</v-icon>
            </v-btn>
          </div>
          <span>{{ item.id }}</span>
        </div>
      </td>
      <td>
        {{ item.name }}
      </td>
      <td class="text-center">{{ item.sapObjectType }}</td>
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
  name: 'TreeTableRow',
  props: {
    item: Object,
    additionalPaddingLeft: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    finalPaddingLeft() {
      return this.additionalPaddingLeft + 24
    },
  },
  methods: {
    toggleShowChildren() {
      this.showChildren = !this.showChildren
    },
  },
  data() {
    const showChildren = false

    return { showChildren }
  },
}
</script>

<style>
.item-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.toggle-container {
  width: 36px;
  height: 36px;
}

.text-center {
  text-align: center;
}
</style>
