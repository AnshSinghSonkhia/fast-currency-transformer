# fast-currency-transformer
The Fastest NPM Package to transform data from one currency to another

# Installation

```shell
npm i fast-currency-transformer
```

# Usage

- `fromCurrency` -> Takes the currency you want to convert `from`.
- `toCurrency` -> Takes the currency you want to convert `to`.
- value -> Takes the value / units of `fromCurrency`.

It will return the converted live currency value based on the real-time currency conversion data.

### Convert Currency:

```js
import { convertCurrency } from "fast-currency-transformer";

convertCurrency("fromCurrency", "toCurrency", value)  // value: The value of the currency you want to convert from.
```


### Example Use-Case:

```js
import { convertCurrency } from "fast-currency-transformer";

convertCurrency("INR", "USD", 58700)  // It will convert Rs. 58700 INR into Latest value of $ USD
```