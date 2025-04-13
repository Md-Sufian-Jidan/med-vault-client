import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
            <Outlet />
            <Footer />
            </div>
        </div>
    );
};

export default Main;