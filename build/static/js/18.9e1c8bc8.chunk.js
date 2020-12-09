(this['webpackJsonptypescript-react-boilerplate'] =
  this['webpackJsonptypescript-react-boilerplate'] || []).push([
  [18],
  {
    105: function (e, t, c) {
      'use strict';
      c.d(t, 'a', function () {
        return T;
      });
      var i = c(1),
        a = c(0),
        s = c(113),
        n = c(19),
        r = c(240),
        l = c(164),
        o = r.a.SubMenu,
        j = r.a.ItemGroup,
        u = l.a.useBreakpoint,
        m = function () {
          var e = u().md;
          return Object(i.jsxs)(r.a, {
            mode: e ? 'horizontal' : 'inline',
            children: [
              Object(i.jsx)(
                r.a.Item,
                {
                  children: Object(i.jsx)(n.c, {
                    className: 'navbar-item',
                    to: '/',
                    children: 'Home',
                  }),
                },
                'key-home',
              ),
              Object(i.jsxs)(
                o,
                {
                  title: 'Services',
                  children: [
                    Object(i.jsxs)(j, {
                      title: 'Features',
                      children: [
                        Object(i.jsx)(
                          r.a.Item,
                          {
                            children: Object(i.jsx)(n.c, {
                              to: '/feature1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:1',
                        ),
                        Object(i.jsx)(
                          r.a.Item,
                          {
                            children: Object(i.jsx)(n.c, {
                              to: '/feature2',
                              children: 'Option 2',
                            }),
                          },
                          'setting:2',
                        ),
                      ],
                    }),
                    Object(i.jsxs)(j, {
                      title: 'Demo',
                      children: [
                        Object(i.jsx)(
                          r.a.Item,
                          {
                            children: Object(i.jsx)(n.c, {
                              to: '/demo1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:3',
                        ),
                        Object(i.jsx)(
                          r.a.Item,
                          {
                            children: Object(i.jsx)(n.c, {
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
              Object(i.jsx)(
                r.a.Item,
                {
                  children: Object(i.jsx)(n.c, {
                    className: 'navbar-item',
                    to: '/about',
                    children: 'About',
                  }),
                },
                'key-about',
              ),
              Object(i.jsx)(
                r.a.Item,
                {
                  children: Object(i.jsx)(n.c, {
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
        b = c(432),
        d = c(25),
        h = c(17),
        O = c(6),
        x = l.a.useBreakpoint,
        p = { logout: d.c },
        v = Object(h.b)(function (e) {
          return { isAuthenticated: e.auth.isAuthenticated, user: e.auth.user };
        }, p)(function (e) {
          var t = e.isAuthenticated,
            c = e.logout,
            a = e.user,
            s = x().md,
            l = Object(i.jsxs)(r.a, {
              mode: s ? 'horizontal' : 'inline',
              children: [
                Object(i.jsx)(
                  r.a.Item,
                  {
                    children: Object(i.jsx)(n.c, {
                      className: 'navbar-item primary',
                      to: O.a.LOGIN,
                      children: 'Sign In',
                    }),
                  },
                  'menukey-login',
                ),
                Object(i.jsx)(
                  r.a.Item,
                  {
                    children: Object(i.jsx)(n.c, {
                      className: 'navbar-item',
                      to: O.a.REGISTER,
                      children: 'Register',
                    }),
                  },
                  'menukey-signup',
                ),
              ],
            }),
            o = Object(i.jsxs)(r.a, {
              mode: s ? 'horizontal' : 'inline',
              children: [
                Object(i.jsx)(
                  r.a.Item,
                  {
                    children: Object(i.jsxs)(n.c, {
                      className: 'navbar-item primary',
                      to: O.a.PROFILE,
                      children: [
                        'Hi ',
                        Object(i.jsx)('strong', { children: a.username }),
                      ],
                    }),
                  },
                  'menukey-profile',
                ),
                Object(i.jsx)(
                  r.a.Item,
                  {
                    children: Object(i.jsx)(n.c, {
                      className: 'navbar-item primary',
                      to: O.a.HOME,
                      onClick: function () {
                        return c();
                      },
                      children: Object(i.jsxs)('span', {
                        children: [Object(i.jsx)(b.a, {}), 'Log Out'],
                      }),
                    }),
                  },
                  'menukey-login',
                ),
              ],
            });
          return Object(i.jsx)(i.Fragment, { children: t ? o : l });
        }),
        f = c(137),
        g = c(420),
        N = function () {
          var e = Object(a.useState)(!1),
            t = Object(s.a)(e, 2),
            c = t[0],
            r = t[1];
          return Object(i.jsx)('div', {
            className: 'navbar-section',
            children: Object(i.jsx)('div', {
              className: 'container',
              children: Object(i.jsxs)('nav', {
                className: 'navbar',
                children: [
                  Object(i.jsx)('div', {
                    className: 'navbar-logo',
                    children: Object(i.jsx)(n.c, {
                      to: '/',
                      className: 'navbar-item',
                      activeClassName: 'is-active',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(i.jsxs)('div', {
                    className: 'navbar-menu',
                    children: [
                      Object(i.jsx)('div', {
                        className: 'navbar-left-menu',
                        children: Object(i.jsx)(m, {}),
                      }),
                      Object(i.jsx)('div', {
                        className: 'navbar-right-menu',
                        children: Object(i.jsx)(v, {}),
                      }),
                    ],
                  }),
                  Object(i.jsxs)('div', {
                    children: [
                      Object(i.jsx)(f.a, {
                        className: 'navbar-btnBars',
                        type: 'primary',
                        onClick: function () {
                          r(!0);
                        },
                        children: Object(i.jsx)('span', {
                          className: 'navbar-btnBars-span',
                        }),
                      }),
                      Object(i.jsxs)(g.a, {
                        title: 'Drawer navbar',
                        placement: 'right',
                        closable: !0,
                        onClose: function () {
                          r(!1);
                        },
                        visible: c,
                        children: [Object(i.jsx)(m, {}), Object(i.jsx)(v, {})],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        y = c(433),
        q = c(434),
        k = c(435),
        I = c(436),
        A = c(430),
        C = function () {
          return Object(i.jsx)('div', {
            className: 'footer',
            children: Object(i.jsx)('div', {
              className: 'container',
              children: Object(i.jsxs)('div', {
                className: 'footer-inner',
                children: [
                  Object(i.jsx)('div', {
                    className: 'footer-logo',
                    children: Object(i.jsx)('a', {
                      href: '/',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(i.jsxs)('ul', {
                    className: 'footer-socials',
                    children: [
                      Object(i.jsx)('li', {
                        children: Object(i.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://github.com/tienduy-nguyen',
                          children: Object(i.jsx)(y.a, {}),
                        }),
                      }),
                      Object(i.jsx)('li', {
                        children: Object(i.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.twitter.com/tienduy_nguyen',
                          children: Object(i.jsx)(q.a, {}),
                        }),
                      }),
                      Object(i.jsx)('li', {
                        children: Object(i.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.linkedin.com/',
                          children: Object(i.jsx)(k.a, {}),
                        }),
                      }),
                    ],
                  }),
                  Object(i.jsx)('div', {
                    className: 'copyright',
                    children: 'Copyright \xa9 2020 REACT TS',
                  }),
                  Object(i.jsx)(A.a, {
                    children: Object(i.jsx)('div', {
                      className: 'go-top',
                      children: Object(i.jsx)(I.a, {}),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        w = c(410),
        E = w.a.Header,
        R = w.a.Content,
        S = w.a.Footer,
        T = function (e) {
          var t = e.children;
          return Object(i.jsxs)(w.a, {
            className: 'main-layout',
            children: [
              Object(i.jsx)(E, { children: Object(i.jsx)(N, {}) }),
              Object(i.jsx)(R, { className: 'layout-children', children: t }),
              Object(i.jsx)(S, { children: Object(i.jsx)(C, {}) }),
            ],
          });
        };
    },
    426: function (e, t, c) {
      'use strict';
      c.r(t);
      var i = c(1),
        a = c(0),
        s = c.n(a),
        n = function () {
          return Object(i.jsx)('div', {
            className: 'main-body-section',
            children: Object(i.jsxs)('div', {
              className: 'container',
              children: [
                Object(i.jsx)('div', {
                  className: 'block-title',
                  children: Object(i.jsx)('h2', {
                    children: 'Feature Page - Option 1',
                  }),
                }),
                Object(i.jsxs)('div', {
                  className: 'feature-content',
                  children: [
                    Object(i.jsx)('p', {
                      children:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum animi possimus, iusto consectetur vel accusantium ipsam beatae minus unde ipsum, cumque, perspiciatis rerum laborum! Accusamus magnam sequi, a in ab quam temporibus excepturi debitis soluta inventore error nihil minima consectetur aliquid, ullam quos. A quae iusto nulla culpa! Amet optio accusamus laborum similique incidunt totam nemo expedita odit saepe quisquam numquam nesciunt beatae repellat illo doloremque inventore quibusdam ut earum consequuntur enim sunt, sint dolore! Maxime provident maiores eos velit. Adipisci at asperiores ullam praesentium. Illum, temporibus libero. Cumque officia consectetur, dolores id natus dolorem recusandae sunt eaque quis.',
                    }),
                    Object(i.jsx)('p', {
                      children:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis blanditiis minima possimus quasi esse facere excepturi mollitia corrupti dicta praesentium sunt, saepe placeat aliquam, commodi magnam cumque temporibus corporis beatae? Doloribus voluptate dolorem saepe voluptatum culpa odit fugiat, sunt atque hic animi sequi cupiditate ad. Ratione omnis eos nesciunt.',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        r = c(105),
        l = function () {
          return Object(i.jsx)(r.a, { children: Object(i.jsx)(n, {}) });
        },
        o = s.a.memo(l);
      t.default = o;
    },
  },
]);
//# sourceMappingURL=18.9e1c8bc8.chunk.js.map
