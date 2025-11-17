/// <reference types="./index.d.ts" />
const exports = {};
// This file is auto-generated. Do not edit.
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tl = {};
(function(ns) {
var _types = void 0;
function _isAny(type) {
    return function (obj) {
        return typeof obj === 'object' && obj && _types[obj._] == type
    }
}
ns.$extendTypes = function(types) {
    for (var i in types) {
        types.hasOwnProperty(i) && (_types[i] = types[i])
    }
}
ns.LAYER = 218;
const _descriptionsMap = JSON.parse('{"FLOOD_WAIT_%d":"A wait of %d seconds is required","FILE_MIGRATE_%d":"The file to be accessed is currently stored in DC %d","NETWORK_MIGRATE_%d":"The source IP address is associated with DC %d","PHONE_MIGRATE_%d":"The phone number a user is trying to use for authorization is associated with DC %d","STATS_MIGRATE_%d":"The channel statistics must be fetched from DC %d","ABOUT_TOO_LONG":"About string too long.","ACCESS_TOKEN_EXPIRED":"Access token expired.","ACCESS_TOKEN_INVALID":"Access token invalid.","ADMIN_ID_INVALID":"The specified admin ID is invalid.","ADMIN_RANK_EMOJI_NOT_ALLOWED":"An admin rank cannot contain emojis.","ADMIN_RANK_INVALID":"The specified admin rank is invalid.","ADMINS_TOO_MUCH":"There are too many admins.","ALBUM_PHOTOS_TOO_MANY":"You have uploaded too many profile photos, delete some before retrying.","API_ID_INVALID":"API ID invalid.","API_ID_PUBLISHED_FLOOD":"This API id was published somewhere, you can\'t use it now.","ARTICLE_TITLE_EMPTY":"The title of the article is empty.","AUDIO_CONTENT_URL_EMPTY":"The remote URL specified in the content field is empty.","AUDIO_TITLE_EMPTY":"An empty audio title was provided.","AUTH_BYTES_INVALID":"The provided authorization is invalid.","AUTH_TOKEN_ALREADY_ACCEPTED":"The specified auth token was already accepted.","AUTH_TOKEN_EXCEPTION":"An error occurred while importing the auth token.","AUTH_TOKEN_EXPIRED":"The authorization token has expired.","AUTH_TOKEN_INVALID":"The specified auth token is invalid.","AUTH_TOKEN_INVALIDX":"The specified auth token is invalid.","AUTOARCHIVE_NOT_AVAILABLE":"The autoarchive setting is not available at this time: please check the value of the [autoarchive_setting_available field in client config &raquo;](https://core.telegram.org/api/config#client-configuration) before calling this method.","BANK_CARD_NUMBER_INVALID":"The specified card number is invalid.","BANNED_RIGHTS_INVALID":"You provided some invalid flags in the banned rights.","BOT_APP_INVALID":"The specified bot app is invalid.","BOT_CHANNELS_NA":"Bots can\'t edit admin privileges.","BOT_COMMAND_DESCRIPTION_INVALID":"The specified command description is invalid.","BOT_COMMAND_INVALID":"The specified command is invalid.","BOT_DOMAIN_INVALID":"Bot domain invalid.","BOT_GROUPS_BLOCKED":"This bot can\'t be added to groups.","BOT_INLINE_DISABLED":"This bot can\'t be used in inline mode.","BOT_INVALID":"This is not a valid bot.","BOT_MISSING":"Only bots can call this method, please use [@stickers](https://t.me/stickers) if you\'re a user.","BOT_ONESIDE_NOT_AVAIL":"Bots can\'t pin messages in PM just for themselves.","BOT_PAYMENTS_DISABLED":"Please enable bot payments in botfather before calling this method.","BOT_RESPONSE_TIMEOUT":"A timeout occurred while fetching data from the bot.","BOT_SCORE_NOT_MODIFIED":"The score wasn\'t modified.","BOTS_TOO_MUCH":"There are too many bots in this chat/channel.","BROADCAST_ID_INVALID":"Broadcast ID invalid.","BROADCAST_PUBLIC_VOTERS_FORBIDDEN":"You can\'t forward polls with public voters.","BROADCAST_REQUIRED":"This method can only be called on a channel, please use stats.getMegagroupStats for supergroups.","BUTTON_DATA_INVALID":"The data of one or more of the buttons you provided is invalid.","BUTTON_TEXT_INVALID":"The specified button text is invalid.","BUTTON_TYPE_INVALID":"The type of one or more of the buttons you provided is invalid.","BUTTON_URL_INVALID":"Button URL invalid.","BUTTON_USER_PRIVACY_RESTRICTED":"The privacy setting of the user specified in a [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile) button do not allow creating such a button.","CALL_ALREADY_ACCEPTED":"The call was already accepted.","CALL_ALREADY_DECLINED":"The call was already declined.","CALL_OCCUPY_FAILED":"The call failed because the user is already making another call.","CALL_PEER_INVALID":"The provided call peer object is invalid.","CALL_PROTOCOL_FLAGS_INVALID":"Call protocol flags invalid.","CDN_METHOD_INVALID":"You can\'t call this method in a CDN DC.","CHANNEL_FORUM_MISSING":"This supergroup is not a forum.","CHANNEL_ID_INVALID":"The specified supergroup ID is invalid.","CHANNEL_INVALID":"The provided channel is invalid.","CHANNEL_PARICIPANT_MISSING":"The current user is not in the channel.","CHANNEL_PRIVATE":"You haven\'t joined this channel/supergroup.","CHANNEL_TOO_BIG":"This channel has too many participants (>1000) to be deleted.","CHANNEL_TOO_LARGE":"Channel is too large to be deleted; this error is issued when trying to delete channels with more than 1000 members (subject to change).","CHANNELS_ADMIN_LOCATED_TOO_MUCH":"The user has reached the limit of public geogroups.","CHANNELS_ADMIN_PUBLIC_TOO_MUCH":"You\'re admin of too many public channels, make some channels private to change the username of this channel.","CHANNELS_TOO_MUCH":"You have joined too many channels/supergroups.","CHAT_ABOUT_NOT_MODIFIED":"About text has not changed.","CHAT_ABOUT_TOO_LONG":"Chat about too long.","CHAT_ADMIN_REQUIRED":"You must be an admin in this chat to do this.","CHAT_DISCUSSION_UNALLOWED":"You can\'t enable forum topics in a discussion group linked to a channel.","CHAT_FORWARDS_RESTRICTED":"You can\'t forward messages from a protected chat.","CHAT_ID_EMPTY":"The provided chat ID is empty.","CHAT_ID_INVALID":"The provided chat id is invalid.","CHAT_INVALID":"Invalid chat.","CHAT_INVITE_PERMANENT":"You can\'t set an expiration date on permanent invite links.","CHAT_LINK_EXISTS":"The chat is public, you can\'t hide the history to new users.","CHAT_NOT_MODIFIED":"The pinned message wasn\'t modified.","CHAT_PUBLIC_REQUIRED":"You can only enable join requests in public groups.","CHAT_RESTRICTED":"You can\'t send messages in this chat, you were restricted.","CHAT_REVOKE_DATE_UNSUPPORTED":"`min_date` and `max_date` are not available for using with non-user peers.","CHAT_SEND_INLINE_FORBIDDEN":"You can\'t send inline messages in this group.","CHAT_TITLE_EMPTY":"No chat title provided.","CHAT_TOO_BIG":"This method is not available for groups with more than `chat_read_mark_size_threshold` members, [see client configuration &raquo;](https://core.telegram.org/api/config#client-configuration).","CODE_EMPTY":"The provided code is empty.","CODE_HASH_INVALID":"Code hash invalid.","CODE_INVALID":"Code invalid.","CONNECTION_API_ID_INVALID":"The provided API id is invalid.","CONNECTION_APP_VERSION_EMPTY":"App version is empty.","CONNECTION_LAYER_INVALID":"Layer invalid.","CONTACT_ADD_MISSING":"Contact to add is missing.","CONTACT_ID_INVALID":"The provided contact ID is invalid.","CONTACT_NAME_EMPTY":"Contact name empty.","CONTACT_REQ_MISSING":"Missing contact request.","CREATE_CALL_FAILED":"An error occurred while creating the call.","CURRENCY_TOTAL_AMOUNT_INVALID":"The total amount of all prices is invalid.","DATA_INVALID":"Encrypted data invalid.","DATA_JSON_INVALID":"The provided JSON data is invalid.","DATA_TOO_LONG":"Data too long.","DATE_EMPTY":"Date empty.","DC_ID_INVALID":"The provided DC ID is invalid.","DH_G_A_INVALID":"g_a invalid.","DOCUMENT_INVALID":"The specified document is invalid.","EMAIL_HASH_EXPIRED":"Email hash expired.","EMAIL_INVALID":"The specified email is invalid.","EMAIL_NOT_SETUP":"In order to change the login email with emailVerifyPurposeLoginChange, an existing login email must already be set using emailVerifyPurposeLoginSetup.","EMAIL_UNCONFIRMED":"Email unconfirmed.","EMAIL_UNCONFIRMED_%d":"Email unconfirmed, the length of the code must be %d","EMAIL_VERIFY_EXPIRED":"The verification email has expired.","EMOJI_INVALID":"The specified theme emoji is valid.","EMOJI_MARKUP_INVALID":"The specified `video_emoji_markup` was invalid.","EMOJI_NOT_MODIFIED":"The theme wasn\'t changed.","EMOTICON_EMPTY":"The emoji is empty.","EMOTICON_INVALID":"The specified emoji is invalid.","EMOTICON_STICKERPACK_MISSING":"inputStickerSetDice.emoji cannot be empty.","ENCRYPTED_MESSAGE_INVALID":"Encrypted message invalid.","ENCRYPTION_ALREADY_ACCEPTED":"Secret chat already accepted.","ENCRYPTION_ALREADY_DECLINED":"The secret chat was already declined.","ENCRYPTION_DECLINED":"The secret chat was declined.","ENCRYPTION_ID_INVALID":"The provided secret chat ID is invalid.","ENTITIES_TOO_LONG":"You provided too many styled message entities.","ENTITY_BOUNDS_INVALID":"A specified [entity offset or length](/api/entities#entity-length) is invalid, see [here &raquo;](/api/entities#entity-length) for info on how to properly compute the entity offset/length.","ENTITY_MENTION_USER_INVALID":"You mentioned an invalid user.","ERROR_TEXT_EMPTY":"The provided error message is empty.","EXPIRE_DATE_INVALID":"The specified expiration date is invalid.","EXPORT_CARD_INVALID":"Provided card is invalid.","EXTERNAL_URL_INVALID":"External URL invalid.","FILE_CONTENT_TYPE_INVALID":"File content-type is invalid.","FILE_EMTPY":"An empty file was provided.","FILE_ID_INVALID":"The provided file id is invalid.","FILE_PART_EMPTY":"The provided file part is empty.","FILE_PART_INVALID":"The file part number is invalid.","FILE_PART_LENGTH_INVALID":"The length of a file part is invalid.","FILE_PART_SIZE_CHANGED":"Provided file part size has changed.","FILE_PART_SIZE_INVALID":"The provided file part size is invalid.","FILE_PART_TOO_BIG":"The uploaded file part is too big.","FILE_PARTS_INVALID":"The number of file parts is invalid.","FILE_REFERENCE_EMPTY":"An empty [file reference](https://core.telegram.org/api/file_reference) was specified.","FILE_REFERENCE_EXPIRED":"File reference expired, it must be refetched as described in [the documentation](https://core.telegram.org/api/file_reference).","FILE_REFERENCE_INVALID":"The specified [file reference](https://core.telegram.org/api/file_reference) is invalid.","FILE_TITLE_EMPTY":"An empty file title was specified.","FILE_TOKEN_INVALID":"The specified file token is invalid.","FILTER_ID_INVALID":"The specified filter ID is invalid.","FILTER_INCLUDE_EMPTY":"The include_peers vector of the filter is empty.","FILTER_NOT_SUPPORTED":"The specified filter cannot be used in this context.","FILTER_TITLE_EMPTY":"The title field of the filter is empty.","FIRSTNAME_INVALID":"The first name is invalid.","FOLDER_ID_EMPTY":"An empty folder ID was specified.","FOLDER_ID_INVALID":"Invalid folder ID.","FRESH_CHANGE_ADMINS_FORBIDDEN":"You were just elected admin, you can\'t add or modify other admins yet.","FROM_MESSAGE_BOT_DISABLED":"Bots can\'t use fromMessage min constructors.","FROM_PEER_INVALID":"The specified from_id is invalid.","GAME_BOT_INVALID":"Bots can\'t send another bot\'s game.","GEO_POINT_INVALID":"Invalid geoposition provided.","GIF_CONTENT_TYPE_INVALID":"GIF content-type invalid.","GIF_ID_INVALID":"The provided GIF ID is invalid.","GRAPH_EXPIRED_RELOAD":"This graph has expired, please obtain a new graph token.","GRAPH_INVALID_RELOAD":"Invalid graph token provided, please reload the stats and provide the updated token.","GRAPH_OUTDATED_RELOAD":"The graph is outdated, please get a new async token using stats.getBroadcastStats.","GROUPCALL_ALREADY_DISCARDED":"The group call was already discarded.","GROUPCALL_FORBIDDEN":"The group call has already ended.","GROUPCALL_INVALID":"The specified group call is invalid.","GROUPCALL_JOIN_MISSING":"You haven\'t joined this group call.","GROUPCALL_NOT_MODIFIED":"Group call settings weren\'t modified.","GROUPCALL_SSRC_DUPLICATE_MUCH":"The app needs to retry joining the group call with a new SSRC value.","GROUPED_MEDIA_INVALID":"Invalid grouped media.","HASH_INVALID":"The provided hash is invalid.","HIDE_REQUESTER_MISSING":"The join request was missing or was already handled.","IMAGE_PROCESS_FAILED":"Failure while processing image.","IMPORT_FILE_INVALID":"The specified chat export file is invalid.","IMPORT_FORMAT_UNRECOGNIZED":"The specified chat export file was exported from an unsupported chat app.","IMPORT_ID_INVALID":"The specified import ID is invalid.","IMPORT_TOKEN_INVALID":"The specified token is invalid.","INLINE_RESULT_EXPIRED":"The inline query expired.","INPUT_FILTER_INVALID":"The specified filter is invalid.","INPUT_TEXT_EMPTY":"The specified text is empty.","INPUT_USER_DEACTIVATED":"The specified user was deleted.","INVITE_FORBIDDEN_WITH_JOINAS":"If the user has anonymously joined a group call as a channel, they can\'t invite other users to the group call because that would cause deanonymization, because the invite would be sent using the original user ID, not the anonymized channel ID.","INVITE_HASH_EMPTY":"The invite hash is empty.","INVITE_HASH_EXPIRED":"The invite link has expired.","INVITE_HASH_INVALID":"The invite hash is invalid.","INVITE_REQUEST_SENT":"You have successfully requested to join this chat or channel.","INVITE_REVOKED_MISSING":"The specified invite link was already revoked or is invalid.","INVITE_SLUG_EMPTY":"The specified invite slug is empty.","INVITES_TOO_MUCH":"The maximum number of per-folder invites specified by the `chatlist_invites_limit_default`/`chatlist_invites_limit_premium` [client configuration parameters &raquo;](/api/config#chatlist-invites-limit-default) was reached.","INVOICE_PAYLOAD_INVALID":"The specified invoice payload is invalid.","JOIN_AS_PEER_INVALID":"The specified peer cannot be used to join a group call.","LANG_CODE_INVALID":"The specified language code is invalid.","LANG_CODE_NOT_SUPPORTED":"The specified language code is not supported.","LANG_PACK_INVALID":"The provided language pack is invalid.","LASTNAME_INVALID":"The last name is invalid.","LIMIT_INVALID":"The provided limit is invalid.","LINK_NOT_MODIFIED":"Discussion link not modified.","LOCATION_INVALID":"The provided location is invalid.","MAX_DATE_INVALID":"The specified maximum date is invalid.","MAX_ID_INVALID":"The provided max ID is invalid.","MAX_QTS_INVALID":"The specified max_qts is invalid.","MD5_CHECKSUM_INVALID":"The MD5 checksums do not match.","MEDIA_CAPTION_TOO_LONG":"The caption is too long.","MEDIA_EMPTY":"The provided media object is invalid.","MEDIA_GROUPED_INVALID":"You tried to send media of different types in an album.","MEDIA_INVALID":"Media invalid.","MEDIA_NEW_INVALID":"The new media is invalid.","MEDIA_PREV_INVALID":"Previous media invalid.","MEGAGROUP_ID_INVALID":"Invalid supergroup ID.","MEGAGROUP_PREHISTORY_HIDDEN":"Group with hidden history for new members can\'t be set as discussion groups.","MEGAGROUP_REQUIRED":"You can only use this method on a supergroup.","MESSAGE_EDIT_TIME_EXPIRED":"You can\'t edit this message anymore, too much time has passed since its creation.","MESSAGE_EMPTY":"The provided message is empty.","MESSAGE_ID_INVALID":"The provided message id is invalid.","MESSAGE_IDS_EMPTY":"No message ids were provided.","MESSAGE_NOT_MODIFIED":"The provided message data is identical to the previous message data, the message wasn\'t modified.","MESSAGE_POLL_CLOSED":"Poll closed.","MESSAGE_TOO_LONG":"The provided message is too long.","METHOD_INVALID":"The specified method is invalid.","MIN_DATE_INVALID":"The specified minimum date is invalid.","MSG_ID_INVALID":"Invalid message ID provided.","MSG_TOO_OLD":"[`chat_read_mark_expire_period` seconds](https://core.telegram.org/api/config#chat-read-mark-expire-period) have passed since the message was sent, read receipts were deleted.","MSG_WAIT_FAILED":"A waiting call returned an error.","MULTI_MEDIA_TOO_LONG":"Too many media files for album.","NEW_SALT_INVALID":"The new salt is invalid.","NEW_SETTINGS_EMPTY":"No password is set on the current account, and no new password was specified in `new_settings`.","NEW_SETTINGS_INVALID":"The new password settings are invalid.","NEXT_OFFSET_INVALID":"The specified offset is longer than 64 bytes.","OFFSET_INVALID":"The provided offset is invalid.","OFFSET_PEER_ID_INVALID":"The provided offset peer is invalid.","OPTION_INVALID":"Invalid option selected.","OPTIONS_TOO_MUCH":"Too many options provided.","ORDER_INVALID":"The specified username order is invalid.","PACK_SHORT_NAME_INVALID":"Short pack name invalid.","PACK_SHORT_NAME_OCCUPIED":"A stickerpack with this name already exists.","PACK_TITLE_INVALID":"The stickerpack title is invalid.","PARTICIPANT_ID_INVALID":"The specified participant ID is invalid.","PARTICIPANT_JOIN_MISSING":"Trying to enable a presentation, when the user hasn\'t joined the Video Chat with [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall).","PARTICIPANT_VERSION_OUTDATED":"The other participant does not use an up to date telegram client with support for calls.","PARTICIPANTS_TOO_FEW":"Not enough participants.","PASSWORD_EMPTY":"The provided password is empty.","PASSWORD_HASH_INVALID":"The provided password hash is invalid.","PASSWORD_MISSING":"You must enable 2FA in order to transfer ownership of a channel.","PASSWORD_RECOVERY_EXPIRED":"The recovery code has expired.","PASSWORD_RECOVERY_NA":"No email was set, can\'t recover password via email.","PASSWORD_REQUIRED":"A [2FA password](https://core.telegram.org/api/srp) must be configured to use Telegram Passport.","PASSWORD_TOO_FRESH_%d":"The password was added too recently and %d seconds must pass before using the method","PAYMENT_PROVIDER_INVALID":"The specified payment provider is invalid.","PEER_HISTORY_EMPTY":"You can\'t pin an empty chat with a user.","PEER_ID_INVALID":"The provided peer id is invalid.","PEER_ID_NOT_SUPPORTED":"The provided peer ID is not supported.","PEERS_LIST_EMPTY":"The specified list of peers is empty.","PERSISTENT_TIMESTAMP_EMPTY":"Persistent timestamp empty.","PERSISTENT_TIMESTAMP_INVALID":"Persistent timestamp invalid.","PHONE_CODE_EMPTY":"phone_code is missing.","PHONE_CODE_EXPIRED":"The phone code you provided has expired.","PHONE_CODE_HASH_EMPTY":"phone_code_hash is missing.","PHONE_CODE_INVALID":"The provided phone code is invalid.","PHONE_HASH_EXPIRED":"An invalid or expired `phone_code_hash` was provided.","PHONE_NOT_OCCUPIED":"No user is associated to the specified phone number.","PHONE_NUMBER_APP_SIGNUP_FORBIDDEN":"You can\'t sign up using this app.","PHONE_NUMBER_BANNED":"The provided phone number is banned from telegram.","PHONE_NUMBER_FLOOD":"You asked for the code too many times.","PHONE_NUMBER_INVALID":"The phone number is invalid.","PHONE_NUMBER_OCCUPIED":"The phone number is already in use.","PHONE_NUMBER_UNOCCUPIED":"The phone number is not yet being used.","PHONE_PASSWORD_PROTECTED":"This phone is password protected.","PHOTO_CONTENT_TYPE_INVALID":"Photo mime-type invalid.","PHOTO_CONTENT_URL_EMPTY":"Photo URL invalid.","PHOTO_CROP_FILE_MISSING":"Photo crop file missing.","PHOTO_CROP_SIZE_SMALL":"Photo is too small.","PHOTO_EXT_INVALID":"The extension of the photo is invalid.","PHOTO_FILE_MISSING":"Profile photo file missing.","PHOTO_ID_INVALID":"Photo ID invalid.","PHOTO_INVALID":"Photo invalid.","PHOTO_INVALID_DIMENSIONS":"The photo dimensions are invalid.","PHOTO_SAVE_FILE_INVALID":"Internal issues, try again later.","PHOTO_THUMB_URL_EMPTY":"Photo thumbnail URL is empty.","PIN_RESTRICTED":"You can\'t pin messages.","PINNED_DIALOGS_TOO_MUCH":"Too many pinned dialogs.","POLL_ANSWER_INVALID":"One of the poll answers is not acceptable.","POLL_ANSWERS_INVALID":"Invalid poll answers were provided.","POLL_OPTION_DUPLICATE":"Duplicate poll options provided.","POLL_OPTION_INVALID":"Invalid poll option provided.","POLL_QUESTION_INVALID":"One of the poll questions is not acceptable.","PRIVACY_KEY_INVALID":"The privacy key is invalid.","PRIVACY_TOO_LONG":"Too many privacy rules were specified, the current limit is 1000.","PRIVACY_VALUE_INVALID":"The specified privacy rule combination is invalid.","PUBLIC_KEY_REQUIRED":"A public key is required.","QUERY_ID_EMPTY":"The query ID is empty.","QUERY_ID_INVALID":"The query ID is invalid.","QUERY_TOO_SHORT":"The query string is too short.","QUIZ_ANSWER_MISSING":"You can forward a quiz while hiding the original author only after choosing an option in the quiz.","QUIZ_CORRECT_ANSWER_INVALID":"An invalid value was provided to the correct_answers field.","QUIZ_CORRECT_ANSWERS_EMPTY":"No correct quiz answer was specified.","QUIZ_CORRECT_ANSWERS_TOO_MUCH":"You specified too many correct answers in a quiz, quizzes can only have one right answer!","QUIZ_MULTIPLE_INVALID":"Quizzes can\'t have the multiple_choice flag set!","RANDOM_ID_EMPTY":"Random ID empty.","RANDOM_ID_INVALID":"A provided random ID is invalid.","RANDOM_LENGTH_INVALID":"Random length invalid.","RANGES_INVALID":"Invalid range provided.","REACTION_EMPTY":"Empty reaction provided.","REACTION_INVALID":"The specified reaction is invalid.","REACTIONS_TOO_MANY":"The message already has exactly `reactions_uniq_max` reaction emojis, you can\'t react with a new emoji, see [the docs for more info &raquo;](/api/config#client-configuration).","REPLY_MARKUP_BUY_EMPTY":"Reply markup for buy button empty.","REPLY_MARKUP_INVALID":"The provided reply markup is invalid.","REPLY_MARKUP_TOO_LONG":"The specified reply_markup is too long.","RESET_REQUEST_MISSING":"No password reset is in progress.","RESULT_ID_DUPLICATE":"You provided a duplicate result ID.","RESULT_ID_EMPTY":"Result ID empty.","RESULT_ID_INVALID":"One of the specified result IDs is invalid.","RESULT_TYPE_INVALID":"Result type invalid.","RESULTS_TOO_MUCH":"Too many results were provided.","REVOTE_NOT_ALLOWED":"You cannot change your vote.","RIGHTS_NOT_MODIFIED":"The new admin rights are equal to the old rights, no change was made.","RSA_DECRYPT_FAILED":"Internal RSA decryption failed.","SCHEDULE_BOT_NOT_ALLOWED":"Bots cannot schedule messages.","SCHEDULE_DATE_INVALID":"Invalid schedule date provided.","SCHEDULE_DATE_TOO_LATE":"You can\'t schedule a message this far in the future.","SCHEDULE_STATUS_PRIVATE":"Can\'t schedule until user is online, if the user\'s last seen timestamp is hidden by their privacy settings.","SCHEDULE_TOO_MUCH":"There are too many scheduled messages.","SCORE_INVALID":"The specified game score is invalid.","SEARCH_QUERY_EMPTY":"The search query is empty.","SEARCH_WITH_LINK_NOT_SUPPORTED":"You cannot provide a search query and an invite link at the same time.","SECONDS_INVALID":"Invalid duration provided.","SEND_AS_PEER_INVALID":"You can\'t send messages as the specified peer.","SEND_MESSAGE_MEDIA_INVALID":"Invalid media provided.","SEND_MESSAGE_TYPE_INVALID":"The message type is invalid.","SESSION_TOO_FRESH_%d":"The session logged in too recently and %d seconds must pass before calling the method","SETTINGS_INVALID":"Invalid settings were provided.","SHA256_HASH_INVALID":"The provided SHA256 hash is invalid.","SHORT_NAME_INVALID":"The specified short name is invalid.","SHORT_NAME_OCCUPIED":"The specified short name is already in use.","SLOWMODE_MULTI_MSGS_DISABLED":"Slowmode is enabled, you cannot forward multiple messages to this group.","SMS_CODE_CREATE_FAILED":"An error occurred while creating the SMS code.","SRP_ID_INVALID":"Invalid SRP ID provided.","SRP_PASSWORD_CHANGED":"Password has changed.","START_PARAM_EMPTY":"The start parameter is empty.","START_PARAM_INVALID":"Start parameter invalid.","START_PARAM_TOO_LONG":"Start parameter is too long.","STICKER_DOCUMENT_INVALID":"The specified sticker document is invalid.","STICKER_EMOJI_INVALID":"Sticker emoji invalid.","STICKER_FILE_INVALID":"Sticker file invalid.","STICKER_GIF_DIMENSIONS":"The specified video sticker has invalid dimensions.","STICKER_ID_INVALID":"The provided sticker ID is invalid.","STICKER_INVALID":"The provided sticker is invalid.","STICKER_MIME_INVALID":"The specified sticker MIME type is invalid.","STICKER_PNG_DIMENSIONS":"Sticker png dimensions invalid.","STICKER_PNG_NOPNG":"One of the specified stickers is not a valid PNG file.","STICKER_TGS_NODOC":"You must send the animated sticker as a document.","STICKER_TGS_NOTGS":"Invalid TGS sticker provided.","STICKER_THUMB_PNG_NOPNG":"Incorrect stickerset thumb file provided, PNG / WEBP expected.","STICKER_THUMB_TGS_NOTGS":"Incorrect stickerset TGS thumb file provided.","STICKER_VIDEO_BIG":"The specified video sticker is too big.","STICKER_VIDEO_NODOC":"You must send the video sticker as a document.","STICKER_VIDEO_NOWEBM":"The specified video sticker is not in webm format.","STICKERPACK_STICKERS_TOO_MUCH":"There are too many stickers in this stickerpack, you can\'t add any more.","STICKERS_EMPTY":"No sticker provided.","STICKERS_TOO_MUCH":"There are too many stickers in this stickerpack, you can\'t add any more.","STICKERSET_INVALID":"The provided sticker set is invalid.","SWITCH_PM_TEXT_EMPTY":"The switch_pm.text field was empty.","TAKEOUT_REQUIRED":"A takeout session has to be initialized, first.","TASK_ALREADY_EXISTS":"An email reset was already requested.","TEMP_AUTH_KEY_ALREADY_BOUND":"The passed temporary key is already bound to another **perm_auth_key_id**.","TEMP_AUTH_KEY_EMPTY":"No temporary auth key provided.","THEME_FILE_INVALID":"Invalid theme file provided.","THEME_FORMAT_INVALID":"Invalid theme format provided.","THEME_INVALID":"Invalid theme provided.","THEME_MIME_INVALID":"The theme\'s MIME type is invalid.","THEME_TITLE_INVALID":"The specified theme title is invalid.","TITLE_INVALID":"The specified stickerpack title is invalid.","TMP_PASSWORD_DISABLED":"The temporary password is disabled.","TO_LANG_INVALID":"The specified destination language is invalid.","TOKEN_EMPTY":"The specified token is empty.","TOKEN_INVALID":"The provided token is invalid.","TOKEN_TYPE_INVALID":"The specified token type is invalid.","TOPIC_CLOSED":"This topic was closed, you can\'t send messages to it anymore.","TOPIC_DELETED":"The specified topic was deleted.","TOPIC_ID_INVALID":"The specified topic ID is invalid.","TOPIC_NOT_MODIFIED":"The updated topic info is equal to the current topic info, nothing was changed.","TRANSCRIPTION_FAILED":"Audio transcription failed.","TTL_DAYS_INVALID":"The provided TTL is invalid.","TTL_MEDIA_INVALID":"Invalid media Time To Live was provided.","TTL_PERIOD_INVALID":"The specified TTL period is invalid.","TYPES_EMPTY":"No top peer type was provided.","UNTIL_DATE_INVALID":"Invalid until date provided.","URL_INVALID":"Invalid URL provided.","USAGE_LIMIT_INVALID":"The specified usage limit is invalid.","USER_ADMIN_INVALID":"You\'re not an admin.","USER_ALREADY_INVITED":"You have already invited this user.","USER_ALREADY_PARTICIPANT":"The user is already in the group.","USER_BANNED_IN_CHANNEL":"You\'re banned from sending messages in supergroups/channels.","USER_BLOCKED":"User blocked.","USER_BOT":"Bots can only be admins in channels.","USER_BOT_INVALID":"User accounts must provide the `bot` method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts.","USER_BOT_REQUIRED":"This method can only be called by a bot.","USER_CHANNELS_TOO_MUCH":"One of the users you tried to add is already in too many channels/supergroups.","USER_CREATOR":"You can\'t leave this channel, because you\'re its creator.","USER_ID_INVALID":"The provided user ID is invalid.","USER_INVALID":"Invalid user provided.","USER_IS_BLOCKED":"You were blocked by this user.","USER_IS_BOT":"Bots can\'t send messages to other bots.","USER_KICKED":"This user was kicked from this supergroup/channel.","USER_NOT_MUTUAL_CONTACT":"The provided user is not a mutual contact.","USER_NOT_PARTICIPANT":"You\'re not a member of this supergroup/channel.","USER_VOLUME_INVALID":"The specified user volume is invalid.","USERNAME_INVALID":"The provided username is not valid.","USERNAME_NOT_MODIFIED":"The username was not modified.","USERNAME_NOT_OCCUPIED":"The provided username is not occupied.","USERNAME_OCCUPIED":"The provided username is already occupied.","USERNAME_PURCHASE_AVAILABLE":"The specified username can be purchased on https://fragment.com.","USERNAMES_ACTIVE_TOO_MUCH":"The maximum number of active usernames was reached.","USERPIC_UPLOAD_REQUIRED":"You must have a profile picture to publish your geolocation.","USERS_TOO_FEW":"Not enough users (to create a chat, for example).","USERS_TOO_MUCH":"The maximum number of users has been exceeded (to create a chat, for example).","VIDEO_CONTENT_TYPE_INVALID":"The video\'s content type is invalid.","VIDEO_FILE_INVALID":"The specified video file is invalid.","VIDEO_TITLE_EMPTY":"The specified video title is empty.","VOICE_MESSAGES_FORBIDDEN":"This user\'s privacy settings forbid you from sending voice messages.","WALLPAPER_FILE_INVALID":"The specified wallpaper file is invalid.","WALLPAPER_INVALID":"The specified wallpaper is invalid.","WALLPAPER_MIME_INVALID":"The specified wallpaper MIME type is invalid.","WC_CONVERT_URL_INVALID":"WC convert URL invalid.","WEBDOCUMENT_INVALID":"Invalid webdocument URL provided.","WEBDOCUMENT_MIME_INVALID":"Invalid webdocument mime type provided.","WEBDOCUMENT_SIZE_TOO_BIG":"Webdocument is too big!","WEBDOCUMENT_URL_INVALID":"The specified webdocument URL is invalid.","WEBPAGE_CURL_FAILED":"Failure while fetching the webpage with cURL.","WEBPAGE_MEDIA_EMPTY":"Webpage media empty.","WEBPUSH_AUTH_INVALID":"The specified web push authentication secret is invalid.","WEBPUSH_KEY_INVALID":"The specified web push elliptic curve Diffie-Hellman public key is invalid.","WEBPUSH_TOKEN_INVALID":"The specified web push token is invalid.","YOU_BLOCKED_USER":"You blocked this user.","BROADCAST_FORBIDDEN":"Participants of polls in channels should stay anonymous.","CHANNEL_PUBLIC_GROUP_NA":"channel/supergroup not available.","CHAT_ADMIN_INVITE_REQUIRED":"You do not have the rights to do this.","CHAT_GUEST_SEND_FORBIDDEN":"You join the discussion group before commenting, see [here &raquo;](/api/discussion#requiring-users-to-join-the-group) for more info.","CHAT_SEND_AUDIOS_FORBIDDEN":"You can\'t send audio messages in this chat.","CHAT_SEND_DOCS_FORBIDDEN":"You can\'t send documents in this chat.","CHAT_SEND_GAME_FORBIDDEN":"You can\'t send a game to this chat.","CHAT_SEND_GIFS_FORBIDDEN":"You can\'t send gifs in this chat.","CHAT_SEND_MEDIA_FORBIDDEN":"You can\'t send media in this chat.","CHAT_SEND_PHOTOS_FORBIDDEN":"You can\'t send photos in this chat.","CHAT_SEND_PLAIN_FORBIDDEN":"You can\'t send non-media (text) messages in this chat.","CHAT_SEND_POLL_FORBIDDEN":"You can\'t send polls in this chat.","CHAT_SEND_STICKERS_FORBIDDEN":"You can\'t send stickers in this chat.","CHAT_SEND_VIDEOS_FORBIDDEN":"You can\'t send videos in this chat.","CHAT_SEND_VOICES_FORBIDDEN":"You can\'t send voice recordings in this chat.","CHAT_WRITE_FORBIDDEN":"You can\'t write in this chat.","EDIT_BOT_INVITE_FORBIDDEN":"Normal users can\'t edit invites that were created by bots.","GROUPCALL_ALREADY_STARTED":"The groupcall has already started, you can join directly using [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall).","INLINE_BOT_REQUIRED":"Only the inline bot can edit message.","MESSAGE_AUTHOR_REQUIRED":"Message author required.","MESSAGE_DELETE_FORBIDDEN":"You can\'t delete one of the messages you tried to delete, most likely because it is a service message.","POLL_VOTE_REQUIRED":"Cast a vote in the poll before calling this method.","PREMIUM_ACCOUNT_REQUIRED":"A premium account is required to execute this action.","PUBLIC_CHANNEL_MISSING":"You can only export group call invite links for public chats or channels.","RIGHT_FORBIDDEN":"Your admin rights do not allow you to do this.","SENSITIVE_CHANGE_FORBIDDEN":"You can\'t change your sensitive content settings.","USER_DELETED":"You can\'t send this secret message because the other participant deleted their account.","USER_PRIVACY_RESTRICTED":"The user\'s privacy settings do not allow you to do this.","USER_RESTRICTED":"You\'re spamreported, you can\'t create channels or chats.","FILEREF_UPGRADE_NEEDED":"The client has to be updated in order to support [file references](https://core.telegram.org/api/file_reference).","FRESH_CHANGE_PHONE_FORBIDDEN":"You can\'t change phone number right after logging in, please wait at least 24 hours.","FRESH_RESET_AUTHORISATION_FORBIDDEN":"You can\'t logout other sessions if less than 24 hours have passed since you logged on the current session.","PAYMENT_UNSUPPORTED":"A detailed description of the error will be received separately as described [here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable).","PHONE_PASSWORD_FLOOD":"You have tried logging in too many times.","PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_%dMIN":"Similar to a flood wait, must wait %d minutes","SEND_CODE_UNAVAILABLE":"Returned when all available options for this type of number were already used (e.g. flash-call, then SMS, then this error might be returned to trigger a second resend).","STICKERSET_OWNER_ANONYMOUS":"Provided stickerset can\'t be installed as group stickerset to prevent admin deanonymization.","USERPIC_PRIVACY_REQUIRED":"You need to disable privacy settings for your profile picture in order to make your geolocation public.","2FA_CONFIRM_WAIT_%d":"The account is 2FA protected so it will be deleted in a week. Otherwise it can be reset in %d","SLOWMODE_WAIT_%d":"A wait of %d seconds is required before sending another message in this chat","TAKEOUT_INIT_DELAY_%d":"A wait of %d seconds is required before being able to initiate the takeout","AUTH_RESTART":"Restart the authorization process.","CDN_UPLOAD_TIMEOUT":"A server-side timeout occurred while reuploading the file to the CDN DC.","CHAT_ID_GENERATE_FAILED":"Failure while generating the chat ID.","PERSISTENT_TIMESTAMP_OUTDATED":"Channel internal replication issues, try again later (treat this like an RPC_CALL_FAIL).","RANDOM_ID_DUPLICATE":"You provided a random ID that was already used.","SIGN_IN_FAILED":"Failure while signing in.","Invalid msg_resend_req query":"Invalid msg_resend_req query.","Invalid msgs_ack query":"Invalid msgs_ack query.","Invalid msgs_state_req query":"Invalid msgs_state_req query.","Timeout":"Timeout while fetching data.","SESSION_PASSWORD_NEEDED":"2FA is enabled, use a password to login.","ACTIVE_USER_REQUIRED":"The method is only available to already activated users","AUTH_KEY_DUPLICATED":"The authorization key (session file) was used under two different IP addresses simultaneously, and can no longer be used. Use the same session exclusively, or use different sessions","AUTH_KEY_INVALID":"The key is invalid","AUTH_KEY_PERM_EMPTY":"The method is unavailable for temporary authorization key, not bound to permanent","AUTH_KEY_UNREGISTERED":"The key is not registered in the system","AUTH_TOKEN_INVALID2":"An invalid authorization token was provided","BASE_PORT_LOC_INVALID":"Base port location invalid","BOT_GAMES_DISABLED":"Bot games cannot be used in this type of chat","BOT_METHOD_INVALID":"The API access for bot users is restricted. The method you tried to invoke cannot be executed as a bot","BOT_POLLS_DISABLED":"You cannot create polls under a bot account","CHANNEL_BANNED":"The channel is banned","CHAT_FORBIDDEN":"You cannot write in this chat","CHP_CALL_FAIL":"The statistics cannot be retrieved at this time","CONNECTION_DEVICE_MODEL_EMPTY":"Device model empty","CONNECTION_LANG_PACK_INVALID":"The specified language pack is not valid. This is meant to be used by official applications only so far, leave it empty","CONNECTION_NOT_INITED":"Connection not initialized","CONNECTION_SYSTEM_EMPTY":"Connection system empty","CONNECTION_SYSTEM_LANG_CODE_EMPTY":"The system language string was empty during connection","ENCRYPTION_OCCUPY_FAILED":"TDLib developer claimed it is not an error while accepting secret chats and 500 is used instead of 420","FIELD_NAME_EMPTY":"The field with the name FIELD_NAME is missing","FIELD_NAME_INVALID":"The field with the name FIELD_NAME is invalid","FILE_PART_0_MISSING":"File part 0 missing","FILE_PART_%d_MISSING":"Part %d of the file is missing from storage","FLOOD_TEST_PHONE_WAIT_%d":"A wait of %d seconds is required in the test servers","GROUP_CALL_INVALID":"Group call invalid","HISTORY_GET_FAILED":"Fetching of history failed","INPUT_CONSTRUCTOR_INVALID":"The provided constructor is invalid","INPUT_FETCH_ERROR":"An error occurred while deserializing TL parameters","INPUT_FETCH_FAIL":"Failed deserializing TL payload","INPUT_LAYER_INVALID":"The provided layer is invalid","INPUT_METHOD_INVALID":"The invoked method does not exist anymore or has never existed","INPUT_REQUEST_TOO_LONG":"The input request was too long. This may be a bug in the library as it can occur when serializing more bytes than it should (like appending the vector constructor code at the end of a message)","INTERDC_%d_CALL_ERROR":"An error occurred while communicating with DC %d","INTERDC_%d_CALL_RICH_ERROR":"A rich error occurred while communicating with DC %d","MEMBER_NO_LOCATION":"An internal failure occurred while fetching user info (couldn\'t find location)","MEMBER_OCCUPY_PRIMARY_LOC_FAILED":"Occupation of primary member location failed","MSGID_DECREASE_RETRY":"The request should be retried with a lower message ID","NEED_CHAT_INVALID":"The provided chat is invalid","NEED_MEMBER_INVALID":"The provided member is invalid or does not exist (for example a thumb size)","PARTICIPANT_CALL_FAILED":"Failure while making call","PEER_FLOOD":"Too many requests","POLL_UNSUPPORTED":"This layer does not support polls in the issued method","POSTPONED_TIMEOUT":"The postponed call has timed out","PTS_CHANGE_EMPTY":"No PTS change","REFLECTOR_NOT_AVAILABLE":"Invalid call reflector server","REG_ID_GENERATE_FAILED":"Failure while generating registration ID","REPLY_MARKUP_GAME_EMPTY":"The provided reply markup for the game is empty","RPC_CALL_FAIL":"Telegram is having internal issues, please try again later.","RPC_MCGET_FAIL":"Telegram is having internal issues, please try again later.","SESSION_EXPIRED":"The authorization has expired","SESSION_REVOKED":"The authorization has been invalidated, because of the user terminating all sessions","SHORTNAME_OCCUPY_FAILED":"An error occurred when trying to register the short-name used for the sticker pack. Try a different name","STORAGE_CHECK_FAILED":"Server storage check failed","TAKEOUT_INVALID":"The takeout session has been invalidated by another data export session","TMP_PASSWORD_INVALID":"Password auth needs to be regenerated","TYPE_CONSTRUCTOR_INVALID":"The type constructor is invalid","Timedout":"Timeout while fetching data","UNKNOWN_METHOD":"The method you tried to call cannot be called on non-CDN DCs","USER_DEACTIVATED":"The user has been deleted/deactivated","USER_DEACTIVATED_BAN":"The user has been deleted/deactivated","USER_MIGRATE_%d":"The user whose identity is being used to execute queries is associated with DC %d","WORKER_BUSY_TOO_LONG_RETRY":"Telegram workers are too busy to respond immediately"}')
class RpcError extends Error {
    constructor(code, text, description) {
        super(description || 'Unknown RPC error: [' + code + ':' + text + ']');
        this.code = code;
        this.text = text;
    }

    static is(err, text) { return err.constructor === RpcError && (!text || err.text === text); }
    is(text) { return this.text === text; }
}
RpcError.fromTl = function (obj) {
    if (obj.errorMessage in _descriptionsMap) {
        return new RpcError(obj.errorCode, obj.errorMessage, _descriptionsMap[obj.errorMessage]);
    }

    var err = new RpcError(obj.errorCode, obj.errorMessage);
    var match, param;
    if ((match=err.text.match(/^FLOOD_WAIT_(\d+)$/))!=null){ err.text = 'FLOOD_WAIT_%d'; param = err.seconds = parseInt(match[1]) }
    else if ((match=err.text.match(/^FILE_MIGRATE_(\d+)$/))!=null){ err.text = 'FILE_MIGRATE_%d'; param = err.newDc = parseInt(match[1]) }
    else if ((match=err.text.match(/^NETWORK_MIGRATE_(\d+)$/))!=null){ err.text = 'NETWORK_MIGRATE_%d'; param = err.newDc = parseInt(match[1]) }
    else if ((match=err.text.match(/^PHONE_MIGRATE_(\d+)$/))!=null){ err.text = 'PHONE_MIGRATE_%d'; param = err.newDc = parseInt(match[1]) }
    else if ((match=err.text.match(/^STATS_MIGRATE_(\d+)$/))!=null){ err.text = 'STATS_MIGRATE_%d'; param = err.dc = parseInt(match[1]) }
    else if ((match=err.text.match(/^EMAIL_UNCONFIRMED_(\d+)$/))!=null){ err.text = 'EMAIL_UNCONFIRMED_%d'; param = err.codeLength = parseInt(match[1]) }
    else if ((match=err.text.match(/^PASSWORD_TOO_FRESH_(\d+)$/))!=null){ err.text = 'PASSWORD_TOO_FRESH_%d'; param = err.seconds = parseInt(match[1]) }
    else if ((match=err.text.match(/^SESSION_TOO_FRESH_(\d+)$/))!=null){ err.text = 'SESSION_TOO_FRESH_%d'; param = err.seconds = parseInt(match[1]) }
    else if ((match=err.text.match(/^PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_(\d+)MIN$/))!=null){ err.text = 'PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_%dMIN'; param = err.minutes = parseInt(match[1]) }
    else if ((match=err.text.match(/^2FA_CONFIRM_WAIT_(\d+)$/))!=null){ err.text = '2FA_CONFIRM_WAIT_%d'; param = err.seconds = parseInt(match[1]) }
    else if ((match=err.text.match(/^SLOWMODE_WAIT_(\d+)$/))!=null){ err.text = 'SLOWMODE_WAIT_%d'; param = err.seconds = parseInt(match[1]) }
    else if ((match=err.text.match(/^TAKEOUT_INIT_DELAY_(\d+)$/))!=null){ err.text = 'TAKEOUT_INIT_DELAY_%d'; param = err.seconds = parseInt(match[1]) }
    else if ((match=err.text.match(/^FILE_PART_(\d+)_MISSING$/))!=null){ err.text = 'FILE_PART_%d_MISSING'; param = err.which = parseInt(match[1]) }
    else if ((match=err.text.match(/^FLOOD_TEST_PHONE_WAIT_(\d+)$/))!=null){ err.text = 'FLOOD_TEST_PHONE_WAIT_%d'; param = err.seconds = parseInt(match[1]) }
    else if ((match=err.text.match(/^INTERDC_(\d+)_CALL_ERROR$/))!=null){ err.text = 'INTERDC_%d_CALL_ERROR'; param = err.dc = parseInt(match[1]) }
    else if ((match=err.text.match(/^INTERDC_(\d+)_CALL_RICH_ERROR$/))!=null){ err.text = 'INTERDC_%d_CALL_RICH_ERROR'; param = err.dc = parseInt(match[1]) }
    else if ((match=err.text.match(/^USER_MIGRATE_(\d+)$/))!=null){ err.text = 'USER_MIGRATE_%d'; param = err.newDc = parseInt(match[1]) }

    else return err

    err.message = _descriptionsMap[err.text].replace('%d', param);
    return err
}
RpcError.create = function(code, text) {
    var desc = _descriptionsMap[text];
    var err = new RpcError(code, text, desc);
    if (!desc) {
        err.unknown = true;
    }
    return err;
}
RpcError.BAD_REQUEST = 400;
RpcError.UNAUTHORIZED = 401;
RpcError.FORBIDDEN = 403;
RpcError.NOT_FOUND = 404;
RpcError.FLOOD = 420;
RpcError.SEE_OTHER = 303;
RpcError.NOT_ACCEPTABLE = 406;
RpcError.INTERNAL = 500;

ns.RpcError = RpcError;
ns.isAnyError = _isAny('Error');
ns.isAnyInputFileLocation = _isAny('InputFileLocation');
ns.isAnyInputPeer = _isAny('InputPeer');
ns.isAnyInputUser = _isAny('InputUser');
ns.isAnyInputContact = _isAny('InputContact');
ns.isAnyInputFile = _isAny('InputFile');
ns.isAnyInputMedia = _isAny('InputMedia');
ns.isAnyInputChatPhoto = _isAny('InputChatPhoto');
ns.isAnyInputGeoPoint = _isAny('InputGeoPoint');
ns.isAnyInputPhoto = _isAny('InputPhoto');
ns.isAnyPeer = _isAny('Peer');
ns.isAnyUser = _isAny('User');
ns.isAnyUserProfilePhoto = _isAny('UserProfilePhoto');
ns.isAnyUserStatus = _isAny('UserStatus');
ns.isAnyChat = _isAny('Chat');
ns.isAnyChatFull = _isAny('ChatFull');
ns.isAnyChatParticipant = _isAny('ChatParticipant');
ns.isAnyChatParticipants = _isAny('ChatParticipants');
ns.isAnyChatPhoto = _isAny('ChatPhoto');
ns.isAnyMessage = _isAny('Message');
ns.isAnyMessageMedia = _isAny('MessageMedia');
ns.isAnyMessageAction = _isAny('MessageAction');
ns.isAnyDialog = _isAny('Dialog');
ns.isAnyPhoto = _isAny('Photo');
ns.isAnyPhotoSize = _isAny('PhotoSize');
ns.isAnyGeoPoint = _isAny('GeoPoint');
ns.isAnyInputNotifyPeer = _isAny('InputNotifyPeer');
ns.isAnyInputPeerNotifySettings = _isAny('InputPeerNotifySettings');
ns.isAnyPeerNotifySettings = _isAny('PeerNotifySettings');
ns.isAnyPeerSettings = _isAny('PeerSettings');
ns.isAnyWallPaper = _isAny('WallPaper');
ns.isAnyReportReason = _isAny('ReportReason');
ns.isAnyUserFull = _isAny('UserFull');
ns.isAnyContact = _isAny('Contact');
ns.isAnyImportedContact = _isAny('ImportedContact');
ns.isAnyContactStatus = _isAny('ContactStatus');
ns.isAnyMessagesFilter = _isAny('MessagesFilter');
ns.isAnyUpdate = _isAny('Update');
ns.isAnyUpdates = _isAny('Updates');
ns.isAnyDcOption = _isAny('DcOption');
ns.isAnyConfig = _isAny('Config');
ns.isAnyNearestDc = _isAny('NearestDc');
ns.isAnyEncryptedChat = _isAny('EncryptedChat');
ns.isAnyInputEncryptedChat = _isAny('InputEncryptedChat');
ns.isAnyEncryptedFile = _isAny('EncryptedFile');
ns.isAnyInputEncryptedFile = _isAny('InputEncryptedFile');
ns.isAnyEncryptedMessage = _isAny('EncryptedMessage');
ns.isAnyInputDocument = _isAny('InputDocument');
ns.isAnyDocument = _isAny('Document');
ns.isAnyNotifyPeer = _isAny('NotifyPeer');
ns.isAnySendMessageAction = _isAny('SendMessageAction');
ns.isAnyInputPrivacyKey = _isAny('InputPrivacyKey');
ns.isAnyPrivacyKey = _isAny('PrivacyKey');
ns.isAnyInputPrivacyRule = _isAny('InputPrivacyRule');
ns.isAnyPrivacyRule = _isAny('PrivacyRule');
ns.isAnyAccountDaysTTL = _isAny('AccountDaysTTL');
ns.isAnyDocumentAttribute = _isAny('DocumentAttribute');
ns.isAnyStickerPack = _isAny('StickerPack');
ns.isAnyWebPage = _isAny('WebPage');
ns.isAnyAuthorization = _isAny('Authorization');
ns.isAnyReceivedNotifyMessage = _isAny('ReceivedNotifyMessage');
ns.isAnyExportedChatInvite = _isAny('ExportedChatInvite');
ns.isAnyChatInvite = _isAny('ChatInvite');
ns.isAnyInputStickerSet = _isAny('InputStickerSet');
ns.isAnyStickerSet = _isAny('StickerSet');
ns.isAnyBotCommand = _isAny('BotCommand');
ns.isAnyBotInfo = _isAny('BotInfo');
ns.isAnyKeyboardButton = _isAny('KeyboardButton');
ns.isAnyKeyboardButtonRow = _isAny('KeyboardButtonRow');
ns.isAnyReplyMarkup = _isAny('ReplyMarkup');
ns.isAnyMessageEntity = _isAny('MessageEntity');
ns.isAnyInputChannel = _isAny('InputChannel');
ns.isAnyMessageRange = _isAny('MessageRange');
ns.isAnyChannelMessagesFilter = _isAny('ChannelMessagesFilter');
ns.isAnyChannelParticipant = _isAny('ChannelParticipant');
ns.isAnyChannelParticipantsFilter = _isAny('ChannelParticipantsFilter');
ns.isAnyInputBotInlineMessage = _isAny('InputBotInlineMessage');
ns.isAnyInputBotInlineResult = _isAny('InputBotInlineResult');
ns.isAnyBotInlineMessage = _isAny('BotInlineMessage');
ns.isAnyBotInlineResult = _isAny('BotInlineResult');
ns.isAnyExportedMessageLink = _isAny('ExportedMessageLink');
ns.isAnyMessageFwdHeader = _isAny('MessageFwdHeader');
ns.isAnyInputBotInlineMessageID = _isAny('InputBotInlineMessageID');
ns.isAnyInlineBotSwitchPM = _isAny('InlineBotSwitchPM');
ns.isAnyTopPeer = _isAny('TopPeer');
ns.isAnyTopPeerCategory = _isAny('TopPeerCategory');
ns.isAnyTopPeerCategoryPeers = _isAny('TopPeerCategoryPeers');
ns.isAnyDraftMessage = _isAny('DraftMessage');
ns.isAnyStickerSetCovered = _isAny('StickerSetCovered');
ns.isAnyMaskCoords = _isAny('MaskCoords');
ns.isAnyInputStickeredMedia = _isAny('InputStickeredMedia');
ns.isAnyGame = _isAny('Game');
ns.isAnyInputGame = _isAny('InputGame');
ns.isAnyHighScore = _isAny('HighScore');
ns.isAnyRichText = _isAny('RichText');
ns.isAnyPageBlock = _isAny('PageBlock');
ns.isAnyPhoneCallDiscardReason = _isAny('PhoneCallDiscardReason');
ns.isAnyDataJSON = _isAny('DataJSON');
ns.isAnyLabeledPrice = _isAny('LabeledPrice');
ns.isAnyInvoice = _isAny('Invoice');
ns.isAnyPaymentCharge = _isAny('PaymentCharge');
ns.isAnyPostAddress = _isAny('PostAddress');
ns.isAnyPaymentRequestedInfo = _isAny('PaymentRequestedInfo');
ns.isAnyPaymentSavedCredentials = _isAny('PaymentSavedCredentials');
ns.isAnyWebDocument = _isAny('WebDocument');
ns.isAnyInputWebDocument = _isAny('InputWebDocument');
ns.isAnyInputWebFileLocation = _isAny('InputWebFileLocation');
ns.isAnyInputPaymentCredentials = _isAny('InputPaymentCredentials');
ns.isAnyShippingOption = _isAny('ShippingOption');
ns.isAnyInputStickerSetItem = _isAny('InputStickerSetItem');
ns.isAnyInputPhoneCall = _isAny('InputPhoneCall');
ns.isAnyPhoneCall = _isAny('PhoneCall');
ns.isAnyPhoneConnection = _isAny('PhoneConnection');
ns.isAnyPhoneCallProtocol = _isAny('PhoneCallProtocol');
ns.isAnyCdnPublicKey = _isAny('CdnPublicKey');
ns.isAnyCdnConfig = _isAny('CdnConfig');
ns.isAnyLangPackString = _isAny('LangPackString');
ns.isAnyLangPackDifference = _isAny('LangPackDifference');
ns.isAnyLangPackLanguage = _isAny('LangPackLanguage');
ns.isAnyChannelAdminLogEventAction = _isAny('ChannelAdminLogEventAction');
ns.isAnyChannelAdminLogEvent = _isAny('ChannelAdminLogEvent');
ns.isAnyChannelAdminLogEventsFilter = _isAny('ChannelAdminLogEventsFilter');
ns.isAnyPopularContact = _isAny('PopularContact');
ns.isAnyRecentMeUrl = _isAny('RecentMeUrl');
ns.isAnyInputSingleMedia = _isAny('InputSingleMedia');
ns.isAnyWebAuthorization = _isAny('WebAuthorization');
ns.isAnyInputMessage = _isAny('InputMessage');
ns.isAnyInputDialogPeer = _isAny('InputDialogPeer');
ns.isAnyDialogPeer = _isAny('DialogPeer');
ns.isAnyFileHash = _isAny('FileHash');
ns.isAnyInputClientProxy = _isAny('InputClientProxy');
ns.isAnyInputSecureFile = _isAny('InputSecureFile');
ns.isAnySecureFile = _isAny('SecureFile');
ns.isAnySecureData = _isAny('SecureData');
ns.isAnySecurePlainData = _isAny('SecurePlainData');
ns.isAnySecureValueType = _isAny('SecureValueType');
ns.isAnySecureValue = _isAny('SecureValue');
ns.isAnyInputSecureValue = _isAny('InputSecureValue');
ns.isAnySecureValueHash = _isAny('SecureValueHash');
ns.isAnySecureValueError = _isAny('SecureValueError');
ns.isAnySecureCredentialsEncrypted = _isAny('SecureCredentialsEncrypted');
ns.isAnySavedContact = _isAny('SavedContact');
ns.isAnyPasswordKdfAlgo = _isAny('PasswordKdfAlgo');
ns.isAnySecurePasswordKdfAlgo = _isAny('SecurePasswordKdfAlgo');
ns.isAnySecureSecretSettings = _isAny('SecureSecretSettings');
ns.isAnyInputCheckPasswordSRP = _isAny('InputCheckPasswordSRP');
ns.isAnySecureRequiredType = _isAny('SecureRequiredType');
ns.isAnyInputAppEvent = _isAny('InputAppEvent');
ns.isAnyJSONObjectValue = _isAny('JSONObjectValue');
ns.isAnyJSONValue = _isAny('JSONValue');
ns.isAnyPageTableCell = _isAny('PageTableCell');
ns.isAnyPageTableRow = _isAny('PageTableRow');
ns.isAnyPageCaption = _isAny('PageCaption');
ns.isAnyPageListItem = _isAny('PageListItem');
ns.isAnyPageListOrderedItem = _isAny('PageListOrderedItem');
ns.isAnyPageRelatedArticle = _isAny('PageRelatedArticle');
ns.isAnyPage = _isAny('Page');
ns.isAnyPollAnswer = _isAny('PollAnswer');
ns.isAnyPoll = _isAny('Poll');
ns.isAnyPollAnswerVoters = _isAny('PollAnswerVoters');
ns.isAnyPollResults = _isAny('PollResults');
ns.isAnyChatOnlines = _isAny('ChatOnlines');
ns.isAnyStatsURL = _isAny('StatsURL');
ns.isAnyChatAdminRights = _isAny('ChatAdminRights');
ns.isAnyChatBannedRights = _isAny('ChatBannedRights');
ns.isAnyInputWallPaper = _isAny('InputWallPaper');
ns.isAnyCodeSettings = _isAny('CodeSettings');
ns.isAnyWallPaperSettings = _isAny('WallPaperSettings');
ns.isAnyAutoDownloadSettings = _isAny('AutoDownloadSettings');
ns.isAnyEmojiKeyword = _isAny('EmojiKeyword');
ns.isAnyEmojiKeywordsDifference = _isAny('EmojiKeywordsDifference');
ns.isAnyEmojiURL = _isAny('EmojiURL');
ns.isAnyEmojiLanguage = _isAny('EmojiLanguage');
ns.isAnyFolder = _isAny('Folder');
ns.isAnyInputFolderPeer = _isAny('InputFolderPeer');
ns.isAnyFolderPeer = _isAny('FolderPeer');
ns.isAnyUrlAuthResult = _isAny('UrlAuthResult');
ns.isAnyChannelLocation = _isAny('ChannelLocation');
ns.isAnyPeerLocated = _isAny('PeerLocated');
ns.isAnyRestrictionReason = _isAny('RestrictionReason');
ns.isAnyInputTheme = _isAny('InputTheme');
ns.isAnyTheme = _isAny('Theme');
ns.isAnyBaseTheme = _isAny('BaseTheme');
ns.isAnyInputThemeSettings = _isAny('InputThemeSettings');
ns.isAnyThemeSettings = _isAny('ThemeSettings');
ns.isAnyWebPageAttribute = _isAny('WebPageAttribute');
ns.isAnyBankCardOpenUrl = _isAny('BankCardOpenUrl');
ns.isAnyDialogFilter = _isAny('DialogFilter');
ns.isAnyDialogFilterSuggested = _isAny('DialogFilterSuggested');
ns.isAnyStatsDateRangeDays = _isAny('StatsDateRangeDays');
ns.isAnyStatsAbsValueAndPrev = _isAny('StatsAbsValueAndPrev');
ns.isAnyStatsPercentValue = _isAny('StatsPercentValue');
ns.isAnyStatsGraph = _isAny('StatsGraph');
ns.isAnyVideoSize = _isAny('VideoSize');
ns.isAnyStatsGroupTopPoster = _isAny('StatsGroupTopPoster');
ns.isAnyStatsGroupTopAdmin = _isAny('StatsGroupTopAdmin');
ns.isAnyStatsGroupTopInviter = _isAny('StatsGroupTopInviter');
ns.isAnyGlobalPrivacySettings = _isAny('GlobalPrivacySettings');
ns.isAnyMessageViews = _isAny('MessageViews');
ns.isAnyMessageReplyHeader = _isAny('MessageReplyHeader');
ns.isAnyMessageReplies = _isAny('MessageReplies');
ns.isAnyPeerBlocked = _isAny('PeerBlocked');
ns.isAnyGroupCall = _isAny('GroupCall');
ns.isAnyInputGroupCall = _isAny('InputGroupCall');
ns.isAnyGroupCallParticipant = _isAny('GroupCallParticipant');
ns.isAnyInlineQueryPeerType = _isAny('InlineQueryPeerType');
ns.isAnyChatInviteImporter = _isAny('ChatInviteImporter');
ns.isAnyChatAdminWithInvites = _isAny('ChatAdminWithInvites');
ns.isAnyGroupCallParticipantVideoSourceGroup = _isAny('GroupCallParticipantVideoSourceGroup');
ns.isAnyGroupCallParticipantVideo = _isAny('GroupCallParticipantVideo');
ns.isAnyBotCommandScope = _isAny('BotCommandScope');
ns.isAnyChatTheme = _isAny('ChatTheme');
ns.isAnySponsoredMessage = _isAny('SponsoredMessage');
ns.isAnySearchResultsCalendarPeriod = _isAny('SearchResultsCalendarPeriod');
ns.isAnySearchResultsPosition = _isAny('SearchResultsPosition');
ns.isAnyReactionCount = _isAny('ReactionCount');
ns.isAnyMessageReactions = _isAny('MessageReactions');
ns.isAnyAvailableReaction = _isAny('AvailableReaction');
ns.isAnyMessagePeerReaction = _isAny('MessagePeerReaction');
ns.isAnyGroupCallStreamChannel = _isAny('GroupCallStreamChannel');
ns.isAnyAttachMenuBotIconColor = _isAny('AttachMenuBotIconColor');
ns.isAnyAttachMenuBotIcon = _isAny('AttachMenuBotIcon');
ns.isAnyAttachMenuBot = _isAny('AttachMenuBot');
ns.isAnyAttachMenuBots = _isAny('AttachMenuBots');
ns.isAnyAttachMenuBotsBot = _isAny('AttachMenuBotsBot');
ns.isAnyWebViewResult = _isAny('WebViewResult');
ns.isAnyWebViewMessageSent = _isAny('WebViewMessageSent');
ns.isAnyBotMenuButton = _isAny('BotMenuButton');
ns.isAnyNotificationSound = _isAny('NotificationSound');
ns.isAnyAttachMenuPeerType = _isAny('AttachMenuPeerType');
ns.isAnyInputInvoice = _isAny('InputInvoice');
ns.isAnyInputStorePaymentPurpose = _isAny('InputStorePaymentPurpose');
ns.isAnyPaymentFormMethod = _isAny('PaymentFormMethod');
ns.isAnyEmojiStatus = _isAny('EmojiStatus');
ns.isAnyReaction = _isAny('Reaction');
ns.isAnyChatReactions = _isAny('ChatReactions');
ns.isAnyEmailVerifyPurpose = _isAny('EmailVerifyPurpose');
ns.isAnyEmailVerification = _isAny('EmailVerification');
ns.isAnyPremiumSubscriptionOption = _isAny('PremiumSubscriptionOption');
ns.isAnySendAsPeer = _isAny('SendAsPeer');
ns.isAnyMessageExtendedMedia = _isAny('MessageExtendedMedia');
ns.isAnyStickerKeyword = _isAny('StickerKeyword');
ns.isAnyUsername = _isAny('Username');
ns.isAnyForumTopic = _isAny('ForumTopic');
ns.isAnyDefaultHistoryTTL = _isAny('DefaultHistoryTTL');
ns.isAnyExportedContactToken = _isAny('ExportedContactToken');
ns.isAnyRequestPeerType = _isAny('RequestPeerType');
ns.isAnyEmojiList = _isAny('EmojiList');
ns.isAnyEmojiGroup = _isAny('EmojiGroup');
ns.isAnyTextWithEntities = _isAny('TextWithEntities');
ns.isAnyAutoSaveSettings = _isAny('AutoSaveSettings');
ns.isAnyAutoSaveException = _isAny('AutoSaveException');
ns.isAnyInputBotApp = _isAny('InputBotApp');
ns.isAnyBotApp = _isAny('BotApp');
ns.isAnyInlineBotWebView = _isAny('InlineBotWebView');
ns.isAnyReadParticipantDate = _isAny('ReadParticipantDate');
ns.isAnyInputChatlist = _isAny('InputChatlist');
ns.isAnyExportedChatlistInvite = _isAny('ExportedChatlistInvite');
ns.isAnyMessagePeerVote = _isAny('MessagePeerVote');
ns.isAnyStoryViews = _isAny('StoryViews');
ns.isAnyStoryItem = _isAny('StoryItem');
ns.isAnyStoryView = _isAny('StoryView');
ns.isAnyInputReplyTo = _isAny('InputReplyTo');
ns.isAnyExportedStoryLink = _isAny('ExportedStoryLink');
ns.isAnyStoriesStealthMode = _isAny('StoriesStealthMode');
ns.isAnyMediaAreaCoordinates = _isAny('MediaAreaCoordinates');
ns.isAnyMediaArea = _isAny('MediaArea');
ns.isAnyPeerStories = _isAny('PeerStories');
ns.isAnyPremiumGiftCodeOption = _isAny('PremiumGiftCodeOption');
ns.isAnyPrepaidGiveaway = _isAny('PrepaidGiveaway');
ns.isAnyBoost = _isAny('Boost');
ns.isAnyMyBoost = _isAny('MyBoost');
ns.isAnyStoryFwdHeader = _isAny('StoryFwdHeader');
ns.isAnyPostInteractionCounters = _isAny('PostInteractionCounters');
ns.isAnyPublicForward = _isAny('PublicForward');
ns.isAnyPeerColor = _isAny('PeerColor');
ns.isAnyStoryReaction = _isAny('StoryReaction');
ns.isAnySavedDialog = _isAny('SavedDialog');
ns.isAnySavedReactionTag = _isAny('SavedReactionTag');
ns.isAnyOutboxReadDate = _isAny('OutboxReadDate');
ns.isAnySmsJob = _isAny('SmsJob');
ns.isAnyBusinessWeeklyOpen = _isAny('BusinessWeeklyOpen');
ns.isAnyBusinessWorkHours = _isAny('BusinessWorkHours');
ns.isAnyBusinessLocation = _isAny('BusinessLocation');
ns.isAnyInputBusinessRecipients = _isAny('InputBusinessRecipients');
ns.isAnyBusinessRecipients = _isAny('BusinessRecipients');
ns.isAnyBusinessAwayMessageSchedule = _isAny('BusinessAwayMessageSchedule');
ns.isAnyInputBusinessGreetingMessage = _isAny('InputBusinessGreetingMessage');
ns.isAnyBusinessGreetingMessage = _isAny('BusinessGreetingMessage');
ns.isAnyInputBusinessAwayMessage = _isAny('InputBusinessAwayMessage');
ns.isAnyBusinessAwayMessage = _isAny('BusinessAwayMessage');
ns.isAnyTimezone = _isAny('Timezone');
ns.isAnyQuickReply = _isAny('QuickReply');
ns.isAnyInputQuickReplyShortcut = _isAny('InputQuickReplyShortcut');
ns.isAnyConnectedBot = _isAny('ConnectedBot');
ns.isAnyBirthday = _isAny('Birthday');
ns.isAnyBotBusinessConnection = _isAny('BotBusinessConnection');
ns.isAnyInputBusinessIntro = _isAny('InputBusinessIntro');
ns.isAnyBusinessIntro = _isAny('BusinessIntro');
ns.isAnyInputCollectible = _isAny('InputCollectible');
ns.isAnyInputBusinessBotRecipients = _isAny('InputBusinessBotRecipients');
ns.isAnyBusinessBotRecipients = _isAny('BusinessBotRecipients');
ns.isAnyContactBirthday = _isAny('ContactBirthday');
ns.isAnyMissingInvitee = _isAny('MissingInvitee');
ns.isAnyInputBusinessChatLink = _isAny('InputBusinessChatLink');
ns.isAnyBusinessChatLink = _isAny('BusinessChatLink');
ns.isAnyRequestedPeer = _isAny('RequestedPeer');
ns.isAnySponsoredMessageReportOption = _isAny('SponsoredMessageReportOption');
ns.isAnyReactionNotificationsFrom = _isAny('ReactionNotificationsFrom');
ns.isAnyReactionsNotifySettings = _isAny('ReactionsNotifySettings');
ns.isAnyAvailableEffect = _isAny('AvailableEffect');
ns.isAnyFactCheck = _isAny('FactCheck');
ns.isAnyStarsTransactionPeer = _isAny('StarsTransactionPeer');
ns.isAnyStarsTopupOption = _isAny('StarsTopupOption');
ns.isAnyStarsTransaction = _isAny('StarsTransaction');
ns.isAnyFoundStory = _isAny('FoundStory');
ns.isAnyGeoPointAddress = _isAny('GeoPointAddress');
ns.isAnyStarsRevenueStatus = _isAny('StarsRevenueStatus');
ns.isAnyInputStarsTransaction = _isAny('InputStarsTransaction');
ns.isAnyStarsGiftOption = _isAny('StarsGiftOption');
ns.isAnyBotPreviewMedia = _isAny('BotPreviewMedia');
ns.isAnyStarsSubscriptionPricing = _isAny('StarsSubscriptionPricing');
ns.isAnyStarsSubscription = _isAny('StarsSubscription');
ns.isAnyMessageReactor = _isAny('MessageReactor');
ns.isAnyStarsGiveawayOption = _isAny('StarsGiveawayOption');
ns.isAnyStarsGiveawayWinnersOption = _isAny('StarsGiveawayWinnersOption');
ns.isAnyStarGift = _isAny('StarGift');
ns.isAnyMessageReportOption = _isAny('MessageReportOption');
ns.isAnyReportResult = _isAny('ReportResult');
ns.isAnyBotAppSettings = _isAny('BotAppSettings');
ns.isAnyStarRefProgram = _isAny('StarRefProgram');
ns.isAnyConnectedBotStarRef = _isAny('ConnectedBotStarRef');
ns.isAnyStarsAmount = _isAny('StarsAmount');
ns.isAnyBotVerifierSettings = _isAny('BotVerifierSettings');
ns.isAnyBotVerification = _isAny('BotVerification');
ns.isAnyStarGiftAttribute = _isAny('StarGiftAttribute');
ns.isAnySavedStarGift = _isAny('SavedStarGift');
ns.isAnyInputSavedStarGift = _isAny('InputSavedStarGift');
ns.isAnyPaidReactionPrivacy = _isAny('PaidReactionPrivacy');
ns.isAnyRequirementToContact = _isAny('RequirementToContact');
ns.isAnyBusinessBotRights = _isAny('BusinessBotRights');
ns.isAnyDisallowedGiftsSettings = _isAny('DisallowedGiftsSettings');
ns.isAnySponsoredPeer = _isAny('SponsoredPeer');
ns.isAnyStarGiftAttributeId = _isAny('StarGiftAttributeId');
ns.isAnyStarGiftAttributeCounter = _isAny('StarGiftAttributeCounter');
ns.isAnyPendingSuggestion = _isAny('PendingSuggestion');
ns.isAnyTodoItem = _isAny('TodoItem');
ns.isAnyTodoList = _isAny('TodoList');
ns.isAnyTodoCompletion = _isAny('TodoCompletion');
ns.isAnySuggestedPost = _isAny('SuggestedPost');
ns.isAnyStarsRating = _isAny('StarsRating');
ns.isAnyStarGiftCollection = _isAny('StarGiftCollection');
ns.isAnyStoryAlbum = _isAny('StoryAlbum');
ns.isAnySearchPostsFlood = _isAny('SearchPostsFlood');
ns.isAnyProfileTab = _isAny('ProfileTab');
ns.isAnyInputChatTheme = _isAny('InputChatTheme');
ns.isAnyStarGiftUpgradePrice = _isAny('StarGiftUpgradePrice');
ns.isAnyGroupCallMessage = _isAny('GroupCallMessage');
ns.isAnyGroupCallDonor = _isAny('GroupCallDonor');
ns.isAnyRecentStory = _isAny('RecentStory');
ns.isAnyAuctionBidLevel = _isAny('AuctionBidLevel');
ns.isAnyStarGiftAuctionState = _isAny('StarGiftAuctionState');
ns.isAnyStarGiftAuctionUserState = _isAny('StarGiftAuctionUserState');
ns.isAnyStarGiftAuctionAcquiredGift = _isAny('StarGiftAuctionAcquiredGift');
ns.isAnyStarGiftActiveAuctionState = _isAny('StarGiftActiveAuctionState');
ns.isAnyInputStarGiftAuction = _isAny('InputStarGiftAuction');
ns.storage = {};
(function(ns){
ns.isAnyFileType = _isAny('storage.FileType');
})(ns.storage);
ns.auth = {};
(function(ns){
ns.isAnySentCode = _isAny('auth.SentCode');
ns.isAnyAuthorization = _isAny('auth.Authorization');
ns.isAnyExportedAuthorization = _isAny('auth.ExportedAuthorization');
ns.isAnyPasswordRecovery = _isAny('auth.PasswordRecovery');
ns.isAnyCodeType = _isAny('auth.CodeType');
ns.isAnySentCodeType = _isAny('auth.SentCodeType');
ns.isAnyLoginToken = _isAny('auth.LoginToken');
ns.isAnyLoggedOut = _isAny('auth.LoggedOut');
})(ns.auth);
ns.contacts = {};
(function(ns){
ns.isAnyContacts = _isAny('contacts.Contacts');
ns.isAnyImportedContacts = _isAny('contacts.ImportedContacts');
ns.isAnyBlocked = _isAny('contacts.Blocked');
ns.isAnyFound = _isAny('contacts.Found');
ns.isAnyResolvedPeer = _isAny('contacts.ResolvedPeer');
ns.isAnyTopPeers = _isAny('contacts.TopPeers');
ns.isAnyContactBirthdays = _isAny('contacts.ContactBirthdays');
ns.isAnySponsoredPeers = _isAny('contacts.SponsoredPeers');
})(ns.contacts);
ns.messages = {};
(function(ns){
ns.isAnyDialogs = _isAny('messages.Dialogs');
ns.isAnyMessages = _isAny('messages.Messages');
ns.isAnyChats = _isAny('messages.Chats');
ns.isAnyChatFull = _isAny('messages.ChatFull');
ns.isAnyAffectedHistory = _isAny('messages.AffectedHistory');
ns.isAnyDhConfig = _isAny('messages.DhConfig');
ns.isAnySentEncryptedMessage = _isAny('messages.SentEncryptedMessage');
ns.isAnyStickers = _isAny('messages.Stickers');
ns.isAnyAllStickers = _isAny('messages.AllStickers');
ns.isAnyAffectedMessages = _isAny('messages.AffectedMessages');
ns.isAnyStickerSet = _isAny('messages.StickerSet');
ns.isAnySavedGifs = _isAny('messages.SavedGifs');
ns.isAnyBotResults = _isAny('messages.BotResults');
ns.isAnyBotCallbackAnswer = _isAny('messages.BotCallbackAnswer');
ns.isAnyMessageEditData = _isAny('messages.MessageEditData');
ns.isAnyPeerDialogs = _isAny('messages.PeerDialogs');
ns.isAnyFeaturedStickers = _isAny('messages.FeaturedStickers');
ns.isAnyRecentStickers = _isAny('messages.RecentStickers');
ns.isAnyArchivedStickers = _isAny('messages.ArchivedStickers');
ns.isAnyStickerSetInstallResult = _isAny('messages.StickerSetInstallResult');
ns.isAnyHighScores = _isAny('messages.HighScores');
ns.isAnyFavedStickers = _isAny('messages.FavedStickers');
ns.isAnyFoundStickerSets = _isAny('messages.FoundStickerSets');
ns.isAnySearchCounter = _isAny('messages.SearchCounter');
ns.isAnyInactiveChats = _isAny('messages.InactiveChats');
ns.isAnyVotesList = _isAny('messages.VotesList');
ns.isAnyMessageViews = _isAny('messages.MessageViews');
ns.isAnyDiscussionMessage = _isAny('messages.DiscussionMessage');
ns.isAnyHistoryImport = _isAny('messages.HistoryImport');
ns.isAnyHistoryImportParsed = _isAny('messages.HistoryImportParsed');
ns.isAnyAffectedFoundMessages = _isAny('messages.AffectedFoundMessages');
ns.isAnyExportedChatInvites = _isAny('messages.ExportedChatInvites');
ns.isAnyExportedChatInvite = _isAny('messages.ExportedChatInvite');
ns.isAnyChatInviteImporters = _isAny('messages.ChatInviteImporters');
ns.isAnyChatAdminsWithInvites = _isAny('messages.ChatAdminsWithInvites');
ns.isAnyCheckedHistoryImportPeer = _isAny('messages.CheckedHistoryImportPeer');
ns.isAnySponsoredMessages = _isAny('messages.SponsoredMessages');
ns.isAnySearchResultsCalendar = _isAny('messages.SearchResultsCalendar');
ns.isAnySearchResultsPositions = _isAny('messages.SearchResultsPositions');
ns.isAnyPeerSettings = _isAny('messages.PeerSettings');
ns.isAnyMessageReactionsList = _isAny('messages.MessageReactionsList');
ns.isAnyAvailableReactions = _isAny('messages.AvailableReactions');
ns.isAnyTranscribedAudio = _isAny('messages.TranscribedAudio');
ns.isAnyReactions = _isAny('messages.Reactions');
ns.isAnyForumTopics = _isAny('messages.ForumTopics');
ns.isAnyEmojiGroups = _isAny('messages.EmojiGroups');
ns.isAnyTranslatedText = _isAny('messages.TranslatedText');
ns.isAnyBotApp = _isAny('messages.BotApp');
ns.isAnyWebPage = _isAny('messages.WebPage');
ns.isAnySavedDialogs = _isAny('messages.SavedDialogs');
ns.isAnySavedReactionTags = _isAny('messages.SavedReactionTags');
ns.isAnyQuickReplies = _isAny('messages.QuickReplies');
ns.isAnyDialogFilters = _isAny('messages.DialogFilters');
ns.isAnyMyStickers = _isAny('messages.MyStickers');
ns.isAnyInvitedUsers = _isAny('messages.InvitedUsers');
ns.isAnyAvailableEffects = _isAny('messages.AvailableEffects');
ns.isAnyBotPreparedInlineMessage = _isAny('messages.BotPreparedInlineMessage');
ns.isAnyPreparedInlineMessage = _isAny('messages.PreparedInlineMessage');
ns.isAnyFoundStickers = _isAny('messages.FoundStickers');
ns.isAnyWebPagePreview = _isAny('messages.WebPagePreview');
})(ns.messages);
ns.updates = {};
(function(ns){
ns.isAnyState = _isAny('updates.State');
ns.isAnyDifference = _isAny('updates.Difference');
ns.isAnyChannelDifference = _isAny('updates.ChannelDifference');
})(ns.updates);
ns.photos = {};
(function(ns){
ns.isAnyPhotos = _isAny('photos.Photos');
ns.isAnyPhoto = _isAny('photos.Photo');
})(ns.photos);
ns.upload = {};
(function(ns){
ns.isAnyFile = _isAny('upload.File');
ns.isAnyWebFile = _isAny('upload.WebFile');
ns.isAnyCdnFile = _isAny('upload.CdnFile');
})(ns.upload);
ns.help = {};
(function(ns){
ns.isAnyAppUpdate = _isAny('help.AppUpdate');
ns.isAnyInviteText = _isAny('help.InviteText');
ns.isAnySupport = _isAny('help.Support');
ns.isAnyTermsOfService = _isAny('help.TermsOfService');
ns.isAnyRecentMeUrls = _isAny('help.RecentMeUrls');
ns.isAnyTermsOfServiceUpdate = _isAny('help.TermsOfServiceUpdate');
ns.isAnyDeepLinkInfo = _isAny('help.DeepLinkInfo');
ns.isAnyPassportConfig = _isAny('help.PassportConfig');
ns.isAnySupportName = _isAny('help.SupportName');
ns.isAnyUserInfo = _isAny('help.UserInfo');
ns.isAnyPromoData = _isAny('help.PromoData');
ns.isAnyCountryCode = _isAny('help.CountryCode');
ns.isAnyCountry = _isAny('help.Country');
ns.isAnyCountriesList = _isAny('help.CountriesList');
ns.isAnyPremiumPromo = _isAny('help.PremiumPromo');
ns.isAnyAppConfig = _isAny('help.AppConfig');
ns.isAnyPeerColorSet = _isAny('help.PeerColorSet');
ns.isAnyPeerColorOption = _isAny('help.PeerColorOption');
ns.isAnyPeerColors = _isAny('help.PeerColors');
ns.isAnyTimezonesList = _isAny('help.TimezonesList');
})(ns.help);
ns.account = {};
(function(ns){
ns.isAnyPrivacyRules = _isAny('account.PrivacyRules');
ns.isAnyAuthorizations = _isAny('account.Authorizations');
ns.isAnyPassword = _isAny('account.Password');
ns.isAnyPasswordSettings = _isAny('account.PasswordSettings');
ns.isAnyPasswordInputSettings = _isAny('account.PasswordInputSettings');
ns.isAnyTmpPassword = _isAny('account.TmpPassword');
ns.isAnyWebAuthorizations = _isAny('account.WebAuthorizations');
ns.isAnyAuthorizationForm = _isAny('account.AuthorizationForm');
ns.isAnySentEmailCode = _isAny('account.SentEmailCode');
ns.isAnyTakeout = _isAny('account.Takeout');
ns.isAnyWallPapers = _isAny('account.WallPapers');
ns.isAnyAutoDownloadSettings = _isAny('account.AutoDownloadSettings');
ns.isAnyThemes = _isAny('account.Themes');
ns.isAnyContentSettings = _isAny('account.ContentSettings');
ns.isAnyResetPasswordResult = _isAny('account.ResetPasswordResult');
ns.isAnyChatThemes = _isAny('account.ChatThemes');
ns.isAnySavedRingtones = _isAny('account.SavedRingtones');
ns.isAnySavedRingtone = _isAny('account.SavedRingtone');
ns.isAnyEmojiStatuses = _isAny('account.EmojiStatuses');
ns.isAnyEmailVerified = _isAny('account.EmailVerified');
ns.isAnyAutoSaveSettings = _isAny('account.AutoSaveSettings');
ns.isAnyConnectedBots = _isAny('account.ConnectedBots');
ns.isAnyBusinessChatLinks = _isAny('account.BusinessChatLinks');
ns.isAnyResolvedBusinessChatLinks = _isAny('account.ResolvedBusinessChatLinks');
ns.isAnyPaidMessagesRevenue = _isAny('account.PaidMessagesRevenue');
ns.isAnySavedMusicIds = _isAny('account.SavedMusicIds');
})(ns.account);
ns.channels = {};
(function(ns){
ns.isAnyChannelParticipants = _isAny('channels.ChannelParticipants');
ns.isAnyChannelParticipant = _isAny('channels.ChannelParticipant');
ns.isAnyAdminLogResults = _isAny('channels.AdminLogResults');
ns.isAnySendAsPeers = _isAny('channels.SendAsPeers');
ns.isAnySponsoredMessageReportResult = _isAny('channels.SponsoredMessageReportResult');
})(ns.channels);
ns.payments = {};
(function(ns){
ns.isAnyPaymentForm = _isAny('payments.PaymentForm');
ns.isAnyValidatedRequestedInfo = _isAny('payments.ValidatedRequestedInfo');
ns.isAnyPaymentResult = _isAny('payments.PaymentResult');
ns.isAnyPaymentReceipt = _isAny('payments.PaymentReceipt');
ns.isAnySavedInfo = _isAny('payments.SavedInfo');
ns.isAnyBankCardData = _isAny('payments.BankCardData');
ns.isAnyExportedInvoice = _isAny('payments.ExportedInvoice');
ns.isAnyCheckedGiftCode = _isAny('payments.CheckedGiftCode');
ns.isAnyGiveawayInfo = _isAny('payments.GiveawayInfo');
ns.isAnyStarsStatus = _isAny('payments.StarsStatus');
ns.isAnyStarsRevenueStats = _isAny('payments.StarsRevenueStats');
ns.isAnyStarsRevenueWithdrawalUrl = _isAny('payments.StarsRevenueWithdrawalUrl');
ns.isAnyStarsRevenueAdsAccountUrl = _isAny('payments.StarsRevenueAdsAccountUrl');
ns.isAnyStarGifts = _isAny('payments.StarGifts');
ns.isAnyConnectedStarRefBots = _isAny('payments.ConnectedStarRefBots');
ns.isAnySuggestedStarRefBots = _isAny('payments.SuggestedStarRefBots');
ns.isAnyStarGiftUpgradePreview = _isAny('payments.StarGiftUpgradePreview');
ns.isAnyUniqueStarGift = _isAny('payments.UniqueStarGift');
ns.isAnySavedStarGifts = _isAny('payments.SavedStarGifts');
ns.isAnyStarGiftWithdrawalUrl = _isAny('payments.StarGiftWithdrawalUrl');
ns.isAnyResaleStarGifts = _isAny('payments.ResaleStarGifts');
ns.isAnyStarGiftCollections = _isAny('payments.StarGiftCollections');
ns.isAnyUniqueStarGiftValueInfo = _isAny('payments.UniqueStarGiftValueInfo');
ns.isAnyCheckCanSendGiftResult = _isAny('payments.CheckCanSendGiftResult');
ns.isAnyStarGiftAuctionState = _isAny('payments.StarGiftAuctionState');
ns.isAnyStarGiftAuctionAcquiredGifts = _isAny('payments.StarGiftAuctionAcquiredGifts');
ns.isAnyStarGiftActiveAuctions = _isAny('payments.StarGiftActiveAuctions');
})(ns.payments);
ns.phone = {};
(function(ns){
ns.isAnyPhoneCall = _isAny('phone.PhoneCall');
ns.isAnyGroupCall = _isAny('phone.GroupCall');
ns.isAnyGroupParticipants = _isAny('phone.GroupParticipants');
ns.isAnyJoinAsPeers = _isAny('phone.JoinAsPeers');
ns.isAnyExportedGroupCallInvite = _isAny('phone.ExportedGroupCallInvite');
ns.isAnyGroupCallStreamChannels = _isAny('phone.GroupCallStreamChannels');
ns.isAnyGroupCallStreamRtmpUrl = _isAny('phone.GroupCallStreamRtmpUrl');
ns.isAnyGroupCallStars = _isAny('phone.GroupCallStars');
})(ns.phone);
ns.stats = {};
(function(ns){
ns.isAnyBroadcastStats = _isAny('stats.BroadcastStats');
ns.isAnyMegagroupStats = _isAny('stats.MegagroupStats');
ns.isAnyMessageStats = _isAny('stats.MessageStats');
ns.isAnyStoryStats = _isAny('stats.StoryStats');
ns.isAnyPublicForwards = _isAny('stats.PublicForwards');
})(ns.stats);
ns.stickers = {};
(function(ns){
ns.isAnySuggestedShortName = _isAny('stickers.SuggestedShortName');
})(ns.stickers);
ns.users = {};
(function(ns){
ns.isAnyUserFull = _isAny('users.UserFull');
ns.isAnyUsers = _isAny('users.Users');
ns.isAnySavedMusic = _isAny('users.SavedMusic');
})(ns.users);
ns.chatlists = {};
(function(ns){
ns.isAnyExportedChatlistInvite = _isAny('chatlists.ExportedChatlistInvite');
ns.isAnyExportedInvites = _isAny('chatlists.ExportedInvites');
ns.isAnyChatlistInvite = _isAny('chatlists.ChatlistInvite');
ns.isAnyChatlistUpdates = _isAny('chatlists.ChatlistUpdates');
})(ns.chatlists);
ns.bots = {};
(function(ns){
ns.isAnyBotInfo = _isAny('bots.BotInfo');
ns.isAnyPopularAppBots = _isAny('bots.PopularAppBots');
ns.isAnyPreviewInfo = _isAny('bots.PreviewInfo');
})(ns.bots);
ns.stories = {};
(function(ns){
ns.isAnyAllStories = _isAny('stories.AllStories');
ns.isAnyStories = _isAny('stories.Stories');
ns.isAnyStoryViewsList = _isAny('stories.StoryViewsList');
ns.isAnyStoryViews = _isAny('stories.StoryViews');
ns.isAnyPeerStories = _isAny('stories.PeerStories');
ns.isAnyStoryReactionsList = _isAny('stories.StoryReactionsList');
ns.isAnyFoundStories = _isAny('stories.FoundStories');
ns.isAnyCanSendStoryCount = _isAny('stories.CanSendStoryCount');
ns.isAnyAlbums = _isAny('stories.Albums');
})(ns.stories);
ns.premium = {};
(function(ns){
ns.isAnyBoostsList = _isAny('premium.BoostsList');
ns.isAnyMyBoosts = _isAny('premium.MyBoosts');
ns.isAnyBoostsStatus = _isAny('premium.BoostsStatus');
})(ns.premium);
ns.smsjobs = {};
(function(ns){
ns.isAnyEligibilityToJoin = _isAny('smsjobs.EligibilityToJoin');
ns.isAnyStatus = _isAny('smsjobs.Status');
})(ns.smsjobs);
ns.fragment = {};
(function(ns){
ns.isAnyCollectibleInfo = _isAny('fragment.CollectibleInfo');
})(ns.fragment);
ns.mtcute = {};
(function(ns){
ns.isAnyUpdate = _isAny('Update');
ns.isAnyInputPeer = _isAny('InputPeer');
})(ns.mtcute);
ns.langpack = {};
(function(ns){
})(ns.langpack);
ns.folders = {};
(function(ns){
})(ns.folders);
_types = JSON.parse('{"error":"Error","inputPeerPhotoFileLocationLegacy":"InputFileLocation","inputStickerSetThumbLegacy":"InputFileLocation","inputPeerEmpty":"InputPeer","inputPeerSelf":"InputPeer","inputPeerChat":"InputPeer","inputPeerUser":"InputPeer","inputPeerChannel":"InputPeer","inputPeerUserFromMessage":"InputPeer","inputPeerChannelFromMessage":"InputPeer","inputUserEmpty":"InputUser","inputUserSelf":"InputUser","inputUser":"InputUser","inputUserFromMessage":"InputUser","inputPhoneContact":"InputContact","inputFile":"InputFile","inputFileBig":"InputFile","inputFileStoryDocument":"InputFile","inputMediaEmpty":"InputMedia","inputMediaUploadedPhoto":"InputMedia","inputMediaPhoto":"InputMedia","inputMediaGeoPoint":"InputMedia","inputMediaContact":"InputMedia","inputMediaUploadedDocument":"InputMedia","inputMediaDocument":"InputMedia","inputMediaVenue":"InputMedia","inputMediaPhotoExternal":"InputMedia","inputMediaDocumentExternal":"InputMedia","inputMediaGame":"InputMedia","inputMediaInvoice":"InputMedia","inputMediaGeoLive":"InputMedia","inputMediaPoll":"InputMedia","inputMediaDice":"InputMedia","inputMediaStory":"InputMedia","inputMediaWebPage":"InputMedia","inputMediaPaidMedia":"InputMedia","inputMediaTodo":"InputMedia","inputChatPhotoEmpty":"InputChatPhoto","inputChatUploadedPhoto":"InputChatPhoto","inputChatPhoto":"InputChatPhoto","inputGeoPointEmpty":"InputGeoPoint","inputGeoPoint":"InputGeoPoint","inputPhotoEmpty":"InputPhoto","inputPhoto":"InputPhoto","inputFileLocation":"InputFileLocation","inputEncryptedFileLocation":"InputFileLocation","inputDocumentFileLocation":"InputFileLocation","inputSecureFileLocation":"InputFileLocation","inputTakeoutFileLocation":"InputFileLocation","inputPhotoFileLocation":"InputFileLocation","inputPhotoLegacyFileLocation":"InputFileLocation","inputPeerPhotoFileLocation":"InputFileLocation","inputStickerSetThumb":"InputFileLocation","inputGroupCallStream":"InputFileLocation","peerUser":"Peer","peerChat":"Peer","peerChannel":"Peer","storage.fileUnknown":"storage.FileType","storage.filePartial":"storage.FileType","storage.fileJpeg":"storage.FileType","storage.fileGif":"storage.FileType","storage.filePng":"storage.FileType","storage.filePdf":"storage.FileType","storage.fileMp3":"storage.FileType","storage.fileMov":"storage.FileType","storage.fileMp4":"storage.FileType","storage.fileWebp":"storage.FileType","userEmpty":"User","user":"User","userProfilePhotoEmpty":"UserProfilePhoto","userProfilePhoto":"UserProfilePhoto","userStatusEmpty":"UserStatus","userStatusOnline":"UserStatus","userStatusOffline":"UserStatus","userStatusRecently":"UserStatus","userStatusLastWeek":"UserStatus","userStatusLastMonth":"UserStatus","chatEmpty":"Chat","chat":"Chat","chatForbidden":"Chat","channel":"Chat","channelForbidden":"Chat","chatFull":"ChatFull","channelFull":"ChatFull","chatParticipant":"ChatParticipant","chatParticipantCreator":"ChatParticipant","chatParticipantAdmin":"ChatParticipant","chatParticipantsForbidden":"ChatParticipants","chatParticipants":"ChatParticipants","chatPhotoEmpty":"ChatPhoto","chatPhoto":"ChatPhoto","messageEmpty":"Message","message":"Message","messageService":"Message","messageMediaEmpty":"MessageMedia","messageMediaPhoto":"MessageMedia","messageMediaGeo":"MessageMedia","messageMediaContact":"MessageMedia","messageMediaUnsupported":"MessageMedia","messageMediaDocument":"MessageMedia","messageMediaWebPage":"MessageMedia","messageMediaVenue":"MessageMedia","messageMediaGame":"MessageMedia","messageMediaInvoice":"MessageMedia","messageMediaGeoLive":"MessageMedia","messageMediaPoll":"MessageMedia","messageMediaDice":"MessageMedia","messageMediaStory":"MessageMedia","messageMediaGiveaway":"MessageMedia","messageMediaGiveawayResults":"MessageMedia","messageMediaPaidMedia":"MessageMedia","messageMediaToDo":"MessageMedia","messageActionEmpty":"MessageAction","messageActionChatCreate":"MessageAction","messageActionChatEditTitle":"MessageAction","messageActionChatEditPhoto":"MessageAction","messageActionChatDeletePhoto":"MessageAction","messageActionChatAddUser":"MessageAction","messageActionChatDeleteUser":"MessageAction","messageActionChatJoinedByLink":"MessageAction","messageActionChannelCreate":"MessageAction","messageActionChatMigrateTo":"MessageAction","messageActionChannelMigrateFrom":"MessageAction","messageActionPinMessage":"MessageAction","messageActionHistoryClear":"MessageAction","messageActionGameScore":"MessageAction","messageActionPaymentSentMe":"MessageAction","messageActionPaymentSent":"MessageAction","messageActionPhoneCall":"MessageAction","messageActionScreenshotTaken":"MessageAction","messageActionCustomAction":"MessageAction","messageActionBotAllowed":"MessageAction","messageActionSecureValuesSentMe":"MessageAction","messageActionSecureValuesSent":"MessageAction","messageActionContactSignUp":"MessageAction","messageActionGeoProximityReached":"MessageAction","messageActionGroupCall":"MessageAction","messageActionInviteToGroupCall":"MessageAction","messageActionSetMessagesTTL":"MessageAction","messageActionGroupCallScheduled":"MessageAction","messageActionSetChatTheme":"MessageAction","messageActionChatJoinedByRequest":"MessageAction","messageActionWebViewDataSentMe":"MessageAction","messageActionWebViewDataSent":"MessageAction","messageActionGiftPremium":"MessageAction","messageActionTopicCreate":"MessageAction","messageActionTopicEdit":"MessageAction","messageActionSuggestProfilePhoto":"MessageAction","messageActionRequestedPeer":"MessageAction","messageActionSetChatWallPaper":"MessageAction","messageActionGiftCode":"MessageAction","messageActionGiveawayLaunch":"MessageAction","messageActionGiveawayResults":"MessageAction","messageActionBoostApply":"MessageAction","messageActionRequestedPeerSentMe":"MessageAction","messageActionPaymentRefunded":"MessageAction","messageActionGiftStars":"MessageAction","messageActionPrizeStars":"MessageAction","messageActionStarGift":"MessageAction","messageActionStarGiftUnique":"MessageAction","messageActionPaidMessagesRefunded":"MessageAction","messageActionPaidMessagesPrice":"MessageAction","messageActionConferenceCall":"MessageAction","messageActionTodoCompletions":"MessageAction","messageActionTodoAppendTasks":"MessageAction","messageActionSuggestedPostApproval":"MessageAction","messageActionSuggestedPostSuccess":"MessageAction","messageActionSuggestedPostRefund":"MessageAction","messageActionGiftTon":"MessageAction","messageActionSuggestBirthday":"MessageAction","dialog":"Dialog","dialogFolder":"Dialog","photoEmpty":"Photo","photo":"Photo","photoSizeEmpty":"PhotoSize","photoSize":"PhotoSize","photoCachedSize":"PhotoSize","photoStrippedSize":"PhotoSize","photoSizeProgressive":"PhotoSize","photoPathSize":"PhotoSize","geoPointEmpty":"GeoPoint","geoPoint":"GeoPoint","auth.sentCode":"auth.SentCode","auth.sentCodeSuccess":"auth.SentCode","auth.sentCodePaymentRequired":"auth.SentCode","auth.authorization":"auth.Authorization","auth.authorizationSignUpRequired":"auth.Authorization","auth.exportedAuthorization":"auth.ExportedAuthorization","inputNotifyPeer":"InputNotifyPeer","inputNotifyUsers":"InputNotifyPeer","inputNotifyChats":"InputNotifyPeer","inputNotifyBroadcasts":"InputNotifyPeer","inputNotifyForumTopic":"InputNotifyPeer","inputPeerNotifySettings":"InputPeerNotifySettings","peerNotifySettings":"PeerNotifySettings","peerSettings":"PeerSettings","wallPaper":"WallPaper","wallPaperNoFile":"WallPaper","inputReportReasonSpam":"ReportReason","inputReportReasonViolence":"ReportReason","inputReportReasonPornography":"ReportReason","inputReportReasonChildAbuse":"ReportReason","inputReportReasonOther":"ReportReason","inputReportReasonCopyright":"ReportReason","inputReportReasonGeoIrrelevant":"ReportReason","inputReportReasonFake":"ReportReason","inputReportReasonIllegalDrugs":"ReportReason","inputReportReasonPersonalDetails":"ReportReason","userFull":"UserFull","contact":"Contact","importedContact":"ImportedContact","contactStatus":"ContactStatus","contacts.contactsNotModified":"contacts.Contacts","contacts.contacts":"contacts.Contacts","contacts.importedContacts":"contacts.ImportedContacts","contacts.blocked":"contacts.Blocked","contacts.blockedSlice":"contacts.Blocked","messages.dialogs":"messages.Dialogs","messages.dialogsSlice":"messages.Dialogs","messages.dialogsNotModified":"messages.Dialogs","messages.messages":"messages.Messages","messages.messagesSlice":"messages.Messages","messages.channelMessages":"messages.Messages","messages.messagesNotModified":"messages.Messages","messages.chats":"messages.Chats","messages.chatsSlice":"messages.Chats","messages.chatFull":"messages.ChatFull","messages.affectedHistory":"messages.AffectedHistory","inputMessagesFilterEmpty":"MessagesFilter","inputMessagesFilterPhotos":"MessagesFilter","inputMessagesFilterVideo":"MessagesFilter","inputMessagesFilterPhotoVideo":"MessagesFilter","inputMessagesFilterDocument":"MessagesFilter","inputMessagesFilterUrl":"MessagesFilter","inputMessagesFilterGif":"MessagesFilter","inputMessagesFilterVoice":"MessagesFilter","inputMessagesFilterMusic":"MessagesFilter","inputMessagesFilterChatPhotos":"MessagesFilter","inputMessagesFilterPhoneCalls":"MessagesFilter","inputMessagesFilterRoundVoice":"MessagesFilter","inputMessagesFilterRoundVideo":"MessagesFilter","inputMessagesFilterMyMentions":"MessagesFilter","inputMessagesFilterGeo":"MessagesFilter","inputMessagesFilterContacts":"MessagesFilter","inputMessagesFilterPinned":"MessagesFilter","updateNewMessage":"Update","updateMessageID":"Update","updateDeleteMessages":"Update","updateUserTyping":"Update","updateChatUserTyping":"Update","updateChatParticipants":"Update","updateUserStatus":"Update","updateUserName":"Update","updateNewAuthorization":"Update","updateNewEncryptedMessage":"Update","updateEncryptedChatTyping":"Update","updateEncryption":"Update","updateEncryptedMessagesRead":"Update","updateChatParticipantAdd":"Update","updateChatParticipantDelete":"Update","updateDcOptions":"Update","updateNotifySettings":"Update","updateServiceNotification":"Update","updatePrivacy":"Update","updateUserPhone":"Update","updateReadHistoryInbox":"Update","updateReadHistoryOutbox":"Update","updateWebPage":"Update","updateReadMessagesContents":"Update","updateChannelTooLong":"Update","updateChannel":"Update","updateNewChannelMessage":"Update","updateReadChannelInbox":"Update","updateDeleteChannelMessages":"Update","updateChannelMessageViews":"Update","updateChatParticipantAdmin":"Update","updateNewStickerSet":"Update","updateStickerSetsOrder":"Update","updateStickerSets":"Update","updateSavedGifs":"Update","updateBotInlineQuery":"Update","updateBotInlineSend":"Update","updateEditChannelMessage":"Update","updateBotCallbackQuery":"Update","updateEditMessage":"Update","updateInlineBotCallbackQuery":"Update","updateReadChannelOutbox":"Update","updateDraftMessage":"Update","updateReadFeaturedStickers":"Update","updateRecentStickers":"Update","updateConfig":"Update","updatePtsChanged":"Update","updateChannelWebPage":"Update","updateDialogPinned":"Update","updatePinnedDialogs":"Update","updateBotWebhookJSON":"Update","updateBotWebhookJSONQuery":"Update","updateBotShippingQuery":"Update","updateBotPrecheckoutQuery":"Update","updatePhoneCall":"Update","updateLangPackTooLong":"Update","updateLangPack":"Update","updateFavedStickers":"Update","updateChannelReadMessagesContents":"Update","updateContactsReset":"Update","updateChannelAvailableMessages":"Update","updateDialogUnreadMark":"Update","updateMessagePoll":"Update","updateChatDefaultBannedRights":"Update","updateFolderPeers":"Update","updatePeerSettings":"Update","updatePeerLocated":"Update","updateNewScheduledMessage":"Update","updateDeleteScheduledMessages":"Update","updateTheme":"Update","updateGeoLiveViewed":"Update","updateLoginToken":"Update","updateMessagePollVote":"Update","updateDialogFilter":"Update","updateDialogFilterOrder":"Update","updateDialogFilters":"Update","updatePhoneCallSignalingData":"Update","updateChannelMessageForwards":"Update","updateReadChannelDiscussionInbox":"Update","updateReadChannelDiscussionOutbox":"Update","updatePeerBlocked":"Update","updateChannelUserTyping":"Update","updatePinnedMessages":"Update","updatePinnedChannelMessages":"Update","updateChat":"Update","updateGroupCallParticipants":"Update","updateGroupCall":"Update","updatePeerHistoryTTL":"Update","updateChatParticipant":"Update","updateChannelParticipant":"Update","updateBotStopped":"Update","updateGroupCallConnection":"Update","updateBotCommands":"Update","updatePendingJoinRequests":"Update","updateBotChatInviteRequester":"Update","updateMessageReactions":"Update","updateAttachMenuBots":"Update","updateWebViewResultSent":"Update","updateBotMenuButton":"Update","updateSavedRingtones":"Update","updateTranscribedAudio":"Update","updateReadFeaturedEmojiStickers":"Update","updateUserEmojiStatus":"Update","updateRecentEmojiStatuses":"Update","updateRecentReactions":"Update","updateMoveStickerSetToTop":"Update","updateMessageExtendedMedia":"Update","updateUser":"Update","updateAutoSaveSettings":"Update","updateStory":"Update","updateReadStories":"Update","updateStoryID":"Update","updateStoriesStealthMode":"Update","updateSentStoryReaction":"Update","updateBotChatBoost":"Update","updateChannelViewForumAsMessages":"Update","updatePeerWallpaper":"Update","updateBotMessageReaction":"Update","updateBotMessageReactions":"Update","updateSavedDialogPinned":"Update","updatePinnedSavedDialogs":"Update","updateSavedReactionTags":"Update","updateSmsJob":"Update","updateQuickReplies":"Update","updateNewQuickReply":"Update","updateDeleteQuickReply":"Update","updateQuickReplyMessage":"Update","updateDeleteQuickReplyMessages":"Update","updateBotBusinessConnect":"Update","updateBotNewBusinessMessage":"Update","updateBotEditBusinessMessage":"Update","updateBotDeleteBusinessMessage":"Update","updateNewStoryReaction":"Update","updateStarsBalance":"Update","updateBusinessBotCallbackQuery":"Update","updateStarsRevenueStatus":"Update","updateBotPurchasedPaidMedia":"Update","updatePaidReactionPrivacy":"Update","updateSentPhoneCode":"Update","updateGroupCallChainBlocks":"Update","updateReadMonoForumInbox":"Update","updateReadMonoForumOutbox":"Update","updateMonoForumNoPaidException":"Update","updateGroupCallMessage":"Update","updateGroupCallEncryptedMessage":"Update","updatePinnedForumTopic":"Update","updatePinnedForumTopics":"Update","updates.state":"updates.State","updates.differenceEmpty":"updates.Difference","updates.difference":"updates.Difference","updates.differenceSlice":"updates.Difference","updates.differenceTooLong":"updates.Difference","updatesTooLong":"Updates","updateShortMessage":"Updates","updateShortChatMessage":"Updates","updateShort":"Updates","updatesCombined":"Updates","updates":"Updates","updateShortSentMessage":"Updates","photos.photos":"photos.Photos","photos.photosSlice":"photos.Photos","photos.photo":"photos.Photo","upload.file":"upload.File","upload.fileCdnRedirect":"upload.File","dcOption":"DcOption","config":"Config","nearestDc":"NearestDc","help.appUpdate":"help.AppUpdate","help.noAppUpdate":"help.AppUpdate","help.inviteText":"help.InviteText","encryptedChatEmpty":"EncryptedChat","encryptedChatWaiting":"EncryptedChat","encryptedChatRequested":"EncryptedChat","encryptedChat":"EncryptedChat","encryptedChatDiscarded":"EncryptedChat","inputEncryptedChat":"InputEncryptedChat","encryptedFileEmpty":"EncryptedFile","encryptedFile":"EncryptedFile","inputEncryptedFileEmpty":"InputEncryptedFile","inputEncryptedFileUploaded":"InputEncryptedFile","inputEncryptedFile":"InputEncryptedFile","inputEncryptedFileBigUploaded":"InputEncryptedFile","encryptedMessage":"EncryptedMessage","encryptedMessageService":"EncryptedMessage","messages.dhConfigNotModified":"messages.DhConfig","messages.dhConfig":"messages.DhConfig","messages.sentEncryptedMessage":"messages.SentEncryptedMessage","messages.sentEncryptedFile":"messages.SentEncryptedMessage","inputDocumentEmpty":"InputDocument","inputDocument":"InputDocument","documentEmpty":"Document","document":"Document","help.support":"help.Support","notifyPeer":"NotifyPeer","notifyUsers":"NotifyPeer","notifyChats":"NotifyPeer","notifyBroadcasts":"NotifyPeer","notifyForumTopic":"NotifyPeer","sendMessageTypingAction":"SendMessageAction","sendMessageCancelAction":"SendMessageAction","sendMessageRecordVideoAction":"SendMessageAction","sendMessageUploadVideoAction":"SendMessageAction","sendMessageRecordAudioAction":"SendMessageAction","sendMessageUploadAudioAction":"SendMessageAction","sendMessageUploadPhotoAction":"SendMessageAction","sendMessageUploadDocumentAction":"SendMessageAction","sendMessageGeoLocationAction":"SendMessageAction","sendMessageChooseContactAction":"SendMessageAction","sendMessageGamePlayAction":"SendMessageAction","sendMessageRecordRoundAction":"SendMessageAction","sendMessageUploadRoundAction":"SendMessageAction","speakingInGroupCallAction":"SendMessageAction","sendMessageHistoryImportAction":"SendMessageAction","sendMessageChooseStickerAction":"SendMessageAction","sendMessageEmojiInteraction":"SendMessageAction","sendMessageEmojiInteractionSeen":"SendMessageAction","sendMessageTextDraftAction":"SendMessageAction","contacts.found":"contacts.Found","inputPrivacyKeyStatusTimestamp":"InputPrivacyKey","inputPrivacyKeyChatInvite":"InputPrivacyKey","inputPrivacyKeyPhoneCall":"InputPrivacyKey","inputPrivacyKeyPhoneP2P":"InputPrivacyKey","inputPrivacyKeyForwards":"InputPrivacyKey","inputPrivacyKeyProfilePhoto":"InputPrivacyKey","inputPrivacyKeyPhoneNumber":"InputPrivacyKey","inputPrivacyKeyAddedByPhone":"InputPrivacyKey","inputPrivacyKeyVoiceMessages":"InputPrivacyKey","inputPrivacyKeyAbout":"InputPrivacyKey","inputPrivacyKeyBirthday":"InputPrivacyKey","inputPrivacyKeyStarGiftsAutoSave":"InputPrivacyKey","inputPrivacyKeyNoPaidMessages":"InputPrivacyKey","privacyKeyStatusTimestamp":"PrivacyKey","privacyKeyChatInvite":"PrivacyKey","privacyKeyPhoneCall":"PrivacyKey","privacyKeyPhoneP2P":"PrivacyKey","privacyKeyForwards":"PrivacyKey","privacyKeyProfilePhoto":"PrivacyKey","privacyKeyPhoneNumber":"PrivacyKey","privacyKeyAddedByPhone":"PrivacyKey","privacyKeyVoiceMessages":"PrivacyKey","privacyKeyAbout":"PrivacyKey","privacyKeyBirthday":"PrivacyKey","privacyKeyStarGiftsAutoSave":"PrivacyKey","privacyKeyNoPaidMessages":"PrivacyKey","inputPrivacyValueAllowContacts":"InputPrivacyRule","inputPrivacyValueAllowAll":"InputPrivacyRule","inputPrivacyValueAllowUsers":"InputPrivacyRule","inputPrivacyValueDisallowContacts":"InputPrivacyRule","inputPrivacyValueDisallowAll":"InputPrivacyRule","inputPrivacyValueDisallowUsers":"InputPrivacyRule","inputPrivacyValueAllowChatParticipants":"InputPrivacyRule","inputPrivacyValueDisallowChatParticipants":"InputPrivacyRule","inputPrivacyValueAllowCloseFriends":"InputPrivacyRule","inputPrivacyValueAllowPremium":"InputPrivacyRule","inputPrivacyValueAllowBots":"InputPrivacyRule","inputPrivacyValueDisallowBots":"InputPrivacyRule","privacyValueAllowContacts":"PrivacyRule","privacyValueAllowAll":"PrivacyRule","privacyValueAllowUsers":"PrivacyRule","privacyValueDisallowContacts":"PrivacyRule","privacyValueDisallowAll":"PrivacyRule","privacyValueDisallowUsers":"PrivacyRule","privacyValueAllowChatParticipants":"PrivacyRule","privacyValueDisallowChatParticipants":"PrivacyRule","privacyValueAllowCloseFriends":"PrivacyRule","privacyValueAllowPremium":"PrivacyRule","privacyValueAllowBots":"PrivacyRule","privacyValueDisallowBots":"PrivacyRule","account.privacyRules":"account.PrivacyRules","accountDaysTTL":"AccountDaysTTL","documentAttributeImageSize":"DocumentAttribute","documentAttributeAnimated":"DocumentAttribute","documentAttributeSticker":"DocumentAttribute","documentAttributeVideo":"DocumentAttribute","documentAttributeAudio":"DocumentAttribute","documentAttributeFilename":"DocumentAttribute","documentAttributeHasStickers":"DocumentAttribute","documentAttributeCustomEmoji":"DocumentAttribute","messages.stickersNotModified":"messages.Stickers","messages.stickers":"messages.Stickers","stickerPack":"StickerPack","messages.allStickersNotModified":"messages.AllStickers","messages.allStickers":"messages.AllStickers","messages.affectedMessages":"messages.AffectedMessages","webPageEmpty":"WebPage","webPagePending":"WebPage","webPage":"WebPage","webPageNotModified":"WebPage","authorization":"Authorization","account.authorizations":"account.Authorizations","account.password":"account.Password","account.passwordSettings":"account.PasswordSettings","account.passwordInputSettings":"account.PasswordInputSettings","auth.passwordRecovery":"auth.PasswordRecovery","receivedNotifyMessage":"ReceivedNotifyMessage","chatInviteExported":"ExportedChatInvite","chatInvitePublicJoinRequests":"ExportedChatInvite","chatInviteAlready":"ChatInvite","chatInvite":"ChatInvite","chatInvitePeek":"ChatInvite","inputStickerSetEmpty":"InputStickerSet","inputStickerSetID":"InputStickerSet","inputStickerSetShortName":"InputStickerSet","inputStickerSetAnimatedEmoji":"InputStickerSet","inputStickerSetDice":"InputStickerSet","inputStickerSetAnimatedEmojiAnimations":"InputStickerSet","inputStickerSetPremiumGifts":"InputStickerSet","inputStickerSetEmojiGenericAnimations":"InputStickerSet","inputStickerSetEmojiDefaultStatuses":"InputStickerSet","inputStickerSetEmojiDefaultTopicIcons":"InputStickerSet","inputStickerSetEmojiChannelDefaultStatuses":"InputStickerSet","inputStickerSetTonGifts":"InputStickerSet","stickerSet":"StickerSet","messages.stickerSet":"messages.StickerSet","messages.stickerSetNotModified":"messages.StickerSet","botCommand":"BotCommand","botInfo":"BotInfo","keyboardButton":"KeyboardButton","keyboardButtonUrl":"KeyboardButton","keyboardButtonCallback":"KeyboardButton","keyboardButtonRequestPhone":"KeyboardButton","keyboardButtonRequestGeoLocation":"KeyboardButton","keyboardButtonSwitchInline":"KeyboardButton","keyboardButtonGame":"KeyboardButton","keyboardButtonBuy":"KeyboardButton","keyboardButtonUrlAuth":"KeyboardButton","inputKeyboardButtonUrlAuth":"KeyboardButton","keyboardButtonRequestPoll":"KeyboardButton","inputKeyboardButtonUserProfile":"KeyboardButton","keyboardButtonUserProfile":"KeyboardButton","keyboardButtonWebView":"KeyboardButton","keyboardButtonSimpleWebView":"KeyboardButton","keyboardButtonRequestPeer":"KeyboardButton","inputKeyboardButtonRequestPeer":"KeyboardButton","keyboardButtonCopy":"KeyboardButton","keyboardButtonRow":"KeyboardButtonRow","replyKeyboardHide":"ReplyMarkup","replyKeyboardForceReply":"ReplyMarkup","replyKeyboardMarkup":"ReplyMarkup","replyInlineMarkup":"ReplyMarkup","messageEntityUnknown":"MessageEntity","messageEntityMention":"MessageEntity","messageEntityHashtag":"MessageEntity","messageEntityBotCommand":"MessageEntity","messageEntityUrl":"MessageEntity","messageEntityEmail":"MessageEntity","messageEntityBold":"MessageEntity","messageEntityItalic":"MessageEntity","messageEntityCode":"MessageEntity","messageEntityPre":"MessageEntity","messageEntityTextUrl":"MessageEntity","messageEntityMentionName":"MessageEntity","inputMessageEntityMentionName":"MessageEntity","messageEntityPhone":"MessageEntity","messageEntityCashtag":"MessageEntity","messageEntityUnderline":"MessageEntity","messageEntityStrike":"MessageEntity","messageEntityBankCard":"MessageEntity","messageEntitySpoiler":"MessageEntity","messageEntityCustomEmoji":"MessageEntity","messageEntityBlockquote":"MessageEntity","inputChannelEmpty":"InputChannel","inputChannel":"InputChannel","inputChannelFromMessage":"InputChannel","contacts.resolvedPeer":"contacts.ResolvedPeer","messageRange":"MessageRange","updates.channelDifferenceEmpty":"updates.ChannelDifference","updates.channelDifferenceTooLong":"updates.ChannelDifference","updates.channelDifference":"updates.ChannelDifference","channelMessagesFilterEmpty":"ChannelMessagesFilter","channelMessagesFilter":"ChannelMessagesFilter","channelParticipant":"ChannelParticipant","channelParticipantSelf":"ChannelParticipant","channelParticipantCreator":"ChannelParticipant","channelParticipantAdmin":"ChannelParticipant","channelParticipantBanned":"ChannelParticipant","channelParticipantLeft":"ChannelParticipant","channelParticipantsRecent":"ChannelParticipantsFilter","channelParticipantsAdmins":"ChannelParticipantsFilter","channelParticipantsKicked":"ChannelParticipantsFilter","channelParticipantsBots":"ChannelParticipantsFilter","channelParticipantsBanned":"ChannelParticipantsFilter","channelParticipantsSearch":"ChannelParticipantsFilter","channelParticipantsContacts":"ChannelParticipantsFilter","channelParticipantsMentions":"ChannelParticipantsFilter","channels.channelParticipants":"channels.ChannelParticipants","channels.channelParticipantsNotModified":"channels.ChannelParticipants","channels.channelParticipant":"channels.ChannelParticipant","help.termsOfService":"help.TermsOfService","messages.savedGifsNotModified":"messages.SavedGifs","messages.savedGifs":"messages.SavedGifs","inputBotInlineMessageMediaAuto":"InputBotInlineMessage","inputBotInlineMessageText":"InputBotInlineMessage","inputBotInlineMessageMediaGeo":"InputBotInlineMessage","inputBotInlineMessageMediaVenue":"InputBotInlineMessage","inputBotInlineMessageMediaContact":"InputBotInlineMessage","inputBotInlineMessageGame":"InputBotInlineMessage","inputBotInlineMessageMediaInvoice":"InputBotInlineMessage","inputBotInlineMessageMediaWebPage":"InputBotInlineMessage","inputBotInlineResult":"InputBotInlineResult","inputBotInlineResultPhoto":"InputBotInlineResult","inputBotInlineResultDocument":"InputBotInlineResult","inputBotInlineResultGame":"InputBotInlineResult","botInlineMessageMediaAuto":"BotInlineMessage","botInlineMessageText":"BotInlineMessage","botInlineMessageMediaGeo":"BotInlineMessage","botInlineMessageMediaVenue":"BotInlineMessage","botInlineMessageMediaContact":"BotInlineMessage","botInlineMessageMediaInvoice":"BotInlineMessage","botInlineMessageMediaWebPage":"BotInlineMessage","botInlineResult":"BotInlineResult","botInlineMediaResult":"BotInlineResult","messages.botResults":"messages.BotResults","exportedMessageLink":"ExportedMessageLink","messageFwdHeader":"MessageFwdHeader","auth.codeTypeSms":"auth.CodeType","auth.codeTypeCall":"auth.CodeType","auth.codeTypeFlashCall":"auth.CodeType","auth.codeTypeMissedCall":"auth.CodeType","auth.codeTypeFragmentSms":"auth.CodeType","auth.sentCodeTypeApp":"auth.SentCodeType","auth.sentCodeTypeSms":"auth.SentCodeType","auth.sentCodeTypeCall":"auth.SentCodeType","auth.sentCodeTypeFlashCall":"auth.SentCodeType","auth.sentCodeTypeMissedCall":"auth.SentCodeType","auth.sentCodeTypeEmailCode":"auth.SentCodeType","auth.sentCodeTypeSetUpEmailRequired":"auth.SentCodeType","auth.sentCodeTypeFragmentSms":"auth.SentCodeType","auth.sentCodeTypeFirebaseSms":"auth.SentCodeType","auth.sentCodeTypeSmsWord":"auth.SentCodeType","auth.sentCodeTypeSmsPhrase":"auth.SentCodeType","messages.botCallbackAnswer":"messages.BotCallbackAnswer","messages.messageEditData":"messages.MessageEditData","inputBotInlineMessageID":"InputBotInlineMessageID","inputBotInlineMessageID64":"InputBotInlineMessageID","inlineBotSwitchPM":"InlineBotSwitchPM","messages.peerDialogs":"messages.PeerDialogs","topPeer":"TopPeer","topPeerCategoryBotsPM":"TopPeerCategory","topPeerCategoryBotsInline":"TopPeerCategory","topPeerCategoryCorrespondents":"TopPeerCategory","topPeerCategoryGroups":"TopPeerCategory","topPeerCategoryChannels":"TopPeerCategory","topPeerCategoryPhoneCalls":"TopPeerCategory","topPeerCategoryForwardUsers":"TopPeerCategory","topPeerCategoryForwardChats":"TopPeerCategory","topPeerCategoryBotsApp":"TopPeerCategory","topPeerCategoryPeers":"TopPeerCategoryPeers","contacts.topPeersNotModified":"contacts.TopPeers","contacts.topPeers":"contacts.TopPeers","contacts.topPeersDisabled":"contacts.TopPeers","draftMessageEmpty":"DraftMessage","draftMessage":"DraftMessage","messages.featuredStickersNotModified":"messages.FeaturedStickers","messages.featuredStickers":"messages.FeaturedStickers","messages.recentStickersNotModified":"messages.RecentStickers","messages.recentStickers":"messages.RecentStickers","messages.archivedStickers":"messages.ArchivedStickers","messages.stickerSetInstallResultSuccess":"messages.StickerSetInstallResult","messages.stickerSetInstallResultArchive":"messages.StickerSetInstallResult","stickerSetCovered":"StickerSetCovered","stickerSetMultiCovered":"StickerSetCovered","stickerSetFullCovered":"StickerSetCovered","stickerSetNoCovered":"StickerSetCovered","maskCoords":"MaskCoords","inputStickeredMediaPhoto":"InputStickeredMedia","inputStickeredMediaDocument":"InputStickeredMedia","game":"Game","inputGameID":"InputGame","inputGameShortName":"InputGame","highScore":"HighScore","messages.highScores":"messages.HighScores","textEmpty":"RichText","textPlain":"RichText","textBold":"RichText","textItalic":"RichText","textUnderline":"RichText","textStrike":"RichText","textFixed":"RichText","textUrl":"RichText","textEmail":"RichText","textConcat":"RichText","textSubscript":"RichText","textSuperscript":"RichText","textMarked":"RichText","textPhone":"RichText","textImage":"RichText","textAnchor":"RichText","pageBlockUnsupported":"PageBlock","pageBlockTitle":"PageBlock","pageBlockSubtitle":"PageBlock","pageBlockAuthorDate":"PageBlock","pageBlockHeader":"PageBlock","pageBlockSubheader":"PageBlock","pageBlockParagraph":"PageBlock","pageBlockPreformatted":"PageBlock","pageBlockFooter":"PageBlock","pageBlockDivider":"PageBlock","pageBlockAnchor":"PageBlock","pageBlockList":"PageBlock","pageBlockBlockquote":"PageBlock","pageBlockPullquote":"PageBlock","pageBlockPhoto":"PageBlock","pageBlockVideo":"PageBlock","pageBlockCover":"PageBlock","pageBlockEmbed":"PageBlock","pageBlockEmbedPost":"PageBlock","pageBlockCollage":"PageBlock","pageBlockSlideshow":"PageBlock","pageBlockChannel":"PageBlock","pageBlockAudio":"PageBlock","pageBlockKicker":"PageBlock","pageBlockTable":"PageBlock","pageBlockOrderedList":"PageBlock","pageBlockDetails":"PageBlock","pageBlockRelatedArticles":"PageBlock","pageBlockMap":"PageBlock","phoneCallDiscardReasonMissed":"PhoneCallDiscardReason","phoneCallDiscardReasonDisconnect":"PhoneCallDiscardReason","phoneCallDiscardReasonHangup":"PhoneCallDiscardReason","phoneCallDiscardReasonBusy":"PhoneCallDiscardReason","phoneCallDiscardReasonMigrateConferenceCall":"PhoneCallDiscardReason","dataJSON":"DataJSON","labeledPrice":"LabeledPrice","invoice":"Invoice","paymentCharge":"PaymentCharge","postAddress":"PostAddress","paymentRequestedInfo":"PaymentRequestedInfo","paymentSavedCredentialsCard":"PaymentSavedCredentials","webDocument":"WebDocument","webDocumentNoProxy":"WebDocument","inputWebDocument":"InputWebDocument","inputWebFileLocation":"InputWebFileLocation","inputWebFileGeoPointLocation":"InputWebFileLocation","inputWebFileAudioAlbumThumbLocation":"InputWebFileLocation","upload.webFile":"upload.WebFile","payments.paymentForm":"payments.PaymentForm","payments.paymentFormStars":"payments.PaymentForm","payments.paymentFormStarGift":"payments.PaymentForm","payments.validatedRequestedInfo":"payments.ValidatedRequestedInfo","payments.paymentResult":"payments.PaymentResult","payments.paymentVerificationNeeded":"payments.PaymentResult","payments.paymentReceipt":"payments.PaymentReceipt","payments.paymentReceiptStars":"payments.PaymentReceipt","payments.savedInfo":"payments.SavedInfo","inputPaymentCredentialsSaved":"InputPaymentCredentials","inputPaymentCredentials":"InputPaymentCredentials","inputPaymentCredentialsApplePay":"InputPaymentCredentials","inputPaymentCredentialsGooglePay":"InputPaymentCredentials","account.tmpPassword":"account.TmpPassword","shippingOption":"ShippingOption","inputStickerSetItem":"InputStickerSetItem","inputPhoneCall":"InputPhoneCall","phoneCallEmpty":"PhoneCall","phoneCallWaiting":"PhoneCall","phoneCallRequested":"PhoneCall","phoneCallAccepted":"PhoneCall","phoneCall":"PhoneCall","phoneCallDiscarded":"PhoneCall","phoneConnection":"PhoneConnection","phoneConnectionWebrtc":"PhoneConnection","phoneCallProtocol":"PhoneCallProtocol","phone.phoneCall":"phone.PhoneCall","upload.cdnFileReuploadNeeded":"upload.CdnFile","upload.cdnFile":"upload.CdnFile","cdnPublicKey":"CdnPublicKey","cdnConfig":"CdnConfig","langPackString":"LangPackString","langPackStringPluralized":"LangPackString","langPackStringDeleted":"LangPackString","langPackDifference":"LangPackDifference","langPackLanguage":"LangPackLanguage","channelAdminLogEventActionChangeTitle":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeAbout":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeUsername":"ChannelAdminLogEventAction","channelAdminLogEventActionChangePhoto":"ChannelAdminLogEventAction","channelAdminLogEventActionToggleInvites":"ChannelAdminLogEventAction","channelAdminLogEventActionToggleSignatures":"ChannelAdminLogEventAction","channelAdminLogEventActionUpdatePinned":"ChannelAdminLogEventAction","channelAdminLogEventActionEditMessage":"ChannelAdminLogEventAction","channelAdminLogEventActionDeleteMessage":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantJoin":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantLeave":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantInvite":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantToggleBan":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantToggleAdmin":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeStickerSet":"ChannelAdminLogEventAction","channelAdminLogEventActionTogglePreHistoryHidden":"ChannelAdminLogEventAction","channelAdminLogEventActionDefaultBannedRights":"ChannelAdminLogEventAction","channelAdminLogEventActionStopPoll":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeLinkedChat":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeLocation":"ChannelAdminLogEventAction","channelAdminLogEventActionToggleSlowMode":"ChannelAdminLogEventAction","channelAdminLogEventActionStartGroupCall":"ChannelAdminLogEventAction","channelAdminLogEventActionDiscardGroupCall":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantMute":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantUnmute":"ChannelAdminLogEventAction","channelAdminLogEventActionToggleGroupCallSetting":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantJoinByInvite":"ChannelAdminLogEventAction","channelAdminLogEventActionExportedInviteDelete":"ChannelAdminLogEventAction","channelAdminLogEventActionExportedInviteRevoke":"ChannelAdminLogEventAction","channelAdminLogEventActionExportedInviteEdit":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantVolume":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeHistoryTTL":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantJoinByRequest":"ChannelAdminLogEventAction","channelAdminLogEventActionToggleNoForwards":"ChannelAdminLogEventAction","channelAdminLogEventActionSendMessage":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeAvailableReactions":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeUsernames":"ChannelAdminLogEventAction","channelAdminLogEventActionToggleForum":"ChannelAdminLogEventAction","channelAdminLogEventActionCreateTopic":"ChannelAdminLogEventAction","channelAdminLogEventActionEditTopic":"ChannelAdminLogEventAction","channelAdminLogEventActionDeleteTopic":"ChannelAdminLogEventAction","channelAdminLogEventActionPinTopic":"ChannelAdminLogEventAction","channelAdminLogEventActionToggleAntiSpam":"ChannelAdminLogEventAction","channelAdminLogEventActionChangePeerColor":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeProfilePeerColor":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeWallpaper":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeEmojiStatus":"ChannelAdminLogEventAction","channelAdminLogEventActionChangeEmojiStickerSet":"ChannelAdminLogEventAction","channelAdminLogEventActionToggleSignatureProfiles":"ChannelAdminLogEventAction","channelAdminLogEventActionParticipantSubExtend":"ChannelAdminLogEventAction","channelAdminLogEventActionToggleAutotranslation":"ChannelAdminLogEventAction","channelAdminLogEvent":"ChannelAdminLogEvent","channels.adminLogResults":"channels.AdminLogResults","channelAdminLogEventsFilter":"ChannelAdminLogEventsFilter","popularContact":"PopularContact","messages.favedStickersNotModified":"messages.FavedStickers","messages.favedStickers":"messages.FavedStickers","recentMeUrlUnknown":"RecentMeUrl","recentMeUrlUser":"RecentMeUrl","recentMeUrlChat":"RecentMeUrl","recentMeUrlChatInvite":"RecentMeUrl","recentMeUrlStickerSet":"RecentMeUrl","help.recentMeUrls":"help.RecentMeUrls","inputSingleMedia":"InputSingleMedia","webAuthorization":"WebAuthorization","account.webAuthorizations":"account.WebAuthorizations","inputMessageID":"InputMessage","inputMessageReplyTo":"InputMessage","inputMessagePinned":"InputMessage","inputMessageCallbackQuery":"InputMessage","inputDialogPeer":"InputDialogPeer","inputDialogPeerFolder":"InputDialogPeer","dialogPeer":"DialogPeer","dialogPeerFolder":"DialogPeer","messages.foundStickerSetsNotModified":"messages.FoundStickerSets","messages.foundStickerSets":"messages.FoundStickerSets","fileHash":"FileHash","inputClientProxy":"InputClientProxy","help.termsOfServiceUpdateEmpty":"help.TermsOfServiceUpdate","help.termsOfServiceUpdate":"help.TermsOfServiceUpdate","inputSecureFileUploaded":"InputSecureFile","inputSecureFile":"InputSecureFile","secureFileEmpty":"SecureFile","secureFile":"SecureFile","secureData":"SecureData","securePlainPhone":"SecurePlainData","securePlainEmail":"SecurePlainData","secureValueTypePersonalDetails":"SecureValueType","secureValueTypePassport":"SecureValueType","secureValueTypeDriverLicense":"SecureValueType","secureValueTypeIdentityCard":"SecureValueType","secureValueTypeInternalPassport":"SecureValueType","secureValueTypeAddress":"SecureValueType","secureValueTypeUtilityBill":"SecureValueType","secureValueTypeBankStatement":"SecureValueType","secureValueTypeRentalAgreement":"SecureValueType","secureValueTypePassportRegistration":"SecureValueType","secureValueTypeTemporaryRegistration":"SecureValueType","secureValueTypePhone":"SecureValueType","secureValueTypeEmail":"SecureValueType","secureValue":"SecureValue","inputSecureValue":"InputSecureValue","secureValueHash":"SecureValueHash","secureValueErrorData":"SecureValueError","secureValueErrorFrontSide":"SecureValueError","secureValueErrorReverseSide":"SecureValueError","secureValueErrorSelfie":"SecureValueError","secureValueErrorFile":"SecureValueError","secureValueErrorFiles":"SecureValueError","secureValueError":"SecureValueError","secureValueErrorTranslationFile":"SecureValueError","secureValueErrorTranslationFiles":"SecureValueError","secureCredentialsEncrypted":"SecureCredentialsEncrypted","account.authorizationForm":"account.AuthorizationForm","account.sentEmailCode":"account.SentEmailCode","help.deepLinkInfoEmpty":"help.DeepLinkInfo","help.deepLinkInfo":"help.DeepLinkInfo","savedPhoneContact":"SavedContact","account.takeout":"account.Takeout","passwordKdfAlgoUnknown":"PasswordKdfAlgo","passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow":"PasswordKdfAlgo","securePasswordKdfAlgoUnknown":"SecurePasswordKdfAlgo","securePasswordKdfAlgoPBKDF2HMACSHA512iter100000":"SecurePasswordKdfAlgo","securePasswordKdfAlgoSHA512":"SecurePasswordKdfAlgo","secureSecretSettings":"SecureSecretSettings","inputCheckPasswordEmpty":"InputCheckPasswordSRP","inputCheckPasswordSRP":"InputCheckPasswordSRP","secureRequiredType":"SecureRequiredType","secureRequiredTypeOneOf":"SecureRequiredType","help.passportConfigNotModified":"help.PassportConfig","help.passportConfig":"help.PassportConfig","inputAppEvent":"InputAppEvent","jsonObjectValue":"JSONObjectValue","jsonNull":"JSONValue","jsonBool":"JSONValue","jsonNumber":"JSONValue","jsonString":"JSONValue","jsonArray":"JSONValue","jsonObject":"JSONValue","pageTableCell":"PageTableCell","pageTableRow":"PageTableRow","pageCaption":"PageCaption","pageListItemText":"PageListItem","pageListItemBlocks":"PageListItem","pageListOrderedItemText":"PageListOrderedItem","pageListOrderedItemBlocks":"PageListOrderedItem","pageRelatedArticle":"PageRelatedArticle","page":"Page","help.supportName":"help.SupportName","help.userInfoEmpty":"help.UserInfo","help.userInfo":"help.UserInfo","pollAnswer":"PollAnswer","poll":"Poll","pollAnswerVoters":"PollAnswerVoters","pollResults":"PollResults","chatOnlines":"ChatOnlines","statsURL":"StatsURL","chatAdminRights":"ChatAdminRights","chatBannedRights":"ChatBannedRights","inputWallPaper":"InputWallPaper","inputWallPaperSlug":"InputWallPaper","inputWallPaperNoFile":"InputWallPaper","account.wallPapersNotModified":"account.WallPapers","account.wallPapers":"account.WallPapers","codeSettings":"CodeSettings","wallPaperSettings":"WallPaperSettings","autoDownloadSettings":"AutoDownloadSettings","account.autoDownloadSettings":"account.AutoDownloadSettings","emojiKeyword":"EmojiKeyword","emojiKeywordDeleted":"EmojiKeyword","emojiKeywordsDifference":"EmojiKeywordsDifference","emojiURL":"EmojiURL","emojiLanguage":"EmojiLanguage","folder":"Folder","inputFolderPeer":"InputFolderPeer","folderPeer":"FolderPeer","messages.searchCounter":"messages.SearchCounter","urlAuthResultRequest":"UrlAuthResult","urlAuthResultAccepted":"UrlAuthResult","urlAuthResultDefault":"UrlAuthResult","channelLocationEmpty":"ChannelLocation","channelLocation":"ChannelLocation","peerLocated":"PeerLocated","peerSelfLocated":"PeerLocated","restrictionReason":"RestrictionReason","inputTheme":"InputTheme","inputThemeSlug":"InputTheme","theme":"Theme","account.themesNotModified":"account.Themes","account.themes":"account.Themes","auth.loginToken":"auth.LoginToken","auth.loginTokenMigrateTo":"auth.LoginToken","auth.loginTokenSuccess":"auth.LoginToken","account.contentSettings":"account.ContentSettings","messages.inactiveChats":"messages.InactiveChats","baseThemeClassic":"BaseTheme","baseThemeDay":"BaseTheme","baseThemeNight":"BaseTheme","baseThemeTinted":"BaseTheme","baseThemeArctic":"BaseTheme","inputThemeSettings":"InputThemeSettings","themeSettings":"ThemeSettings","webPageAttributeTheme":"WebPageAttribute","webPageAttributeStory":"WebPageAttribute","webPageAttributeStickerSet":"WebPageAttribute","webPageAttributeUniqueStarGift":"WebPageAttribute","webPageAttributeStarGiftCollection":"WebPageAttribute","messages.votesList":"messages.VotesList","bankCardOpenUrl":"BankCardOpenUrl","payments.bankCardData":"payments.BankCardData","dialogFilter":"DialogFilter","dialogFilterDefault":"DialogFilter","dialogFilterChatlist":"DialogFilter","dialogFilterSuggested":"DialogFilterSuggested","statsDateRangeDays":"StatsDateRangeDays","statsAbsValueAndPrev":"StatsAbsValueAndPrev","statsPercentValue":"StatsPercentValue","statsGraphAsync":"StatsGraph","statsGraphError":"StatsGraph","statsGraph":"StatsGraph","stats.broadcastStats":"stats.BroadcastStats","help.promoDataEmpty":"help.PromoData","help.promoData":"help.PromoData","videoSize":"VideoSize","videoSizeEmojiMarkup":"VideoSize","videoSizeStickerMarkup":"VideoSize","statsGroupTopPoster":"StatsGroupTopPoster","statsGroupTopAdmin":"StatsGroupTopAdmin","statsGroupTopInviter":"StatsGroupTopInviter","stats.megagroupStats":"stats.MegagroupStats","globalPrivacySettings":"GlobalPrivacySettings","help.countryCode":"help.CountryCode","help.country":"help.Country","help.countriesListNotModified":"help.CountriesList","help.countriesList":"help.CountriesList","messageViews":"MessageViews","messages.messageViews":"messages.MessageViews","messages.discussionMessage":"messages.DiscussionMessage","messageReplyHeader":"MessageReplyHeader","messageReplyStoryHeader":"MessageReplyHeader","messageReplies":"MessageReplies","peerBlocked":"PeerBlocked","stats.messageStats":"stats.MessageStats","groupCallDiscarded":"GroupCall","groupCall":"GroupCall","inputGroupCall":"InputGroupCall","inputGroupCallSlug":"InputGroupCall","inputGroupCallInviteMessage":"InputGroupCall","groupCallParticipant":"GroupCallParticipant","phone.groupCall":"phone.GroupCall","phone.groupParticipants":"phone.GroupParticipants","inlineQueryPeerTypeSameBotPM":"InlineQueryPeerType","inlineQueryPeerTypePM":"InlineQueryPeerType","inlineQueryPeerTypeChat":"InlineQueryPeerType","inlineQueryPeerTypeMegagroup":"InlineQueryPeerType","inlineQueryPeerTypeBroadcast":"InlineQueryPeerType","inlineQueryPeerTypeBotPM":"InlineQueryPeerType","messages.historyImport":"messages.HistoryImport","messages.historyImportParsed":"messages.HistoryImportParsed","messages.affectedFoundMessages":"messages.AffectedFoundMessages","chatInviteImporter":"ChatInviteImporter","messages.exportedChatInvites":"messages.ExportedChatInvites","messages.exportedChatInvite":"messages.ExportedChatInvite","messages.exportedChatInviteReplaced":"messages.ExportedChatInvite","messages.chatInviteImporters":"messages.ChatInviteImporters","chatAdminWithInvites":"ChatAdminWithInvites","messages.chatAdminsWithInvites":"messages.ChatAdminsWithInvites","messages.checkedHistoryImportPeer":"messages.CheckedHistoryImportPeer","phone.joinAsPeers":"phone.JoinAsPeers","phone.exportedGroupCallInvite":"phone.ExportedGroupCallInvite","groupCallParticipantVideoSourceGroup":"GroupCallParticipantVideoSourceGroup","groupCallParticipantVideo":"GroupCallParticipantVideo","stickers.suggestedShortName":"stickers.SuggestedShortName","botCommandScopeDefault":"BotCommandScope","botCommandScopeUsers":"BotCommandScope","botCommandScopeChats":"BotCommandScope","botCommandScopeChatAdmins":"BotCommandScope","botCommandScopePeer":"BotCommandScope","botCommandScopePeerAdmins":"BotCommandScope","botCommandScopePeerUser":"BotCommandScope","account.resetPasswordFailedWait":"account.ResetPasswordResult","account.resetPasswordRequestedWait":"account.ResetPasswordResult","account.resetPasswordOk":"account.ResetPasswordResult","chatTheme":"ChatTheme","chatThemeUniqueGift":"ChatTheme","account.chatThemesNotModified":"account.ChatThemes","account.chatThemes":"account.ChatThemes","sponsoredMessage":"SponsoredMessage","messages.sponsoredMessages":"messages.SponsoredMessages","messages.sponsoredMessagesEmpty":"messages.SponsoredMessages","searchResultsCalendarPeriod":"SearchResultsCalendarPeriod","messages.searchResultsCalendar":"messages.SearchResultsCalendar","searchResultPosition":"SearchResultsPosition","messages.searchResultsPositions":"messages.SearchResultsPositions","channels.sendAsPeers":"channels.SendAsPeers","users.userFull":"users.UserFull","messages.peerSettings":"messages.PeerSettings","auth.loggedOut":"auth.LoggedOut","reactionCount":"ReactionCount","messageReactions":"MessageReactions","messages.messageReactionsList":"messages.MessageReactionsList","availableReaction":"AvailableReaction","messages.availableReactionsNotModified":"messages.AvailableReactions","messages.availableReactions":"messages.AvailableReactions","messagePeerReaction":"MessagePeerReaction","groupCallStreamChannel":"GroupCallStreamChannel","phone.groupCallStreamChannels":"phone.GroupCallStreamChannels","phone.groupCallStreamRtmpUrl":"phone.GroupCallStreamRtmpUrl","attachMenuBotIconColor":"AttachMenuBotIconColor","attachMenuBotIcon":"AttachMenuBotIcon","attachMenuBot":"AttachMenuBot","attachMenuBotsNotModified":"AttachMenuBots","attachMenuBots":"AttachMenuBots","attachMenuBotsBot":"AttachMenuBotsBot","webViewResultUrl":"WebViewResult","webViewMessageSent":"WebViewMessageSent","botMenuButtonDefault":"BotMenuButton","botMenuButtonCommands":"BotMenuButton","botMenuButton":"BotMenuButton","account.savedRingtonesNotModified":"account.SavedRingtones","account.savedRingtones":"account.SavedRingtones","notificationSoundDefault":"NotificationSound","notificationSoundNone":"NotificationSound","notificationSoundLocal":"NotificationSound","notificationSoundRingtone":"NotificationSound","account.savedRingtone":"account.SavedRingtone","account.savedRingtoneConverted":"account.SavedRingtone","attachMenuPeerTypeSameBotPM":"AttachMenuPeerType","attachMenuPeerTypeBotPM":"AttachMenuPeerType","attachMenuPeerTypePM":"AttachMenuPeerType","attachMenuPeerTypeChat":"AttachMenuPeerType","attachMenuPeerTypeBroadcast":"AttachMenuPeerType","inputInvoiceMessage":"InputInvoice","inputInvoiceSlug":"InputInvoice","inputInvoicePremiumGiftCode":"InputInvoice","inputInvoiceStars":"InputInvoice","inputInvoiceChatInviteSubscription":"InputInvoice","inputInvoiceStarGift":"InputInvoice","inputInvoiceStarGiftUpgrade":"InputInvoice","inputInvoiceStarGiftTransfer":"InputInvoice","inputInvoicePremiumGiftStars":"InputInvoice","inputInvoiceBusinessBotTransferStars":"InputInvoice","inputInvoiceStarGiftResale":"InputInvoice","inputInvoiceStarGiftPrepaidUpgrade":"InputInvoice","inputInvoicePremiumAuthCode":"InputInvoice","inputInvoiceStarGiftDropOriginalDetails":"InputInvoice","payments.exportedInvoice":"payments.ExportedInvoice","messages.transcribedAudio":"messages.TranscribedAudio","help.premiumPromo":"help.PremiumPromo","inputStorePaymentPremiumSubscription":"InputStorePaymentPurpose","inputStorePaymentGiftPremium":"InputStorePaymentPurpose","inputStorePaymentPremiumGiftCode":"InputStorePaymentPurpose","inputStorePaymentPremiumGiveaway":"InputStorePaymentPurpose","inputStorePaymentStarsTopup":"InputStorePaymentPurpose","inputStorePaymentStarsGift":"InputStorePaymentPurpose","inputStorePaymentStarsGiveaway":"InputStorePaymentPurpose","inputStorePaymentAuthCode":"InputStorePaymentPurpose","paymentFormMethod":"PaymentFormMethod","emojiStatusEmpty":"EmojiStatus","emojiStatus":"EmojiStatus","emojiStatusCollectible":"EmojiStatus","inputEmojiStatusCollectible":"EmojiStatus","account.emojiStatusesNotModified":"account.EmojiStatuses","account.emojiStatuses":"account.EmojiStatuses","reactionEmpty":"Reaction","reactionEmoji":"Reaction","reactionCustomEmoji":"Reaction","reactionPaid":"Reaction","chatReactionsNone":"ChatReactions","chatReactionsAll":"ChatReactions","chatReactionsSome":"ChatReactions","messages.reactionsNotModified":"messages.Reactions","messages.reactions":"messages.Reactions","emailVerifyPurposeLoginSetup":"EmailVerifyPurpose","emailVerifyPurposeLoginChange":"EmailVerifyPurpose","emailVerifyPurposePassport":"EmailVerifyPurpose","emailVerificationCode":"EmailVerification","emailVerificationGoogle":"EmailVerification","emailVerificationApple":"EmailVerification","account.emailVerified":"account.EmailVerified","account.emailVerifiedLogin":"account.EmailVerified","premiumSubscriptionOption":"PremiumSubscriptionOption","sendAsPeer":"SendAsPeer","messageExtendedMediaPreview":"MessageExtendedMedia","messageExtendedMedia":"MessageExtendedMedia","stickerKeyword":"StickerKeyword","username":"Username","forumTopicDeleted":"ForumTopic","forumTopic":"ForumTopic","messages.forumTopics":"messages.ForumTopics","defaultHistoryTTL":"DefaultHistoryTTL","exportedContactToken":"ExportedContactToken","requestPeerTypeUser":"RequestPeerType","requestPeerTypeChat":"RequestPeerType","requestPeerTypeBroadcast":"RequestPeerType","emojiListNotModified":"EmojiList","emojiList":"EmojiList","emojiGroup":"EmojiGroup","emojiGroupGreeting":"EmojiGroup","emojiGroupPremium":"EmojiGroup","messages.emojiGroupsNotModified":"messages.EmojiGroups","messages.emojiGroups":"messages.EmojiGroups","textWithEntities":"TextWithEntities","messages.translateResult":"messages.TranslatedText","autoSaveSettings":"AutoSaveSettings","autoSaveException":"AutoSaveException","account.autoSaveSettings":"account.AutoSaveSettings","help.appConfigNotModified":"help.AppConfig","help.appConfig":"help.AppConfig","inputBotAppID":"InputBotApp","inputBotAppShortName":"InputBotApp","botAppNotModified":"BotApp","botApp":"BotApp","messages.botApp":"messages.BotApp","inlineBotWebView":"InlineBotWebView","readParticipantDate":"ReadParticipantDate","inputChatlistDialogFilter":"InputChatlist","exportedChatlistInvite":"ExportedChatlistInvite","chatlists.exportedChatlistInvite":"chatlists.ExportedChatlistInvite","chatlists.exportedInvites":"chatlists.ExportedInvites","chatlists.chatlistInviteAlready":"chatlists.ChatlistInvite","chatlists.chatlistInvite":"chatlists.ChatlistInvite","chatlists.chatlistUpdates":"chatlists.ChatlistUpdates","bots.botInfo":"bots.BotInfo","messagePeerVote":"MessagePeerVote","messagePeerVoteInputOption":"MessagePeerVote","messagePeerVoteMultiple":"MessagePeerVote","storyViews":"StoryViews","storyItemDeleted":"StoryItem","storyItemSkipped":"StoryItem","storyItem":"StoryItem","stories.allStoriesNotModified":"stories.AllStories","stories.allStories":"stories.AllStories","stories.stories":"stories.Stories","storyView":"StoryView","storyViewPublicForward":"StoryView","storyViewPublicRepost":"StoryView","stories.storyViewsList":"stories.StoryViewsList","stories.storyViews":"stories.StoryViews","inputReplyToMessage":"InputReplyTo","inputReplyToStory":"InputReplyTo","inputReplyToMonoForum":"InputReplyTo","exportedStoryLink":"ExportedStoryLink","storiesStealthMode":"StoriesStealthMode","mediaAreaCoordinates":"MediaAreaCoordinates","mediaAreaVenue":"MediaArea","inputMediaAreaVenue":"MediaArea","mediaAreaGeoPoint":"MediaArea","mediaAreaSuggestedReaction":"MediaArea","mediaAreaChannelPost":"MediaArea","inputMediaAreaChannelPost":"MediaArea","mediaAreaUrl":"MediaArea","mediaAreaWeather":"MediaArea","mediaAreaStarGift":"MediaArea","peerStories":"PeerStories","stories.peerStories":"stories.PeerStories","messages.webPage":"messages.WebPage","premiumGiftCodeOption":"PremiumGiftCodeOption","payments.checkedGiftCode":"payments.CheckedGiftCode","payments.giveawayInfo":"payments.GiveawayInfo","payments.giveawayInfoResults":"payments.GiveawayInfo","prepaidGiveaway":"PrepaidGiveaway","prepaidStarsGiveaway":"PrepaidGiveaway","boost":"Boost","premium.boostsList":"premium.BoostsList","myBoost":"MyBoost","premium.myBoosts":"premium.MyBoosts","premium.boostsStatus":"premium.BoostsStatus","storyFwdHeader":"StoryFwdHeader","postInteractionCountersMessage":"PostInteractionCounters","postInteractionCountersStory":"PostInteractionCounters","stats.storyStats":"stats.StoryStats","publicForwardMessage":"PublicForward","publicForwardStory":"PublicForward","stats.publicForwards":"stats.PublicForwards","peerColor":"PeerColor","peerColorCollectible":"PeerColor","inputPeerColorCollectible":"PeerColor","help.peerColorSet":"help.PeerColorSet","help.peerColorProfileSet":"help.PeerColorSet","help.peerColorOption":"help.PeerColorOption","help.peerColorsNotModified":"help.PeerColors","help.peerColors":"help.PeerColors","storyReaction":"StoryReaction","storyReactionPublicForward":"StoryReaction","storyReactionPublicRepost":"StoryReaction","stories.storyReactionsList":"stories.StoryReactionsList","savedDialog":"SavedDialog","monoForumDialog":"SavedDialog","messages.savedDialogs":"messages.SavedDialogs","messages.savedDialogsSlice":"messages.SavedDialogs","messages.savedDialogsNotModified":"messages.SavedDialogs","savedReactionTag":"SavedReactionTag","messages.savedReactionTagsNotModified":"messages.SavedReactionTags","messages.savedReactionTags":"messages.SavedReactionTags","outboxReadDate":"OutboxReadDate","smsjobs.eligibleToJoin":"smsjobs.EligibilityToJoin","smsjobs.status":"smsjobs.Status","smsJob":"SmsJob","businessWeeklyOpen":"BusinessWeeklyOpen","businessWorkHours":"BusinessWorkHours","businessLocation":"BusinessLocation","inputBusinessRecipients":"InputBusinessRecipients","businessRecipients":"BusinessRecipients","businessAwayMessageScheduleAlways":"BusinessAwayMessageSchedule","businessAwayMessageScheduleOutsideWorkHours":"BusinessAwayMessageSchedule","businessAwayMessageScheduleCustom":"BusinessAwayMessageSchedule","inputBusinessGreetingMessage":"InputBusinessGreetingMessage","businessGreetingMessage":"BusinessGreetingMessage","inputBusinessAwayMessage":"InputBusinessAwayMessage","businessAwayMessage":"BusinessAwayMessage","timezone":"Timezone","help.timezonesListNotModified":"help.TimezonesList","help.timezonesList":"help.TimezonesList","quickReply":"QuickReply","inputQuickReplyShortcut":"InputQuickReplyShortcut","inputQuickReplyShortcutId":"InputQuickReplyShortcut","messages.quickReplies":"messages.QuickReplies","messages.quickRepliesNotModified":"messages.QuickReplies","connectedBot":"ConnectedBot","account.connectedBots":"account.ConnectedBots","messages.dialogFilters":"messages.DialogFilters","birthday":"Birthday","botBusinessConnection":"BotBusinessConnection","inputBusinessIntro":"InputBusinessIntro","businessIntro":"BusinessIntro","messages.myStickers":"messages.MyStickers","inputCollectibleUsername":"InputCollectible","inputCollectiblePhone":"InputCollectible","fragment.collectibleInfo":"fragment.CollectibleInfo","inputBusinessBotRecipients":"InputBusinessBotRecipients","businessBotRecipients":"BusinessBotRecipients","contactBirthday":"ContactBirthday","contacts.contactBirthdays":"contacts.ContactBirthdays","missingInvitee":"MissingInvitee","messages.invitedUsers":"messages.InvitedUsers","inputBusinessChatLink":"InputBusinessChatLink","businessChatLink":"BusinessChatLink","account.businessChatLinks":"account.BusinessChatLinks","account.resolvedBusinessChatLinks":"account.ResolvedBusinessChatLinks","requestedPeerUser":"RequestedPeer","requestedPeerChat":"RequestedPeer","requestedPeerChannel":"RequestedPeer","sponsoredMessageReportOption":"SponsoredMessageReportOption","channels.sponsoredMessageReportResultChooseOption":"channels.SponsoredMessageReportResult","channels.sponsoredMessageReportResultAdsHidden":"channels.SponsoredMessageReportResult","channels.sponsoredMessageReportResultReported":"channels.SponsoredMessageReportResult","reactionNotificationsFromContacts":"ReactionNotificationsFrom","reactionNotificationsFromAll":"ReactionNotificationsFrom","reactionsNotifySettings":"ReactionsNotifySettings","availableEffect":"AvailableEffect","messages.availableEffectsNotModified":"messages.AvailableEffects","messages.availableEffects":"messages.AvailableEffects","factCheck":"FactCheck","starsTransactionPeerUnsupported":"StarsTransactionPeer","starsTransactionPeerAppStore":"StarsTransactionPeer","starsTransactionPeerPlayMarket":"StarsTransactionPeer","starsTransactionPeerPremiumBot":"StarsTransactionPeer","starsTransactionPeerFragment":"StarsTransactionPeer","starsTransactionPeer":"StarsTransactionPeer","starsTransactionPeerAds":"StarsTransactionPeer","starsTransactionPeerAPI":"StarsTransactionPeer","starsTopupOption":"StarsTopupOption","starsTransaction":"StarsTransaction","payments.starsStatus":"payments.StarsStatus","foundStory":"FoundStory","stories.foundStories":"stories.FoundStories","geoPointAddress":"GeoPointAddress","starsRevenueStatus":"StarsRevenueStatus","payments.starsRevenueStats":"payments.StarsRevenueStats","payments.starsRevenueWithdrawalUrl":"payments.StarsRevenueWithdrawalUrl","payments.starsRevenueAdsAccountUrl":"payments.StarsRevenueAdsAccountUrl","inputStarsTransaction":"InputStarsTransaction","starsGiftOption":"StarsGiftOption","bots.popularAppBots":"bots.PopularAppBots","botPreviewMedia":"BotPreviewMedia","bots.previewInfo":"bots.PreviewInfo","starsSubscriptionPricing":"StarsSubscriptionPricing","starsSubscription":"StarsSubscription","messageReactor":"MessageReactor","starsGiveawayOption":"StarsGiveawayOption","starsGiveawayWinnersOption":"StarsGiveawayWinnersOption","starGift":"StarGift","starGiftUnique":"StarGift","payments.starGiftsNotModified":"payments.StarGifts","payments.starGifts":"payments.StarGifts","messageReportOption":"MessageReportOption","reportResultChooseOption":"ReportResult","reportResultAddComment":"ReportResult","reportResultReported":"ReportResult","messages.botPreparedInlineMessage":"messages.BotPreparedInlineMessage","messages.preparedInlineMessage":"messages.PreparedInlineMessage","botAppSettings":"BotAppSettings","starRefProgram":"StarRefProgram","connectedBotStarRef":"ConnectedBotStarRef","payments.connectedStarRefBots":"payments.ConnectedStarRefBots","payments.suggestedStarRefBots":"payments.SuggestedStarRefBots","starsAmount":"StarsAmount","starsTonAmount":"StarsAmount","messages.foundStickersNotModified":"messages.FoundStickers","messages.foundStickers":"messages.FoundStickers","botVerifierSettings":"BotVerifierSettings","botVerification":"BotVerification","starGiftAttributeModel":"StarGiftAttribute","starGiftAttributePattern":"StarGiftAttribute","starGiftAttributeBackdrop":"StarGiftAttribute","starGiftAttributeOriginalDetails":"StarGiftAttribute","payments.starGiftUpgradePreview":"payments.StarGiftUpgradePreview","users.users":"users.Users","users.usersSlice":"users.Users","payments.uniqueStarGift":"payments.UniqueStarGift","messages.webPagePreview":"messages.WebPagePreview","savedStarGift":"SavedStarGift","payments.savedStarGifts":"payments.SavedStarGifts","inputSavedStarGiftUser":"InputSavedStarGift","inputSavedStarGiftChat":"InputSavedStarGift","inputSavedStarGiftSlug":"InputSavedStarGift","payments.starGiftWithdrawalUrl":"payments.StarGiftWithdrawalUrl","paidReactionPrivacyDefault":"PaidReactionPrivacy","paidReactionPrivacyAnonymous":"PaidReactionPrivacy","paidReactionPrivacyPeer":"PaidReactionPrivacy","account.paidMessagesRevenue":"account.PaidMessagesRevenue","requirementToContactEmpty":"RequirementToContact","requirementToContactPremium":"RequirementToContact","requirementToContactPaidMessages":"RequirementToContact","businessBotRights":"BusinessBotRights","disallowedGiftsSettings":"DisallowedGiftsSettings","sponsoredPeer":"SponsoredPeer","contacts.sponsoredPeersEmpty":"contacts.SponsoredPeers","contacts.sponsoredPeers":"contacts.SponsoredPeers","starGiftAttributeIdModel":"StarGiftAttributeId","starGiftAttributeIdPattern":"StarGiftAttributeId","starGiftAttributeIdBackdrop":"StarGiftAttributeId","starGiftAttributeCounter":"StarGiftAttributeCounter","payments.resaleStarGifts":"payments.ResaleStarGifts","stories.canSendStoryCount":"stories.CanSendStoryCount","pendingSuggestion":"PendingSuggestion","todoItem":"TodoItem","todoList":"TodoList","todoCompletion":"TodoCompletion","suggestedPost":"SuggestedPost","starsRating":"StarsRating","starGiftCollection":"StarGiftCollection","payments.starGiftCollectionsNotModified":"payments.StarGiftCollections","payments.starGiftCollections":"payments.StarGiftCollections","storyAlbum":"StoryAlbum","stories.albumsNotModified":"stories.Albums","stories.albums":"stories.Albums","searchPostsFlood":"SearchPostsFlood","payments.uniqueStarGiftValueInfo":"payments.UniqueStarGiftValueInfo","profileTabPosts":"ProfileTab","profileTabGifts":"ProfileTab","profileTabMedia":"ProfileTab","profileTabFiles":"ProfileTab","profileTabMusic":"ProfileTab","profileTabVoice":"ProfileTab","profileTabLinks":"ProfileTab","profileTabGifs":"ProfileTab","users.savedMusicNotModified":"users.SavedMusic","users.savedMusic":"users.SavedMusic","account.savedMusicIdsNotModified":"account.SavedMusicIds","account.savedMusicIds":"account.SavedMusicIds","payments.checkCanSendGiftResultOk":"payments.CheckCanSendGiftResult","payments.checkCanSendGiftResultFail":"payments.CheckCanSendGiftResult","inputChatThemeEmpty":"InputChatTheme","inputChatTheme":"InputChatTheme","inputChatThemeUniqueGift":"InputChatTheme","starGiftUpgradePrice":"StarGiftUpgradePrice","messageMediaVideoStream":"MessageMedia","updateDeleteGroupCallMessages":"Update","updateStarGiftAuctionState":"Update","updateStarGiftAuctionUserState":"Update","inputPrivacyKeySavedMusic":"InputPrivacyKey","privacyKeySavedMusic":"PrivacyKey","webPageAttributeStarGiftAuction":"WebPageAttribute","inputInvoiceStarGiftAuctionBid":"InputInvoice","groupCallMessage":"GroupCallMessage","groupCallDonor":"GroupCallDonor","phone.groupCallStars":"phone.GroupCallStars","recentStory":"RecentStory","auctionBidLevel":"AuctionBidLevel","starGiftAuctionStateNotModified":"StarGiftAuctionState","starGiftAuctionState":"StarGiftAuctionState","starGiftAuctionStateFinished":"StarGiftAuctionState","starGiftAuctionUserState":"StarGiftAuctionUserState","payments.starGiftAuctionState":"payments.StarGiftAuctionState","starGiftAuctionAcquiredGift":"StarGiftAuctionAcquiredGift","payments.starGiftAuctionAcquiredGifts":"payments.StarGiftAuctionAcquiredGifts","starGiftActiveAuctionState":"StarGiftActiveAuctionState","payments.starGiftActiveAuctionsNotModified":"payments.StarGiftActiveAuctions","payments.starGiftActiveAuctions":"payments.StarGiftActiveAuctions","inputStarGiftAuction":"InputStarGiftAuction","inputStarGiftAuctionSlug":"InputStarGiftAuction","updateChannelPinnedTopic":"Update","updateChannelPinnedTopics":"Update","mtcute.dummyUpdate":"Update","mtcute.dummyInputPeerMinUser":"InputPeer","mtcute.dummyInputPeerMinChannel":"InputPeer"}');
})(exports.tl);

