import { Outlet } from 'react-router-dom';
import VideosProvider from '@/context/VideosContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

function PaginaBase() {
    return (
        <>
            <VideosProvider>
                <NavBar />
                <Outlet />
                <Footer />
            </VideosProvider>
        </>
    )
}

export default PaginaBase;