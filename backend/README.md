<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Gym Management Backend

Backend del proyecto **Gym Management**, construido con **NestJS**, **Prisma** y **PostgreSQL**.

Este backend expone una API para autenticación y gestión de usuarios del sistema, permitiendo el registro e inicio de sesión de los diferentes tipos de usuario de la plataforma:

- `GYM_OWNER`
- `TRAINER`
- `CLIENT`

También deja preparada la base para continuar con módulos como:

- gimnasios
- usuarios
- ejercicios
- rutinas
- asignaciones
- progreso de entrenamiento

---

# Tabla de contenido

- [Tecnologías usadas](#tecnologías-usadas)
- [Arquitectura del proyecto](#arquitectura-del-proyecto)
- [Módulo implementado](#módulo-implementado)
- [Roles del sistema](#roles-del-sistema)
- [Modelo de base de datos relacionado con auth](#modelo-de-base-de-datos-relacionado-con-auth)
- [Flujo de registro por tipo de usuario](#flujo-de-registro-por-tipo-de-usuario)
- [Endpoints disponibles](#endpoints-disponibles)
- [Configuración del entorno](#configuración-del-entorno)
- [Instalación de dependencias](#instalación-de-dependencias)
- [Comandos importantes](#comandos-importantes)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Detalle de la arquitectura por capas](#detalle-de-la-arquitectura-por-capas)
- [Seguridad implementada](#seguridad-implementada)
- [Cómo probar el módulo](#cómo-probar-el-módulo)
- [Pruebas recomendadas](#pruebas-recomendadas)
- [Qué validar en la base de datos](#qué-validar-en-la-base-de-datos)
- [Problemas comunes](#problemas-comunes)
- [Siguientes pasos recomendados](#siguientes-pasos-recomendados)

---

# Tecnologías usadas

Este backend usa:

- **NestJS** para la construcción del servidor y la API
- **Prisma ORM** para acceso a base de datos
- **PostgreSQL** como motor de base de datos
- **JWT** para autenticación
- **Passport** para estrategia de autenticación
- **bcrypt** para hashing de contraseñas
- **class-validator** y **class-transformer** para validación de DTOs
- **Helmet** para cabeceras de seguridad
- **Swagger** para documentación de endpoints

---

# Arquitectura del proyecto

El backend se está organizando usando una arquitectura por capas dentro de cada módulo:

- **domain**
- **application**
- **infrastructure**

Esto permite separar responsabilidades y dejar el proyecto listo para crecer de manera ordenada.

## Capas

### Domain
Contiene la lógica de dominio pura:
- errores del dominio
- entidades
- reglas del negocio independientes de frameworks

### Application
Contiene los casos de uso del sistema:
- `register`
- `login`
- `get me`

También contiene:
- DTOs
- puertos (contratos o interfaces abstractas)

### Infrastructure
Contiene las implementaciones técnicas:
- controllers de NestJS
- Prisma repositories
- strategy JWT
- guards
- servicios de bcrypt y JWT
- module de NestJS

---

# Módulo implementado

Actualmente el módulo implementado es:

## Auth

Este módulo permite:

- registrar usuarios
- iniciar sesión
- obtener el usuario autenticado actual
- generar tokens JWT
- proteger endpoints con autenticación

---

# Roles del sistema

Los roles actualmente manejados son:

## `GYM_OWNER`
Representa al dueño o administrador principal del gimnasio.

Puede usarse luego para:
- administrar el gimnasio
- crear entrenadores
- crear clientes
- ver usuarios del gimnasio
- gestionar operaciones administrativas

## `TRAINER`
Representa al entrenador.

Puede usarse luego para:
- crear ejercicios
- crear rutinas
- asignar rutinas
- ver progreso de clientes

## `CLIENT`
Representa al cliente o usuario final del gimnasio.

Puede usarse luego para:
- iniciar sesión desde móvil
- ver su rutina
- registrar progreso
- consultar historial

## `PLATFORM_ADMIN`
Existe en el esquema, pero **no se permite su registro público**.

Ese rol debe crearse de forma manual o por seed, no desde el endpoint público de registro.

---

# Modelo de base de datos relacionado con auth

El sistema **no usa un `gymId` directo dentro de `User`**.

La relación entre usuarios y gimnasios está modelada de forma más robusta con estas tablas:

- `User`
- `Gym`
- `GymUser`
- `TrainerProfile`
- `ClientProfile`

## Relaciones principales

### `User`
Guarda la información base del usuario:
- email
- passwordHash
- nombre
- apellido
- role
- status
- datos personales básicos

### `Gym`
Representa un gimnasio.

Tiene un `ownerId` que apunta al usuario dueño.

### `GymUser`
Es la tabla puente entre `Gym` y `User`.

Sirve para indicar:
- a qué gimnasio pertenece un usuario
- con qué rol pertenece
- si es su relación principal

### `TrainerProfile`
Perfil específico de entrenador.

### `ClientProfile`
Perfil específico de cliente.

---

# Flujo de registro por tipo de usuario

El endpoint de registro soporta actualmente:

- `GYM_OWNER`
- `TRAINER`
- `CLIENT`

## 1. Registro de `GYM_OWNER`

Cuando se registra un `GYM_OWNER`, el sistema:

1. crea un `User`
2. crea un `Gym`
3. asigna el gimnasio al owner usando `ownerId`
4. crea un `GymUser` con rol `GYM_OWNER`

### Requiere:
- `gymName`
- `gymSlug`

## 2. Registro de `TRAINER`

Cuando se registra un `TRAINER`, el sistema:

1. crea un `User`
2. crea un `GymUser`
3. crea un `TrainerProfile`

### Requiere:
- `gymId`

## 3. Registro de `CLIENT`

Cuando se registra un `CLIENT`, el sistema:

1. crea un `User`
2. crea un `GymUser`
3. crea un `ClientProfile`

### Requiere:
- `gymId`

## 4. Registro de `PLATFORM_ADMIN`

No está permitido desde el endpoint público.

Si se intenta registrar desde el endpoint, el sistema devuelve error.

---

# Endpoints disponibles

Actualmente el backend expone estos endpoints:

## `POST /api/auth/register`
Permite registrar un usuario.

Soporta:
- `GYM_OWNER`
- `TRAINER`
- `CLIENT`

## `POST /api/auth/login`
Permite iniciar sesión con:
- email
- password

Devuelve:
- `accessToken`
- información básica del usuario

## `GET /api/auth/me`
Devuelve el usuario autenticado actual.

Requiere:
- Bearer token válido

---

# Configuración del entorno

Debes crear un archivo `.env` dentro de `backend/`.

## Ejemplo

```env
DATABASE_URL="postgresql://[NOMBRE_DE_USUARIO]:[TU_PASSWORD]@[HOST]:[PUERTO]/[NOMBRE_DB]"
JWT_SECRET="una-clave-super-segura-y-larga"
PORT=3000
