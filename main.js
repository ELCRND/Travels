import { About } from "./components/About";
import { Container } from "./components/Container";
import { StartInfo } from "./components/StartInfo";
import "./css/style.css";

// function Main() {
//   const startInfo = StartInfo();
//   const firstScreen = Container(startInfo);
//   return firstScreen;
// }

document.querySelector("#app").innerHTML = `
  <main class="font-Nunito-4">
    ${StartInfo()}
    ${About()}
  </main>
`;
