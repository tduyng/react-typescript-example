(this['webpackJsonptypescript-react-boilerplate'] =
  this['webpackJsonptypescript-react-boilerplate'] || []).push([
  [13],
  {
    105: function (e, t, c) {
      c.d(t, 'a', function () {
        return S;
      });
      var n = c(1),
        a = c(0),
        s = c(113),
        r = c(19),
        i = c(240),
        l = c(164),
        j = i.a.SubMenu,
        o = i.a.ItemGroup,
        d = l.a.useBreakpoint,
        b = function () {
          var e = d().md;
          return Object(n.jsxs)(i.a, {
            mode: e ? 'horizontal' : 'inline',
            children: [
              Object(n.jsx)(
                i.a.Item,
                {
                  children: Object(n.jsx)(r.c, {
                    className: 'navbar-item',
                    to: '/',
                    children: 'Home',
                  }),
                },
                'key-home',
              ),
              Object(n.jsxs)(
                j,
                {
                  title: 'Services',
                  children: [
                    Object(n.jsxs)(o, {
                      title: 'Features',
                      children: [
                        Object(n.jsx)(
                          i.a.Item,
                          {
                            children: Object(n.jsx)(r.c, {
                              to: '/feature1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:1',
                        ),
                        Object(n.jsx)(
                          i.a.Item,
                          {
                            children: Object(n.jsx)(r.c, {
                              to: '/feature2',
                              children: 'Option 2',
                            }),
                          },
                          'setting:2',
                        ),
                      ],
                    }),
                    Object(n.jsxs)(o, {
                      title: 'Demo',
                      children: [
                        Object(n.jsx)(
                          i.a.Item,
                          {
                            children: Object(n.jsx)(r.c, {
                              to: '/demo1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:3',
                        ),
                        Object(n.jsx)(
                          i.a.Item,
                          {
                            children: Object(n.jsx)(r.c, {
                              to: '/demo2',
                              children: 'Option 2',
                            }),
                          },
                          'setting:4',
                        ),
                      ],
                    }),
                  ],
                },
                'sub1',
              ),
              Object(n.jsx)(
                i.a.Item,
                {
                  children: Object(n.jsx)(r.c, {
                    className: 'navbar-item',
                    to: '/about',
                    children: 'About',
                  }),
                },
                'key-about',
              ),
              Object(n.jsx)(
                i.a.Item,
                {
                  children: Object(n.jsx)(r.c, {
                    className: 'navbar-item',
                    to: '/contact',
                    children: 'Contact',
                  }),
                },
                'key-contact',
              ),
            ],
          });
        },
        u = c(432),
        h = c(25),
        O = c(17),
        m = c(6),
        x = l.a.useBreakpoint,
        p = { logout: h.c },
        v = Object(O.b)(function (e) {
          return { isAuthenticated: e.auth.isAuthenticated, user: e.auth.user };
        }, p)(function (e) {
          var t = e.isAuthenticated,
            c = e.logout,
            a = e.user,
            s = x().md,
            l = Object(n.jsxs)(i.a, {
              mode: s ? 'horizontal' : 'inline',
              children: [
                Object(n.jsx)(
                  i.a.Item,
                  {
                    children: Object(n.jsx)(r.c, {
                      className: 'navbar-item primary',
                      to: m.a.LOGIN,
                      children: 'Sign In',
                    }),
                  },
                  'menukey-login',
                ),
                Object(n.jsx)(
                  i.a.Item,
                  {
                    children: Object(n.jsx)(r.c, {
                      className: 'navbar-item',
                      to: m.a.REGISTER,
                      children: 'Register',
                    }),
                  },
                  'menukey-signup',
                ),
              ],
            }),
            j = Object(n.jsxs)(i.a, {
              mode: s ? 'horizontal' : 'inline',
              children: [
                Object(n.jsx)(
                  i.a.Item,
                  {
                    children: Object(n.jsxs)(r.c, {
                      className: 'navbar-item primary',
                      to: m.a.PROFILE,
                      children: [
                        'Hi ',
                        Object(n.jsx)('strong', { children: a.username }),
                      ],
                    }),
                  },
                  'menukey-profile',
                ),
                Object(n.jsx)(
                  i.a.Item,
                  {
                    children: Object(n.jsx)(r.c, {
                      className: 'navbar-item primary',
                      to: m.a.HOME,
                      onClick: function () {
                        return c();
                      },
                      children: Object(n.jsxs)('span', {
                        children: [Object(n.jsx)(u.a, {}), 'Log Out'],
                      }),
                    }),
                  },
                  'menukey-login',
                ),
              ],
            });
          return Object(n.jsx)(n.Fragment, { children: t ? j : l });
        }),
        f = c(137),
        g = c(420),
        N = function () {
          var e = Object(a.useState)(!1),
            t = Object(s.a)(e, 2),
            c = t[0],
            i = t[1];
          return Object(n.jsx)('div', {
            className: 'navbar-section',
            children: Object(n.jsx)('div', {
              className: 'container',
              children: Object(n.jsxs)('nav', {
                className: 'navbar',
                children: [
                  Object(n.jsx)('div', {
                    className: 'navbar-logo',
                    children: Object(n.jsx)(r.c, {
                      to: '/',
                      className: 'navbar-item',
                      activeClassName: 'is-active',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(n.jsxs)('div', {
                    className: 'navbar-menu',
                    children: [
                      Object(n.jsx)('div', {
                        className: 'navbar-left-menu',
                        children: Object(n.jsx)(b, {}),
                      }),
                      Object(n.jsx)('div', {
                        className: 'navbar-right-menu',
                        children: Object(n.jsx)(v, {}),
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    children: [
                      Object(n.jsx)(f.a, {
                        className: 'navbar-btnBars',
                        type: 'primary',
                        onClick: function () {
                          i(!0);
                        },
                        children: Object(n.jsx)('span', {
                          className: 'navbar-btnBars-span',
                        }),
                      }),
                      Object(n.jsxs)(g.a, {
                        title: 'Drawer navbar',
                        placement: 'right',
                        closable: !0,
                        onClose: function () {
                          i(!1);
                        },
                        visible: c,
                        children: [Object(n.jsx)(b, {}), Object(n.jsx)(v, {})],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        y = c(433),
        k = c(434),
        w = c(435),
        I = c(436),
        T = c(430),
        C = function () {
          return Object(n.jsx)('div', {
            className: 'footer',
            children: Object(n.jsx)('div', {
              className: 'container',
              children: Object(n.jsxs)('div', {
                className: 'footer-inner',
                children: [
                  Object(n.jsx)('div', {
                    className: 'footer-logo',
                    children: Object(n.jsx)('a', {
                      href: '/',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(n.jsxs)('ul', {
                    className: 'footer-socials',
                    children: [
                      Object(n.jsx)('li', {
                        children: Object(n.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://github.com/tienduy-nguyen',
                          children: Object(n.jsx)(y.a, {}),
                        }),
                      }),
                      Object(n.jsx)('li', {
                        children: Object(n.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.twitter.com/tienduy_nguyen',
                          children: Object(n.jsx)(k.a, {}),
                        }),
                      }),
                      Object(n.jsx)('li', {
                        children: Object(n.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.linkedin.com/',
                          children: Object(n.jsx)(w.a, {}),
                        }),
                      }),
                    ],
                  }),
                  Object(n.jsx)('div', {
                    className: 'copyright',
                    children: 'Copyright \xa9 2020 REACT TS',
                  }),
                  Object(n.jsx)(T.a, {
                    children: Object(n.jsx)('div', {
                      className: 'go-top',
                      children: Object(n.jsx)(I.a, {}),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        A = c(410),
        _ = A.a.Header,
        E = A.a.Content,
        R = A.a.Footer,
        S = function (e) {
          var t = e.children;
          return Object(n.jsxs)(A.a, {
            className: 'main-layout',
            children: [
              Object(n.jsx)(_, { children: Object(n.jsx)(N, {}) }),
              Object(n.jsx)(E, { className: 'layout-children', children: t }),
              Object(n.jsx)(R, { children: Object(n.jsx)(C, {}) }),
            ],
          });
        };
    },
    254: function (e, t) {
      function c(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      (c.keys = function () {
        return [];
      }),
        (c.resolve = c),
        (e.exports = c),
        (c.id = 254);
    },
    416: function (e, t, c) {
      c.r(t);
      var n = c(1),
        a = c(0),
        s = c.n(a),
        r = c(17),
        i = c(137),
        l = c(19),
        j = c(6),
        o = function () {
          return Object(n.jsx)('div', {
            className: 'homepage',
            children: Object(n.jsx)('div', {
              className: 'home-overlay',
              children: Object(n.jsx)('div', {
                className: 'container homepage-inner',
                children: Object(n.jsxs)('div', {
                  className: 'home-content',
                  children: [
                    Object(n.jsx)('h1', {
                      children: 'React Typescript Template',
                    }),
                    Object(n.jsx)('p', {
                      children: 'Please login with account & password below.',
                    }),
                    Object(n.jsxs)('p', {
                      className: 'home-text-light',
                      children: [
                        'Account:',
                        Object(n.jsx)('span', { children: ' admin' }),
                      ],
                    }),
                    Object(n.jsxs)('p', {
                      className: 'home-text-light',
                      children: [
                        'Password: ',
                        Object(n.jsx)('span', { children: ' 123456' }),
                      ],
                    }),
                    Object(n.jsx)('div', {
                      className: 'home-button-wrap',
                      children: Object(n.jsx)(i.a, {
                        type: 'primary',
                        size: 'large',
                        children: Object(n.jsx)(l.b, {
                          to: j.a.LOGIN,
                          className: 'button-login-link',
                          children: 'Go To Login Page',
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        d = c(431),
        b = c(415),
        u = c(210),
        h = c(211),
        O = c(412),
        m = c(4),
        x = (c(2), c(12)),
        p = c.n(x),
        v = c(20),
        f = c(23),
        g = c.n(f),
        N = c(24),
        y = c(16),
        k = function (e) {
          return { type: y.d, payload: e };
        },
        w = function (e) {
          return { type: y.e, payload: e };
        },
        I = (c(83), c.p + 'static/media/iphone-8-plus.44bd5af6.jpg'),
        T = {
          getProducts: function () {
            return (function () {
              var e = Object(v.a)(
                p.a.mark(function e(t) {
                  var c, n, a, s, r;
                  return p.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              g.a.get(
                                ''.concat(N.a.baseAPIUrl, '/api/products'),
                              )
                            );
                          case 3:
                            (c = e.sent),
                              (n = c.data),
                              t(k(n)),
                              console.log('REs product', c),
                              (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              (r = {
                                msg:
                                  null === (a = e.t0.response) || void 0 === a
                                    ? void 0
                                    : a.statusText,
                                status:
                                  null === (s = e.t0.response) || void 0 === s
                                    ? void 0
                                    : s.status,
                              }),
                              t(w(r));
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]],
                  );
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          },
        },
        C = Object(r.b)(function (e) {
          return { loading: e.products.loading, products: e.products.products };
        }, T)(function (e) {
          var t = Object(m.g)(),
            s = e.products,
            r = e.getProducts,
            o = [
              {
                title: 'Preview',
                dataIndex: 'image_url',
                render: function (e, t) {
                  return p(e, t);
                },
                key: 'image_url',
              },
              {
                title: 'Name',
                dataIndex: 'name',
                render: function (e, t) {
                  return x(e, t);
                },
                key: 'name',
              },
              { title: 'Brand', dataIndex: 'brand', key: 'brand' },
            ],
            x = function (e, t) {
              return Object(n.jsx)(
                l.b,
                {
                  to: ''.concat(j.a.PRODUCTS, '/').concat(t.id),
                  style: { textTransform: 'uppercase' },
                  children: e,
                },
                t.id,
              );
            },
            p = function (e, t) {
              if (t.id) {
                var a = I;
                try {
                  a = c(254)(e);
                } catch (s) {
                  console.log(s), (a = I);
                }
                return Object(n.jsx)(
                  l.b,
                  {
                    to: ''.concat(j.a.PRODUCTS, '/').concat(t.id),
                    children: Object(n.jsx)(b.a, {
                      src: a,
                      alt: 'Image_sp',
                      style: { maxWidth: '100px' },
                    }),
                  },
                  t.id,
                );
              }
            },
            v = [{}];
          return (
            Object(a.useEffect)(function () {
              r();
            }, []),
            s.map(function (e, t) {
              0 === t
                ? (v = [
                    {
                      key: t,
                      id: e.id,
                      name: e.name,
                      brand: e.brand,
                      image_url: e.image_url,
                    },
                  ])
                : v.push({
                    key: t,
                    id: e.id,
                    name: e.name,
                    brand: e.brand,
                    image_url: e.image_url,
                  });
            }),
            Object(n.jsx)('div', {
              className: 'main-body-section',
              children: Object(n.jsxs)('div', {
                className: 'container',
                children: [
                  Object(n.jsx)('div', {
                    className: 'block-title',
                    children: Object(n.jsx)('h2', {
                      children: 'All Smartphones available',
                    }),
                  }),
                  Object(n.jsxs)('div', {
                    className: 'product-list',
                    children: [
                      Object(n.jsx)(u.a, {
                        gutter: [40, 0],
                        className: 'mb-1',
                        children: Object(n.jsx)(h.a, {
                          span: 6,
                          offset: 18,
                          children: Object(n.jsxs)(i.a, {
                            type: 'primary',
                            onClick: function () {
                              t.push(j.a.PRODUCT_NEW);
                            },
                            block: !0,
                            children: [
                              Object(n.jsx)(d.a, {}),
                              'Add new product',
                            ],
                          }),
                        }),
                      }),
                      Object(n.jsx)(u.a, {
                        gutter: [40, 0],
                        children: Object(n.jsx)(h.a, {
                          span: 24,
                          children: Object(n.jsx)(O.a, {
                            columns: o,
                            dataSource: v,
                            rowKey: 'id',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }),
        A = function () {
          return Object(n.jsx)(C, {});
        },
        _ = Object(r.b)(function (e) {
          return {
            loading: e.auth.loading,
            isAuthenticated: e.auth.isAuthenticated,
          };
        }, {})(function (e) {
          var t = e.loading,
            c = e.isAuthenticated;
          return Object(n.jsx)(n.Fragment, {
            children: !t && c ? Object(n.jsx)(A, {}) : Object(n.jsx)(o, {}),
          });
        }),
        E = c(105),
        R = function () {
          return Object(n.jsx)(E.a, { children: Object(n.jsx)(_, {}) });
        },
        S = s.a.memo(R);
      t.default = S;
    },
  },
]);
//# sourceMappingURL=13.286fda93.chunk.js.map
