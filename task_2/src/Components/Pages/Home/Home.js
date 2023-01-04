import HomeBlock from './blocks/Home/Home';
import HowWorkBlock from './blocks/HowWork/HowWork';
import OurWorkBlock from './blocks/OurWork/OurWork';
import FeaturesBlock from './blocks/Features/Features';
import TestimonialsBlock from './blocks/Testimonials/Testimonials';

function Home() {
    return (<>
            <HomeBlock/>
            <HowWorkBlock/>
            <OurWorkBlock/>
            <FeaturesBlock/>
            <TestimonialsBlock/>
        </>
    );
}

export default Home;
