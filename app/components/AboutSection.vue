<template>
    <section class="py-40 md:py-20 main-border border-r-0 border-l-0" id="about">
        <div class="container h-full md:flex-col fc gap-12">
            <div class="flex-1 h-full relative">
                <NuxtImg
                    loading="lazy"
                    src="/me.jpeg"
                    class="h-full grayscale trans-all rounded-xl hover:grayscale-0 flex-1 object-cover" />
            </div>
            <div class="flex-1 flex justify-center flex-col gap-2 h-full">
                <span class="btn btn-primary-outline w-fit mb-5"> About </span>
                <h3 class="text-primary-text text-5xl font-bold">Web Developer</h3>

                <p class="text-xl mt-5 mb-12 light-span">
                    Hello, I'm <span>Md Titumir Anan</span>, a passionate
                    <span>Junior Frontend Developer</span>
                    from Bangladesh with a knack for turning design concepts into
                    <span>responsive</span> and visually appealing websites. Adept at HTML, CSS,
                    JavaScript, React, Next JS and complemented by my cyber security expertise. I
                    thrive on creating seamless user experiences. Committed to staying
                    <span>ahead in web development trends</span> and delivering top-notch projects
                    with satisfaction.
                </p>

                <ul class="flex flex-col gap-2">
                    <li class="fc gap-1 font-medium">
                        <NuxtIcon name="whatsapp" class="text-4xl" />
                        <span class="text-lg">+{{ appSettings.whatsappNumber }}</span>
                    </li>
                    <li class="fc gap-3 font-medium">
                        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                        <NuxtIcon name="email" filled class="text-3xl" />

                        <span class="text-lg">{{ appSettings.email }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import appSettings from "~/assets/data/app.json";
</script>
