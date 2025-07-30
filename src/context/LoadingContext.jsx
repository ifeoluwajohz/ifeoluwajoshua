import { createContext, useContext, useState } from "react";
import RippleLoader from "../components/RippleLoader";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && (
        <div className="fixed inset-0 bg-white/70 flex justify-center items-center z-[9999]">
          <RippleLoader />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};
