<template>
    <div class="flex h-screen flex-col">
        <nav class="sticky top-0 z-20">
            <base-navigation></base-navigation>
        </nav>
        <main class="p-3 flex-1">
            <slot></slot>
        </main>
        <footer>footer here</footer>
    </div>
</template>
<script setup></script>
