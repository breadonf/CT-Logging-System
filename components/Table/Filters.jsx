import React from "react";
import Dropdown from "./Dropdown";

export default function Filter({ protocols, isSuccess }) {
  return (
    <div className="flex items-center mt-5">
      {isSuccess &&
        protocols.map((protocol) => (
          <Checkbox key={protocol.id} label={protocol.name} />
        ))}
    </div>
  );
}
