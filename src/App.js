import React from "react";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div>
        <FileUpload
          accept=""
          multiple
        />
    </div>
  );
}

export default App;