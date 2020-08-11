import React, { useState } from "react";
import inThisHouseWe from "in-this-house-we";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div>
      <form>
        <label>
          in this house we &nbsp;
          <input
            onChange={(evt) => setValue(inThisHouseWe(evt.target.value))}
          />
        </label>
      </form>
      <pre>{value}</pre>
    </div>
  );
}
