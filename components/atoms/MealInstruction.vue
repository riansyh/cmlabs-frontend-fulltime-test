<template>
    <div class="col-span-5 md:col-span-3">
        <h2 class="h2 text-xl">Instructions</h2>
        <p class="whitespace-pre-line">
            {{ meal.strInstructions }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    meal: {
        type: Object,
        required: true,
    },
});
</script>
