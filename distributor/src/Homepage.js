import 'bootstrap/dist/css/bootstrap.css'
import NavbarComponent from './Components/Navbar'
import Body from './Components/Body'
import Footer from './Components/Footer'
import CarouselComponent from './Components/Carousel/Carousel'
import ModalPages from './Components/Modal/Modal'

const Homepage = () => {
    return (
        <>
            <NavbarComponent />
            <CarouselComponent />
            <ModalPages />
            <Body />
            <Footer />
        </>
    )
}

export default Homepage
