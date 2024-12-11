<template>
    <section>
        <div
            class="fc gap-4 bg-dark h-80 text-slate-50 rounded-lg overflow-hidden"
        >
            <div class="flex-1 pr-10">
                <h2
                    class="font-bold text-3xl w-fit before:!right-0 before:!translate-x-0 section-title"
                >
                    من نحن
                </h2>
                <p class="mt-4">
                    جاليـفورد تراي هي إحدى أبرز مجموعات البناء في المملكة
                    المتحدة، تعمل على تحسين البيئة العمرانية في البلاد وتقديم
                    تغييرات مستدامة للمجتمعات التي نخدمها.
                </p>
                <button
                    class="whitespace-nowrap fc gap-2 pl-4 mt-5 pr-2 py-2 rounded-full bg-primary text-primary-text trans hover:bg-primary/80 font-semibold"
                >
                    <span>اقرا المزيد</span>
                    <span class="rotate-180">
                        <NuxtIcon name="arrow-right" class="text-sm" />
                    </span>
                </button>
            </div>
            <div class="flex-1 h-full">
                <NuxtImg
                    src="/images/workers.jpg"
                    class="custom-image-clip-right h-full object-cover mr-auto"
                />
            </div>
        </div>
    </section>
</template>
