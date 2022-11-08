import React from 'react';
import { Promo, Sale } from '../Components/&organisms';
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
        </main>
    );
}

export default Home;