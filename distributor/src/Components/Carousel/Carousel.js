import { useState } from 'react'
import Data from '../../Assets/Data'

const Carousel = () => {
    const [data, setData] = useState(Data)

    return (
        <div
            id="carouselExampleControls"
            className="carousel slide "
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                {data.map((x) => {
                    const { id, Title, Image, Description, Price } = x

                    return (
                        <div key={id} className="carousel-item">
                            <h2>{Title}</h2>
                            <img src={Image} alt="Food image" />
                            <p>{Description}</p>
                            <div>{Price}</div>
                        </div>
                    )
                })}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
