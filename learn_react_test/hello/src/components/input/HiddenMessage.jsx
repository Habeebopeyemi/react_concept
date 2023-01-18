import { useState } from "react";

export default function HiddenMessage({ children }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleChecked = e => {
    setShowMessage(e.target.checked);
  };

  return (
    <>
      <div>
        <label htmlFor="toggle">Show Message</label>
        <input
          type="checkbox"
          id="toggle"
          onChange={handleChecked}
          checked={showMessage}
        />
        {showMessage ? children : null}
      </div>
    </>
  );
}
