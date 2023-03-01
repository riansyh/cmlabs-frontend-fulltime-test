<template>
    <form
        @submit.prevent="search"
        class="flex items-center justify-center w-full p-2 rounded-lg shadow-smooth bg-white gap-3 z-50 sticky top-20 md:top-24"
    >
        <base-text-field
            v-model.lazy="keyword"
            class="flex-grow"
            placeholder="What are you looking for"
            @searched="search"
            :name="name"
        />
        <base-button> Search </base-button>
    </form>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});
const emit = defineEmits(["searched"]);
const keyword = useState(`keyword-${props.name}`);

function search() {
    emit("searched", keyword);
}
</script>
