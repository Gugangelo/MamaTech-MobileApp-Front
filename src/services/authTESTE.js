export default function TESTEDEAUTH() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'abcdefghijklmnopqrstuvwxyz0123456789',
        user: {
          name: 'Gustavo',
          email: 'gustavoangelo06@hotmail.com',
        },
      });
    }, 2000)
  })
}
