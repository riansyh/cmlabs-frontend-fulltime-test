<template>
    <div class="flex gap-2 items-center overflow-auto py-3">
        <breadcrumb-item class="flex gap-1 items-center" target="/">
            <home-icon class="scale-75" />
            Home
        </breadcrumb-item>
        <chevron-right-icon class="scale-75 flex-shrink-0" />

        <template v-for="(item, index) in items">
            <chevron-right-icon v-if="index > 0" class="scale-75 flex-shrink-0" />
            <breadcrumb-item class="flex-shrink-0" :target="item.target">{{
                item.name
            }}</breadcrumb-item>
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
});
</script>
