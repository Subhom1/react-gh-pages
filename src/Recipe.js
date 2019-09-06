import React from 'react';


const Recipe = ({ title, calories, image, ingredients }) => {

    return (
        <div className="d-flex flex-column align-items-center justify-content-center m-4 bg-white recipecard">
            <h1>{title}</h1>
            <h5>{calories.toFixed(2)} Cal</h5>
            <ul className="unorderedlist">{ingredients.map(ingredient => (
                <li className="text-dark small px-4">{ingredient.text}</li>)
            )}
            </ul>
            <img src={image} alt="image" />
        </div>
    );
}

export default Recipe;