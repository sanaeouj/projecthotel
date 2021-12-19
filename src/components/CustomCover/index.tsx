import React from "react";

const index = ({coverClass, children}:CoverProps) => {
 
  return <header className={coverClass}>{children}</header>;
};

export default index;


