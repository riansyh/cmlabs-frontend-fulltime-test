<template>
    <NuxtLink
        :href="`/ingredient/${formatName}`"
        class="px-4 py-7 rounded-lg bg-white group hover:shadow-smooth transition-all text-lg font-semibold text-center cursor-pointer flex-column items-center"
    >
        <img
            class="group-hover:-translate-y-2 transition-all duration-300"
            height="120"
            width="120"
            :src="`https://www.themealdb.com/images/ingredients/${name}-Small.png`"
            alt="chicken"
        />
        <p class="group-hover:text-secondary-2">{{ name }}</p>
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
