import React from "react";
import "./index.css";
const CustomBG = ({ children, customBG }: CustomBGProps) => {
  return <header className={customBG}>{children}</header>;
};
export default CustomBG;
CustomBG.defaultProps = {
  customBG: "defaultcustomBG",
};
