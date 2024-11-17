import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import quillEmoji from 'quill-emoji';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css'; // Ensure you have this line to import emoji styles

const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

Quill.register({
  'formats/emoji': EmojiBlot,
  'modules/emoji-shortname': ShortNameEmoji,
  'modules/emoji-toolbar': ToolbarEmoji,
  'modules/emoji-textarea': TextAreaEmoji,
}, true);

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  modules = {
    toolbar: [
      [{ 'font': [] }, { 'header': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['emoji'],
      ['link'],
      ['clean']
    ],
    'emoji-toolbar': true,
    // 'emoji-textarea': true,
    // 'emoji-shortname': true,
  }

  formats = [
    'font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'color', 'background', 'list', 'indent', 'align', 'link', 'image', 'clean', 'emoji'
  ]

  render() {
    return (
      <div className="text-editor">
        <ReactQuill
          theme="snow"
          value={this.state.text}
          onChange={(value) => this.setState({ text: value })}
          modules={this.modules}
          formats={this.formats}
        />
      </div>
    );
  }
}

export default MyComponent;
