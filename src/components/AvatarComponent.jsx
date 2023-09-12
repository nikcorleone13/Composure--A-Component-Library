import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { LuCopy,LuCopyCheck } from "react-icons/lu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const codeString = `<Avatar
alt="George Clooney"
src="../../public/avatarImage.jpg"
sx={{ width: 24, height: 24 }}
/>`

const AvatarComponent = () => {
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
      <h1 className="text-5xl border-b-2 text-textPrimary">Avatar</h1>

      <div className="mt-10 text-md w-[70%]">
        <p className="text-lg">
          Avatar is a graphical representation of a user or the user's character
          or persona. Avatars can be two-dimensional icons in Internet forums
          and other online communities, where they are also known as profile
          pictures, userpics, or formerly picons
        </p>

        <div className="mt-10">
          <Stack direction="row" spacing={3}>
            <Avatar
              alt="George Clooney"
              src="../../public/avatarImage.jpg"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar alt="George Clooney" src="../../public/avatarImage.jpg" />
            <Avatar
              alt="George Clooney"
              src="../../public/avatarImage.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Avatar
              alt="George Clooney"
              src="../../public/avatarImage.jpg"
              sx={{ width: 108, height: 108 }}
            />
          </Stack>
        </div>

        <div className="mt-10">
        <SyntaxHighlighter language="javascript">
          {codeString}
        </SyntaxHighlighter>
        <p className="font-semibold  mt-4">NOTE:- The default one is the second image where no dimension is specified. Height and Width can be set as per the user's wish. The dimensions used for the others are 56x56 and 108x108.</p>
        </div>

        {/* copy button */}
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

export default AvatarComponent;
