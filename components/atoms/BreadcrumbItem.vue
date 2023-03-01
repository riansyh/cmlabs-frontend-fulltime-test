<template>
    <nuxt-link
        :to="target"
        class="text-sm w-max"
        :class="
            isActive
                ? 'text-secondary-2 hover:text-secondary-2 hover:cursor-default'
                : 'text-gray-500 hover:text-secondary-1 cursor-pointer'
        "
    >
        <slot />
    </nuxt-link>
</template>

<script setup>
const props = defineProps({
    target: {
        type: String,
        required: true,
    },
});

const route = useRoute();
const isActive = computed(() => route.path === props.target);
</script>
