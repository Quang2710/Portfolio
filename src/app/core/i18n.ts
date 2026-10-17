import { ApplicationRef, Injectable, inject, signal } from '@angular/core';
import { Lang, Text } from '../data/types';
import { withViewTransition } from './view-transition';

const STORAGE_KEY = 'lang';

const TITLES: Text = {
  en: 'Vu Ngoc Quang · Frontend Developer',
  vi: 'Vũ Ngọc Quang · Frontend Developer',
};

@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly appRef = inject(ApplicationRef);

  /** The inline script in index.html has already picked the initial language. */
  readonly lang = signal<Lang>(document.documentElement.lang === 'vi' ? 'vi' : 'en');

  readonly t = (text: Text): string => text[this.lang()];

  constructor() {
    this.syncDocument(this.lang());
  }

  use(next: Lang): void {
    if (next === this.lang()) return;

    withViewTransition(() => {
      this.lang.set(next);
      this.syncDocument(next);
      this.appRef.tick();
    });

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  private syncDocument(lang: Lang): void {
    document.documentElement.lang = lang;
    document.title = TITLES[lang];
  }
}
