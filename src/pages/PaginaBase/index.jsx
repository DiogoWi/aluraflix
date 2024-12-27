import { Outlet } from 'react-router-dom';
import CategoriaProvider from '@/context/CategoriaContext';
import VideosProvider from '@/context/VideosContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

function PaginaBase() {
    return (
        <>
            <CategoriaProvider>
                <VideosProvider>
                    <NavBar />
                    <Outlet />
                    <Footer />
                </VideosProvider>
            </CategoriaProvider>
        </>
    )
}

export default PaginaBase;