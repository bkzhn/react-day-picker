# @daypicker/buddhist

Buddhist calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Buddhist Era years. The calendar keeps Gregorian months and weeks, displays years as BE (`CE + 543`), and uses Thai digits by default.

<a href="https://www.npmjs.com/package/@daypicker/buddhist"><img src="https://img.shields.io/npm/v/%40daypicker%2Fbuddhist" alt="npm version"/></a> <img src="https://img.shields.io/npm/dm/%40daypicker%2Fbuddhist.svg" alt="npm downloads"/> <img src="https://img.shields.io/bundlephobia/minzip/%40daypicker%2Fbuddhist" alt="Min gzipped size"/>

## Installation

Install the React DayPicker package with the Buddhist calendar addon:

```bash
npm install @daypicker/react @daypicker/buddhist
```

## Usage

```tsx
import { DayPicker } from "@daypicker/buddhist";
import "@daypicker/react/style.css";

export function BuddhistCalendar() {
  return <DayPicker mode="single" />;
}
```

## Documentation

- [Buddhist calendar guide](https://daypicker.dev/localization/buddhist)
- [React DayPicker docs](https://daypicker.dev)

## License

MIT. See [LICENSE](./LICENSE).
