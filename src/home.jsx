import Header from "./Components/header"
import HeroSection from "./Components/hero"
import FeaturesSection from "./Components/feature.jsx"
import Footer from "./Components/contact"
import FaqSection from "./Components/FAQs"
import TestimonialSection from "./Components/testimonials"



const App = () => {
    return ( 
        <div className='flex flex-col justify-between h-screen'>
            <div className="sticky top-0 z-50">
                <Header/>
            </div>
            <div>
                <HeroSection/>
            </div>
            <div>
                <FeaturesSection/>
            </div>
            <div>
                <TestimonialSection/>
            </div>
            <div>
                <FaqSection/>
            </div>
            
            <div>
                <Footer/>
            </div>           
        </div>
        
    )
}

export default App;
    
