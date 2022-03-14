import { createContext, useContext, useEffect, useState } from "react";

interface Props {
  isLoading: boolean;
  stopLoading: () => void;
}

const LoadingContext = createContext<Props>({ isLoading: true, stopLoading: () => {} });

export const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  function stopLoading() {
    setIsLoading(false);
  }

  return <LoadingContext.Provider value={{ isLoading, stopLoading }}>{children}</LoadingContext.Provider>;
};

export default LoadingContext;
