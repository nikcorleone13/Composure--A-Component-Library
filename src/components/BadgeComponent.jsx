import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Badge from "@mui/material/Badge";
import { LuMail, LuCopy, LuCopyCheck } from "react-icons/lu";
import Avatar from "@mui/material/Avatar";

const codeString1 = `<Badge badgeContent={4} color="primary" >
<LuMail size={35}/>
</Badge>`;

const codeString2 = `<Badge
color="success"
variant="dot"
anchorOrigin={{
  vertical: "bottom",
  horizontal: "right",
}}
>
<Avatar alt="George Clooney" src="../../public/avatarImage.jpg" />
</Badge>`;

const BadgeComponent = () => {
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
      <h1 className="text-5xl border-b-2 text-textPrimary">Badge</h1>

      <div className="mt-10 text-md w-[70%]">
        <p className="text-lg">
          Badges are used to convey non-urgent information to the user. For
          example, they are used to indicate the status of an app, or the number
          of unread items.
        </p>

        <div className="mt-10">
          <h1 className="my-4 text-2xl font-semibold ">Basic Badge</h1>
          <Badge badgeContent={4} color="primary">
            <LuMail size={35} />
          </Badge>
          <Badge badgeContent={0} showZero color="primary" className="ml-10 ">
            <LuMail size={35} />
          </Badge>
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
      </div>

      {/* activity badge */}
      <div className="mt-16 text-md w-[70%]">
        <div className="mt-10">
          <h1 className="my-4 text-2xl font-semibold ">Activity Badge</h1>

          {/* activity */}
          <Badge
            color="success"
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar alt="George Clooney" src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/george-clooney-735-20-10-2016-01-08-18.jpg" />
          </Badge>
        </div>

        <div className="mt-10">
          <SyntaxHighlighter language="javascript">
            {codeString2}
          </SyntaxHighlighter>
        </div>

        {!copiedState.code2 ? (
          <button
            className="flex justify-center items-center px-2 py-1 my-2 border-2 border-textPrimary text-center rounded-md text-md"
            onClick={() => handleCodeCopy({ codeString: codeString2, btn: 2 })}
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

export default BadgeComponent;
