import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

function Boom() {
  // Minesweeper
  //generate field
  const [field, setField] = useState({
    data: [12],
  });
  function addValue() {
    setField({ ...field, data: [122, 12] });
  }
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div>
      <div className="p-4">Minefield have {field.data.length}</div>;
      <button
        onClick={() => {
          addValue();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Boom;
