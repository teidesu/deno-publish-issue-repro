import type { tl } from '@mtcute/tl';
import { assertTypeIs } from "../../../../utils/type-assertions.ts";
import { makeInspectable } from "../../../utils/index.ts";
import { memoizeGetters } from "../../../utils/memoize.ts";
import { Location } from "../../media/location.ts";
import { StoryInteractiveArea } from "./base.ts";
/**
 * Interactive element containing a location on the map
 */
export class StoryInteractiveLocation extends StoryInteractiveArea {
    readonly type = 'location' as const;
    constructor(override readonly raw: tl.RawMediaAreaGeoPoint) {
        super(raw);
    }
    /**
     * Geolocation
     */
    get location(): Location {
        assertTypeIs('StoryInteractiveLocation#location', this.raw.geo, 'geoPoint');
        return new Location(this.raw.geo);
    }
}
memoizeGetters(StoryInteractiveLocation, ['location']);
makeInspectable(StoryInteractiveLocation);
