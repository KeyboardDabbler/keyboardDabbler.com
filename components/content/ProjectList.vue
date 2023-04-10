<template>
  <div class="w-full">
    <div class="flex flex-row items-center justify-center rounded-full">
      <div class="ring-1 ring-blue rounded-full flex flex-row">
        <button class="flex-shrink-0 flex py-2 px-4 rounded-full font-bold" @click="filterTag = 'web'"
          :class="{ 'text-yellow1': filterTag === 'web' }"> <i-carbon:application-web class="mr-2" /> Web apps</button>
        <button class="flex-shrink-0 flex py-2 px-4 rounded-full font-bold" @click="filterTag = 'gfx'"
          :class="{ 'text-yellow1': filterTag === 'gfx' }"><i-fluent-mdl2:design class="mr-2" /> GFX</button>
      </div>
    </div>

    <div class="card flex flex-col mt-6 rounded-lg md:flex-row md:max-w-full h-full"> <!-- set height of parent container to 100% -->
  <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper md:max-w-[50%]">
    <swiper-slide v-for="(imgUrl, index) in currentProject.img" :key="index" @click="toggleFullScreen">
      <img :src="imgUrl" :alt="currentProject.title" />
    </swiper-slide>
  </swiper>

  <div class="flex flex-1 flex-col p-4 w-full"> <!-- remove h-full to allow child elements to fill remaining space -->
    <h2 class="text-2xl text-center font-bold text-white">{{ currentProject.title }}</h2>
    <p class="font-normal text-center text-gray-500 flex-1 mt-2">{{ currentProject.description }}</p> <!-- use flex-1 to make this element fill remaining space -->
    <div class="flex flex-row w-full justify-center p-4 leading-normal">
      <div class="items-center">
        <NuxtLink target="_blank" :href="currentProject.url" title="Previous project" class="group cursor-pointer mr-2 hover:text-blue">
          <span class="mr-2">Live preview</span>
          <i-mdi:web class="inline-block icon" alt="External website" />
        </NuxtLink>
      </div>
      <div class="items-center">
        <NuxtLink target="_blank" :href="currentProject.repo" title="Next project" class="group cursor-pointer ml-2 hover:text-blue">
          <span class="mr-2">Repository</span>
          <i-cib:gitea class="inline-block icon" alt="Repository link" />
        </NuxtLink>
      </div>
    </div>
    <div class="flex mt-auto flex-row justify-between w-full p-1 leading-normal text-gray-500">
      <div class="items-center">
        <NuxtLink target="_blank" @click="previousProject" title="Previous project" class="group cursor-pointer">
          <i-icon-park-outline:back class="icon icon--off" alt="Previous icon" />
          <i-icon-park-twotone:back class="icon icon--on" alt="Previous icon" />
          <span class="ml-2">Previous</span>
        </NuxtLink>
      </div>
      <div class="items-center">
        <NuxtLink target="_blank" @click="nextProject" title="Next project" class="group cursor-pointer">
          <span class="mr-2">Next</span>
          <i-icon-park-outline:next class="icon icon--off" alt="Next icon" />
          <i-icon-park-twotone:next class="icon icon--on" alt="Next icon" />
        </NuxtLink>
      </div>
    </div>
  </div>
</div>

  </div>
</template>
  
<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      projectsData: [
        {
          title: "test title",
          description: "test description",
          url: "/",
          repo: "/",
          img: ["https://picsum.photos/200", "https://picsum.photos/201"],
          tag: "web",
        },
        {
          title: "test title 2",
          description: "test description 2",
          url: "/",
          repo: "/",
          img: ["https://picsum.photos/200", "https://picsum.photos/201"],
          tag: "web",
        },
        {
          title: "test title 3",
          description: "test description 3",
          url: "/",
          repo: "/",
          img: ["https://picsum.photos/200", "https://picsum.photos/201"],
          tag: "web",
        },
        {
          title: "gfx test title",
          description: "gfx test description",
          url: "/",
          repo: "/",
          img: ["https://picsum.photos/200", "https://picsum.photos/201"],
          tag: "gfx",
        },
        {
          title: "gfx test title 2",
          description: "test description 2",
          url: "/",
          repo: "/",
          img: ["https://picsum.photos/200", "https://picsum.photos/201"],
          tag: "gfx",
        },
        {
          title: "gfx test title 3",
          description: "gfx test description 3",
          url: "/",
          repo: "/",
          img: ["https://picsum.photos/200", "https://picsum.photos/201"],
          tag: "gfx",
        },
      ] as projectData[],
      filterTag: 'web' as string,
      currentProjectIndex: 0 as number,
      modules: [Pagination, Navigation],
    };
  },
  computed: {
    filteredProjects(): projectData[] {
      if (!this.filterTag) {
        return this.projectsData;
      }
      return this.projectsData.filter((project) => project.tag === this.filterTag);
    },
    currentProject(): projectData {
      return this.filteredProjects[this.currentProjectIndex];
    },
  },
  methods: {
    previousProject(): void {
      this.currentProjectIndex--;
      if (this.currentProjectIndex < 0) {
        this.currentProjectIndex = this.projectsData.length - 1;
      }
    },
    nextProject(): void {
      this.currentProjectIndex++;
      if (this.currentProjectIndex > this.projectsData.length - 1) {
        this.currentProjectIndex = 0;
      }
    },
    // Method to toggle fullscreen mode
    toggleFullScreen(): void {
      const swiperEl = document.querySelector('.mySwiper');
      if (swiperEl) {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          swiperEl.requestFullscreen();
        }
      }
    },
  },
});
</script>

  
<style>
:root {
    --swiper-theme-color: #00D5FF;
}

.card {
  background-color: rgb(0, 19, 29);
  filter: drop-shadow(0 0 5px #f2fedc);
}

h2 {
  background-image: linear-gradient(90deg, #B5C239, #F4CF44);
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
}

.swiper {
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>