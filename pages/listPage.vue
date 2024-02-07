<script setup lang="ts">
import { storeToRefs } from "pinia";
import draggable from "vuedraggable";
import { useUserInfoStore } from "~/stores/userInfo";
import { useBrawlersStore } from "~/stores/brawlers";
import { useIconsStore } from "~/stores/icons";

const userInfoStore = useUserInfoStore();
const brawlersStore = useBrawlersStore();

const { UserInfo } = storeToRefs(userInfoStore);
const { Brawlers } = storeToRefs(brawlersStore);

const drag = ref<boolean>(false);
const myArray = ref<any[]>([[], [], [], [], [], []]);
onMounted(() => {
  brawlersStore.getAllBrawlers();
  console.log(Brawlers.value);
});
</script>
<template>
  <main
    class="flex flex-col max-w-[800px] h-[96dvh] box-border md:mx-auto mx-1 my-[2dvh] border-2 border-black/30 rounded-lg py-[2dvh] px-[2vw]"
  >
    <draggable
      v-model="Brawlers"
      group="brawlers"
      item-key="id"
      class="border rounded-[12px] mt-[20px] py-[12px] gap-1 flex flex-wrap h-[50%] overflow-y-auto"
    >
      <template #item="{ element }">
        <img :src="element.imageUrl" alt="" class="w-[50px]" />
      </template>
    </draggable>
    <template v-for="(arr, index) in myArray" :key="index">
      <div>
        <draggable
          v-model="myArray[index]"
          group="brawlers"
          item-key="id"
          class="border rounded-[12px] mt-[20px] py-[12px] flex flex-wrap"
        >
          <template #item="{ element }">
            <img :src="element.imageUrl3" alt="" class="w-[50px]" />
          </template>
        </draggable>
      </div>
    </template>
  </main>
</template>
