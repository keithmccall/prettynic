
import { Switch, Route } from "react-router-dom";
import PostsPage from "../content/pages/post";
import HomePage from "../content/pages/home";
import { AboutPage } from "../content/pages/about";
import { ArchivePage } from "../content/pages/archive";
import { LOCATIONS } from "./urls";

const ContentRouter = () => {
  return (
    <Switch>
      <Route path={`${LOCATIONS.POST}:id`}>
        <PostsPage />
      </Route>
      <Route path={LOCATIONS.ABOUT}>
        <AboutPage />
      </Route>
      <Route path={LOCATIONS.ARCHIVE}>
        <ArchivePage />
      </Route>
      <Route path={LOCATIONS.HOME}>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default ContentRouter;
