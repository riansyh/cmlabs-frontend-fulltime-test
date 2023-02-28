<template>
    <section class="container py-12">
        <h1 class="h2 text-center">{{ mealName }}</h1>
        <p class="paragraph text-center mb-12" v-if="data?.meals">
            Here are the meals that use {{ mealName }} as an ingredient
        </p>

        <MealsSection v-if="data?.meals" :meals="data?.meals" :name="$route.params.name" />

        <div v-if="!data.meals" class="flex-column items-center justify-center">
            <emptyState
                title="No meals available"
                desc="Currently there is no meals using this ingredients"
            />
            <BaseButton @clicked="() => $router.back()">Go Back</BaseButton>
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

const mealName = computed(() => useCapitalFirstLetter(route.params.name.replace("-", " ")));
</script>
