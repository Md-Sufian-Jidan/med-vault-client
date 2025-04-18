import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='h-12'>
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;