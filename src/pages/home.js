import React,{useEffect} from 'react';
//Redux
import {useDispatch} from 'react-redux';
import {loadGames} from '../actions/gamesAction';

const Home = () =>{
    //Fetch Data
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadGames());
    })

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;