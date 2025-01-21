<div align="center"> <a href="https://genezio.com/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/genez-io/graphics/raw/HEAD/svg/Icon_Genezio_White.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/genez-io/graphics/raw/HEAD/svg/Icon_Genezio_Black.svg">
    <img alt="genezio logo" src="https://github.com/genez-io/graphics/raw/HEAD/svg/Icon_Genezio_Black.svg" height="100" >
  </picture>
</a>
 </div>

<div align="center">

[![Join our community](https://img.shields.io/discord/1024296197575422022?style=social&label=Join%20our%20community%20&logo=discord&labelColor=6A7EC2)](https://discord.gg/uc9H5YKjXv)
[![Follow @geneziodev](https://img.shields.io/twitter/url/https/twitter.com/geneziodev.svg?style=social&label=Follow%20%40geneziodev)](https://twitter.com/geneziodev)

</div>

# MERN Typescript Getting Started

This is a starter template for building a full-stack web application with Express Typescript and MongoDB on the backend and React
on the frontend. The template is set up to be deployed to Genezio, a platform for building and deploying full-stack web
applications.

This template includes:

- Mongoose ORM for Mongo
- A crud example with a `User` model
- A simple React frontend that uses the backend API for create a new user, view all users, edit a user and delete a user.

Routes and the logic for handling requests are defined in the `./src/routes` folder. The `./src/models` folder contains the
Mongoose models for the database.

The `./src/config.ts` file contains the configuration for the database connection.

Routes:

- `GET /users` - Get all users
- `GET /users/:id` - Get a user by id
- `POST /users` - Create a new user
- `PATCH /users/:id` - Update a user by id
- `DELETE /users/:id` - Delete a user by id

# Deploy

:rocket: You can deploy your own version of the template to Genezio with one click:

[![Deploy to Genezio](https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg)](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/mern-typescript-starter/)

## Genezio CLI Commands

Genezio also provides a CLI tool that you can use to deploy your project from your machine.
All commands are run from the root of the project, from a terminal:

| Command                  | Action                       |
|:-------------------------|:-----------------------------|
| `npm install -g genezio` | Installs genezio globally    |
| `genezio login`          | Logs in to genezio           |
| `genezio local`          | Starts a local server        |
| `genezio deploy`         | Deploys a production project |
| `genezio --help`         | Get help using genezio       |

## Learn more

To learn more about Genezio, take a look at the following resources:

- [Official genezio documentation](https://genezio.com/docs)
- [Tutorials](https://genezio.com/blog)

## Contact

If you need support, or you have any questions, please join us in our [Discord channel](https://discord.gg/uc9H5YKjXv).
We'd love to chat!

## Built With

- [Genezio](https://genezio.com/)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node.JS](https://nodejs.org/en/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)

***

<div align="center"> <a href="https://genezio.com/">
  <p>Built with Genezio with ❤️ </p>
  <img alt="genezio logo" src="https://raw.githubusercontent.com/Genez-io/graphics/main/svg/powered_by_genezio.svg" height="40"></a>
</div>
