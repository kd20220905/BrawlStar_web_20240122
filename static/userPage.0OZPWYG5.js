import R from "./Icon.U5Kiny3Q.js";
import {
  d as D,
  t,
  v as r,
  x as e,
  z as x,
  y as A,
  aX as W,
  W as V,
  bc as Q,
  bV as k,
  r as E,
  c as N,
  N as n,
  A as L,
  aV as G,
  ag as I,
  B as S,
  a4 as P,
  af as Y,
  a3 as $,
} from "./entry.r3LHacCz.js";
import { a as K, u as q } from "./brawlers.HlZ3TO6J.js";
import { u as F } from "./icons.Mv4ZvfDZ.js";
import "./index.aIcZnwHK.js";
const O = { class: "absolute top-[0%] left-0 h-[76dvh] w-full flex flex-col" },
  z = { class: "rounded-t-[1rem] bg-white border relative" },
  Z = { class: "text-center py-[1rem]" },
  ee = {
    class: "h-full w-full bg-white border-x p-2 overflow-y-auto px-[3vw]",
  },
  se = { class: "grid grid-cols-6 gap-x-[2vw]" },
  te = { class: "col-span-2 flex flex-col" },
  re = ["src"],
  oe = { class: "text-[12px] mt-2 flex flex-wrap gap-1" },
  le = { class: "rounded-full border border-black/30 px-3 py-[0.1rem]" },
  ne = { class: "col-span-4" },
  ae = ["innerHTML"],
  ce = e("p", { class: "text-[18px] mt-[32px]" }, "武裝配件", -1),
  ie = { class: "grid grid-cols-6 gap-[2vh] mt-[2vh]" },
  Ae = { class: "col-span-1" },
  de = ["src"],
  ue = { class: "col-span-5" },
  pe = ["innerHTML"],
  me = e("p", { class: "text-[18px] mt-[32px]" }, "能力之星", -1),
  fe = { class: "grid grid-cols-6 gap-[2vh] mt-[2vh]" },
  he = { class: "col-span-1" },
  _e = ["src"],
  xe = { class: "col-span-5" },
  ge = ["innerHTML"],
  we = D({
    __name: "brawlerInfo",
    props: { brawlerInfo: Object },
    emits: ["closeBrawlerInfo"],
    setup(T, { emit: g }) {
      const i = T,
        m = g;
      function a() {
        m("closeBrawlerInfo");
      }
      const c = (d) => `background: ${d}; border: 1px solid ${d}`;
      return (d, w) => {
        var v, h, b, B, M, j, u, y;
        const U = R;
        return (
          t(),
          r("div", O, [
            e("div", z, [
              e(
                "button",
                {
                  type: "button",
                  class: "absolute left-[12px] top-1/2 -translate-y-1/2",
                  onClick: a,
                },
                [x(U, { name: "material-symbols:cancel-outline", size: "26" })]
              ),
              e("p", Z, A((v = i.brawlerInfo) == null ? void 0 : v.name), 1),
            ]),
            e("div", ee, [
              e("div", se, [
                e("div", te, [
                  e(
                    "img",
                    {
                      src: (h = i.brawlerInfo) == null ? void 0 : h.imageUrl,
                      alt: "",
                    },
                    null,
                    8,
                    re
                  ),
                  e("div", oe, [
                    e(
                      "span",
                      {
                        style: W(
                          c(
                            (b = i.brawlerInfo) == null
                              ? void 0
                              : b.rarity.color
                          )
                        ),
                        class: "rounded-full px-3 py-[0.1rem]",
                      },
                      A((B = i.brawlerInfo) == null ? void 0 : B.rarity.name),
                      5
                    ),
                    e(
                      "span",
                      le,
                      A((M = i.brawlerInfo) == null ? void 0 : M.class.name),
                      1
                    ),
                  ]),
                ]),
                e("div", ne, [
                  e(
                    "p",
                    {
                      innerHTML:
                        (j = i.brawlerInfo) == null
                          ? void 0
                          : j.descriptionHtml,
                    },
                    null,
                    8,
                    ae
                  ),
                ]),
              ]),
              ce,
              (t(!0),
              r(
                V,
                null,
                Q(
                  (u = i.brawlerInfo) == null ? void 0 : u.gadgets,
                  (f) => (
                    t(),
                    r("ul", { class: "", key: f.id + "gadget" }, [
                      e("li", ie, [
                        e("div", Ae, [
                          e("img", { src: f.imageUrl, alt: "" }, null, 8, de),
                        ]),
                        e("div", ue, [
                          e("p", { innerHTML: f.descriptionHtml }, null, 8, pe),
                        ]),
                      ]),
                    ])
                  )
                ),
                128
              )),
              me,
              (t(!0),
              r(
                V,
                null,
                Q(
                  (y = i.brawlerInfo) == null ? void 0 : y.starPowers,
                  (f) => (
                    t(),
                    r("ul", { class: "", key: f.id + "gadget" }, [
                      e("li", fe, [
                        e("div", he, [
                          e("img", { src: f.imageUrl, alt: "" }, null, 8, _e),
                        ]),
                        e("div", xe, [
                          e("p", { innerHTML: f.descriptionHtml }, null, 8, ge),
                        ]),
                      ]),
                    ])
                  )
                ),
                128
              )),
            ]),
          ])
        );
      };
    },
  }),
  ve = "" + new URL("changeListBtn.WQGKxN4l.png", import.meta.url).href,
  C = "" + new URL("trophy.ltbewaEz.png", import.meta.url).href,
  be = "" + new URL("highTrophy._uIaHK6s.png", import.meta.url).href,
  Be = { class: "h-[76dvh] relative mt-[1dvh] flex flex-col" },
  ye = { class: "flex justify-between items-center" },
  Ie = e("img", { src: ve, alt: "", class: "h-[20px] mr-1" }, null, -1),
  ke = e("p", null, "列表排序", -1),
  Ue = { class: "overflow-x-auto brawlers-scrollbar h-full" },
  Me = { key: 0, class: "grid grid-cols-3 gap-[16px]" },
  je = ["onClick"],
  Ee = ["src"],
  Ve = { key: 0, class: "absolute top-1 left-1 text-white" },
  Qe = ["src"],
  Te = {
    key: 1,
    class:
      "absolute bottom-0 right-0 bg-black text-white text-[12px] flex items-center p-1 rounded",
  },
  Le = e("img", { src: C, alt: "", class: "h-[16px] mr-1" }, null, -1),
  Se = { key: 1, class: "grid grid-cols-1 gap-[16px]" },
  Ce = ["onClick"],
  He = { class: "flex items-center" },
  Je = ["src"],
  Ge = { key: 0, class: "" },
  Pe = ["src"],
  Re = { key: 1, class: "" },
  De = ["src"],
  Ne = { key: 0, class: "flex items-center" },
  Ke = e("img", { src: be, alt: "", class: "h-[36px] mr-1" }, null, -1),
  qe = { key: 1, class: "flex" },
  Xe = e("img", { src: C, alt: "", class: "h-[24px] mr-1" }, null, -1),
  We = {
    __name: "brawlers",
    setup(T) {
      const g = K(),
        i = q(),
        { UserBrawlers: m } = k(i),
        { Brawlers: a } = k(g),
        c = E(4),
        d = E(0),
        w = N(() => {
          if (c.value === 0) return a.value;
          let l, o;
          switch (c.value) {
            case 1:
              (l = "rank"), (o = "big");
              break;
            case 2:
              (l = "rank"), (o = "small");
              break;
            case 3:
              (l = "trophies"), (o = "big");
              break;
            case 4:
              (l = "trophies"), (o = "small");
              break;
            default:
              (l = "rank"), (o = "big");
              break;
          }
          const p = a.value.map((s) => {
            const _ = m.value.find((X) => s.id === X.id);
            return { ...s, compareValue: _ ? _[l] : -1 };
          });
          return (
            p.sort((s, _) =>
              o === "small"
                ? s.compareValue - _.compareValue
                : _.compareValue - s.compareValue
            ),
            p.map((s) => (delete s.compareValue, s))
          );
        });
      function U() {
        if (c.value >= 4) return (c.value = 0);
        c.value++;
      }
      function v() {
        return d.value === 0 ? (d.value = 1) : (d.value = 0);
      }
      const h = E(!1),
        b = E({});
      function B(l) {
        M(), (b.value = l);
      }
      function M() {
        h.value = !0;
      }
      function j() {
        h.value = !1;
      }
      const u = (l) => m.value.some((o) => o.id === l),
        y = (l) => {
          const o = m.value.find((p) => p.id === l);
          return o ? o.trophies : 0;
        },
        f = (l) => {
          const o = m.value.find((p) => p.id === l);
          return o ? o.highestTrophies : 0;
        },
        H = (l) => {
          const o = m.value.find((p) => p.id === l);
          return o ? o.rank : 0;
        };
      return (l, o) => {
        const p = R,
          J = we;
        return (
          t(),
          r("div", Be, [
            e("div", ye, [
              e(
                "button",
                {
                  type: "button",
                  onClick: U,
                  class:
                    "border-2 border-slate/200 rounded-full mb-1 flex justify-center items-center w-full",
                },
                [
                  Ie,
                  e(
                    "p",
                    null,
                    A(
                      n(c) === 0
                        ? "所有"
                        : n(c) === 1
                        ? "依照rank最高"
                        : n(c) === 2
                        ? "依照rank最低"
                        : n(c) === 3
                        ? "依照獎盃最高"
                        : n(c) === 4
                        ? "依照獎盃最低"
                        : "依照rank最高"
                    ),
                    1
                  ),
                ]
              ),
              e(
                "button",
                {
                  type: "button",
                  onClick: v,
                  class:
                    "border-2 border-slate/200 rounded-full mb-1 flex justify-center items-center w-full",
                },
                [
                  x(
                    p,
                    {
                      name:
                        n(d) === 0
                          ? "solar:server-minimalistic-bold"
                          : "basil:layout-solid",
                      size: "20",
                      class: "text-slate-400 mr-1",
                    },
                    null,
                    8,
                    ["name"]
                  ),
                  ke,
                ]
              ),
            ]),
            e("div", Ue, [
              n(d)
                ? (t(),
                  r("ul", Me, [
                    x(
                      P,
                      { name: "brawlers-fade" },
                      {
                        default: L(() => [
                          (t(!0),
                          r(
                            V,
                            null,
                            Q(
                              n(w),
                              (s) => (
                                t(),
                                r(
                                  "li",
                                  { key: s.id + "brawler", class: "relative" },
                                  [
                                    e(
                                      "button",
                                      { type: "button", onClick: (_) => B(s) },
                                      [
                                        e(
                                          "img",
                                          {
                                            src: s.imageUrl,
                                            alt: "",
                                            class: G({
                                              "brightness-50": !u(s.id),
                                            }),
                                          },
                                          null,
                                          10,
                                          Ee
                                        ),
                                      ],
                                      8,
                                      je
                                    ),
                                    u(s.id)
                                      ? (t(),
                                        r("div", Ve, [
                                          e(
                                            "img",
                                            {
                                              src: `/BrawlStar_web_20240122/rank/${H(
                                                s.id
                                              )}.png`,
                                              alt: "",
                                              class: "h-[35px] mr-1",
                                            },
                                            null,
                                            8,
                                            Qe
                                          ),
                                        ]))
                                      : I("", !0),
                                    u(s.id)
                                      ? (t(),
                                        r("div", Te, [
                                          Le,
                                          S(" " + A(y(s.id)), 1),
                                        ]))
                                      : I("", !0),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                  ]))
                : (t(),
                  r("ul", Se, [
                    x(
                      P,
                      { name: "brawlers-fade" },
                      {
                        default: L(() => [
                          (t(!0),
                          r(
                            V,
                            null,
                            Q(
                              n(w),
                              (s) => (
                                t(),
                                r("li", { key: s.id + "brawler" }, [
                                  e(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: (_) => B(s),
                                      class:
                                        "flex justify-between items-center w-full border-2 p-2 rounded-[12px]",
                                    },
                                    [
                                      e("div", He, [
                                        e(
                                          "img",
                                          {
                                            src: s.imageUrl3,
                                            alt: "",
                                            class: G([
                                              "h-[46px] w-[46px] mr-2 object-cover",
                                              { "brightness-50": !u(s.id) },
                                            ]),
                                          },
                                          null,
                                          10,
                                          Je
                                        ),
                                        u(s.id)
                                          ? (t(),
                                            r("div", Ge, [
                                              e(
                                                "img",
                                                {
                                                  src: `/BrawlStar_web_20240122/rank/${H(
                                                    s.id
                                                  )}.png`,
                                                  alt: "",
                                                  class: "w-[32px]",
                                                },
                                                null,
                                                8,
                                                Pe
                                              ),
                                            ]))
                                          : (t(),
                                            r("div", Re, [
                                              e(
                                                "img",
                                                {
                                                  src: "/BrawlStar_web_20240122/rank/1.png",
                                                  alt: "",
                                                  class: "w-[32px]",
                                                },
                                                null,
                                                8,
                                                De
                                              ),
                                            ])),
                                      ]),
                                      u(s.id)
                                        ? (t(),
                                          r("div", Ne, [
                                            Ke,
                                            S(" " + A(f(s.id)), 1),
                                          ]))
                                        : I("", !0),
                                      u(s.id)
                                        ? (t(),
                                          r("div", qe, [
                                            Xe,
                                            S(" " + A(y(s.id)), 1),
                                          ]))
                                        : I("", !0),
                                    ],
                                    8,
                                    Ce
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                  ])),
            ]),
            x(
              $,
              { name: "fade-up" },
              {
                default: L(() => [
                  n(h)
                    ? (t(),
                      Y(
                        J,
                        { key: 0, brawlerInfo: n(b), onCloseBrawlerInfo: j },
                        null,
                        8,
                        ["brawlerInfo"]
                      ))
                    : I("", !0),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  },
  Ye = We,
  $e = "" + new URL("solo.1wg64snL.png", import.meta.url).href,
  Fe = "" + new URL("duo.iJGhJ2fq.png", import.meta.url).href,
  Oe =
    "data:image/png;base64,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",
  ze = {
    class:
      "flex flex-col max-w-[560px] h-[96dvh] box-border md:mx-auto mx-1 my-[2dvh] border-2 border-black/30 rounded-lg py-[2dvh] px-[2vw]",
  },
  Ze = { class: "flex items-start" },
  es = ["src"],
  ss = { class: "grid grid-cols-6 gap-2 w-full" },
  ts = {
    class:
      "col-span-6 border border-gray-300 bg-gray-100 rounded-full w-full text-center text-[1.1em]",
  },
  rs = {
    class:
      "flex items-center justify-center px-1 col-span-6 border border-gray-300 bg-gray-100 rounded-full w-full text-center text-[1.1em]",
  },
  os = e("img", { src: C, alt: "", class: "w-[20px] mr-1" }, null, -1),
  ls = { class: "" },
  ns = {
    class:
      "flex items-center px-1 col-span-2 rounded-full py-1 text-[1em] text-center bg-gray-100",
  },
  as = e("img", { src: $e, alt: "", class: "w-[20px]" }, null, -1),
  cs = { class: "w-full" },
  is = {
    class:
      "flex items-center px-1 col-span-2 rounded-full py-1 text-[1em] text-center bg-gray-100",
  },
  As = e("img", { src: Fe, alt: "", class: "w-[20px]" }, null, -1),
  ds = { class: "w-full" },
  us = {
    class:
      "flex items-center px-1 col-span-2 rounded-full py-1 text-[1em] text-center bg-gray-100",
  },
  ps = e("img", { src: Oe, alt: "", class: "w-[20px]" }, null, -1),
  ms = { class: "w-full" },
  ws = D({
    __name: "userPage",
    setup(T) {
      const g = q(),
        i = K(),
        m = F(),
        { UserInfo: a } = k(g);
      k(i);
      const { PlayerIcons: c, ClubIcons: d } = k(m),
        w = N(() =>
          !a.value ||
          !a.value.icon ||
          !a.value.icon.id ||
          !c.value[a.value.icon.id] ||
          !c.value[a.value.icon.id].imageUrl
            ? ""
            : c.value[a.value.icon.id].imageUrl
        );
      return (U, v) => {
        const h = Ye;
        return (
          t(),
          r("main", ze, [
            e("div", Ze, [
              e(
                "img",
                { src: n(w), alt: "", class: "h-[100px] mr-1" },
                null,
                8,
                es
              ),
              e("div", ss, [
                e("p", ts, A(n(a).name), 1),
                e("div", rs, [os, e("p", ls, A(n(a).trophies), 1)]),
                e("div", ns, [as, e("p", cs, A(n(a).soloVictories), 1)]),
                e("div", is, [As, e("p", ds, A(n(a).duoVictories), 1)]),
                e("div", us, [ps, e("p", ms, A(n(a)["3vs3Victories"]), 1)]),
              ]),
            ]),
            x(h),
          ])
        );
      };
    },
  });
export { ws as default };
