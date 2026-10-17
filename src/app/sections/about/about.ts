import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';
import { profile } from '../../data/content';
import { ui } from '../../data/ui';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly t = inject(I18n).t;
  protected readonly ui = ui;
  protected readonly profile = profile;
  protected readonly lead = ui.about.lead(profile.experienceYears);
}
