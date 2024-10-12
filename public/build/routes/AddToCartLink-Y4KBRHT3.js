import {
  global_default
} from "/build/_shared/chunk-WQPUEGAF.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link,
  useSearchParams
} from "/build/_shared/chunk-5KBUJCKB.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-MHV4OBJR.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/AddToCartLink.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\AddToCartLink.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\AddToCartLink.jsx"
  );
}
function Cart() {
  _s();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  if (!name || !price) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Cart is empty!" }, void 0, false, {
        fileName: "app/routes/AddToCartLink.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Return to Home" }, void 0, false, {
        fileName: "app/routes/AddToCartLink.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/AddToCartLink.jsx",
      lineNumber: 29,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Your Cart" }, void 0, false, {
      fileName: "app/routes/AddToCartLink.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Product" }, void 0, false, {
          fileName: "app/routes/AddToCartLink.jsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Price" }, void 0, false, {
          fileName: "app/routes/AddToCartLink.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Quantity" }, void 0, false, {
          fileName: "app/routes/AddToCartLink.jsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Total" }, void 0, false, {
          fileName: "app/routes/AddToCartLink.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/AddToCartLink.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/AddToCartLink.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: name }, void 0, false, {
          fileName: "app/routes/AddToCartLink.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
          "$",
          parseFloat(price).toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/AddToCartLink.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "1" }, void 0, false, {
          fileName: "app/routes/AddToCartLink.jsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
          "$",
          parseFloat(price).toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/AddToCartLink.jsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/AddToCartLink.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/AddToCartLink.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/AddToCartLink.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/checkout?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`, style: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "black",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
      textAlign: "center",
      fontWeight: "bold",
      marginTop: "10px",
      transition: "background-color 0.3s"
    }, onMouseEnter: (e) => {
      e.currentTarget.style.backgroundColor = "darkgray";
    }, onMouseLeave: (e) => {
      e.currentTarget.style.backgroundColor = "black";
    }, children: "Proceed to Checkout" }, void 0, false, {
      fileName: "app/routes/AddToCartLink.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/_index.jsx?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`, style: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "black",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
      textAlign: "center",
      fontWeight: "bold",
      marginTop: "10px",
      transition: "background-color 0.3s"
    }, onMouseEnter: (e) => {
      e.currentTarget.style.backgroundColor = "darkgray";
    }, onMouseLeave: (e) => {
      e.currentTarget.style.backgroundColor = "black";
    }, children: "Add" }, void 0, false, {
      fileName: "app/routes/AddToCartLink.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/AddToCartLink.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(Cart, "HWxNQEGJGSlsPJ3ubBB3081mtng=", false, function() {
  return [useSearchParams];
});
_c = Cart;
function links() {
  return [{
    rel: "stylesheet",
    href: global_default
  }];
}
var _c;
$RefreshReg$(_c, "Cart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Cart as default,
  links
};
//# sourceMappingURL=/build/routes/AddToCartLink-Y4KBRHT3.js.map
