function Lf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Us(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ds = { exports: {} },
  gl = {},
  Bs = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for("react.element"),
  zf = Symbol.for("react.portal"),
  Tf = Symbol.for("react.fragment"),
  If = Symbol.for("react.strict_mode"),
  Mf = Symbol.for("react.profiler"),
  Ff = Symbol.for("react.provider"),
  Uf = Symbol.for("react.context"),
  Df = Symbol.for("react.forward_ref"),
  Bf = Symbol.for("react.suspense"),
  Vf = Symbol.for("react.memo"),
  Hf = Symbol.for("react.lazy"),
  pu = Symbol.iterator;
function Qf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pu && e[pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hs = Object.assign,
  Qs = {};
function hn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qs),
    (this.updater = n || Vs);
}
hn.prototype.isReactComponent = {};
hn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
hn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ws() {}
Ws.prototype = hn.prototype;
function pi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qs),
    (this.updater = n || Vs);
}
var hi = (pi.prototype = new Ws());
hi.constructor = pi;
Hs(hi, hn.prototype);
hi.isPureReactComponent = !0;
var hu = Array.isArray,
  Ks = Object.prototype.hasOwnProperty,
  mi = { current: null },
  _s = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ks.call(t, r) && !_s.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: sr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: mi.current,
  };
}
function Wf(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr;
}
function Kf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var mu = /\/+/g;
function Dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Kf("" + e.key)
    : t.toString(36);
}
function Tr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sr:
          case zf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Dl(i, 0) : r),
      hu(l)
        ? ((n = ""),
          e != null && (n = e.replace(mu, "$&/") + "/"),
          Tr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (vi(l) &&
            (l = Wf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(mu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), hu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Dl(o, u);
      i += Tr(o, t, n, s, l);
    }
  else if (((s = Qf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Dl(o, u++)), (i += Tr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function _f(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Ir = { transition: null },
  Gf = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: mi,
  };
T.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = hn;
T.Fragment = Tf;
T.Profiler = Mf;
T.PureComponent = pi;
T.StrictMode = If;
T.Suspense = Bf;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gf;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Hs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = mi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ks.call(t, s) &&
        !_s.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Uf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ff, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = Gs;
T.createFactory = function (e) {
  var t = Gs.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: Df, render: e };
};
T.isValidElement = vi;
T.lazy = function (e) {
  return { $$typeof: Hf, _payload: { _status: -1, _result: e }, _init: _f };
};
T.memo = function (e, t) {
  return { $$typeof: Vf, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Ir.transition;
  Ir.transition = {};
  try {
    e();
  } finally {
    Ir.transition = t;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ce.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
T.useId = function () {
  return ce.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ce.current.useRef(e);
};
T.useState = function (e) {
  return ce.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ce.current.useTransition();
};
T.version = "18.2.0";
Bs.exports = T;
var S = Bs.exports;
const Zs = Us(S),
  Zf = Lf({ __proto__: null, default: Zs }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf = S,
  Xf = Symbol.for("react.element"),
  Yf = Symbol.for("react.fragment"),
  qf = Object.prototype.hasOwnProperty,
  $f = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Js(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) qf.call(t, r) && !bf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Xf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: $f.current,
  };
}
gl.Fragment = Yf;
gl.jsx = Js;
gl.jsxs = Js;
Ds.exports = gl;
var v = Ds.exports,
  po = {},
  Xs = { exports: {} },
  Se = {},
  Ys = { exports: {} },
  qs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, L) {
    var z = P.length;
    P.push(L);
    e: for (; 0 < z; ) {
      var G = (z - 1) >>> 1,
        $ = P[G];
      if (0 < l($, L)) (P[G] = L), (P[z] = $), (z = G);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0],
      z = P.pop();
    if (z !== L) {
      P[0] = z;
      e: for (var G = 0, $ = P.length, hr = $ >>> 1; G < hr; ) {
        var kt = 2 * (G + 1) - 1,
          Ul = P[kt],
          Et = kt + 1,
          mr = P[Et];
        if (0 > l(Ul, z))
          Et < $ && 0 > l(mr, Ul)
            ? ((P[G] = mr), (P[Et] = z), (G = Et))
            : ((P[G] = Ul), (P[kt] = z), (G = kt));
        else if (Et < $ && 0 > l(mr, z)) (P[G] = mr), (P[Et] = z), (G = Et);
        else break e;
      }
    }
    return L;
  }
  function l(P, L) {
    var z = P.sortIndex - L.sortIndex;
    return z !== 0 ? z : P.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    d = 1,
    m = null,
    h = 3,
    x = !1,
    w = !1,
    y = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= P)
        r(a), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(a);
    }
  }
  function g(P) {
    if (((y = !1), p(P), !w))
      if (n(s) !== null) (w = !0), Ml(k);
      else {
        var L = n(a);
        L !== null && Fl(g, L.startTime - P);
      }
  }
  function k(P, L) {
    (w = !1), y && ((y = !1), f(A), (A = -1)), (x = !0);
    var z = h;
    try {
      for (
        p(L), m = n(s);
        m !== null && (!(m.expirationTime > L) || (P && !Ae()));

      ) {
        var G = m.callback;
        if (typeof G == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var $ = G(m.expirationTime <= L);
          (L = e.unstable_now()),
            typeof $ == "function" ? (m.callback = $) : m === n(s) && r(s),
            p(L);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var hr = !0;
      else {
        var kt = n(a);
        kt !== null && Fl(g, kt.startTime - L), (hr = !1);
      }
      return hr;
    } finally {
      (m = null), (h = z), (x = !1);
    }
  }
  var N = !1,
    O = null,
    A = -1,
    _ = 5,
    I = -1;
  function Ae() {
    return !(e.unstable_now() - I < _);
  }
  function xn() {
    if (O !== null) {
      var P = e.unstable_now();
      I = P;
      var L = !0;
      try {
        L = O(!0, P);
      } finally {
        L ? Sn() : ((N = !1), (O = null));
      }
    } else N = !1;
  }
  var Sn;
  if (typeof c == "function")
    Sn = function () {
      c(xn);
    };
  else if (typeof MessageChannel < "u") {
    var du = new MessageChannel(),
      Rf = du.port2;
    (du.port1.onmessage = xn),
      (Sn = function () {
        Rf.postMessage(null);
      });
  } else
    Sn = function () {
      j(xn, 0);
    };
  function Ml(P) {
    (O = P), N || ((N = !0), Sn());
  }
  function Fl(P, L) {
    A = j(function () {
      P(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), Ml(k));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var z = h;
      h = L;
      try {
        return P();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, L) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = h;
      h = P;
      try {
        return L();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, L, z) {
      var G = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? G + z : G))
          : (z = G),
        P)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = z + $),
        (P = {
          id: d++,
          callback: L,
          priorityLevel: P,
          startTime: z,
          expirationTime: $,
          sortIndex: -1,
        }),
        z > G
          ? ((P.sortIndex = z),
            t(a, P),
            n(s) === null &&
              P === n(a) &&
              (y ? (f(A), (A = -1)) : (y = !0), Fl(g, z - G)))
          : ((P.sortIndex = $), t(s, P), w || x || ((w = !0), Ml(k))),
        P
      );
    }),
    (e.unstable_shouldYield = Ae),
    (e.unstable_wrapCallback = function (P) {
      var L = h;
      return function () {
        var z = h;
        h = L;
        try {
          return P.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    });
})(qs);
Ys.exports = qs;
var ed = Ys.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $s = S,
  xe = ed;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var bs = new Set(),
  Wn = {};
function Ut(e, t) {
  un(e, t), un(e + "Capture", t);
}
function un(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) bs.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ho = Object.prototype.hasOwnProperty,
  td =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vu = {},
  gu = {};
function nd(e) {
  return ho.call(gu, e)
    ? !0
    : ho.call(vu, e)
    ? !1
    : td.test(e)
    ? (gu[e] = !0)
    : ((vu[e] = !0), !1);
}
function rd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ld(e, t, n, r) {
  if (t === null || typeof t > "u" || rd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gi = /[\-:]([a-z])/g;
function yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gi, yi);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gi, yi);
    re[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(gi, yi);
  re[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wi(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ld(t, n, l, r) && (n = null),
    r || l === null
      ? nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $e = $s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Wt = Symbol.for("react.fragment"),
  xi = Symbol.for("react.strict_mode"),
  mo = Symbol.for("react.profiler"),
  ea = Symbol.for("react.provider"),
  ta = Symbol.for("react.context"),
  Si = Symbol.for("react.forward_ref"),
  vo = Symbol.for("react.suspense"),
  go = Symbol.for("react.suspense_list"),
  Ci = Symbol.for("react.memo"),
  tt = Symbol.for("react.lazy"),
  na = Symbol.for("react.offscreen"),
  yu = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yu && e[yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Bl;
function Rn(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = (t && t[1]) || "";
    }
  return (
    `
` +
    Bl +
    e
  );
}
var Vl = !1;
function Hl(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rn(e) : "";
}
function od(e) {
  switch (e.tag) {
    case 5:
      return Rn(e.type);
    case 16:
      return Rn("Lazy");
    case 13:
      return Rn("Suspense");
    case 19:
      return Rn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hl(e.type, !1)), e;
    case 11:
      return (e = Hl(e.type.render, !1)), e;
    case 1:
      return (e = Hl(e.type, !0)), e;
    default:
      return "";
  }
}
function yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case Qt:
      return "Portal";
    case mo:
      return "Profiler";
    case xi:
      return "StrictMode";
    case vo:
      return "Suspense";
    case go:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ta:
        return (e.displayName || "Context") + ".Consumer";
      case ea:
        return (e._context.displayName || "Context") + ".Provider";
      case Si:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ci:
        return (
          (t = e.displayName || null), t !== null ? t : yo(e.type) || "Memo"
        );
      case tt:
        (t = e._payload), (e = e._init);
        try {
          return yo(e(t));
        } catch {}
    }
  return null;
}
function id(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return yo(t);
    case 8:
      return t === xi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ra(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ud(e) {
  var t = ra(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yr(e) {
  e._valueTracker || (e._valueTracker = ud(e));
}
function la(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ra(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function _r(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wo(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function oa(e, t) {
  (t = t.checked), t != null && wi(e, "checked", t, !1);
}
function xo(e, t) {
  oa(e, t);
  var n = gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? So(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && So(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function So(e, t, n) {
  (t !== "number" || _r(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function en(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gt(n) };
}
function ia(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Cu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ua(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ua(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wr,
  sa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wr = wr || document.createElement("div"),
          wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var In = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  sd = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function (e) {
  sd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]);
  });
});
function aa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
    ? ("" + t).trim()
    : t + "px";
}
function ca(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = aa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var ad = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Eo(e, t) {
  if (t) {
    if (ad[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Po(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var No = null;
function ki(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jo = null,
  tn = null,
  nn = null;
function ku(e) {
  if ((e = fr(e))) {
    if (typeof jo != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Cl(t)), jo(e.stateNode, e.type, t));
  }
}
function fa(e) {
  tn ? (nn ? nn.push(e) : (nn = [e])) : (tn = e);
}
function da() {
  if (tn) {
    var e = tn,
      t = nn;
    if (((nn = tn = null), ku(e), t)) for (e = 0; e < t.length; e++) ku(t[e]);
  }
}
function pa(e, t) {
  return e(t);
}
function ha() {}
var Ql = !1;
function ma(e, t, n) {
  if (Ql) return e(t, n);
  Ql = !0;
  try {
    return pa(e, t, n);
  } finally {
    (Ql = !1), (tn !== null || nn !== null) && (ha(), da());
  }
}
function _n(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Oo = !1;
if (Je)
  try {
    var kn = {};
    Object.defineProperty(kn, "passive", {
      get: function () {
        Oo = !0;
      },
    }),
      window.addEventListener("test", kn, kn),
      window.removeEventListener("test", kn, kn);
  } catch {
    Oo = !1;
  }
function cd(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Mn = !1,
  Gr = null,
  Zr = !1,
  Ao = null,
  fd = {
    onError: function (e) {
      (Mn = !0), (Gr = e);
    },
  };
function dd(e, t, n, r, l, o, i, u, s) {
  (Mn = !1), (Gr = null), cd.apply(fd, arguments);
}
function pd(e, t, n, r, l, o, i, u, s) {
  if ((dd.apply(this, arguments), Mn)) {
    if (Mn) {
      var a = Gr;
      (Mn = !1), (Gr = null);
    } else throw Error(C(198));
    Zr || ((Zr = !0), (Ao = a));
  }
}
function Dt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function va(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Eu(e) {
  if (Dt(e) !== e) throw Error(C(188));
}
function hd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dt(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Eu(l), e;
        if (o === r) return Eu(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function ga(e) {
  return (e = hd(e)), e !== null ? ya(e) : null;
}
function ya(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ya(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wa = xe.unstable_scheduleCallback,
  Pu = xe.unstable_cancelCallback,
  md = xe.unstable_shouldYield,
  vd = xe.unstable_requestPaint,
  Z = xe.unstable_now,
  gd = xe.unstable_getCurrentPriorityLevel,
  Ei = xe.unstable_ImmediatePriority,
  xa = xe.unstable_UserBlockingPriority,
  Jr = xe.unstable_NormalPriority,
  yd = xe.unstable_LowPriority,
  Sa = xe.unstable_IdlePriority,
  yl = null,
  He = null;
function wd(e) {
  if (He && typeof He.onCommitFiberRoot == "function")
    try {
      He.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Cd,
  xd = Math.log,
  Sd = Math.LN2;
function Cd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((xd(e) / Sd) | 0)) | 0;
}
var xr = 64,
  Sr = 4194304;
function zn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = zn(u)) : ((o &= i), o !== 0 && (r = zn(o)));
  } else (i = n & ~l), i !== 0 ? (r = zn(i)) : o !== 0 && (r = zn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function kd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ed(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Me(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = kd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Ro(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ca() {
  var e = xr;
  return (xr <<= 1), !(xr & 4194240) && (xr = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ar(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function Pd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Pi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function ka(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ea,
  Ni,
  Pa,
  Na,
  ja,
  Lo = !1,
  Cr = [],
  st = null,
  at = null,
  ct = null,
  Gn = new Map(),
  Zn = new Map(),
  rt = [],
  Nd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Nu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ct = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = fr(t)), t !== null && Ni(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function jd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (st = En(st, e, t, n, r, l)), !0;
    case "dragenter":
      return (at = En(at, e, t, n, r, l)), !0;
    case "mouseover":
      return (ct = En(ct, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gn.set(o, En(Gn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Zn.set(o, En(Zn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Oa(e) {
  var t = jt(e.target);
  if (t !== null) {
    var n = Dt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = va(n)), t !== null)) {
          (e.blockedOn = t),
            ja(e.priority, function () {
              Pa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (No = r), n.target.dispatchEvent(r), (No = null);
    } else return (t = fr(n)), t !== null && Ni(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ju(e, t, n) {
  Mr(e) && n.delete(t);
}
function Od() {
  (Lo = !1),
    st !== null && Mr(st) && (st = null),
    at !== null && Mr(at) && (at = null),
    ct !== null && Mr(ct) && (ct = null),
    Gn.forEach(ju),
    Zn.forEach(ju);
}
function Pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Lo ||
      ((Lo = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Od)));
}
function Jn(e) {
  function t(l) {
    return Pn(l, e);
  }
  if (0 < Cr.length) {
    Pn(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    st !== null && Pn(st, e),
      at !== null && Pn(at, e),
      ct !== null && Pn(ct, e),
      Gn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < rt.length;
    n++
  )
    (r = rt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && ((n = rt[0]), n.blockedOn === null); )
    Oa(n), n.blockedOn === null && rt.shift();
}
var rn = $e.ReactCurrentBatchConfig,
  Yr = !0;
function Ad(e, t, n, r) {
  var l = F,
    o = rn.transition;
  rn.transition = null;
  try {
    (F = 1), ji(e, t, n, r);
  } finally {
    (F = l), (rn.transition = o);
  }
}
function Rd(e, t, n, r) {
  var l = F,
    o = rn.transition;
  rn.transition = null;
  try {
    (F = 4), ji(e, t, n, r);
  } finally {
    (F = l), (rn.transition = o);
  }
}
function ji(e, t, n, r) {
  if (Yr) {
    var l = zo(e, t, n, r);
    if (l === null) bl(e, t, r, qr, n), Nu(e, r);
    else if (jd(l, e, t, n, r)) r.stopPropagation();
    else if ((Nu(e, r), t & 4 && -1 < Nd.indexOf(e))) {
      for (; l !== null; ) {
        var o = fr(l);
        if (
          (o !== null && Ea(o),
          (o = zo(e, t, n, r)),
          o === null && bl(e, t, r, qr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else bl(e, t, r, null, n);
  }
}
var qr = null;
function zo(e, t, n, r) {
  if (((qr = null), (e = ki(r)), (e = jt(e)), e !== null))
    if (((t = Dt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = va(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qr = e), null;
}
function Aa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (gd()) {
        case Ei:
          return 1;
        case xa:
          return 4;
        case Jr:
        case yd:
          return 16;
        case Sa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null,
  Oi = null,
  Fr = null;
function Ra() {
  if (Fr) return Fr;
  var e,
    t = Oi,
    n = t.length,
    r,
    l = "value" in ot ? ot.value : ot.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Fr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function Ou() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? kr
        : Ou),
      (this.isPropagationStopped = Ou),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var mn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ai = Ce(mn),
  cr = W({}, mn, { view: 0, detail: 0 }),
  Ld = Ce(cr),
  Kl,
  _l,
  Nn,
  wl = W({}, cr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ri,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nn &&
            (Nn && e.type === "mousemove"
              ? ((Kl = e.screenX - Nn.screenX), (_l = e.screenY - Nn.screenY))
              : (_l = Kl = 0),
            (Nn = e)),
          Kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _l;
    },
  }),
  Au = Ce(wl),
  zd = W({}, wl, { dataTransfer: 0 }),
  Td = Ce(zd),
  Id = W({}, cr, { relatedTarget: 0 }),
  Gl = Ce(Id),
  Md = W({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fd = Ce(Md),
  Ud = W({}, mn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Dd = Ce(Ud),
  Bd = W({}, mn, { data: 0 }),
  Ru = Ce(Bd),
  Vd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Hd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Qd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Wd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qd[e]) ? !!t[e] : !1;
}
function Ri() {
  return Wd;
}
var Kd = W({}, cr, {
    key: function (e) {
      if (e.key) {
        var t = Vd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Hd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ri,
    charCode: function (e) {
      return e.type === "keypress" ? Ur(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ur(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _d = Ce(Kd),
  Gd = W({}, wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Lu = Ce(Gd),
  Zd = W({}, cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ri,
  }),
  Jd = Ce(Zd),
  Xd = W({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yd = Ce(Xd),
  qd = W({}, wl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $d = Ce(qd),
  bd = [9, 13, 27, 32],
  Li = Je && "CompositionEvent" in window,
  Fn = null;
Je && "documentMode" in document && (Fn = document.documentMode);
var ep = Je && "TextEvent" in window && !Fn,
  La = Je && (!Li || (Fn && 8 < Fn && 11 >= Fn)),
  zu = String.fromCharCode(32),
  Tu = !1;
function za(e, t) {
  switch (e) {
    case "keyup":
      return bd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ta(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function tp(e, t) {
  switch (e) {
    case "compositionend":
      return Ta(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tu = !0), zu);
    case "textInput":
      return (e = t.data), e === zu && Tu ? null : e;
    default:
      return null;
  }
}
function np(e, t) {
  if (Kt)
    return e === "compositionend" || (!Li && za(e, t))
      ? ((e = Ra()), (Fr = Oi = ot = null), (Kt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return La && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rp[e.type] : t === "textarea";
}
function Ia(e, t, n, r) {
  fa(r),
    (t = $r(t, "onChange")),
    0 < t.length &&
      ((n = new Ai("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Un = null,
  Xn = null;
function lp(e) {
  _a(e, 0);
}
function xl(e) {
  var t = Zt(e);
  if (la(t)) return e;
}
function op(e, t) {
  if (e === "change") return t;
}
var Ma = !1;
if (Je) {
  var Zl;
  if (Je) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var Mu = document.createElement("div");
      Mu.setAttribute("oninput", "return;"),
        (Jl = typeof Mu.oninput == "function");
    }
    Zl = Jl;
  } else Zl = !1;
  Ma = Zl && (!document.documentMode || 9 < document.documentMode);
}
function Fu() {
  Un && (Un.detachEvent("onpropertychange", Fa), (Xn = Un = null));
}
function Fa(e) {
  if (e.propertyName === "value" && xl(Xn)) {
    var t = [];
    Ia(t, Xn, e, ki(e)), ma(lp, t);
  }
}
function ip(e, t, n) {
  e === "focusin"
    ? (Fu(), (Un = t), (Xn = n), Un.attachEvent("onpropertychange", Fa))
    : e === "focusout" && Fu();
}
function up(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(Xn);
}
function sp(e, t) {
  if (e === "click") return xl(t);
}
function ap(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function cp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : cp;
function Yn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ho.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function Uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Du(e, t) {
  var n = Uu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Uu(n);
  }
}
function Ua(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ua(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Da() {
  for (var e = window, t = _r(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _r(e.document);
  }
  return t;
}
function zi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function fp(e) {
  var t = Da(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ua(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Du(n, o));
        var i = Du(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var dp = Je && "documentMode" in document && 11 >= document.documentMode,
  _t = null,
  To = null,
  Dn = null,
  Io = !1;
function Bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Io ||
    _t == null ||
    _t !== _r(r) ||
    ((r = _t),
    "selectionStart" in r && zi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dn && Yn(Dn, r)) ||
      ((Dn = r),
      (r = $r(To, "onSelect")),
      0 < r.length &&
        ((t = new Ai("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _t))));
}
function Er(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gt = {
    animationend: Er("Animation", "AnimationEnd"),
    animationiteration: Er("Animation", "AnimationIteration"),
    animationstart: Er("Animation", "AnimationStart"),
    transitionend: Er("Transition", "TransitionEnd"),
  },
  Xl = {},
  Ba = {};
Je &&
  ((Ba = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gt.animationend.animation,
    delete Gt.animationiteration.animation,
    delete Gt.animationstart.animation),
  "TransitionEvent" in window || delete Gt.transitionend.transition);
function Sl(e) {
  if (Xl[e]) return Xl[e];
  if (!Gt[e]) return e;
  var t = Gt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ba) return (Xl[e] = t[n]);
  return e;
}
var Va = Sl("animationend"),
  Ha = Sl("animationiteration"),
  Qa = Sl("animationstart"),
  Wa = Sl("transitionend"),
  Ka = new Map(),
  Vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function wt(e, t) {
  Ka.set(e, t), Ut(t, [e]);
}
for (var Yl = 0; Yl < Vu.length; Yl++) {
  var ql = Vu[Yl],
    pp = ql.toLowerCase(),
    hp = ql[0].toUpperCase() + ql.slice(1);
  wt(pp, "on" + hp);
}
wt(Va, "onAnimationEnd");
wt(Ha, "onAnimationIteration");
wt(Qa, "onAnimationStart");
wt("dblclick", "onDoubleClick");
wt("focusin", "onFocus");
wt("focusout", "onBlur");
wt(Wa, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
Ut(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ut(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  mp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function Hu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), pd(r, t, void 0, e), (e.currentTarget = null);
}
function _a(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Hu(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Hu(l, u, a), (o = s);
        }
    }
  }
  if (Zr) throw ((e = Ao), (Zr = !1), (Ao = null), e);
}
function D(e, t) {
  var n = t[Bo];
  n === void 0 && (n = t[Bo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ga(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  t && (r |= 4), Ga(n, e, r, t);
}
var Pr = "_reactListening" + Math.random().toString(36).slice(2);
function qn(e) {
  if (!e[Pr]) {
    (e[Pr] = !0),
      bs.forEach(function (n) {
        n !== "selectionchange" && (mp.has(n) || $l(n, !1, e), $l(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pr] || ((t[Pr] = !0), $l("selectionchange", !1, t));
  }
}
function Ga(e, t, n, r) {
  switch (Aa(t)) {
    case 1:
      var l = Ad;
      break;
    case 4:
      l = Rd;
      break;
    default:
      l = ji;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Oo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function bl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = jt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ma(function () {
    var a = o,
      d = ki(n),
      m = [];
    e: {
      var h = Ka.get(e);
      if (h !== void 0) {
        var x = Ai,
          w = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = _d;
            break;
          case "focusin":
            (w = "focus"), (x = Gl);
            break;
          case "focusout":
            (w = "blur"), (x = Gl);
            break;
          case "beforeblur":
          case "afterblur":
            x = Gl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Au;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Td;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Jd;
            break;
          case Va:
          case Ha:
          case Qa:
            x = Fd;
            break;
          case Wa:
            x = Yd;
            break;
          case "scroll":
            x = Ld;
            break;
          case "wheel":
            x = $d;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Dd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Lu;
        }
        var y = (t & 4) !== 0,
          j = !y && e === "scroll",
          f = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = _n(c, f)), g != null && y.push($n(c, g, p)))),
            j)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((h = new x(h, w, null, n, d)), m.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            n !== No &&
            (w = n.relatedTarget || n.fromElement) &&
            (jt(w) || w[Xe]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = a),
              (w = w ? jt(w) : null),
              w !== null &&
                ((j = Dt(w)), w !== j || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = a)),
          x !== w)
        ) {
          if (
            ((y = Au),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Lu),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (j = x == null ? h : Zt(x)),
            (p = w == null ? h : Zt(w)),
            (h = new y(g, c + "leave", x, n, d)),
            (h.target = j),
            (h.relatedTarget = p),
            (g = null),
            jt(d) === a &&
              ((y = new y(f, c + "enter", w, n, d)),
              (y.target = p),
              (y.relatedTarget = j),
              (g = y)),
            (j = g),
            x && w)
          )
            t: {
              for (y = x, f = w, c = 0, p = y; p; p = Ht(p)) c++;
              for (p = 0, g = f; g; g = Ht(g)) p++;
              for (; 0 < c - p; ) (y = Ht(y)), c--;
              for (; 0 < p - c; ) (f = Ht(f)), p--;
              for (; c--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = Ht(y)), (f = Ht(f));
              }
              y = null;
            }
          else y = null;
          x !== null && Qu(m, h, x, y, !1),
            w !== null && j !== null && Qu(m, j, w, y, !0);
        }
      }
      e: {
        if (
          ((h = a ? Zt(a) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var k = op;
        else if (Iu(h))
          if (Ma) k = ap;
          else {
            k = up;
            var N = ip;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = sp);
        if (k && (k = k(e, a))) {
          Ia(m, k, n, d);
          break e;
        }
        N && N(e, h, a),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            So(h, "number", h.value);
      }
      switch (((N = a ? Zt(a) : window), e)) {
        case "focusin":
          (Iu(N) || N.contentEditable === "true") &&
            ((_t = N), (To = a), (Dn = null));
          break;
        case "focusout":
          Dn = To = _t = null;
          break;
        case "mousedown":
          Io = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Io = !1), Bu(m, n, d);
          break;
        case "selectionchange":
          if (dp) break;
        case "keydown":
        case "keyup":
          Bu(m, n, d);
      }
      var O;
      if (Li)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Kt
          ? za(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (La &&
          n.locale !== "ko" &&
          (Kt || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Kt && (O = Ra())
            : ((ot = d),
              (Oi = "value" in ot ? ot.value : ot.textContent),
              (Kt = !0))),
        (N = $r(a, A)),
        0 < N.length &&
          ((A = new Ru(A, e, null, n, d)),
          m.push({ event: A, listeners: N }),
          O ? (A.data = O) : ((O = Ta(n)), O !== null && (A.data = O)))),
        (O = ep ? tp(e, n) : np(e, n)) &&
          ((a = $r(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new Ru("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: a }),
            (d.data = O)));
    }
    _a(m, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $r(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = _n(e, n)),
      o != null && r.unshift($n(e, o, l)),
      (o = _n(e, t)),
      o != null && r.push($n(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = _n(n, o)), s != null && i.unshift($n(n, s, u)))
        : l || ((s = _n(n, o)), s != null && i.push($n(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var vp = /\r\n?/g,
  gp = /\u0000|\uFFFD/g;
function Wu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      vp,
      `
`
    )
    .replace(gp, "");
}
function Nr(e, t, n) {
  if (((t = Wu(t)), Wu(e) !== t && n)) throw Error(C(425));
}
function br() {}
var Mo = null,
  Fo = null;
function Uo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Do = typeof setTimeout == "function" ? setTimeout : void 0,
  yp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ku = typeof Promise == "function" ? Promise : void 0,
  wp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ku < "u"
      ? function (e) {
          return Ku.resolve(null).then(e).catch(xp);
        }
      : Do;
function xp(e) {
  setTimeout(function () {
    throw e;
  });
}
function eo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _u(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vn = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + vn,
  bn = "__reactProps$" + vn,
  Xe = "__reactContainer$" + vn,
  Bo = "__reactEvents$" + vn,
  Sp = "__reactListeners$" + vn,
  Cp = "__reactHandles$" + vn;
function jt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[Ve])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _u(e); e !== null; ) {
          if ((n = e[Ve])) return n;
          e = _u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fr(e) {
  return (
    (e = e[Ve] || e[Xe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Cl(e) {
  return e[bn] || null;
}
var Vo = [],
  Jt = -1;
function xt(e) {
  return { current: e };
}
function B(e) {
  0 > Jt || ((e.current = Vo[Jt]), (Vo[Jt] = null), Jt--);
}
function U(e, t) {
  Jt++, (Vo[Jt] = e.current), (e.current = t);
}
var yt = {},
  ue = xt(yt),
  he = xt(!1),
  zt = yt;
function sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function el() {
  B(he), B(ue);
}
function Gu(e, t, n) {
  if (ue.current !== yt) throw Error(C(168));
  U(ue, t), U(he, n);
}
function Za(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, id(e) || "Unknown", l));
  return W({}, n, r);
}
function tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yt),
    (zt = ue.current),
    U(ue, e),
    U(he, he.current),
    !0
  );
}
function Zu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Za(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(he),
      B(ue),
      U(ue, e))
    : B(he),
    U(he, n);
}
var Ke = null,
  kl = !1,
  to = !1;
function Ja(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
function kp(e) {
  (kl = !0), Ja(e);
}
function St() {
  if (!to && Ke !== null) {
    to = !0;
    var e = 0,
      t = F;
    try {
      var n = Ke;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ke = null), (kl = !1);
    } catch (l) {
      throw (Ke !== null && (Ke = Ke.slice(e + 1)), wa(Ei, St), l);
    } finally {
      (F = t), (to = !1);
    }
  }
  return null;
}
var Xt = [],
  Yt = 0,
  nl = null,
  rl = 0,
  ke = [],
  Ee = 0,
  Tt = null,
  _e = 1,
  Ge = "";
function Pt(e, t) {
  (Xt[Yt++] = rl), (Xt[Yt++] = nl), (nl = e), (rl = t);
}
function Xa(e, t, n) {
  (ke[Ee++] = _e), (ke[Ee++] = Ge), (ke[Ee++] = Tt), (Tt = e);
  var r = _e;
  e = Ge;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Me(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (_e = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (Ge = o + e);
  } else (_e = (1 << o) | (n << l) | r), (Ge = e);
}
function Ti(e) {
  e.return !== null && (Pt(e, 1), Xa(e, 1, 0));
}
function Ii(e) {
  for (; e === nl; )
    (nl = Xt[--Yt]), (Xt[Yt] = null), (rl = Xt[--Yt]), (Xt[Yt] = null);
  for (; e === Tt; )
    (Tt = ke[--Ee]),
      (ke[Ee] = null),
      (Ge = ke[--Ee]),
      (ke[Ee] = null),
      (_e = ke[--Ee]),
      (ke[Ee] = null);
}
var we = null,
  ye = null,
  V = !1,
  Te = null;
function Ya(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ye = ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tt !== null ? { id: _e, overflow: Ge } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ho(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qo(e) {
  if (V) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if (Ho(e)) throw Error(C(418));
        t = ft(n.nextSibling);
        var r = we;
        t && Ju(e, t)
          ? Ya(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (we = e));
      }
    } else {
      if (Ho(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (we = e);
    }
  }
}
function Xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function jr(e) {
  if (e !== we) return !1;
  if (!V) return Xu(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Uo(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Ho(e)) throw (qa(), Error(C(418)));
    for (; t; ) Ya(e, t), (t = ft(t.nextSibling));
  }
  if ((Xu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function qa() {
  for (var e = ye; e; ) e = ft(e.nextSibling);
}
function an() {
  (ye = we = null), (V = !1);
}
function Mi(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var Ep = $e.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ll = xt(null),
  ol = null,
  qt = null,
  Fi = null;
function Ui() {
  Fi = qt = ol = null;
}
function Di(e) {
  var t = ll.current;
  B(ll), (e._currentValue = t);
}
function Wo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ln(e, t) {
  (ol = e),
    (Fi = qt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function je(e) {
  var t = e._currentValue;
  if (Fi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qt === null)) {
      if (ol === null) throw Error(C(308));
      (qt = e), (ol.dependencies = { lanes: 0, firstContext: e });
    } else qt = qt.next = e;
  return t;
}
var Ot = null;
function Bi(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function $a(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Bi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function Vi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ba(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Bi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Dr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pi(e, n);
  }
}
function Yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function il(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (u = d.lastBaseUpdate),
      u !== i &&
        (u === null ? (d.firstBaseUpdate = a) : (u.next = a),
        (d.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (d = a = s = null), (u = o);
    do {
      var h = u.lane,
        x = u.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            y = u;
          switch (((h = t), (x = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                m = w.call(x, m, h);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (h = typeof w == "function" ? w.call(x, m, h) : w),
                h == null)
              )
                break e;
              m = W({}, m, h);
              break e;
            case 2:
              nt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          d === null ? ((a = d = x), (s = m)) : (d = d.next = x),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Mt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function qu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var ec = new $s.Component().refs;
function Ko(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = ht(e),
      o = Ze(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = dt(e, o, l)),
      t !== null && (Fe(t, e, l, r), Dr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = ht(e),
      o = Ze(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = dt(e, o, l)),
      t !== null && (Fe(t, e, l, r), Dr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = ht(e),
      l = Ze(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = dt(e, l, r)),
      t !== null && (Fe(t, e, r, n), Dr(t, e, r));
  },
};
function $u(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Yn(n, r) || !Yn(l, o)
      : !0
  );
}
function tc(e, t, n) {
  var r = !1,
    l = yt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = je(o))
      : ((l = me(t) ? zt : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? sn(e, l) : yt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function bu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function _o(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = ec), Vi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = je(o))
    : ((o = me(t) ? zt : ue.current), (l.context = sn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ko(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && El.enqueueReplaceState(l, l.state, null),
      il(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === ec && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Or(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function es(e) {
  var t = e._init;
  return t(e._payload);
}
function nc(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = mt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, g) {
    return c === null || c.tag !== 6
      ? ((c = so(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function s(f, c, p, g) {
    var k = p.type;
    return k === Wt
      ? d(f, c, p.props.children, g, p.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === tt &&
            es(k) === c.type))
      ? ((g = l(c, p.props)), (g.ref = jn(f, c, p)), (g.return = f), g)
      : ((g = Kr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = jn(f, c, p)),
        (g.return = f),
        g);
  }
  function a(f, c, p, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = ao(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function d(f, c, p, g, k) {
    return c === null || c.tag !== 7
      ? ((c = Lt(p, f.mode, g, k)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = so("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case gr:
          return (
            (p = Kr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = jn(f, null, c)),
            (p.return = f),
            p
          );
        case Qt:
          return (c = ao(c, f.mode, p)), (c.return = f), c;
        case tt:
          var g = c._init;
          return m(f, g(c._payload), p);
      }
      if (Ln(c) || Cn(c))
        return (c = Lt(c, f.mode, p, null)), (c.return = f), c;
      Or(f, c);
    }
    return null;
  }
  function h(f, c, p, g) {
    var k = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return k !== null ? null : u(f, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case gr:
          return p.key === k ? s(f, c, p, g) : null;
        case Qt:
          return p.key === k ? a(f, c, p, g) : null;
        case tt:
          return (k = p._init), h(f, c, k(p._payload), g);
      }
      if (Ln(p) || Cn(p)) return k !== null ? null : d(f, c, p, g, null);
      Or(f, p);
    }
    return null;
  }
  function x(f, c, p, g, k) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), u(c, f, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case gr:
          return (f = f.get(g.key === null ? p : g.key) || null), s(c, f, g, k);
        case Qt:
          return (f = f.get(g.key === null ? p : g.key) || null), a(c, f, g, k);
        case tt:
          var N = g._init;
          return x(f, c, p, N(g._payload), k);
      }
      if (Ln(g) || Cn(g)) return (f = f.get(p) || null), d(c, f, g, k, null);
      Or(c, g);
    }
    return null;
  }
  function w(f, c, p, g) {
    for (
      var k = null, N = null, O = c, A = (c = 0), _ = null;
      O !== null && A < p.length;
      A++
    ) {
      O.index > A ? ((_ = O), (O = null)) : (_ = O.sibling);
      var I = h(f, O, p[A], g);
      if (I === null) {
        O === null && (O = _);
        break;
      }
      e && O && I.alternate === null && t(f, O),
        (c = o(I, c, A)),
        N === null ? (k = I) : (N.sibling = I),
        (N = I),
        (O = _);
    }
    if (A === p.length) return n(f, O), V && Pt(f, A), k;
    if (O === null) {
      for (; A < p.length; A++)
        (O = m(f, p[A], g)),
          O !== null &&
            ((c = o(O, c, A)), N === null ? (k = O) : (N.sibling = O), (N = O));
      return V && Pt(f, A), k;
    }
    for (O = r(f, O); A < p.length; A++)
      (_ = x(O, f, A, p[A], g)),
        _ !== null &&
          (e && _.alternate !== null && O.delete(_.key === null ? A : _.key),
          (c = o(_, c, A)),
          N === null ? (k = _) : (N.sibling = _),
          (N = _));
    return (
      e &&
        O.forEach(function (Ae) {
          return t(f, Ae);
        }),
      V && Pt(f, A),
      k
    );
  }
  function y(f, c, p, g) {
    var k = Cn(p);
    if (typeof k != "function") throw Error(C(150));
    if (((p = k.call(p)), p == null)) throw Error(C(151));
    for (
      var N = (k = null), O = c, A = (c = 0), _ = null, I = p.next();
      O !== null && !I.done;
      A++, I = p.next()
    ) {
      O.index > A ? ((_ = O), (O = null)) : (_ = O.sibling);
      var Ae = h(f, O, I.value, g);
      if (Ae === null) {
        O === null && (O = _);
        break;
      }
      e && O && Ae.alternate === null && t(f, O),
        (c = o(Ae, c, A)),
        N === null ? (k = Ae) : (N.sibling = Ae),
        (N = Ae),
        (O = _);
    }
    if (I.done) return n(f, O), V && Pt(f, A), k;
    if (O === null) {
      for (; !I.done; A++, I = p.next())
        (I = m(f, I.value, g)),
          I !== null &&
            ((c = o(I, c, A)), N === null ? (k = I) : (N.sibling = I), (N = I));
      return V && Pt(f, A), k;
    }
    for (O = r(f, O); !I.done; A++, I = p.next())
      (I = x(O, f, A, I.value, g)),
        I !== null &&
          (e && I.alternate !== null && O.delete(I.key === null ? A : I.key),
          (c = o(I, c, A)),
          N === null ? (k = I) : (N.sibling = I),
          (N = I));
    return (
      e &&
        O.forEach(function (xn) {
          return t(f, xn);
        }),
      V && Pt(f, A),
      k
    );
  }
  function j(f, c, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Wt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case gr:
          e: {
            for (var k = p.key, N = c; N !== null; ) {
              if (N.key === k) {
                if (((k = p.type), k === Wt)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (c = l(N, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  N.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === tt &&
                    es(k) === N.type)
                ) {
                  n(f, N.sibling),
                    (c = l(N, p.props)),
                    (c.ref = jn(f, N, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === Wt
              ? ((c = Lt(p.props.children, f.mode, g, p.key)),
                (c.return = f),
                (f = c))
              : ((g = Kr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = jn(f, c, p)),
                (g.return = f),
                (f = g));
          }
          return i(f);
        case Qt:
          e: {
            for (N = p.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ao(p, f.mode, g)), (c.return = f), (f = c);
          }
          return i(f);
        case tt:
          return (N = p._init), j(f, c, N(p._payload), g);
      }
      if (Ln(p)) return w(f, c, p, g);
      if (Cn(p)) return y(f, c, p, g);
      Or(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = so(p, f.mode, g)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return j;
}
var cn = nc(!0),
  rc = nc(!1),
  dr = {},
  Qe = xt(dr),
  er = xt(dr),
  tr = xt(dr);
function At(e) {
  if (e === dr) throw Error(C(174));
  return e;
}
function Hi(e, t) {
  switch ((U(tr, t), U(er, e), U(Qe, dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ko(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ko(t, e));
  }
  B(Qe), U(Qe, t);
}
function fn() {
  B(Qe), B(er), B(tr);
}
function lc(e) {
  At(tr.current);
  var t = At(Qe.current),
    n = ko(t, e.type);
  t !== n && (U(er, e), U(Qe, n));
}
function Qi(e) {
  er.current === e && (B(Qe), B(er));
}
var H = xt(0);
function ul(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var no = [];
function Wi() {
  for (var e = 0; e < no.length; e++)
    no[e]._workInProgressVersionPrimary = null;
  no.length = 0;
}
var Br = $e.ReactCurrentDispatcher,
  ro = $e.ReactCurrentBatchConfig,
  It = 0,
  Q = null,
  Y = null,
  b = null,
  sl = !1,
  Bn = !1,
  nr = 0,
  Pp = 0;
function le() {
  throw Error(C(321));
}
function Ki(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function _i(e, t, n, r, l, o) {
  if (
    ((It = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Br.current = e === null || e.memoizedState === null ? Ap : Rp),
    (e = n(r, l)),
    Bn)
  ) {
    o = 0;
    do {
      if (((Bn = !1), (nr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (b = Y = null),
        (t.updateQueue = null),
        (Br.current = Lp),
        (e = n(r, l));
    } while (Bn);
  }
  if (
    ((Br.current = al),
    (t = Y !== null && Y.next !== null),
    (It = 0),
    (b = Y = Q = null),
    (sl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Gi() {
  var e = nr !== 0;
  return (nr = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (Q.memoizedState = b = e) : (b = b.next = e), b;
}
function Oe() {
  if (Y === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = b === null ? Q.memoizedState : b.next;
  if (t !== null) (b = t), (Y = e);
  else {
    if (e === null) throw Error(C(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      b === null ? (Q.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lo(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var d = a.lane;
      if ((It & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (Q.lanes |= d),
          (Mt |= d);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Ue(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Q.lanes |= o), (Mt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oo(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ue(o, t.memoizedState) || (pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function oc() {}
function ic(e, t) {
  var n = Q,
    r = Oe(),
    l = t(),
    o = !Ue(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Zi(ac.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lr(9, sc.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(C(349));
    It & 30 || uc(n, t, l);
  }
  return l;
}
function uc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), cc(t) && fc(e);
}
function ac(e, t, n) {
  return n(function () {
    cc(t) && fc(e);
  });
}
function cc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function fc(e) {
  var t = Ye(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function ts(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Op.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function lr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function dc() {
  return Oe().memoizedState;
}
function Vr(e, t, n, r) {
  var l = Be();
  (Q.flags |= e),
    (l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pl(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && Ki(r, i.deps))) {
      l.memoizedState = lr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (l.memoizedState = lr(1 | t, n, o, r));
}
function ns(e, t) {
  return Vr(8390656, 8, e, t);
}
function Zi(e, t) {
  return Pl(2048, 8, e, t);
}
function pc(e, t) {
  return Pl(4, 2, e, t);
}
function hc(e, t) {
  return Pl(4, 4, e, t);
}
function mc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function vc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pl(4, 4, mc.bind(null, t, e), n)
  );
}
function Ji() {}
function gc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ki(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function yc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ki(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function wc(e, t, n) {
  return It & 21
    ? (Ue(n, t) || ((n = Ca()), (Q.lanes |= n), (Mt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Np(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ro.transition;
  ro.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (ro.transition = r);
  }
}
function xc() {
  return Oe().memoizedState;
}
function jp(e, t, n) {
  var r = ht(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sc(e))
  )
    Cc(t, n);
  else if (((n = $a(e, t, n, r)), n !== null)) {
    var l = ae();
    Fe(n, e, r, l), kc(n, t, r);
  }
}
function Op(e, t, n) {
  var r = ht(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sc(e)) Cc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ue(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Bi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = $a(e, t, l, r)),
      n !== null && ((l = ae()), Fe(n, e, r, l), kc(n, t, r));
  }
}
function Sc(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Cc(e, t) {
  Bn = sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function kc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pi(e, n);
  }
}
var al = {
    readContext: je,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Ap = {
    readContext: je,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: je,
    useEffect: ns,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vr(4194308, 4, mc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jp.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ts,
    useDebugValue: Ji,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = ts(!1),
        t = e[0];
      return (e = Np.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        l = Be();
      if (V) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(C(349));
        It & 30 || uc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ns(ac.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        lr(9, sc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = ee.identifierPrefix;
      if (V) {
        var n = Ge,
          r = _e;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Pp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Rp = {
    readContext: je,
    useCallback: gc,
    useContext: je,
    useEffect: Zi,
    useImperativeHandle: vc,
    useInsertionEffect: pc,
    useLayoutEffect: hc,
    useMemo: yc,
    useReducer: lo,
    useRef: dc,
    useState: function () {
      return lo(rr);
    },
    useDebugValue: Ji,
    useDeferredValue: function (e) {
      var t = Oe();
      return wc(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = lo(rr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: oc,
    useSyncExternalStore: ic,
    useId: xc,
    unstable_isNewReconciler: !1,
  },
  Lp = {
    readContext: je,
    useCallback: gc,
    useContext: je,
    useEffect: Zi,
    useImperativeHandle: vc,
    useInsertionEffect: pc,
    useLayoutEffect: hc,
    useMemo: yc,
    useReducer: oo,
    useRef: dc,
    useState: function () {
      return oo(rr);
    },
    useDebugValue: Ji,
    useDeferredValue: function (e) {
      var t = Oe();
      return Y === null ? (t.memoizedState = e) : wc(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = oo(rr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: oc,
    useSyncExternalStore: ic,
    useId: xc,
    unstable_isNewReconciler: !1,
  };
function dn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += od(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function io(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Go(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zp = typeof WeakMap == "function" ? WeakMap : Map;
function Ec(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fl || ((fl = !0), (ni = r)), Go(e, t);
    }),
    n
  );
}
function Pc(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Go(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Go(e, t),
          typeof r != "function" &&
            (pt === null ? (pt = new Set([this])) : pt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function rs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Gp.bind(null, e, t, n)), t.then(e, e));
}
function ls(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function os(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Tp = $e.ReactCurrentOwner,
  pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? rc(t, null, n, r) : cn(t, e.child, n, r);
}
function is(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    ln(t, l),
    (r = _i(e, t, n, r, o, l)),
    (n = Gi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (V && n && Ti(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function us(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !nu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Nc(e, t, o, r, l))
      : ((e = Kr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Yn), n(i, r) && e.ref === t.ref)
    )
      return qe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = mt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Nc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yn(o, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), qe(e, t, l);
  }
  return Zo(e, t, n, r, l);
}
function jc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(bt, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(bt, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(bt, ge),
        (ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(bt, ge),
      (ge |= r);
  return se(e, t, l, n), t.child;
}
function Oc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zo(e, t, n, r, l) {
  var o = me(n) ? zt : ue.current;
  return (
    (o = sn(t, o)),
    ln(t, l),
    (n = _i(e, t, n, r, o, l)),
    (r = Gi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (V && r && Ti(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function ss(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    tl(t);
  } else o = !1;
  if ((ln(t, l), t.stateNode === null))
    Hr(e, t), tc(t, n, r), _o(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = je(a))
      : ((a = me(n) ? zt : ue.current), (a = sn(t, a)));
    var d = n.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && bu(t, i, r, a)),
      (nt = !1);
    var h = t.memoizedState;
    (i.state = h),
      il(t, r, i, l),
      (s = t.memoizedState),
      u !== r || h !== s || he.current || nt
        ? (typeof d == "function" && (Ko(t, n, d, r), (s = t.memoizedState)),
          (u = nt || $u(t, n, u, r, h, s, a))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ba(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = a),
      (m = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = je(s))
        : ((s = me(n) ? zt : ue.current), (s = sn(t, s)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || h !== s) && bu(t, i, r, s)),
      (nt = !1),
      (h = t.memoizedState),
      (i.state = h),
      il(t, r, i, l);
    var w = t.memoizedState;
    u !== m || h !== w || he.current || nt
      ? (typeof x == "function" && (Ko(t, n, x, r), (w = t.memoizedState)),
        (a = nt || $u(t, n, a, r, h, w, s) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Jo(e, t, n, r, o, l);
}
function Jo(e, t, n, r, l, o) {
  Oc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Zu(t, n, !1), qe(e, t, o);
  (r = t.stateNode), (Tp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = cn(t, e.child, null, o)), (t.child = cn(t, null, u, o)))
      : se(e, t, u, o),
    (t.memoizedState = r.state),
    l && Zu(t, n, !0),
    t.child
  );
}
function Ac(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gu(e, t.context, !1),
    Hi(e, t.containerInfo);
}
function as(e, t, n, r, l) {
  return an(), Mi(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Xo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rc(e, t, n) {
  var r = t.pendingProps,
    l = H.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(H, l & 1),
    e === null)
  )
    return (
      Qo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ol(i, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Yo(n)),
              (t.memoizedState = Xo),
              e)
            : Xi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Ip(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = mt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = mt(u, o)) : ((o = Lt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Yo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = mt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xi(e, t) {
  return (
    (t = Ol({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ar(e, t, n, r) {
  return (
    r !== null && Mi(r),
    cn(t, e.child, null, n),
    (e = Xi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ip(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = io(Error(C(422)))), Ar(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ol({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Lt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && cn(t, e.child, null, i),
        (t.child.memoizedState = Yo(i)),
        (t.memoizedState = Xo),
        o);
  if (!(t.mode & 1)) return Ar(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(C(419))), (r = io(o, r, void 0)), Ar(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), pe || u)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), Fe(r, e, l, -1));
    }
    return tu(), (r = io(Error(C(421)))), Ar(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = ft(l.nextSibling)),
      (we = t),
      (V = !0),
      (Te = null),
      e !== null &&
        ((ke[Ee++] = _e),
        (ke[Ee++] = Ge),
        (ke[Ee++] = Tt),
        (_e = e.id),
        (Ge = e.overflow),
        (Tt = t)),
      (t = Xi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wo(e.return, t, n);
}
function uo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Lc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cs(e, n, t);
        else if (e.tag === 19) cs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ul(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          uo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ul(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        uo(t, !0, n, null, o);
        break;
      case "together":
        uo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Mp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ac(t), an();
      break;
    case 5:
      lc(t);
      break;
    case 1:
      me(t.type) && tl(t);
      break;
    case 4:
      Hi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(ll, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Rc(e, t, n)
          : (U(H, H.current & 1),
            (e = qe(e, t, n)),
            e !== null ? e.sibling : null);
      U(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Lc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), jc(e, t, n);
  }
  return qe(e, t, n);
}
var zc, qo, Tc, Ic;
zc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qo = function () {};
Tc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), At(Qe.current);
    var o = null;
    switch (n) {
      case "input":
        (l = wo(e, l)), (r = wo(e, r)), (o = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Co(e, l)), (r = Co(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = br);
    }
    Eo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Wn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Wn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && D("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Ic = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Fp(e, t, n) {
  var r = t.pendingProps;
  switch ((Ii(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return me(t.type) && el(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        fn(),
        B(he),
        B(ue),
        Wi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (oi(Te), (Te = null)))),
        qo(e, t),
        oe(t),
        null
      );
    case 5:
      Qi(t);
      var l = At(tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return oe(t), null;
        }
        if (((e = At(Qe.current)), jr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ve] = t), (r[bn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tn.length; l++) D(Tn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              wu(r, o), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Su(r, o), D("invalid", r);
          }
          Eo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Wn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              yr(r), xu(r, o, !0);
              break;
            case "textarea":
              yr(r), Cu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ua(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ve] = t),
            (e[bn] = r),
            zc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Po(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tn.length; l++) D(Tn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                wu(e, r), (l = wo(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Su(e, r), (l = Co(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            Eo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? ca(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && sa(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Kn(e, s)
                    : typeof s == "number" && Kn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Wn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && D("scroll", e)
                      : s != null && wi(e, o, s, i));
              }
            switch (n) {
              case "input":
                yr(e), xu(e, r, !1);
                break;
              case "textarea":
                yr(e), Cu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? en(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      en(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = br);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = At(tr.current)), At(Qe.current), jr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ve] = t),
            (o = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ve] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (B(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && ye !== null && t.mode & 1 && !(t.flags & 128))
          qa(), an(), (t.flags |= 98560), (o = !1);
        else if (((o = jr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[Ve] = t;
          } else
            an(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else Te !== null && (oi(Te), (Te = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? q === 0 && (q = 3) : tu())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        fn(), qo(e, t), e === null && qn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Di(t.type._context), oe(t), null;
    case 17:
      return me(t.type) && el(), oe(t), null;
    case 19:
      if ((B(H), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) On(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ul(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    On(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Z() > pn &&
            ((t.flags |= 128), (r = !0), On(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ul(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              On(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !V)
            )
              return oe(t), null;
          } else
            2 * Z() - o.renderingStartTime > pn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), On(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = H.current),
          U(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Up(e, t) {
  switch ((Ii(t), t.tag)) {
    case 1:
      return (
        me(t.type) && el(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        fn(),
        B(he),
        B(ue),
        Wi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Qi(t), null;
    case 13:
      if ((B(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        an();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(H), null;
    case 4:
      return fn(), null;
    case 10:
      return Di(t.type._context), null;
    case 22:
    case 23:
      return eu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  ie = !1,
  Dp = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function $t(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function $o(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var fs = !1;
function Bp(e, t) {
  if (((Mo = Yr), (e = Da()), zi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            d = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (h = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++a === l && (u = i),
                h === o && ++d === r && (s = i),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = x;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fo = { focusedElem: e, selectionRange: n }, Yr = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    j = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Le(t.type, y),
                      j
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (g) {
          K(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (w = fs), (fs = !1), w;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && $o(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Mc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Mc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ve], delete t[bn], delete t[Bo], delete t[Sp], delete t[Cp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Fc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ds(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ei(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ei(e, t, n), e = e.sibling; e !== null; ) ei(e, t, n), (e = e.sibling);
}
function ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ti(e, t, n), e = e.sibling; e !== null; ) ti(e, t, n), (e = e.sibling);
}
var te = null,
  ze = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; ) Uc(e, t, n), (n = n.sibling);
}
function Uc(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function")
    try {
      He.onCommitFiberUnmount(yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || $t(n, t);
    case 6:
      var r = te,
        l = ze;
      (te = null),
        be(e, t, n),
        (te = r),
        (ze = l),
        te !== null &&
          (ze
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (ze
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? eo(e.parentNode, n)
              : e.nodeType === 1 && eo(e, n),
            Jn(e))
          : eo(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = ze),
        (te = n.stateNode.containerInfo),
        (ze = !0),
        be(e, t, n),
        (te = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && $o(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      be(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        ($t(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      be(e, t, n);
      break;
    case 21:
      be(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), be(e, t, n), (ie = r))
        : be(e, t, n);
      break;
    default:
      be(e, t, n);
  }
}
function ps(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dp()),
      t.forEach(function (r) {
        var l = Jp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (te = u.stateNode), (ze = !1);
              break e;
            case 3:
              (te = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (te = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (te === null) throw Error(C(160));
        Uc(o, i, l), (te = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        K(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Dc(t, e), (t = t.sibling);
}
function Dc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), De(e), r & 4)) {
        try {
          Vn(3, e, e.return), Nl(3, e);
        } catch (y) {
          K(e, e.return, y);
        }
        try {
          Vn(5, e, e.return);
        } catch (y) {
          K(e, e.return, y);
        }
      }
      break;
    case 1:
      Re(t, e), De(e), r & 512 && n !== null && $t(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        De(e),
        r & 512 && n !== null && $t(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Kn(l, "");
        } catch (y) {
          K(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && oa(l, o),
              Po(u, i);
            var a = Po(u, o);
            for (i = 0; i < s.length; i += 2) {
              var d = s[i],
                m = s[i + 1];
              d === "style"
                ? ca(l, m)
                : d === "dangerouslySetInnerHTML"
                ? sa(l, m)
                : d === "children"
                ? Kn(l, m)
                : wi(l, d, m, a);
            }
            switch (u) {
              case "input":
                xo(l, o);
                break;
              case "textarea":
                ia(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? en(l, !!o.multiple, x, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? en(l, !!o.multiple, o.defaultValue, !0)
                      : en(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[bn] = o;
          } catch (y) {
            K(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Re(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          K(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (y) {
          K(e, e.return, y);
        }
      break;
    case 4:
      Re(t, e), De(e);
      break;
    case 13:
      Re(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            ($i = Z())),
        r & 4 && ps(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || d), Re(t, e), (ie = a)) : Re(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (E = e, d = e.child; d !== null; ) {
            for (m = E = d; E !== null; ) {
              switch (((h = E), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, h, h.return);
                  break;
                case 1:
                  $t(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      K(r, n, y);
                    }
                  }
                  break;
                case 5:
                  $t(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ms(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (E = x)) : ms(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (l = m.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = aa("display", i)));
              } catch (y) {
                K(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
              } catch (y) {
                K(e, e.return, y);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), (m = m.return);
          }
          d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), De(e), r & 4 && ps(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kn(l, ""), (r.flags &= -33));
          var o = ds(e);
          ti(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ds(e);
          ei(e, u, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (s) {
      K(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vp(e, t, n) {
  (E = e), Bc(e);
}
function Bc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Rr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Rr;
        var a = ie;
        if (((Rr = i), (ie = s) && !a))
          for (E = l; E !== null; )
            (i = E),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? vs(l)
                : s !== null
                ? ((s.return = i), (E = s))
                : vs(l);
        for (; o !== null; ) (E = o), Bc(o), (o = o.sibling);
        (E = l), (Rr = u), (ie = a);
      }
      hs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : hs(e);
  }
}
function hs(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Nl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && qu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                qu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var m = d.dehydrated;
                    m !== null && Jn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        ie || (t.flags & 512 && bo(t));
      } catch (h) {
        K(t, t.return, h);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function ms(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function vs(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
          } catch (s) {
            K(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              K(t, l, s);
            }
          }
          var o = t.return;
          try {
            bo(t);
          } catch (s) {
            K(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            bo(t);
          } catch (s) {
            K(t, i, s);
          }
      }
    } catch (s) {
      K(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (E = u);
      break;
    }
    E = t.return;
  }
}
var Hp = Math.ceil,
  cl = $e.ReactCurrentDispatcher,
  Yi = $e.ReactCurrentOwner,
  Ne = $e.ReactCurrentBatchConfig,
  M = 0,
  ee = null,
  J = null,
  ne = 0,
  ge = 0,
  bt = xt(0),
  q = 0,
  or = null,
  Mt = 0,
  jl = 0,
  qi = 0,
  Hn = null,
  de = null,
  $i = 0,
  pn = 1 / 0,
  We = null,
  fl = !1,
  ni = null,
  pt = null,
  Lr = !1,
  it = null,
  dl = 0,
  Qn = 0,
  ri = null,
  Qr = -1,
  Wr = 0;
function ae() {
  return M & 6 ? Z() : Qr !== -1 ? Qr : (Qr = Z());
}
function ht(e) {
  return e.mode & 1
    ? M & 2 && ne !== 0
      ? ne & -ne
      : Ep.transition !== null
      ? (Wr === 0 && (Wr = Ca()), Wr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Aa(e.type))),
        e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (ri = null), Error(C(185)));
  ar(e, n, r),
    (!(M & 2) || e !== ee) &&
      (e === ee && (!(M & 2) && (jl |= n), q === 4 && lt(e, ne)),
      ve(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((pn = Z() + 500), kl && St()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Ed(e, t);
  var r = Xr(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && Pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pu(n), t === 1))
      e.tag === 0 ? kp(gs.bind(null, e)) : Ja(gs.bind(null, e)),
        wp(function () {
          !(M & 6) && St();
        }),
        (n = null);
    else {
      switch (ka(r)) {
        case 1:
          n = Ei;
          break;
        case 4:
          n = xa;
          break;
        case 16:
          n = Jr;
          break;
        case 536870912:
          n = Sa;
          break;
        default:
          n = Jr;
      }
      n = Zc(n, Vc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vc(e, t) {
  if (((Qr = -1), (Wr = 0), M & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (on() && e.callbackNode !== n) return null;
  var r = Xr(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = Qc();
    (ee !== e || ne !== t) && ((We = null), (pn = Z() + 500), Rt(e, t));
    do
      try {
        Kp();
        break;
      } catch (u) {
        Hc(e, u);
      }
    while (1);
    Ui(),
      (cl.current = o),
      (M = l),
      J !== null ? (t = 0) : ((ee = null), (ne = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ro(e)), l !== 0 && ((r = l), (t = li(e, l)))), t === 1)
    )
      throw ((n = or), Rt(e, 0), lt(e, r), ve(e, Z()), n);
    if (t === 6) lt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Qp(l) &&
          ((t = pl(e, r)),
          t === 2 && ((o = Ro(e)), o !== 0 && ((r = o), (t = li(e, o)))),
          t === 1))
      )
        throw ((n = or), Rt(e, 0), lt(e, r), ve(e, Z()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Nt(e, de, We);
          break;
        case 3:
          if (
            (lt(e, r), (r & 130023424) === r && ((t = $i + 500 - Z()), 10 < t))
          ) {
            if (Xr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Do(Nt.bind(null, e, de, We), t);
            break;
          }
          Nt(e, de, We);
          break;
        case 4:
          if ((lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Hp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Do(Nt.bind(null, e, de, We), r);
            break;
          }
          Nt(e, de, We);
          break;
        case 5:
          Nt(e, de, We);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return ve(e, Z()), e.callbackNode === n ? Vc.bind(null, e) : null;
}
function li(e, t) {
  var n = Hn;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && oi(t)),
    e
  );
}
function oi(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function Qp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function lt(e, t) {
  for (
    t &= ~qi,
      t &= ~jl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gs(e) {
  if (M & 6) throw Error(C(327));
  on();
  var t = Xr(e, 0);
  if (!(t & 1)) return ve(e, Z()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ro(e);
    r !== 0 && ((t = r), (n = li(e, r)));
  }
  if (n === 1) throw ((n = or), Rt(e, 0), lt(e, t), ve(e, Z()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nt(e, de, We),
    ve(e, Z()),
    null
  );
}
function bi(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((pn = Z() + 500), kl && St());
  }
}
function Ft(e) {
  it !== null && it.tag === 0 && !(M & 6) && on();
  var t = M;
  M |= 1;
  var n = Ne.transition,
    r = F;
  try {
    if (((Ne.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Ne.transition = n), (M = t), !(M & 6) && St();
  }
}
function eu() {
  (ge = bt.current), B(bt);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yp(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((Ii(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && el();
          break;
        case 3:
          fn(), B(he), B(ue), Wi();
          break;
        case 5:
          Qi(r);
          break;
        case 4:
          fn();
          break;
        case 13:
          B(H);
          break;
        case 19:
          B(H);
          break;
        case 10:
          Di(r.type._context);
          break;
        case 22:
        case 23:
          eu();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (J = e = mt(e.current, null)),
    (ne = ge = t),
    (q = 0),
    (or = null),
    (qi = jl = Mt = 0),
    (de = Hn = null),
    Ot !== null)
  ) {
    for (t = 0; t < Ot.length; t++)
      if (((n = Ot[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ot = null;
  }
  return e;
}
function Hc(e, t) {
  do {
    var n = J;
    try {
      if ((Ui(), (Br.current = al), sl)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        sl = !1;
      }
      if (
        ((It = 0),
        (b = Y = Q = null),
        (Bn = !1),
        (nr = 0),
        (Yi.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (or = t), (J = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ne),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            d = u,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = ls(i);
          if (x !== null) {
            (x.flags &= -257),
              os(x, i, u, o, t),
              x.mode & 1 && rs(o, a, t),
              (t = x),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              rs(o, a, t), tu();
              break e;
            }
            s = Error(C(426));
          }
        } else if (V && u.mode & 1) {
          var j = ls(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              os(j, i, u, o, t),
              Mi(dn(s, u));
            break e;
          }
        }
        (o = s = dn(s, u)),
          q !== 4 && (q = 2),
          Hn === null ? (Hn = [o]) : Hn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ec(o, s, t);
              Yu(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (pt === null || !pt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Pc(o, u, t);
                Yu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Kc(n);
    } catch (k) {
      (t = k), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Qc() {
  var e = cl.current;
  return (cl.current = al), e === null ? al : e;
}
function tu() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    ee === null || (!(Mt & 268435455) && !(jl & 268435455)) || lt(ee, ne);
}
function pl(e, t) {
  var n = M;
  M |= 2;
  var r = Qc();
  (ee !== e || ne !== t) && ((We = null), Rt(e, t));
  do
    try {
      Wp();
      break;
    } catch (l) {
      Hc(e, l);
    }
  while (1);
  if ((Ui(), (M = n), (cl.current = r), J !== null)) throw Error(C(261));
  return (ee = null), (ne = 0), q;
}
function Wp() {
  for (; J !== null; ) Wc(J);
}
function Kp() {
  for (; J !== null && !md(); ) Wc(J);
}
function Wc(e) {
  var t = Gc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Kc(e) : (J = t),
    (Yi.current = null);
}
function Kc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Up(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (J = null);
        return;
      }
    } else if (((n = Fp(n, t, ge)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Nt(e, t, n) {
  var r = F,
    l = Ne.transition;
  try {
    (Ne.transition = null), (F = 1), _p(e, t, n, r);
  } finally {
    (Ne.transition = l), (F = r);
  }
  return null;
}
function _p(e, t, n, r) {
  do on();
  while (it !== null);
  if (M & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Pd(e, o),
    e === ee && ((J = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lr ||
      ((Lr = !0),
      Zc(Jr, function () {
        return on(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var i = F;
    F = 1;
    var u = M;
    (M |= 4),
      (Yi.current = null),
      Bp(e, n),
      Dc(n, e),
      fp(Fo),
      (Yr = !!Mo),
      (Fo = Mo = null),
      (e.current = n),
      Vp(n),
      vd(),
      (M = u),
      (F = i),
      (Ne.transition = o);
  } else e.current = n;
  if (
    (Lr && ((Lr = !1), (it = e), (dl = l)),
    (o = e.pendingLanes),
    o === 0 && (pt = null),
    wd(n.stateNode),
    ve(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw ((fl = !1), (e = ni), (ni = null), e);
  return (
    dl & 1 && e.tag !== 0 && on(),
    (o = e.pendingLanes),
    o & 1 ? (e === ri ? Qn++ : ((Qn = 0), (ri = e))) : (Qn = 0),
    St(),
    null
  );
}
function on() {
  if (it !== null) {
    var e = ka(dl),
      t = Ne.transition,
      n = F;
    try {
      if (((Ne.transition = null), (F = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (dl = 0), M & 6)) throw Error(C(331));
        var l = M;
        for (M |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (E = a; E !== null; ) {
                  var d = E;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, d, o);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (E = m);
                  else
                    for (; E !== null; ) {
                      d = E;
                      var h = d.sibling,
                        x = d.return;
                      if ((Mc(d), d === a)) {
                        E = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (E = h);
                        break;
                      }
                      E = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var j = y.sibling;
                    (y.sibling = null), (y = j);
                  } while (y !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (E = p);
          else
            e: for (i = c; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nl(9, u);
                  }
                } catch (k) {
                  K(u, u.return, k);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (E = g);
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((M = l), St(), He && typeof He.onPostCommitFiberRoot == "function")
        )
          try {
            He.onPostCommitFiberRoot(yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Ne.transition = t);
    }
  }
  return !1;
}
function ys(e, t, n) {
  (t = dn(n, t)),
    (t = Ec(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = ae()),
    e !== null && (ar(e, 1, t), ve(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) ys(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ys(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pt === null || !pt.has(r)))
        ) {
          (e = dn(n, e)),
            (e = Pc(t, e, 1)),
            (t = dt(t, e, 1)),
            (e = ae()),
            t !== null && (ar(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Gp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (q === 4 || (q === 3 && (ne & 130023424) === ne && 500 > Z() - $i)
        ? Rt(e, 0)
        : (qi |= n)),
    ve(e, t);
}
function _c(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Sr), (Sr <<= 1), !(Sr & 130023424) && (Sr = 4194304))
      : (t = 1));
  var n = ae();
  (e = Ye(e, t)), e !== null && (ar(e, t, n), ve(e, n));
}
function Zp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _c(e, n);
}
function Jp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), _c(e, n);
}
var Gc;
Gc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), Mp(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), V && t.flags & 1048576 && Xa(t, rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hr(e, t), (e = t.pendingProps);
      var l = sn(t, ue.current);
      ln(t, n), (l = _i(null, t, r, e, l, n));
      var o = Gi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), tl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Vi(t),
            (l.updater = El),
            (t.stateNode = l),
            (l._reactInternals = t),
            _o(t, r, e, n),
            (t = Jo(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && Ti(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Yp(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = Zo(null, t, r, e, n);
            break e;
          case 1:
            t = ss(null, t, r, e, n);
            break e;
          case 11:
            t = is(null, t, r, e, n);
            break e;
          case 14:
            t = us(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Zo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        ss(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ac(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ba(e, t),
          il(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = dn(Error(C(423)), t)), (t = as(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = dn(Error(C(424)), t)), (t = as(e, t, r, n, l));
            break e;
          } else
            for (
              ye = ft(t.stateNode.containerInfo.firstChild),
                we = t,
                V = !0,
                Te = null,
                n = rc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((an(), r === l)) {
            t = qe(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        lc(t),
        e === null && Qo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Uo(r, l) ? (i = null) : o !== null && Uo(r, o) && (t.flags |= 32),
        Oc(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Qo(t), null;
    case 13:
      return Rc(e, t, n);
    case 4:
      return (
        Hi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        is(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          U(ll, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ue(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = qe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ze(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Wo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Wo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ln(t, n),
        (l = je(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        us(e, t, r, l, n)
      );
    case 15:
      return Nc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Hr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), tl(t)) : (e = !1),
        ln(t, n),
        tc(t, r, l),
        _o(t, r, l, n),
        Jo(null, t, r, !0, e, n)
      );
    case 19:
      return Lc(e, t, n);
    case 22:
      return jc(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Zc(e, t) {
  return wa(e, t);
}
function Xp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pe(e, t, n, r) {
  return new Xp(e, t, n, r);
}
function nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yp(e) {
  if (typeof e == "function") return nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Si)) return 11;
    if (e === Ci) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Kr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) nu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Wt:
        return Lt(n.children, l, o, t);
      case xi:
        (i = 8), (l |= 8);
        break;
      case mo:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = mo), (e.lanes = o), e
        );
      case vo:
        return (e = Pe(13, n, t, l)), (e.elementType = vo), (e.lanes = o), e;
      case go:
        return (e = Pe(19, n, t, l)), (e.elementType = go), (e.lanes = o), e;
      case na:
        return Ol(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ea:
              i = 10;
              break e;
            case ta:
              i = 9;
              break e;
            case Si:
              i = 11;
              break e;
            case Ci:
              i = 14;
              break e;
            case tt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Lt(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function Ol(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = na),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function so(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function ao(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function qp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wl(0)),
    (this.expirationTimes = Wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ru(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new qp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Pe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vi(o),
    e
  );
}
function $p(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jc(e) {
  if (!e) return yt;
  e = e._reactInternals;
  e: {
    if (Dt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return Za(e, n, t);
  }
  return t;
}
function Xc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = ru(n, r, !0, e, l, o, i, u, s)),
    (e.context = Jc(null)),
    (n = e.current),
    (r = ae()),
    (l = ht(n)),
    (o = Ze(r, l)),
    (o.callback = t ?? null),
    dt(n, o, l),
    (e.current.lanes = l),
    ar(e, l, r),
    ve(e, r),
    e
  );
}
function Al(e, t, n, r) {
  var l = t.current,
    o = ae(),
    i = ht(l);
  return (
    (n = Jc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(l, t, i)),
    e !== null && (Fe(e, l, i, o), Dr(e, l, i)),
    i
  );
}
function hl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ws(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lu(e, t) {
  ws(e, t), (e = e.alternate) && ws(e, t);
}
function bp() {
  return null;
}
var Yc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ou(e) {
  this._internalRoot = e;
}
Rl.prototype.render = ou.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Al(e, t, null, null);
};
Rl.prototype.unmount = ou.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ft(function () {
      Al(null, e, null, null);
    }),
      (t[Xe] = null);
  }
};
function Rl(e) {
  this._internalRoot = e;
}
Rl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Na();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++);
    rt.splice(n, 0, e), n === 0 && Oa(e);
  }
};
function iu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xs() {}
function eh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = hl(i);
        o.call(a);
      };
    }
    var i = Xc(t, r, e, 0, null, !1, !1, "", xs);
    return (
      (e._reactRootContainer = i),
      (e[Xe] = i.current),
      qn(e.nodeType === 8 ? e.parentNode : e),
      Ft(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = hl(s);
      u.call(a);
    };
  }
  var s = ru(e, 0, !1, null, null, !1, !1, "", xs);
  return (
    (e._reactRootContainer = s),
    (e[Xe] = s.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    Ft(function () {
      Al(t, s, n, r);
    }),
    s
  );
}
function zl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = hl(i);
        u.call(s);
      };
    }
    Al(t, i, e, l);
  } else i = eh(n, t, e, l, r);
  return hl(i);
}
Ea = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 &&
          (Pi(t, n | 1), ve(t, Z()), !(M & 6) && ((pn = Z() + 500), St()));
      }
      break;
    case 13:
      Ft(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ae();
          Fe(r, e, 1, l);
        }
      }),
        lu(e, 1);
  }
};
Ni = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ae();
      Fe(t, e, 134217728, n);
    }
    lu(e, 134217728);
  }
};
Pa = function (e) {
  if (e.tag === 13) {
    var t = ht(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = ae();
      Fe(n, e, t, r);
    }
    lu(e, t);
  }
};
Na = function () {
  return F;
};
ja = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
jo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Cl(r);
            if (!l) throw Error(C(90));
            la(r), xo(r, l);
          }
        }
      }
      break;
    case "textarea":
      ia(e, n);
      break;
    case "select":
      (t = n.value), t != null && en(e, !!n.multiple, t, !1);
  }
};
pa = bi;
ha = Ft;
var th = { usingClientEntryPoint: !1, Events: [fr, Zt, Cl, fa, da, bi] },
  An = {
    findFiberByHostInstance: jt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  nh = {
    bundleType: An.bundleType,
    version: An.version,
    rendererPackageName: An.rendererPackageName,
    rendererConfig: An.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $e.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ga(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: An.findFiberByHostInstance || bp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      (yl = zr.inject(nh)), (He = zr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = th;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!iu(t)) throw Error(C(200));
  return $p(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!iu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = Yc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ru(e, 1, !1, null, null, n, !1, r, l)),
    (e[Xe] = t.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    new ou(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = ga(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Ft(e);
};
Se.hydrate = function (e, t, n) {
  if (!Ll(t)) throw Error(C(200));
  return zl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!iu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Yc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Xc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Xe] = t.current),
    qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Rl(t);
};
Se.render = function (e, t, n) {
  if (!Ll(t)) throw Error(C(200));
  return zl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Ll(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Ft(function () {
        zl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xe] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = bi;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ll(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return zl(e, t, n, !1, r);
};
Se.version = "18.2.0-next-9e3b772b8-20220608";
function qc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qc);
    } catch (e) {
      console.error(e);
    }
}
qc(), (Xs.exports = Se);
var rh = Xs.exports,
  Ss = rh;
(po.createRoot = Ss.createRoot), (po.hydrateRoot = Ss.hydrateRoot);
var $c = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], l = 0; l < arguments.length; l++) {
        var o = arguments[l];
        if (o) {
          var i = typeof o;
          if (i === "string" || i === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var u = n.apply(null, o);
              u && r.push(u);
            }
          } else if (i === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var s in o) t.call(o, s) && o[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})($c);
var lh = $c.exports;
const Bt = Us(lh),
  oh = ["xxl", "xl", "lg", "md", "sm", "xs"],
  ih = "xs",
  uh = S.createContext({ prefixes: {}, breakpoints: oh, minBreakpoint: ih });
function gn(e, t) {
  const { prefixes: n } = S.useContext(uh);
  return e || n[t] || t;
}
var sh = /-(.)/g;
function ah(e) {
  return e.replace(sh, function (t, n) {
    return n.toUpperCase();
  });
}
const ch = (e) => e[0].toUpperCase() + ah(e).slice(1);
function Ct(e, { displayName: t = ch(e), Component: n, defaultProps: r } = {}) {
  const l = S.forwardRef(
    ({ className: o, bsPrefix: i, as: u = n || "div", ...s }, a) => {
      const d = { ...r, ...s },
        m = gn(i, e);
      return v.jsx(u, { ref: a, className: Bt(o, m), ...d });
    }
  );
  return (l.displayName = t), l;
}
const bc = (e) =>
    S.forwardRef((t, n) =>
      v.jsx("div", { ...t, ref: n, className: Bt(t.className, e) })
    ),
  ef = S.forwardRef(
    ({ bsPrefix: e, className: t, variant: n, as: r = "img", ...l }, o) => {
      const i = gn(e, "card-img");
      return v.jsx(r, { ref: o, className: Bt(n ? `${i}-${n}` : i, t), ...l });
    }
  );
ef.displayName = "CardImg";
const fh = ef,
  tf = S.createContext(null);
tf.displayName = "CardHeaderContext";
const nf = tf,
  rf = S.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, l) => {
    const o = gn(e, "card-header"),
      i = S.useMemo(() => ({ cardHeaderBsPrefix: o }), [o]);
    return v.jsx(nf.Provider, {
      value: i,
      children: v.jsx(n, { ref: l, ...r, className: Bt(t, o) }),
    });
  });
rf.displayName = "CardHeader";
const dh = rf,
  ph = bc("h5"),
  hh = bc("h6"),
  lf = Ct("card-body"),
  mh = Ct("card-title", { Component: ph }),
  vh = Ct("card-subtitle", { Component: hh }),
  gh = Ct("card-link", { Component: "a" }),
  yh = Ct("card-text", { Component: "p" }),
  wh = Ct("card-footer"),
  xh = Ct("card-img-overlay"),
  of = S.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: l,
        body: o = !1,
        children: i,
        as: u = "div",
        ...s
      },
      a
    ) => {
      const d = gn(e, "card");
      return v.jsx(u, {
        ref: a,
        ...s,
        className: Bt(
          t,
          d,
          n && `bg-${n}`,
          r && `text-${r}`,
          l && `border-${l}`
        ),
        children: o ? v.jsx(lf, { children: i }) : i,
      });
    }
  );
of.displayName = "Card";
const R = Object.assign(of, {
  Img: fh,
  Title: mh,
  Subtitle: vh,
  Body: lf,
  Link: gh,
  Text: yh,
  Header: dh,
  Footer: wh,
  ImgOverlay: xh,
});
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ir() {
  return (
    (ir = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ir.apply(this, arguments)
  );
}
var ut;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ut || (ut = {}));
const Cs = "popstate";
function Sh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ii(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : ml(l);
  }
  return kh(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function uu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ch() {
  return Math.random().toString(36).substr(2, 8);
}
function ks(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ii(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ir(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? yn(t) : t,
      { state: n, key: (t && t.key) || r || Ch() }
    )
  );
}
function ml(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function kh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = ut.Pop,
    s = null,
    a = d();
  a == null && ((a = 0), i.replaceState(ir({}, i.state, { idx: a }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    u = ut.Pop;
    let j = d(),
      f = j == null ? null : j - a;
    (a = j), s && s({ action: u, location: y.location, delta: f });
  }
  function h(j, f) {
    u = ut.Push;
    let c = ii(y.location, j, f);
    n && n(c, j), (a = d() + 1);
    let p = ks(c, a),
      g = y.createHref(c);
    try {
      i.pushState(p, "", g);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(g);
    }
    o && s && s({ action: u, location: y.location, delta: 1 });
  }
  function x(j, f) {
    u = ut.Replace;
    let c = ii(y.location, j, f);
    n && n(c, j), (a = d());
    let p = ks(c, a),
      g = y.createHref(c);
    i.replaceState(p, "", g),
      o && s && s({ action: u, location: y.location, delta: 0 });
  }
  function w(j) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof j == "string" ? j : ml(j);
    return (
      X(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(j) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Cs, m),
        (s = j),
        () => {
          l.removeEventListener(Cs, m), (s = null);
        }
      );
    },
    createHref(j) {
      return t(l, j);
    },
    createURL: w,
    encodeLocation(j) {
      let f = w(j);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: h,
    replace: x,
    go(j) {
      return i.go(j);
    },
  };
  return y;
}
var Es;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Es || (Es = {}));
function Eh(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? yn(t) : t,
    l = su(r.pathname || "/", n);
  if (l == null) return null;
  let o = uf(e);
  Ph(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Ih(o[u], Uh(l));
  return i;
}
function uf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (X(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = vt([r, s.relativePath]),
      d = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      uf(o.children, t, d, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: zh(a, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of sf(o.path)) l(o, i, s);
    }),
    t
  );
}
function sf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = sf(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Ph(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Th(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Nh = /^:\w+$/,
  jh = 3,
  Oh = 2,
  Ah = 1,
  Rh = 10,
  Lh = -2,
  Ps = (e) => e === "*";
function zh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ps) && (r += Lh),
    t && (r += Oh),
    n
      .filter((l) => !Ps(l))
      .reduce((l, o) => l + (Nh.test(o) ? jh : o === "" ? Ah : Rh), r)
  );
}
function Th(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ih(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      d = Mh(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let m = u.route;
    o.push({
      params: r,
      pathname: vt([l, d.pathname]),
      pathnameBase: Hh(vt([l, d.pathnameBase])),
      route: m,
    }),
      d.pathnameBase !== "/" && (l = vt([l, d.pathnameBase]));
  }
  return o;
}
function Mh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Fh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, d, m) => {
      if (d === "*") {
        let h = u[m] || "";
        i = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (a[d] = Dh(u[m] || "", d)), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Fh(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    uu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Uh(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      uu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Dh(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      uu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function su(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Bh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? yn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Vh(n, t)) : t,
    search: Qh(r),
    hash: Wh(l),
  };
}
function Vh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function co(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function af(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function cf(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = yn(e))
    : ((l = ir({}, e)),
      X(
        !l.pathname || !l.pathname.includes("?"),
        co("?", "pathname", "search", l)
      ),
      X(
        !l.pathname || !l.pathname.includes("#"),
        co("#", "pathname", "hash", l)
      ),
      X(!l.search || !l.search.includes("#"), co("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let m = t.length - 1;
    if (i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (m -= 1);
      l.pathname = h.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let s = Bh(l, u),
    a = i && i !== "/" && i.endsWith("/"),
    d = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || d) && (s.pathname += "/"), s;
}
const vt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Hh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Qh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Wh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Kh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ff = ["post", "put", "patch", "delete"];
new Set(ff);
const _h = ["get", ...ff];
new Set(_h);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vl() {
  return (
    (vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vl.apply(this, arguments)
  );
}
const au = S.createContext(null),
  Gh = S.createContext(null),
  wn = S.createContext(null),
  Tl = S.createContext(null),
  Vt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  df = S.createContext(null);
function Zh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  pr() || X(!1);
  let { basename: r, navigator: l } = S.useContext(wn),
    { hash: o, pathname: i, search: u } = hf(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : vt([r, i])),
    l.createHref({ pathname: s, search: u, hash: o })
  );
}
function pr() {
  return S.useContext(Tl) != null;
}
function Il() {
  return pr() || X(!1), S.useContext(Tl).location;
}
function pf(e) {
  S.useContext(wn).static || S.useLayoutEffect(e);
}
function Jh() {
  let { isDataRoute: e } = S.useContext(Vt);
  return e ? um() : Xh();
}
function Xh() {
  pr() || X(!1);
  let e = S.useContext(au),
    { basename: t, navigator: n } = S.useContext(wn),
    { matches: r } = S.useContext(Vt),
    { pathname: l } = Il(),
    o = JSON.stringify(af(r).map((s) => s.pathnameBase)),
    i = S.useRef(!1);
  return (
    pf(() => {
      i.current = !0;
    }),
    S.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !i.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let d = cf(s, JSON.parse(o), l, a.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : vt([t, d.pathname])),
          (a.replace ? n.replace : n.push)(d, a.state, a);
      },
      [t, n, o, l, e]
    )
  );
}
function hf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(Vt),
    { pathname: l } = Il(),
    o = JSON.stringify(af(r).map((i) => i.pathnameBase));
  return S.useMemo(() => cf(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Yh(e, t) {
  return qh(e, t);
}
function qh(e, t, n) {
  pr() || X(!1);
  let { navigator: r } = S.useContext(wn),
    { matches: l } = S.useContext(Vt),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Il(),
    a;
  if (t) {
    var d;
    let y = typeof t == "string" ? yn(t) : t;
    u === "/" || ((d = y.pathname) != null && d.startsWith(u)) || X(!1),
      (a = y);
  } else a = s;
  let m = a.pathname || "/",
    h = u === "/" ? m : m.slice(u.length) || "/",
    x = Eh(e, { pathname: h }),
    w = nm(
      x &&
        x.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: vt([
              u,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? u
                : vt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && w
    ? S.createElement(
        Tl.Provider,
        {
          value: {
            location: vl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              a
            ),
            navigationType: ut.Pop,
          },
        },
        w
      )
    : w;
}
function $h() {
  let e = im(),
    t = Kh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: l }, n) : null,
    o
  );
}
const bh = S.createElement($h, null);
class em extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          Vt.Provider,
          { value: this.props.routeContext },
          S.createElement(df.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function tm(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = S.useContext(au);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Vt.Provider, { value: t }, r)
  );
}
function nm(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id])
    );
    u >= 0 || X(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, s, a) => {
    let d = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      m = null;
    n && (m = s.route.errorElement || bh);
    let h = t.concat(o.slice(0, a + 1)),
      x = () => {
        let w;
        return (
          d
            ? (w = m)
            : s.route.Component
            ? (w = S.createElement(s.route.Component, null))
            : s.route.element
            ? (w = s.route.element)
            : (w = u),
          S.createElement(tm, {
            match: s,
            routeContext: { outlet: u, matches: h, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? S.createElement(em, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: d,
          children: x(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var ui;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(ui || (ui = {}));
var ur;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(ur || (ur = {}));
function rm(e) {
  let t = S.useContext(au);
  return t || X(!1), t;
}
function lm(e) {
  let t = S.useContext(Gh);
  return t || X(!1), t;
}
function om(e) {
  let t = S.useContext(Vt);
  return t || X(!1), t;
}
function mf(e) {
  let t = om(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function im() {
  var e;
  let t = S.useContext(df),
    n = lm(ur.UseRouteError),
    r = mf(ur.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function um() {
  let { router: e } = rm(ui.UseNavigateStable),
    t = mf(ur.UseNavigateStable),
    n = S.useRef(!1);
  return (
    pf(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, vl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function et(e) {
  X(!1);
}
function sm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ut.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  pr() && X(!1);
  let u = t.replace(/^\/*/, "/"),
    s = S.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = yn(r));
  let {
      pathname: a = "/",
      search: d = "",
      hash: m = "",
      state: h = null,
      key: x = "default",
    } = r,
    w = S.useMemo(() => {
      let y = su(a, u);
      return y == null
        ? null
        : {
            location: { pathname: y, search: d, hash: m, state: h, key: x },
            navigationType: l,
          };
    }, [u, a, d, m, h, x, l]);
  return w == null
    ? null
    : S.createElement(
        wn.Provider,
        { value: s },
        S.createElement(Tl.Provider, { children: n, value: w })
      );
}
function am(e) {
  let { children: t, location: n } = e;
  return Yh(si(t), n);
}
var Ns;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ns || (Ns = {}));
new Promise(() => {});
function si(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, l) => {
      if (!S.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === S.Fragment) {
        n.push.apply(n, si(r.props.children, o));
        return;
      }
      r.type !== et && X(!1), !r.props.index || !r.props.children || X(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = si(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ai() {
  return (
    (ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ai.apply(this, arguments)
  );
}
function cm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function fm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function dm(e, t) {
  return e.button === 0 && (!t || t === "_self") && !fm(e);
}
const pm = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  hm = "startTransition",
  js = Zf[hm];
function mm(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = S.useRef();
  o.current == null && (o.current = Sh({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = S.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    d = S.useCallback(
      (m) => {
        a && js ? js(() => s(m)) : s(m);
      },
      [s, a]
    );
  return (
    S.useLayoutEffect(() => i.listen(d), [i, d]),
    S.createElement(sm, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  );
}
const vm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  gm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ie = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: d,
      } = t,
      m = cm(t, pm),
      { basename: h } = S.useContext(wn),
      x,
      w = !1;
    if (typeof a == "string" && gm.test(a) && ((x = a), vm))
      try {
        let c = new URL(window.location.href),
          p = a.startsWith("//") ? new URL(c.protocol + a) : new URL(a),
          g = su(p.pathname, h);
        p.origin === c.origin && g != null
          ? (a = g + p.search + p.hash)
          : (w = !0);
      } catch {}
    let y = Zh(a, { relative: l }),
      j = ym(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: d,
        relative: l,
      });
    function f(c) {
      r && r(c), c.defaultPrevented || j(c);
    }
    return S.createElement(
      "a",
      ai({}, m, { href: x || y, onClick: w || o ? r : f, ref: n, target: s })
    );
  });
var Os;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Os || (Os = {}));
var As;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(As || (As = {}));
function ym(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = Jh(),
    s = Il(),
    a = hf(e, { relative: i });
  return S.useCallback(
    (d) => {
      if (dm(d, n)) {
        d.preventDefault();
        let m = r !== void 0 ? r : ml(s) === ml(a);
        u(e, { replace: m, state: l, preventScrollReset: o, relative: i });
      }
    },
    [s, u, a, r, l, n, e, o, i]
  );
}
function wm() {
  return v.jsxs("div", {
    className: "MainContainer-matiere",
    children: [
      v.jsx(R, {
        children: v.jsxs(Ie, {
          to: "/Maths",
          children: [
            v.jsx(R.Img, {
              variant: "top",
              src: "https://claq.fr/host/math.png",
              className: "icon",
            }),
            v.jsxs(R.Body, {
              children: [
                v.jsx(R.Title, { children: "Maths" }),
                v.jsx(R.Text, {
                  children:
                    "Ressources pour réussir les maths en Peip1 et Peip2, en DS et en Khôlles.",
                }),
                v.jsx("a", {
                  href: "https://google.com",
                  className: "btn btn-primary stretched-link",
                }),
              ],
            }),
            v.jsx(R.Footer, {
              children: v.jsx("small", {
                className: "text-muted",
                children: "Td, annales, exos ",
              }),
            }),
          ],
        }),
      }),
      v.jsx(R, {
        children: v.jsxs(Ie, {
          to: "/Info",
          children: [
            v.jsx(R.Img, {
              variant: "top",
              src: "https://claq.fr/host/computer-science.png",
            }),
            v.jsxs(R.Body, {
              children: [
                v.jsx(R.Title, { children: "Info" }),
                v.jsx(R.Text, {
                  children:
                    "Ressources pour la programmation en C++, PHP et web en général.",
                }),
              ],
            }),
            v.jsx(R.Footer, {
              children: v.jsx("small", {
                className: "text-muted",
                children: "Guides, conseils, tutos",
              }),
            }),
          ],
        }),
      }),
      v.jsx(R, {
        children: v.jsxs(Ie, {
          to: "/SDM",
          children: [
            v.jsx(R.Img, {
              variant: "top",
              src: "https://claq.fr/host/ballon.png",
            }),
            v.jsxs(R.Body, {
              children: [
                v.jsx(R.Title, { children: "SDM" }),
                v.jsx(R.Text, {
                  children:
                    "Ressources pour la SDM (science de la matière) en peip1 et peip2.",
                }),
              ],
            }),
            v.jsx(R.Footer, {
              children: v.jsx("small", {
                className: "text-muted",
                children: "Tips, annales, vidéos",
              }),
            }),
          ],
        }),
      }),
      v.jsx(R, {
        children: v.jsxs(Ie, {
          to: "/Orientation",
          children: [
            v.jsx(R.Img, {
              variant: "top",
              src: "https://claq.fr/host/boussole.png",
            }),
            v.jsxs(R.Body, {
              children: [
                v.jsx(R.Title, { children: "Orientation" }),
                v.jsx(R.Text, {
                  children:
                    "Ressources pour l'orientation/l'alternance en peip1 et peip2.",
                }),
              ],
            }),
            v.jsx(R.Footer, {
              children: v.jsx("small", {
                className: "text-muted",
                children: "Liens et guides",
              }),
            }),
          ],
        }),
      }),
      v.jsx(R, {
        children: v.jsxs(Ie, {
          to: "/Autres",
          children: [
            v.jsx(R.Img, {
              variant: "top",
              src: "https://claq.fr/host/autre.png",
            }),
            v.jsxs(R.Body, {
              children: [
                v.jsx(R.Title, { children: "Autres" }),
                v.jsx(R.Text, {
                  children:
                    "Ressources en vrac pour faciliter la Peip1 et la Peip2",
                }),
              ],
            }),
            v.jsx(R.Footer, {
              children: v.jsx("small", {
                className: "text-muted",
                children: "Tableur de validation, bons plans",
              }),
            }),
          ],
        }),
      }),
      v.jsx(R, {
        children: v.jsxs(Ie, {
          to: "https://claq.fr/PolyNetwork",
          children: [
            v.jsx(R.Img, {
              variant: "top",
              src: "https://static.wikia.nocookie.net/c1bdc9f0-538c-4502-81ba-6dcf33c1f7d7/scale-to-width/755",
            }),
            v.jsxs(R.Body, {
              children: [
                v.jsx(R.Title, { children: "PolyNetwork" }),
                v.jsx(R.Text, { children: "Nouveau | non affilié à Polytech" }),
              ],
            }),
            v.jsx(R.Footer, {
              children: v.jsx("small", {
                className: "text-muted",
                style: { fontSize: "0.65rem", margin: "0px", padding: "0px" },
                children:
                  "Créé par des étudiants de Polytech Lyon, afin de se construire un réseau professionnel dès la première année.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function vf() {
  return v.jsx(v.Fragment, {
    children: v.jsx("div", {
      className: "Footer",
      children: v.jsx("div", {
        className: "container-links",
        children: v.jsx("div", {
          children: "Fait avec amour par et pour les étudiants de Polytech ",
        }),
      }),
    }),
  });
}
function Rs() {
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx("div", { className: "MainContainer", children: v.jsx(wm, {}) }),
      v.jsx(vf, {}),
    ],
  });
}
function ci() {
  return (
    (ci = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ci.apply(this, arguments)
  );
}
function xm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Ls(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function Sm(e) {
  var t = Cm(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Cm(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function km(e, t, n) {
  var r = S.useRef(e !== void 0),
    l = S.useState(t),
    o = l[0],
    i = l[1],
    u = e !== void 0,
    s = r.current;
  return (
    (r.current = u),
    !u && s && o !== t && i(t),
    [
      u ? e : o,
      S.useCallback(
        function (a) {
          for (
            var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), h = 1;
            h < d;
            h++
          )
            m[h - 1] = arguments[h];
          n && n.apply(void 0, [a].concat(m)), i(a);
        },
        [n]
      ),
    ]
  );
}
function Em(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var l,
      o = n,
      i = o[Ls(r)],
      u = o[r],
      s = xm(o, [Ls(r), r].map(Sm)),
      a = t[r],
      d = km(u, i, e[a]),
      m = d[0],
      h = d[1];
    return ci({}, s, ((l = {}), (l[r] = m), (l[a] = h), l));
  }, e);
}
const zs = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function Pm(e, t) {
  const n = zs(e),
    r = zs(t);
  return (l) => {
    n && n(l), r && r(l);
  };
}
function Nm(e, t) {
  return S.useMemo(() => Pm(e, t), [e, t]);
}
function jm(e) {
  const t = S.useRef(e);
  return (
    S.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function gf(e) {
  const t = jm(e);
  return S.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const Om = ["as", "disabled"];
function Am(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Rm(e) {
  return !e || e.trim() === "#";
}
function yf({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: l,
  role: o,
  onClick: i,
  tabIndex: u = 0,
  type: s,
}) {
  e || (n != null || r != null || l != null ? (e = "a") : (e = "button"));
  const a = { tagName: e };
  if (e === "button") return [{ type: s || "button", disabled: t }, a];
  const d = (h) => {
      if (((t || (e === "a" && Rm(n))) && h.preventDefault(), t)) {
        h.stopPropagation();
        return;
      }
      i == null || i(h);
    },
    m = (h) => {
      h.key === " " && (h.preventDefault(), d(h));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: o ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : u,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? l : void 0,
        onClick: d,
        onKeyDown: m,
      },
      a,
    ]
  );
}
const wf = S.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    l = Am(e, Om);
  const [o, { tagName: i }] = yf(Object.assign({ tagName: n, disabled: r }, l));
  return v.jsx(i, Object.assign({}, l, o, { ref: t }));
});
wf.displayName = "Button";
const Lm = ["onKeyDown"];
function zm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Tm(e) {
  return !e || e.trim() === "#";
}
const xf = S.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = zm(e, Lm);
  const [l] = yf(Object.assign({ tagName: "a" }, r)),
    o = gf((i) => {
      l.onKeyDown(i), n == null || n(i);
    });
  return Tm(r.href) || r.role === "button"
    ? v.jsx("a", Object.assign({ ref: t }, r, l, { onKeyDown: o }))
    : v.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
xf.displayName = "Anchor";
const Im = xf;
var Mm = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Fm(e, t) {
  return Mm(e.querySelectorAll(t));
}
function Um() {
  const [, e] = S.useReducer((t) => !t, !1);
  return e;
}
const fi = S.createContext(null),
  cu = (e, t = null) => (e != null ? String(e) : t || null),
  Sf = S.createContext(null);
Sf.displayName = "NavContext";
const Cf = Sf,
  Dm = "data-rr-ui-",
  Bm = "rrUi";
function fu(e) {
  return `${Dm}${e}`;
}
function Vm(e) {
  return `${Bm}${e}`;
}
const kf = S.createContext(null);
kf.displayName = "NavbarContext";
const Hm = kf,
  Qm = S.createContext(null),
  Ef = Qm,
  Wm = ["as", "active", "eventKey"];
function Km(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Pf({ key: e, onClick: t, active: n, id: r, role: l, disabled: o }) {
  const i = S.useContext(fi),
    u = S.useContext(Cf),
    s = S.useContext(Ef);
  let a = n;
  const d = { role: l };
  if (u) {
    !l && u.role === "tablist" && (d.role = "tab");
    const m = u.getControllerId(e ?? null),
      h = u.getControlledId(e ?? null);
    (d[fu("event-key")] = e),
      (d.id = m || r),
      (a = n == null && e != null ? u.activeKey === e : n),
      (a ||
        (!(s != null && s.unmountOnExit) && !(s != null && s.mountOnEnter))) &&
        (d["aria-controls"] = h);
  }
  return (
    d.role === "tab" &&
      ((d["aria-selected"] = a),
      a || (d.tabIndex = -1),
      o && ((d.tabIndex = -1), (d["aria-disabled"] = !0))),
    (d.onClick = gf((m) => {
      o ||
        (t == null || t(m),
        e != null && i && !m.isPropagationStopped() && i(e, m));
    })),
    [d, { isActive: a }]
  );
}
const Nf = S.forwardRef((e, t) => {
  let { as: n = wf, active: r, eventKey: l } = e,
    o = Km(e, Wm);
  const [i, u] = Pf(Object.assign({ key: cu(l, o.href), active: r }, o));
  return (
    (i[fu("active")] = u.isActive),
    v.jsx(n, Object.assign({}, o, i, { ref: t }))
  );
});
Nf.displayName = "NavItem";
const _m = Nf,
  Gm = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function Zm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const Ts = () => {},
  Is = fu("event-key"),
  jf = S.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: l, role: o, onKeyDown: i } = e,
      u = Zm(e, Gm);
    const s = Um(),
      a = S.useRef(!1),
      d = S.useContext(fi),
      m = S.useContext(Ef);
    let h, x;
    m &&
      ((o = o || "tablist"),
      (l = m.activeKey),
      (h = m.getControlledId),
      (x = m.getControllerId));
    const w = S.useRef(null),
      y = (p) => {
        const g = w.current;
        if (!g) return null;
        const k = Fm(g, `[${Is}]:not([aria-disabled=true])`),
          N = g.querySelector("[aria-selected=true]");
        if (!N || N !== document.activeElement) return null;
        const O = k.indexOf(N);
        if (O === -1) return null;
        let A = O + p;
        return A >= k.length && (A = 0), A < 0 && (A = k.length - 1), k[A];
      },
      j = (p, g) => {
        p != null && (r == null || r(p, g), d == null || d(p, g));
      },
      f = (p) => {
        if ((i == null || i(p), !m)) return;
        let g;
        switch (p.key) {
          case "ArrowLeft":
          case "ArrowUp":
            g = y(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            g = y(1);
            break;
          default:
            return;
        }
        g &&
          (p.preventDefault(),
          j(g.dataset[Vm("EventKey")] || null, p),
          (a.current = !0),
          s());
      };
    S.useEffect(() => {
      if (w.current && a.current) {
        const p = w.current.querySelector(`[${Is}][aria-selected=true]`);
        p == null || p.focus();
      }
      a.current = !1;
    });
    const c = Nm(t, w);
    return v.jsx(fi.Provider, {
      value: j,
      children: v.jsx(Cf.Provider, {
        value: {
          role: o,
          activeKey: cu(l),
          getControlledId: h || Ts,
          getControllerId: x || Ts,
        },
        children: v.jsx(
          n,
          Object.assign({}, u, { onKeyDown: f, ref: c, role: o })
        ),
      }),
    });
  });
jf.displayName = "Nav";
const Jm = Object.assign(jf, { Item: _m });
var Ms = { exports: {} },
  di = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
  function n(r) {
    function l(i, u, s, a, d, m) {
      var h = a || "<<anonymous>>",
        x = m || s;
      if (u[s] == null)
        return i
          ? new Error(
              "Required " +
                d +
                " `" +
                x +
                "` was not specified " +
                ("in `" + h + "`.")
            )
          : null;
      for (
        var w = arguments.length, y = Array(w > 6 ? w - 6 : 0), j = 6;
        j < w;
        j++
      )
        y[j - 6] = arguments[j];
      return r.apply(void 0, [u, s, h, d, x].concat(y));
    }
    var o = l.bind(null, !1);
    return (o.isRequired = l.bind(null, !0)), o;
  }
  e.exports = t.default;
})(di, di.exports);
var Xm = di.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o);
  var n = Xm,
    r = l(n);
  function l(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function o() {
    for (var i = arguments.length, u = Array(i), s = 0; s < i; s++)
      u[s] = arguments[s];
    function a() {
      for (var d = arguments.length, m = Array(d), h = 0; h < d; h++)
        m[h] = arguments[h];
      var x = null;
      return (
        u.forEach(function (w) {
          if (x == null) {
            var y = w.apply(void 0, m);
            y != null && (x = y);
          }
        }),
        x
      );
    }
    return (0, r.default)(a);
  }
  e.exports = t.default;
})(Ms, Ms.exports);
const Ym = Ct("nav-item"),
  Of = S.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = Im,
        active: r,
        eventKey: l,
        disabled: o = !1,
        ...i
      },
      u
    ) => {
      e = gn(e, "nav-link");
      const [s, a] = Pf({ key: cu(l, i.href), active: r, disabled: o, ...i });
      return v.jsx(n, {
        ...i,
        ...s,
        ref: u,
        disabled: o,
        className: Bt(t, e, o && "disabled", a.isActive && "active"),
      });
    }
  );
Of.displayName = "NavLink";
const qm = Of,
  Af = S.forwardRef((e, t) => {
    const {
        as: n = "div",
        bsPrefix: r,
        variant: l,
        fill: o = !1,
        justify: i = !1,
        navbar: u,
        navbarScroll: s,
        className: a,
        activeKey: d,
        ...m
      } = Em(e, { activeKey: "onSelect" }),
      h = gn(r, "nav");
    let x,
      w,
      y = !1;
    const j = S.useContext(Hm),
      f = S.useContext(nf);
    return (
      j
        ? ((x = j.bsPrefix), (y = u ?? !0))
        : f && ({ cardHeaderBsPrefix: w } = f),
      v.jsx(Jm, {
        as: n,
        ref: t,
        activeKey: d,
        className: Bt(a, {
          [h]: !y,
          [`${x}-nav`]: y,
          [`${x}-nav-scroll`]: y && s,
          [`${w}-${l}`]: !!w,
          [`${h}-${l}`]: !!l,
          [`${h}-fill`]: o,
          [`${h}-justified`]: i,
        }),
        ...m,
      })
    );
  });
Af.displayName = "Nav";
const fo = Object.assign(Af, { Item: Ym, Link: qm });
function $m() {
  return v.jsxs("div", {
    className: "TopBar",
    children: [
      v.jsx("a", {
        href: "./pages/contact.html",
        className: "main-title",
        children: "Les Polyressources",
      }),
      v.jsxs(fo, {
        children: [
          v.jsx(fo.Item, {
            className: "nav-item-topbar",
            children: v.jsx(Ie, { to: "/", children: "Acceuil" }),
          }),
          v.jsx(fo.Item, {
            className: "nav-item-topbar",
            children: v.jsx("a", {
              href: "https://github.com/Claquettes/PolyRessources",
              children: "Github",
            }),
          }),
        ],
      }),
    ],
  });
}
const bm = [
    {
      title: "Livre de première année",
      description: "Le livre de Maths de peip1",
      link: "https://drive.google.com/file/d/1SD7Yn10jvb53u4HENwp56ucnyF9P6WJ1/view?pli=1",
      image:
        "https://media.electre-ng.com/images/image-id/0b8d3c34933c0268a509940b004b1e661e3185f458d4ed312ef5fc2d2ac11d52.jpg",
    },
    {
      title: "Annales CF avec correction PEIP1",
      description:
        "Annales des contrôles continus de maths avec correction de peip1",
      link: "https://drive.google.com/drive/folders/1R4Jynklt5mYGOwEQ9V2sGXQUAPYHmnwm",
      image:
        "https://mathspig.files.wordpress.com/2010/11/3-ihasafunny-cat-did-the-math-and-you-cannot-afford-the-dog1.jpg?w=584",
    },
    {
      title: "Bibmath",
      description:
        "Site de ressources de maths, exos corrigeés, cours, etc... pour réviser( licence) ou approfondir (prépa)",
      link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=mpsi/index",
      image: "https://www.bibmath.net/actu/images/exercices.jpg",
    },
  ],
  ev = () =>
    v.jsx(v.Fragment, {
      children: v.jsx("div", {
        className: "container",
        children: bm.map((e) =>
          v.jsx(R, {
            className: "mt-5",
            children: v.jsxs(Ie, {
              to: e.link,
              children: [
                v.jsx(R.Img, { variant: "top", src: e.image }),
                v.jsxs(R.Body, {
                  children: [
                    v.jsx(R.Title, { children: e.title }),
                    v.jsx(R.Text, { children: e.description }),
                  ],
                }),
              ],
            }),
          })
        ),
      }),
    }),
  tv = [
    {
      title: "Double Boot Linux Facile (sous titres francais)",
      description: "Vidéo",
      link: "https://www.youtube.com/watch?v=CWQMYN12QD0",
      image:
        "https://logos-marques.com/wp-content/uploads/2021/03/Linux-Logo-1996.png",
    },
    {
      title: " Installer Arch Linux (très avancé)",
      description: "Guide",
      link: "https://wiki.archlinux.org/title/Installation_guide",
      image:
        "data:image/png;base64,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",
    },
    {
      title: "Commandes INDISPENSABLES Linux",
      description: "Cheat Sheet",
      link: "http://juliend.github.io/linux-cheatsheet/",
      image: "https://www.bibmath.net/actu/images/exercices.jpg",
    },
    {
      title: "Conseils TP",
      description: "Cheat Sheet",
      link: "https://perso.liris.cnrs.fr/nathalie.guin/LIFAPR/ConseilsTP.pdf",
      image:
        "data:image/png;base64,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",
    },
    {
      title: "Centrer en Css",
      description: "Cheat Sheet",
      link: "http://howtocenterincss.com/",
      image:
        "data:image/png;base64,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",
    },
    {
      title: "Couleurs (HTML,HEX, CSS_NAME)",
      description: "oUTIL",
      link: "https://htmlcolorcodes.com/fr/noms-de-couleur/ ",
      image:
        "data:image/png;base64,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",
    },
    {
      title: "Débuter avec SDL2",
      description: "Guide",
      link: "https://virisongithub.github.io/docssdl/commandes_SDL.html",
      image:
        "data:image/png;base64,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",
    },
    {
      title: "Faire son premier ReadMe",
      description: "Guide",
      link: "https://virisongithub.github.io/docsmarkdown/index.html",
      image:
        "https://www.makeareadme.com/images/open-graph-logo.png?v=20181203",
    },
  ],
  nv = () =>
    v.jsx(v.Fragment, {
      children: v.jsx("div", {
        className: "container",
        children: tv.map((e) =>
          v.jsx(R, {
            className: "mt-5",
            children: v.jsxs(Ie, {
              to: e.link,
              children: [
                v.jsx(R.Img, { variant: "top", src: e.image }),
                v.jsxs(R.Body, {
                  children: [
                    v.jsx(R.Title, { children: e.title }),
                    v.jsx(R.Text, { children: e.description }),
                  ],
                }),
              ],
            }),
          })
        ),
      }),
    }),
  rv = [
    {
      title: "LE SAINT PDF DE CINETIQUE",
      description: "Indispensable pour le S1 de SDM",
      link: "ressources/Cinetique.pdf",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
    },
    {
      title: "Recap partie 1 de la cinétique",
      description: "Fiches de cours de la première partie du cm",
      link: "ressources/COURSCINETIQUE_1_2_3.pdf",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png",
    },
    {
      title: "Recap partie 2 de la cinétique",
      description: "Fiches de cours de la deuxième partie du cm",
      link: "ressources/COURSCINETIQUE_45.pdf",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giancarlo_Esposito_by_Gage_Skidmore_2.jpg/280px-Giancarlo_Esposito_by_Gage_Skidmore_2.jpg",
    },
    {
      title: "Vidéo Cinétique",
      description: "Vidéo qui permet de comprendre les bases de la cinétique",
      link: "https://www.youtube.com/watch?v=8xMoTYw9A60",
      image:
        "https://pyxis.nymag.com/v1/imgs/6e3/083/9e8bb81160d2aaf23e9d5b0e34e1cc881a-30-hank-breaking-bad.2x.h473.w710.jpg",
    },
  ],
  lv = () =>
    v.jsx(v.Fragment, {
      children: v.jsx("div", {
        className: "container",
        children: rv.map((e) =>
          v.jsx(R, {
            className: "mt-5",
            children: v.jsxs(Ie, {
              to: e.link,
              children: [
                v.jsx(R.Img, { variant: "top", src: e.image }),
                v.jsxs(R.Body, {
                  children: [
                    v.jsx(R.Title, { children: e.title }),
                    v.jsx(R.Text, { children: e.description }),
                  ],
                }),
              ],
            }),
          })
        ),
      }),
    }),
  ov = [
    {
      title: "Le Saint Tableur",
      description: "Le meilleur moyen de savoir si tu valides",
      link: "https://dorian-tonnis.fr/projets/saint-tableur/",
      image:
        "https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/tableur.png",
    },
  ],
  Fs = () =>
    v.jsx(v.Fragment, {
      children: v.jsx("div", {
        className: "container",
        children: ov.map((e) =>
          v.jsx(R, {
            className: "mt-5",
            children: v.jsxs(Ie, {
              to: e.link,
              children: [
                v.jsx(R.Img, { variant: "top", src: e.image }),
                v.jsxs(R.Body, {
                  children: [
                    v.jsx(R.Title, { children: e.title }),
                    v.jsx(R.Text, { children: e.description }),
                  ],
                }),
              ],
            }),
          })
        ),
      }),
    });
function iv() {
  return v.jsx(v.Fragment, {
    children: v.jsxs(mm, {
      children: [
        v.jsx($m, {}),
        v.jsxs(am, {
          children: [
            v.jsx(et, { path: "/", element: v.jsx(Rs, {}) }),
            v.jsx(et, { path: "/Maths", element: v.jsx(ev, {}) }),
            v.jsx(et, { path: "/Info", element: v.jsx(nv, {}) }),
            v.jsx(et, { path: "/SDM", element: v.jsx(lv, {}) }),
            v.jsx(et, { path: "/Orientation", element: v.jsx(Fs, {}) }),
            v.jsx(et, { path: "/Autres", element: v.jsx(Fs, {}) }),
            v.jsx(et, { path: "*", element: v.jsx(Rs, {}) }),
          ],
        }),
        v.jsx(vf, {}),
      ],
    }),
  });
}
po.createRoot(document.getElementById("root")).render(
  v.jsx(Zs.StrictMode, { children: v.jsx(iv, {}) })
);
