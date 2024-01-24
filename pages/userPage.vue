<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserInfoStore } from "~/stores/userInfo";
import { useBrawlersStore } from "~/stores/brawlers";
import { useIconsStore } from "~/stores/icons";

const userInfoStore = useUserInfoStore();
const brawlersStore = useBrawlersStore();
const iconsStore = useIconsStore();

const { UserInfo } = storeToRefs(userInfoStore);
const { Brawlers } = storeToRefs(brawlersStore);
const { PlayerIcons, ClubIcons } = storeToRefs(iconsStore);

const UserImage = computed(() => {
  if (!UserInfo.value) return "";
  // if (!UserInfo.value.icon) return "";
  // if (!UserInfo.value.icon.id) return "";
  // if (!PlayerIcons.value[UserInfo.value.icon.id].imageUrl) return "";
  return PlayerIcons.value[UserInfo.value.icon.id].imageUrl;
});
</script>
<template>
  <main
    class="flex flex-col max-w-[560px] h-[96dvh] box-border md:mx-auto mx-1 my-[2dvh] border-2 border-black/30 rounded-lg py-[2dvh] px-[2vw]"
  >
    <div class="flex items-start">
      <img :src="UserImage" alt="" class="h-[100px] mr-1" />
      <div class="grid grid-cols-6 gap-2 w-full">
        <p
          class="col-span-6 border border-gray-300 bg-gray-100 rounded-full w-full text-center text-[1.1em]"
        >
          {{ UserInfo.name }}
        </p>
        <div
          class="flex items-center justify-center px-1 col-span-6 border border-gray-300 bg-gray-100 rounded-full w-full text-center text-[1.1em]"
        >
          <img src="~/assets/image/trophy.png" alt="" class="w-[20px] mr-1" />
          <p class="">
            {{ UserInfo.trophies }}
          </p>
        </div>
        <div
          class="flex items-center px-1 col-span-2 rounded-full py-1 text-[1em] text-center bg-gray-100"
        >
          <img src="~/assets/image/solo.png" alt="" class="w-[20px]" />
          <p class="w-full">{{ UserInfo.soloVictories }}</p>
        </div>
        <div
          class="flex items-center px-1 col-span-2 rounded-full py-1 text-[1em] text-center bg-gray-100"
        >
          <img src="~/assets/image/duo.png" alt="" class="w-[20px]" />
          <p class="w-full">{{ UserInfo.duoVictories }}</p>
        </div>
        <div
          class="flex items-center px-1 col-span-2 rounded-full py-1 text-[1em] text-center bg-gray-100"
        >
          <img src="~/assets/image/3v3.png" alt="" class="w-[20px]" />
          <p class="w-full">{{ UserInfo["3vs3Victories"] }}</p>
        </div>
      </div>
    </div>

    <UserPageBrawlers />
  </main>
</template>
