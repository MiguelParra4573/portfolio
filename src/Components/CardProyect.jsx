import React from 'react'

const CardProyect = ({title,description}) => {
    return (
        <>
            <div class="flex flex-col justify-between bg-gray-300 overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div class="p-5">
                    <p class="mb-3 text-2xl font-semibold">{title}</p>
                    <p class="text-base font-medium leading-5 text-gray-900"> {description} </p>
                </div>
                <div className="flex flex-wrap mt-4 justify-center">
                    <button className="w-1/2 flex items-center px-24 py-2 mb-2 ml-2 font-medium tracking-wide text-base text-blueGray-600 capitalize transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 hover:bg-white-500 dark:hover:bg-gray-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        <span className="mx-1">WebSite</span>
                    </button>
                    <button className="w-1/2 flex items-center px-24 py-2 mb-2 ml-2 font-medium tracking-wide text-white text-blueGray-600 capitalize transition-colors duration-200 transform bg-white-600 rounded-md dark:bg-gray-800 hover:bg-white-500 dark:hover:bg-gray-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 border-blue rounded-md bg-blue-600 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <span className="mx-1">Codigo</span>
                    </button>
                </div>
                <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
            </div>
        </>
    )
}

export default CardProyect
