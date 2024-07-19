import { ReactNode } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { followCursor } from "tippy.js";

interface TooltipProps {
  content: string | undefined;
  children: ReactNode;
  weight: string | undefined;
  color: string | undefined;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  color,
  weight,
  content,
  children,
  className,
}) => {
  return (
    <Tippy
      className="!bg-white !px-3 !py-2 text-xl"
      content={
        <div className="flex items-center space-x-2">
          <div
            style={{ background: color }}
            className="w-4 h-4 rounded-md border-[0.5px] border-gray-200"
          />
          <div className="font-semibold text-slate-900">{content}</div>
          <div className="text-slate-500">{weight}</div>
        </div>
      }
      allowHTML={true}
      followCursor={true}
      arrow={false}
      plugins={[followCursor]}
    >
      <div className={className}>{children}</div>
    </Tippy>
  );
};

export default Tooltip;
