<template>
    <section>
        <div class="container">
            <div class="fl-5">
                <h2 class="text-4xl w-fit font-bold section-title">
                    لماذا تختارنا
                </h2>
                <div class="fc gap-2">
                    <p>
                        هدفنا نسعى لتحسين حياة الناس من خلال بناء المنشآت
                        والبنية التحتية التي تحتاجها المجتمعات، لضمان مستقبل
                        أفضل وأكثر استدامة للجميع.
                    </p>
                    <button
                        class="px-5 whitespace-nowrap py-2 rounded-full bg-primary text-primary-text trans hover:bg-primary/80 font-semibold"
                    >
                        تواصل معنا
                    </button>
                </div>

                <div
                    class="relative group w-full h-64 overflow-hidden cursor-pointer"
                >
                    <button
                        class="abs-center w-14 h-14 flex-center rounded-full bg-slate-50 shadow trans group-hover:bg-primary text-dark group-hover:text-white z-2"
                    >
                        <NuxtIcon
                            name="play"
                            filled
                            class="text-4xl [&>svg]:!m-0"
                        />
                    </button>
                    <NuxtImg
                        loading="lazy"
                        src="/images/landing-small.jpg"
                        class="w-full h-full object-cover rounded-2xl shadow-sm transition-all duration-500 ease-in-out group-hover:brightness-75"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style></style>
