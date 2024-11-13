import React, { useState, useEffect } from "react";
import "../../styles/Landing/Carousel.css"; // Import the stylesheet
import collab from '../../assets/collaboration.jpg';
import kanban from '../../assets/kanban.jpg';
import user from '../../assets/user.jpg';


const carouselData = [
    { image: user, text: "Admin can assign tasks to users and track their progress" },
    { image: kanban, text: "Kanban board for visualizing tasks and workflows" },
    { image: collab, text: "Users can add their own tasks to existing boards" },
];

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel">
                <img
                    src={carouselData[activeIndex].image}
                    alt={`Slide ${activeIndex + 1}`}
                    className="carousel-image"
                />
                <div className="carousel-text">
                    <p>{carouselData[activeIndex].text}</p>
                </div>
            </div>
            <div className="indicator-container">
                {carouselData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;