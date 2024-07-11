import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolBox";

export default function Editor({value, onChange}) {
  return (
    <div className="content">
        <EditorToolbar/>
    <ReactQuill
      value={value}
      theme={'snow'}
      onChange={(e) =>{onChange(e)}}
      placeholder={"Begin your journey..."}
      modules={modules}
      formats={formats} />
    </div>
  );
}