(this['webpackJsonptypescript-react-boilerplate'] =
  this['webpackJsonptypescript-react-boilerplate'] || []).push([
  [16],
  {
    105: function (e, t, c) {
      c.d(t, 'a', function () {
        return D;
      });
      var i = c(1),
        n = c(0),
        s = c(113),
        a = c(19),
        r = c(240),
        j = c(164),
        l = r.a.SubMenu,
        o = r.a.ItemGroup,
        b = j.a.useBreakpoint,
        d = function () {
          var e = b().md;
          return Object(i.jsxs)(r.a, {
            mode: e ? 'horizontal' : 'inline',
            children: [
              Object(i.jsx)(
                r.a.Item,
                {
                  children: Object(i.jsx)(a.c, {
                    className: 'navbar-item',
                    to: '/',
                    children: 'Home',
                  }),
                },
                'key-home',
              ),
              Object(i.jsxs)(
                l,
                {
                  title: 'Services',
                  children: [
                    Object(i.jsxs)(o, {
                      title: 'Features',
                      children: [
                        Object(i.jsx)(
                          r.a.Item,
                          {
                            children: Object(i.jsx)(a.c, {
                              to: '/feature1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:1',
                        ),
                        Object(i.jsx)(
                          r.a.Item,
                          {
                            children: Object(i.jsx)(a.c, {
                              to: '/feature2',
                              children: 'Option 2',
                            }),
                          },
                          'setting:2',
                        ),
                      ],
                    }),
                    Object(i.jsxs)(o, {
                      title: 'Demo',
                      children: [
                        Object(i.jsx)(
                          r.a.Item,
                          {
                            children: Object(i.jsx)(a.c, {
                              to: '/demo1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:3',
                        ),
                        Object(i.jsx)(
                          r.a.Item,
                          {
                            children: Object(i.jsx)(a.c, {
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
                  children: Object(i.jsx)(a.c, {
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
                  children: Object(i.jsx)(a.c, {
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
        h = c(432),
        O = c(25),
        m = c(17),
        x = c(6),
        u = j.a.useBreakpoint,
        p = { logout: O.c },
        v = Object(m.b)(function (e) {
          return { isAuthenticated: e.auth.isAuthenticated, user: e.auth.user };
        }, p)(function (e) {
          var t = e.isAuthenticated,
            c = e.logout,
            n = e.user,
            s = u().md,
            j = Object(i.jsxs)(r.a, {
              mode: s ? 'horizontal' : 'inline',
              children: [
                Object(i.jsx)(
                  r.a.Item,
                  {
                    children: Object(i.jsx)(a.c, {
                      className: 'navbar-item primary',
                      to: x.a.LOGIN,
                      children: 'Sign In',
                    }),
                  },
                  'menukey-login',
                ),
                Object(i.jsx)(
                  r.a.Item,
                  {
                    children: Object(i.jsx)(a.c, {
                      className: 'navbar-item',
                      to: x.a.REGISTER,
                      children: 'Register',
                    }),
                  },
                  'menukey-signup',
                ),
              ],
            }),
            l = Object(i.jsxs)(r.a, {
              mode: s ? 'horizontal' : 'inline',
              children: [
                Object(i.jsx)(
                  r.a.Item,
                  {
                    children: Object(i.jsxs)(a.c, {
                      className: 'navbar-item primary',
                      to: x.a.PROFILE,
                      children: [
                        'Hi ',
                        Object(i.jsx)('strong', { children: n.username }),
                      ],
                    }),
                  },
                  'menukey-profile',
                ),
                Object(i.jsx)(
                  r.a.Item,
                  {
                    children: Object(i.jsx)(a.c, {
                      className: 'navbar-item primary',
                      to: x.a.HOME,
                      onClick: function () {
                        return c();
                      },
                      children: Object(i.jsxs)('span', {
                        children: [Object(i.jsx)(h.a, {}), 'Log Out'],
                      }),
                    }),
                  },
                  'menukey-login',
                ),
              ],
            });
          return Object(i.jsx)(i.Fragment, { children: t ? l : j });
        }),
        f = c(137),
        g = c(420),
        N = function () {
          var e = Object(n.useState)(!1),
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
                    children: Object(i.jsx)(a.c, {
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
                        children: Object(i.jsx)(d, {}),
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
                        children: [Object(i.jsx)(d, {}), Object(i.jsx)(v, {})],
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
        C = c(430),
        S = function () {
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
                          children: Object(i.jsx)(k.a, {}),
                        }),
                      }),
                      Object(i.jsx)('li', {
                        children: Object(i.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.linkedin.com/',
                          children: Object(i.jsx)(w.a, {}),
                        }),
                      }),
                    ],
                  }),
                  Object(i.jsx)('div', {
                    className: 'copyright',
                    children: 'Copyright \xa9 2020 REACT TS',
                  }),
                  Object(i.jsx)(C.a, {
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
        E = c(410),
        A = E.a.Header,
        R = E.a.Content,
        T = E.a.Footer,
        D = function (e) {
          var t = e.children;
          return Object(i.jsxs)(E.a, {
            className: 'main-layout',
            children: [
              Object(i.jsx)(A, { children: Object(i.jsx)(N, {}) }),
              Object(i.jsx)(R, { className: 'layout-children', children: t }),
              Object(i.jsx)(T, { children: Object(i.jsx)(S, {}) }),
            ],
          });
        };
    },
    424: function (e, t, c) {
      c.r(t);
      var i = c(1),
        n = c(0),
        s = c.n(n),
        a = c(113),
        r = c(437),
        j = c(137),
        l = c(417),
        o = function () {
          var e = Object(n.useState)(!1),
            t = Object(a.a)(e, 2),
            c = t[0],
            s = t[1];
          return Object(i.jsx)('div', {
            className: 'main-body-section ',
            children: Object(i.jsx)('div', {
              className: 'container-fluid',
              children: Object(i.jsxs)('div', {
                className: 'demo-content',
                children: [
                  Object(i.jsxs)('div', {
                    className: 'block-title',
                    children: [
                      Object(i.jsx)('h2', { children: 'Demo Option 1' }),
                      Object(i.jsx)('p', {
                        children:
                          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum est minima. Dicta, ipsam explicabo ipsum velit eligendi distinctio in!',
                      }),
                    ],
                  }),
                  Object(i.jsx)('div', {
                    className: 'demo-button-play',
                    children: Object(i.jsx)(j.a, {
                      size: 'large',
                      onClick: function (e) {
                        s(!0);
                      },
                      children: Object(i.jsx)(r.a, {}),
                    }),
                  }),
                  Object(i.jsx)(l.a, {
                    title: 'Demo Option 1',
                    visible: c,
                    onCancel: function (e) {
                      s(!1);
                    },
                    footer: null,
                    children: Object(i.jsx)('iframe', {
                      title: 'Demo Option 1',
                      width: '100%',
                      height: '350',
                      src: 'https://www.youtube.com/embed/QpcP30GY2-8',
                      allowFullScreen: !0,
                      allow:
                        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        b = c(105),
        d = function () {
          return Object(i.jsx)(b.a, { children: Object(i.jsx)(o, {}) });
        },
        h = s.a.memo(d);
      t.default = h;
    },
  },
]);
//# sourceMappingURL=16.6294c676.chunk.js.map
