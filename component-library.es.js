import * as P from "react";
import ae, { useRef as ye, useContext as le, useMemo as vn, useDebugValue as Do, createElement as ya, createContext as Nt, useId as su, useEffect as Ve, useCallback as Aa, Component as au, useLayoutEffect as lu, useInsertionEffect as cu, forwardRef as uu, Fragment as xa, useState as ue } from "react";
import hu from "react-dom";
var qr = { exports: {} }, Kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function du() {
  if (Ro) return Kt;
  Ro = 1;
  var e = ae, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, a, c) {
    var u, h = {}, d = null, p = null;
    c !== void 0 && (d = "" + c), a.key !== void 0 && (d = "" + a.key), a.ref !== void 0 && (p = a.ref);
    for (u in a) r.call(a, u) && !s.hasOwnProperty(u) && (h[u] = a[u]);
    if (l && l.defaultProps) for (u in a = l.defaultProps, a) h[u] === void 0 && (h[u] = a[u]);
    return { $$typeof: t, type: l, key: d, ref: p, props: h, _owner: i.current };
  }
  return Kt.Fragment = n, Kt.jsx = o, Kt.jsxs = o, Kt;
}
var Xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function fu() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ae, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function A(f) {
      if (f === null || typeof f != "object")
        return null;
      var E = v && f[v] || f[y];
      return typeof E == "function" ? E : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(f) {
      {
        for (var E = arguments.length, S = new Array(E > 1 ? E - 1 : 0), M = 1; M < E; M++)
          S[M - 1] = arguments[M];
        w("error", f, S);
      }
    }
    function w(f, E, S) {
      {
        var M = x.ReactDebugCurrentFrame, N = M.getStackAddendum();
        N !== "" && (E += "%s", S = S.concat([N]));
        var z = S.map(function(L) {
          return String(L);
        });
        z.unshift("Warning: " + E), Function.prototype.apply.call(console[f], console, z);
      }
    }
    var b = !1, C = !1, T = !1, D = !1, k = !1, Q;
    Q = Symbol.for("react.module.reference");
    function K(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === s || k || f === i || f === c || f === u || D || f === p || b || C || T || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === h || f.$$typeof === o || f.$$typeof === l || f.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Q || f.getModuleId !== void 0));
    }
    function de(f, E, S) {
      var M = f.displayName;
      if (M)
        return M;
      var N = E.displayName || E.name || "";
      return N !== "" ? S + "(" + N + ")" : S;
    }
    function nt(f) {
      return f.displayName || "Context";
    }
    function re(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            var E = f;
            return nt(E) + ".Consumer";
          case o:
            var S = f;
            return nt(S._context) + ".Provider";
          case a:
            return de(f, f.render, "ForwardRef");
          case h:
            var M = f.displayName || null;
            return M !== null ? M : re(f.type) || "Memo";
          case d: {
            var N = f, z = N._payload, L = N._init;
            try {
              return re(L(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var fe = Object.assign, ze = 0, Ut, H, ie, ee, pe, Ge, oe;
    function pt() {
    }
    pt.__reactDisabledLog = !0;
    function Ht() {
      {
        if (ze === 0) {
          Ut = console.log, H = console.info, ie = console.warn, ee = console.error, pe = console.group, Ge = console.groupCollapsed, oe = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: pt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        ze++;
      }
    }
    function mt() {
      {
        if (ze--, ze === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: fe({}, f, {
              value: Ut
            }),
            info: fe({}, f, {
              value: H
            }),
            warn: fe({}, f, {
              value: ie
            }),
            error: fe({}, f, {
              value: ee
            }),
            group: fe({}, f, {
              value: pe
            }),
            groupCollapsed: fe({}, f, {
              value: Ge
            }),
            groupEnd: fe({}, f, {
              value: oe
            })
          });
        }
        ze < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = x.ReactCurrentDispatcher, Qe;
    function xe(f, E, S) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (N) {
            var M = N.stack.trim().match(/\n( *(at )?)/);
            Qe = M && M[1] || "";
          }
        return `
` + Qe + f;
      }
    }
    var we = !1, Ue;
    {
      var gt = typeof WeakMap == "function" ? WeakMap : Map;
      Ue = new gt();
    }
    function be(f, E) {
      if (!f || we)
        return "";
      {
        var S = Ue.get(f);
        if (S !== void 0)
          return S;
      }
      var M;
      we = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = ke.current, ke.current = null, Ht();
      try {
        if (E) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (ce) {
              M = ce;
            }
            Reflect.construct(f, [], L);
          } else {
            try {
              L.call();
            } catch (ce) {
              M = ce;
            }
            f.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            M = ce;
          }
          f();
        }
      } catch (ce) {
        if (ce && M && typeof ce.stack == "string") {
          for (var I = ce.stack.split(`
`), se = M.stack.split(`
`), W = I.length - 1, X = se.length - 1; W >= 1 && X >= 0 && I[W] !== se[X]; )
            X--;
          for (; W >= 1 && X >= 0; W--, X--)
            if (I[W] !== se[X]) {
              if (W !== 1 || X !== 1)
                do
                  if (W--, X--, X < 0 || I[W] !== se[X]) {
                    var me = `
` + I[W].replace(" at new ", " at ");
                    return f.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", f.displayName)), typeof f == "function" && Ue.set(f, me), me;
                  }
                while (W >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        we = !1, ke.current = z, mt(), Error.prepareStackTrace = N;
      }
      var yt = f ? f.displayName || f.name : "", rt = yt ? xe(yt) : "";
      return typeof f == "function" && Ue.set(f, rt), rt;
    }
    function Lc(f, E, S) {
      return be(f, !1);
    }
    function Nc(f) {
      var E = f.prototype;
      return !!(E && E.isReactComponent);
    }
    function Sn(f, E, S) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return be(f, Nc(f));
      if (typeof f == "string")
        return xe(f);
      switch (f) {
        case c:
          return xe("Suspense");
        case u:
          return xe("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            return Lc(f.render);
          case h:
            return Sn(f.type, E, S);
          case d: {
            var M = f, N = M._payload, z = M._init;
            try {
              return Sn(z(N), E, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Wt = Object.prototype.hasOwnProperty, mo = {}, go = x.ReactDebugCurrentFrame;
    function Cn(f) {
      if (f) {
        var E = f._owner, S = Sn(f.type, f._source, E ? E.type : null);
        go.setExtraStackFrame(S);
      } else
        go.setExtraStackFrame(null);
    }
    function Vc(f, E, S, M, N) {
      {
        var z = Function.call.bind(Wt);
        for (var L in f)
          if (z(f, L)) {
            var I = void 0;
            try {
              if (typeof f[L] != "function") {
                var se = Error((M || "React class") + ": " + S + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              I = f[L](E, L, M, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              I = W;
            }
            I && !(I instanceof Error) && (Cn(N), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", S, L, typeof I), Cn(null)), I instanceof Error && !(I.message in mo) && (mo[I.message] = !0, Cn(N), g("Failed %s type: %s", S, I.message), Cn(null));
          }
      }
    }
    var Fc = Array.isArray;
    function Sr(f) {
      return Fc(f);
    }
    function zc(f) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, S = E && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return S;
      }
    }
    function Gc(f) {
      try {
        return vo(f), !1;
      } catch {
        return !0;
      }
    }
    function vo(f) {
      return "" + f;
    }
    function yo(f) {
      if (Gc(f))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zc(f)), vo(f);
    }
    var Yt = x.ReactCurrentOwner, Qc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ao, xo, Cr;
    Cr = {};
    function Uc(f) {
      if (Wt.call(f, "ref")) {
        var E = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Hc(f) {
      if (Wt.call(f, "key")) {
        var E = Object.getOwnPropertyDescriptor(f, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Wc(f, E) {
      if (typeof f.ref == "string" && Yt.current && E && Yt.current.stateNode !== E) {
        var S = re(Yt.current.type);
        Cr[S] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(Yt.current.type), f.ref), Cr[S] = !0);
      }
    }
    function Yc(f, E) {
      {
        var S = function() {
          Ao || (Ao = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function Kc(f, E) {
      {
        var S = function() {
          xo || (xo = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Xc = function(f, E, S, M, N, z, L) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: E,
        ref: S,
        props: L,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function Zc(f, E, S, M, N) {
      {
        var z, L = {}, I = null, se = null;
        S !== void 0 && (yo(S), I = "" + S), Hc(E) && (yo(E.key), I = "" + E.key), Uc(E) && (se = E.ref, Wc(E, N));
        for (z in E)
          Wt.call(E, z) && !Qc.hasOwnProperty(z) && (L[z] = E[z]);
        if (f && f.defaultProps) {
          var W = f.defaultProps;
          for (z in W)
            L[z] === void 0 && (L[z] = W[z]);
        }
        if (I || se) {
          var X = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          I && Yc(L, X), se && Kc(L, X);
        }
        return Xc(f, I, se, N, M, Yt.current, L);
      }
    }
    var Tr = x.ReactCurrentOwner, wo = x.ReactDebugCurrentFrame;
    function vt(f) {
      if (f) {
        var E = f._owner, S = Sn(f.type, f._source, E ? E.type : null);
        wo.setExtraStackFrame(S);
      } else
        wo.setExtraStackFrame(null);
    }
    var Dr;
    Dr = !1;
    function Rr(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function bo() {
      {
        if (Tr.current) {
          var f = re(Tr.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Jc(f) {
      return "";
    }
    var Eo = {};
    function qc(f) {
      {
        var E = bo();
        if (!E) {
          var S = typeof f == "string" ? f : f.displayName || f.name;
          S && (E = `

Check the top-level render call using <` + S + ">.");
        }
        return E;
      }
    }
    function Po(f, E) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var S = qc(E);
        if (Eo[S])
          return;
        Eo[S] = !0;
        var M = "";
        f && f._owner && f._owner !== Tr.current && (M = " It was passed a child from " + re(f._owner.type) + "."), vt(f), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, M), vt(null);
      }
    }
    function So(f, E) {
      {
        if (typeof f != "object")
          return;
        if (Sr(f))
          for (var S = 0; S < f.length; S++) {
            var M = f[S];
            Rr(M) && Po(M, E);
          }
        else if (Rr(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var N = A(f);
          if (typeof N == "function" && N !== f.entries)
            for (var z = N.call(f), L; !(L = z.next()).done; )
              Rr(L.value) && Po(L.value, E);
        }
      }
    }
    function _c(f) {
      {
        var E = f.type;
        if (E == null || typeof E == "string")
          return;
        var S;
        if (typeof E == "function")
          S = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === h))
          S = E.propTypes;
        else
          return;
        if (S) {
          var M = re(E);
          Vc(S, f.props, "prop", M, f);
        } else if (E.PropTypes !== void 0 && !Dr) {
          Dr = !0;
          var N = re(E);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $c(f) {
      {
        for (var E = Object.keys(f.props), S = 0; S < E.length; S++) {
          var M = E[S];
          if (M !== "children" && M !== "key") {
            vt(f), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), vt(null);
            break;
          }
        }
        f.ref !== null && (vt(f), g("Invalid attribute `ref` supplied to `React.Fragment`."), vt(null));
      }
    }
    var Co = {};
    function To(f, E, S, M, N, z) {
      {
        var L = K(f);
        if (!L) {
          var I = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Jc();
          se ? I += se : I += bo();
          var W;
          f === null ? W = "null" : Sr(f) ? W = "array" : f !== void 0 && f.$$typeof === t ? (W = "<" + (re(f.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : W = typeof f, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, I);
        }
        var X = Zc(f, E, S, N, z);
        if (X == null)
          return X;
        if (L) {
          var me = E.children;
          if (me !== void 0)
            if (M)
              if (Sr(me)) {
                for (var yt = 0; yt < me.length; yt++)
                  So(me[yt], f);
                Object.freeze && Object.freeze(me);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              So(me, f);
        }
        if (Wt.call(E, "key")) {
          var rt = re(f), ce = Object.keys(E).filter(function(ou) {
            return ou !== "key";
          }), kr = ce.length > 0 ? "{key: someKey, " + ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Co[rt + kr]) {
            var iu = ce.length > 0 ? "{" + ce.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, kr, rt, iu, rt), Co[rt + kr] = !0;
          }
        }
        return f === r ? $c(X) : _c(X), X;
      }
    }
    function eu(f, E, S) {
      return To(f, E, S, !0);
    }
    function tu(f, E, S) {
      return To(f, E, S, !1);
    }
    var nu = tu, ru = eu;
    Xt.Fragment = r, Xt.jsx = nu, Xt.jsxs = ru;
  }()), Xt;
}
process.env.NODE_ENV === "production" ? qr.exports = du() : qr.exports = fu();
var m = qr.exports, qt = {}, Zt = hu;
if (process.env.NODE_ENV === "production")
  qt.createRoot = Zt.createRoot, qt.hydrateRoot = Zt.hydrateRoot;
else {
  var Tn = Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  qt.createRoot = function(e, t) {
    Tn.usingClientEntryPoint = !0;
    try {
      return Zt.createRoot(e, t);
    } finally {
      Tn.usingClientEntryPoint = !1;
    }
  }, qt.hydrateRoot = function(e, t, n) {
    Tn.usingClientEntryPoint = !0;
    try {
      return Zt.hydrateRoot(e, t, n);
    } finally {
      Tn.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function an() {
  return an = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, an.apply(this, arguments);
}
var Ye;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Ye || (Ye = {}));
const Mo = "popstate";
function pu(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: s,
      search: o,
      hash: l
    } = r.location;
    return _r(
      "",
      {
        pathname: s,
        search: o,
        hash: l
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ln(i);
  }
  return gu(t, n, null, e);
}
function B(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Re(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function mu() {
  return Math.random().toString(36).substr(2, 8);
}
function Oo(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function _r(e, t, n, r) {
  return n === void 0 && (n = null), an({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Vt(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || mu()
  });
}
function ln(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Vt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function gu(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: s = !1
  } = r, o = i.history, l = Ye.Pop, a = null, c = u();
  c == null && (c = 0, o.replaceState(an({}, o.state, {
    idx: c
  }), ""));
  function u() {
    return (o.state || {
      idx: null
    }).idx;
  }
  function h() {
    l = Ye.Pop;
    let A = u(), x = A == null ? null : A - c;
    c = A, a && a({
      action: l,
      location: y.location,
      delta: x
    });
  }
  function d(A, x) {
    l = Ye.Push;
    let g = _r(y.location, A, x);
    c = u() + 1;
    let w = Oo(g, c), b = y.createHref(g);
    try {
      o.pushState(w, "", b);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError")
        throw C;
      i.location.assign(b);
    }
    s && a && a({
      action: l,
      location: y.location,
      delta: 1
    });
  }
  function p(A, x) {
    l = Ye.Replace;
    let g = _r(y.location, A, x);
    c = u();
    let w = Oo(g, c), b = y.createHref(g);
    o.replaceState(w, "", b), s && a && a({
      action: l,
      location: y.location,
      delta: 0
    });
  }
  function v(A) {
    let x = i.location.origin !== "null" ? i.location.origin : i.location.href, g = typeof A == "string" ? A : ln(A);
    return g = g.replace(/ $/, "%20"), B(x, "No window.location.(origin|href) available to create URL for href: " + g), new URL(g, x);
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(A) {
      if (a)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(Mo, h), a = A, () => {
        i.removeEventListener(Mo, h), a = null;
      };
    },
    createHref(A) {
      return t(i, A);
    },
    createURL: v,
    encodeLocation(A) {
      let x = v(A);
      return {
        pathname: x.pathname,
        search: x.search,
        hash: x.hash
      };
    },
    push: d,
    replace: p,
    go(A) {
      return o.go(A);
    }
  };
  return y;
}
var jo;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(jo || (jo = {}));
function vu(e, t, n) {
  return n === void 0 && (n = "/"), yu(e, t, n, !1);
}
function yu(e, t, n, r) {
  let i = typeof t == "string" ? Vt(t) : t, s = Xe(i.pathname || "/", n);
  if (s == null)
    return null;
  let o = wa(e);
  Au(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) {
    let c = ku(s);
    l = Du(o[a], c, r);
  }
  return l;
}
function wa(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s
    };
    a.relativePath.startsWith("/") && (B(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let c = je([r, a.relativePath]), u = n.concat(a);
    s.children && s.children.length > 0 && (B(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')
    ), wa(s.children, t, u, c)), !(s.path == null && !s.index) && t.push({
      path: c,
      score: Cu(c, s.index),
      routesMeta: u
    });
  };
  return e.forEach((s, o) => {
    var l;
    if (s.path === "" || !((l = s.path) != null && l.includes("?")))
      i(s, o);
    else
      for (let a of ba(s.path))
        i(s, o, a);
  }), t;
}
function ba(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [s, ""] : [s];
  let o = ba(r.join("/")), l = [];
  return l.push(...o.map((a) => a === "" ? s : [s, a].join("/"))), i && l.push(...o), l.map((a) => e.startsWith("/") && a === "" ? "/" : a);
}
function Au(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : Tu(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const xu = /^:[\w-]+$/, wu = 3, bu = 2, Eu = 1, Pu = 10, Su = -2, Bo = (e) => e === "*";
function Cu(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Bo) && (r += Su), t && (r += bu), n.filter((i) => !Bo(i)).reduce((i, s) => i + (xu.test(s) ? wu : s === "" ? Eu : Pu), r);
}
function Tu(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Du(e, t, n) {
  let {
    routesMeta: r
  } = e, i = {}, s = "/", o = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l], c = l === r.length - 1, u = s === "/" ? t : t.slice(s.length) || "/", h = Yn({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: c
    }, u), d = a.route;
    if (!h && c && n && !r[r.length - 1].route.index && (h = Yn({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: !1
    }, u)), !h)
      return null;
    Object.assign(i, h.params), o.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: je([s, h.pathname]),
      pathnameBase: Bu(je([s, h.pathnameBase])),
      route: d
    }), h.pathnameBase !== "/" && (s = je([s, h.pathnameBase]));
  }
  return o;
}
function Yn(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = Ru(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let s = i[0], o = s.replace(/(.)\/+$/, "$1"), l = i.slice(1);
  return {
    params: r.reduce((c, u, h) => {
      let {
        paramName: d,
        isOptional: p
      } = u;
      if (d === "*") {
        let y = l[h] || "";
        o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const v = l[h];
      return p && !v ? c[d] = void 0 : c[d] = (v || "").replace(/%2F/g, "/"), c;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e
  };
}
function Ru(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Re(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, a) => (r.push({
    paramName: l,
    isOptional: a != null
  }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function ku(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Re(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Xe(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Mu(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Vt(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Ou(n, t) : t,
    search: Iu(r),
    hash: Lu(i)
  };
}
function Ou(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function Mr(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function ju(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Ea(e, t) {
  let n = ju(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function Pa(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Vt(e) : (i = an({}, e), B(!i.pathname || !i.pathname.includes("?"), Mr("?", "pathname", "search", i)), B(!i.pathname || !i.pathname.includes("#"), Mr("#", "pathname", "hash", i)), B(!i.search || !i.search.includes("#"), Mr("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, l;
  if (o == null)
    l = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; )
        d.shift(), h -= 1;
      i.pathname = d.join("/");
    }
    l = h >= 0 ? t[h] : "/";
  }
  let a = Mu(i, l), c = o && o !== "/" && o.endsWith("/"), u = (s || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (c || u) && (a.pathname += "/"), a;
}
const je = (e) => e.join("/").replace(/\/\/+/g, "/"), Bu = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Iu = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Lu = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Nu(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Sa = ["post", "put", "patch", "delete"];
new Set(Sa);
const Vu = ["get", ...Sa];
new Set(Vu);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function cn() {
  return cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, cn.apply(this, arguments);
}
const yn = /* @__PURE__ */ P.createContext(null);
process.env.NODE_ENV !== "production" && (yn.displayName = "DataRouter");
const Si = /* @__PURE__ */ P.createContext(null);
process.env.NODE_ENV !== "production" && (Si.displayName = "DataRouterState");
const Fu = /* @__PURE__ */ P.createContext(null);
process.env.NODE_ENV !== "production" && (Fu.displayName = "Await");
const Pe = /* @__PURE__ */ P.createContext(null);
process.env.NODE_ENV !== "production" && (Pe.displayName = "Navigation");
const An = /* @__PURE__ */ P.createContext(null);
process.env.NODE_ENV !== "production" && (An.displayName = "Location");
const Fe = /* @__PURE__ */ P.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Fe.displayName = "Route");
const Ci = /* @__PURE__ */ P.createContext(null);
process.env.NODE_ENV !== "production" && (Ci.displayName = "RouteError");
function zu(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  xn() || (process.env.NODE_ENV !== "production" ? B(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : B(!1));
  let {
    basename: r,
    navigator: i
  } = P.useContext(Pe), {
    hash: s,
    pathname: o,
    search: l
  } = wn(e, {
    relative: n
  }), a = o;
  return r !== "/" && (a = o === "/" ? r : je([r, o])), i.createHref({
    pathname: a,
    search: l,
    hash: s
  });
}
function xn() {
  return P.useContext(An) != null;
}
function Ft() {
  return xn() || (process.env.NODE_ENV !== "production" ? B(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : B(!1)), P.useContext(An).location;
}
const Ca = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ta(e) {
  P.useContext(Pe).static || P.useLayoutEffect(e);
}
function Gu() {
  let {
    isDataRoute: e
  } = P.useContext(Fe);
  return e ? th() : Qu();
}
function Qu() {
  xn() || (process.env.NODE_ENV !== "production" ? B(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : B(!1));
  let e = P.useContext(yn), {
    basename: t,
    future: n,
    navigator: r
  } = P.useContext(Pe), {
    matches: i
  } = P.useContext(Fe), {
    pathname: s
  } = Ft(), o = JSON.stringify(Ea(i, n.v7_relativeSplatPath)), l = P.useRef(!1);
  return Ta(() => {
    l.current = !0;
  }), P.useCallback(function(c, u) {
    if (u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && Re(l.current, Ca), !l.current) return;
    if (typeof c == "number") {
      r.go(c);
      return;
    }
    let h = Pa(c, JSON.parse(o), s, u.relative === "path");
    e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : je([t, h.pathname])), (u.replace ? r.replace : r.push)(h, u.state, u);
  }, [t, r, o, s, e]);
}
function wn(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = P.useContext(Pe), {
    matches: i
  } = P.useContext(Fe), {
    pathname: s
  } = Ft(), o = JSON.stringify(Ea(i, r.v7_relativeSplatPath));
  return P.useMemo(() => Pa(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function Uu(e, t) {
  return Hu(e, t);
}
function Hu(e, t, n, r) {
  xn() || (process.env.NODE_ENV !== "production" ? B(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : B(!1));
  let {
    navigator: i
  } = P.useContext(Pe), {
    matches: s
  } = P.useContext(Fe), o = s[s.length - 1], l = o ? o.params : {}, a = o ? o.pathname : "/", c = o ? o.pathnameBase : "/", u = o && o.route;
  if (process.env.NODE_ENV !== "production") {
    let g = u && u.path || "";
    Ra(a, !u || g.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + a + '" (under <Route path="' + g + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + g + '"> to <Route ') + ('path="' + (g === "/" ? "*" : g + "/*") + '">.'));
  }
  let h = Ft(), d;
  if (t) {
    var p;
    let g = typeof t == "string" ? Vt(t) : t;
    c === "/" || (p = g.pathname) != null && p.startsWith(c) || (process.env.NODE_ENV !== "production" ? B(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + c + '" ') + ('but pathname "' + g.pathname + '" was given in the `location` prop.')) : B(!1)), d = g;
  } else
    d = h;
  let v = d.pathname || "/", y = v;
  if (c !== "/") {
    let g = c.replace(/^\//, "").split("/");
    y = "/" + v.replace(/^\//, "").split("/").slice(g.length).join("/");
  }
  let A = vu(e, {
    pathname: y
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && Re(u || A != null, 'No routes matched location "' + d.pathname + d.search + d.hash + '" '), process.env.NODE_ENV !== "production" && Re(A == null || A[A.length - 1].route.element !== void 0 || A[A.length - 1].route.Component !== void 0 || A[A.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + d.pathname + d.search + d.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let x = Zu(A && A.map((g) => Object.assign({}, g, {
    params: Object.assign({}, l, g.params),
    pathname: je([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(g.pathname).pathname : g.pathname
    ]),
    pathnameBase: g.pathnameBase === "/" ? c : je([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(g.pathnameBase).pathname : g.pathnameBase
    ])
  })), s, n, r);
  return t && x ? /* @__PURE__ */ P.createElement(An.Provider, {
    value: {
      location: cn({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, d),
      navigationType: Ye.Pop
    }
  }, x) : x;
}
function Wu() {
  let e = eh(), t = Nu(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
    padding: "0.5rem",
    backgroundColor: r
  }, s = {
    padding: "2px 4px",
    backgroundColor: r
  }, o = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), o = /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ P.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ P.createElement("code", {
    style: s
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ P.createElement("code", {
    style: s
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ P.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ P.createElement("pre", {
    style: i
  }, n) : null, o);
}
const Yu = /* @__PURE__ */ P.createElement(Wu, null);
class Ku extends P.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ P.createElement(Fe.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ P.createElement(Ci.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Xu(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, i = P.useContext(yn);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ P.createElement(Fe.Provider, {
    value: t
  }, r);
}
function Zu(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var s;
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let o = e, l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let u = o.findIndex((h) => h.route.id && (l == null ? void 0 : l[h.route.id]) !== void 0);
    u >= 0 || (process.env.NODE_ENV !== "production" ? B(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(l).join(",")) : B(!1)), o = o.slice(0, Math.min(o.length, u + 1));
  }
  let a = !1, c = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < o.length; u++) {
      let h = o[u];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = u), h.route.id) {
        let {
          loaderData: d,
          errors: p
        } = n, v = h.route.loader && d[h.route.id] === void 0 && (!p || p[h.route.id] === void 0);
        if (h.route.lazy || v) {
          a = !0, c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
          break;
        }
      }
    }
  return o.reduceRight((u, h, d) => {
    let p, v = !1, y = null, A = null;
    n && (p = l && h.route.id ? l[h.route.id] : void 0, y = h.route.errorElement || Yu, a && (c < 0 && d === 0 ? (Ra("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), v = !0, A = null) : c === d && (v = !0, A = h.route.hydrateFallbackElement || null)));
    let x = t.concat(o.slice(0, d + 1)), g = () => {
      let w;
      return p ? w = y : v ? w = A : h.route.Component ? w = /* @__PURE__ */ P.createElement(h.route.Component, null) : h.route.element ? w = h.route.element : w = u, /* @__PURE__ */ P.createElement(Xu, {
        match: h,
        routeContext: {
          outlet: u,
          matches: x,
          isDataRoute: n != null
        },
        children: w
      });
    };
    return n && (h.route.ErrorBoundary || h.route.errorElement || d === 0) ? /* @__PURE__ */ P.createElement(Ku, {
      location: n.location,
      revalidation: n.revalidation,
      component: y,
      error: p,
      children: g(),
      routeContext: {
        outlet: null,
        matches: x,
        isDataRoute: !0
      }
    }) : g();
  }, null);
}
var Da = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Da || {}), un = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(un || {});
function Ti(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Ju(e) {
  let t = P.useContext(yn);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, Ti(e)) : B(!1)), t;
}
function qu(e) {
  let t = P.useContext(Si);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, Ti(e)) : B(!1)), t;
}
function _u(e) {
  let t = P.useContext(Fe);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, Ti(e)) : B(!1)), t;
}
function Di(e) {
  let t = _u(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? B(!1, e + ' can only be used on routes that contain a unique "id"') : B(!1)), n.route.id;
}
function $u() {
  return Di(un.UseRouteId);
}
function eh() {
  var e;
  let t = P.useContext(Ci), n = qu(un.UseRouteError), r = Di(un.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function th() {
  let {
    router: e
  } = Ju(Da.UseNavigateStable), t = Di(un.UseNavigateStable), n = P.useRef(!1);
  return Ta(() => {
    n.current = !0;
  }), P.useCallback(function(i, s) {
    s === void 0 && (s = {}), process.env.NODE_ENV !== "production" && Re(n.current, Ca), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, cn({
      fromRouteId: t
    }, s)));
  }, [e, t]);
}
const Io = {};
function Ra(e, t, n) {
  !t && !Io[e] && (Io[e] = !0, process.env.NODE_ENV !== "production" && Re(!1, n));
}
function wt(e) {
  process.env.NODE_ENV !== "production" ? B(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : B(!1);
}
function nh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ye.Pop,
    navigator: s,
    static: o = !1,
    future: l
  } = e;
  xn() && (process.env.NODE_ENV !== "production" ? B(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : B(!1));
  let a = t.replace(/^\/*/, "/"), c = P.useMemo(() => ({
    basename: a,
    navigator: s,
    static: o,
    future: cn({
      v7_relativeSplatPath: !1
    }, l)
  }), [a, l, s, o]);
  typeof r == "string" && (r = Vt(r));
  let {
    pathname: u = "/",
    search: h = "",
    hash: d = "",
    state: p = null,
    key: v = "default"
  } = r, y = P.useMemo(() => {
    let A = Xe(u, a);
    return A == null ? null : {
      location: {
        pathname: A,
        search: h,
        hash: d,
        state: p,
        key: v
      },
      navigationType: i
    };
  }, [a, u, h, d, p, v, i]);
  return process.env.NODE_ENV !== "production" && Re(y != null, '<Router basename="' + a + '"> is not able to match the URL ' + ('"' + u + h + d + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), y == null ? null : /* @__PURE__ */ P.createElement(Pe.Provider, {
    value: c
  }, /* @__PURE__ */ P.createElement(An.Provider, {
    children: n,
    value: y
  }));
}
function rh(e) {
  let {
    children: t,
    location: n
  } = e;
  return Uu($r(t), n);
}
new Promise(() => {
});
function $r(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return P.Children.forEach(e, (r, i) => {
    if (!/* @__PURE__ */ P.isValidElement(r))
      return;
    let s = [...t, i];
    if (r.type === P.Fragment) {
      n.push.apply(n, $r(r.props.children, s));
      return;
    }
    r.type !== wt && (process.env.NODE_ENV !== "production" ? B(!1, "[" + (typeof r.type == "string" ? r.type : r.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : B(!1)), !r.props.index || !r.props.children || (process.env.NODE_ENV !== "production" ? B(!1, "An index route cannot have child routes.") : B(!1));
    let o = {
      id: r.props.id || s.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (o.children = $r(r.props.children, s)), n.push(o);
  }), n;
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Dt.apply(this, arguments);
}
function Ri(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const Ln = "get", Nn = "application/x-www-form-urlencoded";
function ar(e) {
  return e != null && typeof e.tagName == "string";
}
function ih(e) {
  return ar(e) && e.tagName.toLowerCase() === "button";
}
function oh(e) {
  return ar(e) && e.tagName.toLowerCase() === "form";
}
function sh(e) {
  return ar(e) && e.tagName.toLowerCase() === "input";
}
function ah(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function lh(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !ah(e);
}
let Dn = null;
function ch() {
  if (Dn === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Dn = !1;
    } catch {
      Dn = !0;
    }
  return Dn;
}
const uh = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Or(e) {
  return e != null && !uh.has(e) ? (process.env.NODE_ENV !== "production" && Re(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Nn + '"')), null) : e;
}
function hh(e, t) {
  let n, r, i, s, o;
  if (oh(e)) {
    let l = e.getAttribute("action");
    r = l ? Xe(l, t) : null, n = e.getAttribute("method") || Ln, i = Or(e.getAttribute("enctype")) || Nn, s = new FormData(e);
  } else if (ih(e) || sh(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let a = e.getAttribute("formaction") || l.getAttribute("action");
    if (r = a ? Xe(a, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || Ln, i = Or(e.getAttribute("formenctype")) || Or(l.getAttribute("enctype")) || Nn, s = new FormData(l, e), !ch()) {
      let {
        name: c,
        type: u,
        value: h
      } = e;
      if (u === "image") {
        let d = c ? c + "." : "";
        s.append(d + "x", "0"), s.append(d + "y", "0");
      } else c && s.append(c, h);
    }
  } else {
    if (ar(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = Ln, r = null, i = Nn, o = e;
  }
  return s && i === "text/plain" && (o = s, s = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: i,
    formData: s,
    body: o
  };
}
const dh = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], fh = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], ph = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], mh = "6";
try {
  window.__reactRouterVersion = mh;
} catch {
}
const ka = /* @__PURE__ */ P.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (ka.displayName = "ViewTransition");
const gh = /* @__PURE__ */ P.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (gh.displayName = "Fetchers");
const vh = "startTransition", Lo = P[vh];
function yh(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e, s = P.useRef();
  s.current == null && (s.current = pu({
    window: i,
    v5Compat: !0
  }));
  let o = s.current, [l, a] = P.useState({
    action: o.action,
    location: o.location
  }), {
    v7_startTransition: c
  } = r || {}, u = P.useCallback((h) => {
    c && Lo ? Lo(() => a(h)) : a(h);
  }, [a, c]);
  return P.useLayoutEffect(() => o.listen(u), [o, u]), /* @__PURE__ */ P.createElement(nh, {
    basename: t,
    children: n,
    location: l.location,
    navigationType: l.action,
    navigator: o,
    future: r
  });
}
process.env.NODE_ENV;
const Ah = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", xh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ma = /* @__PURE__ */ P.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: s,
    replace: o,
    state: l,
    target: a,
    to: c,
    preventScrollReset: u,
    unstable_viewTransition: h
  } = t, d = Ri(t, dh), {
    basename: p
  } = P.useContext(Pe), v, y = !1;
  if (typeof c == "string" && xh.test(c) && (v = c, Ah))
    try {
      let w = new URL(window.location.href), b = c.startsWith("//") ? new URL(w.protocol + c) : new URL(c), C = Xe(b.pathname, p);
      b.origin === w.origin && C != null ? c = C + b.search + b.hash : y = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Re(!1, '<Link to="' + c + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let A = zu(c, {
    relative: i
  }), x = Eh(c, {
    replace: o,
    state: l,
    target: a,
    preventScrollReset: u,
    relative: i,
    unstable_viewTransition: h
  });
  function g(w) {
    r && r(w), w.defaultPrevented || x(w);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ P.createElement("a", Dt({}, d, {
      href: v || A,
      onClick: y || s ? r : g,
      ref: n,
      target: a
    }))
  );
});
process.env.NODE_ENV !== "production" && (Ma.displayName = "Link");
const lr = /* @__PURE__ */ P.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: s = "",
    end: o = !1,
    style: l,
    to: a,
    unstable_viewTransition: c,
    children: u
  } = t, h = Ri(t, fh), d = wn(a, {
    relative: h.relative
  }), p = Ft(), v = P.useContext(Si), {
    navigator: y,
    basename: A
  } = P.useContext(Pe), x = v != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Rh(d) && c === !0, g = y.encodeLocation ? y.encodeLocation(d).pathname : d.pathname, w = p.pathname, b = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
  i || (w = w.toLowerCase(), b = b ? b.toLowerCase() : null, g = g.toLowerCase()), b && A && (b = Xe(b, A) || b);
  const C = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
  let T = w === g || !o && w.startsWith(g) && w.charAt(C) === "/", D = b != null && (b === g || !o && b.startsWith(g) && b.charAt(g.length) === "/"), k = {
    isActive: T,
    isPending: D,
    isTransitioning: x
  }, Q = T ? r : void 0, K;
  typeof s == "function" ? K = s(k) : K = [s, T ? "active" : null, D ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
  let de = typeof l == "function" ? l(k) : l;
  return /* @__PURE__ */ P.createElement(Ma, Dt({}, h, {
    "aria-current": Q,
    className: K,
    ref: n,
    style: de,
    to: a,
    unstable_viewTransition: c
  }), typeof u == "function" ? u(k) : u);
});
process.env.NODE_ENV !== "production" && (lr.displayName = "NavLink");
const wh = /* @__PURE__ */ P.forwardRef((e, t) => {
  let {
    fetcherKey: n,
    navigate: r,
    reloadDocument: i,
    replace: s,
    state: o,
    method: l = Ln,
    action: a,
    onSubmit: c,
    relative: u,
    preventScrollReset: h,
    unstable_viewTransition: d
  } = e, p = Ri(e, ph), v = Th(), y = Dh(a, {
    relative: u
  }), A = l.toLowerCase() === "get" ? "get" : "post", x = (g) => {
    if (c && c(g), g.defaultPrevented) return;
    g.preventDefault();
    let w = g.nativeEvent.submitter, b = (w == null ? void 0 : w.getAttribute("formmethod")) || l;
    v(w || g.currentTarget, {
      fetcherKey: n,
      method: b,
      navigate: r,
      replace: s,
      state: o,
      relative: u,
      preventScrollReset: h,
      unstable_viewTransition: d
    });
  };
  return /* @__PURE__ */ P.createElement("form", Dt({
    ref: t,
    method: A,
    action: y,
    onSubmit: i ? c : x
  }, p));
});
process.env.NODE_ENV !== "production" && (wh.displayName = "Form");
process.env.NODE_ENV;
var Kn;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Kn || (Kn = {}));
var No;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(No || (No = {}));
function bh(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Oa(e) {
  let t = P.useContext(yn);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, bh(e)) : B(!1)), t;
}
function Eh(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: s,
    relative: o,
    unstable_viewTransition: l
  } = t === void 0 ? {} : t, a = Gu(), c = Ft(), u = wn(e, {
    relative: o
  });
  return P.useCallback((h) => {
    if (lh(h, n)) {
      h.preventDefault();
      let d = r !== void 0 ? r : ln(c) === ln(u);
      a(e, {
        replace: d,
        state: i,
        preventScrollReset: s,
        relative: o,
        unstable_viewTransition: l
      });
    }
  }, [c, a, u, r, i, n, e, s, o, l]);
}
function Ph() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let Sh = 0, Ch = () => "__" + String(++Sh) + "__";
function Th() {
  let {
    router: e
  } = Oa(Kn.UseSubmit), {
    basename: t
  } = P.useContext(Pe), n = $u();
  return P.useCallback(function(r, i) {
    i === void 0 && (i = {}), Ph();
    let {
      action: s,
      method: o,
      encType: l,
      formData: a,
      body: c
    } = hh(r, t);
    if (i.navigate === !1) {
      let u = i.fetcherKey || Ch();
      e.fetch(u, n, i.action || s, {
        preventScrollReset: i.preventScrollReset,
        formData: a,
        body: c,
        formMethod: i.method || o,
        formEncType: i.encType || l,
        unstable_flushSync: i.unstable_flushSync
      });
    } else
      e.navigate(i.action || s, {
        preventScrollReset: i.preventScrollReset,
        formData: a,
        body: c,
        formMethod: i.method || o,
        formEncType: i.encType || l,
        replace: i.replace,
        state: i.state,
        fromRouteId: n,
        unstable_flushSync: i.unstable_flushSync,
        unstable_viewTransition: i.unstable_viewTransition
      });
  }, [e, t, n]);
}
function Dh(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = P.useContext(Pe), i = P.useContext(Fe);
  i || (process.env.NODE_ENV !== "production" ? B(!1, "useFormAction must be used inside a RouteContext") : B(!1));
  let [s] = i.matches.slice(-1), o = Dt({}, wn(e || ".", {
    relative: n
  })), l = Ft();
  if (e == null) {
    o.search = l.search;
    let a = new URLSearchParams(o.search);
    a.has("index") && a.get("index") === "" && (a.delete("index"), o.search = a.toString() ? "?" + a.toString() : "");
  }
  return (!e || e === ".") && s.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : je([r, o.pathname])), ln(o);
}
function Rh(e, t) {
  t === void 0 && (t = {});
  let n = P.useContext(ka);
  n == null && (process.env.NODE_ENV !== "production" ? B(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : B(!1));
  let {
    basename: r
  } = Oa(Kn.useViewTransitionState), i = wn(e, {
    relative: t.relative
  });
  if (!n.isTransitioning)
    return !1;
  let s = Xe(n.currentLocation.pathname, r) || n.currentLocation.pathname, o = Xe(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Yn(i.pathname, o) != null || Yn(i.pathname, s) != null;
}
var q = function() {
  return q = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, q.apply(this, arguments);
};
function Ze(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, s; r < i; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function kh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Mh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Oh = /* @__PURE__ */ kh(
  function(e) {
    return Mh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), G = "-ms-", tn = "-moz-", V = "-webkit-", ja = "comm", cr = "rule", ki = "decl", jh = "@import", Ba = "@keyframes", Bh = "@layer", Ia = Math.abs, Mi = String.fromCharCode, ei = Object.assign;
function Ih(e, t) {
  return J(e, 0) ^ 45 ? (((t << 2 ^ J(e, 0)) << 2 ^ J(e, 1)) << 2 ^ J(e, 2)) << 2 ^ J(e, 3) : 0;
}
function La(e) {
  return e.trim();
}
function Me(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function Vn(e, t, n) {
  return e.indexOf(t, n);
}
function J(e, t) {
  return e.charCodeAt(t) | 0;
}
function Rt(e, t, n) {
  return e.slice(t, n);
}
function Se(e) {
  return e.length;
}
function Na(e) {
  return e.length;
}
function _t(e, t) {
  return t.push(e), e;
}
function Lh(e, t) {
  return e.map(t).join("");
}
function Vo(e, t) {
  return e.filter(function(n) {
    return !Me(n, t);
  });
}
var ur = 1, kt = 1, Va = 0, Ae = 0, Z = 0, zt = "";
function hr(e, t, n, r, i, s, o, l) {
  return { value: e, root: t, parent: n, type: r, props: i, children: s, line: ur, column: kt, length: o, return: "", siblings: l };
}
function He(e, t) {
  return ei(hr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function At(e) {
  for (; e.root; )
    e = He(e.root, { children: [e] });
  _t(e, e.siblings);
}
function Nh() {
  return Z;
}
function Vh() {
  return Z = Ae > 0 ? J(zt, --Ae) : 0, kt--, Z === 10 && (kt = 1, ur--), Z;
}
function Ee() {
  return Z = Ae < Va ? J(zt, Ae++) : 0, kt++, Z === 10 && (kt = 1, ur++), Z;
}
function ut() {
  return J(zt, Ae);
}
function Fn() {
  return Ae;
}
function dr(e, t) {
  return Rt(zt, e, t);
}
function ti(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Fh(e) {
  return ur = kt = 1, Va = Se(zt = e), Ae = 0, [];
}
function zh(e) {
  return zt = "", e;
}
function jr(e) {
  return La(dr(Ae - 1, ni(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Gh(e) {
  for (; (Z = ut()) && Z < 33; )
    Ee();
  return ti(e) > 2 || ti(Z) > 3 ? "" : " ";
}
function Qh(e, t) {
  for (; --t && Ee() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return dr(e, Fn() + (t < 6 && ut() == 32 && Ee() == 32));
}
function ni(e) {
  for (; Ee(); )
    switch (Z) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ni(Z);
        break;
      case 40:
        e === 41 && ni(e);
        break;
      case 92:
        Ee();
        break;
    }
  return Ae;
}
function Uh(e, t) {
  for (; Ee() && e + Z !== 57; )
    if (e + Z === 84 && ut() === 47)
      break;
  return "/*" + dr(t, Ae - 1) + "*" + Mi(e === 47 ? e : Ee());
}
function Hh(e) {
  for (; !ti(ut()); )
    Ee();
  return dr(e, Ae);
}
function Wh(e) {
  return zh(zn("", null, null, null, [""], e = Fh(e), 0, [0], e));
}
function zn(e, t, n, r, i, s, o, l, a) {
  for (var c = 0, u = 0, h = o, d = 0, p = 0, v = 0, y = 1, A = 1, x = 1, g = 0, w = "", b = i, C = s, T = r, D = w; A; )
    switch (v = g, g = Ee()) {
      case 40:
        if (v != 108 && J(D, h - 1) == 58) {
          Vn(D += j(jr(g), "&", "&\f"), "&\f", Ia(c ? l[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        D += jr(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        D += Gh(v);
        break;
      case 92:
        D += Qh(Fn() - 1, 7);
        continue;
      case 47:
        switch (ut()) {
          case 42:
          case 47:
            _t(Yh(Uh(Ee(), Fn()), t, n, a), a);
            break;
          default:
            D += "/";
        }
        break;
      case 123 * y:
        l[c++] = Se(D) * x;
      case 125 * y:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            A = 0;
          case 59 + u:
            x == -1 && (D = j(D, /\f/g, "")), p > 0 && Se(D) - h && _t(p > 32 ? zo(D + ";", r, n, h - 1, a) : zo(j(D, " ", "") + ";", r, n, h - 2, a), a);
            break;
          case 59:
            D += ";";
          default:
            if (_t(T = Fo(D, t, n, c, u, i, l, w, b = [], C = [], h, s), s), g === 123)
              if (u === 0)
                zn(D, t, T, T, b, s, h, l, C);
              else
                switch (d === 99 && J(D, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    zn(e, T, T, r && _t(Fo(e, T, T, 0, 0, i, l, w, i, b = [], h, C), C), i, C, h, l, r ? b : C);
                    break;
                  default:
                    zn(D, T, T, T, [""], C, 0, l, C);
                }
        }
        c = u = p = 0, y = x = 1, w = D = "", h = o;
        break;
      case 58:
        h = 1 + Se(D), p = v;
      default:
        if (y < 1) {
          if (g == 123)
            --y;
          else if (g == 125 && y++ == 0 && Vh() == 125)
            continue;
        }
        switch (D += Mi(g), g * y) {
          case 38:
            x = u > 0 ? 1 : (D += "\f", -1);
            break;
          case 44:
            l[c++] = (Se(D) - 1) * x, x = 1;
            break;
          case 64:
            ut() === 45 && (D += jr(Ee())), d = ut(), u = h = Se(w = D += Hh(Fn())), g++;
            break;
          case 45:
            v === 45 && Se(D) == 2 && (y = 0);
        }
    }
  return s;
}
function Fo(e, t, n, r, i, s, o, l, a, c, u, h) {
  for (var d = i - 1, p = i === 0 ? s : [""], v = Na(p), y = 0, A = 0, x = 0; y < r; ++y)
    for (var g = 0, w = Rt(e, d + 1, d = Ia(A = o[y])), b = e; g < v; ++g)
      (b = La(A > 0 ? p[g] + " " + w : j(w, /&\f/g, p[g]))) && (a[x++] = b);
  return hr(e, t, n, i === 0 ? cr : l, a, c, u, h);
}
function Yh(e, t, n, r) {
  return hr(e, t, n, ja, Mi(Nh()), Rt(e, 2, -2), 0, r);
}
function zo(e, t, n, r, i) {
  return hr(e, t, n, ki, Rt(e, 0, r), Rt(e, r + 1, -1), r, i);
}
function Fa(e, t, n) {
  switch (Ih(e, t)) {
    case 5103:
      return V + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return V + e + e;
    case 4789:
      return tn + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return V + e + tn + e + G + e + e;
    case 5936:
      switch (J(e, t + 11)) {
        case 114:
          return V + e + G + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return V + e + G + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return V + e + G + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return V + e + G + e + e;
    case 6165:
      return V + e + G + "flex-" + e + e;
    case 5187:
      return V + e + j(e, /(\w+).+(:[^]+)/, V + "box-$1$2" + G + "flex-$1$2") + e;
    case 5443:
      return V + e + G + "flex-item-" + j(e, /flex-|-self/g, "") + (Me(e, /flex-|baseline/) ? "" : G + "grid-row-" + j(e, /flex-|-self/g, "")) + e;
    case 4675:
      return V + e + G + "flex-line-pack" + j(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return V + e + G + j(e, "shrink", "negative") + e;
    case 5292:
      return V + e + G + j(e, "basis", "preferred-size") + e;
    case 6060:
      return V + "box-" + j(e, "-grow", "") + V + e + G + j(e, "grow", "positive") + e;
    case 4554:
      return V + j(e, /([^-])(transform)/g, "$1" + V + "$2") + e;
    case 6187:
      return j(j(j(e, /(zoom-|grab)/, V + "$1"), /(image-set)/, V + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, V + "$1$`$1");
    case 4968:
      return j(j(e, /(.+:)(flex-)?(.*)/, V + "box-pack:$3" + G + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + V + e + e;
    case 4200:
      if (!Me(e, /flex-|baseline/)) return G + "grid-column-align" + Rt(e, t) + e;
      break;
    case 2592:
    case 3360:
      return G + j(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, i) {
        return t = i, Me(r.props, /grid-\w+-end/);
      }) ? ~Vn(e + (n = n[t].value), "span", 0) ? e : G + j(e, "-start", "") + e + G + "grid-row-span:" + (~Vn(n, "span", 0) ? Me(n, /\d+/) : +Me(n, /\d+/) - +Me(e, /\d+/)) + ";" : G + j(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Me(r.props, /grid-\w+-start/);
      }) ? e : G + j(j(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, V + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Se(e) - 1 - t > 6)
        switch (J(e, t + 1)) {
          case 109:
            if (J(e, t + 4) !== 45)
              break;
          case 102:
            return j(e, /(.+:)(.+)-([^]+)/, "$1" + V + "$2-$3$1" + tn + (J(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Vn(e, "stretch", 0) ? Fa(j(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return j(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, i, s, o, l, a, c) {
        return G + i + ":" + s + c + (o ? G + i + "-span:" + (l ? a : +a - +s) + c : "") + e;
      });
    case 4949:
      if (J(e, t + 6) === 121)
        return j(e, ":", ":" + V) + e;
      break;
    case 6444:
      switch (J(e, J(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return j(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + V + (J(e, 14) === 45 ? "inline-" : "") + "box$3$1" + V + "$2$3$1" + G + "$2box$3") + e;
        case 100:
          return j(e, ":", ":" + G) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return j(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Xn(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Kh(e, t, n, r) {
  switch (e.type) {
    case Bh:
      if (e.children.length) break;
    case jh:
    case ki:
      return e.return = e.return || e.value;
    case ja:
      return "";
    case Ba:
      return e.return = e.value + "{" + Xn(e.children, r) + "}";
    case cr:
      if (!Se(e.value = e.props.join(","))) return "";
  }
  return Se(n = Xn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Xh(e) {
  var t = Na(e);
  return function(n, r, i, s) {
    for (var o = "", l = 0; l < t; l++)
      o += e[l](n, r, i, s) || "";
    return o;
  };
}
function Zh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Jh(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ki:
        e.return = Fa(e.value, e.length, n);
        return;
      case Ba:
        return Xn([He(e, { value: j(e.value, "@", "@" + V) })], r);
      case cr:
        if (e.length)
          return Lh(n = e.props, function(i) {
            switch (Me(i, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                At(He(e, { props: [j(i, /:(read-\w+)/, ":" + tn + "$1")] })), At(He(e, { props: [i] })), ei(e, { props: Vo(n, r) });
                break;
              case "::placeholder":
                At(He(e, { props: [j(i, /:(plac\w+)/, ":" + V + "input-$1")] })), At(He(e, { props: [j(i, /:(plac\w+)/, ":" + tn + "$1")] })), At(He(e, { props: [j(i, /:(plac\w+)/, G + "input-$1")] })), At(He(e, { props: [i] })), ei(e, { props: Vo(n, r) });
                break;
            }
            return "";
          });
    }
}
var qh = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, dt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", za = "active", Ga = "data-styled-version", fr = "6.1.13", Oi = `/*!sc*/
`, Zn = typeof window < "u" && "HTMLElement" in window, _h = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), $h = {}, Go = /invalid hook call/i, Rn = /* @__PURE__ */ new Set(), Qa = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var s = !0;
      console.error = function(o) {
        for (var l = [], a = 1; a < arguments.length; a++) l[a - 1] = arguments[a];
        Go.test(o) ? (s = !1, Rn.delete(r)) : i.apply(void 0, Ze([o], l, !1));
      }, ye(), s && !Rn.has(r) && (console.warn(r), Rn.add(r));
    } catch (o) {
      Go.test(o.message) && Rn.delete(r);
    } finally {
      console.error = i;
    }
  }
}, pr = Object.freeze([]), Mt = Object.freeze({});
function Ua(e, t, n) {
  return n === void 0 && (n = Mt), e.theme !== n.theme && e.theme || t || n.theme;
}
var ri = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ed = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, td = /(^-|-$)/g;
function Qo(e) {
  return e.replace(ed, "-").replace(td, "");
}
var nd = /(a)(d)/gi, kn = 52, Uo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ii(e) {
  var t, n = "";
  for (t = Math.abs(e); t > kn; t = t / kn | 0) n = Uo(t % kn) + n;
  return (Uo(t % kn) + n).replace(nd, "$1-$2");
}
var Br, Ha = 5381, at = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Wa = function(e) {
  return at(Ha, e);
};
function ji(e) {
  return ii(Wa(e) >>> 0);
}
function Ya(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ir(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ka = typeof Symbol == "function" && Symbol.for, Xa = Ka ? Symbol.for("react.memo") : 60115, rd = Ka ? Symbol.for("react.forward_ref") : 60112, id = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, od = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Za = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, sd = ((Br = {})[rd] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Br[Xa] = Za, Br);
function Ho(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Xa ? Za : "$$typeof" in e ? sd[e.$$typeof] : id;
  var t;
}
var ad = Object.defineProperty, ld = Object.getOwnPropertyNames, Wo = Object.getOwnPropertySymbols, cd = Object.getOwnPropertyDescriptor, ud = Object.getPrototypeOf, Yo = Object.prototype;
function Ja(e, t, n) {
  if (typeof t != "string") {
    if (Yo) {
      var r = ud(t);
      r && r !== Yo && Ja(e, r, n);
    }
    var i = ld(t);
    Wo && (i = i.concat(Wo(t)));
    for (var s = Ho(e), o = Ho(t), l = 0; l < i.length; ++l) {
      var a = i[l];
      if (!(a in od || n && n[a] || o && a in o || s && a in s)) {
        var c = cd(t, a);
        try {
          ad(e, a, c);
        } catch {
        }
      }
    }
  }
  return e;
}
function ft(e) {
  return typeof e == "function";
}
function Bi(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function lt(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Jn(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Ot(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function oi(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Ot(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = oi(e[r], t[r]);
  else if (Ot(t)) for (var r in t) e[r] = oi(e[r], t[r]);
  return e;
}
function Ii(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var hd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function dd() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], i = 1, s = e.length; i < s; i += 1) r.push(e[i]);
  return r.forEach(function(o) {
    n = n.replace(/%[a-z]/, o);
  }), n;
}
function Be(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(dd.apply(void 0, Ze([hd[e]], t, !1)).trim());
}
var fd = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, i = r.length, s = i; t >= s; ) if ((s <<= 1) < 0) throw Be(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
      for (var o = i; o < s; o++) this.groupSizes[o] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), a = (o = 0, n.length); o < a; o++) this.tag.insertRule(l, n[o]) && (this.groupSizes[t]++, l++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), i = r + n;
      this.groupSizes[t] = 0;
      for (var s = r; s < i; s++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], i = this.indexOfGroup(t), s = i + r, o = i; o < s; o++) n += "".concat(this.tag.getRule(o)).concat(Oi);
    return n;
  }, e;
}(), pd = 1 << 30, Gn = /* @__PURE__ */ new Map(), qn = /* @__PURE__ */ new Map(), Qn = 1, Mn = function(e) {
  if (Gn.has(e)) return Gn.get(e);
  for (; qn.has(Qn); ) Qn++;
  var t = Qn++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > pd)) throw Be(16, "".concat(t));
  return Gn.set(e, t), qn.set(t, e), t;
}, md = function(e, t) {
  Qn = t + 1, Gn.set(e, t), qn.set(t, e);
}, gd = "style[".concat(dt, "][").concat(Ga, '="').concat(fr, '"]'), vd = new RegExp("^".concat(dt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), yd = function(e, t, n) {
  for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++) (r = i[s]) && e.registerName(t, r);
}, Ad = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Oi), i = [], s = 0, o = r.length; s < o; s++) {
    var l = r[s].trim();
    if (l) {
      var a = l.match(vd);
      if (a) {
        var c = 0 | parseInt(a[1], 10), u = a[2];
        c !== 0 && (md(u, c), yd(e, u, a[3]), e.getTag().insertRules(c, i)), i.length = 0;
      } else i.push(l);
    }
  }
}, Ko = function(e) {
  for (var t = document.querySelectorAll(gd), n = 0, r = t.length; n < r; n++) {
    var i = t[n];
    i && i.getAttribute(dt) !== za && (Ad(e, i), i.parentNode && i.parentNode.removeChild(i));
  }
};
function xd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qa = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), i = function(l) {
    var a = Array.from(l.querySelectorAll("style[".concat(dt, "]")));
    return a[a.length - 1];
  }(n), s = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(dt, za), r.setAttribute(Ga, fr);
  var o = xd();
  return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
}, wd = function() {
  function e(t) {
    this.element = qa(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, i = 0, s = r.length; i < s; i++) {
        var o = r[i];
        if (o.ownerNode === n) return o;
      }
      throw Be(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), bd = function() {
  function e(t) {
    this.element = qa(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Ed = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Xo = Zn, Pd = { isServer: !Zn, useCSSOMInjection: !_h }, _n = function() {
  function e(t, n, r) {
    t === void 0 && (t = Mt), n === void 0 && (n = {});
    var i = this;
    this.options = q(q({}, Pd), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Zn && Xo && (Xo = !1, Ko(this)), Ii(this, function() {
      return function(s) {
        for (var o = s.getTag(), l = o.length, a = "", c = function(h) {
          var d = function(x) {
            return qn.get(x);
          }(h);
          if (d === void 0) return "continue";
          var p = s.names.get(d), v = o.getGroup(h);
          if (p === void 0 || !p.size || v.length === 0) return "continue";
          var y = "".concat(dt, ".g").concat(h, '[id="').concat(d, '"]'), A = "";
          p !== void 0 && p.forEach(function(x) {
            x.length > 0 && (A += "".concat(x, ","));
          }), a += "".concat(v).concat(y, '{content:"').concat(A, '"}').concat(Oi);
        }, u = 0; u < l; u++) c(u);
        return a;
      }(i);
    });
  }
  return e.registerId = function(t) {
    return Mn(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Zn && Ko(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(q(q({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, i = n.target;
      return n.isServer ? new Ed(i) : r ? new wd(i) : new bd(i);
    }(this.options), new fd(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Mn(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Mn(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Mn(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Sd = /&/g, Cd = /^\s*\/\/.*$/gm;
function _a(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = _a(n.children, t)), n;
  });
}
function Td(e) {
  var t, n, r, i = Mt, s = i.options, o = s === void 0 ? Mt : s, l = i.plugins, a = l === void 0 ? pr : l, c = function(d, p, v) {
    return v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0 ? ".".concat(t) : d;
  }, u = a.slice();
  u.push(function(d) {
    d.type === cr && d.value.includes("&") && (d.props[0] = d.props[0].replace(Sd, n).replace(r, c));
  }), o.prefix && u.push(Jh), u.push(Kh);
  var h = function(d, p, v, y) {
    p === void 0 && (p = ""), v === void 0 && (v = ""), y === void 0 && (y = "&"), t = y, n = p, r = new RegExp("\\".concat(n, "\\b"), "g");
    var A = d.replace(Cd, ""), x = Wh(v || p ? "".concat(v, " ").concat(p, " { ").concat(A, " }") : A);
    o.namespace && (x = _a(x, o.namespace));
    var g = [];
    return Xn(x, Xh(u.concat(Zh(function(w) {
      return g.push(w);
    })))), g;
  };
  return h.hash = a.length ? a.reduce(function(d, p) {
    return p.name || Be(15), at(d, p.name);
  }, Ha).toString() : "", h;
}
var Dd = new _n(), si = Td(), $a = ae.createContext({ shouldForwardProp: void 0, styleSheet: Dd, stylis: si });
$a.Consumer;
ae.createContext(void 0);
function ai() {
  return le($a);
}
var li = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(i, s) {
      s === void 0 && (s = si);
      var o = r.name + s.hash;
      i.hasNameForId(r.id, o) || i.insertRules(r.id, o, s(r.rules, o, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Ii(this, function() {
      throw Be(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = si), this.name + t.hash;
  }, e;
}(), Rd = function(e) {
  return e >= "A" && e <= "Z";
};
function Zo(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Rd(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var el = function(e) {
  return e == null || e === !1 || e === "";
}, tl = function(e) {
  var t, n, r = [];
  for (var i in e) {
    var s = e[i];
    e.hasOwnProperty(i) && !el(s) && (Array.isArray(s) && s.isCss || ft(s) ? r.push("".concat(Zo(i), ":"), s, ";") : Ot(s) ? r.push.apply(r, Ze(Ze(["".concat(i, " {")], tl(s), !1), ["}"], !1)) : r.push("".concat(Zo(i), ": ").concat((t = i, (n = s) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in qh || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Ke(e, t, n, r) {
  if (el(e)) return [];
  if (Bi(e)) return [".".concat(e.styledComponentId)];
  if (ft(e)) {
    if (!ft(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var i = e(t);
    return process.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof li || Ot(i) || i === null || console.error("".concat(Ya(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ke(i, t, n, r);
  }
  var s;
  return e instanceof li ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Ot(e) ? tl(e) : Array.isArray(e) ? Array.prototype.concat.apply(pr, e.map(function(o) {
    return Ke(o, t, n, r);
  })) : [e.toString()];
}
function nl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ft(n) && !Bi(n)) return !1;
  }
  return !0;
}
var kd = Wa(fr), Md = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && nl(t), this.componentId = n, this.baseHash = at(kd, n), this.baseStyle = r, _n.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) i = lt(i, this.staticRulesId);
    else {
      var s = Jn(Ke(this.rules, t, n, r)), o = ii(at(this.baseHash, s) >>> 0);
      if (!n.hasNameForId(this.componentId, o)) {
        var l = r(s, ".".concat(o), void 0, this.componentId);
        n.insertRules(this.componentId, o, l);
      }
      i = lt(i, o), this.staticRulesId = o;
    }
    else {
      for (var a = at(this.baseHash, r.hash), c = "", u = 0; u < this.rules.length; u++) {
        var h = this.rules[u];
        if (typeof h == "string") c += h, process.env.NODE_ENV !== "production" && (a = at(a, h));
        else if (h) {
          var d = Jn(Ke(h, t, n, r));
          a = at(a, d + u), c += d;
        }
      }
      if (c) {
        var p = ii(a >>> 0);
        n.hasNameForId(this.componentId, p) || n.insertRules(this.componentId, p, r(c, ".".concat(p), void 0, this.componentId)), i = lt(i, p);
      }
    }
    return i;
  }, e;
}(), hn = ae.createContext(void 0);
hn.Consumer;
function mr(e) {
  var t = ae.useContext(hn), n = vn(function() {
    return function(r, i) {
      if (!r) throw Be(14);
      if (ft(r)) {
        var s = r(i);
        if (process.env.NODE_ENV !== "production" && (s === null || Array.isArray(s) || typeof s != "object")) throw Be(7);
        return s;
      }
      if (Array.isArray(r) || typeof r != "object") throw Be(8);
      return i ? q(q({}, i), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? ae.createElement(hn.Provider, { value: n }, e.children) : null;
}
var Lr = {}, Jo = /* @__PURE__ */ new Set();
function Od(e, t, n) {
  var r = Bi(e), i = e, s = !Ir(e), o = t.attrs, l = o === void 0 ? pr : o, a = t.componentId, c = a === void 0 ? function(b, C) {
    var T = typeof b != "string" ? "sc" : Qo(b);
    Lr[T] = (Lr[T] || 0) + 1;
    var D = "".concat(T, "-").concat(ji(fr + T + Lr[T]));
    return C ? "".concat(C, "-").concat(D) : D;
  }(t.displayName, t.parentComponentId) : a, u = t.displayName, h = u === void 0 ? function(b) {
    return Ir(b) ? "styled.".concat(b) : "Styled(".concat(Ya(b), ")");
  }(e) : u, d = t.displayName && t.componentId ? "".concat(Qo(t.displayName), "-").concat(t.componentId) : t.componentId || c, p = r && i.attrs ? i.attrs.concat(l).filter(Boolean) : l, v = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var y = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var A = t.shouldForwardProp;
      v = function(b, C) {
        return y(b, C) && A(b, C);
      };
    } else v = y;
  }
  var x = new Md(n, d, r ? i.componentStyle : void 0);
  function g(b, C) {
    return function(T, D, k) {
      var Q = T.attrs, K = T.componentStyle, de = T.defaultProps, nt = T.foldedComponentIds, re = T.styledComponentId, fe = T.target, ze = ae.useContext(hn), Ut = ai(), H = T.shouldForwardProp || Ut.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Do(re);
      var ie = Ua(D, ze, de) || Mt, ee = function(mt, ke, Qe) {
        for (var xe, we = q(q({}, ke), { className: void 0, theme: Qe }), Ue = 0; Ue < mt.length; Ue += 1) {
          var gt = ft(xe = mt[Ue]) ? xe(we) : xe;
          for (var be in gt) we[be] = be === "className" ? lt(we[be], gt[be]) : be === "style" ? q(q({}, we[be]), gt[be]) : gt[be];
        }
        return ke.className && (we.className = lt(we.className, ke.className)), we;
      }(Q, D, ie), pe = ee.as || fe, Ge = {};
      for (var oe in ee) ee[oe] === void 0 || oe[0] === "$" || oe === "as" || oe === "theme" && ee.theme === ie || (oe === "forwardedAs" ? Ge.as = ee.forwardedAs : H && !H(oe, pe) || (Ge[oe] = ee[oe], H || process.env.NODE_ENV !== "development" || Oh(oe) || Jo.has(oe) || !ri.has(pe) || (Jo.add(oe), console.warn('styled-components: it looks like an unknown prop "'.concat(oe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var pt = function(mt, ke) {
        var Qe = ai(), xe = mt.generateAndInjectStyles(ke, Qe.styleSheet, Qe.stylis);
        return process.env.NODE_ENV !== "production" && Do(xe), xe;
      }(K, ee);
      process.env.NODE_ENV !== "production" && T.warnTooManyClasses && T.warnTooManyClasses(pt);
      var Ht = lt(nt, re);
      return pt && (Ht += " " + pt), ee.className && (Ht += " " + ee.className), Ge[Ir(pe) && !ri.has(pe) ? "class" : "className"] = Ht, Ge.ref = k, ya(pe, Ge);
    }(w, b, C);
  }
  g.displayName = h;
  var w = ae.forwardRef(g);
  return w.attrs = p, w.componentStyle = x, w.displayName = h, w.shouldForwardProp = v, w.foldedComponentIds = r ? lt(i.foldedComponentIds, i.styledComponentId) : "", w.styledComponentId = d, w.target = r ? i.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(C) {
      for (var T = [], D = 1; D < arguments.length; D++) T[D - 1] = arguments[D];
      for (var k = 0, Q = T; k < Q.length; k++) oi(C, Q[k], !0);
      return C;
    }({}, i.defaultProps, b) : b;
  } }), process.env.NODE_ENV !== "production" && (Qa(h, d), w.warnTooManyClasses = /* @__PURE__ */ function(b, C) {
    var T = {}, D = !1;
    return function(k) {
      if (!D && (T[k] = !0, Object.keys(T).length >= 200)) {
        var Q = C ? ' with the id of "'.concat(C, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), D = !0, T = {};
      }
    };
  }(h, d)), Ii(w, function() {
    return ".".concat(w.styledComponentId);
  }), s && Ja(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function qo(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var _o = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Li(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ft(e) || Ot(e)) return _o(Ke(qo(pr, Ze([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Ke(r) : _o(Ke(qo(r, t)));
}
function ci(e, t, n) {
  if (n === void 0 && (n = Mt), !t) throw Be(1, t);
  var r = function(i) {
    for (var s = [], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
    return e(t, n, Li.apply(void 0, Ze([i], s, !1)));
  };
  return r.attrs = function(i) {
    return ci(e, t, q(q({}, n), { attrs: Array.prototype.concat(n.attrs, i).filter(Boolean) }));
  }, r.withConfig = function(i) {
    return ci(e, t, q(q({}, n), i));
  }, r;
}
var rl = function(e) {
  return ci(Od, e);
}, O = rl;
ri.forEach(function(e) {
  O[e] = rl(e);
});
var jd = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = nl(t), _n.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, n, r, i) {
    var s = i(Jn(Ke(this.rules, n, r, i)), ""), o = this.componentId + t;
    r.insertRules(o, o, s);
  }, e.prototype.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, n, r, i) {
    t > 2 && _n.registerId(this.componentId + t), this.removeStyles(t, r), this.createStyles(t, n, r, i);
  }, e;
}();
function il(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Li.apply(void 0, Ze([e], t, !1)), i = "sc-global-".concat(ji(JSON.stringify(r))), s = new jd(r, i);
  process.env.NODE_ENV !== "production" && Qa(i);
  var o = function(a) {
    var c = ai(), u = ae.useContext(hn), h = ae.useRef(c.styleSheet.allocateGSInstance(i)).current;
    return process.env.NODE_ENV !== "production" && ae.Children.count(a.children) && console.warn("The global style component ".concat(i, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && r.some(function(d) {
      return typeof d == "string" && d.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), c.styleSheet.server && l(h, a, c.styleSheet, u, c.stylis), ae.useLayoutEffect(function() {
      if (!c.styleSheet.server) return l(h, a, c.styleSheet, u, c.stylis), function() {
        return s.removeStyles(h, c.styleSheet);
      };
    }, [h, a, c.styleSheet, u, c.stylis]), null;
  };
  function l(a, c, u, h, d) {
    if (s.isStatic) s.renderStyles(a, $h, u, d);
    else {
      var p = q(q({}, c), { theme: Ua(c, h, o.defaultProps) });
      s.renderStyles(a, p, u, d);
    }
  }
  return ae.memo(o);
}
function Ni(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Jn(Li.apply(void 0, Ze([e], t, !1))), i = ji(r);
  return new li(i, r);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var On = "__sc-".concat(dt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[On] || (window[On] = 0), window[On] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[On] += 1);
const Tt = {
  body: "#FCF6F4",
  text: "#000000",
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "252, 246, 244",
  textRgba: "0, 0, 0"
}, jt = {
  body: "#000000",
  text: "#FCF6F4",
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: "252, 246, 244",
  bodyRgba: "0, 0, 0"
}, Bd = il`
  *, *::before, *::after, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    display: inline-block;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
  }
`, $o = /* @__PURE__ */ new Set();
function gr(e, t, n) {
  e || $o.has(t) || (console.warn(t), $o.add(t));
}
function Id(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && gr(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
  });
}
function dn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const ui = (e) => Array.isArray(e);
function ol(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function fn(e) {
  return typeof e == "string" || Array.isArray(e);
}
function es(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Vi(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = es(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, s] = es(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function vr(e, t, n) {
  const r = e.getProps();
  return Vi(r, t, n !== void 0 ? n : r.custom, e);
}
const Fi = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], zi = ["initial", ...Fi], bn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], et = new Set(bn), Ce = (e) => e * 1e3, Ie = (e) => e / 1e3, Ld = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Nd = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Vd = {
  type: "keyframes",
  duration: 0.8
}, Fd = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, zd = (e, { keyframes: t }) => t.length > 2 ? Vd : et.has(e) ? e.startsWith("scale") ? Nd(t[1]) : Ld : Fd;
function Gi(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Gd = {
  skipAnimations: !1,
  useManualTiming: !1
}, Qd = (e) => e !== null;
function yr(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Qd), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const $ = (e) => e;
function Ud(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    s.has(c) && (a.schedule(c), e()), c(o);
  }
  const a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, h = !1) => {
      const p = h && r ? t : n;
      return u && s.add(c), p.has(c) || p.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), s.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (o = c, r) {
        i = !0;
        return;
      }
      r = !0, [t, n] = [n, t], n.clear(), t.forEach(l), r = !1, i && (i = !1, a.process(c));
    }
  };
  return a;
}
const jn = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Hd = 40;
function sl(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, o = jn.reduce((x, g) => (x[g] = Ud(s), x), {}), { read: l, resolveKeyframes: a, update: c, preRender: u, render: h, postRender: d } = o, p = () => {
    const x = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, Hd), 1), i.timestamp = x, i.isProcessing = !0, l.process(i), a.process(i), c.process(i), u.process(i), h.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(p));
  }, v = () => {
    n = !0, r = !0, i.isProcessing || e(p);
  };
  return { schedule: jn.reduce((x, g) => {
    const w = o[g];
    return x[g] = (b, C = !1, T = !1) => (n || v(), w.schedule(b, C, T)), x;
  }, {}), cancel: (x) => {
    for (let g = 0; g < jn.length; g++)
      o[jn[g]].cancel(x);
  }, state: i, steps: o };
}
const { schedule: F, cancel: Je, state: _, steps: Nr } = sl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $, !0), al = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Wd = 1e-7, Yd = 12;
function Kd(e, t, n, r, i) {
  let s, o, l = 0;
  do
    o = t + (n - t) / 2, s = al(o, r, i) - e, s > 0 ? n = o : t = o;
  while (Math.abs(s) > Wd && ++l < Yd);
  return o;
}
function En(e, t, n, r) {
  if (e === t && n === r)
    return $;
  const i = (s) => Kd(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : al(i(s), t, r);
}
const ll = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, cl = (e) => (t) => 1 - e(1 - t), ul = /* @__PURE__ */ En(0.33, 1.53, 0.69, 0.99), Qi = /* @__PURE__ */ cl(ul), hl = /* @__PURE__ */ ll(Qi), dl = (e) => (e *= 2) < 1 ? 0.5 * Qi(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Ui = (e) => 1 - Math.sin(Math.acos(e)), fl = cl(Ui), pl = ll(Ui), ml = (e) => /^0[^.\s]+$/u.test(e);
function Xd(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ml(e) : !0;
}
let Gt = $, qe = $;
process.env.NODE_ENV !== "production" && (Gt = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, qe = (e, t) => {
  if (!e)
    throw new Error(t);
});
const gl = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), vl = (e) => (t) => typeof t == "string" && t.startsWith(e), yl = /* @__PURE__ */ vl("--"), Zd = /* @__PURE__ */ vl("var(--"), Hi = (e) => Zd(e) ? Jd.test(e.split("/*")[0].trim()) : !1, Jd = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, qd = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function _d(e) {
  const t = qd.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const $d = 4;
function Al(e, t, n = 1) {
  qe(n <= $d, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, i] = _d(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return gl(o) ? parseFloat(o) : o;
  }
  return Hi(i) ? Al(i, t, n + 1) : i;
}
const _e = (e, t, n) => n > t ? t : n < e ? e : n, Qt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, pn = {
  ...Qt,
  transform: (e) => _e(0, 1, e)
}, Bn = {
  ...Qt,
  default: 1
}, Pn = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), We = /* @__PURE__ */ Pn("deg"), Te = /* @__PURE__ */ Pn("%"), R = /* @__PURE__ */ Pn("px"), ef = /* @__PURE__ */ Pn("vh"), tf = /* @__PURE__ */ Pn("vw"), ts = {
  ...Te,
  parse: (e) => Te.parse(e) / 100,
  transform: (e) => Te.transform(e * 100)
}, nf = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), ns = (e) => e === Qt || e === R, rs = (e, t) => parseFloat(e.split(", ")[t]), is = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return rs(i[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? rs(s[1], e) : 0;
  }
}, rf = /* @__PURE__ */ new Set(["x", "y", "z"]), of = bn.filter((e) => !rf.has(e));
function sf(e) {
  const t = [];
  return of.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Bt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: is(4, 13),
  y: is(5, 14)
};
Bt.translateX = Bt.x;
Bt.translateY = Bt.y;
const xl = (e) => (t) => t.test(e), af = {
  test: (e) => e === "auto",
  parse: (e) => e
}, wl = [Qt, R, Te, We, tf, ef, af], os = (e) => wl.find(xl(e)), ht = /* @__PURE__ */ new Set();
let hi = !1, di = !1;
function bl() {
  if (di) {
    const e = Array.from(ht).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = sf(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([s, o]) => {
        var l;
        (l = r.getValue(s)) === null || l === void 0 || l.set(o);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  di = !1, hi = !1, ht.forEach((e) => e.complete()), ht.clear();
}
function El() {
  ht.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (di = !0);
  });
}
function lf() {
  El(), bl();
}
class Wi {
  constructor(t, n, r, i, s, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ht.add(this), hi || (hi = !0, F.read(El), F.resolveKeyframes(bl))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(), l = t[t.length - 1];
          if (o !== void 0)
            t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
        } else
          t[s] = t[s - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ht.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, ht.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const nn = (e) => Math.round(e * 1e5) / 1e5, Yi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function cf(e) {
  return e == null;
}
const uf = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ki = (e, t) => (n) => !!(typeof n == "string" && uf.test(n) && n.startsWith(e) || t && !cf(n) && Object.prototype.hasOwnProperty.call(n, t)), Pl = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, s, o, l] = r.match(Yi);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, hf = (e) => _e(0, 255, e), Vr = {
  ...Qt,
  transform: (e) => Math.round(hf(e))
}, ct = {
  test: /* @__PURE__ */ Ki("rgb", "red"),
  parse: /* @__PURE__ */ Pl("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Vr.transform(e) + ", " + Vr.transform(t) + ", " + Vr.transform(n) + ", " + nn(pn.transform(r)) + ")"
};
function df(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const fi = {
  test: /* @__PURE__ */ Ki("#"),
  parse: df,
  transform: ct.transform
}, bt = {
  test: /* @__PURE__ */ Ki("hsl", "hue"),
  parse: /* @__PURE__ */ Pl("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Te.transform(nn(t)) + ", " + Te.transform(nn(n)) + ", " + nn(pn.transform(r)) + ")"
}, te = {
  test: (e) => ct.test(e) || fi.test(e) || bt.test(e),
  parse: (e) => ct.test(e) ? ct.parse(e) : bt.test(e) ? bt.parse(e) : fi.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? ct.transform(e) : bt.transform(e)
}, ff = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function pf(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Yi)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(ff)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Sl = "number", Cl = "color", mf = "var", gf = "var(", ss = "${}", vf = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function mn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let s = 0;
  const l = t.replace(vf, (a) => (te.test(a) ? (r.color.push(s), i.push(Cl), n.push(te.parse(a))) : a.startsWith(gf) ? (r.var.push(s), i.push(mf), n.push(a)) : (r.number.push(s), i.push(Sl), n.push(parseFloat(a))), ++s, ss)).split(ss);
  return { values: n, split: l, indexes: r, types: i };
}
function Tl(e) {
  return mn(e).values;
}
function Dl(e) {
  const { split: t, types: n } = mn(e), r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (s += t[o], i[o] !== void 0) {
        const l = n[o];
        l === Sl ? s += nn(i[o]) : l === Cl ? s += te.transform(i[o]) : s += i[o];
      }
    return s;
  };
}
const yf = (e) => typeof e == "number" ? 0 : e;
function Af(e) {
  const t = Tl(e);
  return Dl(e)(t.map(yf));
}
const $e = {
  test: pf,
  parse: Tl,
  createTransformer: Dl,
  getAnimatableNone: Af
}, xf = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function wf(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Yi) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let s = xf.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const bf = /\b([a-z-]*)\(.*?\)/gu, pi = {
  ...$e,
  getAnimatableNone: (e) => {
    const t = e.match(bf);
    return t ? t.map(wf).join(" ") : e;
  }
}, Ef = {
  // Border props
  borderWidth: R,
  borderTopWidth: R,
  borderRightWidth: R,
  borderBottomWidth: R,
  borderLeftWidth: R,
  borderRadius: R,
  radius: R,
  borderTopLeftRadius: R,
  borderTopRightRadius: R,
  borderBottomRightRadius: R,
  borderBottomLeftRadius: R,
  // Positioning props
  width: R,
  maxWidth: R,
  height: R,
  maxHeight: R,
  top: R,
  right: R,
  bottom: R,
  left: R,
  // Spacing props
  padding: R,
  paddingTop: R,
  paddingRight: R,
  paddingBottom: R,
  paddingLeft: R,
  margin: R,
  marginTop: R,
  marginRight: R,
  marginBottom: R,
  marginLeft: R,
  // Misc
  backgroundPositionX: R,
  backgroundPositionY: R
}, Pf = {
  rotate: We,
  rotateX: We,
  rotateY: We,
  rotateZ: We,
  scale: Bn,
  scaleX: Bn,
  scaleY: Bn,
  scaleZ: Bn,
  skew: We,
  skewX: We,
  skewY: We,
  distance: R,
  translateX: R,
  translateY: R,
  translateZ: R,
  x: R,
  y: R,
  z: R,
  perspective: R,
  transformPerspective: R,
  opacity: pn,
  originX: ts,
  originY: ts,
  originZ: R
}, as = {
  ...Qt,
  transform: Math.round
}, Xi = {
  ...Ef,
  ...Pf,
  zIndex: as,
  size: R,
  // SVG
  fillOpacity: pn,
  strokeOpacity: pn,
  numOctaves: as
}, Sf = {
  ...Xi,
  // Color props
  color: te,
  backgroundColor: te,
  outlineColor: te,
  fill: te,
  stroke: te,
  // Border props
  borderColor: te,
  borderTopColor: te,
  borderRightColor: te,
  borderBottomColor: te,
  borderLeftColor: te,
  filter: pi,
  WebkitFilter: pi
}, Zi = (e) => Sf[e];
function Rl(e, t) {
  let n = Zi(e);
  return n !== pi && (n = $e), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Cf = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Tf(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !Cf.has(s) && mn(s).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const s of t)
      e[s] = Rl(n, i);
}
class kl extends Wi {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let c = t[a];
      if (typeof c == "string" && (c = c.trim(), Hi(c))) {
        const u = Al(c, n.current);
        u !== void 0 && (t[a] = u), a === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !nf.has(r) || t.length !== 2)
      return;
    const [i, s] = t, o = os(i), l = os(s);
    if (o !== l)
      if (ns(o) && ns(l))
        for (let a = 0; a < t.length; a++) {
          const c = t[a];
          typeof c == "string" && (t[a] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      Xd(t[i]) && r.push(i);
    r.length && Tf(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Bt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1, l = i[o];
    i[o] = Bt[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a, c]) => {
      n.getValue(a).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function Ji(e) {
  return typeof e == "function";
}
let Un;
function Df() {
  Un = void 0;
}
const De = {
  now: () => (Un === void 0 && De.set(_.isProcessing || Gd.useManualTiming ? _.timestamp : performance.now()), Un),
  set: (e) => {
    Un = e, queueMicrotask(Df);
  }
}, ls = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
($e.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Rf(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function kf(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], o = ls(i, t), l = ls(s, t);
  return Gt(o === l, `You are trying to animate ${t} from "${i}" to "${s}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${s} via the \`style\` property.`), !o || !l ? !1 : Rf(e) || (n === "spring" || Ji(n)) && r;
}
const Mf = 40;
class Ml {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = De.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: s,
      repeatType: o,
      ...l
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > Mf ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && lf(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = De.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: s, delay: o, onComplete: l, onUpdate: a, isGenerator: c } = this.options;
    if (!c && !kf(t, r, i, s))
      if (o)
        this.options.duration = 0;
      else {
        a == null || a(yr(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...u
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Ol(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Of = 5;
function jl(e, t, n) {
  const r = Math.max(t - Of, 0);
  return Ol(n - e(r), t - r);
}
const Fr = 1e-3, jf = 0.01, cs = 10, Bf = 0.05, If = 1;
function Lf({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i, s;
  Gt(e <= Ce(cs), "Spring duration must be 10 seconds or less");
  let o = 1 - t;
  o = _e(Bf, If, o), e = _e(jf, cs, Ie(e)), o < 1 ? (i = (c) => {
    const u = c * o, h = u * e, d = u - n, p = mi(c, o), v = Math.exp(-h);
    return Fr - d / p * v;
  }, s = (c) => {
    const h = c * o * e, d = h * n + n, p = Math.pow(o, 2) * Math.pow(c, 2) * e, v = Math.exp(-h), y = mi(Math.pow(c, 2), o);
    return (-i(c) + Fr > 0 ? -1 : 1) * ((d - p) * v) / y;
  }) : (i = (c) => {
    const u = Math.exp(-c * e), h = (c - n) * e + 1;
    return -Fr + u * h;
  }, s = (c) => {
    const u = Math.exp(-c * e), h = (n - c) * (e * e);
    return u * h;
  });
  const l = 5 / e, a = Vf(i, s, l);
  if (e = Ce(e), isNaN(a))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(a, 2) * r;
    return {
      stiffness: c,
      damping: o * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Nf = 12;
function Vf(e, t, n) {
  let r = n;
  for (let i = 1; i < Nf; i++)
    r = r - e(r) / t(r);
  return r;
}
function mi(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Ff = ["duration", "bounce"], zf = ["stiffness", "damping", "mass"];
function us(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Gf(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!us(e, zf) && us(e, Ff)) {
    const n = Lf(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Bl({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0], s = e[e.length - 1], o = { done: !1, value: i }, { stiffness: l, damping: a, mass: c, duration: u, velocity: h, isResolvedFromDuration: d } = Gf({
    ...r,
    velocity: -Ie(r.velocity || 0)
  }), p = h || 0, v = a / (2 * Math.sqrt(l * c)), y = s - i, A = Ie(Math.sqrt(l / c)), x = Math.abs(y) < 5;
  n || (n = x ? 0.01 : 2), t || (t = x ? 5e-3 : 0.5);
  let g;
  if (v < 1) {
    const w = mi(A, v);
    g = (b) => {
      const C = Math.exp(-v * A * b);
      return s - C * ((p + v * A * y) / w * Math.sin(w * b) + y * Math.cos(w * b));
    };
  } else if (v === 1)
    g = (w) => s - Math.exp(-A * w) * (y + (p + A * y) * w);
  else {
    const w = A * Math.sqrt(v * v - 1);
    g = (b) => {
      const C = Math.exp(-v * A * b), T = Math.min(w * b, 300);
      return s - C * ((p + v * A * y) * Math.sinh(T) + w * y * Math.cosh(T)) / w;
    };
  }
  return {
    calculatedDuration: d && u || null,
    next: (w) => {
      const b = g(w);
      if (d)
        o.done = w >= u;
      else {
        let C = 0;
        v < 1 && (C = w === 0 ? Ce(p) : jl(g, w, b));
        const T = Math.abs(C) <= n, D = Math.abs(s - b) <= t;
        o.done = T && D;
      }
      return o.value = o.done ? s : b, o;
    }
  };
}
function hs({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: l, max: a, restDelta: c = 0.5, restSpeed: u }) {
  const h = e[0], d = {
    done: !1,
    value: h
  }, p = (k) => l !== void 0 && k < l || a !== void 0 && k > a, v = (k) => l === void 0 ? a : a === void 0 || Math.abs(l - k) < Math.abs(a - k) ? l : a;
  let y = n * t;
  const A = h + y, x = o === void 0 ? A : o(A);
  x !== A && (y = x - h);
  const g = (k) => -y * Math.exp(-k / r), w = (k) => x + g(k), b = (k) => {
    const Q = g(k), K = w(k);
    d.done = Math.abs(Q) <= c, d.value = d.done ? x : K;
  };
  let C, T;
  const D = (k) => {
    p(d.value) && (C = k, T = Bl({
      keyframes: [d.value, v(d.value)],
      velocity: jl(w, k, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: s,
      restDelta: c,
      restSpeed: u
    }));
  };
  return D(0), {
    calculatedDuration: null,
    next: (k) => {
      let Q = !1;
      return !T && C === void 0 && (Q = !0, b(k), D(k)), C !== void 0 && k >= C ? T.next(k - C) : (!Q && b(k), d);
    }
  };
}
const Qf = /* @__PURE__ */ En(0.42, 0, 1, 1), Uf = /* @__PURE__ */ En(0, 0, 0.58, 1), Il = /* @__PURE__ */ En(0.42, 0, 0.58, 1), Hf = (e) => Array.isArray(e) && typeof e[0] != "number", qi = (e) => Array.isArray(e) && typeof e[0] == "number", ds = {
  linear: $,
  easeIn: Qf,
  easeInOut: Il,
  easeOut: Uf,
  circIn: Ui,
  circInOut: pl,
  circOut: fl,
  backIn: Qi,
  backInOut: hl,
  backOut: ul,
  anticipate: dl
}, fs = (e) => {
  if (qi(e)) {
    qe(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, i] = e;
    return En(t, n, r, i);
  } else if (typeof e == "string")
    return qe(ds[e] !== void 0, `Invalid easing type '${e}'`), ds[e];
  return e;
}, Wf = (e, t) => (n) => t(e(n)), Le = (...e) => e.reduce(Wf), It = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, U = (e, t, n) => e + (t - e) * n;
function zr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Yf({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, s = 0, o = 0;
  if (!t)
    i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - l;
    i = zr(a, l, e + 1 / 3), s = zr(a, l, e), o = zr(a, l, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function $n(e, t) {
  return (n) => n > 0 ? t : e;
}
const Gr = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, Kf = [fi, ct, bt], Xf = (e) => Kf.find((t) => t.test(e));
function ps(e) {
  const t = Xf(e);
  if (Gt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === bt && (n = Yf(n)), n;
}
const ms = (e, t) => {
  const n = ps(e), r = ps(t);
  if (!n || !r)
    return $n(e, t);
  const i = { ...n };
  return (s) => (i.red = Gr(n.red, r.red, s), i.green = Gr(n.green, r.green, s), i.blue = Gr(n.blue, r.blue, s), i.alpha = U(n.alpha, r.alpha, s), ct.transform(i));
}, gi = /* @__PURE__ */ new Set(["none", "hidden"]);
function Zf(e, t) {
  return gi.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Jf(e, t) {
  return (n) => U(e, t, n);
}
function _i(e) {
  return typeof e == "number" ? Jf : typeof e == "string" ? Hi(e) ? $n : te.test(e) ? ms : $f : Array.isArray(e) ? Ll : typeof e == "object" ? te.test(e) ? ms : qf : $n;
}
function Ll(e, t) {
  const n = [...e], r = n.length, i = e.map((s, o) => _i(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++)
      n[o] = i[o](s);
    return n;
  };
}
function qf(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = _i(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}
function _f(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s], l = e.indexes[o][i[o]], a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[s] = a, i[o]++;
  }
  return r;
}
const $f = (e, t) => {
  const n = $e.createTransformer(t), r = mn(e), i = mn(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? gi.has(e) && !i.values.length || gi.has(t) && !r.values.length ? Zf(e, t) : Le(Ll(_f(r, i), i.values), n) : (Gt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), $n(e, t));
};
function Nl(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? U(e, t, n) : _i(e)(e, t);
}
function ep(e, t, n) {
  const r = [], i = n || Nl, s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || $ : t;
      l = Le(a, l);
    }
    r.push(l);
  }
  return r;
}
function tp(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (qe(s === t.length, "Both input and output ranges must be the same length"), s === 1)
    return () => t[0];
  if (s === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const o = ep(t, r, i), l = o.length, a = (c) => {
    let u = 0;
    if (l > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const h = It(e[u], e[u + 1], c);
    return o[u](h);
  };
  return n ? (c) => a(_e(e[0], e[s - 1], c)) : a;
}
function np(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = It(0, t, r);
    e.push(U(n, 1, i));
  }
}
function rp(e) {
  const t = [0];
  return np(t, e.length - 1), t;
}
function ip(e, t) {
  return e.map((n) => n * t);
}
function op(e, t) {
  return e.map(() => t || Il).splice(0, e.length - 1);
}
function er({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = Hf(r) ? r.map(fs) : fs(r), s = {
    done: !1,
    value: t[0]
  }, o = ip(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : rp(t),
    e
  ), l = tp(o, t, {
    ease: Array.isArray(i) ? i : op(t, i)
  });
  return {
    calculatedDuration: e,
    next: (a) => (s.value = l(a), s.done = a >= e, s)
  };
}
const gs = 2e4;
function sp(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < gs; )
    t += n, r = e.next(t);
  return t >= gs ? 1 / 0 : t;
}
const ap = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => F.update(t, !0),
    stop: () => Je(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => _.isProcessing ? _.timestamp : De.now()
  };
}, lp = {
  decay: hs,
  inertia: hs,
  tween: er,
  keyframes: er,
  spring: Bl
}, cp = (e) => e / 100;
class $i extends Ml {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: a } = this.options;
      a && a();
    };
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options, o = (i == null ? void 0 : i.KeyframeResolver) || Wi, l = (a, c) => this.onKeyframesResolved(a, c);
    this.resolver = new o(s, l, n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: o = 0 } = this.options, l = Ji(n) ? n : lp[n] || er;
    let a, c;
    l !== er && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && qe(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), a = Le(cp, Nl(t[0], t[1])), t = [0, 100]);
    const u = l({ ...this.options, keyframes: t });
    s === "mirror" && (c = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = sp(u));
    const { calculatedDuration: h } = u, d = h + i, p = d * (r + 1) - i;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: a,
      calculatedDuration: h,
      resolvedDuration: d,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: k } = this.options;
      return { done: !0, value: k[k.length - 1] };
    }
    const { finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: c, totalDuration: u, resolvedDuration: h } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: d, repeat: p, repeatType: v, repeatDelay: y, onUpdate: A } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const x = this.currentTime - d * (this.speed >= 0 ? 1 : -1), g = this.speed >= 0 ? x < 0 : x > u;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let w = this.currentTime, b = s;
    if (p) {
      const k = Math.min(this.currentTime, u) / h;
      let Q = Math.floor(k), K = k % 1;
      !K && k >= 1 && (K = 1), K === 1 && Q--, Q = Math.min(Q, p + 1), !!(Q % 2) && (v === "reverse" ? (K = 1 - K, y && (K -= y / h)) : v === "mirror" && (b = o)), w = _e(0, 1, K) * h;
    }
    const C = g ? { done: !1, value: a[0] } : b.next(w);
    l && (C.value = l(C.value));
    let { done: T } = C;
    !g && c !== null && (T = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const D = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return D && i !== void 0 && (C.value = yr(a, this.options, i)), A && A(C.value), D && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ie(t.calculatedDuration) : 0;
  }
  get time() {
    return Ie(this.currentTime);
  }
  set time(t) {
    t = Ce(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Ie(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = ap, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const Vl = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), up = 10, hp = (e, t) => {
  let n = "";
  const r = Math.max(Math.round(t / up), 2);
  for (let i = 0; i < r; i++)
    n += e(It(0, r - 1, i)) + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
};
function eo(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const dp = {
  linearEasing: void 0
};
function fp(e, t) {
  const n = eo(e);
  return () => {
    var r;
    return (r = dp[t]) !== null && r !== void 0 ? r : n();
  };
}
const tr = /* @__PURE__ */ fp(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Fl(e) {
  return !!(typeof e == "function" && tr() || !e || typeof e == "string" && (e in vi || tr()) || qi(e) || Array.isArray(e) && e.every(Fl));
}
const $t = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, vi = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ $t([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ $t([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ $t([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ $t([0.33, 1.53, 0.69, 0.99])
};
function zl(e, t) {
  if (e)
    return typeof e == "function" && tr() ? hp(e, t) : qi(e) ? $t(e) : Array.isArray(e) ? e.map((n) => zl(n, t) || vi.easeOut) : vi[e];
}
function pp(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = "loop", ease: l, times: a } = {}) {
  const c = { [t]: n };
  a && (c.offset = a);
  const u = zl(l, i);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: r,
    duration: i,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
function vs(e, t) {
  e.timeline = t, e.onfinish = null;
}
const mp = /* @__PURE__ */ eo(() => Object.hasOwnProperty.call(Element.prototype, "animate")), nr = 10, gp = 2e4;
function vp(e) {
  return Ji(e.type) || e.type === "spring" || !Fl(e.ease);
}
function yp(e, t) {
  const n = new $i({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < gp; )
    r = n.sample(s), i.push(r.value), s += nr;
  return {
    times: void 0,
    keyframes: i,
    duration: s - nr,
    ease: "linear"
  };
}
const Gl = {
  anticipate: dl,
  backInOut: hl,
  circInOut: pl
};
function Ap(e) {
  return e in Gl;
}
class ys extends Ml {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    this.resolver = new kl(s, (o, l) => this.onKeyframesResolved(o, l), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: i = 300, times: s, ease: o, type: l, motionValue: a, name: c, startTime: u } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current))
      return !1;
    if (typeof o == "string" && tr() && Ap(o) && (o = Gl[o]), vp(this.options)) {
      const { onComplete: d, onUpdate: p, motionValue: v, element: y, ...A } = this.options, x = yp(t, A);
      t = x.keyframes, t.length === 1 && (t[1] = t[0]), i = x.duration, s = x.times, o = x.ease, l = "keyframes";
    }
    const h = pp(a.owner.current, c, t, { ...this.options, duration: i, times: s, ease: o });
    return h.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (vs(h, this.pendingTimeline), this.pendingTimeline = void 0) : h.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(yr(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: h,
      duration: i,
      times: s,
      type: l,
      ease: o,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return Ie(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return Ie(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = Ce(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return $;
      const { animation: r } = n;
      vs(r, t);
    }
    return $;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: i, type: s, ease: o, times: l } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: h, element: d, ...p } = this.options, v = new $i({
        ...p,
        keyframes: r,
        duration: i,
        type: s,
        ease: o,
        times: l,
        isGenerator: !0
      }), y = Ce(this.time);
      c.setWithVelocity(v.sample(y - nr).value, v.sample(y).value, nr);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: l } = t;
    return mp() && r && Vl.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !i && s !== "mirror" && o !== 0 && l !== "inertia";
  }
}
const xp = eo(() => window.ScrollTimeline !== void 0);
class wp {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => xp() && i.attachTimeline ? i.attachTimeline(t) : n(i));
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function bp({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const to = (e, t, n, r = {}, i, s) => (o) => {
  const l = Gi(r, e) || {}, a = l.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - Ce(a);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -c,
    onUpdate: (d) => {
      t.set(d), l.onUpdate && l.onUpdate(d);
    },
    onComplete: () => {
      o(), l.onComplete && l.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : i
  };
  bp(l) || (u = {
    ...u,
    ...zd(e, u)
  }), u.duration && (u.duration = Ce(u.duration)), u.repeatDelay && (u.repeatDelay = Ce(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (h = !0)), h && !s && t.get() !== void 0) {
    const d = yr(u.keyframes, l);
    if (d !== void 0)
      return F.update(() => {
        u.onUpdate(d), u.onComplete();
      }), new wp([]);
  }
  return !s && ys.supports(u) ? new ys(u) : new $i(u);
}, Ep = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Pp = (e) => ui(e) ? e[e.length - 1] || 0 : e;
function no(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ro(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class io {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return no(this.subscriptions, t), () => ro(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const As = 30, Sp = (e) => !isNaN(parseFloat(e));
class Cp {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.11.7", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      const s = De.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = De.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Sp(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && gr(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new io());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), F.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = De.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > As)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, As);
    return Ol(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function gn(e, t) {
  return new Cp(e, t);
}
function Tp(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, gn(n));
}
function Dp(e, t) {
  const n = vr(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = Pp(s[o]);
    Tp(e, o, l);
  }
}
const Ar = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Rp = "framerAppearId", Ql = "data-" + Ar(Rp);
function Ul(e) {
  return e.props[Ql];
}
const ne = (e) => !!(e && e.getVelocity);
function kp(e) {
  return !!(ne(e) && e.add);
}
function Hl(e) {
  if (et.has(e))
    return "transform";
  if (Vl.has(e))
    return Ar(e);
}
function yi(e, t) {
  var n;
  if (!e.applyWillChange)
    return;
  const r = e.getValue("willChange");
  if (kp(r))
    return r.add(t);
  !(!((n = e.props.style) === null || n === void 0) && n.willChange) && Hl(t) && e.setStaticValue("willChange", "transform");
}
function Mp({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Wl(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (o = r);
  const c = [], u = i && e.animationState && e.animationState.getState()[i];
  for (const h in a) {
    const d = e.getValue(h, (s = e.latestValues[h]) !== null && s !== void 0 ? s : null), p = a[h];
    if (p === void 0 || u && Mp(u, h))
      continue;
    const v = {
      delay: n,
      ...Gi(o || {}, h)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const x = Ul(e);
      if (x) {
        const g = window.MotionHandoffAnimation(x, h, F);
        g !== null && (v.startTime = g, y = !0);
      }
    }
    yi(e, h), d.start(to(h, d, p, e.shouldReduceMotion && et.has(h) ? { type: !1 } : v, e, y));
    const A = d.animation;
    A && c.push(A);
  }
  return l && Promise.all(c).then(() => {
    F.update(() => {
      l && Dp(e, l);
    });
  }), c;
}
function Ai(e, t, n = {}) {
  var r;
  const i = vr(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Wl(e, i, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: h, staggerDirection: d } = s;
    return Op(e, t, u + c, h, d, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [c, u] = a === "beforeChildren" ? [o, l] : [l, o];
    return c().then(() => u());
  } else
    return Promise.all([o(), l(n.delay)]);
}
function Op(e, t, n = 0, r = 0, i = 1, s) {
  const o = [], l = (e.variantChildren.size - 1) * r, a = i === 1 ? (c = 0) => c * r : (c = 0) => l - c * r;
  return Array.from(e.variantChildren).sort(jp).forEach((c, u) => {
    c.notify("AnimationStart", t), o.push(Ai(c, t, {
      ...s,
      delay: n + a(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(o);
}
function jp(e, t) {
  return e.sortNodePosition(t);
}
function Bp(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ai(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = Ai(e, t, n);
  else {
    const i = typeof t == "function" ? vr(e, t, n.custom) : t;
    r = Promise.all(Wl(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Ip = zi.length;
function Yl(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Yl(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Ip; n++) {
    const r = zi[n], i = e.props[r];
    (fn(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const Lp = [...Fi].reverse(), Np = Fi.length;
function Vp(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Bp(e, n, r)));
}
function Fp(e) {
  let t = Vp(e), n = xs(), r = !0;
  const i = (a) => (c, u) => {
    var h;
    const d = vr(e, u, a === "exit" ? (h = e.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (d) {
      const { transition: p, transitionEnd: v, ...y } = d;
      c = { ...c, ...y, ...v };
    }
    return c;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const { props: c } = e, u = Yl(e.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let p = {}, v = 1 / 0;
    for (let A = 0; A < Np; A++) {
      const x = Lp[A], g = n[x], w = c[x] !== void 0 ? c[x] : u[x], b = fn(w), C = x === a ? g.isActive : null;
      C === !1 && (v = A);
      let T = w === u[x] && w !== c[x] && b;
      if (T && r && e.manuallyAnimateOnMount && (T = !1), g.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !w && !g.prevProp || // Or if the prop doesn't define an animation
      dn(w) || typeof w == "boolean")
        continue;
      const D = zp(g.prevProp, w);
      let k = D || // If we're making this variant active, we want to always make it active
      x === a && g.isActive && !T && b || // If we removed a higher-priority variant (i is in reverse order)
      A > v && b, Q = !1;
      const K = Array.isArray(w) ? w : [w];
      let de = K.reduce(i(x), {});
      C === !1 && (de = {});
      const { prevResolvedValues: nt = {} } = g, re = {
        ...nt,
        ...de
      }, fe = (H) => {
        k = !0, d.has(H) && (Q = !0, d.delete(H)), g.needsAnimating[H] = !0;
        const ie = e.getValue(H);
        ie && (ie.liveStyle = !1);
      };
      for (const H in re) {
        const ie = de[H], ee = nt[H];
        if (p.hasOwnProperty(H))
          continue;
        let pe = !1;
        ui(ie) && ui(ee) ? pe = !ol(ie, ee) : pe = ie !== ee, pe ? ie != null ? fe(H) : d.add(H) : ie !== void 0 && d.has(H) ? fe(H) : g.protectedKeys[H] = !0;
      }
      g.prevProp = w, g.prevResolvedValues = de, g.isActive && (p = { ...p, ...de }), r && e.blockInitialAnimation && (k = !1), k && (!(T && D) || Q) && h.push(...K.map((H) => ({
        animation: H,
        options: { type: x }
      })));
    }
    if (d.size) {
      const A = {};
      d.forEach((x) => {
        const g = e.getBaseTarget(x), w = e.getValue(x);
        w && (w.liveStyle = !0), A[x] = g ?? null;
      }), h.push({ animation: A });
    }
    let y = !!h.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, y ? t(h) : Promise.resolve();
  }
  function l(a, c) {
    var u;
    if (n[a].isActive === c)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((d) => {
      var p;
      return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(a, c);
    }), n[a].isActive = c;
    const h = o(a);
    for (const d in n)
      n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = xs(), r = !0;
    }
  };
}
function zp(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ol(t, e) : !1;
}
function it(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function xs() {
  return {
    animate: it(!0),
    whileInView: it(),
    whileHover: it(),
    whileTap: it(),
    whileDrag: it(),
    whileFocus: it(),
    exit: it()
  };
}
class tt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Gp extends tt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Fp(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    dn(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let Qp = 0;
class Up extends tt {
  constructor() {
    super(...arguments), this.id = Qp++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Hp = {
  animation: {
    Feature: Gp
  },
  exit: {
    Feature: Up
  }
}, Kl = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function xr(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const Wp = (e) => (t) => Kl(t) && e(t, xr(t));
function Oe(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ne(e, t, n, r) {
  return Oe(e, t, Wp(n), r);
}
const ws = (e, t) => Math.abs(e - t);
function Yp(e, t) {
  const n = ws(e.x, t.x), r = ws(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Xl {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = Ur(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = Yp(h.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !p)
        return;
      const { point: v } = h, { timestamp: y } = _;
      this.history.push({ ...v, timestamp: y });
      const { onStart: A, onMove: x } = this.handlers;
      d || (A && A(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, d) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = Qr(d, this.transformPagePoint), F.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, d) => {
      this.end();
      const { onEnd: p, onSessionEnd: v, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const A = Ur(h.type === "pointercancel" ? this.lastMoveEventInfo : Qr(d, this.transformPagePoint), this.history);
      this.startEvent && p && p(h, A), v && v(h, A);
    }, !Kl(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const o = xr(t), l = Qr(o, this.transformPagePoint), { point: a } = l, { timestamp: c } = _;
    this.history = [{ ...a, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Ur(l, this.history)), this.removeListeners = Le(Ne(this.contextWindow, "pointermove", this.handlePointerMove), Ne(this.contextWindow, "pointerup", this.handlePointerUp), Ne(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Je(this.updatePoint);
  }
}
function Qr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function bs(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ur({ point: e }, t) {
  return {
    point: e,
    delta: bs(e, Zl(t)),
    offset: bs(e, Kp(t)),
    velocity: Xp(t, 0.1)
  };
}
function Kp(e) {
  return e[0];
}
function Zl(e) {
  return e[e.length - 1];
}
function Xp(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = Zl(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Ce(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = Ie(i.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Jl(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Es = Jl("dragHorizontal"), Ps = Jl("dragVertical");
function ql(e) {
  let t = !1;
  if (e === "y")
    t = Ps();
  else if (e === "x")
    t = Es();
  else {
    const n = Es(), r = Ps();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function _l() {
  const e = ql(!0);
  return e ? (e(), !1) : !0;
}
function Et(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const $l = 1e-4, Zp = 1 - $l, Jp = 1 + $l, ec = 0.01, qp = 0 - ec, _p = 0 + ec;
function he(e) {
  return e.max - e.min;
}
function $p(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ss(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = U(t.min, t.max, e.origin), e.scale = he(n) / he(t), e.translate = U(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Zp && e.scale <= Jp || isNaN(e.scale)) && (e.scale = 1), (e.translate >= qp && e.translate <= _p || isNaN(e.translate)) && (e.translate = 0);
}
function rn(e, t, n, r) {
  Ss(e.x, t.x, n.x, r ? r.originX : void 0), Ss(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Cs(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + he(t);
}
function em(e, t, n) {
  Cs(e.x, t.x, n.x), Cs(e.y, t.y, n.y);
}
function Ts(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + he(t);
}
function on(e, t, n) {
  Ts(e.x, t.x, n.x), Ts(e.y, t.y, n.y);
}
function tm(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? U(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? U(n, e, r.max) : Math.min(e, n)), e;
}
function Ds(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function nm(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: Ds(e.x, n, i),
    y: Ds(e.y, t, r)
  };
}
function Rs(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function rm(e, t) {
  return {
    x: Rs(e.x, t.x),
    y: Rs(e.y, t.y)
  };
}
function im(e, t) {
  let n = 0.5;
  const r = he(e), i = he(t);
  return i > r ? n = It(t.min, t.max - r, e.min) : r > i && (n = It(e.min, e.max - i, t.min)), _e(0, 1, n);
}
function om(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const xi = 0.35;
function sm(e = xi) {
  return e === !1 ? e = 0 : e === !0 && (e = xi), {
    x: ks(e, "left", "right"),
    y: ks(e, "top", "bottom")
  };
}
function ks(e, t, n) {
  return {
    min: Ms(e, t),
    max: Ms(e, n)
  };
}
function Ms(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Os = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Pt = () => ({
  x: Os(),
  y: Os()
}), js = () => ({ min: 0, max: 0 }), Y = () => ({
  x: js(),
  y: js()
});
function ve(e) {
  return [e("x"), e("y")];
}
function tc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function am({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lm(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Hr(e) {
  return e === void 0 || e === 1;
}
function wi({ scale: e, scaleX: t, scaleY: n }) {
  return !Hr(e) || !Hr(t) || !Hr(n);
}
function ot(e) {
  return wi(e) || nc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function nc(e) {
  return Bs(e.x) || Bs(e.y);
}
function Bs(e) {
  return e && e !== "0%";
}
function rr(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function Is(e, t, n, r, i) {
  return i !== void 0 && (e = rr(e, i, r)), rr(e, n, r) + t;
}
function bi(e, t = 0, n = 1, r, i) {
  e.min = Is(e.min, t, n, r, i), e.max = Is(e.max, t, n, r, i);
}
function rc(e, { x: t, y: n }) {
  bi(e.x, t.translate, t.scale, t.originPoint), bi(e.y, n.translate, n.scale, n.originPoint);
}
const Ls = 0.999999999999, Ns = 1.0000000000001;
function cm(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    s = n[l], o = s.projectionDelta;
    const { visualElement: a } = s.options;
    a && a.props.style && a.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Ct(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, rc(e, o)), r && ot(s.latestValues) && Ct(e, s.latestValues));
  }
  t.x < Ns && t.x > Ls && (t.x = 1), t.y < Ns && t.y > Ls && (t.y = 1);
}
function St(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Vs(e, t, n, r, i = 0.5) {
  const s = U(e.min, e.max, i);
  bi(e, t, n, s, r);
}
function Ct(e, t) {
  Vs(e.x, t.x, t.scaleX, t.scale, t.originX), Vs(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function ic(e, t) {
  return tc(lm(e.getBoundingClientRect(), t));
}
function um(e, t, n) {
  const r = ic(e, n), { scroll: i } = t;
  return i && (St(r.x, i.offset.x), St(r.y, i.offset.y)), r;
}
const oc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, hm = /* @__PURE__ */ new WeakMap();
class dm {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Y(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (u) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(xr(u, "page").point);
    }, s = (u, h) => {
      const { drag: d, dragPropagation: p, onDragStart: v } = this.getProps();
      if (d && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ql(d), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ve((A) => {
        let x = this.getAxisMotionValue(A).get() || 0;
        if (Te.test(x)) {
          const { projection: g } = this.visualElement;
          if (g && g.layout) {
            const w = g.layout.layoutBox[A];
            w && (x = he(w) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[A] = x;
      }), v && F.postRender(() => v(u, h)), yi(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, o = (u, h) => {
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: v, onDrag: y } = this.getProps();
      if (!d && !this.openGlobalLock)
        return;
      const { offset: A } = h;
      if (p && this.currentDirection === null) {
        this.currentDirection = fm(A), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, A), this.updateAxis("y", h.point, A), this.visualElement.render(), y && y(u, h);
    }, l = (u, h) => this.stop(u, h), a = () => ve((u) => {
      var h;
      return this.getAnimationState(u) === "paused" && ((h = this.getAxisMotionValue(u).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Xl(t, {
      onSessionStart: i,
      onStart: s,
      onMove: o,
      onSessionEnd: l,
      resumeAnimation: a
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: oc(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && F.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !In(t, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = tm(o, this.constraints[t], this.elastic[t])), s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Et(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = nm(i.layoutBox, n) : this.constraints = !1, this.elastic = sm(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && ve((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = om(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Et(t))
      return !1;
    const r = t.current;
    qe(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const s = um(r, i.root, this.visualElement.getTransformPagePoint());
    let o = rm(i.layout.layoutBox, s);
    if (n) {
      const l = n(am(o));
      this.hasMutatedConstraints = !!l, l && (o = tc(l));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l } = this.getProps(), a = this.constraints || {}, c = ve((u) => {
      if (!In(u, n, this.currentDirection))
        return;
      let h = a && a[u] || {};
      o && (h = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, p = i ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: d,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...h
      };
      return this.startAxisValueAnimation(u, v);
    });
    return Promise.all(c).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return yi(this.visualElement, t), r.start(to(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ve((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ve((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    ve((n) => {
      const { drag: r } = this.getProps();
      if (!In(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - U(o, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Et(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ve((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = im({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ve((o) => {
      if (!In(o, t, null))
        return;
      const l = this.getAxisMotionValue(o), { min: a, max: c } = this.constraints[o];
      l.set(U(a, c, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    hm.set(this.visualElement, this);
    const t = this.visualElement.current, n = Ne(t, "pointerdown", (a) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(a);
    }), r = () => {
      const { dragConstraints: a } = this.getProps();
      Et(a) && a.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), F.read(r);
    const o = Oe(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: c }) => {
      this.isDragging && c && (ve((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += a[u].translate, h.set(h.get() + a[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = xi, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l
    };
  }
}
function In(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function fm(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class pm extends tt {
  constructor(t) {
    super(t), this.removeGroupControls = $, this.removeListeners = $, this.controls = new dm(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Fs = (e) => (t, n) => {
  e && F.postRender(() => e(t, n));
};
class mm extends tt {
  constructor() {
    super(...arguments), this.removePointerDownListener = $;
  }
  onPointerDown(t) {
    this.session = new Xl(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: oc(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Fs(t),
      onStart: Fs(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && F.postRender(() => i(s, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ne(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const oo = Nt(null);
function gm() {
  const e = le(oo);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, i = su();
  Ve(() => r(i), []);
  const s = Aa(() => n && n(i), [i, n]);
  return !t && n ? [!1, s] : [!0];
}
const sc = Nt({}), ac = Nt({}), Hn = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function zs(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Jt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (R.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = zs(e, t.target.x), r = zs(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, vm = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = $e.parse(e);
    if (i.length > 5)
      return r;
    const s = $e.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, l = n.x.scale * t.x, a = n.y.scale * t.y;
    i[0 + o] /= l, i[1 + o] /= a;
    const c = U(l, a, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= c), typeof i[3 + o] == "number" && (i[3 + o] /= c), s(i);
  }
}, ir = {};
function ym(e) {
  Object.assign(ir, e);
}
const { schedule: so, cancel: fv } = sl(queueMicrotask, !1);
class Am extends au {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = t;
    ym(xm), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Hn.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, o = r.projection;
    return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || F.postRender(() => {
      const l = o.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), so.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function lc(e) {
  const [t, n] = gm(), r = le(sc);
  return m.jsx(Am, { ...e, layoutGroup: r, switchLayoutGroup: le(ac), isPresent: t, safeToRemove: n });
}
const xm = {
  borderRadius: {
    ...Jt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Jt,
  borderTopRightRadius: Jt,
  borderBottomLeftRadius: Jt,
  borderBottomRightRadius: Jt,
  boxShadow: vm
}, cc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], wm = cc.length, Gs = (e) => typeof e == "string" ? parseFloat(e) : e, Qs = (e) => typeof e == "number" || R.test(e);
function bm(e, t, n, r, i, s) {
  i ? (e.opacity = U(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Em(r)
  ), e.opacityExit = U(t.opacity !== void 0 ? t.opacity : 1, 0, Pm(r))) : s && (e.opacity = U(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < wm; o++) {
    const l = `border${cc[o]}Radius`;
    let a = Us(t, l), c = Us(n, l);
    if (a === void 0 && c === void 0)
      continue;
    a || (a = 0), c || (c = 0), a === 0 || c === 0 || Qs(a) === Qs(c) ? (e[l] = Math.max(U(Gs(a), Gs(c), r), 0), (Te.test(c) || Te.test(a)) && (e[l] += "%")) : e[l] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = U(t.rotate || 0, n.rotate || 0, r));
}
function Us(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Em = /* @__PURE__ */ uc(0, 0.5, fl), Pm = /* @__PURE__ */ uc(0.5, 0.95, $);
function uc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(It(e, t, r));
}
function Hs(e, t) {
  e.min = t.min, e.max = t.max;
}
function ge(e, t) {
  Hs(e.x, t.x), Hs(e.y, t.y);
}
function Ws(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Ys(e, t, n, r, i) {
  return e -= t, e = rr(e, 1 / n, r), i !== void 0 && (e = rr(e, 1 / i, r)), e;
}
function Sm(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (Te.test(t) && (t = parseFloat(t), t = U(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let l = U(s.min, s.max, r);
  e === s && (l -= t), e.min = Ys(e.min, t, n, l, i), e.max = Ys(e.max, t, n, l, i);
}
function Ks(e, t, [n, r, i], s, o) {
  Sm(e, t[n], t[r], t[i], t.scale, s, o);
}
const Cm = ["x", "scaleX", "originX"], Tm = ["y", "scaleY", "originY"];
function Xs(e, t, n, r) {
  Ks(e.x, t, Cm, n ? n.x : void 0, r ? r.x : void 0), Ks(e.y, t, Tm, n ? n.y : void 0, r ? r.y : void 0);
}
function Zs(e) {
  return e.translate === 0 && e.scale === 1;
}
function hc(e) {
  return Zs(e.x) && Zs(e.y);
}
function Js(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Dm(e, t) {
  return Js(e.x, t.x) && Js(e.y, t.y);
}
function qs(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function dc(e, t) {
  return qs(e.x, t.x) && qs(e.y, t.y);
}
function _s(e) {
  return he(e.x) / he(e.y);
}
function $s(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Rm {
  constructor() {
    this.members = [];
  }
  add(t) {
    no(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ro(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function km(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, s = e.y.translate / t.y, o = (n == null ? void 0 : n.z) || 0;
  if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: h, rotateY: d, skewX: p, skewY: v } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), h && (r += `rotateX(${h}deg) `), d && (r += `rotateY(${d}deg) `), p && (r += `skewX(${p}deg) `), v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x, a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const Mm = (e, t) => e.depth - t.depth;
class Om {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    no(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ro(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Mm), this.isDirty = !1, this.children.forEach(t);
  }
}
function Wn(e) {
  const t = ne(e) ? e.get() : e;
  return Ep(t) ? t.toValue() : t;
}
function jm(e, t) {
  const n = De.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= t && (Je(r), e(s - t));
  };
  return F.read(r, !0), () => Je(r);
}
function Bm(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Im(e, t, n) {
  const r = ne(e) ? e : gn(e);
  return r.start(to("", r, t, n)), r.animation;
}
const st = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, en = typeof window < "u" && window.MotionDebug !== void 0, Wr = ["", "X", "Y", "Z"], Lm = { visibility: "hidden" }, ea = 1e3;
let Nm = 0;
function Yr(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function fc(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Ul(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", F, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && fc(r);
}
function pc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      this.id = Nm++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, en && (st.totalNodes = st.resolvedTargetDeltas = st.recalculatedProjection = 0), this.nodes.forEach(zm), this.nodes.forEach(Wm), this.nodes.forEach(Ym), this.nodes.forEach(Gm), en && window.MotionDebug.record(st);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Om());
    }
    addEventListener(o, l) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new io()), this.eventHandlers.get(o).add(l);
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Bm(o), this.instance = o;
      const { layoutId: a, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (c || a) && (this.isLayoutDirty = !0), e) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = jm(d, 250), Hn.hasAnimatedSinceResize && (Hn.hasAnimatedSinceResize = !1, this.nodes.forEach(na));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || c) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || u.getDefaultTransition() || qm, { onLayoutAnimationStart: A, onLayoutAnimationComplete: x } = u.getProps(), g = !this.targetLayout || !dc(this.targetLayout, v) || p, w = !d && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || w || d && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, w);
          const b = {
            ...Gi(y, "layout"),
            onPlay: A,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b);
        } else
          d || na(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Je(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Km), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && fc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ta);
        return;
      }
      this.isUpdating || this.nodes.forEach(Um), this.isUpdating = !1, this.nodes.forEach(Hm), this.nodes.forEach(Vm), this.nodes.forEach(Fm), this.clearAllSnapshots();
      const l = De.now();
      _.delta = _e(0, 1e3 / 60, l - _.timestamp), _.timestamp = l, _.isProcessing = !0, Nr.update.process(_), Nr.preRender.process(_), Nr.render.process(_), _.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, so.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Qm), this.sharedNodes.forEach(Xm);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      F.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++)
          this.path[a].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Y(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1), l) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !hc(this.projectionDelta), a = this.getTransformTemplate(), c = a ? a(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      o && (l || ot(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return o && (a = this.removeTransform(a)), _m(a), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: a,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var o;
      const { visualElement: l } = this.options;
      if (!l)
        return Y();
      const a = l.measureViewportBox();
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some($m))) {
        const { scroll: u } = this.root;
        u && (St(a.x, u.offset.x), St(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Y();
      if (ge(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: h, options: d } = u;
        u !== this.root && h && d.layoutScroll && (h.wasRoot && ge(a, o), St(a.x, h.offset.x), St(a.y, h.offset.y));
      }
      return a;
    }
    applyTransform(o, l = !1) {
      const a = Y();
      ge(a, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !l && u.options.layoutScroll && u.scroll && u !== u.root && Ct(a, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), ot(u.latestValues) && Ct(a, u.latestValues);
      }
      return ot(this.latestValues) && Ct(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = Y();
      ge(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const c = this.path[a];
        if (!c.instance || !ot(c.latestValues))
          continue;
        wi(c.latestValues) && c.updateSnapshot();
        const u = Y(), h = c.measurePageBox();
        ge(u, h), Xs(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return ot(this.latestValues) && Xs(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== a;
      if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (this.resolvedRelativeTargetAt = _.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), on(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), em(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ge(this.target, this.layout.layoutBox), rc(this.target, this.targetDelta)) : ge(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), on(this.relativeTargetOrigin, this.target, p.target), ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          en && st.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || wi(this.parent.latestValues) || nc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const l = this.getLead(), a = !!this.resumingFrom || this !== l;
      let c = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === _.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || h))
        return;
      ge(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, p = this.treeScale.y;
      cm(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = Y());
      const { target: v } = l;
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ws(this.prevProjectionDelta.x, this.projectionDelta.x), Ws(this.prevProjectionDelta.y, this.projectionDelta.y)), rn(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== p || !$s(this.projectionDelta.x, this.prevProjectionDelta.x) || !$s(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), en && st.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var l;
      if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Pt(), this.projectionDelta = Pt(), this.projectionDeltaWithTransform = Pt();
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot, c = a ? a.latestValues : {}, u = { ...this.latestValues }, h = Pt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const d = Y(), p = a ? a.source : void 0, v = this.layout ? this.layout.source : void 0, y = p !== v, A = this.getStack(), x = !A || A.members.length <= 1, g = !!(y && !x && this.options.crossfade === !0 && !this.path.some(Jm));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (b) => {
        const C = b / 1e3;
        ra(h.x, o.x, C), ra(h.y, o.y, C), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (on(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Zm(this.relativeTarget, this.relativeTargetOrigin, d, C), w && Dm(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = Y()), ge(w, this.relativeTarget)), y && (this.animationValues = u, bm(u, c, this.latestValues, C, g, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Je(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = F.update(() => {
        Hn.hasAnimatedSinceResize = !0, this.currentAnimation = Im(0, ea, {
          ...o,
          onUpdate: (l) => {
            this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ea), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: l, target: a, layout: c, latestValues: u } = o;
      if (!(!l || !a || !c)) {
        if (this !== o && this.layout && c && mc(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          a = this.target || Y();
          const h = he(this.layout.layoutBox.x);
          a.x.min = o.target.x.min, a.x.max = a.x.min + h;
          const d = he(this.layout.layoutBox.y);
          a.y.min = o.target.y.min, a.y.max = a.y.min + d;
        }
        ge(l, a), Ct(l, u), rn(this.projectionDeltaWithTransform, this.layoutCorrected, l, u);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Rm()), this.sharedNodes.get(o).add(l);
      const c = l.options.initialPromotionConfig;
      l.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const c = this.getStack();
      c && c.promote(this, a), o && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let l = !1;
      const { latestValues: a } = o;
      if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0), !l)
        return;
      const c = {};
      a.z && Yr("z", o, c, this.animationValues);
      for (let u = 0; u < Wr.length; u++)
        Yr(`rotate${Wr[u]}`, o, c, this.animationValues), Yr(`skew${Wr[u]}`, o, c, this.animationValues);
      o.render();
      for (const u in c)
        o.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Lm;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Wn(o == null ? void 0 : o.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Wn(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !ot(this.latestValues) && (y.transform = u ? u({}, "") : "none", this.hasProjected = !1), y;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), c.transform = km(this.projectionDeltaWithTransform, this.treeScale, d), u && (c.transform = u(d, c.transform));
      const { x: p, y: v } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`, h.animationValues ? c.opacity = h === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const y in ir) {
        if (d[y] === void 0)
          continue;
        const { correct: A, applyTo: x } = ir[y], g = c.transform === "none" ? d[y] : A(d[y], h);
        if (x) {
          const w = x.length;
          for (let b = 0; b < w; b++)
            c[x[b]] = g;
        } else
          c[y] = g;
      }
      return this.options.layoutId && (c.pointerEvents = h === this ? Wn(o == null ? void 0 : o.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(ta), this.root.sharedNodes.clear();
    }
  };
}
function Vm(e) {
  e.updateLayout();
}
function Fm(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: s } = e.options, o = n.source !== e.layout.source;
    s === "size" ? ve((h) => {
      const d = o ? n.measuredBox[h] : n.layoutBox[h], p = he(d);
      d.min = r[h].min, d.max = d.min + p;
    }) : mc(s, n.layoutBox, r) && ve((h) => {
      const d = o ? n.measuredBox[h] : n.layoutBox[h], p = he(r[h]);
      d.max = d.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + p);
    });
    const l = Pt();
    rn(l, r, n.layoutBox);
    const a = Pt();
    o ? rn(a, e.applyTransform(i, !0), n.measuredBox) : rn(a, r, n.layoutBox);
    const c = !hc(l);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: p } = h;
        if (d && p) {
          const v = Y();
          on(v, n.layoutBox, d.layoutBox);
          const y = Y();
          on(y, r, p.layoutBox), dc(v, y) || (u = !0), h.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = v, e.relativeParent = h);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function zm(e) {
  en && st.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Gm(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Qm(e) {
  e.clearSnapshot();
}
function ta(e) {
  e.clearMeasurements();
}
function Um(e) {
  e.isLayoutDirty = !1;
}
function Hm(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function na(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Wm(e) {
  e.resolveTargetDelta();
}
function Ym(e) {
  e.calcProjection();
}
function Km(e) {
  e.resetSkewAndRotation();
}
function Xm(e) {
  e.removeLeadSnapshot();
}
function ra(e, t, n) {
  e.translate = U(t.translate, 0, n), e.scale = U(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ia(e, t, n, r) {
  e.min = U(t.min, n.min, r), e.max = U(t.max, n.max, r);
}
function Zm(e, t, n, r) {
  ia(e.x, t.x, n.x, r), ia(e.y, t.y, n.y, r);
}
function Jm(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const qm = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, oa = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), sa = oa("applewebkit/") && !oa("chrome/") ? Math.round : $;
function aa(e) {
  e.min = sa(e.min), e.max = sa(e.max);
}
function _m(e) {
  aa(e.x), aa(e.y);
}
function mc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !$p(_s(t), _s(n), 0.2);
}
function $m(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const e0 = pc({
  attachResizeListener: (e, t) => Oe(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Kr = {
  current: void 0
}, gc = pc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Kr.current) {
      const e = new e0({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Kr.current = e;
    }
    return Kr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), t0 = {
  pan: {
    Feature: mm
  },
  drag: {
    Feature: pm,
    ProjectionNode: gc,
    MeasureLayout: lc
  }
};
function la(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (s, o) => {
    if (s.pointerType === "touch" || _l())
      return;
    const l = e.getProps();
    e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
    const a = l[r];
    a && F.postRender(() => a(s, o));
  };
  return Ne(e.current, n, i, {
    passive: !e.getProps()[r]
  });
}
class n0 extends tt {
  mount() {
    this.unmount = Le(la(this.node, !0), la(this.node, !1));
  }
  unmount() {
  }
}
class r0 extends tt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Le(Oe(this.node.current, "focus", () => this.onFocus()), Oe(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const vc = (e, t) => t ? e === t ? !0 : vc(e, t.parentElement) : !1;
function Xr(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, xr(n));
}
class i0 extends tt {
  constructor() {
    super(...arguments), this.removeStartListeners = $, this.removeEndListeners = $, this.removeAccessibleListeners = $, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), s = Ne(window, "pointerup", (l, a) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u, globalTapTarget: h } = this.node.getProps(), d = !h && !vc(this.node.current, l.target) ? u : c;
        d && F.update(() => d(l, a));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), o = Ne(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = Le(s, o), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (s) => {
        if (s.key !== "Enter" || this.isPressing)
          return;
        const o = (l) => {
          l.key !== "Enter" || !this.checkPressEnd() || Xr("up", (a, c) => {
            const { onTap: u } = this.node.getProps();
            u && F.postRender(() => u(a, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Oe(this.node.current, "keyup", o), Xr("down", (l, a) => {
          this.startPress(l, a);
        });
      }, n = Oe(this.node.current, "keydown", t), r = () => {
        this.isPressing && Xr("cancel", (s, o) => this.cancelPress(s, o));
      }, i = Oe(this.node.current, "blur", r);
      this.removeAccessibleListeners = Le(n, i);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && F.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !_l();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && F.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = Ne(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = Oe(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Le(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Ei = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), o0 = (e) => {
  const t = Ei.get(e.target);
  t && t(e);
}, s0 = (e) => {
  e.forEach(o0);
};
function a0({ root: e, ...t }) {
  const n = e || document;
  Zr.has(n) || Zr.set(n, {});
  const r = Zr.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(s0, { root: e, ...t })), r[i];
}
function l0(e, t, n) {
  const r = a0(t);
  return Ei.set(e, n), r.observe(e), () => {
    Ei.delete(e), r.unobserve(e);
  };
}
const c0 = {
  some: 0,
  all: 1
};
class u0 extends tt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : c0[i]
    }, l = (a) => {
      const { isIntersecting: c } = a;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), d = c ? u : h;
      d && d(a);
    };
    return l0(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(h0(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function h0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const d0 = {
  inView: {
    Feature: u0
  },
  tap: {
    Feature: i0
  },
  focus: {
    Feature: r0
  },
  hover: {
    Feature: n0
  }
}, f0 = {
  layout: {
    ProjectionNode: gc,
    MeasureLayout: lc
  }
}, yc = Nt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), wr = Nt({}), ao = typeof window < "u", p0 = ao ? lu : Ve, Ac = Nt({ strict: !1 });
function m0(e, t, n, r, i) {
  var s, o;
  const { visualElement: l } = le(wr), a = le(Ac), c = le(oo), u = le(yc).reducedMotion, h = ye();
  r = r || a.renderer, !h.current && r && (h.current = r(e, {
    visualState: t,
    parent: l,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const d = h.current, p = le(ac);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && g0(h.current, n, i, p), cu(() => {
    d && d.update(n, c);
  });
  const v = n[Ql], y = ye(!!v && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, v)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, v)));
  return p0(() => {
    d && (window.MotionIsMounted = !0, d.updateFeatures(), so.render(d.render), y.current && d.animationState && d.animationState.animateChanges());
  }), Ve(() => {
    d && (!y.current && d.animationState && d.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      var A;
      (A = window.MotionHandoffMarkAsComplete) === null || A === void 0 || A.call(window, v);
    }), y.current = !1));
  }), d;
}
function g0(e, t, n, r) {
  const { layoutId: i, layout: s, drag: o, dragConstraints: l, layoutScroll: a, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : xc(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: s,
    alwaysMeasureLayout: !!o || l && Et(l),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    layoutScroll: a,
    layoutRoot: c
  });
}
function xc(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : xc(e.parent);
}
function v0(e, t, n) {
  return Aa(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Et(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function br(e) {
  return dn(e.animate) || zi.some((t) => fn(e[t]));
}
function wc(e) {
  return !!(br(e) || e.variants);
}
function y0(e, t) {
  if (br(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || fn(n) ? n : void 0,
      animate: fn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function A0(e) {
  const { initial: t, animate: n } = y0(e, le(wr));
  return vn(() => ({ initial: t, animate: n }), [ca(t), ca(n)]);
}
function ca(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ua = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Lt = {};
for (const e in ua)
  Lt[e] = {
    isEnabled: (t) => ua[e].some((n) => !!t[n])
  };
function x0(e) {
  for (const t in e)
    Lt[t] = {
      ...Lt[t],
      ...e[t]
    };
}
const w0 = Symbol.for("motionComponentSymbol");
function b0({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  e && x0(e);
  function s(l, a) {
    let c;
    const u = {
      ...le(yc),
      ...l,
      layoutId: E0(l)
    }, { isStatic: h } = u, d = A0(l), p = r(l, h);
    if (!h && ao) {
      P0(u, e);
      const v = S0(u);
      c = v.MeasureLayout, d.visualElement = m0(i, p, u, t, v.ProjectionNode);
    }
    return m.jsxs(wr.Provider, { value: d, children: [c && d.visualElement ? m.jsx(c, { visualElement: d.visualElement, ...u }) : null, n(i, l, v0(p, d.visualElement, a), p, h, d.visualElement)] });
  }
  const o = uu(s);
  return o[w0] = i, o;
}
function E0({ layoutId: e }) {
  const t = le(sc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function P0(e, t) {
  const n = le(Ac).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Gt(!1, r) : qe(!1, r);
  }
}
function S0(e) {
  const { drag: t, layout: n } = Lt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const C0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function lo(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(C0.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function bc(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const Ec = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Pc(e, t, n, r) {
  bc(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(Ec.has(i) ? i : Ar(i), t.attrs[i]);
}
function Sc(e, { layout: t, layoutId: n }) {
  return et.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ir[e] || e === "opacity");
}
function co(e, t, n) {
  var r;
  const { style: i } = e, s = {};
  for (const o in i)
    (ne(i[o]) || t.style && ne(t.style[o]) || Sc(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
  return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), s;
}
function Cc(e, t, n) {
  const r = co(e, t, n);
  for (const i in e)
    if (ne(e[i]) || ne(t[i])) {
      const s = bn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
function T0(e) {
  const t = ye(null);
  return t.current === null && (t.current = e()), t.current;
}
function D0({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, i, s, o, l) {
  const a = {
    latestValues: R0(i, s, o, l ? !1 : e, t),
    renderState: n()
  };
  return r && (a.mount = (c) => r(i, c, a)), a;
}
const Tc = (e) => (t, n) => {
  const r = le(wr), i = le(oo), s = () => D0(e, t, r, i, n);
  return n ? s() : T0(s);
};
function ha(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const s = Vi(e, r[i]);
    if (s) {
      const { transitionEnd: o, transition: l, ...a } = s;
      n(a, o);
    }
  }
}
function R0(e, t, n, r, i) {
  var s;
  const o = {};
  let l = r && ((s = e.style) === null || s === void 0 ? void 0 : s.willChange) === void 0;
  const a = i(e, {});
  for (const y in a)
    o[y] = Wn(a[y]);
  let { initial: c, animate: u } = e;
  const h = br(e), d = wc(e);
  t && d && !h && e.inherit !== !1 && (c === void 0 && (c = t.initial), u === void 0 && (u = t.animate));
  let p = n ? n.initial === !1 : !1;
  p = p || c === !1;
  const v = p ? u : c;
  return v && typeof v != "boolean" && !dn(v) && ha(e, v, (y, A) => {
    for (const x in y) {
      let g = y[x];
      if (Array.isArray(g)) {
        const w = p ? g.length - 1 : 0;
        g = g[w];
      }
      g !== null && (o[x] = g);
    }
    for (const x in A)
      o[x] = A[x];
  }), l && u && c !== !1 && !dn(u) && ha(e, u, (y) => {
    for (const A in y)
      if (Hl(A)) {
        o.willChange = "transform";
        return;
      }
  }), o;
}
const uo = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Dc = () => ({
  ...uo(),
  attrs: {}
}), Rc = (e, t) => t && typeof e == "number" ? t.transform(e) : e, k0 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, M0 = bn.length;
function O0(e, t, n) {
  let r = "", i = !0;
  for (let s = 0; s < M0; s++) {
    const o = bn[s], l = e[o];
    if (l === void 0)
      continue;
    let a = !0;
    if (typeof l == "number" ? a = l === (o.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0, !a || n) {
      const c = Rc(l, Xi[o]);
      if (!a) {
        i = !1;
        const u = k0[o] || o;
        r += `${u}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function ho(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1, l = !1;
  for (const a in t) {
    const c = t[a];
    if (et.has(a)) {
      o = !0;
      continue;
    } else if (yl(a)) {
      i[a] = c;
      continue;
    } else {
      const u = Rc(c, Xi[a]);
      a.startsWith("origin") ? (l = !0, s[a] = u) : r[a] = u;
    }
  }
  if (t.transform || (o || n ? r.transform = O0(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: a = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${a} ${c} ${u}`;
  }
}
function da(e, t, n) {
  return typeof e == "string" ? e : R.transform(t + n * e);
}
function j0(e, t, n) {
  const r = da(t, e.x, e.width), i = da(n, e.y, e.height);
  return `${r} ${i}`;
}
const B0 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, I0 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function L0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? B0 : I0;
  e[s.offset] = R.transform(-r);
  const o = R.transform(t), l = R.transform(n);
  e[s.array] = `${o} ${l}`;
}
function fo(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: s,
  pathLength: o,
  pathSpacing: l = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, h) {
  if (ho(e, c, h), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: p, dimensions: v } = e;
  d.transform && (v && (p.transform = d.transform), delete d.transform), v && (i !== void 0 || s !== void 0 || p.transform) && (p.transformOrigin = j0(v, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), o !== void 0 && L0(d, o, l, a, !1);
}
const po = (e) => typeof e == "string" && e.toLowerCase() === "svg", N0 = {
  useVisualState: Tc({
    scrapeMotionValuesFromProps: Cc,
    createRenderState: Dc,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      F.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), F.render(() => {
        fo(n, r, po(t.tagName), e.transformTemplate), Pc(t, n);
      });
    }
  })
}, V0 = {
  useVisualState: Tc({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: co,
    createRenderState: uo
  })
};
function kc(e, t, n) {
  for (const r in t)
    !ne(t[r]) && !Sc(r, n) && (e[r] = t[r]);
}
function F0({ transformTemplate: e }, t) {
  return vn(() => {
    const n = uo();
    return ho(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function z0(e, t) {
  const n = e.style || {}, r = {};
  return kc(r, n, e), Object.assign(r, F0(e, t)), r;
}
function G0(e, t) {
  const n = {}, r = z0(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Q0 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function or(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Q0.has(e);
}
let Mc = (e) => !or(e);
function U0(e) {
  e && (Mc = (t) => t.startsWith("on") ? !or(t) : e(t));
}
try {
  U0(require("@emotion/is-prop-valid").default);
} catch {
}
function H0(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (Mc(i) || n === !0 && or(i) || !t && !or(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
function W0(e, t, n, r) {
  const i = vn(() => {
    const s = Dc();
    return fo(s, t, po(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    kc(s, e.style, e), i.style = { ...s, ...i.style };
  }
  return i;
}
function Y0(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (lo(n) ? W0 : G0)(r, s, o, n), c = H0(r, typeof n == "string", e), u = n !== xa ? { ...c, ...a, ref: i } : {}, { children: h } = r, d = vn(() => ne(h) ? h.get() : h, [h]);
    return ya(n, {
      ...u,
      children: d
    });
  };
}
function K0(e, t) {
  return function(r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...lo(r) ? N0 : V0,
      preloadedFeatures: e,
      useRender: Y0(i),
      createVisualElement: t,
      Component: r
    };
    return b0(o);
  };
}
const Pi = { current: null }, Oc = { current: !1 };
function X0() {
  if (Oc.current = !0, !!ao)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Pi.current = e.matches;
      e.addListener(t), t();
    } else
      Pi.current = !1;
}
function Z0(e, t, n) {
  for (const r in t) {
    const i = t[r], s = n[r];
    if (ne(i))
      e.addValue(r, i), process.env.NODE_ENV === "development" && gr(i.version === "11.11.7", `Attempting to mix Framer Motion versions ${i.version} with 11.11.7 may not work as expected.`);
    else if (ne(s))
      e.addValue(r, gn(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, gn(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const fa = /* @__PURE__ */ new WeakMap(), J0 = [...wl, te, $e], q0 = (e) => J0.find(xl(e)), pa = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class _0 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o }, l = {}) {
    this.applyWillChange = !1, this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Wi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = De.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, F.render(this.render, !1, !0));
    };
    const { latestValues: a, renderState: c } = o;
    this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = br(n), this.isVariantNode = wc(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const p = h[d];
      a[d] !== void 0 && ne(p) && p.set(a[d], !1);
    }
  }
  mount(t) {
    this.current = t, fa.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Oc.current || X0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Pi.current, process.env.NODE_ENV !== "production" && gr(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    fa.delete(this.current), this.projection && this.projection.unmount(), Je(this.notifyUpdate), Je(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = et.has(t), i = n.on("change", (l) => {
      this.latestValues[t] = l, this.props.onUpdate && F.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), s(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Lt) {
      const n = Lt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Y();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < pa.length; r++) {
      const i = pa[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = "on" + i, o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = Z0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = gn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (gl(i) || ml(i)) ? i = parseFloat(i) : !q0(i) && $e.test(n) && (i = Rl(t, n)), this.setBaseTarget(t, ne(i) ? i.get() : i)), ne(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Vi(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (i = o[t]);
    }
    if (r && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ne(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new io()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class jc extends _0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = kl;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function $0(e) {
  return window.getComputedStyle(e);
}
class eg extends jc {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = bc;
  }
  readValueFromInstance(t, n) {
    if (et.has(n)) {
      const r = Zi(n);
      return r && r.default || 0;
    } else {
      const r = $0(t), i = (yl(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ic(t, n);
  }
  build(t, n, r) {
    ho(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return co(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ne(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class tg extends jc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Y;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (et.has(n)) {
      const r = Zi(n);
      return r && r.default || 0;
    }
    return n = Ec.has(n) ? n : Ar(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Cc(t, n, r);
  }
  build(t, n, r) {
    fo(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Pc(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = po(t.tagName), super.mount(t);
  }
}
const ng = (e, t) => lo(e) ? new tg(t) : new eg(t, {
  allowProjection: e !== xa
}), rg = /* @__PURE__ */ K0({
  ...Hp,
  ...d0,
  ...t0,
  ...f0
}, ng), sn = /* @__PURE__ */ Id(rg), ig = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    fill: e.fill || "#000000",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "800px",
    height: "800px",
    viewBox: "0 0 106.059 106.059",
    xmlSpace: "preserve",
    ...e,
    children: /* @__PURE__ */ m.jsx("g", { children: /* @__PURE__ */ m.jsx("path", { d: "M90.546,15.518C69.858-5.172,36.2-5.172,15.516,15.513C-5.172,36.198-5.17,69.858,15.518,90.547c20.682,20.684,54.34,20.684,75.026-0.004C111.23,69.858,111.228,36.2,90.546,15.518z M84.757,84.758c-17.493,17.494-45.961,17.496-63.455,0.002c-17.498-17.497-17.495-45.966,0-63.46C38.796,3.807,67.262,3.805,84.759,21.302C102.253,38.796,102.251,67.265,84.757,84.758z M79.047,61.065c0.266,0.403,0.311,0.913,0.118,1.356c-4.285,9.903-14.318,16.304-25.563,16.304c-11.486,0-21.58-6.431-25.714-16.382c-0.185-0.443-0.135-0.949,0.131-1.348c0.267-0.397,0.714-0.637,1.192-0.637c0.001,0,0.001,0,0.002,0l48.637,0.061C78.333,60.42,78.783,60.662,79.047,61.065z M29.009,43.905c-0.055-0.112-0.082-0.236-0.082-0.358c0-0.184,0.062-0.363,0.175-0.507l7.695-9.755c0.158-0.196,0.392-0.308,0.645-0.308s0.486,0.111,0.641,0.304l7.697,9.757c0.189,0.237,0.229,0.58,0.1,0.859c-0.146,0.293-0.428,0.467-0.741,0.467h-3.554c-0.181,0-0.351-0.083-0.463-0.225l-3.68-4.664l-3.681,4.664c-0.112,0.141-0.281,0.225-0.462,0.225h-3.552C29.433,44.364,29.143,44.185,29.009,43.905z M61.127,43.905c-0.055-0.112-0.082-0.236-0.082-0.358c0-0.184,0.062-0.363,0.175-0.507l7.695-9.755c0.158-0.196,0.392-0.308,0.645-0.308c0.254,0,0.486,0.111,0.642,0.304l7.697,9.757c0.188,0.237,0.229,0.58,0.1,0.859c-0.146,0.293-0.428,0.467-0.741,0.467h-3.554c-0.181,0-0.351-0.083-0.463-0.225l-3.681-4.664l-3.681,4.664c-0.112,0.141-0.281,0.225-0.462,0.225h-3.552C61.551,44.364,61.261,44.185,61.127,43.905z" }) })
  }
), Bc = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    "aria-hidden": "true",
    "data-prefix": "fab",
    "data-icon": "github",
    className: "svg-inline--fa fa-github fa-w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 496 512",
    ...e,
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        fill: e.fill,
        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      }
    )
  }
), og = (e) => /* @__PURE__ */ m.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: e.fill || "#000000",
    ...e,
    children: [
      /* @__PURE__ */ m.jsx("title", { children: "Arrow Left" }),
      /* @__PURE__ */ m.jsxs("g", { id: "Arrow_Left", "data-name": "Arrow Left", children: [
        /* @__PURE__ */ m.jsx("path", { d: "M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z" }),
        /* @__PURE__ */ m.jsx("polygon", { points: "10.293 14.707 5.586 10 10.293 5.293 11.707 6.707 8.414 10 11.707 13.293 10.293 14.707" }),
        /* @__PURE__ */ m.jsx("path", { d: "M16,18H14V13a1.882,1.882,0,0,0-2-2H7V9h5a3.888,3.888,0,0,1,4,4Z" })
      ] })
    ]
  }
), sg = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "300.000000pt",
    height: "35.000000pt",
    viewBox: "0 0 300.000000 35.000000",
    preserveAspectRatio: "xMidYMid meet",
    fill: e.fill || "#000000",
    ...e,
    children: /* @__PURE__ */ m.jsxs(
      "g",
      {
        transform: "translate(0.000000,35.000000) scale(0.100000,-0.100000)",
        stroke: "none",
        children: [
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M160 175 l0 -172 26 5 c24 4 26 8 20 41 -3 20 -6 93 -6 162 0 118 -1\r
        127 -20 132 -19 5 -20 0 -20 -168z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M577 336 c-75 -27 -107 -78 -107 -169 0 -85 51 -145 138 -161 29 -5\r
        32 -3 32 19 0 19 -5 25 -20 25 -56 0 -110 62 -110 125 0 63 54 125 110 125 15\r
        0 20 6 20 25 0 28 -9 30 -63 11z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M670 336 c0 -9 0 -19 -1 -23 0 -4 17 -12 38 -18 73 -21 107 -120 64\r
        -191 -17 -27 -36 -39 -93 -57 -22 -8 -12 -50 11 -43 9 3 28 8 42 11 39 10 86\r
        64 100 116 22 84 -27 183 -101 204 -14 3 -33 9 -42 11 -12 4 -18 0 -18 -10z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M900 179 l0 -169 26 0 c25 0 26 2 20 37 -3 21 -6 95 -6 164 0 118 -1\r
        127 -20 132 -19 5 -20 0 -20 -164z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1200 323 c0 -23 1 -23 140 -23 139 0 140 0 140 23 0 22 -1 22 -140\r
        22 -139 0 -140 0 -140 -22z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1530 178 c0 -161 1 -168 20 -168 19 0 20 7 20 168 0 161 -1 168 -20\r
        168 -19 0 -20 -7 -20 -168z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1897 336 c-73 -27 -110 -80 -110 -161 0 -81 37 -134 110 -161 54\r
        -19 63 -17 63 11 0 19 -5 25 -20 25 -83 0 -137 109 -95 190 16 32 61 60 95 60\r
        15 0 20 6 20 25 0 28 -9 30 -63 11z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1980 325 c0 -19 5 -25 20 -25 84 0 137 -108 95 -190 -16 -32 -61\r
        -60 -95 -60 -15 0 -20 -6 -20 -26 0 -24 2 -25 33 -19 103 22 164 116 137 215\r
        -16 58 -61 105 -114 119 -58 14 -56 15 -56 -14z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2220 178 c0 -161 1 -168 20 -168 19 0 20 7 20 168 0 161 -1 168 -20\r
        168 -19 0 -20 -7 -20 -168z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2500 178 c0 -161 1 -168 20 -168 19 0 20 7 20 168 0 161 -1 168 -20\r
        168 -19 0 -20 -7 -20 -168z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2717 336 c-74 -27 -108 -78 -108 -161 0 -94 46 -151 139 -168 29 -6\r
        32 -4 32 18 0 19 -5 25 -20 25 -56 0 -110 62 -110 124 0 66 52 126 110 126 15\r
        0 20 6 20 25 0 28 -9 30 -63 11z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2800 325 c0 -19 5 -25 20 -25 34 0 79 -28 95 -60 42 -82 -11 -190\r
        -95 -190 -13 0 -20 -7 -20 -19 0 -28 10 -31 58 -19 50 12 96 60 111 115 15 52\r
        13 72 -8 118 -24 52 -56 80 -106 94 -54 15 -55 15 -55 -14z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M230 320 c0 -18 7 -20 58 -20 80 0 111 -35 82 -91 -9 -16 -22 -19\r
        -75 -19 -63 0 -65 -1 -65 -25 0 -24 2 -25 64 -25 74 0 108 20 126 74 9 27 8\r
        42 -4 69 -19 46 -41 57 -120 57 -59 0 -66 -2 -66 -20z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M970 320 c0 -18 7 -20 59 -20 82 0 111 -33 81 -91 -9 -16 -22 -19\r
        -75 -19 -63 0 -65 -1 -65 -25 0 -22 4 -25 38 -25 34 0 40 -5 79 -64 31 -47 49\r
        -65 70 -69 15 -3 29 -4 30 -3 1 1 -19 32 -44 68 l-46 67 26 21 c38 30 52 80\r
        33 123 -19 46 -41 57 -120 57 -59 0 -66 -2 -66 -20z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1600 320 c0 -18 7 -20 80 -20 73 0 80 2 80 20 0 18 -7 20 -80 20\r
        -73 0 -80 -2 -80 -20z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1320 140 c0 -123 1 -130 20 -130 19 0 20 7 20 130 0 123 -1 130 -20\r
        130 -19 0 -20 -7 -20 -130z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1600 183 c0 -22 4 -23 66 -23 61 0 65 1 62 21 -3 19 -10 21 -66 23\r
        -58 1 -62 0 -62 -21z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2290 30 c0 -18 7 -20 80 -20 73 0 80 2 80 20 0 18 -7 20 -80 20 -73\r
        0 -80 -2 -80 -20z`
            }
          )
        ]
      }
    )
  }
), ag = (e) => /* @__PURE__ */ m.jsxs(
  "svg",
  {
    width: "40px",
    height: "40px",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    fill: e.fill || "#000000",
    children: [
      /* @__PURE__ */ m.jsx("path", { d: "M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" }),
      /* @__PURE__ */ m.jsx("polygon", { points: "142.319 241.027 164.947 263.654 240 188.602 240 376 272 376 272 188.602 347.053 263.654 369.681 241.027 256 127.347 142.319 241.027" })
    ]
  }
), lg = (e) => /* @__PURE__ */ m.jsxs(
  "svg",
  {
    width: "80px",
    height: "80px",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    fill: e.fill || "#000000",
    children: [
      /* @__PURE__ */ m.jsx("path", { d: "M256,16.042c-132.548,0-240,107.451-240,240s107.452,240,240,240,240-107.452,240-240S388.548,16.042,256,16.042ZM403.078,403.12A207.253,207.253,0,1,1,447.667,337,207.364,207.364,0,0,1,403.078,403.12Z" }),
      /* @__PURE__ */ m.jsx("polygon", { points: "272.614 164.987 249.986 142.36 136.305 256.041 249.986 369.722 272.614 347.095 197.56 272.041 385 272.041 385 240.041 197.56 240.041 272.614 164.987" })
    ]
  }
), cg = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "80px",
    height: "80px",
    viewBox: "0 0 75.294 75.294",
    xmlns: "http://www.w3.org/2000/svg",
    fill: e.fill || "#000000",
    children: /* @__PURE__ */ m.jsx("g", { children: /* @__PURE__ */ m.jsx(
      "path",
      {
        d: `M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9\r
            c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089\r
            H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065\r
            c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016\r
            c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102\r
            c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069\r
            c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z`
      }
    ) })
  }
), ug = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "80px",
    height: "80px",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: e.fill || "#000000",
    children: /* @__PURE__ */ m.jsx("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" })
  }
), Er = O(sn.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(e) => e.theme.text};
  color: ${(e) => e.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(e) => e.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(e) => e.theme.body};
    color: ${(e) => e.theme.text};
    border: 1px solid ${(e) => e.theme.text};
  }
`, hg = O.h2`
  font-size: calc(1em + 0.5vw);
`, dg = O.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`, fg = O.div`
  border-top: 2px solid ${(e) => e.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Er}:hover & {
    border-top: 2px solid ${(e) => e.theme.text};
  }
`, pg = O.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`, mg = O.footer`
  display: flex;
  justify-content: space-between;
`, gg = O.a`
  background-color: ${(e) => e.theme.body};
  color: ${(e) => e.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Er}:hover & {
    background-color: ${(e) => e.theme.text};
    color: ${(e) => e.theme.body};
  }
`, vg = O.a`
  color: inherit;
  text-decoration: none;

  ${Er}:hover & {
    & > * {
      fill: ${(e) => e.theme.text};
    }
  }
`, yg = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5
    }
  }
}, Ag = (e) => {
  const { id: t, name: n, description: r, tags: i, demo: s, github: o } = e.data;
  return /* @__PURE__ */ m.jsxs(Er, { variants: yg, children: [
    /* @__PURE__ */ m.jsx(hg, { children: n }),
    /* @__PURE__ */ m.jsx(dg, { children: r }),
    /* @__PURE__ */ m.jsx(fg, { children: i.map((l, a) => /* @__PURE__ */ m.jsxs(pg, { children: [
      "#",
      l
    ] }, a)) }),
    /* @__PURE__ */ m.jsxs(mg, { children: [
      /* @__PURE__ */ m.jsx(gg, { href: s, target: "_blank", children: "Visit" }),
      /* @__PURE__ */ m.jsx(vg, { href: o, target: "_blank", children: /* @__PURE__ */ m.jsx(Bc, { width: 30, height: 30 }) })
    ] })
  ] }, t);
}, xg = Ni`
  0% {
    transform: scale(30);
  }
  100% {
    transform: scale(0);
  }
`, wg = O.div`
  width: 10vw;
  height: 10vw;
  background-color: transparent;
  border: 5px solid ${({ theme: e }) => e.text}; // Use theme color for the border
  border-radius: 50%;
  margin: 0 10px;
  position: absolute;
  left: calc(50% - 5vw);
  top: calc(50% - 5vw);
  animation: ${xg} 10s linear infinite;
  animation-delay: ${({ index: e }) => `${e * 2}s`};
  transform: scale(30);
`, bg = O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: e }) => e.body}; // Use theme background color
  z-index: 1; /* Ensures it is behind other components */
  overflow: hidden; /* Prevents overflow outside the container */
`, Eg = ({ theme: e }) => {
  const t = Array.from({ length: 7 }, (n, r) => /* @__PURE__ */ m.jsx(wg, { index: r, theme: e }, r));
  return /* @__PURE__ */ m.jsx(bg, { theme: e, children: t });
}, Pg = O.span`
  position: fixed;
  width: 2rem;
  height: 2rem;
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
`, Sg = O.span`
  position: fixed;
  width: 0.8rem;
  height: 0.8rem;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
`, Pr = () => {
  const [e, t] = ue({ x: 0, y: 0 }), [n, r] = ue({ x: 0, y: 0 });
  return Ve(() => {
    const i = (o) => {
      t({ x: o.clientX, y: o.clientY });
    }, s = (o) => {
      if (o.touches.length > 0) {
        const l = o.touches[0];
        t({ x: l.clientX, y: l.clientY });
      }
    };
    return document.addEventListener("mousemove", i), document.addEventListener("touchmove", s), () => {
      document.removeEventListener("mousemove", i), document.removeEventListener("touchmove", s);
    };
  }, []), Ve(() => {
    let i = e.x, s = e.y, o = n.x, l = n.y;
    const a = () => {
      i += (e.x - i) / 15, s += (e.y - s) / 15, t({ x: i, y: s });
    }, c = () => {
      o += (e.x - o) / 25, l += (e.y - l) / 25, r({ x: o, y: l });
    }, u = setInterval(a, 0.5), h = setInterval(c, 1.5);
    return () => {
      clearInterval(u), clearInterval(h);
    };
  }, [e]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      Pg,
      {
        style: { left: `${e.x}px`, top: `${e.y}px` }
      }
    ),
    /* @__PURE__ */ m.jsx(
      Sg,
      {
        style: {
          left: `${n.x}px`,
          top: `${n.y}px`
        }
      }
    )
  ] });
}, Cg = "data:image/png;base64,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", Tg = Ni`
  0% {
    transform: translate3d(0%, 0, 0);
  }
  100% {
    transform: translate3d(-99%, 0, 0);
  }
`, Dg = Ni`
  0% {
    transform: translate3d(-33%, 0, 0); /* Start from frame 4 */
  }
  100% {
    transform: translate3d(-98%, 0, 0); /* End at frame 9 */
  }
`, Rg = il`
  :root {
    --pixel-size: 10;
  }
`, kg = O.div`
  width: calc(7.5px * var(--pixel-size));
  height: calc(7px * var(--pixel-size));

  overflow: hidden;
  position: fixed;
  top: ${({ y: e }) => e}px;
  left: ${({ x: e }) => e}px;
  cursor: pointer; /* Make the character clickable */
`, Mg = O.img`
  width: calc(80px * var(--pixel-size));
  position: absolute;
  image-rendering: pixelated;

  animation:
    ${Tg} 1.5s steps(9) 1,
    ${Dg} 0.8s steps(6) infinite;
  animation-delay: 0s, 1.5s;
  animation-fill-mode: forwards;
`, Og = () => {
  const [e, t] = ue({ x: 20, y: 20 }), [n, r] = ue(!1), [i, s] = ue({ x: 0, y: 0 }), o = (d) => {
    if (d.button !== 0) return;
    const p = d.currentTarget.getBoundingClientRect();
    s({
      x: d.pageX - p.left,
      y: d.pageY - p.top
    }), r(!0), d.preventDefault();
  }, l = () => {
    r(!1);
  }, a = (d) => {
    n && (t({
      x: d.pageX - i.x,
      y: d.pageY - i.y
    }), d.preventDefault());
  }, c = (d) => {
    const p = d.touches[0], v = d.currentTarget.getBoundingClientRect();
    s({
      x: p.pageX - v.left,
      y: p.pageY - v.top
    }), r(!0), d.preventDefault();
  }, u = () => {
    r(!1);
  }, h = (d) => {
    if (!n) return;
    const p = d.touches[0];
    t({
      x: p.pageX - i.x,
      y: p.pageY - i.y
    }), d.preventDefault();
  };
  return Ve(() => (n ? (document.addEventListener("mousemove", a), document.addEventListener("mouseup", l), document.addEventListener("touchmove", h, {
    passive: !1
  }), document.addEventListener("touchend", u)) : (document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", l), document.removeEventListener("touchmove", h), document.removeEventListener("touchend", u)), () => {
    document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", l), document.removeEventListener("touchmove", h), document.removeEventListener("touchend", u);
  }), [n]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(Rg, {}),
    /* @__PURE__ */ m.jsx(
      kg,
      {
        x: e.x,
        y: e.y,
        onMouseDown: o,
        onTouchStart: (d) => c(d.nativeEvent),
        children: /* @__PURE__ */ m.jsx(Mg, { src: Cg, alt: "Character" })
      }
    )
  ] });
}, jg = O.canvas`
  display: block;
  margin: 0;
  background-color: black;
  overflow: hidden;
  z-index: -1;
  position: absolute;
`, Bg = () => {
  const e = ye(null), [t, n] = ue(500), [r, i] = ue(8), [s, o] = ue(window.innerWidth / 2), [l, a] = ue(window.innerHeight / 2), c = [], u = () => {
    let p, v;
    do
      p = Math.random() * window.innerWidth, v = Math.random() * window.innerHeight;
    while (Math.hypot(p - s, v - l) < 3);
    return {
      x: p,
      y: v,
      z: Math.random() * window.innerWidth,
      o: Math.random(),
      size: Math.random() * 3 + 2
      // Random size between 2 and 5
    };
  }, h = () => {
    c.length = 0;
    for (let p = 0; p < t; p++)
      c.push(u());
  };
  Ve(() => {
    const p = e.current;
    if (!p) return;
    p.width = window.innerWidth, p.height = window.innerHeight;
    const v = p.getContext("2d");
    if (!v) return;
    let y;
    const A = () => {
      v.clearRect(0, 0, p.width, p.height);
      for (const b of c) {
        b.z -= r, b.z <= 0 && (Object.assign(b, u()), b.z = p.width);
        const C = (b.x - s) * (p.width / b.z) + s, T = (b.y - l) * (p.width / b.z) + l, D = (1 - b.z / p.width) * b.size;
        v.fillStyle = "white", v.fillRect(C, T, D, D);
      }
      y = requestAnimationFrame(A);
    };
    h(), A();
    const g = d((b) => {
      o(b.clientX), a(b.clientY);
    }, 10), w = (b) => {
      b.code === "ArrowUp" || b.code === "KeyW" ? i(r + 1) : b.code === "ArrowDown" || b.code === "KeyS" ? i(Math.max(1, r - 1)) : b.code === "NumpadAdd" ? (n(t + 100), h()) : b.code === "NumpadSubtract" && (n(Math.max(100, t - 100)), h());
    };
    return document.addEventListener("mousemove", g), document.addEventListener("keydown", w), () => {
      cancelAnimationFrame(y), document.removeEventListener("mousemove", g), document.removeEventListener("keydown", w);
    };
  }, [t, r, s, l]);
  const d = (p, v) => {
    let y;
    return (...A) => {
      clearTimeout(y), y = setTimeout(() => p(...A), v);
    };
  };
  return /* @__PURE__ */ m.jsx(jg, { ref: e });
}, Ig = O.div`
  background: ${(e) => e.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    /* Styles for screens smaller than 1200px */
  }

  @media (max-width: 768px) {
    /* Styles for screens smaller than 768px */
  }

  @media (max-width: 480px) {
    /* Styles for screens smaller than 480px */
  }
`, Lg = O.div`
  padding: 2rem;

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`, Ng = O.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    bottom: 0.25rem;
  }
`, Vg = O(lr)`
  color: ${(e) => e.click ? e.theme.body : e.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  padding: 1rem; /* Add padding */
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 1200px) {
    left: calc(0.5rem + 2vw);
  }

  @media (max-width: 768px) {
    left: calc(0.5rem + 1vw);
    font-size: 1rem;
    margin-left: 10px; /* Ensure no extra margin */
    top: 49%;
  }

  @media (max-width: 480px) {
    left: calc(0.25rem + 0.5vw);
    font-size: 0.8rem;
  }
`, Fg = O(lr)`
  color: ${(e) => e.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  padding: 1rem; /* Add padding */
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 1200px) {
    right: calc(0.5rem + 2vw);
  }

  @media (max-width: 768px) {
    right: calc(0.5rem + 1vw);
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    right: calc(0.25rem + 0.5vw);
    font-size: 0.8rem;
  }
`, zg = O(lr)`
  color: ${(e) => e.theme.text};
  text-decoration: none;
  z-index: 1;
  padding: 1rem; /* Add padding */
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`, Gg = O.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  svg {
    width: 100%; // Adjust the size of the Portfolio icon
    height: 50px;
    fill: ${(e) => e.theme.text};
  }

  @media (max-width: 768px) {
    top: 1rem;
    svg {
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    top: 0.5rem;
    svg {
      height: 30px;
    }
  }
`, Qg = O.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(e) => e.click ? "50%" : "0%"};
  height: ${(e) => e.click ? "100%" : "0%"};
  z-index: 1;
  transition:
    height 0.5s ease,
    width 1s ease 0.5s;

  @media (max-width: 1200px) {
    width: ${(e) => e.click ? "40%" : "0%"};
  }

  @media (max-width: 768px) {
    width: ${(e) => e.click ? "30%" : "0%"};
  }

  @media (max-width: 480px) {
    width: ${(e) => e.click ? "20%" : "0%"};
  }
`, ma = () => {
  const [e] = ue(!1);
  return /* @__PURE__ */ m.jsxs(Ig, { children: [
    /* @__PURE__ */ m.jsx(Og, {}),
    /* @__PURE__ */ m.jsx(Pr, {}),
    /* @__PURE__ */ m.jsx(Qg, { click: e }),
    /* @__PURE__ */ m.jsxs(Lg, { children: [
      /* @__PURE__ */ m.jsx(Gg, { children: /* @__PURE__ */ m.jsx(sg, {}) }),
      /* @__PURE__ */ m.jsx(Vg, { to: "/work", click: e, children: /* @__PURE__ */ m.jsx(
        sn.h2,
        {
          initial: { y: -200 },
          animate: { y: 0 },
          transition: { type: "spring", duration: 1, delay: 1 },
          whileHover: { scale: 1.2 },
          whileTap: { scale: 0.9 },
          children: "Work"
        }
      ) }),
      /* @__PURE__ */ m.jsx(Fg, { to: "/About", children: /* @__PURE__ */ m.jsx(
        sn.h2,
        {
          initial: { y: -200 },
          animate: { y: 0 },
          transition: { type: "spring", duration: 1, delay: 1 },
          whileHover: { scale: 1.2 },
          whileTap: { scale: 0.9 },
          children: "About"
        }
      ) }),
      /* @__PURE__ */ m.jsx(Ng, { children: /* @__PURE__ */ m.jsx(zg, { to: "/skills", children: /* @__PURE__ */ m.jsx(
        sn.h2,
        {
          initial: { y: 200 },
          animate: { y: 0 },
          transition: { type: "spring", duration: 1.2, delay: 1 },
          whileHover: { scale: 1.2 },
          whileTap: { scale: 0.9 },
          children: "My Skills."
        }
      ) }) })
    ] })
  ] });
}, Ug = "data:image/png;base64,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", Hg = O.div`
  perspective: 25px;
`, Wg = O.div`
  width: 20em;
  height: 18em;
  background-color: white;
  background-image: url(${Ug});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
`, Yg = () => {
  const e = ye(null), t = ye(null);
  return Ve(() => {
    const n = e.current, r = t.current;
    if (!n || !r) return;
    const i = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition(p) {
        this.x = p.clientX - this._x, this.y = (p.clientY - this._y) * -1;
      },
      setOrigin(p) {
        this._x = p.offsetLeft + Math.floor(p.offsetWidth / 2), this._y = p.offsetTop + Math.floor(p.offsetHeight / 2);
      }
    };
    i.setOrigin(n);
    let s = 0;
    const o = 10, l = () => s++ % o === 0, a = (p) => {
      i.updatePosition(p), c(
        (i.y / r.offsetHeight / 2).toFixed(2),
        (i.x / r.offsetWidth / 2).toFixed(2)
      );
    }, c = (p, v) => {
      const y = `rotateX(${p}deg) rotateY(${v}deg)`;
      r.style.transform = y;
    }, u = (p) => {
      a(p);
    }, h = () => {
      r.style.transform = "";
    }, d = (p) => {
      l() && a(p);
    };
    return n.addEventListener("mouseenter", u), n.addEventListener("mouseleave", h), n.addEventListener("mousemove", d), () => {
      n.removeEventListener("mouseenter", u), n.removeEventListener("mouseleave", h), n.removeEventListener("mousemove", d);
    };
  }, []), /* @__PURE__ */ m.jsx(Hg, { ref: e, children: /* @__PURE__ */ m.jsx(Wg, { ref: t }) });
}, Kg = O.div`
  border: 2px solid ${(e) => e.theme.text};
  color: ${(e) => e.theme.text};
  background-color: ${(e) => e.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(2.5px);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  margin-right: 2rem; /* Add margin to the right to avoid being too close to the scrollbar */
  transition:
    background-color 0.5s ease,
    opacity 0.5s ease; /* Smooth transition for color inversion and opacity */
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 60vw;
    height: 50vh;
    font-size: calc(0.6rem + 0.8vw);
    margin-right: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 70vw;
    height: 40vh;
    font-size: calc(0.6rem + 0.6vw);
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 30vh;
    font-size: calc(0.6rem + 0.4vw);
    padding: 1rem;
    margin: 1.5rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.01); /* Example rgba for background */
    color: rgba(255, 255, 255, 0.99); /* Example rgba for text color */
  }
`, Xg = O.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column; /* Stack components vertically on smaller screens */
    margin-top: 4rem;
  }
`, Zg = O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`, Jg = O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  width: 50vw;
  height: 60vh;

  @media (max-width: 1200px) {
    width: 60vw;
    height: 50vh;
  }

  @media (max-width: 768px) {
    width: 70vw;
    height: 40vh;
  }

  @media (max-width: 480px) {
    width: 60vw;
    height: 20vh;
  }
`, qg = O.div`
  position: absolute;
  top: 1em;
  left: 3em;
  width: 40px;
  height: 40px;
  z-index: 3;
  transition:
    filter 0.3s ease,
    fill 0.3s ease;

  svg {
    fill: black;
    transition: fill 0.3s ease;
    filter: drop-shadow(0 0 2px white);
  }

  &:hover svg {
    fill: white;
    filter: none;
  }

  @media (max-width: 768px) {
    top: 0.2em;
    left: 0.5em;
    max-width: 30px;
    max-height: 30px;
  }
`, _g = O.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`, Jr = O.a`
  svg {
    width: 40px;
    height: 40px;
    fill: ${(e) => e.theme.text};
    transition: fill 0.3s ease;

    &:hover {
      fill: rgba(255, 255, 255, 0.5);
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`, $g = () => {
  const [e, t] = ue(jt), n = ye(null), r = () => {
    t(Tt);
  }, i = () => {
    t(jt);
  };
  return /* @__PURE__ */ m.jsxs(mr, { theme: e, children: [
    /* @__PURE__ */ m.jsx(Zg, { children: /* @__PURE__ */ m.jsx(Bg, {}) }),
    /* @__PURE__ */ m.jsxs(Xg, { children: [
      /* @__PURE__ */ m.jsx(Jg, { children: /* @__PURE__ */ m.jsx(Yg, {}) }),
      /* @__PURE__ */ m.jsxs(Kg, { children: [
        "I'm a Full-Stack developer located in Canada. I love to create minimal websites with a focus on user experience.",
        /* @__PURE__ */ m.jsx("br", {}),
        " ",
        /* @__PURE__ */ m.jsx("br", {}),
        "I like trying new things and creatively done things that are not the norm. I'm an independent freelancer for hire.",
        /* @__PURE__ */ m.jsx("br", {}),
        " ",
        /* @__PURE__ */ m.jsx("br", {}),
        "I believe everything is an art when you put your consciousness into it. You can connect with me via social links below.",
        /* @__PURE__ */ m.jsxs(_g, { children: [
          /* @__PURE__ */ m.jsx(
            Jr,
            {
              href: "https://twitter.com",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ m.jsx(ug, {})
            }
          ),
          /* @__PURE__ */ m.jsx(
            Jr,
            {
              href: "https://github.com/mcook-2",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ m.jsx(Bc, {})
            }
          ),
          /* @__PURE__ */ m.jsx(Jr, { href: "mailto:Mckenzie.d.cook@gmail.com", children: /* @__PURE__ */ m.jsx(cg, {}) })
        ] })
      ] }),
      /* @__PURE__ */ m.jsx(
        qg,
        {
          ref: n,
          onMouseEnter: r,
          onMouseLeave: i,
          children: /* @__PURE__ */ m.jsx("a", { href: "/", children: /* @__PURE__ */ m.jsx(
            lg,
            {
              width: 40,
              height: 40,
              fill: e.text,
              style: { cursor: "pointer" }
            }
          ) })
        }
      ),
      /* @__PURE__ */ m.jsx(Pr, {})
    ] })
  ] });
}, ev = [
  {
    id: "1",
    name: "Botw Compendium App",
    description: "Built using Hyrule-Compendium-API. Replica of the The Legend of Zelda: Breath of the Wild Compendium in the browser",
    tags: ["Ruby on Rails", "CSS", "API"],
    demo: "",
    github: "https://github.com/mcook-2/botw-compendium-app.git"
  },
  {
    id: "2",
    name: "Kimi no Bento ",
    description: "PHP-based CMS that lets users create accounts, post pictures and forums about their favorite bento boxes. It also includes an admin panel for managing site content.",
    tags: ["PHP", "JavaScript", "CMS"],
    demo: "",
    github: "https://github.com/mcook-2/cms-kimi-no-bento.git"
  },
  {
    id: "3",
    name: "2000 Viper Corp",
    description: "E-commerce Site. Built from ground up. Clothing retailer that specializes in Y2K and vaporwave-inspired fashion",
    tags: ["Ruby on Rails", "E-commerce", "Sass"],
    demo: "",
    github: "https://github.com/mcook-2/viper_corp"
  },
  {
    id: "4",
    name: "Winnipeg Park & Open Space Map",
    description: "A dynamic map of Winnipeg's parks and open spaces using Leaflet API and AJAX to fetch and display GeoJSON data.",
    tags: ["JavaScript", "CSS", "HTML"],
    demo: "https://mcook-2.github.io/winnipeg-parks-map/",
    github: "https://github.com/mcook-2/winnipeg-parks-map.git"
  }
], tv = O.div`
  background-color: ${(e) => e.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
  transition: background-color 0.5s ease;
`, nv = O(sn.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`, Ic = O.span`
  display: block;
  position: fixed;
  width: 80px;
  height: 80px;
  z-index: 1;
`, rv = O(Ic)`
  top: 10px;
  left: 10px;
`, iv = O(Ic)`
  right: 1rem;
  bottom: 1rem;
`, ov = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}, sv = () => {
  const [e, t] = ue(jt), n = ye(null), r = ye(null), i = ye(null);
  Ve(() => {
    const l = n.current, a = r.current, c = i.current, u = () => {
      const h = `rotate(${-window.pageYOffset}deg)`;
      l && (l.style.transform = `translateX(${-window.pageYOffset}px)`), a && (a.style.transform = h), c && (c.style.transform = h);
    };
    return window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u);
    };
  }, []);
  const s = () => {
    t(Tt);
  }, o = () => {
    t(jt);
  };
  return /* @__PURE__ */ m.jsxs(mr, { theme: e, children: [
    /* @__PURE__ */ m.jsx(Pr, {}),
    /* @__PURE__ */ m.jsxs(tv, { children: [
      /* @__PURE__ */ m.jsx(nv, { ref: n, variants: ov, initial: "hidden", animate: "show", children: ev.map((l) => /* @__PURE__ */ m.jsx(Ag, { data: l }, l.id)) }),
      /* @__PURE__ */ m.jsx(iv, { ref: r, children: /* @__PURE__ */ m.jsx(ig, { width: 80, height: 80, fill: e.text }) }),
      /* @__PURE__ */ m.jsx(
        rv,
        {
          ref: i,
          onMouseEnter: s,
          onMouseLeave: o,
          children: /* @__PURE__ */ m.jsx("a", { href: "/", children: /* @__PURE__ */ m.jsx(
            og,
            {
              width: 80,
              height: 80,
              fill: e.text,
              style: { cursor: "pointer" }
            }
          ) })
        }
      )
    ] })
  ] });
}, av = O.div`
  position: absolute;
  top: 1em;
  left: 3em;
  width: 40px;
  height: 40px;
  z-index: 3;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(1.1);
  }
`, lv = O.div`
  background-color: ${(e) => e.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  flex-direction: row; /* Default to row layout */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack components vertically on smaller screens */
  }
`, sr = O.div`
  border: 2px solid ${(e) => e.theme.text};
  color: ${(e) => e.theme.text};
  background-color: ${(e) => e.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 2;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.5s ease;

  &:hover {
    color: ${(e) => e.theme.body};
    background-color: ${(e) => e.theme.text};
  }

  @media (max-width: 1200px) {
    width: 40vw;
    height: 50vh;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
    margin-bottom: 1rem; /* Add space between stacked components */
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: auto;
  }
`, ga = O.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${sr}:hover & {
    & > * {
      fill: ${(e) => e.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 1200px) {
    font-size: calc(0.9em + 0.9vw);
  }

  @media (max-width: 768px) {
    font-size: calc(0.8em + 0.8vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.7em + 0.7vw);
  }
`, xt = O.div`
  color: ${(e) => e.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${sr}:hover & {
    color: ${(e) => e.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  @media (max-width: 1200px) {
    font-size: calc(0.55em + 0.9vw);
  }

  @media (max-width: 768px) {
    font-size: calc(0.5em + 0.8vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.45em + 0.7vw);
  }
`, cv = () => {
  const [e, t] = ue(Tt), [n, r] = ue(!1), i = ye(null), s = () => {
    n || t(Tt);
  }, o = () => {
    n || t(jt);
  }, l = () => {
    r(!n), t(n ? jt : Tt);
  };
  return /* @__PURE__ */ m.jsxs(mr, { theme: e, children: [
    /* @__PURE__ */ m.jsx(Pr, {}),
    /* @__PURE__ */ m.jsxs(lv, { children: [
      /* @__PURE__ */ m.jsx(Eg, { theme: e }),
      /* @__PURE__ */ m.jsx(
        av,
        {
          ref: i,
          onMouseEnter: s,
          onMouseLeave: o,
          onTouchStart: l,
          children: /* @__PURE__ */ m.jsx("a", { href: "/", children: /* @__PURE__ */ m.jsx(
            ag,
            {
              width: 40,
              height: 40,
              fill: e.text,
              style: { cursor: "pointer" }
            }
          ) })
        }
      ),
      /* @__PURE__ */ m.jsxs(sr, { children: [
        /* @__PURE__ */ m.jsx(ga, { children: "Design Philosophy" }),
        /* @__PURE__ */ m.jsx(xt, { children: "I love to create designs that speak, keeping them clean, minimal, and simple." }),
        /* @__PURE__ */ m.jsxs(xt, { children: [
          /* @__PURE__ */ m.jsx("strong", { children: "I like to Design" }),
          /* @__PURE__ */ m.jsxs("ul", { children: [
            /* @__PURE__ */ m.jsx("li", { children: "Web Design" }),
            /* @__PURE__ */ m.jsx("li", { children: "Mobile Apps" }),
            /* @__PURE__ */ m.jsx("li", { children: "E-commerce" })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs(xt, { children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Tools" }),
          /* @__PURE__ */ m.jsx("ul", { children: /* @__PURE__ */ m.jsx("li", { children: "Figma" }) })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs(sr, { children: [
        /* @__PURE__ */ m.jsx(ga, { children: "Professional Skills" }),
        /* @__PURE__ */ m.jsx(xt, { children: "I value the business or brand for which I'm creating, and I enjoy bringing new ideas to life." }),
        /* @__PURE__ */ m.jsxs(xt, { children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Skills" }),
          /* @__PURE__ */ m.jsx("p", { children: "HTML, CSS, JS, PHP, React, Sass, Bootstrap, Ruby on Rails, etc." })
        ] }),
        /* @__PURE__ */ m.jsxs(xt, { children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Tools" }),
          /* @__PURE__ */ m.jsx("p", { children: "VS Code, GitHub, Photoshop, etc." })
        ] })
      ] })
    ] })
  ] });
}, uv = () => /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
  /* @__PURE__ */ m.jsx(Bd, {}),
  /* @__PURE__ */ m.jsx(mr, { theme: Tt, children: /* @__PURE__ */ m.jsx(yh, { children: /* @__PURE__ */ m.jsxs(rh, { children: [
    /* @__PURE__ */ m.jsx(wt, { path: "/", element: /* @__PURE__ */ m.jsx(ma, {}) }),
    /* @__PURE__ */ m.jsx(wt, { path: "/About", element: /* @__PURE__ */ m.jsx($g, {}) }),
    /* @__PURE__ */ m.jsx(wt, { path: "/Work", element: /* @__PURE__ */ m.jsx(sv, {}) }),
    /* @__PURE__ */ m.jsx(wt, { path: "/Skills", element: /* @__PURE__ */ m.jsx(cv, {}) }),
    /* @__PURE__ */ m.jsx(wt, { path: "*", element: /* @__PURE__ */ m.jsx(ma, {}) })
  ] }) }) })
] }), va = document.getElementById("app");
va ? qt.createRoot(va).render(
  /* @__PURE__ */ m.jsx(ae.StrictMode, { children: /* @__PURE__ */ m.jsx(uv, {}) })
) : console.error("Root element not found");
