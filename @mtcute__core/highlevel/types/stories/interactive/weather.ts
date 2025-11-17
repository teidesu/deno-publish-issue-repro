import type { tl } from '@mtcute/tl';
import { makeInspectable } from "../../../utils/index.ts";
import { StoryInteractiveArea } from "./base.ts";
/**
 * Interactive element containing a weather info
 */
export class StoryInteractiveWeather extends StoryInteractiveArea {
    readonly type = 'weather' as const;
    constructor(override readonly raw: tl.RawMediaAreaWeather) {
        super(raw);
    }
    /** Emoji representing the weather */
    get emoji(): string {
        return this.raw.emoji;
    }
    /** Temperature in Celsius */
    get temperature(): number {
        return this.raw.temperatureC;
    }
    get color(): number {
        return this.raw.color;
    }
}
makeInspectable(StoryInteractiveWeather);
