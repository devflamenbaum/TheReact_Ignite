import React,{useEffect} from 'react';
import Game from '../components/Game';
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
//Styling and Motions
import styled from 'styled-components';
import {motion} from 'framer-motion';


const Home = () =>{
    //Fetch Data
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadGames());
    }, [dispatch])
    //Get the data back
    const {popular,newGames,upcoming} = useSelector((state) => state.games)
    //console.log(games);
    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game => (
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                        />
                ))}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Home;