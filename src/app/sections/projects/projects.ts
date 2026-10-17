import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';
import { profile, sideProjects } from '../../data/content';
import { ui } from '../../data/ui';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-projects',
  imports: [Icon, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly t = inject(I18n).t;
  protected readonly ui = ui;
  protected readonly profile = profile;
  protected readonly projects = sideProjects;
}
