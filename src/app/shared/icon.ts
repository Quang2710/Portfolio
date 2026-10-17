import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName = 'arrow-right' | 'arrow-up-right' | 'arrow-up' | 'download' | 'sun' | 'moon';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  template: `
    @switch (name()) {
      @case ('arrow-right') {
        <svg viewBox="0 0 16 16" [attr.width]="size()" [attr.height]="size()">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      }
      @case ('arrow-up-right') {
        <svg viewBox="0 0 16 16" [attr.width]="size()" [attr.height]="size()">
          <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
        </svg>
      }
      @case ('arrow-up') {
        <svg viewBox="0 0 16 16" [attr.width]="size()" [attr.height]="size()">
          <path d="M8 13V3M4 7l4-4 4 4" />
        </svg>
      }
      @case ('download') {
        <svg viewBox="0 0 16 16" [attr.width]="size()" [attr.height]="size()">
          <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" />
        </svg>
      }
      @case ('sun') {
        <svg viewBox="0 0 16 16" [attr.width]="size()" [attr.height]="size()">
          <circle cx="8" cy="8" r="2.75" />
          <path
            d="M8 1.5v1.25M8 13.25v1.25M1.5 8h1.25M13.25 8h1.25M3.4 3.4l.9.9M11.7 11.7l.9.9M3.4 12.6l.9-.9M11.7 4.3l.9-.9"
          />
        </svg>
      }
      @case ('moon') {
        <svg viewBox="0 0 16 16" [attr.width]="size()" [attr.height]="size()">
          <path d="M13.25 9.6A5.5 5.5 0 1 1 6.4 2.75a4.5 4.5 0 0 0 6.85 6.85Z" />
        </svg>
      }
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
    }
    svg {
      fill: none;
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(16);
}
