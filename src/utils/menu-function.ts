export function setupMenuToggle(
  menuToggle: HTMLElement | null,
  nav: HTMLElement | null,
  toggleClass: string = "-translate-x-full",
) {
  menuToggle?.addEventListener("change", () => {
    nav?.classList.toggle(toggleClass);
  });
}
