import createCache, { EmotionCache } from "@emotion/cache";

const createEmotionCache = (): EmotionCache => {
	return createCache({ key: "css", prepend: true });
};

export default createEmotionCache;
