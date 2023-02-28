<template>
    <div class="flex gap-5 items-center justify-center">
        <BaseButton @clicked="handlePrev" :is-primary="false" :disabled="activePages === 1">
            Prev
        </BaseButton>
        <PageItem
            @clicked="changePage"
            v-for="page in pages"
            :text="page"
            :isActive="page === activePages"
        />
        <BaseButton
            @clicked="handleNext"
            :is-primary="false"
            :disabled="activePages === pages.length"
        >
            Next
        </BaseButton>
    </div>
</template>

<script setup>
const props = defineProps({
    itemCount: {
        type: Number,
        required: true,
    },
    itemPerPage: {
        type: Number,
        required: true,
    },
    startIndex: {
        type: Number,
        required: true,
    },
});

const pages = computed(() =>
    Array.from({ length: Math.round(props.itemCount / props.itemPerPage) }, (_, i) => i + 1)
);
const activePages = computed(() => props.startIndex / props.itemPerPage + 1);

const emit = defineEmits(["previous", "next", "changePage"]);

function handlePrev() {
    emit("previous");
}

function handleNext() {
    emit("next");
}

function changePage(number) {
    emit("changePage", number);
}
</script>
