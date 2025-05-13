import { invoke } from "@tauri-apps/api/core";
let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

// 新增Vue初始化代码
import { createApp } from 'vue';
import App from './App.vue';

// 保留类型推断同时修复只读变量问题
let vueApp: ReturnType<typeof createApp> | null = null;

// 将Vue初始化移到DOMContentLoaded事件内部
window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });

  // 确保只挂载一次
  if (!vueApp) {
    // 创建并挂载Vue应用
    vueApp = createApp(App);
    vueApp.mount('#app');
  }
});

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}
