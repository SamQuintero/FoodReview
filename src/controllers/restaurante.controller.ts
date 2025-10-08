import { Request, Response } from 'express';
import { Restaurante } from '../models/restaurante.model';
import { Usuario } from '../models/usuario.model';
import { Review } from '../models/review.model';

// --- SIMULACIÓN DE BASE DE DATOS ---
const usuarios: Usuario[] = [
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Carlos' },
];

const restaurantes: Restaurante[] = [
    { id: 1, nombre: 'La Pizzería del Barrio', cocina: 'Italiana' },
    { id: 2, nombre: 'Tacos El Campeón', cocina: 'Mexicana' },
];

let reviews: Review[] = [
    { id: 1, usuarioId: 1, restauranteId: 2, calificacion: 5, comentario: 'Los mejores tacos de la ciudad.' },
];



export const getHomePage = (req: Request, res: Response) => {
    res.render('home', {
        layout: 'main',
        restaurantes,
    });
};

export const getRestaurantePage = (req: Request, res: Response) => {
    const restauranteId = parseInt(req.params.id);
    const restaurante = restaurantes.find(r => r.id === restauranteId);

    if (!restaurante) {
        return res.status(404).send('Restaurante no encontrado');
    }

    const reviewsDelRestaurante = reviews
        .filter(review => review.restauranteId === restauranteId)
        .map(review => {
            const usuario = usuarios.find(u => u.id === review.usuarioId);
            return {
                ...review,
                usuario: usuario, 
            };
        });

    res.render('restaurante', {
        layout: 'main',
        restaurante,
        reviews: reviewsDelRestaurante,
        usuarios, 
    });
};

export const addReview = (req: Request, res: Response) => {
    const { restauranteId, usuarioId, calificacion, comentario } = req.body;

    const numRestauranteId = parseInt(restauranteId);
    const numUsuarioId = parseInt(usuarioId);
    const numCalificacion = parseInt(calificacion);


    const existeReview = reviews.some(
        r => r.restauranteId === numRestauranteId && r.usuarioId === numUsuarioId
    );

    if (existeReview) {
  
        return res.status(400).send('Este usuario ya ha dejado una review para este restaurante.');
    }

    const nuevaReview: Review = {
        id: reviews.length + 1, 
        restauranteId: numRestauranteId,
        usuarioId: numUsuarioId,
        calificacion: numCalificacion,
        comentario,
    };

    reviews.push(nuevaReview);


    res.redirect(`/restaurante/${restauranteId}`);
};