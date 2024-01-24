<script setup lang="ts">
const props = defineProps({
  brawlerInfo: Object,
});
const emits = defineEmits(["closeBrawlerInfo"]);
function closeBrawlerInfo() {
  emits("closeBrawlerInfo");
}
const rarityBgColor = (color: string) => {
  return `background: ${color}; border: 1px solid ${color}`;
};
</script>

<template>
  <div class="absolute top-[0%] left-0 h-[76dvh] w-full flex flex-col">
    <div class="rounded-t-[1rem] bg-white border relative">
      <button
        type="button"
        class="absolute left-[12px] top-1/2 -translate-y-1/2"
        @click="closeBrawlerInfo"
      >
        <Icon name="material-symbols:cancel-outline" size="26" />
      </button>
      <p class="text-center py-[1rem]">{{ props.brawlerInfo?.name }}</p>
    </div>
    <div class="h-full w-full bg-white border-x p-2 overflow-y-auto px-[3vw]">
      <div class="grid grid-cols-6 gap-x-[2vw]">
        <div class="col-span-2 flex flex-col">
          <img :src="props.brawlerInfo?.imageUrl" alt="" />
          <div class="text-[12px] mt-2 flex flex-wrap gap-1">
            <span
              :style="rarityBgColor(props.brawlerInfo?.rarity.color)"
              class="rounded-full px-3 py-[0.1rem]"
            >
              {{ props.brawlerInfo?.rarity.name }}
            </span>
            <span class="rounded-full border border-black/30 px-3 py-[0.1rem]">
              {{ props.brawlerInfo?.class.name }}
            </span>
          </div>
        </div>
        <div class="col-span-4">
          <p v-html="props.brawlerInfo?.descriptionHtml"></p>
        </div>
      </div>
      <p class="text-[18px] mt-[32px]">武裝配件</p>
      <ul
        class=""
        v-for="gadget in props.brawlerInfo?.gadgets"
        :key="gadget.id + 'gadget'"
      >
        <li class="grid grid-cols-6 gap-[2vh] mt-[2vh]">
          <div class="col-span-1">
            <img :src="gadget.imageUrl" alt="" />
          </div>
          <div class="col-span-5">
            <p v-html="gadget.descriptionHtml"></p>
          </div>
        </li>
      </ul>
      <p class="text-[18px] mt-[32px]">能力之星</p>
      <ul
        class=""
        v-for="starPowers in props.brawlerInfo?.starPowers"
        :key="starPowers.id + 'gadget'"
      >
        <li class="grid grid-cols-6 gap-[2vh] mt-[2vh]">
          <div class="col-span-1">
            <img :src="starPowers.imageUrl" alt="" />
          </div>
          <div class="col-span-5">
            <p v-html="starPowers.descriptionHtml"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
