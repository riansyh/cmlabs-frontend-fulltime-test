<template>
    <section class="container pt-4 pb-10 min-h-screen">
        <breadcrumbs :items="breadcrumbItems" />

        <template v-if="data">
            <h1 class="h1 text-center mt-10 leading-tight mb-8">{{ meal.strMeal }}</h1>
            <meal-image :url="meal.strMealThumb" :name="meal.strMeal" />

            <div class="grid md:grid-cols-5 mt-8 gap-12 relative">
                <meal-recipe :meal="meal" />
                <meal-instruction :meal="meal" />
            </div>

            <div class="tutorial mt-8">
                <h2 class="h2 text-xl text-center">Video Tutorial</h2>
                <youtube-embed :youtube-id="youtubeId" />
            </div>
        </template>

        <div v-if="pending" class="container flex-column items-center justify-center py-20">
            <loading-spinner />
        </div>

        <error-state
            v-if="error"
            message="The details of the meal are not currently available.
        Please try accessing this page again later"
        >
        </error-state>
    </section>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const { data, pending, error } = await useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
);

const meal = await data?.value?.meals[0];

const youtubeId = computed(() => meal?.strYoutube?.split("v=")[1]);

const ingredientName = computed(() => useFormatTitle(route.params.name));
const breadcrumbItems = computed(() => [
    {
        name: ingredientName.value,
        target: `/ingredient/${route.params.name}`,
    },
    {
        name: meal.strMeal,
        target: `/ingredient/${route.params.name}/${route.params.id}`,
    },
]);
</script>
