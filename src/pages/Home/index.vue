<template>
    <el-button @click="drawer2 = true">hello world</el-button>
    <el-drawer v-model="drawer2" direction="ltr">
        <template #title>
            <h4>title here</h4>
        </template>
        <template #default>
            <div>default here</div>
        </template>
        <template #footer>
            <div>footer here</div>
        </template>
    </el-drawer>
    <el-switch v-model="loading"></el-switch>
    <el-row :gutter="20" class="text-center">
        <el-skeleton
            :loading="loading"
            animated
            :throttle="500"
            :count="20"
            class="flex flex-wrap"
        >
            <template #template>
                <el-col :span="4">
                    <el-skeleton-item variant="image" class="!h-56" />
                    <div class="p-3">
                        <el-skeleton-item variant="h3" class="w-1/2" />
                        <div class="flex items-center mt-4 h-4">
                            <el-skeleton-item
                                variant="text"
                                style="margin-right: 16px"
                            />
                            <el-skeleton-item variant="text" class="w-1/3" />
                        </div>
                    </div>
                </el-col>
            </template>
            <template #default>
                <el-col
                    :span="4"
                    v-for="item in data"
                    :key="item"
                    class="gap-y-5"
                >
                    <el-card shadow="hover" :body-style="{ padding: '0px' }">
                        <el-image :src="item.image" class="h-56" />
                        <el-row class="gap-1 flex-col p-3">
                            <h3 class="text-overflow max-w-full">
                                {{ item.title }}
                            </h3>
                            <el-row class="justify-around mt-3 items-center">
                                <span>{{ item.price }}$</span>
                                <el-button>Shop now</el-button>
                            </el-row>
                        </el-row>
                    </el-card>
                </el-col>
            </template>
        </el-skeleton>
    </el-row>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
const data = ref([])
const loading = ref(false)
const drawer2 = ref(false)
const cancelClick = () => {
    drawer2.value = false
}
const _fetchStoreApi = async () => {
    try {
        loading.value = true
        const { data: response } = await axios.get(
            'https://fakestoreapi.com/products'
        )
        data.value = response
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
}
onMounted(() => {
    _fetchStoreApi()
})
</script>
<style lang="scss" module></style>
