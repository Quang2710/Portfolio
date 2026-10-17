import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { I18n } from '../../core/i18n';
import { experience } from '../../data/content';
import { formatPeriod } from '../../data/format';
import { Company, WorkProject, YearMonth } from '../../data/types';
import { ui } from '../../data/ui';
import { Reveal } from '../../shared/reveal';

const latestProject = experience.flatMap((company) => company.projects)[0];

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  private readonly i18n = inject(I18n);
  protected readonly t = this.i18n.t;
  protected readonly ui = ui;
  protected readonly companies = experience;

  /** The most recent project starts expanded, the rest are collapsed. */
  private readonly openIds = signal<ReadonlySet<string>>(
    new Set(latestProject ? [latestProject.id] : []),
  );

  protected isOpen(id: string): boolean {
    return this.openIds().has(id);
  }

  protected toggle(id: string): void {
    this.openIds.update((ids) => {
      const next = new Set(ids);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  }

  protected period(from: YearMonth, to: YearMonth | null): string {
    return formatPeriod(from, to, this.i18n.lang());
  }

  protected spansWholeTenure(company: Company, project: WorkProject): boolean {
    return company.from === project.from && company.to === project.to;
  }
}
