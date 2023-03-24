# Chatowl

## Índice


* [1. Resumen del proyecto](#1-resumen)
* [2. Desarrollo del proyecto](#3-requerimientos-del-cliente)
* [3. Prototipo de alta fidelidad](#4-prototipo-de-alta-fidelidad)
* [4. Resultado final](#5-resultado-final)


***

## 1. Resumen

Este proyecto es una interfaz web dinámica que te permite enviar mensajes en tiempo real, ambientado para usuarios que les gusta interactuar con su perfil,
compartir mensajes con todas las personas de la red y enviar emojis.

### 2. Requerimientos del cliente

Esta es la información que tenemos del cliente:

Queremos una aplicación que sea escalable, permite a los usuarios  enviar mensajes entre sí.
Complementando las conversaciones regulares,que permita a los usuarios, interacciones individuales como en conversaciones de grupo.
La aplicación tiene soporte integrado para SMS y que son iconos redondos de fotos de perfil que aparecen en la pantalla
independientemente de qué aplicación esté abierta, mientras que ambas aplicaciones admiten varias cuentas,
conversaciones con cifrado opcional extremo a extremo y reproducción.

## Planeamiento


### Definición del producto

El [_Product Owner_](https://youtu.be/r2hU7MVIzxs) nos
presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta
hoy.

***

#### [Historia de usuario 1] Usuario debe iniciar sesión

Yo como usuario de Chatowl
Quiero iniciar sesión
Para conversar con las personas conectadas


##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Que exista un registro ( nombre , email , password )
* El correo electrónico de usuario no se debe repetir.
* Que exista un login ( email , password )
* Que tenga un status ( activo e inactivo )
* Que exista una vista (canal de general) para conversar con las personas conectadas
* Que al ingresar a la app  sea visible solo los usuarios conectados para el resto de usuarios.


##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Crear canales

Yo como desarrolladora full-stack
Quiero crear un canal sobre un tema de mi gusto
Para comunicarme solo con las personas con mis mismos intereses

##### Criterios de aceptación


* Que el usuario pueda crear canales.
* Que otros participantes puedan ver los canales.
* Puede editar el nombre de los canales.
* El usuario que creo el canal pueda eliminar el canal.
* Que el usuario envíe mensajes en el nuevo canal.
* Que otros usuarios puedan unirse al nuevo canal.
* Si el usuario cierra sesión el canal permanece en la aplicación.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Compartir mensajes

Yo como usuario de Chatowl
Quiero enviar un mensaje a todas las personas conectadas
Para compartir intereses similares


##### Criterios de aceptación


* Que el usuario pueda enviar mensajes al canal principal.
* Que otros participantes del canal puedan leer los mensajes.
* Los mensajes solo permanecen cuando el usuario está activo en los canales.
* Los mensajes de los otros canales no se deben ver en el chat general.
* El nombre del usuario saldrá al lado del mensaje que envíe.


##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Edición de perfil

Yo como usuario de Chatowl
Quiero agregar una foto a mi perfil
Para que los demas usuarios lo vean

##### Criterios de aceptación

* El usuario puede agregar una foto a su perfil.
* El usuario puede cambiar de nombre.
* El usuario puede cambiar de foto de perfil.
* En tiempo real los usuarios ven el cambio de perfil de dicho usuario.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***
#### [Historia de usuario 5] Mensajes individuales

Yo como usuario de Chatowl
Quiero enviar mensajes a un usuario específico
Para compartir intereses

##### Criterios de aceptación

* Que el usuario pueda enviar mensajes a un solo usuario.
* Los mensajes son permanentes.
* Puede compartir emojis en los mensajes.
* El nombre del usuario saldrá al lado del mensaje que envíe.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 6] Cerrar sesión

Yo como usuario de Chatowl
Quiero cerrar sesión
Para poder salir de la aplicación


##### Criterios de aceptación

* Que el status del usuario cambie de activo a inactivo cuando cierra sesión.
* Que el usuario desaparece de la lista de los conectados.


##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***
##  3. 🎞Prototipo de alta fidelidad
Se desarrolló un prototipo.
Puede visualizar el proyecto en el [siguiente enlace](https://www.figma.com/file/2YRsiKBWbBJ0KuzJ8xVoFy/chat-app).

## 4. 📲Resultado final
### 4.1 Vista Celular
<img src="https://github.com/lislopezaliaga/chat-owl-client/blob/main/src/images/movil.gif" width="300px">

### 4.2 Vista Desktop
<img src="https://github.com/lislopezaliaga/chat-owl-client/blob/main/src/images/desktop.gif" width="850px">

## 5. 👩🏻‍💻Tecnologías utilizadas:
* React
* JavaScript
* HTML
* CSS / SCSS
* Postgresql
* Express
* Socket.io
* Render
* Cloudinary
* Git and GitHub
* ESLint
