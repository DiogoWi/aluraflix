import { Outlet } from 'react-router-dom';
import CategoriaProvider from '@/context/CategoriaContext';
import VideosProvider from '@/context/VideosContext';
import ModalProvider from '@/context/ModalContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

function PaginaBase() {
    return (
        <>
            <CategoriaProvider>
                <VideosProvider>
                    <ModalProvider>
                        <NavBar />
                        <Outlet />
                        <Footer />
                    </ModalProvider>
                </VideosProvider>
            </CategoriaProvider>
        </>
    )
}

export default PaginaBase;