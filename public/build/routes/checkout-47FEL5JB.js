import {
  global_default
} from "/build/_shared/chunk-WQPUEGAF.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Form,
  useSearchParams
} from "/build/_shared/chunk-5KBUJCKB.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-MHV4OBJR.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/checkout.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\checkout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\checkout.jsx"
  );
}
function Checkout() {
  _s();
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("name");
  const productPrice = searchParams.get("price");
  const [customerDetails, setCustomerDetails] = (0, import_react2.useState)({
    name: "",
    email: "",
    address: ""
  });
  const handleChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value
    });
  };
  const subtotal = parseFloat(productPrice);
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;
  if (!productName || !productPrice) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Error: No product selected!" }, void 0, false, {
        fileName: "app/routes/checkout.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/cart", children: "Return to Cart" }, void 0, false, {
        fileName: "app/routes/checkout.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.jsx",
      lineNumber: 54,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Checkout" }, void 0, false, {
      fileName: "app/routes/checkout.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Customer Details" }, void 0, false, {
      fileName: "app/routes/checkout.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/checkout", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Name:" }, void 0, false, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", value: customerDetails.name, onChange: handleChange, required: true }, void 0, false, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Email:" }, void 0, false, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", value: customerDetails.email, onChange: handleChange, required: true }, void 0, false, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Address:" }, void 0, false, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "address", value: customerDetails.address, onChange: handleChange, required: true }, void 0, false, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Order Summary" }, void 0, false, {
        fileName: "app/routes/checkout.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Product" }, void 0, false, {
            fileName: "app/routes/checkout.jsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Price" }, void 0, false, {
            fileName: "app/routes/checkout.jsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Quantity" }, void 0, false, {
            fileName: "app/routes/checkout.jsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Total" }, void 0, false, {
            fileName: "app/routes/checkout.jsx",
            lineNumber: 87,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 83,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: productName }, void 0, false, {
            fileName: "app/routes/checkout.jsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
            "$",
            subtotal.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.jsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "1" }, void 0, false, {
            fileName: "app/routes/checkout.jsx",
            lineNumber: 94,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
            "$",
            subtotal.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.jsx",
            lineNumber: 95,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 91,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Subtotal: $",
          subtotal.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "GST (18%): $",
          gst.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Grand Total: $",
          grandTotal.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Complete Order" }, void 0, false, {
        fileName: "app/routes/checkout.jsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/checkout.jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(Checkout, "pyFRli7BMfZZZoPiISnduXTQJPk=", false, function() {
  return [useSearchParams];
});
_c = Checkout;
function links() {
  return [{
    rel: "stylesheet",
    href: global_default
  }];
}
var _c;
$RefreshReg$(_c, "Checkout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Checkout as default,
  links
};
//# sourceMappingURL=/build/routes/checkout-47FEL5JB.js.map
