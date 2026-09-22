import { getSeting,getPages } from "./api";

const app =document.querySelector('#app')

async function start() {
  // const settings = await getSeting()
  condt [settings, page] = await Promise.all([
    getSeting(),
    getPages()
  ])
  console.log(settings);
  console.log(page);
  
}
start()

