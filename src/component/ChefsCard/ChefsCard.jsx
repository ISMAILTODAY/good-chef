import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';


const ChefsCard = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://good-chef-server.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])


    return (


        <div className='grid md:grid-cols-3 px-10 gap-y-5'>
            {
                chefs.map(chef => <div
                    key={chef.id}
                >
                    <Card style={{ width: '18rem' }}>
                        <LazyLoad>
                            <Card.Img variant="top" src={chef.ChefPicture} />
                        </LazyLoad>
                        <Card.Body>
                            <Card.Title>{chef.ChefName}</Card.Title>
                            <Card.Text>
                                <p>Experiencec: {chef.YearsOfExperience} years</p>
                                <p>Number of Recipes: {chef.NumbersOfRecipes}</p>
                                <p> Likes: {chef.Likes}</p>
                            </Card.Text>
                            <Link to={`/recipe/${chef.id}`}>
                                <Button className='w-100' variant='primary'>View Recipe</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </div>)
            }
        </div>
    );
};

export default ChefsCard;