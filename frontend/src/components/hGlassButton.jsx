//hoduno component for glass button
// exported component: GlassButton
// called by: 
// 2023 Mehrdad Samia -  All Rights Reserved
// --------------------------------------------------//

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
