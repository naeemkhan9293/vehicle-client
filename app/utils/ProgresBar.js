"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intreval = setInterval(() => {
      setProgress((prevProgress) => {
        prevProgress >= 100 ? 0 : progress + 10;
      }, 600);
    });
    return () => clearInterval(intreval);
  }, []);
  
  return (
    <div
      className={`absolute top-0 left-0 h-2 bg-orange-600`}
      style={{ width: `${progress}%` }}
    ></div>
  );
}
