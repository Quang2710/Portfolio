import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';
import { I18n } from '../../core/i18n';
import { ThemeService } from '../../core/theme';
import { profile } from '../../data/content';
import { ui } from '../../data/ui';
import { Icon } from '../../shared/icon';

const HIDE_AFTER = 160;

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeMenu()',
    '(focusin)': 'hidden.set(false)',
  },
})
export class Header {
  protected readonly i18n = inject(I18n);
  protected readonly theme = inject(ThemeService);
  protected readonly t = this.i18n.t;
  protected readonly ui = ui;
  protected readonly profile = profile;

  protected readonly links = [
    { id: 'about', label: ui.nav.about },
    { id: 'experience', label: ui.nav.experience },
    { id: 'projects', label: ui.nav.projects },
    { id: 'skills', label: ui.nav.skills },
    { id: 'contact', label: ui.nav.contact },
  ];

  protected readonly scrolled = signal(false);
  protected readonly hidden = signal(false);
  protected readonly active = signal<string | null>(null);
  protected readonly menuOpen = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);

    effect(() => {
      document.documentElement.classList.toggle('no-scroll', this.menuOpen());
    });

    afterNextRender(() => {
      let lastY = window.scrollY;
      let frame = 0;

      const update = () => {
        frame = 0;
        const y = window.scrollY;
        this.scrolled.set(y > 8);

        const delta = y - lastY;
        if (Math.abs(delta) < 6) return;
        this.hidden.set(delta > 0 && y > HIDE_AFTER && !this.menuOpen());
        lastY = y;
      };
      const onScroll = () => {
        frame ||= requestAnimationFrame(update);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      update();

      const sections = this.links
        .map((link) => document.getElementById(link.id))
        .filter((section): section is HTMLElement => section !== null);

      const spy = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
            else if (this.active() === entry.target.id) this.active.set(null);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      sections.forEach((section) => spy.observe(section));

      const desktop = matchMedia('(min-width: 768px)');
      const onBreakpoint = (event: MediaQueryListEvent) => event.matches && this.closeMenu();
      desktop.addEventListener('change', onBreakpoint);

      destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        desktop.removeEventListener('change', onBreakpoint);
        spy.disconnect();
      });
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.hidden.set(false);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
