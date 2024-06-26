import type { format } from "date-fns/format";

/**
 * Return the default ARIA label for the years dropdown.
 *
 * @group Labels
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function labelYearDropdown(options?: Parameters<typeof format>[2]) {
  return "Year: ";
}
