import React from 'react'
import dp from "../img.jpg"

const Me = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 p-10">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-50 h-80 rounded-lg lg:h-[36rem]" src={dp}  alt="" />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p className="text-5xl font-semibold text-blue-500 ">“</p>

                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                   Hello Developers!
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                    I am Mayank Gupta, a Full Stack Web Developer sound and experienced in constructing professional web applications using MERN Stack. You view all the levels below, and more of my personal projects on my git hub. Happy Coding!
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">Mayank Gupta</h3>
                <p className="text-gray-600 dark:text-gray-300">Web Developer at Indian Institute of Information Technology Sri City (IIIT Sri City)</p>


            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Me
