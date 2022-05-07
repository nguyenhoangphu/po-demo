<template>
    <el-input v-model="input" :placeholder="placeholder" clearable></el-input>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { debounce, trim } from 'lodash'
interface Props {
    placeholder?: string
}
const emit = defineEmits<{
    (e: 'input', id: string): void
}>()
const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Search',
})
const input = ref('')

const debounceHandler = debounce((val) => {
    emit('input', trim(`${val}`))
}, 500)

watch(input, (val) => {
    debounceHandler(val)
})
</script>
