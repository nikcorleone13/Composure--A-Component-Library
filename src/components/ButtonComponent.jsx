import React, { useState } from "react";
import {Link} from "react-router-dom";
import Stack from '@mui/material/Stack';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { LuCopy,LuCopyCheck } from "react-icons/lu";
import {MdDelete,MdAddAPhoto} from "react-icons/md"

const codeString = `
// primary button
<button className="px-4 py-2 border-2 border-Primary 
rounded-lg bg-Primary text-Primary hover:text-Primary hover:bg-Primary duration-200 ease-in-out">Primary</button>

// link button
<button className="hover:underline "><Link>Link Button</Link></button>

// icon button
<button className="px-4 py-2 rounded-lg text-textPrimary">
<MdDelete size={30} />
</button> 

// floating button icon
<button className="px-4 py-2 rounded-lg text-textPrimary absolute right-[10%]">
<MdAddAPhoto size={30} />
</button> 
`
const ButtonComponent = () => {
  const [copied,setCopied] = useState(false);

  const handleCodeCopy = () =>{
    setCopied(true); 
    navigator.clipboard.writeText(codeString);
    setTimeout(() =>{
      setCopied(false);
    },2000)
  }
  return (
    <div className=" left-0 ml-[10%] lg:ml-[5%] w-screen">
      <h1 className="text-5xl border-b-2 text-textPrimary">Button</h1>

      <div className="mt-10 text-md w-[70%]">
      <Stack spacing={6} direction="row">
        <button className="px-4 py-2 border-2 border-textPrimary rounded-lg bg-textPrimary text-bgPrimary hover:text-textPrimary hover:bg-bgPrimary duration-200 ease-in-out">Primary</button>

        <button className="hover:underline "><Link>Link Button</Link></button>
        
        <button className="px-4 py-2 rounded-lg text-textPrimary  "><MdDelete size={30} /></button>  

        <button className="px-4 py-2 rounded-lg text-textPrimary absolute right-[10%]  "><MdAddAPhoto size={30} /></button>     
    </Stack>

    <div className="mt-10">
        <SyntaxHighlighter language="javascript">
          {codeString}
        </SyntaxHighlighter>
        </div>

    {
          !copied ? (
          <button className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md" onClick={()=> handleCodeCopy()}>
          Copy
          <span>
            <LuCopy className="ml-2"/>
          </span>
        </button>) 
        :(
          <button className="flex justify-center items-center px-2 py-1 my-2  bg-green-300 text-center rounded-md text-md">
          Copied
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

export default ButtonComponent;
