<template>
    <el-row
        :gutter="2"
        class="flex-row justify-between bg-white items-center border-b-2 pl-2 pr-2"
    >
        <el-col :span="8">
            <el-image class="image-container" :src="adidas"></el-image>
        </el-col>
        <el-col :span="4">
            <el-menu default-active="1" mode="horizontal">
                <el-sub-menu index="1">
                    <template #title> MEN </template>
                    <el-menu-item index="1.1">Shoes</el-menu-item>
                    <el-menu-item index="1.2">Clothing</el-menu-item>
                    <el-menu-item index="1.3">Accessories</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title> WOMEN </template>
                    <el-menu-item index="2.1">Shoes</el-menu-item>
                    <el-menu-item index="2.2">Clothing</el-menu-item>
                    <el-menu-item index="2.3">Accessories</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title> KIDS </template>
                    <el-menu-item index="3.1">Shoes</el-menu-item>
                    <el-menu-item index="3.2">Clothing</el-menu-item>
                    <el-menu-item index="3.3">Accessories</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>
        <el-col :span="8">
            <div class="flex flex-row items-center justify-end gap-4 p-4">
                <base-search-bar
                    @input="onInput"
                    placeholder="Search"
                    @change="onChange"
                    :width="300"
                ></base-search-bar>

                <el-badge value="10">
                    <el-button :icon="ShoppingCart" size="small" />
                </el-badge>
            </div>
        </el-col>
    </el-row>
</template>
<script setup lang="ts">
import { NAVIGATION_ITEMS } from '@/constants/BaseNavigation'
import adidas from '@/assets/adidas.jpeg'
import { ShoppingCart } from '@element-plus/icons-vue'
const onInput = (value) => {
    console.log(value)
}
const onChange = (val) => {
    console.log(val)
}
</script>
<style lang="scss">
.el-menu--horizontal {
    border-bottom: none;
}
.image-container {
    img {
        @apply h-12;
    }
}
</style>
