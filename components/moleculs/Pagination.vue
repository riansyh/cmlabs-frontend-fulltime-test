<template>
    <div class="flex gap-2 md:gap-5 items-center justify-center">
        <base-button
            @clicked="handlePrev"
            :is-primary="false"
            :disabled="activePages === 1"
            class="px-2"
        >
            <chevron-left-icon class="text-base" />
        </base-button>
        <page-item
            @clicked="changePage"
            v-for="page in pages"
            :text="page"
            :key="`page-${page}`"
            :isActive="page === activePages"
        />
        <base-button
            @clicked="handleNext"
            :is-primary="false"
            :disabled="activePages === pages.length"
            class="px-2"
        >
            <chevron-right-icon class="text-base" />
        </base-button>
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
