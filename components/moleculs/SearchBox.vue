<template>
    <form
        @submit.prevent="search"
        class="flex items-center justify-center w-full p-2 rounded-lg shadow-smooth bg-white gap-3 sticky top-28 z-50"
    >
        <BaseTextField
            v-model.lazy="keyword"
            class="flex-grow"
            placeholder="What are you looking for"
        />
        <BaseButton> Search </BaseButton>
    </form>
</template>

<script setup>
const emit = defineEmits(["searched"]);
const keyword = useState("keyword");

function search() {
    emit("searched", keyword);
}
</script>
