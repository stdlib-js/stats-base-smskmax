<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# smskmax

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the maximum value of a single-precision floating-point strided array according to a mask.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import smskmax from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-smskmax@deno/mod.js';
```

#### smskmax( N, x, strideX, mask, strideMask )

Computes the maximum value of a single-precision floating-point strided array according to a mask.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
var mask = new Uint8Array( [ 0, 0, 1, 0 ] );

var v = smskmax( x.length, x, 1, mask, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **mask**: mask [`Uint8Array`][@stdlib/array/uint8]. If a `mask` array element is `0`, the corresponding element in `x` is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in `x` is considered invalid/missing and **excluded** from computation.
-   **strideMask**: stride length for `mask`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the maximum value of every other element in `x`,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x = new Float32Array( [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, 5.0, 6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );

var v = smskmax( 4, x, 2, mask, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce offsets, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x0 = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var mask0 = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = smskmax( 4, x1, 2, mask1, 2 );
// returns 4.0
```

#### smskmax.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask )

Computes the maximum value of a single-precision floating-point strided array according to a mask and using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
var mask = new Uint8Array( [ 0, 0, 1, 0 ] );

var v = smskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetMask**: starting index for `mask`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on a starting indices. For example, to calculate the maximum value for every other element in `x` starting from the second element

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );

var v = smskmax.ndarray( 4, x, 2, 1, mask, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@deno/mod.js';
import smskmax from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-smskmax@deno/mod.js';

var uniformOptions = {
    'dtype': 'float32'
};
var bernoulliOptions = {
    'dtype': 'uint8'
};

var x = uniform( 10, -50.0, 50.0, uniformOptions );
var mask = bernoulli( x.length, 0.2, bernoulliOptions );
console.log( x );
console.log( mask );

var v = smskmax( x.length, x, 1, mask, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/smskmax.h"
```

#### stdlib_strided_smskmax( N, \*X, strideX, \*Mask, strideMask )

Computes the maximum value of a single-precision floating-point strided array according to a mask.

```c
#include <stdint.h>

const float x[] = { 1.0f, -2.0f, 2.0f };
const uint8_t mask[] = { 0, 1, 0 };

float v = stdlib_strided_smskmax( 3, x, 1, mask, 1 );
// returns 2.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Mask**: `[in] uint8_t*` mask array. If a `Mask` array element is `0`, the corresponding element in `X` is considered valid and included in computation. If a `Mask` array element is `1`, the corresponding element in `X` is considered invalid/missing and excluded from computation.
-   **strideMask**: `[in] CBLAS_INT` stride length for `Mask`.

```c
float stdlib_strided_smskmax( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const uint8_t *Mask, const CBLAS_INT strideMask );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_smskmax_ndarray( N, \*X, strideX, offsetX, \*Mask, strideMask, offsetMask )

Computes the maximum value of a single-precision floating-point strided array according to a mask and using alternative indexing semantics.

```c
#include <stdint.h>

const float x[] = { 1.0f, -2.0f, 2.0f };
const uint8_t mask[] = { 0, 1, 0 };

float v = stdlib_strided_smskmax( 3, x, 1, 0, mask, 1, 0 );
// returns 2.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Mask**: `[in] uint8_t*` mask array. If a `Mask` array element is `0`, the corresponding element in `X` is considered valid and included in computation. If a `Mask` array element is `1`, the corresponding element in `X` is considered invalid/missing and excluded from computation.
-   **strideMask**: `[in] CBLAS_INT` stride length for `Mask`.
-   **offsetMask**: `[in] CBLAS_INT` starting index for `Mask`.

```c
float stdlib_strided_smskmax_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const uint8_t *Mask, const CBLAS_INT strideMask, const CBLAS_INT offsetMask );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/smskmax.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f, 9.0f, 10.0f };

    // Create a mask array:
    const uint8_t mask[] = { 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 };

    // Specify the number of elements:
    const int N = 5;

    // Specify the stride lengths:
    const int strideX = 2;
    const int strideMask = 2;

    // Compute the maximum value:
    float v = stdlib_strided_smskmax( N, x, strideX, mask, strideMask );

    // Print the result:
    printf( "max: %f\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/dmskmax`][@stdlib/stats/base/dmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats-base/mskmax`][@stdlib/stats/base/mskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats-base/smax`][@stdlib/stats/base/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/smskmin`][@stdlib/stats/base/smskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats-base/snanmax`][@stdlib/stats/base/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/snanmskmax`][@stdlib/stats/base/snanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-smskmax.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-smskmax

[test-image]: https://github.com/stdlib-js/stats-base-smskmax/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-smskmax/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-smskmax/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-smskmax?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-smskmax.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-smskmax/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-smskmax/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-smskmax/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-smskmax/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-smskmax/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-smskmax/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-smskmax/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-smskmax/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-smskmax/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/deno

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dmskmax]: https://github.com/stdlib-js/stats-base-dmskmax/tree/deno

[@stdlib/stats/base/mskmax]: https://github.com/stdlib-js/stats-base-mskmax/tree/deno

[@stdlib/stats/base/smax]: https://github.com/stdlib-js/stats-base-smax/tree/deno

[@stdlib/stats/base/smskmin]: https://github.com/stdlib-js/stats-base-smskmin/tree/deno

[@stdlib/stats/base/snanmax]: https://github.com/stdlib-js/stats-base-snanmax/tree/deno

[@stdlib/stats/base/snanmskmax]: https://github.com/stdlib-js/stats-base-snanmskmax/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
