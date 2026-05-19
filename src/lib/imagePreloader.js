const IMAGE_CACHE_KEY = "portfolio-image-cache-v1";
const CACHE_NAME = "portfolio-image-cache";
const PRELOAD_BATCH_SIZE = 6;
const PRELOAD_BATCH_DELAY = 200;

export const getAllImageUrls = () => [
  "/projects/Logo Images/MooCalf Logo - Full Color.png",
  "/projects/Logo Images/MooCalf Business Card.png",
  "/projects/Experience_IMGs/inzoi_banner_Experience_IMG.png",
  "/projects/Experience_IMGs/inzoi_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/blender_banner_Experience_IMG.png",
  "/projects/Experience_IMGs/blender_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/yaelokre_banner_Experience_IMG.png",
  "/projects/Experience_IMGs/yaelokre_logo_Experience.png",
  "/projects/Experience_IMGs/rinzoi_banner_Experience_IMG.png",
  "/projects/Experience_IMGs/rinzoi_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/rinzoimods_banner_Experience_IMG.png",
  "/projects/Experience_IMGs/rinzoimods_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/rlifesimulators_banner__Experience_IMG.png",
  "/projects/Experience_IMGs/rlifesimulators_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/invitetracker_banner_Experience.png",
  "/projects/Experience_IMGs/invitetracker_logo_Experience.png",
  "/projects/Experience_IMGs/nuvguard_banner_experience.png",
  "/projects/Experience_IMGs/nuvguard_logo_experience.webp",
  "/projects/Experience_IMGs/pineapplesheaven_banner_experience.png",
  "/projects/Experience_IMGs/krafton_banner_Experience.jpg",
  "/projects/Experience_IMGs/krafton_logo_Experience.jpg",
  "/projects/Experience_IMGs/genr8_banner_Experience.webp",
  "/projects/Experience_IMGs/genr8_logo_Experience.png",
  "/projects/Experience_IMGs/Levellr_banner_Experience.png",
  "/projects/Experience_IMGs/Levellr_logo_Experience.webp",
  "/projects/Featured_IMGs/Kronis_UE5_Experience_IMG.png",
  "/projects/Featured_IMGs/Oberon_Blender_Experience_IMG.png",
  "/projects/Featured_IMGs/Kronis_Blender_Experience_IMG.png",
  "/projects/Project_IMGs/GasGiant_Project_IMGs.png",
  "/projects/Project_IMGs/LavaWorld_Project_IMGs.png",
  "/projects/Project_IMGs/DustWorld_Project_IMGs.png",
  "/projects/Project_IMGs/IceWorld-_Project_IMGs.png",
  "/projects/Project_IMGs/EarthArt_Project_IMGs.png",
  "/projects/Project_IMGs/Saturn_Project_IMGs.png",
  "/projects/Project_IMGs/BlackHole1_Project_IMGs.png",
  "/projects/Project_IMGs/BlackHole2_Project_IMGs.png",
  "/projects/Project_IMGs/Supracar__Project_IMGs.jpg",
  "/projects/Project_IMGs/capybara__Project_IMGs.png",
  "/projects/Project_IMGs/mushroom__Project_IMGs.png",
  "/projects/Project_IMGs/SkeletonCompetition_Project_IMGs.png",
  "/projects/Project_IMGs/Denkens Staff.png",
  "/projects/Project_IMGs/Ferns Staff.png",
  "/projects/Project_IMGs/Frierens Staff.png",
  "/projects/Project_IMGs/Starks Axe.png",
  "/projects/Project_IMGs/Ubels Staff.png",
  "/projects/Project_IMGs/Book Design (1).png",
  "/projects/Project_IMGs/Book Design (2).png",
  "/projects/Project_IMGs/Moon1.png",
  "/projects/Project_IMGs/Moon-GasGiant.png",
  "/projects/Project_IMGs/GasGiant-Moon.png",
  "/projects/Project_IMGs/spinel (1).png",
  "/projects/Project_IMGs/spinel (2).png",
  "/projects/Project_IMGs/spinel (3).png",
  "/projects/Project_IMGs/AC_1.png",
  "/projects/Project_IMGs/DC_1.png",
  "/projects/Project_IMGs/DC & AC_1.png",
  "/projects/Project_IMGs/GroupC_1.png",
  "/projects/Project_IMGs/Earth_Satallite.png",
  "/projects/Website Images/Glass.png",
  "/projects/Banner-Moostyles.webp",
];

const preloadImage = (url) => new Promise((resolve) => {
  const img = new Image();
  img.onload = resolve;
  img.onerror = resolve;
  img.src = url;
});

export async function preloadImages() {
  if (typeof window === "undefined") return;
  if (typeof localStorage !== "undefined" && localStorage.getItem(IMAGE_CACHE_KEY)) return;

  const urls = [...new Set(getAllImageUrls().filter(Boolean))];

  if (!("caches" in window)) {
    await Promise.all(urls.map(preloadImage));
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(IMAGE_CACHE_KEY, "true");
    }
    return;
  }

  try {
    const cache = await caches.open(CACHE_NAME);
    for (let i = 0; i < urls.length; i += PRELOAD_BATCH_SIZE) {
      const batch = urls.slice(i, i + PRELOAD_BATCH_SIZE);
      await Promise.all(batch.map(async (url) => {
        try {
          const request = new Request(url, { cache: "reload" });
          const matched = await cache.match(request);
          if (!matched) {
            const response = await fetch(request);
            if (response.ok) {
              await cache.put(request, response.clone());
            }
          }
        } catch (error) {
          console.warn("Failed to preload image:", url, error);
        }
      }));
      await new Promise((resolve) => setTimeout(resolve, PRELOAD_BATCH_DELAY));
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(IMAGE_CACHE_KEY, "true");
    }
  } catch (error) {
    console.warn("Image preloading failed:", error);
    await Promise.all(urls.map(preloadImage));
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(IMAGE_CACHE_KEY, "true");
    }
  }
}
