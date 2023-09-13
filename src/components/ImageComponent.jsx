import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

const codeString1 = `<img src= "" alt="" className="h-[200px] w-[200px] rounded-full object-cover"/>`;
const codeString2 = `<img src="" alt="" className="h-[100%] w-[100%] object-cover"
/>`;
const ImageComponent = () => {
  const [copied, setCopied] = useState({
    circular: false,
    responsive: false,
  });

  const handleCodeCopy = ({ codeString, btn }) => {
    navigator.clipboard.writeText(codeString);
    if (btn === 1) {
      setCopied({ ...copied, circular: true });
      setTimeout(() => {
        setCopied({ ...copied, circular: false });
      }, 1000);
    } else {
      setCopied({ ...copied, responsive: true });
      setTimeout(() => {
        setCopied({ ...copied, responsive: false });
      }, 1000);
    }
  };
  return (
    <div className=" left-0 ml-[10%] lg:ml-[5%] w-screen">
      <h1 className="text-5xl border-b-2 text-textPrimary">Image</h1>

      <div className="mt-10 text-md w-[70%]">
        <p className="text-lg">
          Images are an integral part of an application as it conveys more
          content than text, and it's also improves user interface as well as
          user experience.
        </p>
      </div>

      {/* circular images */}
      <div className="mt-10">
        <h1 className="my-4 text-2xl font-semibold ">Circular Images</h1>

        <img
          src="https://images.indianexpress.com/2023/03/ronaldo-portugal.jpg"
          alt="Cristiano Ronaldo"
          className="h-[200px] w-[200px] rounded-full  object-cover"
        />

        <div className="mt-10">
          <SyntaxHighlighter language="javascript">
            {codeString1}
          </SyntaxHighlighter>
        </div>

        <div className="mt-4">
          {!copied.circular ? (
            <button
              className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md"
              onClick={() =>
                handleCodeCopy({ codeString: codeString1, btn: 1 })
              }
            >
              Copy
              <span>
                <LuCopy className="ml-2" />
              </span>
            </button>
          ) : (
            <button className="flex justify-center items-center px-2 py-1 my-2  bg-green-300 text-center rounded-md text-md">
              Copied
              <span>
                <LuCopyCheck className="ml-2" />
              </span>
            </button>
          )}
        </div>
      </div>

      {/* responsive images */}
      {/* circular images */}
      <div className="mt-10">
        <h1 className="my-4 text-2xl font-semibold ">Responsive Image</h1>
            
        <div className="w-[50%] h-[50%]">
          <img
            src="https://images.indianexpress.com/2023/03/ronaldo-portugal.jpg"
            alt="Cristiano Ronaldo"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>

        <div className="mt-10">
          <SyntaxHighlighter language="javascript">
            {codeString1}
          </SyntaxHighlighter>
        </div>

        <div className="mt-4">
          {!copied.responsive ? (
            <button
              className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md"
              onClick={() =>
                handleCodeCopy({ codeString: codeString2, btn: 2 })
              }
            >
              Copy
              <span>
                <LuCopy className="ml-2" />
              </span>
            </button>
          ) : (
            <button className="flex justify-center items-center px-2 py-1 my-2  bg-green-300 text-center rounded-md text-md">
              Copied
              <span>
                <LuCopyCheck className="ml-2" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
