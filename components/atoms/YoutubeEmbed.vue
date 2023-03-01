<template>
    <iframe
        width="100%"
        :src="`https://www.youtube.com/embed/${youtubeId}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="mt-4 rounded-lg h-56 md:h-96"
    ></iframe>
</template>

<script setup>
const props = defineProps({
    youtubeId: {
        type: String,
        required: true,
    },
});
</script>
