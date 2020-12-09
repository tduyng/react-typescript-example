(this['webpackJsonptypescript-react-boilerplate'] =
  this['webpackJsonptypescript-react-boilerplate'] || []).push([
  [15],
  {
    105: function (e, t, i) {
      i.d(t, 'a', function () {
        return T;
      });
      var a = i(1),
        s = i(0),
        c = i(113),
        n = i(19),
        r = i(240),
        l = i(164),
        j = r.a.SubMenu,
        o = r.a.ItemGroup,
        u = l.a.useBreakpoint,
        m = function () {
          var e = u().md;
          return Object(a.jsxs)(r.a, {
            mode: e ? 'horizontal' : 'inline',
            children: [
              Object(a.jsx)(
                r.a.Item,
                {
                  children: Object(a.jsx)(n.c, {
                    className: 'navbar-item',
                    to: '/',
                    children: 'Home',
                  }),
                },
                'key-home',
              ),
              Object(a.jsxs)(
                j,
                {
                  title: 'Services',
                  children: [
                    Object(a.jsxs)(o, {
                      title: 'Features',
                      children: [
                        Object(a.jsx)(
                          r.a.Item,
                          {
                            children: Object(a.jsx)(n.c, {
                              to: '/feature1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:1',
                        ),
                        Object(a.jsx)(
                          r.a.Item,
                          {
                            children: Object(a.jsx)(n.c, {
                              to: '/feature2',
                              children: 'Option 2',
                            }),
                          },
                          'setting:2',
                        ),
                      ],
                    }),
                    Object(a.jsxs)(o, {
                      title: 'Demo',
                      children: [
                        Object(a.jsx)(
                          r.a.Item,
                          {
                            children: Object(a.jsx)(n.c, {
                              to: '/demo1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:3',
                        ),
                        Object(a.jsx)(
                          r.a.Item,
                          {
                            children: Object(a.jsx)(n.c, {
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
              Object(a.jsx)(
                r.a.Item,
                {
                  children: Object(a.jsx)(n.c, {
                    className: 'navbar-item',
                    to: '/about',
                    children: 'About',
                  }),
                },
                'key-about',
              ),
              Object(a.jsx)(
                r.a.Item,
                {
                  children: Object(a.jsx)(n.c, {
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
        d = i(432),
        b = i(25),
        h = i(17),
        O = i(6),
        x = l.a.useBreakpoint,
        p = { logout: b.c },
        v = Object(h.b)(function (e) {
          return { isAuthenticated: e.auth.isAuthenticated, user: e.auth.user };
        }, p)(function (e) {
          var t = e.isAuthenticated,
            i = e.logout,
            s = e.user,
            c = x().md,
            l = Object(a.jsxs)(r.a, {
              mode: c ? 'horizontal' : 'inline',
              children: [
                Object(a.jsx)(
                  r.a.Item,
                  {
                    children: Object(a.jsx)(n.c, {
                      className: 'navbar-item primary',
                      to: O.a.LOGIN,
                      children: 'Sign In',
                    }),
                  },
                  'menukey-login',
                ),
                Object(a.jsx)(
                  r.a.Item,
                  {
                    children: Object(a.jsx)(n.c, {
                      className: 'navbar-item',
                      to: O.a.REGISTER,
                      children: 'Register',
                    }),
                  },
                  'menukey-signup',
                ),
              ],
            }),
            j = Object(a.jsxs)(r.a, {
              mode: c ? 'horizontal' : 'inline',
              children: [
                Object(a.jsx)(
                  r.a.Item,
                  {
                    children: Object(a.jsxs)(n.c, {
                      className: 'navbar-item primary',
                      to: O.a.PROFILE,
                      children: [
                        'Hi ',
                        Object(a.jsx)('strong', { children: s.username }),
                      ],
                    }),
                  },
                  'menukey-profile',
                ),
                Object(a.jsx)(
                  r.a.Item,
                  {
                    children: Object(a.jsx)(n.c, {
                      className: 'navbar-item primary',
                      to: O.a.HOME,
                      onClick: function () {
                        return i();
                      },
                      children: Object(a.jsxs)('span', {
                        children: [Object(a.jsx)(d.a, {}), 'Log Out'],
                      }),
                    }),
                  },
                  'menukey-login',
                ),
              ],
            });
          return Object(a.jsx)(a.Fragment, { children: t ? j : l });
        }),
        f = i(137),
        g = i(420),
        N = function () {
          var e = Object(s.useState)(!1),
            t = Object(c.a)(e, 2),
            i = t[0],
            r = t[1];
          return Object(a.jsx)('div', {
            className: 'navbar-section',
            children: Object(a.jsx)('div', {
              className: 'container',
              children: Object(a.jsxs)('nav', {
                className: 'navbar',
                children: [
                  Object(a.jsx)('div', {
                    className: 'navbar-logo',
                    children: Object(a.jsx)(n.c, {
                      to: '/',
                      className: 'navbar-item',
                      activeClassName: 'is-active',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(a.jsxs)('div', {
                    className: 'navbar-menu',
                    children: [
                      Object(a.jsx)('div', {
                        className: 'navbar-left-menu',
                        children: Object(a.jsx)(m, {}),
                      }),
                      Object(a.jsx)('div', {
                        className: 'navbar-right-menu',
                        children: Object(a.jsx)(v, {}),
                      }),
                    ],
                  }),
                  Object(a.jsxs)('div', {
                    children: [
                      Object(a.jsx)(f.a, {
                        className: 'navbar-btnBars',
                        type: 'primary',
                        onClick: function () {
                          r(!0);
                        },
                        children: Object(a.jsx)('span', {
                          className: 'navbar-btnBars-span',
                        }),
                      }),
                      Object(a.jsxs)(g.a, {
                        title: 'Drawer navbar',
                        placement: 'right',
                        closable: !0,
                        onClose: function () {
                          r(!1);
                        },
                        visible: i,
                        children: [Object(a.jsx)(m, {}), Object(a.jsx)(v, {})],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        q = i(433),
        y = i(434),
        k = i(435),
        I = i(436),
        C = i(430),
        w = function () {
          return Object(a.jsx)('div', {
            className: 'footer',
            children: Object(a.jsx)('div', {
              className: 'container',
              children: Object(a.jsxs)('div', {
                className: 'footer-inner',
                children: [
                  Object(a.jsx)('div', {
                    className: 'footer-logo',
                    children: Object(a.jsx)('a', {
                      href: '/',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(a.jsxs)('ul', {
                    className: 'footer-socials',
                    children: [
                      Object(a.jsx)('li', {
                        children: Object(a.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://github.com/tienduy-nguyen',
                          children: Object(a.jsx)(q.a, {}),
                        }),
                      }),
                      Object(a.jsx)('li', {
                        children: Object(a.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.twitter.com/tienduy_nguyen',
                          children: Object(a.jsx)(y.a, {}),
                        }),
                      }),
                      Object(a.jsx)('li', {
                        children: Object(a.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.linkedin.com/',
                          children: Object(a.jsx)(k.a, {}),
                        }),
                      }),
                    ],
                  }),
                  Object(a.jsx)('div', {
                    className: 'copyright',
                    children: 'Copyright \xa9 2020 REACT TS',
                  }),
                  Object(a.jsx)(C.a, {
                    children: Object(a.jsx)('div', {
                      className: 'go-top',
                      children: Object(a.jsx)(I.a, {}),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        A = i(410),
        E = A.a.Header,
        S = A.a.Content,
        R = A.a.Footer,
        T = function (e) {
          var t = e.children;
          return Object(a.jsxs)(A.a, {
            className: 'main-layout',
            children: [
              Object(a.jsx)(E, { children: Object(a.jsx)(N, {}) }),
              Object(a.jsx)(S, { className: 'layout-children', children: t }),
              Object(a.jsx)(R, { children: Object(a.jsx)(w, {}) }),
            ],
          });
        };
    },
    423: function (e, t, i) {
      i.r(t);
      var a = i(1),
        s = i(0),
        c = i.n(s),
        n = function () {
          return Object(a.jsx)('div', {
            className: 'main-body-section',
            children: Object(a.jsxs)('div', {
              className: 'container',
              children: [
                Object(a.jsx)('div', {
                  className: 'block-title',
                  children: Object(a.jsx)('h2', { children: 'About Us' }),
                }),
                Object(a.jsxs)('div', {
                  className: 'about-content',
                  children: [
                    Object(a.jsx)('p', {
                      children:
                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate omnis eius totam aperiam? Illo eius repudiandae nostrum iste dignissimos ad molestias facere atque, itaque placeat dolores dolorum doloremque? Sint.',
                    }),
                    Object(a.jsx)('p', {
                      children:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit sapiente tempore veritatis neque minima laudantium eius magni aut aliquid esse sequi, hic delectus nihil temporibus quas nobis porro exercitationem? Repellendus ipsa animi enim id sint ullam beatae eius repudiandae consequuntur nisi, eum quia, ad iure similique, tenetur cum voluptatibus sit natus rem eos iusto quam eveniet et quidem. Est distinctio minima sequi quas provident hic nulla maiores quam quaerat. Corrupti unde illum suscipit autem iure maxime dolorem magni ipsam! Ad officia veritatis aperiam nemo. Voluptas at nostrum molestias incidunt necessitatibus, sapiente numquam facere explicabo quos, eum cumque repellat quo.',
                    }),
                    Object(a.jsx)('p', {
                      children:
                        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sunt ullam nesciunt beatae deleniti similique aliquam excepturi, minus nobis minima ex atque, quos veniam architecto doloribus maxime sapiente. Vel voluptatem pariatur delectus dolor quidem eveniet repellat facere tempora nisi. Ut!',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        r = i(105),
        l = function () {
          return Object(a.jsx)(r.a, { children: Object(a.jsx)(n, {}) });
        },
        j = c.a.memo(l);
      t.default = j;
    },
  },
]);
//# sourceMappingURL=15.204ab6d3.chunk.js.map
