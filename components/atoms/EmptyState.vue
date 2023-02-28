<template>
    <div class="flex-column gap-4 items-center py-8">
        <img :src="imgUrl" alt="Empty state image" class="h-40 w-fit object-cover text-center" />
        <div class="flex-column items-center">
            <h3 class="text-lg text-gray-600 font-semibold">{{ title }}</h3>
            <p class="text-gray-400">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        default: "empty state",
    },
});

const imgUrl = computed(() =>
    props.type === "empty state"
        ? "https://i.ibb.co/QQBxRYc/empty-state.png"
        : "https://i.ibb.co/P91d0D9/empty-search.png"
);
</script>
