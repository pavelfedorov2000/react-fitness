const initialState = {
    sortBy: {
        type: 'popular',
        order: 'desc',
    },
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION': {

            return {
                ...state,
            };
        }

        default:
            return state;
    }
}

export default filters;