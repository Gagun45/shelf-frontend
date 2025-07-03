import { Auth0Provider } from "@auth0/auth0-react";
import type { ReactNode } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  const redirectUri = import.meta.env.VITE_AUTH0_LOGIN_REDIRECT_URI;
  console.log("auth provider");

  if (!domain || !clientId || !audience || !redirectUri) {
    throw new Error("Initial auth error");
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};
export default AuthProvider;
