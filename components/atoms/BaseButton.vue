<template>
    <button
        @click="clicked"
        class="text-white bg-secondary-1 hover:bg-secondary-2 font-medium rounded-md px-5 py-2.5 transition-colors"
    >
        {{ text }}
    </button>
</template>

<script setup>
const props = defineProps({
    text: { type: String, required: true },
});
const emit = defineEmits(["clicked"]);

function clicked() {
    emit("clicked");
}
</script>
