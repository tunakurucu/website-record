import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fDd2G34bQHvh5ANU7bqHFd",  // Your project ID
      token: "49ftDBOzezpcKEWZ9Y7w2jIOFKFJU1aECVMq4qSavAk1BWHUGWnjuvC9bnYHltG29hjYDArqvlljZoIUA"  // Your API token
    }
  ],
  preview: true, // Show unpublished updates; set to false for production
});
