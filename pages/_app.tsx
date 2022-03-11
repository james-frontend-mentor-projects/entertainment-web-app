import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/authContext";
import { DataProvider } from "../contexts/dataContext";
import { PageProvider } from "../contexts/pageContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PageProvider>
        <DataProvider>
          <Component {...pageProps} />
        </DataProvider>
      </PageProvider>
    </AuthProvider>
  );
}

export default MyApp;
