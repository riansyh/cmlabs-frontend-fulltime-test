<template>
    <button
        @click="clicked"
        class="button"
        :class="isPrimary ? 'btn-primary' : 'btn-secondary'"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    isPrimary: {
        type: Boolean,
        default: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["clicked"]);

function clicked() {
    emit("clicked");
}
</script>
