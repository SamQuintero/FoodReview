export interface Review {
    id: number;
    usuarioId: number;
    restauranteId: number;
    calificacion: number; // de 1 a 5
    comentario: string;
  }