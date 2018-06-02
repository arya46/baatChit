// export const production = true; // set it to true when deploy to the server

// const domain = production ? 'pacific-citadel-79750.herokuapp.com' : '127.0.0.1:3001'; // if you have domain pointed to digitalOcean Cloud server let use your domain.eg: tabvn.com
const domain = '127.0.0.1:3001'; // if you have domain pointed to digitalOcean Cloud server let use your domain.eg: tabvn.com
export const websocketUrl = `ws://${domain}`
export const apiUrl = `http://${domain}`