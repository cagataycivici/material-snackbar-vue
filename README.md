# PrimeVue Toast as a Material SnackBar

Material Design for Toast Component for SnackBar functionality

## Headless Template

The preset of the toast is pretty simple as content is defined using a headless template to implement Material Snackbar UI.

```html
<Toast position="bottom-center" @close="visible = false">
    <template #container="{ message, closeCallback }">
        <div class="flex items-center justify-between gap-8">
            <span>{{ message.text }}</span>
            <button
                type="button"
                @click="closeCallback"
                class="px-4 py-2 rounded-lg text-primary-400 hover:bg-primary-500/20 dark:text-surface-700 dark:hover:bg-surface-200"
            >
                {{ message.action }}
            </button>
        </div>
    </template>
</Toast>
```

## tailwind.config.js

Add semantic colors to be able to customize the colors of the Toast.

```js
export default {
    //...
    theme: {
        extend: {
            colors: {
                "primary-50": "rgb(var(--primary-50))",
                "primary-100": "rgb(var(--primary-100))",
                "primary-200": "rgb(var(--primary-200))",
                "primary-300": "rgb(var(--primary-300))",
                "primary-400": "rgb(var(--primary-400))",
                "primary-500": "rgb(var(--primary-500))",
                "primary-600": "rgb(var(--primary-600))",
                "primary-700": "rgb(var(--primary-700))",
                "primary-800": "rgb(var(--primary-800))",
                "primary-900": "rgb(var(--primary-900))",
                "primary-950": "rgb(var(--primary-950))",

                "surface-0": "rgb(var(--surface-0))",
                "surface-50": "rgb(var(--surface-50))",
                "surface-100": "rgb(var(--surface-100))",
                "surface-200": "rgb(var(--surface-200))",
                "surface-300": "rgb(var(--surface-300))",
                "surface-400": "rgb(var(--surface-400))",
                "surface-500": "rgb(var(--surface-500))",
                "surface-600": "rgb(var(--surface-600))",
                "surface-700": "rgb(var(--surface-700))",
                "surface-800": "rgb(var(--surface-800))",
                "surface-900": "rgb(var(--surface-900))",
                "surface-950": "rgb(var(--surface-950))",
            },
        },
    },
    //...
};
```
