// favoritePostRoutes.js

import express from 'express';
import * as favoritePostController from '../controllers/favoritePost'; // Import favorite post controller
import verifyToken from '../middlewares/verifyToken'; // Import middleware for token verification

const router = express.Router();

// Routes for favorite post
router.use(verifyToken); // Apply token verification middleware to all routes below

router.post('/add', async (req, res) => {
    const { userId, postId } = req.body;
    try {
        const result = await favoritePostController.addPostToFavorites(userId, postId);
        res.json(result);
    } catch (error) {
        console.error('Error adding post to favorites:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
router.get('/get-by-user/:userId', favoritePostController.getFavoritePostsByUserId); // Route to get favorite posts by user

export default router;
