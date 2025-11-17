import type { tl } from '@mtcute/tl';
import type { Audio } from "../media/audio.ts";
import type { Document } from "../media/document.ts";
import type { Sticker } from "../media/sticker.ts";
import type { Video } from "../media/video.ts";
import type { Voice } from "../media/voice.ts";
import type { PeersIndex } from "../peers/peers-index.ts";
import { MtTypeAssertionError } from "../../../types/errors.ts";
import { Contact } from "../media/contact.ts";
import { Dice } from "../media/dice.ts";
import { parseDocument } from "../media/document-utils.ts";
import { Game } from "../media/game.ts";
import { Invoice } from "../media/invoice.ts";
import { LiveLocation, Location } from "../media/location.ts";
import { PaidMedia } from "../media/paid-media.ts";
import { Photo } from "../media/photo.ts";
import { Poll } from "../media/poll.ts";
import { MediaStory } from "../media/story.ts";
import { TodoList } from "../media/todo.ts";
import { Venue } from "../media/venue.ts";
import { WebPageMedia } from "../media/web-page.ts";
/** A media inside of a {@link Message} */
export type MessageMedia = Photo | Dice | Contact | Audio | Voice | Sticker | Document | Video | Location | LiveLocation | Game | WebPageMedia | Venue | Poll | Invoice | MediaStory | PaidMedia | TodoList | null;
export type MessageMediaType = Exclude<MessageMedia, null>['type'];
// todo: successful_payment, connected_website
/** @internal */
export function _messageMediaFromTl(peers: PeersIndex | null, m: tl.TypeMessageMedia): MessageMedia {
    switch (m._) {
        case 'messageMediaPhoto':
            if (!(m.photo?._ === 'photo'))
                return null;
            return new Photo(m.photo, m);
        case 'messageMediaDice':
            return new Dice(m);
        case 'messageMediaContact':
            return new Contact(m);
        case 'messageMediaDocument':
            if (!(m.document?._ === 'document'))
                return null;
            return parseDocument(m.document, m);
        case 'messageMediaGeo':
            if (!(m.geo._ === 'geoPoint'))
                return null;
            return new Location(m.geo);
        case 'messageMediaGeoLive':
            if (!(m.geo._ === 'geoPoint'))
                return null;
            return new LiveLocation(m);
        case 'messageMediaGame':
            return new Game(m.game);
        case 'messageMediaWebPage':
            if (!(m.webpage._ === 'webPage'))
                return null;
            return new WebPageMedia(m);
        case 'messageMediaVenue':
            return new Venue(m);
        case 'messageMediaPoll':
            if (!peers) {
                // should only be possible in extended media
                // (and afaik polls can't be there)
                throw new MtTypeAssertionError("can't create poll without peers index", 'PeersIndex', 'null');
            }
            return new Poll(m.poll, peers, m.results);
        case 'messageMediaInvoice': {
            const extended = m.extendedMedia?._ === 'messageExtendedMedia' ? _messageMediaFromTl(peers, m.extendedMedia.media) : null;
            return new Invoice(m, extended);
        }
        case 'messageMediaStory': {
            if (!peers) {
                // should only be possible in extended media
                // (and afaik stories can't be there)
                throw new MtTypeAssertionError("can't create story without peers index", 'PeersIndex', 'null');
            }
            return new MediaStory(m, peers);
        }
        case 'messageMediaPaidMedia': {
            const extended: MessageMedia[] = [];
            m.extendedMedia.forEach((e) => {
                if (e._ !== 'messageExtendedMedia')
                    return;
                extended.push(_messageMediaFromTl(peers, e.media));
            });
            return new PaidMedia(m, extended);
        }
        case 'messageMediaToDo':
            if (!peers) {
                throw new MtTypeAssertionError("can't create todo without peers index", 'PeersIndex', 'null');
            }
            return new TodoList(m, peers);
        default:
            return null;
    }
}
