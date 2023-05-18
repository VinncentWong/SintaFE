import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const MyEditor = ({state, setState}: {state: string, setState: (e: string) => void}) => {
    const handleChange = (value: string) => {
      setState(value);
    };
  
    return (
      <ReactQuill
        style={{width: "90%"}}
        theme="snow"
        value={state}
        onChange={handleChange}
        modules={{
          toolbar: {
            container: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
              ['clean'],
            ],
          },
        }}
        formats={[
          'header',
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'list',
          'bullet',
          'link',
          'image',
        ]}
      />
    );
  };
  

export default MyEditor;