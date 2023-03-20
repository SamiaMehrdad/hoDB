import React from "react";

function CurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return (
    <p>
      Current date and time: {year}/{month}/{day} {hours}:{minutes}:{seconds}
    </p>
  );
}

export default CurrentTime;