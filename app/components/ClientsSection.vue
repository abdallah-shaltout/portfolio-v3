<template>
    <section class="py-14 flex-center" id="projects">
        <div class="container flex-center flex-col">
            <h2 class="text-4xl font-bold text-dark mt-8 section-title">
                عملائنا
            </h2>

            <vue3-carousel v-bind="config" class="mt-14 w-full">
                <vue3-slide
                    v-for="item in 12"
                    :key="`me me ${item}`"
                    class="px-2"
                >
                    <div
                        class="w-full relative rounded bg-slate-100 flex-center overflow-hidden"
                        style="aspect-ratio: 5/3"
                    >
                        <NuxtImg
                            src="/clients/google.png"
                            class="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>
                </vue3-slide>
            </vue3-carousel>
            <vue3-carousel v-bind="config" class="mt-5 w-full" dir="rtl">
                <vue3-slide
                    v-for="item in 12"
                    :key="`me me ${item}`"
                    class="px-2"
                >
                    <div
                        class="w-full relative rounded bg-slate-100 flex-center overflow-hidden"
                        style="aspect-ratio: 5/3"
                    >
                        <NuxtImg
                            src="/clients/google.png"
                            class="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>
                </vue3-slide>
            </vue3-carousel>
        </div>
    </section>
</template>

<script lang="ts" setup>
import projectsJson from '@/assets/data/projects.json'

const config = {
    itemsToShow: 4,
    transition: 500,
    itemsToScroll: 1,
    snapAlign: 'center',
    autoplay: 20000,
    wrapAround: true,

    breakpoints: {
        768: {
            itemsToShow: 4,
        },
        992: {
            itemsToShow: 6,
        },
    },
}
</script>
