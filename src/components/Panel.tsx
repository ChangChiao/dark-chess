import clsx from "clsx";
import { useMemo } from "react";

type PanelProps = {
  index: number;
  current: number;
};

const Panel = ({ index, current }: PanelProps) => {
  const isCurrent = useMemo(() => {
    return current === index;
  }, [current, index]);

  const setLine = useMemo(() => {
    switch (index) {
      case 19:
        return "before:-rotate-45";
      case 20:
        return "before:rotate-45";
      case 27:
        return "before:-rotate-[135deg]";
      case 28:
        return "before:rotate-[135deg]";
      default:
        return null;
    }
  }, [index]);

  const isLineExist = useMemo(() => {
    return index === 19 || index === 20 || index === 27 || index === 28;
  }, [index]);
  return (
    <div
      className={clsx(
        "panel",
        setLine,
        isLineExist && "panel-line",
        isCurrent &&
          "after:absolute after:h-[110px] after:w-[110px] after:border-2 after:content-[''] after:border-red-500"
      )}
    ></div>
  );
};

export default Panel;
