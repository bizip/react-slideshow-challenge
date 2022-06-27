import React, { useState } from 'react';

function Slides({ slides }) {
    const [slide, setSlide] = useState(0)
    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className={slide === 0 ? "small outlined" : "small"}
                    disabled={slide === 0}
                    onClick={() => setSlide(0)}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className={slide === 0 ? "small outlined" : "small"}
                    disabled={slide === 0}
                    onClick={() => setSlide(slide - 1)}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className={slide === slides.length - 1 ? "small outlined" : "small"}
                    disabled={slide === slides.length - 1}
                    onClick={() => setSlide(slide + 1)}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slide].title}</h1>
                <p data-testid="text">{slides[slide].text}</p>
            </div>
        </div>
    );

}

export default Slides;
