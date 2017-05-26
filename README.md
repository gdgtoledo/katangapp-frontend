[![Build Status](https://travis-ci.org/craftsmanship-toledo/katangapp-frontend.svg?branch=dev)](https://travis-ci.org/craftsmanship-toledo/katangapp-frontend)

# Katanga

Katanga es una aplicación opensource  para ver los tiempos de los autobuses de Toledo en cada parada.

## Historia

Puedes ver [la historia](http://www.latribunadetoledo.es/noticia.cfm/Local/20100523/katangas/circulan/facebook/C12146B3-B5AA-5333-3B488A78CFC4076A) de porqué en Toledo se llamaban katangas a los autobuses urbanos

## Instalación

Baja la última [release](https://github.com/craftsmanship-toledo/katangapp-frontend/releases), o si tienes Docker en tu máquina, ejecuta el siguiente comando:

```shell
docker run -d -p 7777:80 craftsmanshiptoledo/katanga-frontend:1.0.0-rc.1
```

Que levantará un contenedor con un servidor web Nginx con la aplicación de Katanga instalada, de modo que si abres un navegador en el puerto 7777 (http://localhost:7777) verás la aplicación funcionando.

## Uso

Puedes usar [Katanga](http://katanga.wedeploy.io/) Desktop que está hospedada en wedeploy.

## Desarrollo

Clona este repositorio

```shell
git clone git@github.com:craftsmanship-toledo/katangapp-frontend.git
```

### Dependencias

Instala [nodejs](https://nodejs.org/es/) para poder desarrollar o correr katanga.

```shell
npm install -g yarn
yarn install
```

### Run

````shell
npm start
````

### Build

```shell
npm run build
```

### No nos mires, únete

Puedes unirte de muchas formas, no solo haciendo commits, puedes preguntar al equipo acerca de estas tareas, abrir un issue en el proyecto, mejorar nuestro código y hacernos peticiones para la inclusión de estas mejoras etc.

Si te animas a hacer commits puedes ver su formato y sus convenciones [aquí](https://github.com/craftsmanship-toledo/katangapp-frontend/wiki/Formato-de-commits).

### Equipo

| Pic                                      |         User          |                  Github                  |                 Twitter                  |                   Web                    |
| ---------------------------------------- | :-------------------: | :--------------------------------------: | :--------------------------------------: | :--------------------------------------: |
| ![Javi](https://avatars3.githubusercontent.com/u/1202463?v=3&s=200) | Javier López de Ancos | [javierlopezdeancos](https://github.com/javierlopezdeancos) | [@javierland](https://twitter.com/javierland) | [javierlopez](http://public.javierlopezdeancos.wedeploy.io/) |
| ![manuel](https://avatars2.githubusercontent.com/u/951580?v=3&s=200) |   Manuel de la Peña   | [mdelapenya](https://github.com/mdelapenya) | [@mdelapenya](https://twitter.com/mdelapenya) |                                          |
| ![Felix](https://avatars0.githubusercontent.com/u/4701534?v=3&s=200) |     Felix Ortega      | [felixortegam](https://github.com/felixortegam) | [@felixortegam](https://twitter.com/felixortegam) |                                          |



