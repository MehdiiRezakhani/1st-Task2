import React, {useRef, useState} from "react";
//styles
import {
  Div,
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  PreviewContainer,
  Progress,
  PreviewList,
} from "./style.js";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;

const FileUpload = ({
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const [progress, setProgress] = useState(0)

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };

  };


  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
    }
    setProgress(100);
  };

  const downloadHandler = (file) => {
      fetch(file).then(() => {
            const fileURL = window.URL.createObjectURL(file);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = file.name;
            alink.click();
        })
  }

  return (
    <Div>
      <FileUploadContainer>
        <DragDropText>Drag and drop your files anywhere or</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          Upload {otherProps.multiple ? "files" : "a file"}
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>
      <Progress progress={progress}>
        <p>Status : {progress}%</p>
        <div>
          <progress max="100" value={progress}>{progress}</progress>
        </div>
      </Progress>
      <FilePreviewContainer>
        <p>Uploaded Files : </p>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            return (
              <PreviewContainer key={fileName} onClick={()=> downloadHandler(file)}>
                <iframe src={URL.createObjectURL(file)} title={file.name}></iframe>
                <button>Download</button>
                <p>name: {file.name}<br/>size: {file.size}B<br/>type: {file.type}</p>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
    </Div>
  );
};

export default FileUpload;
