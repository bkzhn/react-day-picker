/**
 * The default formatter for the Year caption.
 *
 * @group Formatters
 */
export function formatYearDropdown(year: number): string {
  return year.toString();
}

/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */
export const formatYearCaption = formatYearDropdown;
