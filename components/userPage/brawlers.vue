<script setup>
import { storeToRefs } from "pinia";
import { useUserInfoStore } from "~/stores/userInfo";
import { useBrawlersStore } from "~/stores/brawlers";

const brawlersStore = useBrawlersStore();
const userInfoStore = useUserInfoStore();

const { UserBrawlers } = storeToRefs(userInfoStore);
const { Brawlers } = storeToRefs(brawlersStore);

const isBrawlerInfo = ref(false);
const brawlerInfo = ref({});
function SelectBrawlerInfo(info) {
  openBrawlerInfo();
  brawlerInfo.value = info;
}
function openBrawlerInfo() {
  isBrawlerInfo.value = true;
}

function closeBrawlerInfo() {
  isBrawlerInfo.value = false;
}

const hasBrawler = (brawlerId) => {
  return UserBrawlers.value.some((Brawler) => {
    return Brawler.id === brawlerId;
  });
};
const findBrawlerTrophies = (brawlerId) => {
  const Brawler = UserBrawlers.value.find((Brawler) => {
    return Brawler.id === brawlerId;
  });
  if (!Brawler) return 0;
  return Brawler.trophies;
};
</script>
<template>
  <div class="h-[76dvh] relative mt-[1dvh]">
    <div class="overflow-x-auto brawlers-scrollbar h-full">
      <div>
        <ul class="grid grid-cols-3 gap-[16px]">
          <li
            v-for="brawler in Brawlers"
            :key="brawler.id + 'brawler'"
            class="relative"
          >
            <button type="button" @click="SelectBrawlerInfo(brawler)">
              <img
                :src="brawler.imageUrl"
                alt=""
                :class="{
                  'brightness-50': !hasBrawler(brawler.id),
                }"
              />
            </button>
            <div
              class="absolute bottom-0 right-0 bg-black text-white text-[12px] flex items-center p-1 rounded"
              v-if="hasBrawler(brawler.id)"
            >
              <img
                src="~/assets/image/trophy.png"
                alt=""
                class="h-[16px] mr-1"
              />
              {{ findBrawlerTrophies(brawler.id) }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade-up">
      <UserPageBrawlerInfo
        v-if="isBrawlerInfo"
        :brawlerInfo="brawlerInfo"
        @closeBrawlerInfo="closeBrawlerInfo"
      />
    </transition>
  </div>
</template>
<style>
@media (min-width: 768px) {
  .brawlers-scrollbar::-webkit-scrollbar {
    width: 10px;
  }
}
.brawlers-scrollbar {
}
.brawlers-scrollbar::-webkit-scrollbar {
}

/* Track */
.brawlers-scrollbar::-webkit-scrollbar-track {
  background: #cfcfcf;
  border-radius: 20px;
}

/* Handle */
.brawlers-scrollbar::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 20px;
}

/* Handle on hover */
.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #212529;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.2s ease-in-out;
}
/* delay leave of parent element */
.fade-up-leave-active {
  transition-delay: 0;
}

.fade-up-enter-from,
.fade-up-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
