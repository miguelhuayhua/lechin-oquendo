export type Materia = {
    id_m?: number,
    nombre: string,
    url: string,
    costo: number,
    id_semestre?: number,
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