<template>
    <button
        class="px-2.5 py-2.5 min-w-[40px] flex items-center justify-center cursor-pointer rounded-md border-[1px] btn-secondary"
        :class="{
            'bg-secondary-1 text-white hover:text-white hover:bg-secondary-1 disabled cursor-default':
                isActive,
        }"
        :disabled="isActive"
        @click="clicked"
    >
        {{ text }}
    </button>
</template>

<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
    },
    text: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(["clicked"]);

function clicked() {
    emit("clicked", parseInt(props.text));
}
</script>
