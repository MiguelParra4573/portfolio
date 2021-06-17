import React from 'react'

const About = () => {
    return (
        <>
            <section class="text-blueGray-700 ">
                <div class="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div class="flex flex-col w-full mb-12 text-left ">
                        <div class="w-full mx-auto lg:w-1/2">
                            <h2 class="mx-auto mb-6 text-xl font-semibold leading-none tracking-tighter text-black title-font">📌 Quien soy?</h2>
                            <p class="mx-auto mb-4 text-base font-medium leading-relaxed text-blueGray-700 "> 
                            Orientado a resultados. 📋 Con un gran sentido de la responsabilidad y la resolucion de problemas logicos con el uso de las diferentes tecnologias. 🔗  
                            Me gusta mucho pensar y actuar sobre la frace... "no dejes para mañana lo que puediste hacer antes de ayer". Puede ser algo exagerada, pero me siento comodo precionandome con el fin de buscar mi mejora continua. 
                            </p>
                            <h2 class="mx-auto mb-6 text-xl font-semibold leading-none tracking-tighter text-black title-font">📌 Que hago ?</h2>
                            <p class="mx-auto mb-4 text-base font-medium leading-relaxed text-blueGray-700 "> 
                            💡	Soy un amante del desarrollo, despliegue y mantenimiento de aplicaciones enfocadas a la web, especialmente aquellas que brindan una experiencia de usuario y excelente desempeño.</p>
                            <p class="mx-auto mb-4 text-base font-medium leading-relaxed text-blueGray-700 "> 
                            💡	My objetivo primario es cumplir con todas mis responsabilidades profecionales y  abordar todas las devilidades del software y paulatinamente dar resolucion a los problemas que esten dentro de la ruta critica de la aplicacion hasta brindar la mejor UX al usuario final.</p>
                            <p class="mx-auto mb-4 text-base font-medium leading-relaxed text-blueGray-700 "> 
                            💡	Para en el futuro iterar e integrar las mejores caracteristicas que aporten valor al servicio que brinda la app, de seguro trabajando juntos lo lograremos. 💪🏼 Con fuerte dominio de los estándares web, diseño receptivo y la compatibilidad entre navegadores.</p>
                        </div>
                        <div class="w-full mx-auto lg:w-1/2">
                            <h2 class="mx-auto mb-6 text-xl font-semibold leading-none tracking-tighter text-black title-font">👔 Mi experiencia... </h2>
                            {/* <p class="mx-auto mb-4 text-base font-medium leading-relaxed text-blueGray-700 ">
                                Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking.
                            </p> */}

                            <p class="flex items-center mb-2 font-semibold text-blueGray-700 ">
                                <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                                </span> +2 años en desarrollo de software profesional y desarrollo en HTML5/CSS3/JS 
                            </p>
                            <p class="flex items-center mb-2 font-semibold text-blueGray-700 ">
                                <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                                </span> +1 años profesional trabajando con React/Redux + TypeScipt
                            </p>
                            <p class="flex items-center mb-2 font-semibold text-blueGray-700 ">
                                <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                                </span> Experiencia significativa trabajando en sistemas grandes y complejos.
                            </p>
                            <p class="flex items-center mb-2 font-semibold text-blueGray-700 ">
                                <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                                </span> Experiencia en la integración de API REST, y capacidad para elegir rápidamente nuevas API / SDK
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
