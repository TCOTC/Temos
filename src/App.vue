<script setup lang="ts">
import { ref } from "vue";
import RichTextEditor from './components/RichTextEditor.vue'

const notes = ref([{ id: 1, title: '示例笔记' }])
</script>

<template>
  <main class="app-container">
    <div class="notes-list">
      <h3>笔记列表</h3>
      <div class="note-item" v-for="note in notes" :key="note.id">
        {{ note.title }}
      </div>
    </div>
    <div class="editor-section">
      <RichTextEditor />
    </div>
  </main>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.notes-list {
  width: 250px;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
}

.note-item {
  padding: 10px;
  margin: 5px 0;
  background: #f5f5f5;
  cursor: pointer;
}

.editor-section {
  flex: 1;
  padding: 20px;
}
</style>
<style>
:root {
  color-scheme: light;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: #0f0f0f;
  background-color: #f6f6f6;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

/* 编辑器全局样式 */
.tiptap {
  min-height: calc(100vh - 2rem);
  padding: 1rem;
}

.tiptap:focus-visible {
  outline: none;
}

.tiptap > * + * {
  margin-top: 0.75em;
}

.tiptap ul,
.tiptap ol {
  padding: 0 1rem;
}

.tiptap h1,
.tiptap h2,
.tiptap h3,
.tiptap h4,
.tiptap h5,
.tiptap h6 {
  line-height: 1.1;
}

.tiptap code {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.2rem;
}

.tiptap pre {
  background: rgba(0, 0, 0, 0.05);
  font-family: "JetBrainsMono", monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.tiptap pre code {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
  border: none;
}

.tiptap img {
  max-width: 100%;
  height: auto;
}

.tiptap blockquote {
  margin-left: 0;
  padding-left: 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.4);
}

.tiptap hr {
  border: none;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
}

/* 按钮样式 */
button {
  background-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  border: 2px solid #1d1d1d;
  border-radius: 0.4em;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

button:disabled {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.2);
  cursor: not-allowed;
}

.container {
  margin: 0;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
}

.logo.tauri:hover {
  filter: drop-shadow(0 0 2em #24c8db);
}

.row {
  display: flex;
  justify-content: center;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

h1 {
  text-align: center;
}

input,
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #0f0f0f;
  background-color: #ffffff;
  transition: border-color 0.25s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
}

button:hover {
  border-color: #396cd8;
}
button:active {
  border-color: #396cd8;
  background-color: #e8e8e8;
}

input,
button {
  outline: none;
}

#greet-input {
  margin-right: 5px;
}

@media (prefers-color-scheme: dark) {
  :root {
    color: #f6f6f6;
    background-color: #2f2f2f;
  }

  a:hover {
    color: #24c8db;
  }

  input,
  button {
    color: #ffffff;
    background-color: #0f0f0f98;
  }
  button:active {
    background-color: #0f0f0f69;
  }
}

</style>