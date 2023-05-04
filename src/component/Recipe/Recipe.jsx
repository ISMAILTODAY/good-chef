import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazyload';
import { FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const Recipe = () => {
    const { id } = useParams()
    console.log(id)
    const [recipe, setRecipe] = useState({});
    useEffect(() => {
        fetch(`https://good-chef-server.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => {
                setRecipe(data)
                // console.log(data)
            })
    }, [])
    const recipeDetails = recipe.recipes;
    // console.log(recipe)
    const [isNan, setIsNan] = useState(true);
    const isTure = () => {
        // recipe.map(n => { console.log(n.method) })
        setIsNan(false);
    }
    // const [ingredient, setIngredient] = useState('');
    // console.log(ingredient)
    const handleMark = (e) => {
        toast('Added in Favouirte.');

    }

    return (
        <div>
            <div className='p-10 mt-5 mb-5 d-md-flex justify-content-md-evenly align-items-center'>
                <div>
                    <h1>Bio of {recipe.ChefName}</h1>
                    <p>Nationality: {recipe.nationality}</p>
                    <p>Experience: {recipe.experience}</p>
                    <p>Specialty: {recipe.specialty}</p>
                    <p>{
                        recipe.awards && recipe.awards.map(award => <p>awards: {award}</p>)
                    }</p>
                </div>

                <div >
                    <Card style={{ width: '20rem' }}  >
                        <LazyLoad>
                            <Card.Img variant="top" src={recipe.ChefPicture} />
                        </LazyLoad>
                        {/* <Card.Body>
                            <Card.Title>{recipe.ChefName}</Card.Title>
                            <Card.Text>
                                <p>Experiencec: {recipe.YearsOfExperience} years</p>
                                <p>Number of Recipes: {recipe.NumbersOfRecipes}</p>
                                <p> Likes: {recipe.Likes}</p>
                            </Card.Text>
                        </Card.Body> */}
                    </Card>
                </div>
            </div>
            <section className='mt-5 grid md:grid-cols-3 px-10 gap-y-5'>
                {
                    recipeDetails && recipeDetails.map(n => <div>
                        {/* {
                            setIngredient(n.method ? n.method : '')
                        } */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={n.pictuer} />
                            <Card.Body>
                                <Card.Title>{n.recipeName}</Card.Title>
                                <Card.Text>
                                    {
                                        n.ingredients && n.ingredients.map(m => <div>
                                            <ul>
                                                <li>{m}</li>
                                            </ul>
                                        </div>)
                                    }
                                    <p>{isNan ? n.method.slice(0, 50) : n.method}... <Link onClick={isTure}>See More</Link> </p>
                                    <p>Rating: <Rating
                                        placeholderSymbol={<FaStar className='text-primary'></FaStar>}
                                        emptySymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}

                                    ></Rating></p>
                                </Card.Text>
                                <Link>
                                    <Button onClick={handleMark} className='w-100 ' variant='primary'>Favouirte</Button>
                                    <Toaster></Toaster>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>)
                }

            </section>
        </div>
    );
};

export default Recipe;