import React, { useState } from "react";
import { useAuth0, } from "@auth0/auth0-react";
import { LoadingPage } from "./LoadingPage";
import { YesProfile } from "./YesProfile";
import { NoProfile } from "./NoProfile";
import { ErrorPage } from "./ErrorPage";

export const Profile = () => {
  const { user, isAuthenticated, isLoading, error, getAccessTokenSilently } = useAuth0();

  const [userMetaData, setUserMetaData] = useState(null);

  if (isLoading) {
    return <LoadingPage />
  }

  if (error) {
    return <ErrorPage msg={error} />
  }

  if (!isAuthenticated) {
    return (<NoProfile />);
  }

  return (
    <>
      <YesProfile data={user} />
    </>
    //  isAuthenticated?<YesProfile data={JSON.stringify(user)}/>:<NoProfile />
  )
};
