//import fetch from 'cross-fetch'

export const REQUEST_ITINERARIES ='REQUEST_ITINERARIES'    
export function requestItineraries(id) {
    return {
        type: REQUEST_ITINERARIES,
        id
    }
}

export const RECEIVE_ITINERARIES = 'RECEIVE_ITINERARIES'
export function receiveItineraries(id, json) {
    return {
        type: RECEIVE_ITINERARIES,
        id,
        payloadCity: json,
        payloadItineraries: json.Itinerary.map(Itinerary=>Itinerary),
        receivedAt: Date.now()
    }
}

export function fetchItineraries (id) {
    return dispatch => {       
        dispatch(requestItineraries(id))
        console.log(id);
        return fetch('http://localhost:5000/city/' + id)
        .then(
           itinerariesResponse => { console.log(itinerariesResponse);
               return itinerariesResponse.json()},
            error => console.log('an error ocurred', error)
        )
        .then(json => dispatch(receiveItineraries(id, json))
        )
    }
}