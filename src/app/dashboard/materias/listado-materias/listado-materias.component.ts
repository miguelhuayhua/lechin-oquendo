import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.scss']
})
export class ListadoMateriasComponent implements OnInit {

  materias: {
    title: string,
    costo: number,
    grado: string,
    descripcion: string,
    estado: number,
    id: string,
    banner: string
  }[] = [{
    title: 'Algebra',
    banner: 'https://static.vecteezy.com/system/resources/previews/005/421/338/non_2x/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg',
    costo: 300,
    grado: '1',
    descripcion: 'El álgebra es la rama de la matemática que estudia la combinación de elementos de estructuras abstractas acorde a ciertas reglas',
    estado: 1,
    id: 'ALG-2022-1'
  },
  {
    title: 'Algebra',
    banner: 'https://static.vecteezy.com/system/resources/previews/005/421/338/non_2x/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg',
    costo: 300,
    grado: '1',
    descripcion: 'El álgebra es la rama de la matemática que estudia la combinación de elementos de estructuras abstractas acorde a ciertas reglas',
    estado: 1,
    id: 'ALG-2022-1'
  },
  {
    title: 'Algebra',
    banner: 'https://static.vecteezy.com/system/resources/previews/005/421/338/non_2x/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg',
    costo: 300,
    grado: '1',
    descripcion: 'El álgebra es la rama de la matemática que estudia la combinación de elementos de estructuras abstractas acorde a ciertas reglas',
    estado: 1,
    id: 'ALG-2022-1'
  },
  {
    title: 'Algebra',
    banner: 'https://static.vecteezy.com/system/resources/previews/005/421/338/non_2x/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg',
    costo: 300,
    grado: '1',
    descripcion: 'El álgebra es la rama de la matemática que estudia la combinación de elementos de estructuras abstractas acorde a ciertas reglas',
    estado: 1,
    id: 'ALG-2022-1'
  },
  {
    title: 'Algebra',
    banner: 'https://static.vecteezy.com/system/resources/previews/005/421/338/non_2x/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg',
    costo: 300,
    grado: '1',
    descripcion: 'El álgebra es la rama de la matemática que estudia la combinación de elementos de estructuras abstractas acorde a ciertas reglas',
    estado: 1,
    id: 'ALG-2022-1'
  },
  {
    title: 'Algebra',
    banner: 'https://static.vecteezy.com/system/resources/previews/005/421/338/non_2x/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg',
    costo: 300,
    grado: '1',
    descripcion: 'El álgebra es la rama de la matemática que estudia la combinación de elementos de estructuras abstractas acorde a ciertas reglas',
    estado: 1,
    id: 'ALG-2022-1'
  },
  {
    title: 'Algebra',
    banner: 'https://static.vecteezy.com/system/resources/previews/005/421/338/non_2x/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg',
    costo: 300,
    grado: '1',
    descripcion: 'El álgebra es la rama de la matemática que estudia la combinación de elementos de estructuras abstractas acorde a ciertas reglas',
    estado: 1,
    id: 'ALG-2022-1'
  },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
