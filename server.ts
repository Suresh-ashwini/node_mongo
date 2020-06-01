import App from './app/app';
const PORT = process.env.LISTEN_PORT;

const app = new App().app;

const server = app.listen(PORT, () => {
    console.log('Connected to '+ PORT);
});

export default server;
