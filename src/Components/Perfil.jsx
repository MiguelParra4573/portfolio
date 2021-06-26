import React from 'react'
import { Link } from 'react-router-dom'


const Perfil = () => {
    return (
        <>
            <header className="bg-white py-36 font-semibold dark:bg-gray-800">
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-xl ">
                                <p className=" text-lg mt-2 text-gray-600 dark:text-gray-400">¡¡Hola!! Me llamo <spam className="text-lg font-semibold text-gray-800 lg:text-2xl" >Miguel Parra,</spam> y soy Ingeniero de software especializado en el <spam className="text-lg font-semibold text-gray-800 uppercase dark:text-white lg:text-2xl">Desarrollo Web Front-end</spam> con React.js y React + TypeScript. <br /> <br /> Adelante!! puedes conocer mas de mí y mi trabajo en todo este espacio. </p>
                                <button className="w-full px-3 py-2 mt-6 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"><Link to="/porfolio"> Ver mis proyectos </Link></button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-md" src="https://merakiui.com/_nuxt/img/Responsive-bro.2b8e4e8.svg" alt="Catalogue-pana.svg"></img>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Perfil