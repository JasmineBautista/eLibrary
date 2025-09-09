import { NavbarComponent } from "./components/navbar/navbar";

const myNavbar = new NavbarComponent("main-navbar");

myNavbar.render();

const button = document.getElementById("testButton") as HTMLButtonElement;
const message = document.getElementById("testMessage") as HTMLElement;

if (button && message) {
  button.addEventListener("click", (): void => {
    message.textContent = "THIS IS A MESSAGE VIEW ME";
  });
}
