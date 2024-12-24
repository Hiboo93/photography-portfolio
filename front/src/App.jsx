import Header from "./components/common/layout/Header.jsx";
import { motion } from "motion/react";

import { BrowserRouter } from "react-router-dom";
import AnimeRoutes from "./components/common/design-system/AnimeRoutes";
import { useCursorContext } from "./components/context/CursorContext.jsx";

export default function App() {
  const { cursorVariants, cursorBg } = useCursorContext();

  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimeRoutes />
      </BrowserRouter>
      {/* cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className="w-[35px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </>
  );
}
