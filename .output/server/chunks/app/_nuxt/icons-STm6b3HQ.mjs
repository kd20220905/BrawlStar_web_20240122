import { f as defineStore, u as useRouter, e as asyncDataDefaults, d as useNuxtApp, c as createError } from './server.mjs';
import { ref, computed, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref } from 'vue';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxt = useNuxtApp();
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxt._asyncData[key] || !options.immediate) {
    (_h = (_a = nuxt.payload._errors)[key]) != null ? _h : _a[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxt._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxt._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxt.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function postPlayerAPI(tag) {
  return $fetch("http://localhost:3001/players/Player", {
    method: "POST",
    body: { tag }
  });
}
function getAllBrawlersAPI() {
  return $fetch("https://api.brawlapi.com/v1/brawlers", {
    method: "GET"
  });
}
function getIconsAPI() {
  return $fetch("https://api.brawlapi.com/v1/icons", {
    method: "GET"
  });
}
const useUserInfoStore = defineStore("UserInfoStore", () => {
  const router = useRouter();
  const UserInfo = ref();
  const UserBrawlers = computed(() => {
    if (!UserInfo.value)
      return;
    return UserInfo.value.brawlers;
  });
  async function submitTag(tag) {
    const { data } = await useAsyncData(
      "postPlayerAPI",
      () => postPlayerAPI(tag)
    );
    console.log(data.value);
    const { code, message, dataInfo } = data.value;
    switch (code) {
      case 200:
        setUserInfo(dataInfo);
        router.push({ path: "userPage" });
        return;
      default:
        alert(message);
        return;
    }
  }
  function setUserInfo(data) {
    UserInfo.value = data;
  }
  return { UserInfo, UserBrawlers, setUserInfo, submitTag };
});
const useBrawlersStore = defineStore("BrawlersStore", () => {
  const Brawlers = ref([]);
  async function getAllBrawlers() {
    const { data } = await useAsyncData(
      "getAllBrawlersAPI",
      () => getAllBrawlersAPI()
    );
    const { list } = data.value;
    if (list) {
      setBrawlers(list);
    }
  }
  function setBrawlers(data) {
    Brawlers.value = data;
  }
  return { Brawlers, getAllBrawlers };
});
const useIconsStore = defineStore("IconsStore", () => {
  useRouter();
  const Icons = ref({});
  const PlayerIcons = computed(() => {
    if (!Icons.value.player)
      return {};
    return Icons.value.player;
  });
  const ClubIcons = computed(() => {
    if (!Icons.value.club)
      return {};
    return Icons.value.club;
  });
  async function getIcons() {
    const { data } = await useAsyncData("getIconsAPI", () => getIconsAPI());
    if (data.value) {
      setIcons(data.value);
    }
  }
  function setIcons(data) {
    Icons.value = data;
  }
  return { Icons, PlayerIcons, ClubIcons, setIcons, getIcons };
});

export { useBrawlersStore as a, useIconsStore as b, useUserInfoStore as u };
//# sourceMappingURL=icons-STm6b3HQ.mjs.map
