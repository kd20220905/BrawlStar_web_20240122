import { defineStore } from "pinia";
import { getAllBrawlersAPI } from "~/assets/API/API";
export const useBrawlersStore = defineStore("BrawlersStore", () => {
  const Brawlers = ref([]);

  async function getAllBrawlers() {
    const { data } = await useAsyncData("getAllBrawlersAPI", () =>
      getAllBrawlersAPI()
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
