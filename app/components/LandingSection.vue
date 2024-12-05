<template>
    <section class="full-section flex-center">
        <div class="container">
            <div class="flex-center gap-5">
                <div class="flex-1">
                    <div class="flex flex-col gap-5">
                        <h2 class="font-bold md:text-center text-6xl lg:text-5xl md:text-6xl">
                            Turning <span class="text-primary-text">Code</span> into <br />
                            Creative <span class="text-primary-text">Solutions</span>
                        </h2>
                        <p class="text-pretty text-lg w-3/4 md:text-center md:mx-auto">
                            Empowering the digital landscape with precision and passion,
                            transforming ideas into immersive online experiences.
                        </p>
                    </div>

                    <div class="fc gap-5 mt-14 md:justify-center">
                        <a href="#projects" class="btn btn-primary btn-lg"> Explore My Works </a>
                        <a href="/resume.pdf" download class="btn btn-light-outline btn-lg"
                            >Download CV</a
                        >
                    </div>
                </div>
                <div class="flex-1 md:hidden">
                    <div
                        class="w-full rounded-2xl relative flex-center overflow-hidden"
                        style="aspect-ratio: 4/3">
                        <span class="bg-blur bg-blur-dark"></span>

                        <NuxtIcon
                            name="landing"
                            filled
                            style="font-size: 30vw"
                            class="absolute drop-shadow" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
