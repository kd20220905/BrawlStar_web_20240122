<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserInfoStore } from "~/stores/userInfo";
import { useBrawlersStore } from "~/stores/brawlers";
import { useIconsStore } from "~/stores/icons";

const userInfoStore = useUserInfoStore();
const brawlersStore = useBrawlersStore();
const iconsStore = useIconsStore();

const tag = ref<string>("");
async function submit() {
  await userInfoStore.submitTag(tag.value);
  await iconsStore.getIcons();
  await brawlersStore.getAllBrawlers();
}
</script>
<template>
  <main class="relative h-[100dvh]">
    <label
      for="tag"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex"
    >
      <div class="text-black/50 p-1 rounded-lg w-[26px] h-full mr-1">
        <p class="text-center">#</p>
      </div>
      <input
        type="text"
        id="tag"
        v-model="tag"
        placeholder="玩家標籤"
        class="border-2 border-black/50 p-1 rounded-lg"
      />
      <button
        type="button"
        @click="submit"
        class="text-black/50 hover:text-black/80 ml-1"
      >
        <Icon name="material-symbols:arrow-circle-right-outline" size="26" />
      </button>
    </label>
  </main>
</template>
