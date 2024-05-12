import axiosConfig from '../axiosConfig'; // Assuming axiosConfig is properly defined

export const saveFavoritePost = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/favorite/add',
            data: payload, // Assuming userId and postId are passed as arguments
        });
        resolve(response.data);
    } catch (error) {
        reject(new Error('Failed to save favorite post: ' + error.message));
    }
});
