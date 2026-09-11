import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router';
const App = () => {
    return (
        <>
            <div className="px-6 md:px-16 lg:px-24 xl:px-32">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
