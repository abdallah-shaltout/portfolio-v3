<template>
    <section class="py-40 flex-center" id="projects">
        <div class="container flex-center flex-col">
            <span class="btn btn-primary-outline btn-lg"> Works </span>
            <span class="text-5xl font-bold text-primary-text mt-8"> Explore My Works </span>

            <vue3-carousel v-bind="config" class="mt-14">
                <vue3-slide v-for="item in projectsJson" :key="item.id">
                    <div
                        class="w-full relative rounded-xl overflow-hidden group"
                        style="aspect-ratio: 4/3">
                        <span class="bg-blur bg-blur-dark"></span>

                        <span
                            class="w-full h-full bottom-0 left-0 translate-y-full absolute z-2 bg-dark/70 group-hover:translate-y-0 trans-all flex-center flex-col items-start p-4 gap-4">
                            <span class="text-primary-text text-xl font-bold">{{
                                item.title
                            }}</span>
                            <a :href="item.demo" target="_blank" class="btn btn-primary">
                                live preview
                            </a>
                        </span>

                        <NuxtImg :src="item.image" class="w-full h-full object-cover" />
                    </div>
                </vue3-slide>

                <template #addons>
                    <vue3-pagination />
                    <vue3-navigation />
                </template>
            </vue3-carousel>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import projectsJson from "@/assets/data/projects.json";

    const config = {
        itemsToShow: 1,
        transition: 500,
        itemsToScroll: 1,
        snapAlign: "center",
        wrapAround: true,
        breakpoints: {
            768: {
                itemsToShow: 2,
            },
            1280: {
                itemsToShow: 3,
            },
        },
    };
</script>
