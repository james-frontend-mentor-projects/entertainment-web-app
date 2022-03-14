import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AuthContext from "../contexts/authContext";
import LoadingContext from "../contexts/loadingContext";

export const ProtectedRouteWrapper: React.FC = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);
  const { isLoading, stopLoading } = useContext(LoadingContext);
  const router = useRouter();

  useEffect(() => {
    stopLoading();
    if (!loggedIn && !["/login", "/sign-up"].includes(router.route)) {
      router.push("/login");
    }
  }, [router, loggedIn, stopLoading]);

  return isLoading ? (
    <main>
      <div className="spinner-wrapper">
        <div className="spinner" />
      </div>
    </main>
  ) : (
    <>{children}</>
  );
};
