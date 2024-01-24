import { defineStore } from "pinia";
import { postPlayerAPI } from "~/assets/API/API";
export const useUserInfoStore = defineStore("UserInfoStore", () => {
  const router = useRouter();
  const UserInfo = ref();
  const UserBrawlers = computed(() => {
    if (!UserInfo.value) return;
    return UserInfo.value.brawlers;
  });
  async function submitTag(tag) {
    const { data } = await useAsyncData("postPlayerAPI", () =>
      postPlayerAPI(tag)
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
