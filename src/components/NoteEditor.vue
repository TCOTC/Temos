<template>
  <div class="note-editor">
    <editor-content 
      :editor="editor" 
      class="editor-content"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, onBeforeUnmount } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

// 接收内容属性
const props = defineProps<{
  content: string;
}>();

// 定义更新事件
const emit = defineEmits<{
  (e: 'update:content', content: string): void;
}>();

// 初始化编辑器
const editor = useEditor({
  content: props.content,
  extensions: [
    StarterKit
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none'
    }
  }
});

// 使用事件监听替代轮询
if (editor.value) {
  editor.value.on('update', ({ editor }) => {
    emit('update:content', editor.getHTML());
  });
}

// 监听props.content变化并同步到编辑器
watch(() => props.content, (newContent) => {
  if (editor.value && editor.value.getHTML() !== newContent) {
    editor.value.commands.setContent(newContent);
  }
});

// 清理资源
onMounted(() => {
  if (editor.value) {
    // 确保在组件卸载时销毁编辑器
    onBeforeUnmount(() => {
      editor.value?.destroy();
    });
  }
});
</script>

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

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-corner {
  background-color: rgb(225 21 21);
}

::-webkit-scrollbar-thumb {
  box-sizing: content-box;
  border: 4px solid rgba(0,0,0,0);
  border-radius: 6px;
  box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, .2);
}

::-webkit-scrollbar-thumb:hover {
  border-width: 1px;
}

/* 编辑器全局样式 */
.tiptap {
  min-height: 2rem;
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
</style>

<style scoped>
.note-editor {
  padding: 1.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: #f9fafb;
  transition: all 0.2s ease;
  min-height: 300px;
}

.editor-content {
  @extend .tiptap;
  min-height: 200px;
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


.note-editor {
  padding: 1rem;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  min-height: 300px;
}

.editor-content {
  min-height: 200px;
  padding: 0.5rem;
}
</style>