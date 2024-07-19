import Image from "next/image";
import React, { type FC } from "react";
import avatar from "public/avatar-1.png";
import avatarTwo from "public/avatar-2.png";
import { Color } from "../types";
import Tooltip from "~/shared/components/tooltip";

interface Props {
  color: Color;
}
const Chat: FC<Props> = ({ color }) => {
  const textColor500 = color?.text?.[500];
  const textColor400 = color?.text?.[400];
  const primary500 = color?.primary?.[500];
  const borderNeutral200 = color?.neutral?.[200];
  const secondary500 = color?.secondary?.[500];
  const background400 = color?.background?.[400];
  const background500 = color?.background?.[500];
  const background50 = color?.background?.[50];

  const splitText = (content: string) => {
    return content.match(/([a-zA-Z]+)(\d+)/);
  };

  if (
    !primary500 ||
    !secondary500 ||
    !background500 ||
    !background400 ||
    !background50 ||
    !borderNeutral200 ||
    !textColor400 ||
    !textColor500
  ) {
    return;
  }

  const pr500 = splitText("primary500");
  const sec500 = splitText("secondary500");
  const bg500 = splitText("background500");
  const bg400 = splitText("background400");
  // const bgsad100 = splitText(background50);
  const text400 = splitText("textColor400");
  const text500 = splitText("textColor500");
  const back50 = splitText("textColor500");

  console.log("back50", back50, textColor500);

  if (
    !back50 ||
    !bg500 ||
    !sec500 ||
    !text500 ||
    !text400 ||
    !bg400 ||
    !pr500
  ) {
    return;
  }

  return (
    <Tooltip color={background500} weight={bg500[1]} content={bg500[2]}>
      <div
        style={{
          backgroundColor: background500,
          borderColor: borderNeutral200,
        }}
        className="border space-y-4 md:mb-0 mb-9 flex flex-col p-4 max-[26.25rem]:p-3 rounded-2xl relative my-anchor-element"
        data-tooltip-content={"background 500"}
      >
        <Tooltip color={secondary500} weight={sec500[1]} content={sec500[2]}>
          <h3
            style={{ color: secondary500 }}
            className="font-semibold text-lg my-anchor-element w-fit"
          >
            Communicate
          </h3>
        </Tooltip>

        <div
          style={{ borderColor: borderNeutral200 }}
          className="flex flex-col border-b"
        >
          <div className="flex">
            <div className="mr-3 max-[26.25rem]:m-1">
              <div className="rounded-full bg-gray-100 max-[26.25rem]:w-10 max-[26.25rem]:h-10 w-12 h-12 relative">
                <Image alt="avatar" src={avatarTwo} />
              </div>
            </div>
            <div className="flex flex-col">
              <Tooltip
                color={background400}
                weight={bg400[1]}
                content={bg400[2]}
              >
                <div
                  style={{
                    backgroundColor: background400,
                    color: textColor500,
                  }}
                  className="rounded-xl rounded-bl-none max-[26.25rem]:text-xs text-sm leading-6 max-[26.25rem]:p-2 p-3"
                >
                  <Tooltip
                    color={textColor500}
                    weight={text500[1]}
                    content={text500[2]}
                  >
                    <div className="bg-transparent">
                      I will providing more details on the project in the coming
                      days, but in the meantime, start thinking about ideas and
                      approaches you would like bring to the table. I can not
                      wait to see what you come up with.
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
              <div className="flex items-center text-xs mt-2">
                <Tooltip
                  color={textColor500}
                  weight={text500[1]}
                  content={text500[2]}
                >
                  <span
                    style={{ color: textColor500 }}
                    className="font-semibold"
                  >
                    Terry Wood
                  </span>
                </Tooltip>
                <Tooltip
                  color={textColor400}
                  weight={text400[1]}
                  content={text400[2]}
                >
                  <span
                    style={{ color: textColor400 }}
                    className="text-gray-400 ps-1"
                  >
                    • 7 min ago
                  </span>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse my-5">
            <div className="ml-3 max-[26.25rem]:ml-1">
              <div className="rounded-full bg-gray-100 max-[26.25rem]:w-10 max-[26.25rem]:h-10 w-12 h-12 relative">
                <Image alt="avatar" src={avatar} />
              </div>
            </div>
            <div className="flex flex-col max-[26.25rem]:w-full w-2/3">
              <Tooltip color={primary500} weight={pr500[1]} content={pr500[2]}>
                <div
                  style={{ backgroundColor: primary500, color: background50 }}
                  className=" text-white rounded-br-none rounded-xl max-[26.25rem]:text-xs text-sm leading-6 p-3 "
                >
                  <Tooltip
                    color={background50}
                    weight={back50[1]}
                    content={back50[2]}
                  >
                    <div className="bg-transparent">
                      Okay great! That is all the information I need to know!
                      Let's do it together.
                    </div>
                  </Tooltip>
                </div>
                <div className="flex items-center text-xs mt-2">
                  <Tooltip
                    color={textColor500}
                    weight={text500[1]}
                    content={text500[2]}
                  >
                    <span
                      style={{ color: textColor500 }}
                      className="font-semibold"
                    >
                      Terry Wood
                    </span>
                  </Tooltip>
                  <Tooltip
                    color={textColor400}
                    weight={text400[1]}
                    content={text400[2]}
                  >
                    <span
                      style={{ color: textColor400 }}
                      className="text-gray-400 ps-1"
                    >
                      • 7 min ago
                    </span>
                  </Tooltip>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full max-[26.25rem]:h-[2.5rem] h-[3rem]">
          <Tooltip
            className="w-full"
            color={background400}
            weight={bg400[1]}
            content={bg400[2]}
          >
            <div className="flex items-center h-[48px] w-full">
              <div
                style={{
                  backgroundColor: background400,
                  color: textColor400,
                  borderColor: borderNeutral200,
                }}
                className="border rounded-md w-full max-[26.25rem]:px-3 max-[26.25rem]:text-xs px-4 h-full mr-2 flex items-center text-sm text-gray-400"
              >
                <Tooltip
                  color={textColor400}
                  weight={text400[1]}
                  content={text400[2]}
                >
                  Enter text here...
                </Tooltip>
              </div>
              <Tooltip color={primary500} weight={pr500[1]} content={pr500[2]}>
                <button
                  style={{ backgroundColor: primary500, color: background50 }}
                  className="rounded-md bg-primary w-20 text-white h-[48px]"
                >
                  <Tooltip
                    color={background50}
                    weight={back50[1]}
                    content={back50[2]}
                  >
                    <div className="bg-transparent flex items-center justify-center">
                      Send
                    </div>
                  </Tooltip>
                </button>
              </Tooltip>
            </div>
          </Tooltip>
        </div>
      </div>
    </Tooltip>
  );
};

export default Chat;
