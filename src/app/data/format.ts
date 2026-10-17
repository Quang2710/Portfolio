import { ui } from './ui';
import { Lang, YearMonth } from './types';

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parse(value: YearMonth): [year: number, month: number] {
  const [year, month] = value.split('-').map(Number);
  return [year, month];
}

export function formatMonth(value: YearMonth, lang: Lang): string {
  const [year, month] = parse(value);
  return lang === 'en' ? `${MONTHS_EN[month - 1]} ${year}` : `${String(month).padStart(2, '0')}/${year}`;
}

export function formatPeriod(from: YearMonth, to: YearMonth | null, lang: Lang): string {
  const end = to ? formatMonth(to, lang) : ui.experience.present[lang];
  return `${formatMonth(from, lang)} – ${end}`;
}

