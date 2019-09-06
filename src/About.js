import React from 'react';


const About = ({ title, calories, image, ingredients }) => {

    return (
        <div className="d-flex flex-column align-items-center justify-content-center m-4 p-2 bg-white">
            <h1>{title}</h1>
            <h5>{calories.toFixed(2)} Cal</h5>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt="" />

        </div>
    );
}

export default About;