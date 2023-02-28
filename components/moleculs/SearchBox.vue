<template>
    <div
        class="flex items-center justify-center w-full p-2 rounded-lg shadow-smooth bg-white gap-3"
    >
        <BaseTextField
            v-model.lazy="keyword"
            class="flex-grow"
            placeholder="What are you looking for"
        />
        <BaseButton @clicked="search" text="Search" />
    </div>
</template>

<script setup>
const emit = defineEmits(["searched"]);
const keyword = ref("");

function search() {
    emit("searched", keyword);
}
</script>
