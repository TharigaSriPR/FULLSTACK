import { Link } from 'react-router-dom'
import img from '../../assets/images/homeimage.avif'

const Mainhome = () => {
  return (
    <section className="text-gray-600 mt-10 body-font bg-white">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={img}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-4 text-black">"Unwrap the Magic: Where Every Gift Tells a Story. Your Personalized Touch, Our Gift to You!"
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed text-black">Welcome to GiftWonders, your ultimate destination for personalized gifts that leave a lasting impression. At GiftWonders, we believe in transforming ordinary moments into extraordinary memories. Discover a curated collection of thoughtful and unique gifts, crafted with care and designed to express your heartfelt sentiments.</p>
      <div className="flex justify-center">
        <button className="ml-4 inline-flex text-black bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white-200 rounded text-lg"><Link to="/app-project/login">Login</Link></button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Mainhome