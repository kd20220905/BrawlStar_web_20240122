import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import __nuxt_component_0$1 from './Icon-_tIW4cfG.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { u as useUserInfoStore, a as useBrawlersStore, b as useIconsStore } from './icons-STm6b3HQ.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-yb8E0lqf.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "brawlerInfo",
  __ssrInlineRender: true,
  props: {
    brawlerInfo: Object
  },
  emits: ["closeBrawlerInfo"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const rarityBgColor = (color) => {
      return `background: ${color}; border: 1px solid ${color}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-[0%] left-0 h-[76dvh] w-full flex flex-col" }, _attrs))}><div class="rounded-t-[1rem] bg-white border relative"><button type="button" class="absolute left-[12px] top-1/2 -translate-y-1/2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:cancel-outline",
        size: "26"
      }, null, _parent));
      _push(`</button><p class="text-center py-[1rem]">${ssrInterpolate((_a = props.brawlerInfo) == null ? void 0 : _a.name)}</p></div><div class="h-full w-full bg-white border-x p-2 overflow-y-auto px-[3vw]"><div class="grid grid-cols-6 gap-x-[2vw]"><div class="col-span-2 flex flex-col"><img${ssrRenderAttr("src", (_b = props.brawlerInfo) == null ? void 0 : _b.imageUrl)} alt=""><div class="text-[12px] mt-2 flex flex-wrap gap-1"><span style="${ssrRenderStyle(rarityBgColor((_c = props.brawlerInfo) == null ? void 0 : _c.rarity.color))}" class="rounded-full px-3 py-[0.1rem]">${ssrInterpolate((_d = props.brawlerInfo) == null ? void 0 : _d.rarity.name)}</span><span class="rounded-full border border-black/30 px-3 py-[0.1rem]">${ssrInterpolate((_e = props.brawlerInfo) == null ? void 0 : _e.class.name)}</span></div></div><div class="col-span-4"><p>${(_f = props.brawlerInfo) == null ? void 0 : _f.descriptionHtml}</p></div></div><p class="text-[18px] mt-[32px]">\u6B66\u88DD\u914D\u4EF6</p><!--[-->`);
      ssrRenderList((_g = props.brawlerInfo) == null ? void 0 : _g.gadgets, (gadget) => {
        _push(`<ul class=""><li class="grid grid-cols-6 gap-[2vh] mt-[2vh]"><div class="col-span-1"><img${ssrRenderAttr("src", gadget.imageUrl)} alt=""></div><div class="col-span-5"><p>${gadget.descriptionHtml}</p></div></li></ul>`);
      });
      _push(`<!--]--><p class="text-[18px] mt-[32px]">\u80FD\u529B\u4E4B\u661F</p><!--[-->`);
      ssrRenderList((_h = props.brawlerInfo) == null ? void 0 : _h.starPowers, (starPowers) => {
        _push(`<ul class=""><li class="grid grid-cols-6 gap-[2vh] mt-[2vh]"><div class="col-span-1"><img${ssrRenderAttr("src", starPowers.imageUrl)} alt=""></div><div class="col-span-5"><p>${starPowers.descriptionHtml}</p></div></li></ul>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/userPage/brawlerInfo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0$1 = "" + buildAssetsURL("changeListBtn.WQGKxN4l.png");
const _imports_0 = "" + buildAssetsURL("trophy.ltbewaEz.png");
const _imports_2$1 = "" + buildAssetsURL("highTrophy._uIaHK6s.png");
const _sfc_main$1 = {
  __name: "brawlers",
  __ssrInlineRender: true,
  setup(__props) {
    const brawlersStore = useBrawlersStore();
    const userInfoStore = useUserInfoStore();
    const { UserBrawlers } = storeToRefs(userInfoStore);
    const { Brawlers } = storeToRefs(brawlersStore);
    const BrawlersListType = ref(4);
    const BrawlersListStyle = ref(0);
    const BrawlersList = computed(() => {
      if (BrawlersListType.value === 0) {
        return Brawlers.value;
      }
      let compareType;
      let order;
      switch (BrawlersListType.value) {
        case 1:
          compareType = "rank";
          order = "big";
          break;
        case 2:
          compareType = "rank";
          order = "small";
          break;
        case 3:
          compareType = "trophies";
          order = "big";
          break;
        case 4:
          compareType = "trophies";
          order = "small";
          break;
        default:
          compareType = "rank";
          order = "big";
          break;
      }
      const mapBrawlers = Brawlers.value.map((Brawler) => {
        const matchUserBrawlers = UserBrawlers.value.find((UserBrawler) => {
          return Brawler.id === UserBrawler.id;
        });
        return {
          ...Brawler,
          compareValue: matchUserBrawlers ? matchUserBrawlers[compareType] : -1
        };
      });
      mapBrawlers.sort((a, b) => {
        return order === "small" ? a.compareValue - b.compareValue : b.compareValue - a.compareValue;
      });
      const returnBrawlers = mapBrawlers.map((mapBrawler) => {
        delete mapBrawler.compareValue;
        return mapBrawler;
      });
      return returnBrawlers;
    });
    const isBrawlerInfo = ref(false);
    const brawlerInfo = ref({});
    function closeBrawlerInfo() {
      isBrawlerInfo.value = false;
    }
    const hasBrawler = (brawlerId) => {
      return UserBrawlers.value.some((Brawler) => {
        return Brawler.id === brawlerId;
      });
    };
    const findBrawlerTrophies = (brawlerId) => {
      const Brawler = UserBrawlers.value.find((Brawler2) => {
        return Brawler2.id === brawlerId;
      });
      if (!Brawler)
        return 0;
      return Brawler.trophies;
    };
    const findBrawlerHighestTrophies = (brawlerId) => {
      const Brawler = UserBrawlers.value.find((Brawler2) => {
        return Brawler2.id === brawlerId;
      });
      if (!Brawler)
        return 0;
      return Brawler.highestTrophies;
    };
    const findBrawlerRank = (brawlerId) => {
      const Brawler = UserBrawlers.value.find((Brawler2) => {
        return Brawler2.id === brawlerId;
      });
      if (!Brawler)
        return 0;
      return Brawler.rank;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_UserPageBrawlerInfo = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[76dvh] relative mt-[1dvh] flex flex-col" }, _attrs))}><div class="flex justify-between items-center"><button type="button" class="border-2 border-slate/200 rounded-full mb-1 flex justify-center items-center w-full"><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="h-[20px] mr-1"><p>${ssrInterpolate(unref(BrawlersListType) === 0 ? "\u6240\u6709" : unref(BrawlersListType) === 1 ? "\u4F9D\u7167rank\u6700\u9AD8" : unref(BrawlersListType) === 2 ? "\u4F9D\u7167rank\u6700\u4F4E" : unref(BrawlersListType) === 3 ? "\u4F9D\u7167\u734E\u76C3\u6700\u9AD8" : unref(BrawlersListType) === 4 ? "\u4F9D\u7167\u734E\u76C3\u6700\u4F4E" : "\u4F9D\u7167rank\u6700\u9AD8")}</p></button><button type="button" class="border-2 border-slate/200 rounded-full mb-1 flex justify-center items-center w-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(BrawlersListStyle) === 0 ? "solar:server-minimalistic-bold" : "basil:layout-solid",
        size: "20",
        class: "text-slate-400 mr-1"
      }, null, _parent));
      _push(`<p>\u5217\u8868\u6392\u5E8F</p></button></div><div class="overflow-x-auto brawlers-scrollbar h-full">`);
      if (unref(BrawlersListStyle)) {
        _push(`<ul class="grid grid-cols-3 gap-[16px]"><!--[-->`);
        ssrRenderList(unref(BrawlersList), (brawler) => {
          _push(`<li class="relative"><button type="button"><img${ssrRenderAttr("src", brawler.imageUrl)} alt="" class="${ssrRenderClass({
            "brightness-50": !hasBrawler(brawler.id)
          })}"></button>`);
          if (hasBrawler(brawler.id)) {
            _push(`<div class="absolute top-1 left-1 text-white"><img${ssrRenderAttr("src", `/rank/${findBrawlerRank(brawler.id)}.png`)} alt="" class="h-[35px] mr-1"></div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasBrawler(brawler.id)) {
            _push(`<div class="absolute bottom-0 right-0 bg-black text-white text-[12px] flex items-center p-1 rounded"><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-[16px] mr-1"> ${ssrInterpolate(findBrawlerTrophies(brawler.id))}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<ul class="grid grid-cols-1 gap-[16px]"><!--[-->`);
        ssrRenderList(unref(BrawlersList), (brawler) => {
          _push(`<li><button type="button" class="flex justify-between items-center w-full border-2 p-2 rounded-[12px]"><div class="flex items-center"><img${ssrRenderAttr("src", brawler.imageUrl3)} alt="" class="${ssrRenderClass([{
            "brightness-50": !hasBrawler(brawler.id)
          }, "h-[46px] w-[46px] mr-2 object-cover"])}">`);
          if (hasBrawler(brawler.id)) {
            _push(`<div class=""><img${ssrRenderAttr("src", `/rank/${findBrawlerRank(brawler.id)}.png`)} alt="" class="w-[32px]"></div>`);
          } else {
            _push(`<div class=""><img${ssrRenderAttr("src", `/rank/1.png`)} alt="" class="w-[32px]"></div>`);
          }
          _push(`</div>`);
          if (hasBrawler(brawler.id)) {
            _push(`<div class="flex items-center"><img${ssrRenderAttr("src", _imports_2$1)} alt="" class="h-[36px] mr-1"> ${ssrInterpolate(findBrawlerHighestTrophies(brawler.id))}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasBrawler(brawler.id)) {
            _push(`<div class="flex"><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-[24px] mr-1"> ${ssrInterpolate(findBrawlerTrophies(brawler.id))}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</div>`);
      if (unref(isBrawlerInfo)) {
        _push(ssrRenderComponent(_component_UserPageBrawlerInfo, {
          brawlerInfo: unref(brawlerInfo),
          onCloseBrawlerInfo: closeBrawlerInfo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/userPage/brawlers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _imports_1 = "" + buildAssetsURL("solo.1wg64snL.png");
const _imports_2 = "" + buildAssetsURL("duo.iJGhJ2fq.png");
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABXCAMAAABVwWmqAAACylBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkjOTsNCT///8BAgP0iIQCAAAEBAQEAAAki+P9/f38/PznMyMjieDpMyMjiuEIAADqMyTkMx8REREEFyW8KxsXY6EXXprYLx+hIxeFHRQABg4ZBAMTBADp6ekbbbEUUoYMNlgMM1MIITetJxdaFAw9DQgABAj5+fnu7u4kjOAbdLxmZmYFGi3NLRzILRsEDxqxKBiQHxR6GxBNEAwjCAT09PQddsGurq4UTn8SSXYQQm3wZV0ML00IKUIIJDwfHx+UIBRrGBBeFAw0DAgpCAQfBwQghNjNzc0ffc0gfMgaaasYXJUWWZF4eHgQPmMMK0cyMjIHHjEcHBzEKxuBGxMACxNVEwxIEAlBDAjc3NwjiNzU1NQfgtS7u7sbcbiqqqqlpaUYZaWhoaGampoUVYvweHIQRXEQQGhMTEw+Pj45OTnsPiwmJibgMx8EEx+lJBgDDBh4HBBwGBBQEAwMDAwwCAQihtgfgM7JycnBwcGenp6SkpKLi4uDg4MUS3tycnLwcGtqamoQO2AMOFxWVlZHR0dCQkLsRTXcMSDTLx+0JxkXFxebJBaWIBSKHhRoFxBjFg4vDAjh4eHg4OAfeMbFxcUbbbWoqKj0g35+fn5fX19bW1tTU1PsOCjAKxuoJhhzGBDl5eXj4+Ozs7Onp6eTk5PwYVXwXFDwXE/sUUHsTUHsTT04ODiVIxTs+3eJAAAAP3RSTlMABPv9CYL47OKfKMJ9QxD08d2PF+nMvbGIbVg8M6SZlVxMRz8M2bmScWQ4MB/RtahgUxsH1MiudGhnUHcsI3hqpx+1AAAIeUlEQVRo3rWY9UMUQRTH9+DgOEoQlBBEsbs7BlzvDFT0UFRAsLA7UAHBQhEVJRS7u7u7u7u7/R98M7t7e6v79gT1+4O6vtnPvnm1s8f9I+l9XIM86lRp5FTc6OdWw8XgQAwNPYqOK1/XtWpo2SA9u/AI9nYmajLq/5zoU65OlcrMuxLe4J0gr0qenL6WI8FUWodsFrwLhM2GlPZvynwoV5JXJ7hU81PgI+PG3Vk8tv/UPfn7THCpCFEp99J+JUXvZBmacJw77qIX/aPgdc/RPfp1Hd69S7isfm0IaSjTy9XgEYQxQHpim7iMA+DdrT09p+wa9TLv+gzB56vhqupvIr5WfKBKiiJjM9rQv6lpUb8R1DulLrMH7O2ozu8JEZLwQcUIKONAouBdj1Gw2QhY0yWfPYHkd1ZF9KDWfuHq2mMizhLfjQcXr6itGk3zNC5CHdGd8ocj/Gkm4i3iW0CEx9JtXvqc8umSYlVELCD6IyEYTvldEP5iQkqK/DLAfxkevu10a6qPimWJgBjTWR0xCvixEQgfkhMs8v0dSWRE+LYNrQV9s112APijEf4NCN50jB9JiJPYnAYW4pTWolJsl8VppHAM8Mdq5KYxw+todhM7vnisxu9CQzwCTyG5heSmK9wYyviNaf9M6/iitaQv2ilU5qYnxA6r3eaMX4EXUiiF/7QihSaNFGbAjT064+1VnuKrORAhhZceC/hthUkh6YrYppqIoR7l1wa+kMJtKRs2pHxVSWFHjfbqjvBhgJZg89nJkdhJ4VSNFEZie5tOiB/jG4FfxBSasNEBgr6vxPjw7rCXwnA8hYnIjbSumzG+N0+KnkIyTWM0BbLugvFe1BTSuu6Ij6ZSlF8XyqdIKbQ/mupSflXg4ynchabQ/mhyZuUfCHw8hTeBvxjZmzia0LevN0tvZUeikcK9JrW3y+W8UaOu5uVpvL26xErlX4nxryD8RcC/zfg7ur6aAtrV9fq+OCLrpmpgLxeYpOnckCdqKdzRY++ixTNiqYt3IsJ3jBlH1BXZT/L4yoirr67fzN97e1HBdHqbS3nGL0H5bXb8mldbHxNHAB3VnYLEGRlxQFQKqpPJl138UG5zRKRiqfJmc/r5eStmrXh0/Mx2gquGTjgKC4ezuLzfOpOkb3k+9MyzrYQp98m7WfcGDVoyy2JZ3a6VpKNme4dbVwcxjtNGj85/fbt/wfQZsSw21waJjAmM8UCEtt/cq5WsXjg/UDx3OhBEy0TiwP0EJD1tPPxD1gOU76K3x5/XXoRshovtcKEU+49TZtx9QdVRfvpAkXQMIJuVfGkz1wii4tZPCxeC6YgYoCVmthmFVm/5/nRdr+OI+87NJDx7PSIaKjGhDNe2U/I/UDJCNxhdOVmevhjfMl6EDeXJYSUfKufYAkLFwlvMpb5bzVql/Vs2LlO2VAtOKY9iBNGEdtYKHWTNqqwjFwjIzdVTx2mqrBfCPy/SBpnTJa4yD6sssModx0s1FGy7BS/YrPC9aJZaaQuUj9hPykQss8B6T86uPJsGuAdA7KpVFxcLX3tHRdiJUyJ/lfmXB6yDHJfhCq/irKouitjDAJUyTS7Y5no8bCBEV3h+qNB29wRU+7sicjurya3roLKk0BFS0cr3rF6tVNkyAe6Vy+rt8PVCRo4ry/Ku2bJkAq1LywrJcIEn3v4hwTXd6rt42SaxWT1OUxVZAhYo2/ao+US7Vu1XnNm64JHE30oQ+WlvobKDdYjKesovsV5bh6uqVOq2vBg8/9K1KjaoYJCHqKxcy0D5Qn45xIyM6js59VzypIQ53eKHZM4MW7o+BpraxwYeFGxAh6hc7eZrv/AHQjL4Q2G/ay6Et7aVrmPliA9ReVDPki+l+d+7kwp/8ELbGV3Jipd22+ds8smEjTwbolY950m67QN6PeNheWaYmnZKx3+QB83l/Ik0eLNn2i5Kk4co6I2FDaXVb9sx+IShLLfRbVX5A+QEQy3SZUgUL554v2rV6nVPhl60loo5NzdXmv3r1fGH4M4qUuE4I0EMm7mQKAVeKdUH7lPTQ+B7SLUD4emm7kY0r6BFJWXNV/5PAtyH3ehq00pJyLq+EojfnXMuejDdU1ZCcnaf3psmrunNI36BJoJNbGBXOjcOhqlrGNjiVybNXq5iSwPbSoSfzRNfIb06OuoXdkD4u8FzzBYF/OWILZUnDQR+E1r7wzAGJHQkZoPkx2C2HEIaCvwGPC1+pAxmgrEvYhsMtiiMz9pXPj+fRRhDeLwEM8E2GeEvBVsjxg9i/IlImrrBumTEFs8jbQNKAlsdjqoO489BywwtcdbckxD+GrBVZfwANtriEYZWiSeDbS5iWw+2ujYHhcwwvL2GIIxUYGQhto08+7oG1eKJRonvtNN69/F9V7Apz50YP0ajxEeCX0sRWxo9tcjH/zS0xO21Ht7aRsbXO2hN2dm0xBHbQbDlaDzbSSd/PuIljrdeEmsvvC1rW1+NeInPoSWOth4eu1Tr9K/C+GsQxklYtxGx9eGJSm8MXj57ZTQd3G46m6+vhzgDfMQ6CDRg0pAhWd3mJEzadC51ct+o3db3p0MQx2R01DgD3GfLswfbzK1DSfFrohNObsohWpLP7PRDBRvB8TvFt+6mjdl95vcdNjKGJ3+qUE5QBeGW1EwpeFnRcydOyu49Py1nN/kLSWdPZ/Gaj4oaGUP+mWrqRD75P/LgrP7/D7GTp/TrWBHli98ZrEd+fSgMvnmwI2Jpwsny8dKClER9rNCc48q4KM0OBu8SFUMCrc5L70dU7vX81a2+Tp7saBbqZDSGODWqEhha1dUH+Z4LwR5QjO6zVE02oBQ/ktSuWqgP6oBiqgHwryuYPcs1bVoOfjcAZhHl417CmQWvpJ+xuFPl2nU8glrouX+in37/h+9fWDGWAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "userPage",
  __ssrInlineRender: true,
  setup(__props) {
    const userInfoStore = useUserInfoStore();
    const brawlersStore = useBrawlersStore();
    const iconsStore = useIconsStore();
    const { UserInfo } = storeToRefs(userInfoStore);
    storeToRefs(brawlersStore);
    const { PlayerIcons, ClubIcons } = storeToRefs(iconsStore);
    const UserImage = computed(() => {
      if (!UserInfo.value)
        return "";
      if (!UserInfo.value.icon)
        return "";
      if (!UserInfo.value.icon.id)
        return "";
      if (!PlayerIcons.value[UserInfo.value.icon.id])
        return "";
      if (!PlayerIcons.value[UserInfo.value.icon.id].imageUrl)
        return "";
      return PlayerIcons.value[UserInfo.value.icon.id].imageUrl;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserPageBrawlers = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col max-w-[560px] h-[96dvh] box-border md:mx-auto mx-1 my-[2dvh] border-2 border-black/30 rounded-lg py-[2dvh] px-[2vw]" }, _attrs))}><div class="flex items-start"><img${ssrRenderAttr("src", unref(UserImage))} alt="" class="h-[100px] mr-1"><div class="grid grid-cols-6 gap-2 w-full"><p class="col-span-6 border border-gray-300 bg-gray-100 rounded-full w-full text-center text-[1.1em]">${ssrInterpolate(unref(UserInfo).name)}</p><div class="flex items-center justify-center px-1 col-span-6 border border-gray-300 bg-gray-100 rounded-full w-full text-center text-[1.1em]"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-[20px] mr-1"><p class="">${ssrInterpolate(unref(UserInfo).trophies)}</p></div><div class="flex items-center px-1 col-span-2 rounded-full py-1 text-[1em] text-center bg-gray-100"><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-[20px]"><p class="w-full">${ssrInterpolate(unref(UserInfo).soloVictories)}</p></div><div class="flex items-center px-1 col-span-2 rounded-full py-1 text-[1em] text-center bg-gray-100"><img${ssrRenderAttr("src", _imports_2)} alt="" class="w-[20px]"><p class="w-full">${ssrInterpolate(unref(UserInfo).duoVictories)}</p></div><div class="flex items-center px-1 col-span-2 rounded-full py-1 text-[1em] text-center bg-gray-100"><img${ssrRenderAttr("src", _imports_3)} alt="" class="w-[20px]"><p class="w-full">${ssrInterpolate(unref(UserInfo)["3vs3Victories"])}</p></div></div></div>`);
      _push(ssrRenderComponent(_component_UserPageBrawlers, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/userPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=userPage-IFRg7q7T.mjs.map
