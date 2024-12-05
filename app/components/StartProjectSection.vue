<template>
    <section class="mb-12">
        <div class="container relative main-border h-40 sm:h-auto sm:py-6 flex-center rounded-xl">
            <span class="bg-blur bg-blur-dark"></span>
            <div class="flex-between md:w-nine md:flex-wrap w-5/6 xs:flex-col xs:gap-4">
                <h5 class="text-2xl font-medium text-primary-text md:w-full xs:w-auto md:mb-4">
                    Start a project
                </h5>
                <p class="text-lg sm:text-sm text-primary-text font-thin">
                    Interested in working together? We Should have a <br />
                    time to chat and discuss about the project.
                </p>
                <a  target="_blank" :href="`https://wa.me/${appSettings.whatsappNumber}?text=Hey`" class="btn btn-primary btn-lg sm:btn">
                    Say Hello
                </a>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import appSettings from "~/assets/data/app.json";
</script>
