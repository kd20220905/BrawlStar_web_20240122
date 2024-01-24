import { defineStore } from "pinia";
import { getIconsAPI } from "~/assets/API/API";
export const useIconsStore = defineStore("IconsStore", () => {
  const router = useRouter();
  const Icons = ref({});
  const PlayerIcons = computed(() => {
    if (!Icons.value.player) return {};
    return Icons.value.player;
  });
  const ClubIcons = computed(() => {
    if (!Icons.value.club) return {};
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
