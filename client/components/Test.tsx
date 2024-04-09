import Link from "next/link";
import React from "react";

const Test = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/about/2">Blog Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Test;
