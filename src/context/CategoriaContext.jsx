import { createContext, useContext, useState } from "react";
import MockCategorias from '@/mocks/categorias';

const CategoriaContext = createContext();
CategoriaContext.displayName = "Categoria";

export default function CategoriaProvider({ children }) {
    const [categorias, setCategorias] = useState(MockCategorias);

    return (
        <CategoriaContext.Provider value={{ categorias, setCategorias }}>
            {children}
        </CategoriaContext.Provider>
    )
}

export function useCategoria() {
    const { categorias } = useContext(CategoriaContext);

    return {
        categorias
    }
}