<template>
    <header class="h-20 flex-center">
        <div class="container">
            <nav class="flex-between md:flex-row-reverse">
                <a href="#" class="md:hidden">
                    <button
                        class="px-5 py-2 rounded-full bg-primary text-primary-text trans hover:bg-primary/80 font-semibold"
                    >
                        تواصل معنا
                    </button>
                </a>
                <ul class="fc gap-4 sm:hidden">
                    <li v-for="(item, idx) in links" :key="idx">
                        <a
                            :href="item.route"
                            class="text-secondaryText font-bold uppercase trans hover:text-primary"
                            >{{ item.label }}</a
                        >
                    </li>
                </ul>

                <a href="#">
                    <NuxtImg
                        src="/logo.png"
                        alt="logo"
                        loading="lazy"
                        class="w-36 h-auto"
                    />
                </a>

                <LazyAppMenuBtn
                    class="hidden sm:flex !w-11 !h-11 z-12"
                    :class="{ active: show_menu }"
                    @click="show_menu = !show_menu"
                />
                <div
                    class="fixed right-0 top-0 h-full w-full z-10 hidden sm:block translate-x-full t-trans"
                    :class="{ '!translate-x-0': show_menu }"
                >
                    <span class="bg-blur bg-blur-light"></span>
                    <ul class="abs-center flex-center flex-col gap-6">
                        <li v-for="(item, idx) in links" :key="idx">
                            <a class="text-xl font-bold flex-center" @click="show_menu = false" :href="item.route">{{
                                item.label
                            }}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup lang="ts">
import appSettings from '~/assets/data/app.json'

const links = markRaw<{
    label: string
    route: string
}>([
    {
        label: 'الرئيسية',
        route: '#',
    },
    {
        label: 'لماذا تختارنا؟',
        route: '#whyus',
    },
    {
        label: 'الاستدامة',
        route: '#sustainability',
    },
    {
        label: 'فرص العمل',
        route: '#jobs',
    },
])
const show_menu = ref<boolean>(false)
</script>
