import {FC} from "react";
import classNames from "classnames";
import {useIsDarkMode, usePlatformContext} from "../../../providers/platform";

export const Layout: FC = (props) => {
  const { isMobile } = usePlatformContext();
  const isDarkMode = useIsDarkMode();

  return (
    <div
      className={classNames("main center", {
        "pt5 mt5 mt4-l": !isMobile,
        "bg-black white": isDarkMode,
        "bg-white black": !isDarkMode,
      })}
    >
      {props.children}
    </div>
  );
};
