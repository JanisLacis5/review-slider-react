import reviews from "./data"
import {useState} from "react"
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa"
const Card = () => {
    const [index, setIndex] = useState(0)
    const newArr = reviews[index]
    const {image, name, job, text} = newArr
    // const randomIndex = Math.floor(Math.random() * (reviews.length - 1))
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length)
        if (randomNumber === index) {
            randomNumber = index + 1
        }
        const newIndex = randomNumber % reviews.length
        setIndex(newIndex)
    }
    return (
        <div className="review">
            <div className="img-container">
                <img className="person-img" src={image} alt={name} />
            </div>
            <h2 className="author">{name}</h2>
            <h4 className="job">{job}</h4>
            <p>{text}</p>
            <div className="btn-container">
                {index > 0 && (
                    <button
                        className="prev-btn"
                        type="button"
                        onClick={() => setIndex(index - 1)}>
                        <FaChevronLeft />
                    </button>
                )}
                {index < reviews.length - 1 && (
                    <button
                        className="prev-btn"
                        type="button"
                        onClick={() => setIndex(index + 1)}>
                        <FaChevronRight />
                    </button>
                )}
            </div>
            <button className="btn" type="button" onClick={randomPerson}>
                Suprise me!
            </button>
        </div>
    )
}
export default Card
