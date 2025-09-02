// This is my TypeScript file.


const button = document.getElementById("testButton") as HTMLButtonElement;
const message = document.getElementById("testMessage") as HTMLElement;

if (button && message) {
  button.addEventListener("click", (): void => {
    message.textContent = "THIS IS A MESSAGE VIEW ME";
  });
}
