<template>
    <el-input
        v-model="input"
        :placeholder="placeholder"
        clearable
        size="medium"
        :suffix-icon="Search"
        :style="{ width: `${width}px` }"
    ></el-input>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { debounce, trim } from 'lodash'
import { Search } from '@element-plus/icons-vue'

interface Props {
    placeholder?: string
    width?: number
}
const emit = defineEmits<{
    (e: 'input', id: string): void
}>()
const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Search',
    width: '300',
})
const input = ref('')

const debounceHandler = debounce((val) => {
    emit('input', trim(`${val}`))
}, 500)

watch(input, (val) => {
    debounceHandler(val)
})
</script>
