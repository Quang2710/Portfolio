import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { I18n } from '../../core/i18n';
import { profile } from '../../data/content';
import { ui } from '../../data/ui';
import { Icon } from '../../shared/icon';

const hanoiClock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Ho_Chi_Minh',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

@Component({
  selector: 'app-footer',
  imports: [Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly t = inject(I18n).t;
  protected readonly ui = ui;
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();
  protected readonly time = signal(hanoiClock.format(new Date()));

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const timer = setInterval(() => this.time.set(hanoiClock.format(new Date())), 15_000);
      destroyRef.onDestroy(() => clearInterval(timer));
    });
  }
}
