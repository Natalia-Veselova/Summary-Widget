export const loadData = async (dispatch) => {
    try {
        const response = await fetch('../Access Your Anger - Hayley Ep 5_pretty_tx.json');
        const data = await response.json();
        dispatch({ type: 'LOAD_DATA_SUCCESS', payload: data });
    } catch (error) {
        console.error('Error loading data:', error);
        dispatch({ type: 'LOAD_DATA_ERROR', payload: error });
    }
};
