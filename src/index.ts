const wasmModule = import("../wasm_brown_bag");

function jsFib(n: number): number {
  if (n <= 2) {
    return 1;
  }

  return jsFib(n - 1) + jsFib(n - 2);
}

wasmModule.then(async rustLib => {
  const iterations = 42;

  console.log(`Calculating Fib(${iterations}) recursively`);

  const t0 = performance.now();
  console.log(rustLib.rust_fib(iterations));
  console.log(`rust::wasm took: ${performance.now() - t0}ms`);

  const t1 = performance.now();
  console.log(jsFib(iterations));
  console.log(`ts::js took: ${performance.now() - t1}ms`);
});
