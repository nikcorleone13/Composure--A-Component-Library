import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const codeString1 = `<p className="text-6xl">H1 Heading</p>
<p className="text-5xl">H2 Heading</p>
<p className="text-4xl">H3 Heading</p>
<p className="text-3xl">H4 Heading</p>
<p className="text-2xl">H5 Heading</p>
<p className="text-xl ">H6 Heading</p>`;

const codeString2 = `
// Thin
<p className="font-thin border-b-2">Thin</p>

// Extralight
<p className="font-extraligth border-b-2">Extralight</p>

// Light
<p className="font-light border-b-2">Light</p>

// Normal
<p className="font-normal border-b-2">Normal</p>

// Medium
<p className="font-medium border-b-2">Medium</p>

// SemiBold
<p className="font-semibold border-b-2">SemiBold</p>

// Bold
<p className="font-bold border-b-2">Bold</p>

// Extra Bold
<p className="font-extrabold border-b-2">Extra Bold</p>`;

const codeString3 = `
// Text Underline
<p className="text-xl  underline">Text Underline</p>

// Text Overline
<p className="text-xl overline">Text Overline</p>

// Light
<p className="text-xl line-through">Light</p>

// Double Decoration 
<p className="text-xl underline decoration-double">Double Decoration</p>

// Decoration Dotted
<p className="text-xl underline decoration-dotted">Decoration Dotted</p>

// Decoration Wavy
<p className="text-xl underline decoration-wavy">Decoration Wavy</p>`
const TypographyComponent = () => {
  return (
    <div className=" left-0 ml-[10%] lg:ml-[5%] w-screen">
      <h1 className="text-5xl border-b-2 text-textPrimary">Typography</h1>

      <div className="mt-10 text-md w-[70%]">
        <p className="text-lg">
          Avatar is a graphical representation of a user or the user's character
          or persona. Avatars can be two-dimensional icons in Internet forums
          and other online communities, where they are also known as profile
          pictures, userpics, or formerly picons
        </p>
      </div>

      <div className="mt-10">
        <h1 className="my-4 text-2xl font-semibold ">Headings</h1>

        <div className="w-1/2  text-textPrimary p-3 text-center border-2 border-textPrimary ">
          <p className="text-6xl border-b-2">H1 Heading</p>
          <p className="text-5xl border-b-2">H2 Heading</p>
          <p className="text-4xl border-b-2">H3 Heading</p>
          <p className="text-3xl border-b-2">H4 Heading</p>
          <p className="text-2xl border-b-2">H5 Heading</p>
          <p className="text-xl  border-b-2">H6 Heading</p>
        </div>

        <div className="mt-10">
          <SyntaxHighlighter language="javascript">
            {codeString1}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* font */}
      <div className="mt-10">
        <h1 className="my-4 text-2xl font-semibold ">Font Weight</h1>

        <div className="w-1/2  text-textPrimary p-3 text-center border-2 border-textPrimary ">
          <p className="text-xl font-thin border-b-2">Thin</p>
          <p className="text-xl font-extraligth border-b-2">Extralight</p>
          <p className="text-xl font-light border-b-2">Light</p>
          <p className="text-xl font-normal border-b-2">Normal</p>
          <p className="text-xl font-medium border-b-2">Medium</p>
          <p className="text-xl font-semibold border-b-2">SemiBold</p>
          <p className="text-xl font-bold border-b-2">Bold</p>
          <p className="text-xl font-extrabold border-b-2">Extra Bold</p>
        </div>

        <div className="mt-10">
          <SyntaxHighlighter language="javascript">
            {codeString2}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* text */}
      <div className="mt-10">
        <h1 className="my-4 text-2xl font-semibold ">Text and Styling</h1>

        <div className="w-1/2  text-textPrimary p-3 text-center border-2 border-textPrimary flex flex-col gap-5">
          <p className="text-xl  underline">Text Underline</p>
          <p className="text-xl overline">Text Overline</p>
          <p className="text-xl line-through">Light</p>
          <p className="text-xl underline decoration-double">Double Decoration </p>
          <p className="text-xl underline decoration-dotted">Decoration Dotted</p>
          <p className="text-xl underline decoration-wavy">Decoration Wavy</p>
        </div>

        <div className="mt-10">
          <SyntaxHighlighter language="javascript">
            {codeString3}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default TypographyComponent;
