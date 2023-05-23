import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if ("matches" in event) {
        setMatches(event.matches);
      }
    };

    const mediaQuery = window.matchMedia(query);

    handleChange(mediaQuery); // Check the initial state

    // Add a listener to update matches state when the media query matches change
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      // Cleanup the listener when the component unmounts
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
