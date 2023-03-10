<template>
    <section class="food-list">
        <search-box class="mt-12" @searched="searchMeals" v-model="keyword" name="meals" />
        <template v-if="keyword">
            <div class="flex gap-1 justify-center items-center text-center text-gray-500 mt-5">
                <p class="underline cursor-pointer text-sm text-secondary-1" @click="clearKeyword">
                    <close-icon />
                </p>
                <p>
                    Showing result for <span class="font-semibold">"{{ keyword }}"</span>
                </p>
            </div>
        </template>

        <div class="grid sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5 mt-6">
            <meal-card
                v-for="meal in showedMeals"
                :name="meal.strMeal"
                :meal-id="meal.idMeal"
                :thumb="meal.strMealThumb"
                :key="`meal-${meal.idMeal}`"
            />
        </div>

        <empty-state
            v-if="showedMeals.length === 0 && keyword === ''"
            title="No meals available"
            desc="You can try access this page later"
        />
        <empty-state
            v-if="showedMeals.length === 0 && keyword !== ''"
            :title="`No meals found`"
            desc="You can try search using another keywords"
            type="empty search"
        />

        <pagination
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
        meals.value = useFilterItems(props.meals, "strMeal", keyword.value);
        startIndex.value = 0;
        endIndex.value = NUMBER_ITEMS_PER_PAGE;
    }
};
function clearKeyword() {
    keyword.value = "";
    searchMeals();
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
