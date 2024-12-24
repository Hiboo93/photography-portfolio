import React, {useState, useEffect, createContext, useContext} from 'react';

const CursorContext = createContext({
  cursorPos: {},
  setCursorPos: () => {},
  cursorVariants: {},
  cursorBg: "default",
  mouseEnterHandler: () => {},
  mouseLeaveHandler: () => {},
});

export const CursorContextProvider = ({children}) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBg, setCursorBg] = useState("default");

  const mobileViewPortIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewPortIsActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        })
      }
      window.addEventListener("mousemove", move)
  
      return () => {
        window.removeEventListener("mousemove", move)
      };
    } else {
      setCursorBg("false");
    }
  });

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255, 1)",
    }
  }

  const mouseEnterHandler = () => {
    setCursorBg("text");
  }

  const mouseLeaveHandler = (second) => { 
    setCursorBg("default");
  }

  return (
    <CursorContext.Provider value={{cursorVariants, cursorBg, mouseEnterHandler, mouseLeaveHandler}}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursorContext = () => useContext(CursorContext)