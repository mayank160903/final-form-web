import React from 'react'

const Grid = () => {
  return (
    <div className=' bg-gray-900'>
      <section className="bg-white dark:bg-gray-900 p-10">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            All Level Projects:
          </h1>
          
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          <a href="https://event-regist-form.vercel.app/">
            
            <div
              className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')"
              }}
            >
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Level 1: Basic Dynamic Form with Conditional Fields
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">View Here</p>
              </div>
            </div>
            </a>
            <a href="https://job-applic-form.vercel.app/">
           
            <div
              className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')"
              }}
            >
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Level 2: Intermediate Dynamic Form with Nested Conditional Logic and Multiple
                Field Types
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">View Here</p>
              </div>
            </div>
            </a>
            <a href="https://survey-form-api-ten.vercel.app/">
            
            <div
              className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
              }}
            >
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Level 3: Advanced Dynamic Form with Complex Conditional Logic, Dynamic
                Sections, and Integration with an API
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">View Here</p>
              </div>
            </div>
            </a>
            <a href="https://github.com/mayank160903">

            
            <div
              className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
              }}
            >
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  View Rest of my Projects on my github
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">View here</p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Grid
