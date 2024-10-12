import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
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

// app/routes/success.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\success.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\success.jsx"
  );
  import.meta.hot.lastModified = "1726941509565.0173";
}
function Success() {
  _s();
  const [searchParams] = useSearchParams();
  const customerName = searchParams.get("name");
  const customerEmail = searchParams.get("email");
  const customerAddress = searchParams.get("address");
  const productName = searchParams.get("productName");
  const productPrice = searchParams.get("subtotal");
  const gst = searchParams.get("gst");
  const grandTotal = searchParams.get("grandTotal");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "invoice-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
        .invoice-container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1, h2 {
          text-align: center;
          color: #333;
        }

        .customer-details, .order-summary {
          margin: 20px 0;
        }

        .invoice-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .invoice-table th, .invoice-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        .invoice-table th {
          background-color: #f2f2f2;
        }

        .summary {
          font-weight: bold;
          text-align: right;
        }

        .summary p {
          margin: 5px 0;
        }
      ` }, void 0, false, {
      fileName: "app/routes/success.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Order Successful!" }, void 0, false, {
      fileName: "app/routes/success.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Urban Outfitters" }, void 0, false, {
      fileName: "app/routes/success.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("center", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Invoice" }, void 0, false, {
      fileName: "app/routes/success.jsx",
      lineNumber: 84,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/success.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "customer-details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Customer Details" }, void 0, false, {
        fileName: "app/routes/success.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Name:" }, void 0, false, {
          fileName: "app/routes/success.jsx",
          lineNumber: 88,
          columnNumber: 12
        }, this),
        " ",
        customerName
      ] }, void 0, true, {
        fileName: "app/routes/success.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Email:" }, void 0, false, {
          fileName: "app/routes/success.jsx",
          lineNumber: 89,
          columnNumber: 12
        }, this),
        " ",
        customerEmail
      ] }, void 0, true, {
        fileName: "app/routes/success.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Address:" }, void 0, false, {
          fileName: "app/routes/success.jsx",
          lineNumber: 90,
          columnNumber: 12
        }, this),
        " ",
        customerAddress
      ] }, void 0, true, {
        fileName: "app/routes/success.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/success.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-summary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Order Summary" }, void 0, false, {
        fileName: "app/routes/success.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "invoice-table", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Product" }, void 0, false, {
            fileName: "app/routes/success.jsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Price" }, void 0, false, {
            fileName: "app/routes/success.jsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Quantity" }, void 0, false, {
            fileName: "app/routes/success.jsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Total" }, void 0, false, {
            fileName: "app/routes/success.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/success.jsx",
          lineNumber: 97,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/success.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: productName }, void 0, false, {
            fileName: "app/routes/success.jsx",
            lineNumber: 106,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
            "$",
            parseFloat(productPrice).toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/success.jsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "1" }, void 0, false, {
            fileName: "app/routes/success.jsx",
            lineNumber: 108,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
            "$",
            parseFloat(productPrice).toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/success.jsx",
            lineNumber: 109,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/success.jsx",
          lineNumber: 105,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/success.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/success.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Subtotal:" }, void 0, false, {
            fileName: "app/routes/success.jsx",
            lineNumber: 115,
            columnNumber: 14
          }, this),
          " $",
          parseFloat(productPrice).toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/success.jsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "GST (18%):" }, void 0, false, {
            fileName: "app/routes/success.jsx",
            lineNumber: 116,
            columnNumber: 14
          }, this),
          " $",
          parseFloat(gst).toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/success.jsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Grand Total:" }, void 0, false, {
            fileName: "app/routes/success.jsx",
            lineNumber: 117,
            columnNumber: 14
          }, this),
          " $",
          parseFloat(grandTotal).toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/success.jsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/success.jsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/success.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/success.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(Success, "HWxNQEGJGSlsPJ3ubBB3081mtng=", false, function() {
  return [useSearchParams];
});
_c = Success;
var _c;
$RefreshReg$(_c, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Success as default
};
//# sourceMappingURL=/build/routes/success-Z23ITEP4.js.map
