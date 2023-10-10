<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      projectsData: [
        {
          title: 'GBstreams',
          description: 'GBstreams showcases my commitment to enhancing user experiences within the Jellyfin ecosystem. Users can effortlessly access their profiles, update avatars, reset passwords, and gain insights into their play history and statistics.',
          url: 'https://gbstreams.com',
          repo: 'https://gitea.keyboarddabbler.com/GBstreams/gbstreams.com',
          img: ['https://res.cloudinary.com/dpub6gcei/image/upload/v1696739130/keyboardDabbler/apps/gb1_kfsfv9.png', 'https://res.cloudinary.com/dpub6gcei/image/upload/v1696739130/keyboardDabbler/apps/gb2_cmm3kq.png', 'https://res.cloudinary.com/dpub6gcei/image/upload/v1696739131/keyboardDabbler/apps/gb3_ylpnaj.png', 'https://res.cloudinary.com/dpub6gcei/image/upload/v1696739130/keyboardDabbler/apps/gb6_htc4o0.png', 'https://res.cloudinary.com/dpub6gcei/image/upload/v1696739130/keyboardDabbler/apps/gb7_gaomph.png', 'https://res.cloudinary.com/dpub6gcei/image/upload/v1696739131/keyboardDabbler/apps/gb8_uagog1.png'],
          tag: 'web',
        },
        {
          title: 'Jellyfin Theme',
          description: 'Comparison between the default Jellyfin theme and the custom theme i created . I undertook the task of creating a custom theme that not only elevates the aesthetics but also introduces additional features for Jellyfin users.',
          url: '',
          repo: 'https://gitea.keyboarddabbler.com/Development/jellyfinTheme',
          img: ['https://res.cloudinary.com/dpub6gcei/image/upload/v1696739203/keyboardDabbler/apps/defaultMovies_ui8r0j.png', 'https://res.cloudinary.com/dpub6gcei/image/upload/v1696739202/keyboardDabbler/apps/newMovies_zw9nu0.png', 'https://res.cloudinary.com/dpub6gcei/image/upload/v1696739202/keyboardDabbler/apps/defaultMusic_mkqozp.png', 'https://res.cloudinary.com/dpub6gcei/image/upload/v1696739203/keyboardDabbler/apps/newMusic_si12by.png'],
          tag: 'web',
        },
        {
          title: '1M Quoting',
          description: '',
          url: '',
          repo: 'https://gitea.keyboarddabbler.com/Development/superMarioCharacterExplorer',
          img: ['https://res.cloudinary.com/dpub6gcei/image/upload/v1696486101/keyboardDabbler/apps/1mQuoting_arxgqz.png'],
          tag: 'web',
        },
        {
          title: 'Muddy Paws Adventures',
          description: 'During a golden retriever dog meet, I connected with a individual who operates a local dog walking service. I created a custom website that not only reflects their love for dogs but also serves as a user-friendly platform to access their services',
          url: '',
          repo: 'https://gitea.keyboarddabbler.com/',
          img: ['https://res.cloudinary.com/dpub6gcei/image/upload/v1696914904/keyboardDabbler/apps/muddyPawsPackAdventures_ycrmc3.png'],
          tag: 'web',
        },
        {
          title: 'Super Mario Character Explorer',
          description: 'In this project, I combined my passion for web development with a love for gaming to create an engaging platform. Users can search for and learn about various Super Mario characters, from the heroic Mario and Luigi to the mischievous Bowser and his henchmen. What sets this project apart is its PWA functionality, allowing users to install the app on their devices for quick and convenient access, even when offline.',
          url: '',
          repo: 'https://gitea.keyboarddabbler.com/Development/superMarioCharacterExplorer',
          img: ['https://res.cloudinary.com/dpub6gcei/image/upload/v1696484211/keyboardDabbler/apps/superMarioCharacterExplorer_pqqegs.png'],
          tag: 'web',
        },
        {
          title: 'Manchester United Player Search',
          description: 'I started my journey with Nuxt 3, harnessing its built-in Nitro server for lightning-fast performance. Explore the latest roster of Manchester United players and access statistics for each team member. The project retrieves real-time data from external APIs, ensuring that users have access to up-to-date player information.',
          url: '',
          repo: 'https://gitea.keyboarddabbler.com/Development/mufc-playerSearch',
          img: ['https://res.cloudinary.com/dpub6gcei/image/upload/v1696485299/keyboardDabbler/apps/mufcPlayerSearch_e1xfwr.png'],
          tag: 'web',
        },
        {
          title: 'GBstreams',
          description: 'Branding for the GBstreams website.',
          url: '/',
          repo: '/',
          img: ['https://res.cloudinary.com/dpub6gcei/image/upload/v1678918300/GBstreams/branding/logo_stacked-light_dxdmem.png'],
          tag: 'gfx',
        },
        {
          title: 'Kiwi Trading Charts',
          description: '',
          url: '/',
          repo: '/',
          img: ['https://res.cloudinary.com/dpub6gcei/image/upload/v1681808473/keyboardDabbler/gfx/Untitled-1_zyolij.png'],
          tag: 'gfx',
        },
        {
          title: 'Ready to Work',
          description: 'gfx test description',
          url: '/',
          repo: '/',
          img: ['https://cdn.dribbble.com/userupload/6331790/file/original-48191f4c440ce61ce3c9ce020087be82.jpg?compress=1&resize=2048x2048', 'https://cdn.dribbble.com/users/2649021/screenshots/15575948/media/e0a935a003fc2096e156e7d0dc241d8f.jpg?compress=1&resize=1600x1200&vertical=top'],
          tag: 'gfx',
        },
      ] as projectData[],
      filterTag: 'web' as string,
      currentProjectIndex: 0 as number,
      modules: [Pagination, Navigation],
    }
  },
  computed: {
    filteredProjects(): projectData[] {
      if (!this.filterTag)
        return this.projectsData

      return this.projectsData.filter(project => project.tag === this.filterTag)
    },
    currentProject(): projectData {
      return this.filteredProjects[this.currentProjectIndex]
    },
  },
  methods: {
    previousProject(): void {
      this.currentProjectIndex--
      if (this.currentProjectIndex < 0)
        this.currentProjectIndex = this.projectsData.length - 1
    },
    nextProject(): void {
      this.currentProjectIndex++
      if (this.currentProjectIndex > this.projectsData.length - 1)
        this.currentProjectIndex = 0
    },
    // Method to toggle fullscreen mode
    toggleFullScreen(event): void {
      const imgElement = event.target;
      if (imgElement) {
        if (imgElement.requestFullscreen) {
          imgElement.requestFullscreen();
        } else if (imgElement.webkitRequestFullscreen) { /* Safari */
          imgElement.webkitRequestFullscreen();
        } else if (imgElement.msRequestFullscreen) { /* IE11 */
          imgElement.msRequestFullscreen();
        }
      }
    },
  },
})
</script>

