import React, { FC } from "react";
import Posts from "../posts/components/posts";
import { Page } from "../page";

const HomePage: FC = (props) => {
  return (
    <Page>
      <Posts />
    </Page>
  );
};

export default HomePage;