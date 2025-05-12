<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [3]
      }
    })
  ],
  editorProps: {
    attributes: {
      class: 'tiptap',
    },
  },
  content: `<h2 data-pm-slice="1 2 []">Hi there,</h2><p>this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:</p><ul><li><p>That’s a bullet list with one …</p></li><li><p>… or two list items.</p></li></ul><p>Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:</p><pre><code class="language-css">body {
display: none;
}</code></pre><p>I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.</p><blockquote><p>Wow, that’s amazing. Good work, boy! 👏 <br>— Mom</p></blockquote>
`
})
</script>

<template>
  <div class="editor-container">
    <EditorContent :editor="editor" />
  </div>
</template>

<style scoped>
.editor-container {
  height: calc(100% - 40px);
  padding: 20px;
}
</style>