<template>
  <div class="w-full">
    <div class="flex flex-row items-center justify-center rounded-full">
      <div class="ring-1 ring-blue rounded-full flex flex-row">
        <button class="flex-shrink-0 flex py-2 px-4 rounded-full font-bold"
          :class="{ 'text-yellow1': filterTag === 'web' }" @click="filterTag = 'web'">
          <i-carbon:application-web class="mr-2" /> Web apps
        </button>
        <button class="flex-shrink-0 flex py-2 px-4 rounded-full font-bold"
          :class="{ 'text-yellow1': filterTag === 'gfx' }" @click="filterTag = 'gfx'">
          <i-fluent-mdl2:design class="mr-2" /> GFX
        </button>
      </div>
    </div>

    <div class="card gradient-border flex flex-col mt-6 rounded-lg md:flex-row md:max-w-full h-full">
      <!-- set height of parent container to 100% -->
      <Swiper :slides-per-view="1" :space-between="30" :loop="true" :pagination="{ clickable: true }" :navigation="true"
        :modules="modules" class="mySwiper md:max-w-[50%]">
        <SwiperSlide v-for="(imgUrl, index) in currentProject.img" :key="index">
          <div class="image-container">
            <img :src="imgUrl" :alt="currentProject.title" @click="toggleFullScreen($event)">
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="flex flex-1 flex-col p-4 w-full">
        <!-- remove h-full to allow child elements to fill remaining space -->
        <h2 class="text-2xl text-center font-bold text-white">
          {{ currentProject.title }}
        </h2>
        <p class="font-normal text-center text-gray-500 flex-1 mt-2">
          {{ currentProject.description }}
        </p>
        <!-- use flex-1 to make this element fill remaining space -->
        <div class="flex flex-row w-full justify-center p-4 leading-normal">
          <div class="items-center">
            <NuxtLink target="_blank" :href="currentProject.url" title="Previous project"
              class="group cursor-pointer mr-2 hover:text-blue">
              <span class="mr-2 text-xs">Live preview</span>
              <i-mdi:web class="inline-block" size="15px" alt="External website" />
            </NuxtLink>
          </div>
          <div class="items-center">
            <NuxtLink target="_blank" :href="currentProject.repo" title="Next project"
              class="group cursor-pointer ml-2 hover:text-blue">
              <span class="mr-2 text-xs">Repository</span>
              <i-cib:gitea class="inline-block" size="15px" alt="Repository link" />
            </NuxtLink>
          </div>
        </div>
        <div class="flex mt-auto flex-row justify-between w-full p-1 leading-normal text-gray-500">
          <div class="items-center">
            <NuxtLink target="_blank" title="Previous project" class="group cursor-pointer" @click="previousProject">
              <i-icon-park-outline:back class="icon icon--off" alt="Previous icon" />
              <i-icon-park-twotone:back class="icon icon--on" alt="Previous icon" />
              <span class="ml-2">Previous</span>
            </NuxtLink>
          </div>
          <div class="items-center">
            <NuxtLink target="_blank" title="Next project" class="group cursor-pointer" @click="nextProject">
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

<style>
:root {
  --swiper-theme-color: #00D5FF;
}

.card {
  background-color: rgb(0, 19, 29);
}

.gradient-border {
  --borderWidth: 3px;
  background: rgb(0, 19, 29);
  position: relative;
  border-radius: var(--borderWidth);
}

.gradient-border:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #eab308, #F4CF44, #F4CF44, #F4CF44, #77B23E, #77B23E, #77B23E, #6ee7b7);
  border-radius: 0.25rem;
  z-index: -1;
  animation: animatedgradient 2s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.content {
  position: relative;
  z-index: 1;
}

.relative:hover .card__animation {
  opacity: 1;
}

.relative:hover .card__animation--overlay {
  opacity: 1;
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

.image-container {
  position: relative;
  cursor: pointer;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
}

/* Style for fullscreen mode */
img:-webkit-full-screen {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

img:-moz-full-screen {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

img:fullscreen {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>
