import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { LuCopy,LuCopyCheck } from "react-icons/lu";
const alertMessage = "This is the demo alert";

const Alert = () => {
  const [copied,setCopied] = useState(false);
  const handleAlert = () => {
    window.alert(alertMessage);
  };

  const handleCodeCopy = () =>{
    setCopied(true); 
    navigator.clipboard.writeText(alertMessage);

    setTimeout(() =>{
      setCopied(false);
    },2000)
  } 

  return (
    <div className=" left-0 ml-[10%] lg:ml-[5%] w-screen">
      <h1 className="text-5xl border-b-2">Alert</h1>
      <div className="mt-10 text-md w-[70%]">
        <p className="text-lg">
          It is used when a warning message is needed to be produced. When the
          alert box is displayed to the user, the user needs to press ok and
          proceed.
        </p>

        {/* demo button */}
        <button
          className="mt-6 my-8 flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md bg-textPrimary text-bgPrimary"
          onClick={() => handleAlert()}
        >
          Check Demo
        </button>
        <SyntaxHighlighter language="javascript">
          window.alert("This is the demo alert")
        </SyntaxHighlighter>

        {/* copy button */}
        {
          !copied ? (
          <button className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md" onClick={()=> handleCodeCopy()}>
          Copy Code
          <span>
            <LuCopy className="ml-2"/>
          </span>
        </button>) 
        :(
          <button className="flex justify-center items-center px-2 py-1 my-2  bg-green-300 text-center rounded-md text-md">
          Copy Code
          <span>
            <LuCopyCheck className="ml-2"/>
          </span>
        </button>
        )
        }

      </div>
    </div>
  );
};

export default Alert;
