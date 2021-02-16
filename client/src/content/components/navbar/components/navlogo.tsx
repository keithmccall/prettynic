import React from "react";
import classNames from "classnames";
import { Locations } from "../../../../router";
import { usePlatformContext } from "../../../../platform";

export const Navlogo = () => {
  const { isMobile } = usePlatformContext();
  return (
    <a
      className={classNames(
        "mid-gray link dim w-25-l mb2 mb0-l",
        { "tc": isMobile }
      )}
      href={Locations.HOME}
      title="Home"
    >
      <img
        src="http://tachyons.io/img/logo.jpg"
        className="dib w2 h2 br-100"
        alt="Site Name"
      />
    </a>
  );
};