import React from "react";

function GlassButton({ title, className }) {
  return (
    <div className={`glassButton ${className}` }>
      <p>
        {title}
      </p>
    </div>
  );
}

export default GlassButton;
