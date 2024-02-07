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
const AllBrawlers = ref([]);
const myArray = ref<any[]>([[], [], [], [], [], []]);
watch(Brawlers.value, () => {
  AllBrawlers.value = Brawlers.value;
});
onMounted(() => {
  console.log(Brawlers.value);
});
</script>
<template>
  <main
    class="flex flex-col max-w-[560px] h-[96dvh] box-border md:mx-auto mx-1 my-[2dvh] border-2 border-black/30 rounded-lg py-[2dvh] px-[2vw]"
  >
    <draggable
      v-model="AllBrawlers"
      group="people"
      item-key="id"
      class="border rounded-[12px] mt-[20px] py-[12px]"
    >
      <template #item="{ element }">
        <div>{{ element.name }}</div>
      </template>
    </draggable>
    <template v-for="(arr, index) in myArray" :key="index">
      <div>
        <draggable
          v-model="myArray[index]"
          group="people"
          item-key="id"
          class="border rounded-[12px] mt-[20px] py-[12px]"
        >
          <template #item="{ element }">
            <div>{{ element.name }}</div>
          </template>
        </draggable>
      </div>
    </template>
  </main>
</template>
