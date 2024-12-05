<template>
    <section class="py-40 flex-center main-border-t">
        <div class="container flex-center flex-col">
            <span class="btn btn-primary-outline btn-lg"> Testimonial </span>
            <span class="text-5xl font-bold text-primary-text mt-8">What Clients Say</span>

            <vue3-carousel v-bind="config" class="mt-14">
                <vue3-slide v-for="item in clientsItems" :key="item.id">
                    <div
                        class="w-full rounded-xl px-5 py-8 bg-dark/30 main-border relative flex flex-col"
                        style="aspect-ratio: 4/3">
                        <span class="bg-blur bg-blur-dark"></span>
                        <p class="text-pretty text-primary-text leading-7 md:my-auto">
                            {{ item.content }}
                        </p>

                        <div class="fc gap-2 mt-auto">
                            <NuxtImg
                                :src="item.avatar"
                                v-if="item.avatar"
                                alt=""
                                class="w-12 h-12 rounded-full" />
                            <span
                                class="w-12 h-12 rounded-full bg-primary-text text-primary flex-center"
                                v-else>
                                <NuxtIcon name="avatar" alt="" class="text-4xl" />
                            </span>
                            <p class="flex flex-col">
                                <span class="text-xl font-bold text-primary-text text-left">{{
                                    item.name
                                }}</span>
                                <span class="text-primary-text"
                                    >{{ item.position }}, {{ item.company }}</span
                                >
                            </p>
                        </div>
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
    import clientsItems from "@/assets/data/clients.ts";
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
