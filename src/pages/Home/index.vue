<template>
    <el-row :gutter="20" class="text-center">
        <el-col :span="4" v-for="item in data" :key="item">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <el-image :src="item.image" />
                <el-row class="gap-1 flex-col p-3">
                    <h3>{{ item.title }}</h3>
                    <el-row class="justify-around mt-3 items-center">
                        <span>{{ item.price }}$</span>
                        <el-button>Shop now</el-button>
                    </el-row>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
const data = ref([])
onMounted(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
        data.value = res.data
    })
})
</script>
<style lang="scss">
.el-image {
    &__inner {
        @apply max-h-52;
    }
}
</style>
