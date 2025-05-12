<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'
import { ref } from 'vue';

const appWindow = getCurrentWindow()

const handleMinimize = () => appWindow.minimize()
const isMaximized = ref(false);

appWindow.isMaximized().then(maximized => isMaximized.value = maximized);
const handleMaximize = async () => {
  await appWindow.toggleMaximize();
  isMaximized.value = await appWindow.isMaximized();
}
const handleClose = () => appWindow.close()
</script>

<template>
  <div class="titlebar" data-tauri-drag-region>
    <div class="title">Temos</div>
    <div class="controls">
      <div class="titlebar-button mod-minimize" @click="handleMinimize">
        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
          <rect fill="currentColor" width="10" height="1" x="1" y="6" />
        </svg>
      </div>
      <div class="titlebar-button mod-maximize" @click="handleMaximize" :aria-label="isMaximized ? '恢复' : '最大化'">
        <svg v-if="!isMaximized" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1.5 3.5H8.5V10.5H1.5V3.5Z" stroke="currentColor" />
          <path d="M4 2H10V8H9V9H11V1H3V3H4V2Z" fill="currentColor" />
        </svg>
        <svg v-else aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
          <rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="currentColor" />
        </svg>
      </div>
      <div class="titlebar-button mod-close" @click="handleClose">
        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
          <path fill="currentColor" fill-rule="evenodd" d="M10.052 10.968 1.03 1.93l.849-.848 9.023 9.037-.849.848Z" />
          <path fill="currentColor" fill-rule="evenodd" d="M1.023 10.112 10.06 1.09l.848.85-9.037 9.023-.848-.85Z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titlebar {
  height: 30px;
  background: #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 10px;
  -webkit-app-region: drag;
}

.controls {
  display: flex;
  -webkit-app-region: no-drag;
}

.titlebar-button {
  width: 46px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.titlebar-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.titlebar-button.mod-close:hover {
  background-color: #c42b1c;
}

.titlebar-button svg {
  width: 12px;
  height: 12px;
  color: #000000;
}

.titlebar-button.mod-close:hover svg {
  color: white;
}
</style>