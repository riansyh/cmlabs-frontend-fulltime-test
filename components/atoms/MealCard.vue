<template>
    <NuxtLink
        :href="`/meal/${mealId}`"
        class="px-3 py-4 min-h-[100px] sm:min-[120px] md:min-h-[200px] md:px-4 md:py-7 rounded-lg bg-secondary-2 group hover:shadow-smooth transition-all text-lg font-semibold text-center cursor-pointer flex-column items-center justify-center relative overflow-hidden"
    >
        <img
            :src="thumb"
            :alt="name + 'image'"
            class="brightness-50 absolute h-full w-full top-0 object-cover group-hover:scale-110 transition-all duration-300"
        />
        <p class="mt-2 text-sm md:text-base z-20 text-white transition-all duration-300">
            {{ name }}
        </p>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    thumb: {
        type: String,
        required: true,
    },
    mealId: {
        type: String,
        required: true,
    },
});

const formatName = computed(() => props.name.split(" ").join("-").toLowerCase());
</script>
