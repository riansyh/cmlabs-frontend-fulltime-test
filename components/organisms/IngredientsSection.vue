<template>
    <section class="food-list container py-12">
        <h1 class="h2 text-center">All Ingredients</h1>
        <p class="paragraph text-center">Find the ingredient here to see all available meals</p>
        <SearchBox class="mt-4" @searched="searchIngredients" v-model="keyword" />

        <IngredientsList :ingredients="showedIngredients" />
    </section>
</template>

<script setup>
const props = defineProps({
    ingredients: {
        type: Array,
        required: true,
    },
});

const NUMBER_INGREDIENTS_PER_PAGE = 25;

const startIndex = useState("startIndex", () => 0);
const endIndex = useState("endIndex", () => NUMBER_INGREDIENTS_PER_PAGE);
// show the ingredients 25 per page
const ingredients = useState("ingredients", () => props.ingredients);
const showedIngredients = computed(() => ingredients.value.slice(startIndex.value, endIndex.value));

const keyword = useState("keyword", () => "");
const searchIngredients = () => {
    if (keyword) {
        const filter = new RegExp(`${keyword.value}`, "gi");
        const result = props.ingredients.filter((ingredient) =>
            ingredient.strIngredient.match(filter)
        );

        ingredients.value = result;
        startIndex.value = 0;
        endIndex.value = NUMBER_INGREDIENTS_PER_PAGE;
    }
};
</script>
