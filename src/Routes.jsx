import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "@/pages/PaginaBase";
import Home from "@/pages/Home";
import NovoVideo from "@/pages/NovoVideo";

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
