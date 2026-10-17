import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input, numberAttribute } from '@angular/core';

let observer: IntersectionObserver | undefined;

function sharedObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries, io) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  return observer;
}

/**
 * Fades an element up the first time it scrolls into view.
 * Usage: `<div appReveal>` or `<div appReveal="120">` for a delay in ms.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay]': 'delay() + "ms"',
  },
})
export class Reveal {
  readonly delay = input(0, {
    alias: 'appReveal',
    transform: (value: unknown) => numberAttribute(value, 0),
  });

  constructor() {
    const element: HTMLElement = inject(ElementRef).nativeElement;

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        element.classList.add('is-visible');
        return;
      }
      sharedObserver().observe(element);
    });

    inject(DestroyRef).onDestroy(() => observer?.unobserve(element));
  }
}
