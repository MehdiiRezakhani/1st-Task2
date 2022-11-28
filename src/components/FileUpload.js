import React, {useRef, useState} from "react";
//styles
import {
  Div,
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  Progress,
  PreviewContainer,
  PreviewList,
  FileMetaData,
} from "./style.js";

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);
const FileUpload = ({
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const [progress, setProgress] = useState(0)

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
    setProgress(0)
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
    setProgress(100)
  };

    const downloadHandler = (file) => {
        fetch(file).then(() => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(file);
                // Setting various property values
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
      <Progress value={progress} max="100">{progress}</Progress>
      <FilePreviewContainer>
        <p>Uploaded Files : </p>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            return (
              <PreviewContainer key={fileName}>
                <div onClick={() => downloadHandler(file)}>
                    <iframe src={URL.createObjectURL(file)} height="300" width="300"></iframe>
                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
    </Div>
  );
};

export default FileUpload;