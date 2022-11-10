import React from 'react';
import { BlogSection, Events, Footer, FreeTraining, FreeTrainingRecording, MobileApp, Promo, Sale, UniqueConcept } from '../Components/&organisms';
import { DoubleMarquee } from '../Components/^molecules';
//import { useSelector, useDispatch } from 'react-redux';

function Home() {

    //const dispatch = useDispatch();
    //const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded); // вытаскиваем состояние загрузки из стора


    /* React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category)); // вернет функцию
        axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            dispatch(setPizzas(data));
        });
    }, [category, sortBy]); // [] = componentDidMout */

    return (
        <main className="page">
            <Promo />
            <Sale />
            <UniqueConcept />
            <DoubleMarquee />
            <MobileApp />
            <BlogSection />
            <Events />
            <FreeTraining />
            <FreeTrainingRecording />
            <DoubleMarquee modifier="with_border" />
        </main>
    );
}

export default Home;