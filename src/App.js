import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import SignIn from './routes/signin/signin.component';

import Navbar from './components/navbar/navbar.component';

const Shop = () => ("This is shop");

const App = () => {
    return (
        <Routes>
            <Route path="/" element={< Navbar />}>
                <Route index element={< Home />} />
                <Route path='shop' element={< Shop />} />
                <Route path='signin' element={< SignIn />} />
            </Route>
        </Routes>
    )
};

export default App;
