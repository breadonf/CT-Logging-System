import React from "react";
import MessageCard from "./MessageCard";
import mockData2 from "../LogbookForm/mockData2";

function BoxArray() {
  return (
    <>
      {Object.values(mockData2).map((value, index) => {
        return (
          <div key={index}>
            <MessageCard messageDetail={value} />
          </div>
        );
      })}
    </>
  );
}

export default BoxArray;
