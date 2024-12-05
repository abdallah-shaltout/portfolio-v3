<template>
    <footer class="h-24 main-border-t flex-center">
        <div class="container">
            <div class="flex-between">
                <p>
                    &copy; {{ new Date().getFullYear() }}
                    <span class="uppercase text-primary-text">Abdallah Shaltout</span>
                </p>

                <ul class="fc gap-2.5">
                    <li v-for="(item, idx) in socialMedia" :key="idx">
                        <a target="_blank" :href="item.link" class="w-8 h-8 rounded-full btn-primary-outline flex-center">
                            <NuxtIcon :name="item.iconName" :class="item.iconClass" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
    import socialMedia from "~/assets/data/socialMedia.json";
</script>
