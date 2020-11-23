import axios from 'axios';
import {gameDetailsUrl, gameScreenshotUrl} from '../api';

export const loadDetail = (id) => async (dispatch) =>{
    dispatch({
        type: "LOADING_DETAILS"
    })
    const detailsData = await axios.get(gameDetailsUrl(id));
    const screen = await axios.get(gameScreenshotUrl(id));
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailsData.data,
            screen: screen.data
        }
    })
}