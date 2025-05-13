<template>
  <div id="app" class="app-container">
    <div class="note-list">
      <h2>笔记列表</h2>
      <ul>
        <li 
          v-for="(note, index) in notes" 
          :key="note.id"
          :class="['note-item', { active: activeNoteIndex === index }]"
          @click="selectNote(index)"
        >
          {{ note.title || '未命名笔记' }}
        </li>
      </ul>
      <button @click="createNote">+ 新建笔记</button>
    </div>
    
    <div class="note-editor-container">
      <NoteEditor 
        v-if="activeNote" 
        :content="activeNote.content"
        @update:content="updateNoteContent"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NoteEditor from './components/NoteEditor.vue';

// 模拟笔记数据
const notes = ref([
  { 
    id: 1, 
    title: '示例笔记', 
    content: `<h2 data-pm-slice="1 2 []">Hi there,</h2><p>this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:</p><ul><li><p>That’s a bullet list with one …</p></li><li><p>… or two list items.</p></li></ul><p>Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:</p><pre><code class="language-css">body {
display: none;
}</code></pre><p>I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.</p><blockquote><p>Wow, that’s amazing. Good work, boy!  <br>— Mom</p></blockquote>` 
  },
  { 
    id: 2, 
    title: '新笔记', 
    content: '<p>开始记录...</p>' 
  }
]);

const activeNoteIndex = ref(0);
const activeNote = ref(notes.value[activeNoteIndex.value]);

const selectNote = (index: number) => {
  activeNoteIndex.value = index;
  activeNote.value = notes.value[index];
};

const createNote = () => {
  const newId = Math.max(...notes.value.map(n => n.id)) + 1;
  notes.value.push({
    id: newId,
    title: `新笔记 ${newId}`,
    content: '<p>开始记录...</p>'
  });
  selectNote(notes.value.length - 1);
};

const updateNoteContent = (content: string) => {
  if (activeNote.value) {
    activeNote.value.content = content;
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.note-list {
  width: 250px;
  padding: 1rem;
  border-right: 1px solid #e4e4e4;
  overflow-y: auto;
}

.note-editor-container {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

ul {
  list-style: none;
  padding-left: 0;
}

.note-item {
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.note-item:hover {
  background-color: #f0f0f0;
}

.note-item.active {
  background-color: #e0e0e0;
  font-weight: bold;
}
</style>