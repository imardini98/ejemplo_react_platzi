function data(state, action) {
    switch (action.type){
        case 'SEARCH_VIDEO': {
            action.payload.query
            const categories = state.data.categories[2].playlist
            const results = categories.map(item => item.author.includes(action.payload.query))
            return {
                ...state,
                search : results

            }
        }
        default:
        return state
    }
}

export default data;