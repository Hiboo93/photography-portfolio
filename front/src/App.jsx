import Header from "./components/common/layout/Header.jsx";

import { BrowserRouter } from "react-router-dom";
import AnimeRoutes from "./components/common/design-system/AnimeRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimeRoutes />
      </BrowserRouter>
    </>
  );
}
