import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import NovoVideo from "@/pages/NovoVideo";
import PaginaBase from "./pages/PaginaBase";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
          <Route path="novo_video" element={<NovoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
