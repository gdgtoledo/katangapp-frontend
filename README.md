[![Build Status](https://travis-ci.org/craftsmanship-toledo/katangapp-frontend.svg?branch=dev)](https://travis-ci.org/craftsmanship-toledo/katangapp-frontend)  [![Chat with us in gitter](https://badges.gitter.im/craftsmanshipToledo/katanga/craftsmanshipToledo.svg)](https://gitter.im/craftsmanshipToledo/katanga) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Katanga

Katanga es una aplicación opensource  para ver los tiempos de los autobuses de Toledo en cada parada.

## Historia

Puedes ver [la historia](http://www.latribunadetoledo.es/noticia.cfm/Local/20100523/katangas/circulan/facebook/C12146B3-B5AA-5333-3B488A78CFC4076A) de porqué en Toledo se llamaban katangas a los autobuses urbanos

## Instalación

Baja la última [release](https://github.com/swcraftersclm/katangapp-frontend/releases), o si tienes Docker en tu máquina, ejecuta el siguiente comando:

```shell
docker run -d -p 7777:80 swcraftersclm/katanga-frontend:1.0.0-rc.1
```

Que levantará un contenedor con un servidor web Nginx con la aplicación de Katanga instalada, de modo que si abres un navegador en el puerto 7777 (http://localhost:7777) verás la aplicación funcionando.

## Uso

Puedes usar [Katanga](http://katanga.wedeploy.io/) Desktop que está hospedada en wedeploy.

## Desarrollo

Clona este repositorio

```shell
git clone git@github.com:swcraftersclm/katangapp-frontend.git
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

Este comando ejecutará un `npm install` así como invocará a `WebPack`.

Si además queremos construir una imagen de Docker, podremos ejecutar:

```shell
npm run build-docker
```

Este comando construirá una imagen bajo el repositorio `swcraftersclm/katanga-front`, con la versión indicada en el 
`package.json`, por ejemplo: `swcraftersclm/katanga-front:1.0.0-rc.1`.

### No nos mires, únete

Únete a nuestro chat room en [![Chat with us in gitter](https://badges.gitter.im/craftsmanshipToledo/katanga/craftsmanshipToledo.svg)](https://gitter.im/craftsmanshipToledo/katanga)

Puedes unirte de muchas formas, no solo haciendo commits, puedes preguntar al equipo acerca de estas tareas, abrir 
un issue en el proyecto, mejorar nuestro código y hacernos peticiones para la inclusión de estas mejoras etc.

Si te animas a hacer commits puedes ver su formato y sus convenciones 
[aquí](https://github.com/swcraftersclm/katangapp-frontend/wiki/Formato-de-commits).

### Core contributors

| Pic                                      |         User          |                  Github                  |                 Twitter                  |                   Web                    |
| ---------------------------------------- | :-------------------: | :--------------------------------------: | :--------------------------------------: | :--------------------------------------: |
| ![Javi](https://avatars3.githubusercontent.com/u/1202463?v=3&s=100) | Javier López de Ancos | [javierlopezdeancos](https://github.com/javierlopezdeancos) | [@javierland](https://twitter.com/javierland) | [javierlopez](http://public.javierlopezdeancos.wedeploy.io/) |
| ![Manuel](https://avatars2.githubusercontent.com/u/951580?v=3&s=100) |   Manuel de la Peña   | [mdelapenya](https://github.com/`) | [@mdelapenya](https://twitter.com/mdelapenya) |                                          |
| ![Felix](https://avatars0.githubusercontent.com/u/4701534?v=3&s=100) |     Felix Ortega      | [felixortegam](https://github.com/felixortegam) | [@felixortegam](https://twitter.com/felixortegam) |                                          |
| ![Rafa](https://avatars1.githubusercontent.com/u/91924?v=4&s=460) |     Rafa García      | [rafagarcia](https://github.com/rafagarcia) | [@rafagarcia](https://twitter.com/rafagarcia) |                                          |



