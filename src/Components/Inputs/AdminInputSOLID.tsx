import React from "react";

interface InputProps {
  label: string;
  type: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  accept?: string;
  selectOptions?: { value: string; label: string }[];
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, error, accept}) => (
  <div style={{ marginBottom: "15px" }}>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      accept={accept}
      style={{
        display: "block",
        marginTop: "5px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    />
    {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
  </div>
);

export default Input;
