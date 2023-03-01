<template>
    <section class="food-list">
        <SearchBox class="mt-12" @searched="searchMeals" v-model="keyword" name="meals" />

        <div class="grid sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5 mt-6">
            <MealCard
                v-for="meal in showedMeals"
                :name="meal.strMeal"
                :meal-id="meal.idMeal"
                :thumb="meal.strMealThumb"
                :key="`meal-${meal.idMeal}`"
            />
        </div>

        <emptyState
            v-if="showedMeals.length === 0 && keyword === ''"
            title="No meals available"
            desc="You can try access this page later"
        />
        <emptyState
            v-if="showedMeals.length === 0 && keyword !== ''"
            :title="`No meals found`"
            desc="You can try search using another keywords"
            type="empty search"
        />

        <Pagination
            v-if="meals.length >= NUMBER_ITEMS_PER_PAGE"
            :item-count="meals.length"
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
    meals: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

const NUMBER_ITEMS_PER_PAGE = 30;

const startIndex = useState("startIndexMeal", () => 0);
const endIndex = useState("endIndexMeal", () => NUMBER_ITEMS_PER_PAGE);

const meals = useState(`${props.name}-meals`, () => props.meals);
const showedMeals = computed(() => meals.value.slice(startIndex.value, endIndex.value));

const keyword = useState("keyword-meals", () => "");
const searchMeals = () => {
    if (keyword) {
        const filter = new RegExp(`${keyword.value}`, "gi");
        const result = props.meals.filter((meal) => meal.strMeal.match(filter));

        meals.value = result;
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
