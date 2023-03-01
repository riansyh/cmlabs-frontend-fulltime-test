<template>
    <div
        class="recipe rounded-lg bg-white px-8 py-8 flex-column items-center col-span-5 md:col-span-2 h-fit md:sticky md:top-28"
    >
        <h2 class="h2 text-xl">📃 Recipes</h2>
        <ul class="mt-3">
            <template v-for="n in 20" :key="`recipe-${n}`">
                <li class="list-disc" v-if="meal[`strIngredient${n}`]">
                    {{ meal[`strMeasure${n}`] }} {{ meal[`strIngredient${n}`] }}
                </li>
            </template>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    meal: {
        type: Object,
        required: true,
    },
});
</script>
