import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import Slide from './components/Slide.js'
import data from './data/data.json'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Offer from './components/Offer.js'
import Heading from './components/Heading.js'
import Starproduct from './components/Starproduct.js'
import HotMenu from './components/HotMenu.js'
import HotAcce from './components/HotAcce.js'
import Productrev from './components/Productrev.js'
import Video from './components/Video.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import Navopt from './components/Navopt.js'

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Navopt miphones={data.miPhones} redmiphones={data.redmiPhones}  tv={data.tv} laptop={data.laptop} fitness={data.fitnessAndLifeStyle} home={data.home} radio={data.audio} acces={data.accessories} />
      <Slide result={data.banner.start} />
      <Offer off={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <Starproduct data={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotMenu />
      <Routes>
        <Route exact path='/music' element={<HotAcce music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} >
        </Route>
        <Route exact path='/smartDevice' element={<HotAcce smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} >
        </Route>
        <Route exact path='/home' element={<HotAcce home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} >
        </Route>
        <Route exact path='/lifeStyle' element={<HotAcce lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} >
        </Route>
        <Route exact path='/mobileAccessories' element={<HotAcce mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} >
        </Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <Productrev productrevw = {data.productReviews} />
      <Heading text="VIDEOS" />
      <Video vid = {data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer foot={data.footer} />
    </Router>
  );
}

export default App;
