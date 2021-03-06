import axios from 'axios';
import {popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchGameURL} from '../api';

// Action creator

export const loadGames = () => async (dispatch)=> {
    //Fetch Axios
    const popularData = await axios.get(popularGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular:  popularData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingData.data.results
        }
    })
    
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchedData = await axios.get(searchGameURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED_GAMES",
        payload: {
            searched: searchedData.data.results
        }
    })
}

export const clearSearch = () => (dispatch) => {
    dispatch({
        type: "CLEAR_SEARCHED",
    })
}