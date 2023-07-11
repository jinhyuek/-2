import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./componentss/Heading";
import List from "./componentss/Post/List";
import Upload from "./componentss/Post/Upload";

function App() {
  const [ContentList, setContentList] = useState([]);

  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/"
          element={
            <List ContentList={ContentList} setContentList={setContentList} />
          }
        />
        <Route
          path="/Upload"
          element={
            <Upload ContentList={ContentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
