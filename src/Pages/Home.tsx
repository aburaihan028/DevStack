import Banner from '../components/Banner';
import Explore from '../components/Explore';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <Banner />
            <Explore />
            <Footer />
        </div>
    );
};

export default Home;
