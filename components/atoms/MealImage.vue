<template>
    <img :src="url" :alt="`${name} photo`" class="w-full object-cover md:h-96 rounded-lg mt-4" />
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});
</script>