exports.mtp = {};
(function(ns) {
var _types = void 0;
function _isAny(type) {
    return function (obj) {
        return typeof obj === 'object' && obj && _types[obj._] == type
    }
}
ns.$extendTypes = function(types) {
    for (var i in types) {
        types.hasOwnProperty(i) && (_types[i] = types[i])
    }
}
ns.LAYER = 0;
ns.isAnyResPQ = _isAny('ResPQ');
ns.isAnyP_Q_inner_data = _isAny('P_Q_inner_data');
ns.isAnyServer_DH_Params = _isAny('Server_DH_Params');
ns.isAnyServer_DH_inner_data = _isAny('Server_DH_inner_data');
ns.isAnyClient_DH_Inner_Data = _isAny('Client_DH_Inner_Data');
ns.isAnySet_client_DH_params_answer = _isAny('Set_client_DH_params_answer');
ns.isAnyBindAuthKeyInner = _isAny('BindAuthKeyInner');
ns.isAnyRpcError = _isAny('RpcError');
ns.isAnyRpcDropAnswer = _isAny('RpcDropAnswer');
ns.isAnyFutureSalt = _isAny('FutureSalt');
ns.isAnyFutureSalts = _isAny('FutureSalts');
ns.isAnyPong = _isAny('Pong');
ns.isAnyDestroySessionRes = _isAny('DestroySessionRes');
ns.isAnyNewSession = _isAny('NewSession');
ns.isAnyMsgsAck = _isAny('MsgsAck');
ns.isAnyBadMsgNotification = _isAny('BadMsgNotification');
ns.isAnyMsgResendReq = _isAny('MsgResendReq');
ns.isAnyMsgsStateReq = _isAny('MsgsStateReq');
ns.isAnyMsgsStateInfo = _isAny('MsgsStateInfo');
ns.isAnyMsgsAllInfo = _isAny('MsgsAllInfo');
ns.isAnyMsgDetailedInfo = _isAny('MsgDetailedInfo');
ns.isAnyDestroyAuthKeyRes = _isAny('DestroyAuthKeyRes');
ns.isAnyHttpWait = _isAny('HttpWait');
_types = JSON.parse('{"mt_resPQ":"ResPQ","mt_p_q_inner_data_dc":"P_Q_inner_data","mt_p_q_inner_data_temp_dc":"P_Q_inner_data","mt_server_DH_params_ok":"Server_DH_Params","mt_server_DH_inner_data":"Server_DH_inner_data","mt_client_DH_inner_data":"Client_DH_Inner_Data","mt_dh_gen_ok":"Set_client_DH_params_answer","mt_dh_gen_retry":"Set_client_DH_params_answer","mt_dh_gen_fail":"Set_client_DH_params_answer","mt_bind_auth_key_inner":"BindAuthKeyInner","mt_rpc_error":"RpcError","mt_rpc_answer_unknown":"RpcDropAnswer","mt_rpc_answer_dropped_running":"RpcDropAnswer","mt_rpc_answer_dropped":"RpcDropAnswer","mt_future_salt":"FutureSalt","mt_future_salts":"FutureSalts","mt_pong":"Pong","mt_destroy_session_ok":"DestroySessionRes","mt_destroy_session_none":"DestroySessionRes","mt_new_session_created":"NewSession","mt_msgs_ack":"MsgsAck","mt_bad_msg_notification":"BadMsgNotification","mt_bad_server_salt":"BadMsgNotification","mt_msg_resend_req":"MsgResendReq","mt_msgs_state_req":"MsgsStateReq","mt_msgs_state_info":"MsgsStateInfo","mt_msgs_all_info":"MsgsAllInfo","mt_msg_detailed_info":"MsgDetailedInfo","mt_msg_new_detailed_info":"MsgDetailedInfo","mt_destroy_auth_key_ok":"DestroyAuthKeyRes","mt_destroy_auth_key_none":"DestroyAuthKeyRes","mt_destroy_auth_key_fail":"DestroyAuthKeyRes","mt_http_wait":"HttpWait","mt_req_pq_multi":"ResPQ","mt_req_DH_params":"Server_DH_Params","mt_set_client_DH_params":"Set_client_DH_params_answer","mt_rpc_drop_answer":"RpcDropAnswer","mt_get_future_salts":"FutureSalts","mt_ping":"Pong","mt_ping_delay_disconnect":"Pong","mt_destroy_session":"DestroySessionRes","mt_destroy_auth_key":"DestroyAuthKeyRes"}');
})(exports.mtp);
export const tl = exports.tl;
export const mtp = exports.mtp;