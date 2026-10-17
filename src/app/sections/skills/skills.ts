import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';
import { skills } from '../../data/content';
import { Skill } from '../../data/types';
import { ui } from '../../data/ui';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly t = inject(I18n).t;
  protected readonly ui = ui;
  protected readonly groups = skills;

  protected label(skill: Skill): string {
    return typeof skill.label === 'string' ? skill.label : this.t(skill.label);
  }
}
