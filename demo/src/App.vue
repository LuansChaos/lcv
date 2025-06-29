<script lang="ts" setup>
import { Button } from "@lcv/ui";
import { useStoreApp } from "./store/app";
const app = useStoreApp();
console.log(app);
</script>

<template>
    <div>
        <Button text="按钮">按钮</Button>
        <button @click="app.increment">{{ app.count }} + {{ app.doubleCount }}</button>
        <lcv-button>111</lcv-button>
        <router-view></router-view>
    </div>
</template>
