import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
// import Loader from '../../components/loader/Loader'
// import UserDetail from '../../components/admin/UserDetail'
import { Link } from 'react-router-dom'

const  HomePage = () => {
  
  return (
    <Layout>
        <HeroSection />
        <Category />
        <HomePageProductCard />
        <div className="flex justify-center -mt-1 mb-3 ">
        <Link to={'/allproduct'}>
          <button className='text-white mt-10 px-8 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700'>See more</button>
        </Link>
      </div>
        <Track />
        <Testimonial />
        {/* <Loader /> */}
        
    </Layout>
  )
}

export default HomePage