import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inoticia } from '../../interfaces/Inoticia'

@Component({
  imports: [FormsModule],
  selector: 'app-blog',
  styleUrl: './blog.css',
  templateUrl: './blog.html',
})
export class Blog {



  mensajeError: string;
  newNoticia: Inoticia; 
  Noticias: Inoticia [];


  constructor(){ 
    this.mensajeError = "",

    this.newNoticia = 
      {
        Titulo: "",
        Imagen: "",
        Cuerpo: "",
        Fecha: ""
      }

    this.Noticias = [
      {
        Titulo: "El estreno de la temporada 3 de 'Los Anillos de Poder' funcionará como un reinicio suave",
        Imagen: "https://www.cinemascomics.com/wp-content/uploads/2026/10/Galadriel-anillos-de-poder-1044x587.jpg",
        Cuerpo: "Los showrunners de la serie de Amazon Prime Video han confirmado que la tercera temporada, que se estrena este 11 de noviembre, dará un giro radical. Esta nueva tanda de episodios servirá como un 'soft reboot' enfocado plenamente en el ascenso definitivo de Sauron y la resistencia de los pueblos libres.",
        Fecha: "2026-11-04"
      },
      {
        Titulo: "Jamie Dornan asume el reto de interpretar al nuevo Aragorn en la gran pantalla",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNw4OfmkgJdM5pEON9wjLfqBJmhXrYOeJWAOwQVrQqjw&s=10",
        Cuerpo: "El actor británico ha sido confirmado oficialmente para dar vida al montaraz en la película 'The Hunt for Gollum'. Dornan declaró que busca aportar frescura sin intentar superar la legendaria actuación de Viggo Mortensen en la persecución de la criatura antes de los eventos de la trilogía original.",
        Fecha: "2026-10-29"
      }
    
  ]; 
  }


  guardarDatos(): void{

    if(
      this.newNoticia.Titulo.trim() === '' ||
      this.newNoticia.Imagen.trim() === '' ||
      this.newNoticia.Cuerpo.trim() === '' ||
      this.newNoticia.Fecha.trim() === '' 
    ){

      this.mensajeError= "TODOS LOS DATOS TIENEN QUE ESTAR RELLENOS"
      return;
    }

    this.mensajeError = '';
    this.Noticias.push(this.newNoticia);
  
    
        this.newNoticia = {
          Titulo: "",
          Imagen: "",
          Cuerpo: "",
          Fecha: ""
        }
  }

}
