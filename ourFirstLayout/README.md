# Our First Layout

## Intrucciones:

Hola Koders!!

1. Crear un nuevo repositorio git con la estructura básica de un Proyecto:

```
    myFirstLayout
       |-- index.html
       |-- css/
            |-- style.css
       |-- assets/
            |-- images/
       |-- design/
            |-- mockup.png
```

2. Realizar el análisis necesario del diseño proporcionado para generar la estructura de acuerdo a la Semantica HTML5

3. Darle los estilos necesarios para que el diseño sea los más parecido al proporcionado.

4. Subir el repositorio a uno remoto en github.

# Nota

La fuente es: **'DM Sans'**
y la pueden obtener desde google Fonts https://fonts.google.com/

y ¿cómo lo agregamos a nuestro desarrollo? de la siguiente manera:

1. Dentro de la pagina de Google Fonts buscamos la fuente deseada, la seleccionamos y nos brindará dentro de un tag link el source de la fuente. Este link debemos agregarlo en el head de nuestro documento HTML.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,500;0,700;1,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
        
</body>
</html>
```

2. Una vez que ya lo agregamos a nuestro documento HTML dentro del style.css podemos agregar la fuente con la propiedad **font-family**

```css

body {
    font-family: font-family: 'DM Sans', sans-serif;
}
```

# Color

verde-claro del header --> #F9FFF2
purple --> #410FF8