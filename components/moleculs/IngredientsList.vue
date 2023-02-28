<template>
    <div class="grid md:grid-cols-5 gap-5 mt-6">
        <IngredientCard v-for="ingredient in ingredients" :name="ingredient.strIngredient" />
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
