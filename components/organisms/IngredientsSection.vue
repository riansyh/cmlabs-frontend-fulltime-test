<template>
    <section class="food-list container py-12">
        <h1 class="h2 text-center">All Ingredients</h1>
        <p class="paragraph text-center mb-4">
            Find the ingredient here to see all available meals
        </p>

        <search-box
            class="mt-4"
            @searched="searchIngredients"
            v-model="keyword"
            name="ingredients"
        />
        <template v-if="keyword">
            <div class="flex gap-1 justify-center items-center text-center text-gray-500 mt-5">
                <p class="underline cursor-pointer text-sm text-secondary-1" @click="clearKeyword">
                    <close-icon />
                </p>
                <p class="text-sm">
                    Showing result for <span class="font-semibold">"{{ keyword }}"</span>
                </p>
            </div>
        </template>

        <div class="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-5 mt-6">
            <ingredient-card
                v-for="ingredient in showedIngredients"
                :name="ingredient.strIngredient"
                :key="ingredient.idIngredient"
            />
        </div>
        <empty-state
            v-if="showedIngredients.length === 0 && keyword === ''"
            title="No ingredients available"
            desc="You can try access this page later"
        />
        <empty-state
            v-if="showedIngredients.length === 0 && keyword !== ''"
            :title="`No ingredients found`"
            desc="You can try search using another keywords"
            type="empty search"
        />

        <pagination
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

const keyword = useState("keyword-ingredients", () => "");
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
function clearKeyword() {
    keyword.value = "";
    searchIngredients();
}

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
