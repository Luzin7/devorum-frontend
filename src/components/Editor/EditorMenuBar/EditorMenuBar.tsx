import { Editor } from '@tiptap/react';
import React from 'react';
import { Bold, Code, Heading1, Heading2, Italic, Quote } from 'lucide-react';

interface EditorMenuBarProps {
  editor: Editor;
}

export function EditorMenuBar({ editor }: EditorMenuBarProps) {
  return (
    <div className="flex justify-evenly w-full flex-wrap gap-2 lg:w-2/5">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <Bold className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        <Italic className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
      >
        <Code className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
      >
        <Quote className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="w-6 h-6" />
      </button>
    </div>
  );
}
