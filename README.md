1. POST /api/posts:
    URL: http://localhost:8000/api/posts
    Método: POST
    Cuerpo de la solicitud (en formato JSON):

    json

    {
      "title": "Título del post",
      "text": "Contenido del post",
      "author": "Autor del post"
    }

2. GET /api/posts:

    URL: http://localhost:8000/api/posts
    Método: GET

3. GET /api/posts/<id>:

    Reemplaza <id> con el ID real de un post existente en tu base de datos.
    Ejemplo de URL: http://localhost:8000/api/posts/123456789
    Método: GET

4. PATCH /api/posts/<id>:

    Reemplaza <id> con el ID real de un post existente en tu base de datos.
    Ejemplo de URL: http://localhost:8000/api/posts/123456789
    Método: PATCH
    Cuerpo de la solicitud (en formato JSON):

    json

        {
          "title": "Nuevo título del post"
        }

5. DELETE /api/posts/<id>:
    Reemplaza <id> con el ID real de un post existente en tu base de datos.
    Ejemplo de URL: http://localhost:8000/api/posts/123456789
    Método: DELETE