import { ApplicationRef, Injectable, inject, signal } from '@angular/core';
import { withViewTransition } from './view-transition';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const THEME_COLORS: Record<Theme, string> = { light: '#f6f4ef', dark: '#121211' };

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly appRef = inject(ApplicationRef);

  /** The inline script in index.html has already applied the initial theme. */
  readonly theme = signal<Theme>(
    document.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light',
  );

  constructor() {
    this.apply(this.theme());

    // Follow the OS setting until the visitor picks a theme themselves.
    const media = matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', (event) => {
      if (!storedTheme()) this.apply(event.matches ? 'dark' : 'light');
    });
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';

    withViewTransition(() => {
      this.apply(next);
      this.appRef.tick();
    });

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  private apply(theme: Theme): void {
    this.theme.set(theme);
    document.documentElement.dataset['theme'] = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
  }
}
