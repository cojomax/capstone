import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';

import Navbar from './components/navbar/navbar.component';

const Shop = () => ("This is shop");

const App = () => {
    return (
        <Routes>
            <Route path="/" element={< Navbar />}>
                <Route index element={< Home />} />
                <Route path='shop' element={< Shop />} />
                <Route path='auth' element={< Authentication />} />
            </Route>
        </Routes>
    )
};

export default App;
