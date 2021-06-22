import React from 'react'

const Footer = () => {
    return (
        <> 
            <footer className="bg-white font-semibold dark:bg-gray-800">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full mx-6 lg:w-2/5">
                            <div className="px-6">
                                <p className="max-w-md mt-2 mr-2 text-gray-500 dark:text-gray-400">📌 Siéntete libre de expresarte al escribirme, eres totalmente bienvenid@.😊</p>
                                
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">📌 Por que deberias contactar conmigo? </h3>
                                    <span className="block mt-2 pl-12 text-sm text-gray-600 dark:text-gray-400">De comunicación y escucha activa</span>
                                    <span className="block mt-2 pl-12 text-sm text-gray-600 dark:text-gray-400">Con inteligencia emocional</span>
                                    <span className="block mt-2 pl-12 text-sm text-gray-600 dark:text-gray-400">#Pracmatico por el performance del la app</span>
                                    <span className="block mt-2 pl-12 text-sm text-gray-600 dark:text-gray-400">De amplia curiosidad</span>
                                </div>
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">🔑 Algunas de mis cualidades: </h3>
                                    <span className="block mt-2 pl-12 text-sm text-gray-600 dark:text-gray-400"> #Optimista </span>
                                    <span className="block mt-2 pl-12 text-sm text-gray-600 dark:text-gray-400"> #Perseverante </span>
                                    <span className="block mt-2 pl-12 text-sm text-gray-600 dark:text-gray-400"> #Ambicios </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-7">
                        <h3 className="text-gray-700 uppercase dark:text-white">📌 Sigueme en:</h3>
                        <span className="block ml-5 text-lg text-gray-600 dark:text-gray-400">✨ Twiter:  <a href="https://twitter.com/JMiguelPM" target="_blank" className="hover:text-blue-600" >@JMiguelPM</a> | 📚 GitHub: <a href="https://github.com/Miguel-Parra-M" target="_blank" className="hover:text-blue-600" >Miguel-Parra-M</a> | 📞 WhatsApp: <a href="https://wa.me/593997392002" target="_blank" className="hover:text-blue-600" > (+593) 997392002</a> | 📬 email: <span className="hover:text-blue-600"> pmjm0990@gmail.com </span> </span>
                    </div>
                    <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700"></hr>
                    <div>
                        <p className="text-center text-gray-800 dark:text-white">© Miguel Parra 2021 - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer