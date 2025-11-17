import type { tl } from '@mtcute/tl';
import type { PeersIndex } from "../../peers/index.ts";
import { MtTypeAssertionError } from "../../../../types/errors.ts";
import { StoryInteractiveChannelPost } from "./channel-post.ts";
import { StoryInteractiveLocation } from "./location.ts";
import { StoryInteractiveReaction } from "./reaction.ts";
import { StoryInteractiveStarGift } from "./star-gift.ts";
import { StoryInteractiveUrl } from "./url.ts";
import { StoryInteractiveVenue } from "./venue.ts";
import { StoryInteractiveWeather } from "./weather.ts";
export * from "./input.ts";
export { StoryInteractiveChannelPost, StoryInteractiveLocation, StoryInteractiveReaction, StoryInteractiveStarGift, StoryInteractiveUrl, StoryInteractiveVenue, StoryInteractiveWeather, };
export type StoryInteractiveElement = StoryInteractiveReaction | StoryInteractiveLocation | StoryInteractiveVenue | StoryInteractiveChannelPost | StoryInteractiveUrl | StoryInteractiveWeather | StoryInteractiveStarGift;
export function _storyInteractiveElementFromTl(raw: tl.TypeMediaArea, peers: PeersIndex): StoryInteractiveElement {
    switch (raw._) {
        case 'mediaAreaSuggestedReaction':
            return new StoryInteractiveReaction(raw);
        case 'mediaAreaGeoPoint':
            return new StoryInteractiveLocation(raw);
        case 'mediaAreaVenue':
            return new StoryInteractiveVenue(raw);
        case 'mediaAreaChannelPost':
            return new StoryInteractiveChannelPost(raw, peers);
        case 'mediaAreaUrl':
            return new StoryInteractiveUrl(raw);
        case 'mediaAreaWeather':
            return new StoryInteractiveWeather(raw);
        case 'mediaAreaStarGift':
            return new StoryInteractiveStarGift(raw);
        case 'inputMediaAreaVenue':
        case 'inputMediaAreaChannelPost':
            throw new MtTypeAssertionError('StoryInteractiveElement', '!input*', raw._);
    }
}
