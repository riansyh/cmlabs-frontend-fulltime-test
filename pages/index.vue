<template>
    <section class="hero w-100 bg-secondary-2 relative overflow-hidden">
        <div
            class="container px-4 py-20 md:h-96 flex-column items-center justify-center relative z-10"
        >
            <h1 class="h1 text-white">Foodies</h1>
            <p class="paragraph md:max-w-lg text-center mt-2 text-white text-opacity-90">
                Your ultimate source for a comprehensive list of food ingredients. Find your needed
                ingredients and meals easily here!
            </p>
        </div>
        <nuxt-img
            src="/foods.png"
            alt="Hero banner"
            format="webp"
            class="w-full absolute top-0 left-0 right-0 h-full object-cover"
        />
    </section>

    <div v-if="pending" class="container flex-column items-center justify-center py-12">
        <loading-spinner />
    </div>
    <error-state
        v-if="error"
        message="The ingredients list is not currently available. Please try accessing this page again
            later"
    >
    </error-state>

    <ingredients-section v-if="data?.meals" :ingredients="data?.meals" />
</template>

<script setup>
const { data, pending, error } = await useFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
);
</script>
