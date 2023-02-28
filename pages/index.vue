<template>
    <section class="hero w-100 bg-secondary-2 relative overflow-hidden">
        <div
            class="container px-4 py-6 md:h-96 flex-column items-center justify-center relative z-10"
        >
            <h1 class="h1 text-white">Foodies</h1>
            <p class="paragraph md:max-w-lg text-center mt-2 text-white text-opacity-90">
                Your ultimate source for a comprehensive list of food ingredients. Find your needed
                ingredients and meals easily here!
            </p>
        </div>
        <img
            src="https://i.ibb.co/jk7GmKq/image-10-1-1.png"
            alt="Hero banner"
            class="absolute top-0 left-0 right-0"
        />
    </section>

    <section class="food-list container py-12">
        <h1 class="h2 text-center">All Ingredients</h1>
        <p class="paragraph text-center">Find the ingredient here to see all available meals</p>
        <SearchBox class="mt-4" />
    </section>
</template>
