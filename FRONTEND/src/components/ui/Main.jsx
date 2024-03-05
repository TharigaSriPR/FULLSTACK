import { Link } from 'react-router-dom'; 
import '../../assets/css/Main.css'
const Main = () => {
  return (
    <>
     <Link to="/MYAPP/login"> {/* Redirect to "/login" route when the "Login" button is clicked */}
      <section className="text-gray-290 body-font h-screen"> {/* Set the section height to cover the whole page */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full"> {/* Set the flex container height to cover the whole page */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded h-full" alt="hero" src="https://plus.unsplash.com/premium_photo-1661349753642-8cce9f9d3550?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMHdpdGglMjBnaWZ0fGVufDB8fDB8fHww" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">GiftWonders
              <br className="hidden lg:inline-block" />readymade and customised gifts<br />
            </h1>
            <p className="mb-8 leading-relaxed">Gift woCopper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">Login</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">SignUp</button>
            </div>
          </div>
        </div>
      </section>
    </Link>
    </>
  );
};

export default Main;
