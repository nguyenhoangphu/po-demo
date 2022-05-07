<template>
    <div class="w-full h-screen flex items-center text-center">
        <div
            class="shadow-gray-500 max-w-xl border-2 m-auto"
            @click="onClickDetail"
        >
            <div>
                <div class="relative" :class="style.imgPreview">
                    <el-image
                        style="width: 200px; height: 200px"
                        :src="url"
                        class="border rounded-sm shadow-xl"
                    >
                    </el-image>
                    <div
                        class="absolute w-full h-full top-0 left-0"
                        :class="style.toolsBlock"
                    ></div>
                </div>
            </div>
            <div class="text-sm">
                <p>Sponge Cake</p>
            </div>
        </div>
    </div>
</template>

<script>
name: 'Card'
</script>

<script setup>
import { ref, useCssModule } from 'vue'
const style = useCssModule()
const onClickDetail = () => {
    console.log('click detail')
}
const url = ref(
    'https://realbakers.in/wp-content/uploads/2017/08/KID-CAKE-3.jpg'
)
</script>
<style lang="scss" module>
.imgPreview {
    &:hover {
        :global {
            img {
                @apply duration-700;
                @apply scale-125;
            }
        }
        .toolsBlock {
            @apply bg-black;
            @apply opacity-30;
            @apply cursor-pointer;
        }
    }
}
</style>
