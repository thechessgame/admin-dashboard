import React from "react";

const ErrorText: React.FunctionComponent<{ styleClass: string, children: React.ReactNode }> = (props) => {
  return <p className={`text-center  text-error ${props.styleClass}`}>{props.children}</p>;
};

export default ErrorText;
