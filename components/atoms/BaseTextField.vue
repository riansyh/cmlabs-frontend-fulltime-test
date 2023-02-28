<template>
    <input
        type="text"
        :placeholder="placeholder"
        v-model="value"
        class="px-4 py-2.5 rounded-md border-transparent border-[1px] focus:border-secondary-1 hover:border-secondary-1 focus:outline-none transition-colors"
    />
</template>

<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        required: true,
    },
});
const value = useState("keyword");
</script>
