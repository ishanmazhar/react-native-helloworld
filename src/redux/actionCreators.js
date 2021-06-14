import * as actionTypes from './actionTypes';

export const addPlace = place => dispatch => {
    fetch("https://my-places-4bd08-default-rtdb.firebaseio.com/places.json", {
        method: "POST",
        body: JSON.stringify(place)
    })
        .catch(error => console.log(error))
        .then(response => response.json())
        .then(data => console.log(data));
}

export const setPlaces = places => {
    return {
        type: actionTypes.SET_PLACES,
        payload: places
    }
}

export const loadPlaces = () => dispatch => {
    fetch("https://my-places-4bd08-default-rtdb.firebaseio.com/places.json")
        .catch(err => {
            alert("Something went wrong, sorry");
            console.log(err);
        })
        .then(res => res.json())
        .then(data => {
            const places = [];
            for (let key in data) {
                places.push({
                    ...data[key],
                    key: key
                })
            }
            dispatch(setPlaces(places));
        });
}


export const deletePlace = key => {
    return {
        type: actionTypes.DELETE_PLACE,
        payload: key
    }
}