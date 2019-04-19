/*!
 * AdminLTE v3.0.0-beta.1 (https://adminlte.io)
 * Copyright 2014-2018 Abdullah Almsaeed <abdullah@almsaeedstudio.com>
 * Licensed under MIT (https://github.com/almasaeed2010/AdminLTE/blob/master/LICENSE)
 */
!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t((e.adminlte = {}));
})(this, function(e) {
  "use strict";
  var i,
    t,
    o,
    n,
    r,
    s,
    a,
    c,
    f,
    u,
    l,
    d,
    h,
    p,
    g,
    y,
    _,
    v,
    m,
    w,
    C,
    b,
    E,
    j,
    D,
    Q,
    S,
    I,
    L,
    x,
    A,
    O,
    P,
    T,
    k,
    H,
    M,
    N,
    U,
    W,
    X,
    z,
    R,
    V,
    q,
    B,
    F,
    G,
    J,
    K,
    Y,
    Z,
    $,
    ee,
    te,
    ne,
    ie,
    oe,
    re,
    se,
    ae,
    ce,
    fe =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    ue = function(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    le = ((i = jQuery),
    (t = "ControlSidebar"),
    (o = "lte.control.sidebar"),
    (n = i.fn[t]),
    (r = ".control-sidebar"),
    (s = '[data-widget="control-sidebar"]'),
    (a = ".main-header"),
    (c = "control-sidebar-open"),
    (f = "control-sidebar-slide-open"),
    (u = { slide: !0 }),
    (l = (function() {
      function n(e, t) {
        ue(this, n), (this._element = e), (this._config = this._getConfig(t));
      }
      return (
        (n.prototype.show = function() {
          this._config.slide
            ? i("body").removeClass(f)
            : i("body").removeClass(c);
        }),
        (n.prototype.collapse = function() {
          this._config.slide ? i("body").addClass(f) : i("body").addClass(c);
        }),
        (n.prototype.toggle = function() {
          this._setMargin(),
            i("body").hasClass(c) || i("body").hasClass(f)
              ? this.show()
              : this.collapse();
        }),
        (n.prototype._getConfig = function(e) {
          return i.extend({}, u, e);
        }),
        (n.prototype._setMargin = function() {
          i(r).css({ top: i(a).outerHeight() });
        }),
        (n._jQueryInterface = function(t) {
          return this.each(function() {
            var e = i(this).data(o);
            if (
              (e || ((e = new n(this, i(this).data())), i(this).data(o, e)),
              "undefined" === e[t])
            )
              throw new Error(t + " is not a function");
            e[t]();
          });
        }),
        n
      );
    })()),
    i(document).on("click", s, function(e) {
      e.preventDefault(), l._jQueryInterface.call(i(this), "toggle");
    }),
    (i.fn[t] = l._jQueryInterface),
    (i.fn[t].Constructor = l),
    (i.fn[t].noConflict = function() {
      return (i.fn[t] = n), l._jQueryInterface;
    }),
    l),
    de = ((d = jQuery),
    (h = "Layout"),
    (p = "lte.layout"),
    (g = d.fn[h]),
    (y = ".main-sidebar"),
    (_ = ".main-header"),
    (v = ".content-wrapper"),
    (m = ".main-footer"),
    (w = "hold-transition"),
    (C = (function() {
      function n(e) {
        ue(this, n), (this._element = e), this._init();
      }
      return (
        (n.prototype.fixLayoutHeight = function() {
          var e = {
              window: d(window).height(),
              header: d(_).outerHeight(),
              footer: d(m).outerHeight(),
              sidebar: d(y).height()
            },
            t = this._max(e);
          d(v).css("min-height", t - e.header),
            d(y).css("min-height", t - e.header);
        }),
        (n.prototype._init = function() {
          var e = this;
          d("body").removeClass(w),
            this.fixLayoutHeight(),
            d(y).on(
              "collapsed.lte.treeview expanded.lte.treeview collapsed.lte.pushmenu expanded.lte.pushmenu",
              function() {
                e.fixLayoutHeight();
              }
            ),
            d(window).resize(function() {
              e.fixLayoutHeight();
            }),
            d("body, html").css("height", "auto");
        }),
        (n.prototype._max = function(t) {
          var n = 0;
          return (
            Object.keys(t).forEach(function(e) {
              t[e] > n && (n = t[e]);
            }),
            n
          );
        }),
        (n._jQueryInterface = function(t) {
          return this.each(function() {
            var e = d(this).data(p);
            e || ((e = new n(this)), d(this).data(p, e)), t && e[t]();
          });
        }),
        n
      );
    })()),
    d(window).on("load", function() {
      C._jQueryInterface.call(d("body"));
    }),
    (d.fn[h] = C._jQueryInterface),
    (d.fn[h].Constructor = C),
    (d.fn[h].noConflict = function() {
      return (d.fn[h] = g), C._jQueryInterface;
    }),
    C),
    he = ((b = jQuery),
    (E = "PushMenu"),
    (D = "." + (j = "lte.pushmenu")),
    (Q = b.fn[E]),
    (S = { COLLAPSED: "collapsed" + D, SHOWN: "shown" + D }),
    (I = { screenCollapseSize: 768 }),
    (L = '[data-widget="pushmenu"]'),
    (x = "body"),
    (A = "#sidebar-overlay"),
    (O = ".wrapper"),
    (P = "sidebar-collapse"),
    (T = "sidebar-open"),
    (k = (function() {
      function n(e, t) {
        ue(this, n),
          (this._element = e),
          (this._options = b.extend({}, I, t)),
          b(A).length || this._addOverlay();
      }
      return (
        (n.prototype.show = function() {
          b(x)
            .addClass(T)
            .removeClass(P);
          var e = b.Event(S.SHOWN);
          b(this._element).trigger(e);
        }),
        (n.prototype.collapse = function() {
          b(x)
            .removeClass(T)
            .addClass(P);
          var e = b.Event(S.COLLAPSED);
          b(this._element).trigger(e);
        }),
        (n.prototype.toggle = function() {
          (b(window).width() >= this._options.screenCollapseSize
          ? !b(x).hasClass(P)
          : b(x).hasClass(T))
            ? this.collapse()
            : this.show();
        }),
        (n.prototype._addOverlay = function() {
          var e = this,
            t = b("<div />", { id: "sidebar-overlay" });
          t.on("click", function() {
            e.collapse();
          }),
            b(O).append(t);
        }),
        (n._jQueryInterface = function(t) {
          return this.each(function() {
            var e = b(this).data(j);
            e || ((e = new n(this)), b(this).data(j, e)), t && e[t]();
          });
        }),
        n
      );
    })()),
    b(document).on("click", L, function(e) {
      e.preventDefault();
      var t = e.currentTarget;
      "pushmenu" !== b(t).data("widget") && (t = b(t).closest(L)),
        k._jQueryInterface.call(b(t), "toggle");
    }),
    (b.fn[E] = k._jQueryInterface),
    (b.fn[E].Constructor = k),
    (b.fn[E].noConflict = function() {
      return (b.fn[E] = Q), k._jQueryInterface;
    }),
    k),
    pe = ((H = jQuery),
    (M = "Treeview"),
    (U = "." + (N = "lte.treeview")),
    (W = H.fn[M]),
    (X = {
      SELECTED: "selected" + U,
      EXPANDED: "expanded" + U,
      COLLAPSED: "collapsed" + U,
      LOAD_DATA_API: "load" + U
    }),
    (z = ".nav-item"),
    (R = ".nav-treeview"),
    (V = ".menu-open"),
    (B = "menu-open"),
    (F = {
      trigger: (q = '[data-widget="treeview"]') + " " + ".nav-link",
      animationSpeed: 300,
      accordion: !0
    }),
    (G = (function() {
      function i(e, t) {
        ue(this, i), (this._config = t), (this._element = e);
      }
      return (
        (i.prototype.init = function() {
          this._setupListeners();
        }),
        (i.prototype.expand = function(e, t) {
          var n = this,
            i = H.Event(X.EXPANDED);
          if (this._config.accordion) {
            var o = t.siblings(V).first(),
              r = o.find(R).first();
            this.collapse(r, o);
          }
          e.slideDown(this._config.animationSpeed, function() {
            t.addClass(B), H(n._element).trigger(i);
          });
        }),
        (i.prototype.collapse = function(e, t) {
          var n = this,
            i = H.Event(X.COLLAPSED);
          e.slideUp(this._config.animationSpeed, function() {
            t.removeClass(B),
              H(n._element).trigger(i),
              e.find(V + " > " + R).slideUp(),
              e.find(V).removeClass(B);
          });
        }),
        (i.prototype.toggle = function(e) {
          var t = H(e.currentTarget),
            n = t.next();
          if (n.is(R)) {
            e.preventDefault();
            var i = t.parents(z).first();
            i.hasClass(B) ? this.collapse(H(n), i) : this.expand(H(n), i);
          }
        }),
        (i.prototype._setupListeners = function() {
          var t = this;
          H(document).on("click", this._config.trigger, function(e) {
            t.toggle(e);
          });
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var e = H(this).data(N),
              t = H.extend({}, F, H(this).data());
            e || ((e = new i(H(this), t)), H(this).data(N, e)),
              "init" === n && e[n]();
          });
        }),
        i
      );
    })()),
    H(window).on(X.LOAD_DATA_API, function() {
      H(q).each(function() {
        G._jQueryInterface.call(H(this), "init");
      });
    }),
    (H.fn[M] = G._jQueryInterface),
    (H.fn[M].Constructor = G),
    (H.fn[M].noConflict = function() {
      return (H.fn[M] = W), G._jQueryInterface;
    }),
    G),
    ge = ((J = jQuery),
    (K = "Widget"),
    (Z = "." + (Y = "lte.widget")),
    ($ = J.fn[K]),
    (ee = {
      EXPANDED: "expanded" + Z,
      COLLAPSED: "collapsed" + Z,
      REMOVED: "removed" + Z
    }),
    (ie = ".card"),
    (oe = ".card-body"),
    (re = ".card-footer"),
    (se = "collapsed-card"),
    (ae = {
      animationSpeed: "normal",
      collapseTrigger: (ne = '[data-widget="collapse"]'),
      removeTrigger: (te = '[data-widget="remove"]')
    }),
    (ce = (function() {
      function n(e, t) {
        ue(this, n),
          (this._element = e),
          (this._parent = e.parents(ie).first()),
          (this._settings = J.extend({}, ae, t));
      }
      return (
        (n.prototype.collapse = function() {
          var e = this;
          this._parent
            .children(oe + ", " + re)
            .slideUp(this._settings.animationSpeed, function() {
              e._parent.addClass(se);
            });
          var t = J.Event(ee.COLLAPSED);
          this._element.trigger(t, this._parent);
        }),
        (n.prototype.expand = function() {
          var e = this;
          this._parent
            .children(oe + ", " + re)
            .slideDown(this._settings.animationSpeed, function() {
              e._parent.removeClass(se);
            });
          var t = J.Event(ee.EXPANDED);
          this._element.trigger(t, this._parent);
        }),
        (n.prototype.remove = function() {
          this._parent.slideUp();
          var e = J.Event(ee.REMOVED);
          this._element.trigger(e, this._parent);
        }),
        (n.prototype.toggle = function() {
          this._parent.hasClass(se) ? this.expand() : this.collapse();
        }),
        (n.prototype._init = function(e) {
          var t = this;
          (this._parent = e),
            J(this)
              .find(this._settings.collapseTrigger)
              .click(function() {
                t.toggle();
              }),
            J(this)
              .find(this._settings.removeTrigger)
              .click(function() {
                t.remove();
              });
        }),
        (n._jQueryInterface = function(t) {
          return this.each(function() {
            var e = J(this).data(Y);
            e ||
              ((e = new n(J(this), e)),
              J(this).data(Y, "string" == typeof t ? e : t)),
              "string" == typeof t && t.match(/remove|toggle/)
                ? e[t]()
                : "object" ===
                    ("undefined" == typeof t ? "undefined" : fe(t)) &&
                  e._init(J(this));
          });
        }),
        n
      );
    })()),
    J(document).on("click", ne, function(e) {
      e && e.preventDefault(), ce._jQueryInterface.call(J(this), "toggle");
    }),
    J(document).on("click", te, function(e) {
      e && e.preventDefault(), ce._jQueryInterface.call(J(this), "remove");
    }),
    (J.fn[K] = ce._jQueryInterface),
    (J.fn[K].Constructor = ce),
    (J.fn[K].noConflict = function() {
      return (J.fn[K] = $), ce._jQueryInterface;
    }),
    ce);
  (e.ControlSidebar = le),
    (e.Layout = de),
    (e.PushMenu = he),
    (e.Treeview = pe),
    (e.Widget = ge),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=adminlte.min.js.map
