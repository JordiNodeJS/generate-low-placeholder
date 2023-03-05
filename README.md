# Generador de placeholder de baja resolución para imágenes

## [Live Demo](https://generate-low-placeholder.netlify.app/)

Este proyecto se ha creado con la finalidad de participar en la **midu hackatón** organizado por [@midudev](https://midu.dev/) y apoyado por [Cloudinary](https://cloudinary.com/)

## Descripción 📖

La App consiste en que te genera una imagen de muy baja resolución, respetando el contorno de la imagen original, con el propósito de utilizarse como _placeholder_ o sustituto temporal de la imagen original mientras esta se carga definitivamente.

## Antecedentes 🐱‍👤
La idea original de la app la promovió [Migue Angel Durán](https://www.youtube.com/@midudev) durante unos de sus directos en [twitch](https://www.twitch.tv/videos/1744886615) en donde desarrolló una app que removía el fondo de las imágenes, utilizando el framework Svelte y Cloudinary.

## Stack Tech
- 🚀 Vite, como empaquetador del proyecto.
- 📚 React, como librería.
- ✊`react-dropzone`, para crear el área drag and drop.
- 🎨 tailwindCss y daisyUI, para estilar.
- ☁ Cloudinary, como servicio en la nube para procesar y alojar las imágenes.



# [CloudCreate Hackathon Submission](https://forms.monday.com/forms/bc9e0eefc52aca8b49b1fcae951eb910?r=use1)

### CÓMO PARTICIPAR
1. Regístrate en https://cloudinary.com/
2. Deja tu proyecto en este hilo: POR CREAR
3. Envía tu proyecto a este formulario: https://forms.monday.com/forms/bc9e0eefc52aca8b49b1fcae951eb910?r=use1

⚠️ FECHA MÁXIMA DE ENTREGA: 6 Marzo 23:59:59 CET

CONSEGUIR MÁS CRÉDITOS GRATIS 
https://cld.media/cloudcreateregister


### DropzoneImage.jsx

`e.target.result` se utiliza para obtener los datos binarios de la imagen seleccionada en el dropzone y convertirlos en una URL de datos. e.target se refiere al objeto que genera el evento de lectura, que es el objeto FileReader. El método `readAsDataURL()` del objeto `FileReader` lee el contenido del archivo como una URL de datos, y el resultado se almacena en `e.target.result`. Luego, se agrega un objeto de imagen que contiene el id único generado por la biblioteca CUID2 y la URL de datos de la imagen a un array de imágenes.




### ¿Qué hace reader.readAsDataURL(file)?

La función readAsDataURL se utiliza para leer el contenido de un archivo y convertirlo en un formato de datos URL base64 que se usa para mostrar el contenido del archivo en una página web.

En este caso, `reader.readAsDataURL(file)` lee el contenido del archivo y devuelve una cadena base64 que representa el contenido del archivo. Luego, esa cadena se utiliza para establecer la fuente de la imagen que se muestra en la página web.

El resultado de `reader.readAsDataURL(file)` es accedido a través de la propiedad e.target.result en el evento onload del objeto `FileReader`.

# Generate low quality image placeholders

Instead, an SVG LQIP can be used while lazy loading the full-sized image.

The placeholder should still represent the subject matter of the original but also be very compact. Confining the SVG to 2 colors and a detail level of 5% produces an easily identifiable image with a file size of just 6 KB.
