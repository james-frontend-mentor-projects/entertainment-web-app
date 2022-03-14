import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/authContext";
import { DataProvider } from "../contexts/dataContext";
import { PageProvider } from "../contexts/pageContext";
import { ProtectedRouteWrapper } from "../components/ProtectedRouteWrapper";
import { LoadingProvider } from "../contexts/loadingContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <LoadingProvider>
        <ProtectedRouteWrapper>
          <PageProvider>
            <DataProvider>
              <Component {...pageProps} />
            </DataProvider>
          </PageProvider>
        </ProtectedRouteWrapper>
      </LoadingProvider>
    </AuthProvider>
  );
}

export default MyApp;
