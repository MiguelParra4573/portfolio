import React from 'react'

const Perfil = () => {
    return (
        <>
            <header className="bg-white font-semibold dark:bg-gray-800">
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Desarrollador Web Front-end</h1>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                                <button className="w-full px-3 py-2 mt-6 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-indigo-600 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Ver mis proyectos</button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-2xl" src="https://merakiui.com/_nuxt/img/Catalogue-pana.666df84.svg" alt="Catalogue-pana.svg"></img>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Perfil