<template>
    <section class="food-list container py-12">
        <h1 class="h2 text-center">All Ingredients</h1>
        <p class="paragraph text-center mb-4">
            Find the ingredient here to see all available meals
        </p>

        <SearchBox class="mt-4" @searched="searchIngredients" v-model="keyword" />

        <div class="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-5 mt-6">
            <IngredientCard
                v-for="ingredient in showedIngredients"
                :name="ingredient.strIngredient"
                :key="ingredient.idIngredient"
            />
        </div>
        <emptyState
            v-if="showedIngredients.length === 0 && keyword === ''"
            title="No ingredients available"
            desc="You can try access this page later"
        />
        <emptyState
            v-if="showedIngredients.length === 0 && keyword !== ''"
            :title="`No ingredients found`"
            desc="You can try search using another keywords"
            type="empty search"
        />

        <Pagination
            v-if="ingredients.length >= NUMBER_ITEMS_PER_PAGE"
            :item-count="ingredients.length"
            :item-per-page="NUMBER_ITEMS_PER_PAGE"
            :start-index="startIndex"
            class="mt-12"
            @change-page="changePage"
            @previous="handlePrev"
            @next="handleNext"
        />
    </section>
</template>

<script setup>
const props = defineProps({
    ingredients: {
        type: Array,
        required: true,
    },
});

const NUMBER_ITEMS_PER_PAGE = 120;

const startIndex = useState("startIndex", () => 0);
const endIndex = useState("endIndex", () => NUMBER_ITEMS_PER_PAGE);

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
        endIndex.value = NUMBER_ITEMS_PER_PAGE;
    }
};

const changePage = (page) => {
    startIndex.value = (page - 1) * NUMBER_ITEMS_PER_PAGE;
    endIndex.value = startIndex.value + NUMBER_ITEMS_PER_PAGE;
};
const handleNext = () => {
    startIndex.value += NUMBER_ITEMS_PER_PAGE;
    endIndex.value += NUMBER_ITEMS_PER_PAGE;
};
const handlePrev = () => {
    startIndex.value -= NUMBER_ITEMS_PER_PAGE;
    endIndex.value -= NUMBER_ITEMS_PER_PAGE;
};
</script>
