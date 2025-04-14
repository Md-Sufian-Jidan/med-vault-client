import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ContactHighlights from "../ContactHighlights/ContactHighlights";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ContactHighlights />
            <Contact />
        </div>
    );
};

export default Home;