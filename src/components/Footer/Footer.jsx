import React from 'react'
export default function Footer() {
  return (
    <>
    <footer className=' relative bottom-0 right-0 left-0 mb-0 pb-0'>
        <div className="px-3 ">
            <div className="flex flex-wrap py-8 px-4 items-center md:justify-between gap-3 md:gap-0 justify-center">
                <div className="col-md-8">
                <div className="w-full max-w-3xl min-w-md self-center justify-self-center ">
                    <div className="relative ">
                        <input
                            className="w-full relative bg-[#1e202b] placeholder:text-slate-200 text-white text-sm  rounded-[30px] py-5 pr-[50px] pl-5 focus:outline-0"
                            placeholder="Enter your email to subscribe..."
                        />
                        <button
                            className=" subscribe absolute top-[5px] right-[15px] bottom-[5px] flex items-center rounded-[30px] bg-[#009ad8] py-0 px-10  text-center text-sm text-white transition-all shadow-sm"
                            type="button"
                        > subscribe
                        </button>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                    <span><i className="fa-brands fa-facebook-f"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                    <span><i className="fa-brands fa-google-plus-g"></i></span>
                    <span><i className="fa-brands fa-pinterest"></i></span>
                </div>
            </div>
            <p className="Copyright text-center">Copyright 2025 Company name. Designed by Themezy. All rights reserved</p>
         
        </div>
        
        

    </footer>

    </>
  )
}
