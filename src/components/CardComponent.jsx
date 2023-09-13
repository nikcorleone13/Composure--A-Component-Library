import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

const codeString1 = `<div className="border-2 border-textPrimary w-[250px] h-[350px] rounded-md shadow-xl">
<img
  src=""
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

const codeString2 = `<div className=" w-[350px] h-[250px] shadow-xl relative">
<img
  src=""
  className="h-[250px] max-h-[250px] w-[100%] rounded-md object-cover "
/>
<div className="absolute top-[5%] text-textPrimary  bg-white left-1 px-2 py-1 rounded">
  <p className="font-semibold">Flower</p>
</div>
</div>`;

const codeString3 = `<div className=" w-[350px] h-[250px] shadow-xl relative">
<img
  src=""
  className="h-[350px] max-h-[350px] w-[100%] rounded-md object-cover "
/>
<div className="absolute w-full bottom-[-30%] text-white  text-center text-2xl font-bold py-1 ">
  THE CAPE CRUSADER
</div>
<div className="absolute w-full bottom-[-35%] text-white  text-center text-sm   py-1 ">
  A Warner Bros. Movie
</div>
</div>`;

const codeString4 = `<div className="mt-4 w-[350px] p-2 border-2 border-black rounded-md">
<div className=" text-textPrimary text-left text-2xl font-bold py-1 border-b-2  ">
  React
</div>
<div className="mt-2 text-left text-textPrimary text-sm py-1 ">
  React is a free and open-source front-end JavaScript library for
  building user interfaces based on components.
</div>
</div>`;

const codeString5 = `<div className="border-2 border-textPrimary w-[400px] h-[200px] rounded-md  flex gap-2 text-sm shadow-2xl">
<img
  src=""
  className="h-[200px] max-h-[100%] w-[200px] max-w-[200px] object-cover"
/>
<div className="h-[150px] flex flex-col items-left p-2 text-left justify-between gap-4">
  <div className=" flex flex-col justify-between gap-2">
    <p className="text-xl font-semibold">Flower</p>
    <p className="text-md font-semibold">Rs 250 </p>
    <p className="justify-start text-gray-500  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nisi!</p>

  </div>
  <div className=" flex justify-between w-[100%]">
    <button className="border-2 border-textPrimary w-[40%] py-1 rounded-md">
      Cart
    </button>
    <button className="border-2 border-textPrimary w-[40%] py-1 rounded-md">
      Wishlist
    </button>
  </div>
</div>
</div>`;

const CardComponent = () => {
  const [copiedState, setCopiedState] = useState({
    code1: false,
    code2: false,
    code3: false,
    code4: false,
    code5: false,
  });

  const handleCodeCopy = ({ codeString, btn }) => {
    navigator.clipboard.writeText(codeString);
    if (btn === 1) {
      setCopiedState({ ...copiedState, code1: true });
      setTimeout(() => {
        setCopiedState({ ...copiedState, code1: false });
      }, 1000);
    } else if (btn === 2) {
      setCopiedState({ ...copiedState, code2: true });
      setTimeout(() => {
        setCopiedState({ ...copiedState, code2: false });
      }, 1000);
    } else if (btn === 3) {
      setCopiedState({ ...copiedState, code3: true });
      setTimeout(() => {
        setCopiedState({ ...copiedState, code3: false });
      }, 1000);
    } else if (btn === 4) {
      setCopiedState({ ...copiedState, code4: true });
      setTimeout(() => {
        setCopiedState({ ...copiedState, code4: false });
      }, 1000);
    }
    else{
      setCopiedState({ ...copiedState, code5: true });
      setTimeout(() => {
        setCopiedState({ ...copiedState, code5: false });
      }, 1000);
    }
  };
  return (
    <div className=" left-0 ml-[10%] lg:ml-[5%] w-screen h-full">
      <h1 className="text-5xl border-b-2 text-textPrimary">Card</h1>

      <p className="mt-4 text-lg">
        Cards are a great way to display data specific to a certain thing at one
        place. Cards are easier to look out and catches user's eye easily.
      </p>
      <div className="mt-10 text-md w-[70%]">
        {/* shopping card */}
        <h1 className="my-4 text-2xl font-semibold ">Shopping Card</h1>

        <div className="border-2 border-textPrimary w-[250px] h-[350px] rounded-md shadow-xl">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/flower-meanings-white-roses-1642620997.jpg"
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
        <h1 className="mt-16 text-2xl font-semibold ">Badge Card</h1>
        <div className="mt-4 w-[350px] h-[250px shadow-xl relative">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/flower-meanings-white-roses-1642620997.jpg"
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

        {/* Cards with text overlay */}
        <h1 className="mt-16 text-2xl font-semibold ">Text overlay Card</h1>
        <div className="mt-4 w-[350px] h-[250px] shadow-xl relative">
          <img
            src="https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/f7c625e7-6d91-11ec-aa6e-9587410378a2/the-batman-guia.jpg"
            className="h-[350px] max-h-[350px] w-[100%] rounded-md object-cover "
          />
          <div className="absolute w-full bottom-[-30%] text-white  text-center text-2xl font-bold py-1 ">
            THE CAPE CRUSADER
          </div>
          <div className="absolute w-full bottom-[-35%] text-white  text-center text-sm   py-1 ">
            A Warner Bros. Movie
          </div>
        </div>

        <div className="mt-40">
          <SyntaxHighlighter language="javascript">
            {codeString3}
          </SyntaxHighlighter>
        </div>

        {!copiedState.code3 ? (
          <button
            className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md"
            onClick={() => handleCodeCopy({ codeString: codeString3, btn: 3 })}
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

        {/* text only cards */}
        <h1 className="mt-16 text-2xl font-semibold ">Text Only Card</h1>
        <div className="mt-4 w-[350px] p-2 border-2 border-black rounded-md">
          <div className=" text-textPrimary text-left text-2xl font-bold py-1 border-b-2  ">
            React
          </div>
          <div className="mt-2 text-left text-textPrimary text-sm py-1 ">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on components.
          </div>
        </div>

        <div className="mt-8">
          <SyntaxHighlighter language="javascript">
            {codeString4}
          </SyntaxHighlighter>
        </div>

        {!copiedState.code4 ? (
          <button
            className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md"
            onClick={() => handleCodeCopy({ codeString: codeString4, btn: 4 })}
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

        {/* shopping card */}
        <h1 className="mt-16 my-4 text-2xl font-semibold ">Horizontral Card (E-Commerece)</h1>

        <div className="border-2 border-textPrimary w-[400px] h-[200px] rounded-md  flex gap-2 text-sm shadow-2xl">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/flower-meanings-white-roses-1642620997.jpg"
            className="h-[200px] max-h-[100%] w-[200px] max-w-[200px] object-cover"
          />
          <div className="h-[150px] flex flex-col items-left p-2 text-left justify-between gap-4">
            <div className=" flex flex-col justify-between gap-2">
              <p className="text-xl font-semibold">Flower</p>
              <p className="text-md font-semibold">Rs 250 </p>
              <p className="justify-start text-gray-500  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nisi!</p>

            </div>
            <div className=" flex justify-between w-[100%]">
              <button className="border-2 border-textPrimary w-[40%] py-1 rounded-md">
                Cart
              </button>
              <button className="border-2 border-textPrimary w-[40%] py-1 rounded-md">
                Wishlist
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SyntaxHighlighter language="javascript">
            {codeString5}
          </SyntaxHighlighter>
        </div>

        {!copiedState.code5 ? (
          <button
            className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md"
            onClick={() => handleCodeCopy({ codeString: codeString5, btn: 5 })}
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
