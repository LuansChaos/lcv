<script lang="ts" name="button" setup>

interface ButtonProps {
    type?: 'primary' | 'secondary' | 'default';
    text?: string;
    disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
    text: '按钮',
    type: 'default',
    disabled: false,
});
</script>

<template>
    <button :class="['lcv-button', `lcv-button--${type}`]" :disabled="disabled">
        <slot>{{ text }}</slot>
    </button>
</template>

<style lang="less">
.lcv-button {
    background: blueviolet;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;

    &--primary {
        background: #007bff;
    }

    &--secondary {
        background: #6c757d;
    }

    &--default {
        background: blueviolet;
    }

    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }
}
</style>