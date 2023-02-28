<template>
    <form
        @submit.prevent="search"
        class="flex items-center justify-center w-full p-2 rounded-lg shadow-smooth bg-white gap-3 z-50"
    >
        <BaseTextField
            v-model.lazy="keyword"
            class="flex-grow"
            placeholder="What are you looking for"
            @searched="search"
        />
        <BaseButton> Search </BaseButton>
    </form>
    <template v-if="keyword">
        <div class="flex gap-2 justify-center items-center text-center text-gray-500 mt-5">
            <p class="">
                Showing result for <span class="font-semibold">"{{ keyword }}"</span>
            </p>
            <p>•</p>
            <p
                class="underline cursor-pointer"
                @click="
                    () => {
                        keyword = '';
                        search();
                    }
                "
            >
                Show all
            </p>
        </div>
    </template>
</template>

<script setup>
const emit = defineEmits(["searched"]);
const keyword = useState("keyword");

function search() {
    emit("searched", keyword);
}
</script>
