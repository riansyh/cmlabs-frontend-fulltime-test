<template>
    <section class="container py-12">
        <h1 class="h2 text-center">{{ meal.strMeal }}</h1>
        <MealImage :url="meal.strMealThumb" :name="meal.strMeal" />

        <div class="grid md:grid-cols-5 mt-8 gap-12 relative">
            <div
                class="recipe rounded-lg bg-white px-8 py-8 flex-column items-center col-span-5 md:col-span-2 h-fit md:sticky md:top-28"
            >
                <h2 class="h2 text-xl">Recipes</h2>
                <ul class="mt-3">
                    <template v-for="n in 20" :key="`recipe-${n}`">
                        <li class="list-disc" v-if="meal[`strIngredient${n}`]">
                            {{ meal[`strMeasure${n}`] }} {{ meal[`strIngredient${n}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="col-span-5 md:col-span-3">
                <h2 class="h2 text-xl">Instructions</h2>
                <p class="whitespace-pre-line">
                    {{ meal.strInstructions }}
                </p>
            </div>
        </div>

        <div class="tutorial mt-8">
            <h2 class="h2 text-xl text-center">Video Tutorial</h2>
            <iframe
                width="100%"
                :src="`https://www.youtube.com/embed/${youtubeId}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="mt-4 rounded-lg h-56 md:h-96"
            ></iframe>
        </div>
    </section>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const { data, pending, error, refresh } = await useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
);

const meal = await data?.value?.meals[0];

const youtubeId = computed(() => meal?.strYoutube?.split("v=")[1]);
</script>
