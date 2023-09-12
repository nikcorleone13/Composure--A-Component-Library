import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

const codeString1 = `<div className="border-2 border-textPrimary w-[250px] h-[350px] rounded-md shadow-xl">
<img
  src="../../public/cardImage.jpg"
  className="h-[200px] max-h-[200px] w-[100%] object-cover"
/>
<div className="h-[150px] flex flex-col items-center p-2 text-center justify-evenly ">
  <>
    <p className="text-xl font-semibold">Flower</p>
    <p className="">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit{" "}
    </p>
  </>
  <div className="flex justify-between w-[100%]">
    <button className="border-2 border-textPrimary w-[40%] py-1 rounded-md">
      Cart
    </button>
    <button className="border-2 border-textPrimary w-[40%] py-1 rounded-md">
      Wishlist
    </button>
  </div>
</div>
</div>`;

const codeString2 = `<div className=" w-[350px] h-[250px shadow-xl relative">
<img
  src="../../public/cardImage.jpg"
  className="h-[250px] max-h-[250px] w-[100%] rounded-md object-cover "
/>
<div className="absolute top-[5%] text-textPrimary  bg-white left-1 px-2 py-1 rounded">
  <p className="font-semibold">Flower</p>
</div>
</div>`;

const CardComponent = () => {
  const [copiedState, setCopiedState] = useState({
    code1: false,
    code2: false,
  });

  const handleCodeCopy = ({ codeString, btn }) => {
    navigator.clipboard.writeText(codeString);
    if (btn === 1) {
      setCopiedState({ ...copiedState, code1: true });
      setTimeout(() => {
        setCopiedState({ ...copiedState, code1: false });
      }, 1000);
    } else {
      setCopiedState({ ...copiedState, code2: true });
      setTimeout(() => {
        setCopiedState({ ...copiedState, code2: false });
      }, 1000);
    }
  };
  return (
    <div className=" left-0 ml-[10%] lg:ml-[5%] w-screen">
      <h1 className="text-5xl border-b-2 text-textPrimary">Card</h1>

      <div className="mt-10 text-md w-[70%]">
        {/* shopping card */}
        <h1 className="my-4 text-2xl font-semibold ">Shopping Card</h1>

        <div className="border-2 border-textPrimary w-[250px] h-[350px] rounded-md shadow-xl">
          <img
            src="../../public/cardImage.jpg"
            className="h-[200px] max-h-[200px] w-[100%] object-cover"
          />
          <div className="h-[150px] flex flex-col items-center p-2 text-center justify-evenly ">
            <>
              <p className="text-xl font-semibold">Flower</p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit{" "}
              </p>
            </>
            <div className="flex justify-between w-[100%]">
              <button className="border-2 border-textPrimary w-[40%] py-1 rounded-md">
                Cart
              </button>
              <button className="border-2 border-textPrimary w-[40%] py-1 rounded-md">
                Wishlist
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SyntaxHighlighter language="javascript">
            {codeString1}
          </SyntaxHighlighter>
        </div>

        {!copiedState.code1 ? (
          <button
            className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md"
            onClick={() => handleCodeCopy({ codeString: codeString1, btn: 1 })}
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

        {/* Image Card */}
        <h1 className="mt-16 text-2xl font-semibold ">Image Card</h1>
        <div className=" w-[350px] h-[250px shadow-xl relative">
          <img
            src="../../public/cardImage.jpg"
            className="h-[250px] max-h-[250px] w-[100%] rounded-md object-cover "
          />
          <div className="absolute top-[5%] text-textPrimary  bg-white left-1 px-2 py-1 rounded">
            <p className="font-semibold">Flower</p>
          </div>
        </div>

        <div className="mt-10">
          <SyntaxHighlighter language="javascript">
            {codeString2}
          </SyntaxHighlighter>
        </div>

        {!copiedState.code1 ? (
          <button
            className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md"
            onClick={() => handleCodeCopy({ codeString: codeString2, btn: 1 })}
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
  );
};

export default CardComponent;
