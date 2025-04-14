import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ContactHighlights from "../ContactHighlights/ContactHighlights";
import Doctors from "../Doctors/Doctors";
import PatientReviews from "../PatientReviews/PatientReviews";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ContactHighlights />
            <PatientReviews />
            <Doctors />
            <Contact />
        </div>
    );
};

export default Home;