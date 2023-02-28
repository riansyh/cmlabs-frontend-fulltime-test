<template>
    <MealsSection v-if="data?.meals" :meals="data?.meals" :name="$route.params.name" />
</template>

<script setup>
const route = useRoute();
const name = route.params.name;
const apiParams = name.split("-").join("_");

const { data, pending, error, refresh } = await useFetch(
    `https://themealdb.com/api/json/v1/1/filter.php?i=${apiParams}`
);
</script>
