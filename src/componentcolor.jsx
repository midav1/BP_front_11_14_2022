import React, { useState } from "react";

export default function ComponentColor() {
  const [changeColor, setColor] = useState('');
  return (
    <div style={{background:changeColor}}>
      <input type="color"  onChange={event => setColor(event.target.value)}/>
      <h1>Color Picker - GeeksforGeeks</h1>
    </div>
  );
}
