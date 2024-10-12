import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link
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

// app/routes/images/Furniture.jpg
var Furniture_default = "/build/_assets/Furniture-TMSAUZKF.jpg";

// app/routes/images/Beddings.jpg
var Beddings_default = "/build/_assets/Beddings-SLF4CXHA.jpg";

// app/routes/images/MostLiked.jpg
var MostLiked_default = "/build/_assets/MostLiked-PD2YSPKF.jpg";

// app/routes/images/WallArt.jpeg
var WallArt_default = "/build/_assets/WallArt-VMA5WFBU.jpeg";

// app/routes/images/BohemianBed.jpeg
var BohemianBed_default = "/build/_assets/BohemianBed-L5PI6XCM.jpeg";

// app/routes/images/YojiChair.jpeg
var YojiChair_default = "/build/_assets/YojiChair-XZQWNW5U.jpeg";

// app/routes/images/Nightstand.jpeg
var Nightstand_default = "/build/_assets/Nightstand-V7ADDHXL.jpeg";

// app/routes/images/VanityChair.jpeg
var VanityChair_default = "/build/_assets/VanityChair-LON5MLZO.jpeg";

// app/routes/Styles/home.css
var home_default = "/build/_assets/home-NXGBRTJQ.css";

// app/routes/_index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.jsx"
  );
}
var meta = () => {
  return [{
    title: "New Remix App"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
var products = [{
  id: 1,
  name: "Bohemian Platform Bed",
  price: 699,
  image: BohemianBed_default
}, {
  id: 2,
  name: "Yoji Chair",
  price: 549,
  image: YojiChair_default
}, {
  id: 3,
  name: "Elise Vanity And Stool Set",
  price: 649,
  image: VanityChair_default
}, {
  id: 4,
  name: "Amelia Nightstand",
  price: 279,
  image: Nightstand_default
}];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Urban Outfitters" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { class: "nav-links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/cart", children: "Go To Cart " }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { class: "category-overview", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "category", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Furniture_default, alt: "Furniture" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Furniture" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "category", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Beddings_default, alt: "Bedding" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 79,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Bedding" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "category", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: MostLiked_default, alt: "Kitchen + Bar" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Most Liked" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "category", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: WallArt_default, alt: "Wall Art" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Wall Art" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 88,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { class: "products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "product-grid", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "product", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image, alt: product.name }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 95,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: product.name }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "$",
          product.price.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 97,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { class: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/cart?name=${product.name}&price=${product.price}`, style: {
          color: "white",
          textDecoration: "none"
        }, children: "Cart" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 100,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 98,
          columnNumber: 17
        }, this)
      ] }, product.id, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 94,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_c = Index;
function links() {
  return [{
    rel: "stylesheet",
    href: home_default
  }];
}
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-JBZJMCLV.js.map
