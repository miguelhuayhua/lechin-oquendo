export type Materia = {
    id_m?: number,
    nombre: string,
    url: string,
    costo: number,
    f_inicio: Date,
    f_final: Date,
    descripcion: string,
    duracion: number,
    hora_inicio: string,
    hora_salida: string,
    num_do?: string,
    id_t?: number,
    id_turno?: number
}

export type Tipo = {
    id_t: number,
    area: string,
    nivel: string
}

export type Turno = {
    id_t: number,
    turno: string,
    paralelo: string
}

export type detalle_personal = {
    id_dd: number,
    num_dd: string,
    antiguedad: number,
    curriculum: Blob,
    id_carrera: number
}

export type Carrera = {
    id_e: number,
    nombre: string,
    universidad: string
}

export type Calificacion = {
    id_ca?: number,
    num_ca?: string,
    id_inscripcion?: number,
    fecha_calificacion: string,
    e1parcial: number,
    e2parcial: number,
    e3parcial: number,
    nota_total: number,
    finalizado: number
}