<script setup>
import { storeToRefs } from "pinia";
import { useUserInfoStore } from "~/stores/userInfo";
import { useBrawlersStore } from "~/stores/brawlers";
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
      compareValue: matchUserBrawlers ? matchUserBrawlers[compareType] : -1,
    };
  });

  mapBrawlers.sort((a, b) => {
    return order === "small"
      ? a.compareValue - b.compareValue
      : b.compareValue - a.compareValue;
  });

  const returnBrawlers = mapBrawlers.map((mapBrawler) => {
    delete mapBrawler.compareValue;
    return mapBrawler;
  });
  return returnBrawlers;
});
function changeListType() {
  if (BrawlersListType.value >= 4) return (BrawlersListType.value = 0);
  BrawlersListType.value++;
}
function changeListStyle() {
  if (BrawlersListStyle.value === 0) return (BrawlersListStyle.value = 1);
  return (BrawlersListStyle.value = 0);
}

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
const findBrawlerHighestTrophies = (brawlerId) => {
  const Brawler = UserBrawlers.value.find((Brawler) => {
    return Brawler.id === brawlerId;
  });
  if (!Brawler) return 0;
  return Brawler.highestTrophies;
};
const findBrawlerRank = (brawlerId) => {
  const Brawler = UserBrawlers.value.find((Brawler) => {
    return Brawler.id === brawlerId;
  });
  if (!Brawler) return 0;
  return Brawler.rank;
};
</script>
<template>
  <div class="h-[76dvh] relative mt-[1dvh] flex flex-col">
    <div class="flex justify-between items-center">
      <button
        type="button"
        @click="changeListType"
        class="border-2 border-slate/200 rounded-full mb-1 flex justify-center items-center w-full"
      >
        <img
          src="~/assets/image/changeListBtn.png"
          alt=""
          class="h-[20px] mr-1"
        />
        <p>
          {{
            BrawlersListType === 0
              ? "所有"
              : BrawlersListType === 1
              ? "依照rank最高"
              : BrawlersListType === 2
              ? "依照rank最低"
              : BrawlersListType === 3
              ? "依照獎盃最高"
              : BrawlersListType === 4
              ? "依照獎盃最低"
              : "依照rank最高"
          }}
        </p>
      </button>
      <button
        type="button"
        @click="changeListStyle"
        class="border-2 border-slate/200 rounded-full mb-1 flex justify-center items-center w-full"
      >
        <Icon
          :name="
            BrawlersListStyle === 0
              ? 'solar:server-minimalistic-bold'
              : 'basil:layout-solid'
          "
          size="20"
          class="text-slate-400 mr-1"
        />
        <p>列表排序</p>
      </button>
    </div>
    <div class="overflow-x-auto brawlers-scrollbar h-full">
      <ul class="grid grid-cols-3 gap-[16px]" v-if="BrawlersListStyle">
        <transition-group name="brawlers-fade">
          <li
            v-for="brawler in BrawlersList"
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
              class="absolute top-1 left-1 text-white"
              v-if="hasBrawler(brawler.id)"
            >
              <img
                :src="`/rank/${findBrawlerRank(brawler.id)}.png`"
                alt=""
                class="h-[35px] mr-1"
              />
            </div>
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
        </transition-group>
      </ul>
      <ul class="grid grid-cols-1 gap-[16px]" v-else>
        <transition-group name="brawlers-fade">
          <li v-for="brawler in BrawlersList" :key="brawler.id + 'brawler'">
            <button
              type="button"
              @click="SelectBrawlerInfo(brawler)"
              class="flex justify-between items-center w-full border-2 p-2 rounded-[12px]"
            >
              <div class="flex items-center">
                <img
                  :src="brawler.imageUrl3"
                  alt=""
                  class="h-[46px] w-[46px] mr-2 object-cover"
                  :class="{
                    'brightness-50': !hasBrawler(brawler.id),
                  }"
                />
                <div class="" v-if="hasBrawler(brawler.id)">
                  <img
                    :src="`/rank/${findBrawlerRank(brawler.id)}.png`"
                    alt=""
                    class="w-[32px]"
                  />
                </div>
                <div class="" v-else>
                  <img :src="`/rank/1.png`" alt="" class="w-[32px]" />
                </div>
              </div>
              <div class="flex items-center" v-if="hasBrawler(brawler.id)">
                <img
                  src="~/assets/image/highTrophy.png"
                  alt=""
                  class="h-[36px] mr-1"
                />
                {{ findBrawlerHighestTrophies(brawler.id) }}
              </div>
              <div class="flex" v-if="hasBrawler(brawler.id)">
                <img
                  src="~/assets/image/trophy.png"
                  alt=""
                  class="h-[24px] mr-1"
                />
                {{ findBrawlerTrophies(brawler.id) }}
              </div>
            </button>
          </li>
        </transition-group>
      </ul>
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

.fade-enter {
  opacity: 0;
}

.brawlers-fade-enter-active {
  transition: all 1s;
}

.brawlers-fade-leave {
}

.brawlers-fade-leave-active {
  transition: all 0.3s;
  opacity: 0;
  transform: translateY(0);
  position: absolute;
}

.brawlers-fade-move {
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
</style>
