import React, { useState } from 'react'

function Test() {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);
  
  const onSubmit = () => {
    let tempArr = [...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr])
    setContent("");

  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItmes: "center",
        width: "100%",
      }}
    >
      {ContentList.map((content, idx) => {
        return (<div 
          key={idx}
          style={{
            width: "100%",
            marginLeft: "1rem",
          }}
          > 
            내용:{content}
            <hr/>
          </div>)
      })}
      <input 
      type="text"
      value={Content}
      onChange={(e) => {
        setContent(e.currentTarget.value);
      }}
      />
      <button 
      style={{marginTop: "1rem"}}
      onClick = {() => {
        onSubmit();
      }}
      >제출!</button>
    </div>
  );  
}

export default Test;
