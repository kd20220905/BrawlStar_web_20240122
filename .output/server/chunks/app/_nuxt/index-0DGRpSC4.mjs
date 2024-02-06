import __nuxt_component_0 from './Icon-_tIW4cfG.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useUserInfoStore, a as useBrawlersStore, b as useIconsStore } from './icons-STm6b3HQ.mjs';
import './index-yb8E0lqf.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useUserInfoStore();
    useBrawlersStore();
    useIconsStore();
    const tag = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative h-[100dvh]" }, _attrs))}><label for="tag" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex"><div class="text-black/50 p-1 rounded-lg w-[26px] h-full mr-1"><p class="text-center">#</p></div><input type="text" id="tag"${ssrRenderAttr("value", unref(tag))} placeholder="\u73A9\u5BB6\u6A19\u7C64" class="border-2 border-black/50 p-1 rounded-lg"><button type="button" class="text-black/50 hover:text-black/80 ml-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:arrow-circle-right-outline",
        size: "26"
      }, null, _parent));
      _push(`</button></label></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0DGRpSC4.mjs.map
