# @daypicker/hijri

Hijri calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Umm al-Qura Hijri calendar month and year logic. It uses the Arabic Saudi Arabia locale, Arabic-Indic numerals, and right-to-left direction by default.

<a href="https://www.npmjs.com/package/@daypicker/hijri"><img src="https://img.shields.io/npm/v/%40daypicker%2Fhijri" alt="npm version"/></a> <img src="https://img.shields.io/npm/dm/%40daypicker%2Fhijri.svg" alt="npm downloads"/> <img src="https://img.shields.io/bundlephobia/minzip/%40daypicker%2Fhijri" alt="Min gzipped size"/>

## Installation

Install the React DayPicker package with the Hijri calendar addon:

```bash
npm install @daypicker/react @daypicker/hijri
```

## Usage

```tsx
import { DayPicker } from "@daypicker/hijri";
import "@daypicker/react/style.css";

export function HijriCalendar() {
  return <DayPicker mode="single" />;
}
```

## Documentation

- [Hijri calendar guide](https://daypicker.dev/localization/hijri)
- [React DayPicker docs](https://daypicker.dev)

## License

MIT. See [LICENSE](./LICENSE).
