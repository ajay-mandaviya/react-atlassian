import React from "react";
import { Link } from "react-router-dom";
import { JiraIcon, JiraLogo } from "@atlaskit/logo";
import {
  AtlassianNavigation,
  PrimaryButton,
  ProductHome,
} from "@atlaskit/atlassian-navigation";

const HeaderLogo = () => {
  return <ProductHome icon={JiraIcon} logo={JiraLogo} />;
};

const Header = () => {
  return (
    <AtlassianNavigation
      label="site"
      primaryItems={[
        <Link to={"/"}>
          <PrimaryButton>Users</PrimaryButton>
        </Link>,
        <Link to={"/shortlist"}>
          <PrimaryButton>Shortlist</PrimaryButton>
        </Link>,
      ]}
      renderProductHome={HeaderLogo}
    />
  );
};

export default Header;
