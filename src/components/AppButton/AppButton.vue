<template>
  <button class="app-button">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.app-button {
  border: 1px solid #b0b0b0;
  background-color: #e5e5e5;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
}
</style>
