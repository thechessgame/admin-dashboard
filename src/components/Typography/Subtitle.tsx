import React from "react";

function Subtitle({ styleClass, children }: { styleClass: string; children: React.ReactNode }) {
  return <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>;
}

export default Subtitle;
