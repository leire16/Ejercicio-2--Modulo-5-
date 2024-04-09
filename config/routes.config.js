const express = require('express');
const router = express.Router();
const post = require('../controllers/postController');

router.post('/api/posts', post.createPost); // Crear un nuevo post
router.get('/api/posts', post.getPosts); // Obtener todos los posts
router.get('/api/posts/:id', post.getPostById); // Obtener un post por su ID
router.patch('/api/posts/:id', post.updatePost); // Actualizar un post por su ID
router.delete('/api/posts/:id', post.deletePost); // Eliminar un post por su ID

module.exports = router;