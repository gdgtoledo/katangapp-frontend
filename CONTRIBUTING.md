## Contribuir.

En primer lugar, gracias por considerar la contribución a Katanga. Es la gente como tú que hacen que Katanga sea una 
gran herramienta y de Toledo una mejor ciudad.

### 1. Crear una nueva incidencia, sugerir una feature o preguntas.

Si has podido notar o sufrir una incidencia, o simplemente tienes una pregunta, puedes buscar en nuestro gestor de 
incidencias:
[buscador de incidencias](https://github.com/swcraftersclm/katangapp-frontend/issues?)
Para ver si alguien más en la comunidad ya ha creado un ticket. De lo contrario, sigue adelante y  
[haz uno](https://github.com/swcraftersclm/katangapp-frontend/issues/new)!

Las nuevas incidencias deberán:

1. Tener un título descriptivo.
2. Estar suficientemente descritas para entender la pregunta o la proposición de nueva funcionalidad
3. Sería conveniente adjuntar imágenes, archivos gif o cualquier archivo de apoyo  si fuera necesario para entender 
el contexto.

Las incidencias pueden estar etiquetadas con varios niveles de funcionalidad, `feture`, `bug` y `maintenance` y varios 
niveles de prioridad `low`, `medium` y `hight`.

Si tienes una pregunta simplemente puedes crear una incidencia con el tag `question` o `help`. También puedes entrar 
en contacto con nosotros por [el email de katanga](mailto:katangapp@gmail.com), por nuestra 
[cuenta de twitter](https://twitter.com/katangapp) o por nuestro 
[![Chat de gitter](https://badges.gitter.im/craftsmanshipToledo/katanga/craftsmanshipToledo.svg)](https://gitter.im/craftsmanshipToledo/katanga)

### 2. Fork & crear una rama.

Si hay algo que piensas que puedes arreglar o en lo que puedes contribuir, entonces forkea
[este repositorio](https://github.com/swcraftersclm/katangapp-frontend), 
puedes ver una referencia de ayuda en
[fork Active Admin](https://help.github.com/articles/fork-a-repo) y create a partir de la rama dev una rama con 
un nombre descriptivo.

Un buen nombre para un branch podría ser ( si por ejemplo quieres arreglar la incidencia #224, que está etiquetada con
la etiqueta bug):

```sh
git checkout -b bug/224-add-japanese-translations
```

### 3. Formato de los commits.

#### 3.1 Comprueba que git conoce tu nombre y email para comitear.

```sh
git config --global user.name "J. Random User"
git config --global user.email "j.random.user@example.com"
```

#### 3.2 Guía de estilo de los mensajes de commit.

Veamos un ejemplo, si estamos comiteando unos cambios que resuelven parte de la incidencia #327:

```sh
git add mis/archivos/cambiados
git commit -m "[#327] cambios que arreglan/hacen esto"
``` 

Los commits deben:

1. Contener los cambios contenidos en la descripción de su mensaje.
2. Estar debidamente separados y descritos.

Los mensajes de los commits deberán ser:

1. Cortos
2. Descriptivos


### 4. Mantén el código linteado, formateado y con los test en verde.

Estate seguro que antes de hacer tu pull request tu código esta linteado, formateado y con los test en verde. tenemos un
sistema de integración continua en Travis que pasará el linter, formateará el código y ejecutará los test al código 
antes de dar por válida tu pull request. Si subes tu código en perfectas condiciones para hacer la pull request 
evitaremos pérdidas de tiempo para los revisores o pull request declinadas. También evitaras conflictos si ya subes tu 
código bien formateado, dado que cuando te sincronices con los cambios que el sistema de integración continua va 
depositando, tendrás el mismo formato en los archivos de tu repositorio local.

```sh
yarn lint
```

ó

```sh
npm run lint
```

### 5. Pull request.

Debes crear una pull request desde la rama que resuelve tu incidencia en tu fork contra 
[este repositorio en la rama de desarrollo (dev)](https://github.com/swcraftersclm/katangapp-frontend)`

Puedes ver [un ejemplo](https://github.com/swcraftersclm/katangapp-frontend/pull/90).

Deberías poner como revisores al menos a dos miembros del grupo core contributors `javierlopezdeancos` ó `mdelapenya` 

Después de esperar a que el sistema de el visto bueno de la pull request, los revisores empezarán el proceso de revisión
de código.

Los revisores pueden pedir cambios en el código explicando y argumentando la necesidad de esos cambios. Una vez resueltos
y satisfechos, el código se mezclará a la rama dev pudiendo estar disponible en producción en la siguiente release.

