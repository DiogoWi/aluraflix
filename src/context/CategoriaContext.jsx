import { createContext, useContext, useEffect, useState } from "react";

const CategoriaContext = createContext();
CategoriaContext.displayName = "Categoria";

export default function CategoriaProvider({ children }) {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categorias')
            .then(response => response.json())
            .then(data => setCategorias(data))
            .catch(erro => console.log(erro))
    }, []);

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