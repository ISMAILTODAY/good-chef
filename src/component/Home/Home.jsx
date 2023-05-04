
import { Image, Spinner } from 'react-bootstrap';
import './Home.css'
import ChefsCard from '../ChefsCard/ChefsCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import { useContext } from 'react';
import { contextProvider } from '../../ContextProvider/ContextProvider';

const Home = () => {
    const { loading } = useContext(contextProvider);
    if (loading) {
        return <Spinner className='position-absolute top-50 start-50' animation="border" variant="danger" />
    }

    return (

        < div >
            <div className='d-flex justify-content-evenly align-items-center p-5'>
                <div>
                    <h1 className='title'><span className='title-gd'>Good</span> food is the</h1>
                    <h1 className='title-gd'>foundation</h1>
                    <h1 className='sub-title'><span className='title-gd' >genuine</span> happiness</h1>

                </div>
                <Image src='./../../../public/image/chinese-food.png' className='banner-img mt-5'></Image>
            </div>
            <ChefsCard></ChefsCard>

        </div >
    );
};

export default Home;