<template>
    <section class="py-14 flex-center">
        <div class="container">
            <div class="flex-center gap-5">
                <div class="flex-1 fl-5">
                    <h2 class="text-5xl font-bold">
                        شركة ذات رؤية إنسانية ونهج متقدم
                    </h2>
                    <p class="text-sm mt-4 text-secondaryText">
                        تعد شركة Galliford Try واحدة من أبرز الشركات الرائدة في
                        مجالات البناء والبنية التحتية في المملكة المتحدة، ملتزمة
                        بتقديم مشاريع عالية الجودة بأعلى المعايير.
                    </p>
                    <button
                        class="px-5 py-2 mt-7 mb-10 rounded-full bg-primary text-primary-text trans hover:bg-primary/80 font-semibold w-fit"
                    >
                        تواصل معنا
                    </button>
                </div>
                <div class="flex-1">
                    <div
                        class="w-full rounded-2xl relative flex-center overflow-hidden shadow-lg aspect-square"
                    >
                        <NuxtImg
                            loading="lazy"
                            src="/images/landing.jpg"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div class="flex-center gap-5">
                <div class="flex-1">
                    <NuxtImg
                        loading="lazy"
                        src="/images/landing-small.jpg"
                        class="w-full h-36 object-cover rounded-2xl shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <h3 class="text-3xl font-bold">نستخدم أفضل المواد!</h3>
                    <div class="fc gap-2 mt-2">
                        <p class="text-sm">
                            تضمن جودة المواد التي نعتمد عليها أداءً فائقاً
                            ونتائج تدوم طويلاً.
                        </p>

                        <button
                            class="whitespace-nowrap fc gap-2 pl-4 pr-2 py-2 rounded-full bg-primary text-primary-text trans hover:bg-primary/80 font-semibold"
                        >
                            <span
                                class="rounded-full w-8 h-8 bg-white flex-center text-dark trans"
                            >
                                <NuxtIcon name="arrow-top" />
                            </span>
                            <span>اقرا المزيد</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
