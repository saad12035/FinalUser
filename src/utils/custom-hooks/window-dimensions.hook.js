import {useEffect, useRef, useState} from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});
  const isDebouncedRef = useRef(false);
  const debounceTime = 300;

  function resizeHandler(event) {
    if(isDebouncedRef.current){
      return;
    }
    isDebouncedRef.current = true;
    setTimeout(()=>{
      setWindowSize({width: window.innerWidth, height: window.innerHeight});
      isDebouncedRef.current = false;
    }, debounceTime);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return windowSize;
};
