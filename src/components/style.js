import styled from "styled-components";

export const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`;

export const FileUploadContainer = styled.section`
  width:300px;
  height:300px;
  position: relative;
  margin: 25px 0 15px;
  border: 2px dotted lightgray;
  padding: 35px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  background-color: white;
`;

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

export const DragDropText = styled.p`
  font-weight: bold;
  letter-spacing: 2.2px;
  margin-top: 0;
  text-align: center;
`;

export const UploadFileBtn = styled.button`
  box-sizing: border-box;
  background-color: #fff;
  border: 2px solid #3498db;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 1.1em 2.8em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  color: #3498db;

`;

export const Progress = styled.div`
  width: 200px;
  margin: 0px 0px 10px;
  progress {
    opacity : 0px;
  }
  p {
    position: relative;
  }
  div {
    position: relative;
    height: 20px;
    border-radius: 6px;
    overflow: hidden;
  }
`;


 

export const FilePreviewContainer = styled.article`
  margin-bottom: 35px;

  p {
    font-size: 14px;
    text-align:center;
  }
`;

export const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items:center;
  margin-top: 10px;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const PreviewContainer = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  padding:0px;
  margin : 10px;
  box-sizing: border-box;
  height:300px;
  width:300px;
  overflow:hidden;
  border: 2px solid #3498db; 
  border-radius: 6px;
  iframe {
    width:100%;
    height:100%;
  }
  button {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:10;
    box-sizing: border-box;
    background-color: transparent;
    border: 2px solid #3498db;
    cursor: pointer;
    font-size: 0.8rem;
    line-height: 1;
    padding: 1.1em 2.8em;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 6px;
    color: #3498db;
    transition:all ease 0.3s;
    &:hover {
      color:#fff;
      background-color:#3498db;
    }
  }
`;
