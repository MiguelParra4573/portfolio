import React from 'react'
import CardProyect from './CardProyect'

const Portfolio = () => {

    const data = [{
            "id":1,
            "nameApp": "Weather App",
            "description": "EL objetivo de esta app es informarte el clima a diario y el que tendras durante la semana en curso.",
            "web": "https://weather-app-nine-sigma.vercel.app",
            "repo":"https://github.com/Miguel-Parra-M/weatherApp",
        },{
            "id":2,
            "nameApp": "Windbnb App",
            "description": "Windbnb es la app que te permite encontrar la residencia perfecta cuando deseas viajar a un lugar especifico, te permite buscar desde el lugar al que vas, la cantidad de adultos y niños que ocuparan la recidencia. De esta manera podras encontrar tu mejor opcion.",
            "web": "https://windbnbapp.herokuapp.com",
            "repo":"https://github.com/Miguel-Parra-M/windbnbApp",
        },{
            "id":3,
            "nameApp": "Look Job App",
            "description": "Deseas encontrar el trabajo de tus sueños, buscalo aqui, esta app te permitira idenfitifica el trabajo de tus sueños",
            "web": "https://look-job-app.vercel.app",
            "repo":"https://github.com/Miguel-Parra-M/lookJobApp",
        },{
            "id":4,
            "nameApp": "Hero App",
            "description": "La presente aplicacion permite buscar, y crear tu equipo de heroes, y villanos, escoje un maximo de 6 integrantes, pero 3 de ellos deben ser heroes y los otros 3 deben ser villanos, no olvides ver detalladamente a cada heroe y villano.",
            "web": "",
            "repo":"https://github.com/Miguel-Parra-M/superhero_app",
        },{
            "id":5,
            "nameApp": "To Do App",
            "description":"La siguiente app te permite organizar registrar tus tareas diarias o semanales, con el fin de checar entre tareas que aun no cumples y tareas que ya has terminado.",
            "web": "https://todoapp05.herokuapp.com",
            "repo":"https://github.com/Miguel-Parra-M/todoApp",
        },{
            "id":6,
            "nameApp": "Country Quiz App",
            "description": "Con esta app puedes jugar, e intentando resolver la mayor cantidad de preguntas que sepas.",
            "web": "https://quizapp05.herokuapp.com",
            "repo":"https://github.com/Miguel-Parra-M/countryQuizApp",
        }
    ]
    
    const renderDataProyect = (proyect) => {
        const { id, nameApp, description, web, repo } = proyect
        return(<CardProyect key={id} title={nameApp} description={description} website={web} code={repo} /> )
    }
    return (
        <>
            <section className="text-blueGray-700 py-28 ">
                <div className="container items-center py-5 mx-auto lg:py-14 lg:px-40">
                    <div className="flex flex-wrap mb-12 text-left">
                        <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                data.map( proyect => renderDataProyect(proyect))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
