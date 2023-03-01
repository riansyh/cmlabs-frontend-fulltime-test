<template>
    <section class="container pt-4 pb-10 min-h-[80vh]">
        <breadcrumbs :items="breadcrumbItems" />
        <h1 class="h2 text-center mt-10">{{ ingredientName }}</h1>
        <p class="paragraph text-center mb-12" v-if="data?.meals">
            Here are the meals that use {{ ingredientName }} as an ingredient
        </p>

        <meals-section v-if="data?.meals" :meals="data?.meals" :name="$route.params.name" />

        <div v-if="!data.meals" class="flex-column items-center justify-center">
            <empty-state
                title="No meals available"
                desc="Currently there is no meals using this ingredients"
            />
            <base-button @clicked="() => $router.back()">Go Back</base-button>
        </div>
    </section>
</template>

<script setup>
const route = useRoute();
const name = route.params.name;
const apiParams = name.split("-").join("_");

const { data, pending, error, refresh } = await useFetch(
    `https://themealdb.com/api/json/v1/1/filter.php?i=${apiParams}`
);

const ingredientName = computed(() => useFormatTitle(route.params.name));

const breadcrumbItems = computed(() => [
    {
        name: ingredientName.value,
        target: `/ingredient/${name}`,
    },
]);
</script>
