import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import StyleClass from "primevue/styleclass";
import MyPreset from "./mypreset";

const app = createApp(App);
app.component("Toast", Toast);
app.directive("styleclass", StyleClass);
app.use(PrimeVue, { unstyled: true, pt: MyPreset });
app.use(ToastService);
app.mount("#app");
