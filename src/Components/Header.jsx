import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {

    return (
        <>
            <nav className="font-semibold">
                <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link className="text-2xl text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/perfil">Miguel Parra</Link>
                        </div>
                        
                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center lg:flex">
                        <div className="flex flex-col lg:flex-row lg:mx-6 ">
                            <NavLink activeClassName="border-blue-500 mx-1.5 sm:mx-6" className="text-sm border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" to='/perfil'> Home </NavLink>
                            <NavLink activeClassName="border-blue-500 mx-1.5 sm:mx-6" className="text-sm border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" to='/about'> Acerca de mi </NavLink>
                            <NavLink activeClassName="border-blue-500 mx-1.5 sm:mx-6" className="text-sm border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" to='/skills'> Mis habilidades </NavLink>
                            {/* <NavLink activeClassName="border-blue-500 mx-1.5 sm:mx-6" className="text-sm border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" to='/resume'> Resume </NavLink> */}
                            <NavLink activeClassName="border-blue-500 mx-1.5 sm:mx-6" className="text-sm border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" to='/porfolio'> Portafolio </NavLink>
                        </div>
                        <button className="flex w-full px-3 py-2 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"> <a href="https://drive.google.com/file/d/1t6sW2RWHxB1vYHf_J_atC08NzkrRLR9i/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resumen</a> </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header