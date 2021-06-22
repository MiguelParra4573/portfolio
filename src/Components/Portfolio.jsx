import React from 'react'
import CardProyect from './CardProyect'

const Portfolio = () => {

    let title1="Hero app"
    let description1="Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    return (
        <>
            <section className="text-blueGray-700 py-28 ">
                <div className="container items-center py-5 mx-auto lg:py-14 lg:px-40">
                    <div className="flex flex-wrap mb-12 text-left">
                        <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <CardProyect title={title1} description={description1} />
                        <CardProyect title={title1} description={description1} />
                        <CardProyect title={title1} description={description1} />
                        <CardProyect title={title1} description={description1} />
                        <CardProyect title={title1} description={description1} />
                        <CardProyect title={title1} description={description1} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
