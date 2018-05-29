#![feature(proc_macro, wasm_custom_section, wasm_import_module)]
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn rust_fib(n: i32) -> i32 {
    if n <= 2 {
        1
    } else {
        rust_fib(n - 1) + rust_fib(n - 2)
    }
}
