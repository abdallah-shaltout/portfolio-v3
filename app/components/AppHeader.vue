<template>
    <header class="h-24 flex-center">
        <div class="container">
            <nav class="flex-between">
                <a href="#" class="text-2xl font-medium fc gap-2 relative z-11">
                    <span class="text-primary-text uppercase">Abdallah</span>
                    <span class="font-light uppercase">Shaltout</span>
                </a>
                <ul class="fc gap-4 font-medium text-lg sm:hidden">
                    <li v-for="(item, idx) in links" :key="idx">
                        <a :href="item.link" :class="item.LinkClass">{{ item.label }}</a>
                    </li>
                </ul>

                <LazyAppMenuBtn
                    class="hidden sm:flex !w-11 !h-11 z-12"
                    :class="{ active: show_menu }"
                    @click="show_menu = !show_menu" />
                <div
                    class="fixed right-0 top-0 h-full w-full z-10 hidden sm:block translate-x-full t-trans"
                    :class="{ '!translate-x-0': show_menu }">
                    <span class="bg-blur bg-blur-dark"></span>
                    <ul class="abs-center flex-center flex-col gap-6">
                        <li v-for="(item, idx) in links" :key="idx">
                            <a
                                @click="show_menu = false"
                                :href="item.link"
                                :style="{ animationDelay: `${idx * 0.3}s` }"
                                :class="[item.smLinkClass, show_menu ? 'show-link-animate' : '']"
                                >{{ item.label }}</a
                            >
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup lang="ts">
    import appSettings from "~/assets/data/app.json";

    const links = markRaw<{
        label: string;
        link: string;
        smLinkClass: string;
        LinkClass: string;
    }>([
        {
            label: "projects",
            link: "#projects",
            smLinkClass: "btn btn-primary-outline",
            LinkClass: "text-primary-text uppercase",
            target: "_self",
        },
        {
            label: "about",
            link: "#about",
            smLinkClass: "btn btn-primary-outline",
            LinkClass: "text-primary-text uppercase",
            target: "_self",
        },
        {
            label: "Say Hello",
            link: `https://wa.me/${appSettings.whatsappNumber}?text=Hey`,
            smLinkClass: "btn btn-primary",
            LinkClass: "btn btn-light-outline",
            target: "_blank",
        },
    ]);
    const show_menu = ref<boolean>(false);
</script>
