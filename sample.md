# Embed static rendered mermaid diagram

<script setup>
import Mermaid from "./Mermaid.vue";
import { data } from './sample.data.js';
</script>

<Mermaid v-bind:light="data.light" v-bind:dark="data.dark" />
