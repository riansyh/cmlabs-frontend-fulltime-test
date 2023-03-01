<template>
    <form
        @submit.prevent="search"
        class="flex items-center justify-center w-full p-2 rounded-lg shadow-smooth bg-white gap-3 z-50 sticky top-24"
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
    <template v-if="keyword">
        <div class="flex gap-1 justify-center items-center text-center text-gray-500 mt-5">
            <p class="underline cursor-pointer text-sm text-secondary-1" @click="clearKeyword">
                <close-icon />
            </p>
            <p class="text-sm">
                Showing result for <span class="font-semibold">"{{ keyword }}"</span>
            </p>
        </div>
    </template>
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

function clearKeyword() {
    keyword.value = "";
    search();
}
</script>
