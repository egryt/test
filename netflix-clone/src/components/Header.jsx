import { useEffect, useRef, useState } from 'react'
import './Header.css'
const Header = () => {

    const [state, setState] = useState(false)
    const navRef = useRef()
  
    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Careers", path: "javascript:void(0)" },
        { title: "Guides", path: "javascript:void(0)" },
        { title: "Partners", path: "javascript:void(0)" },
        { title: "Teams", path: "javascript:void(0)" },
        { title: "Blog", path: "javascript:void(0)" }
    ]
  
    useEffect(() => {
        
        const body = document.body
  
        // Disable scrolling
        const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
        if (state) body.classList.add(...customBodyStyle)
        // Enable scrolling
        else body.classList.remove(...customBodyStyle)
  
        // Sticky strick
        const customStyle = []
        window.onscroll = () => {
            if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
            else navRef.current.classList.remove(...customStyle)
        }
      }, [state])

return (
    <div className='ace'>
    {/* <div className=" filter brightness-50 contrast-100 -mt-32 bg-cover bg-no-repeat bg-[100%] h-[550px] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/f7eb3bc2-2867-4c7e-94f8-e62ec11175cd/IN-en-20230626-popsignuptwoweeks-perspective_alpha_website_small.jpg')]" ></div> */}
     <nav ref={navRef} className=" w-full top-0">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex ">
              <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                    <a href="javascript:void(0)">
                        <img
                            src="https://www.floatui.com/logo.svg" 
                            width={120} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                  <div className="lg:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${ state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>
                    <div>
                        <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                            <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                <a href="javascript:void(0)" className="text-gray-600 hover:text-indigo-600">
                                    Contact
                                </a>
                            </li>
                            <li className="mt-4 lg:mt-0">
                                <a href="javascript:void(0)" className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                                    Login
                                </a>
                            </li>
                            <li className="mt-8 lg:mt-0">
                                <a href="javascript:void(0)" className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                            <a href={item.path}>
                                                { item.title }
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
              </div>
          </div>

      <h1 className='text-white-800 font-bold'>dniansdi ainicdinc anin </h1>
      
     <div className="space-y-3 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
            <h3 className="text-3xl text-white font-bold">
                Subscribe to our newsletter
            </h3>
            <p className="text-white-400 leading-relaxed">
              Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.  
            </p>
        </div>
        <div className="mt-6">
            <form 
                onSubmit={(e) => e.preventDefault()}
                className="items-center justify-center sm:flex">
                <input 
                    type="email"
                    placeholder="Enter your email"
                    className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                />
                <button
                    className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
                >
                    Subscribe
                </button>
            </form>
            <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-400">
                No spam ever, we are care about the protection of your data. 
                Read our <a className="text-indigo-600 underline" href="javascript:void(0)"> Privacy Policy </a>
            </p>
        </div>
      </nav>
      </div>
)
}

export default Header;