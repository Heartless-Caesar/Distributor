import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Carousel from './Components/Carousel/Carousel'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Body />
            <Footer />
        </>
    )
}

export default Homepage
