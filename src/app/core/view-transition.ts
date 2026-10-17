/**
 * Runs a DOM update inside a View Transition when the browser supports it,
 * so theme and language switches cross-fade instead of snapping.
 */
export function withViewTransition(update: () => void): void {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('startViewTransition' in document) || reduceMotion) {
    update();
    return;
  }

  const transition = document.startViewTransition(update);
  // A second switch during the animation skips this one; that is expected, not an error.
  transition.ready.catch(() => {});
}
