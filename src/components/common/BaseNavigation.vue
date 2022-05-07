<template>
    <div
        class="flex flex-row bg-gray-300 mb-8 align-baseline items-center w-full justify-between"
    >
        <div
            class="w-16 border-1 border-solid border-gray-50 flex flex-row gap-4"
        >
            <img :src="adidas" />
            <div
                v-for="(item, index) in NAVIGATION_ITEMS"
                :key="`${item.name}_${index}`"
                class="hover:bg-yellow-50 p-2 m-0"
            >
                <router-link :to="item.to">
                    {{ item.name }}
                </router-link>
            </div>
        </div>
        <div class="flex flex-row items-center gap-4">
            <base-search-bar
                @input="onInput"
                :placeholder="`Search 3`"
                @change="onChange"
            >
            </base-search-bar>
            <base-dropdown></base-dropdown>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NAVIGATION_ITEMS } from '@/constants/BaseNavigation'
import adidas from '@/assets/adidas.jpeg'
const onInput = (value) => {
    console.log(value)
}
const onChange = (val) => {
    console.log(val)
}
</script>
