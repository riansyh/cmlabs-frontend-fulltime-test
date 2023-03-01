<template>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-5 mt-6">
        <ingredient-card
            v-for="ingredient in ingredients"
            :name="ingredient.strIngredient"
            :key="ingredient.idIngredient"
        />
    </div>
</template>

<script setup>
const props = defineProps({
    ingredients: {
        type: Array,
        required: true,
    },
});
</script>
