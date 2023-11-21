import React from "react";

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  onClose,
}: ToastProps) => {
  const toastStyles: React.CSSProperties = {
    width: "fit-content",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: type === "success" ? "#5cb85c" : "#d9534f",
    color: "white",
  };

  return (
    <div style={toastStyles}>
      <strong>{type === "success" ? "Success" : "Error"}:</strong> {message}
      <button onClick={onClose} style={{ marginLeft: "50px" }}>
        Close
      </button>
    </div>
  );
};

export default Toast;
