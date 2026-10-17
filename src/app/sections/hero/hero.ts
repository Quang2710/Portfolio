import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';
import { experience, profile } from '../../data/content';
import { ui } from '../../data/ui';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-hero',
  imports: [Icon, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly t = inject(I18n).t;
  protected readonly ui = ui;
  protected readonly profile = profile;
  protected readonly years = profile.experienceYears;
  protected readonly current = experience.find((company) => !company.to);
  protected readonly currentRole = this.current?.role ?? this.current?.projects[0]?.role;
}
