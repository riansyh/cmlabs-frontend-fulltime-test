<template>
    <NuxtLink
        :href="`/ingredient/${formatName}`"
        class="px-3 py-4 md:px-4 md:py-7 rounded-lg bg-white group hover:shadow-smooth transition-all text-lg font-semibold text-center cursor-pointer flex-column items-center"
    >
        <img
            class="group-hover:-translate-y-2 transition-all duration-300 scale-75 md:scale-100"
            height="100"
            width="100"
            :src="`https://www.themealdb.com/images/ingredients/${name}-Small.png`"
            alt="chicken"
        />
        <p class="group-hover:text-secondary-2 mt-2 text-sm md:text-base">{{ name }}</p>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});

const formatName = computed(() => props.name.split(" ").join("-").toLowerCase());
</script>
