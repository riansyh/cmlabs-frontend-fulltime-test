<template>
    <div class="container flex-column items-center justify-center py-20">
        <h2 class="text-lg font-semibold text-gray-800">Oops! Something went wrong</h2>
        <p class="text-gray-400">
            {{ message }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    message: {
        type: String,
        required: true,
    },
});
</script>
