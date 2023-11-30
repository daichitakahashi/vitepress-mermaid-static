<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  light: {
    type: String,
    required: true,
  },
  dark: {
    type: String,
    required: true,
  },
});

const svg = ref(null);
let mut = null;

onMounted(async () => {
  mut = new MutationObserver(async () => await renderChart());
  mut.observe(document.documentElement, { attributes: true });
  await renderChart();
});
onUnmounted(() => mut.disconnect());

const renderChart = async () => {
  const hasDarkClass = document.documentElement.classList.contains("dark");
  const svgCode = hasDarkClass ? props.dark : props.light;
  const salt = Math.random().toString(36).substring(7);
  svg.value = `${svgCode} <span style="display: none">${salt}</span>`;
};
</script>

<template>
  <div class="mermaid" v-html="svg"></div>
</template>
