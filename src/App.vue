<template>
    <div
        class="min-h-screen bg-white dark:bg-surface-900 p-8 flex items-center justify-center transition-colors duration-200">
        <div class="fixed w-full top-0 left-0 flex items-center justify-end gap-3 p-8">
            <DarkToggle />
            <ColorPalette />
        </div>

        <Toast position="bottom-center" @close="visible = false">
            <template #container="{ message, closeCallback }">
                <div class="flex items-center justify-between gap-8">
                    <span>{{ message.text }}</span>
                    <button type="button" @click="closeCallback"
                        class="px-4 py-2 rounded-lg text-primary-400 hover:bg-primary-500/20 dark:text-surface-700 dark:hover:bg-surface-200">{{
                            message.action }}</button>
                </div>
            </template>
        </Toast>

        <button type=" button" @click="show()"
            class="border bg-surface-50 border-surface-200 text-surface-700 dark:bg-surface-700 dark:border-surface-700 dark:text-surface-200 px-4 py-2 rounded-lg font-medium hover:bg-surface-100 dark:hover:bg-surface-600 transition duration-200">
            Save</button>
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import ColorPalette from './components/ColorPalette.vue';
import DarkToggle from './components/DarkToggle.vue';
import { ref } from 'vue';

const toast = useToast();
const visible = ref(false);

const show = () => {
    if (!visible.value) {
        toast.add({ text: 'All changes saved', action: 'Undo', sticky: true });
        visible.value = true;
    }
};
</script>