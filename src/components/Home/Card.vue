<template>
    <div class="w-full h-screen flex items-center text-center">
        <div class="shadow-gray-500 max-w-xl border-2 m-auto">
            <div>
                <div class="relative" :class="style.imgPreview">
                    <el-image
                        style="width: 200px; height: 200px"
                        :src="url"
                        class="border rounded-sm shadow-xl"
                    >
                    </el-image>
                    <div
                        class="absolute left-0 right-0 top-20"
                        :class="style.toolsBlock"
                    >
                        tool here
                    </div>
                </div>
            </div>
            <div class="text-sm">
                <p>Description</p>
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
console.log(style)
const url = ref(
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
)
</script>
<style lang="scss" module>
.imgPreview {
    .toolsBlock {
        @apply hidden;
    }
    &:hover {
        .toolsBlock {
            @apply block;
        }
    }
}
</style>
