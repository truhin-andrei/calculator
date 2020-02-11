async function carBase() {
  const urlBase =
    'https://raw.githubusercontent.com/truhin-andrei/fake_api/master/mockCarBase.json';
  const response = await fetch(urlBase);
  const data = await response.json();

  return data;
}
export default carBase;

// export default class CarBase {
//   constructor() {
//     this.data = {};
//     this.urlBase =
//       'https://raw.githubusercontent.com/truhin-andrei/fake_api/master/mockCarBase.json';
//   }

//   getData() {
//     return fetch(this.urlBase).then(response => response.json());

//     // const data = await response.json();
//   }

//   async getAsyncData() {
//     const response = await fetch(this.urlBase);
//     const data = await response.json();

//     return data;
//   }
// }
