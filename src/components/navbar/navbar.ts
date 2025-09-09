import navbarHtml from "./navbar.html";

export class NavbarComponent {
  private targetElementId: string;

  constructor(targetId: string) {
    this.targetElementId = targetId;
  }

  render() {
    const targetElement = document.getElementById(this.targetElementId);
    if (targetElement) {
      targetElement.innerHTML = navbarHtml;
    } else {
      console.error(
        `Target element with ID "${this.targetElementId}" not found.`
      );
    }
  }
}
