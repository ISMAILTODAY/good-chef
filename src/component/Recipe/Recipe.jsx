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

            })
    }, [])
    const recipeDetails = recipe.recipes;

    const [isNan, setIsNan] = useState(true);
    const isTure = () => {

        setIsNan(false);
    }

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
                    </Card>
                </div>
            </div>
            <section className='mt-5 grid md:grid-cols-3 px-10 gap-y-5'>
                {
                    recipeDetails && recipeDetails.map(recipeDetail => <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={recipeDetail.pictuer} />
                            <Card.Body>
                                <Card.Title>{recipeDetail.recipeName}</Card.Title>
                                <Card.Text>
                                    {
                                        recipeDetail.ingredients && recipeDetail.ingredients.map(ingredient => <div>

                                            <ul>
                                                <li>{ingredient}</li>
                                            </ul>
                                        </div>)
                                    }
                                    <div>

                                        {isNan ? recipeDetail.method.slice(0, 50) : recipeDetail.method}... <Link onClick={isTure}>See More</Link> </div>
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