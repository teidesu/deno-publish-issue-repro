import { tl } from '../index.d.ts';
import _Long from 'long';
export declare namespace tlCompat {
    const LAYER = 0;

    

    type Long = _Long;
    type RawLong = Uint8Array;
    type Int128 = Uint8Array;
    type Int256 = Uint8Array;
    type Double = number;

    type FindByName<T extends { _: string }, Name extends T['_']> = Extract<T, { _: Name }>

    type Mutable<T> = {
        -readonly [P in keyof T]: T[P]
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     require_premium: flags.6?true
     *     resale_ton_only: flags.7?true
     *     theme_available: flags.9?true
     *     gift_id: long
     *     owner_address: flags.2?string
     *     gift_address: flags.3?string
     *     resell_amount: flags.4?Vector<StarsAmount>
     *     released_by: flags.5?Peer
     *     value_amount: flags.8?long
     *     value_currency: flags.8?string
     *     theme_peer: flags.10?Peer
     *     peer_color: flags.11?PeerColor
     *     host_id: flags.12?Peer
     * Changed arguments:
     *     owner_id: flags.0?int53 => flags.0?Peer
     */
    interface RawStarGiftUnique_layer197 {
        _: 'starGiftUnique_layer197';
        id: Long;
        title: string;
        slug: string;
        num: number;
        ownerId?: number;
        ownerName?: string;
        attributes: tl.TypeStarGiftAttribute[];
        availabilityIssued: number;
        availabilityTotal: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     flags: #
     *     until: flags.0?int
     */
    interface RawEmojiStatus_layer197 {
        _: 'emojiStatus_layer197';
        documentId: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     video_cover: flags.9?Photo
     *     video_timestamp: flags.10?int
     */
    interface RawMessageMediaDocument_layer197 {
        _: 'messageMediaDocument_layer197';
        nopremium?: boolean;
        spoiler?: boolean;
        video?: boolean;
        round?: boolean;
        voice?: boolean;
        document?: tl.TypeDocument;
        altDocuments?: tl.TypeDocument[];
        ttlSeconds?: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     stargifts_available: flags2.19?true
     *     paid_messages_available: flags2.20?true
     *     stargifts_count: flags2.18?int
     *     send_paid_messages_stars: flags2.21?long
     *     main_tab: flags2.22?ProfileTab
     */
    interface RawChannelFull_layer197 {
        _: 'channelFull_layer197';
        canViewParticipants?: boolean;
        canSetUsername?: boolean;
        canSetStickers?: boolean;
        hiddenPrehistory?: boolean;
        canSetLocation?: boolean;
        hasScheduled?: boolean;
        canViewStats?: boolean;
        blocked?: boolean;
        canDeleteChannel?: boolean;
        antispam?: boolean;
        participantsHidden?: boolean;
        translationsDisabled?: boolean;
        storiesPinnedAvailable?: boolean;
        viewForumAsMessages?: boolean;
        restrictedSponsored?: boolean;
        canViewRevenue?: boolean;
        paidMediaAllowed?: boolean;
        canViewStarsRevenue?: boolean;
        paidReactionsAvailable?: boolean;
        id: number;
        about: string;
        participantsCount?: number;
        adminsCount?: number;
        kickedCount?: number;
        bannedCount?: number;
        onlineCount?: number;
        readInboxMaxId: number;
        readOutboxMaxId: number;
        unreadCount: number;
        chatPhoto: tl.TypePhoto;
        notifySettings: tl.TypePeerNotifySettings;
        exportedInvite?: tl.TypeExportedChatInvite;
        botInfo: tl.TypeBotInfo[];
        migratedFromChatId?: Long;
        migratedFromMaxId?: number;
        pinnedMsgId?: number;
        stickerset?: tl.TypeStickerSet;
        availableMinId?: number;
        folderId?: number;
        linkedChatId?: number;
        location?: tl.TypeChannelLocation;
        slowmodeSeconds?: number;
        slowmodeNextSendDate?: number;
        statsDc?: number;
        pts: number;
        call?: tl.TypeInputGroupCall;
        ttlPeriod?: number;
        pendingSuggestions?: string[];
        groupcallDefaultJoinAs?: tl.TypePeer;
        themeEmoticon?: string;
        requestsPending?: number;
        recentRequesters?: number[];
        defaultSendAs?: tl.TypePeer;
        availableReactions?: tl.TypeChatReactions;
        reactionsLimit?: number;
        stories?: tl.TypePeerStories;
        wallpaper?: tl.TypeWallPaper;
        boostsApplied?: number;
        boostsUnrestrict?: number;
        emojiset?: tl.TypeStickerSet;
        botVerification?: tl.TypeBotVerification;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     prepaid_upgrade: flags.11?true
     *     assigned: flags.13?true
     *     from_id: flags.6?Peer
     *     peer: flags.7?Peer
     *     saved_id: flags.7?long
     *     resale_amount: flags.8?StarsAmount
     *     can_transfer_at: flags.9?int
     *     can_resell_at: flags.10?int
     *     drop_original_details_stars: flags.12?long
     */
    interface RawMessageActionStarGiftUnique_layer197 {
        _: 'messageActionStarGiftUnique_layer197';
        upgrade?: boolean;
        transferred?: boolean;
        saved?: boolean;
        refunded?: boolean;
        gift: tlCompat.TypeStarGift;
        canExportAt?: number;
        transferStars?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     prepaid_upgrade: flags.13?true
     *     upgrade_separate: flags.16?true
     *     auction_acquired: flags.17?true
     *     from_id: flags.11?Peer
     *     peer: flags.12?Peer
     *     saved_id: flags.12?long
     *     prepaid_upgrade_hash: flags.14?string
     *     gift_msg_id: flags.15?int
     *     to_id: flags.18?Peer
     */
    interface RawMessageActionStarGift_layer197 {
        _: 'messageActionStarGift_layer197';
        nameHidden?: boolean;
        saved?: boolean;
        converted?: boolean;
        upgraded?: boolean;
        refunded?: boolean;
        canUpgrade?: boolean;
        gift: tlCompat.TypeStarGift;
        message?: tl.TypeTextWithEntities;
        convertStars?: Long;
        upgradeMsgId?: number;
        upgradeStars?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     require_premium: flags.6?true
     *     resale_ton_only: flags.7?true
     *     theme_available: flags.9?true
     *     gift_id: long
     *     gift_address: flags.3?string
     *     resell_amount: flags.4?Vector<StarsAmount>
     *     released_by: flags.5?Peer
     *     value_amount: flags.8?long
     *     value_currency: flags.8?string
     *     theme_peer: flags.10?Peer
     *     peer_color: flags.11?PeerColor
     *     host_id: flags.12?Peer
     */
    interface RawStarGiftUnique_layer198 {
        _: 'starGiftUnique_layer198';
        id: Long;
        title: string;
        slug: string;
        num: number;
        ownerId?: tl.TypePeer;
        ownerName?: string;
        ownerAddress?: string;
        attributes: tl.TypeStarGiftAttribute[];
        availabilityIssued: number;
        availabilityTotal: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     display_gifts_button: flags2.16?true
     *     theme: flags.15?ChatTheme
     *     send_paid_messages_stars: flags2.14?long
     *     disallowed_gifts: flags2.15?DisallowedGiftsSettings
     *     stars_rating: flags2.17?StarsRating
     *     stars_my_pending_rating: flags2.18?StarsRating
     *     stars_my_pending_rating_date: flags2.18?int
     *     main_tab: flags2.20?ProfileTab
     *     saved_music: flags2.21?Document
     *     note: flags2.22?TextWithEntities
     * Removed arguments: theme_emoticon, premium_gifts
     */
    interface RawUserFull_layer199 {
        _: 'userFull_layer199';
        blocked?: boolean;
        phoneCallsAvailable?: boolean;
        phoneCallsPrivate?: boolean;
        canPinMessage?: boolean;
        hasScheduled?: boolean;
        videoCallsAvailable?: boolean;
        voiceMessagesForbidden?: boolean;
        translationsDisabled?: boolean;
        storiesPinnedAvailable?: boolean;
        blockedMyStoriesFrom?: boolean;
        wallpaperOverridden?: boolean;
        contactRequirePremium?: boolean;
        readDatesPrivate?: boolean;
        sponsoredEnabled?: boolean;
        canViewRevenue?: boolean;
        botCanManageEmojiStatus?: boolean;
        id: number;
        about?: string;
        settings: tl.TypePeerSettings;
        personalPhoto?: tl.TypePhoto;
        profilePhoto?: tl.TypePhoto;
        fallbackPhoto?: tl.TypePhoto;
        notifySettings: tl.TypePeerNotifySettings;
        botInfo?: tl.TypeBotInfo;
        pinnedMsgId?: number;
        commonChatsCount: number;
        folderId?: number;
        ttlPeriod?: number;
        themeEmoticon?: string;
        privateForwardName?: string;
        botGroupAdminRights?: tl.TypeChatAdminRights;
        botBroadcastAdminRights?: tl.TypeChatAdminRights;
        premiumGifts?: tlCompat.TypePremiumGiftOption[];
        wallpaper?: tl.TypeWallPaper;
        stories?: tl.TypePeerStories;
        businessWorkHours?: tl.TypeBusinessWorkHours;
        businessLocation?: tl.TypeBusinessLocation;
        businessGreetingMessage?: tl.TypeBusinessGreetingMessage;
        businessAwayMessage?: tl.TypeBusinessAwayMessage;
        businessIntro?: tl.TypeBusinessIntro;
        birthday?: tl.TypeBirthday;
        personalChannelId?: number;
        personalChannelMessage?: number;
        stargiftsCount?: number;
        starrefProgram?: tl.TypeStarRefProgram;
        botVerification?: tl.TypeBotVerification;
    }
    /**
     * Entry was removed from the schema
     */
    interface RawPremiumGiftOption_layer199 {
        _: 'premiumGiftOption_layer199';
        months: number;
        currency: string;
        amount: Long;
        botUrl: string;
        storeProduct?: string;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     bot_forum_view: flags2.16?true
     *     send_paid_messages_stars: flags2.15?long
     * Changed arguments:
     *     stories_max_id: flags2.5?int => flags2.5?RecentStory
     */
    interface RawUser_layer199 {
        _: 'user_layer199';
        self?: boolean;
        contact?: boolean;
        mutualContact?: boolean;
        deleted?: boolean;
        bot?: boolean;
        botChatHistory?: boolean;
        botNochats?: boolean;
        verified?: boolean;
        restricted?: boolean;
        min?: boolean;
        botInlineGeo?: boolean;
        support?: boolean;
        scam?: boolean;
        applyMinPhoto?: boolean;
        fake?: boolean;
        botAttachMenu?: boolean;
        premium?: boolean;
        attachMenuEnabled?: boolean;
        botCanEdit?: boolean;
        closeFriend?: boolean;
        storiesHidden?: boolean;
        storiesUnavailable?: boolean;
        contactRequirePremium?: boolean;
        botBusiness?: boolean;
        botHasMainApp?: boolean;
        id: number;
        accessHash?: Long;
        firstName?: string;
        lastName?: string;
        username?: string;
        phone?: string;
        photo?: tl.TypeUserProfilePhoto;
        status?: tl.TypeUserStatus;
        botInfoVersion?: number;
        restrictionReason?: tl.TypeRestrictionReason[];
        botInlinePlaceholder?: string;
        langCode?: string;
        emojiStatus?: tlCompat.TypeEmojiStatus;
        usernames?: tl.TypeUsername[];
        storiesMaxId?: number;
        color?: tl.TypePeerColor;
        profileColor?: tl.TypePeerColor;
        botActiveUsers?: number;
        botVerificationIcon?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     autotranslation: flags2.15?true
     *     broadcast_messages_allowed: flags2.16?true
     *     monoforum: flags2.17?true
     *     forum_tabs: flags2.19?true
     *     send_paid_messages_stars: flags2.14?long
     *     linked_monoforum_id: flags2.18?int53
     * Changed arguments:
     *     stories_max_id: flags2.4?int => flags2.4?RecentStory
     */
    interface RawChannel_layer199 {
        _: 'channel_layer199';
        creator?: boolean;
        left?: boolean;
        broadcast?: boolean;
        verified?: boolean;
        megagroup?: boolean;
        restricted?: boolean;
        signatures?: boolean;
        min?: boolean;
        scam?: boolean;
        hasLink?: boolean;
        hasGeo?: boolean;
        slowmodeEnabled?: boolean;
        callActive?: boolean;
        callNotEmpty?: boolean;
        fake?: boolean;
        gigagroup?: boolean;
        noforwards?: boolean;
        joinToSend?: boolean;
        joinRequest?: boolean;
        forum?: boolean;
        storiesHidden?: boolean;
        storiesHiddenMin?: boolean;
        storiesUnavailable?: boolean;
        signatureProfiles?: boolean;
        id: number;
        accessHash?: Long;
        title: string;
        username?: string;
        photo: tl.TypeChatPhoto;
        date: number;
        restrictionReason?: tl.TypeRestrictionReason[];
        adminRights?: tl.TypeChatAdminRights;
        bannedRights?: tl.TypeChatBannedRights;
        defaultBannedRights?: tl.TypeChatBannedRights;
        participantsCount?: number;
        usernames?: tl.TypeUsername[];
        storiesMaxId?: number;
        color?: tl.TypePeerColor;
        profileColor?: tl.TypePeerColor;
        emojiStatus?: tlCompat.TypeEmojiStatus;
        level?: number;
        subscriptionUntilDate?: number;
        botVerificationIcon?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     paid_suggested_post_stars: flags2.8?true
     *     paid_suggested_post_ton: flags2.9?true
     *     paid_message_stars: flags2.6?long
     *     suggested_post: flags2.7?SuggestedPost
     *     schedule_repeat_period: flags2.10?int
     */
    interface RawMessage_layer199 {
        _: 'message_layer199';
        out?: boolean;
        mentioned?: boolean;
        mediaUnread?: boolean;
        silent?: boolean;
        post?: boolean;
        fromScheduled?: boolean;
        legacy?: boolean;
        editHide?: boolean;
        pinned?: boolean;
        noforwards?: boolean;
        invertMedia?: boolean;
        offline?: boolean;
        videoProcessingPending?: boolean;
        id: number;
        fromId?: tl.TypePeer;
        fromBoostsApplied?: number;
        peerId: tl.TypePeer;
        savedPeerId?: tl.TypePeer;
        fwdFrom?: tl.TypeMessageFwdHeader;
        viaBotId?: number;
        viaBusinessBotId?: number;
        replyTo?: tlCompat.TypeMessageReplyHeader;
        date: number;
        message: string;
        media?: tlCompat.TypeMessageMedia;
        replyMarkup?: tl.TypeReplyMarkup;
        entities?: tl.TypeMessageEntity[];
        views?: number;
        forwards?: number;
        replies?: tl.TypeMessageReplies;
        editDate?: number;
        postAuthor?: string;
        groupedId?: Long;
        reactions?: tl.TypeMessageReactions;
        restrictionReason?: tl.TypeRestrictionReason[];
        ttlPeriod?: number;
        quickReplyShortcutId?: number;
        effect?: Long;
        factcheck?: tl.TypeFactCheck;
        reportDeliveryUntilDate?: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     display_gifts_button: flags2.16?true
     *     theme: flags.15?ChatTheme
     *     disallowed_gifts: flags2.15?DisallowedGiftsSettings
     *     stars_rating: flags2.17?StarsRating
     *     stars_my_pending_rating: flags2.18?StarsRating
     *     stars_my_pending_rating_date: flags2.18?int
     *     main_tab: flags2.20?ProfileTab
     *     saved_music: flags2.21?Document
     *     note: flags2.22?TextWithEntities
     * Removed arguments: theme_emoticon
     */
    interface RawUserFull_layer200 {
        _: 'userFull_layer200';
        blocked?: boolean;
        phoneCallsAvailable?: boolean;
        phoneCallsPrivate?: boolean;
        canPinMessage?: boolean;
        hasScheduled?: boolean;
        videoCallsAvailable?: boolean;
        voiceMessagesForbidden?: boolean;
        translationsDisabled?: boolean;
        storiesPinnedAvailable?: boolean;
        blockedMyStoriesFrom?: boolean;
        wallpaperOverridden?: boolean;
        contactRequirePremium?: boolean;
        readDatesPrivate?: boolean;
        sponsoredEnabled?: boolean;
        canViewRevenue?: boolean;
        botCanManageEmojiStatus?: boolean;
        id: number;
        about?: string;
        settings: tl.TypePeerSettings;
        personalPhoto?: tl.TypePhoto;
        profilePhoto?: tl.TypePhoto;
        fallbackPhoto?: tl.TypePhoto;
        notifySettings: tl.TypePeerNotifySettings;
        botInfo?: tl.TypeBotInfo;
        pinnedMsgId?: number;
        commonChatsCount: number;
        folderId?: number;
        ttlPeriod?: number;
        themeEmoticon?: string;
        privateForwardName?: string;
        botGroupAdminRights?: tl.TypeChatAdminRights;
        botBroadcastAdminRights?: tl.TypeChatAdminRights;
        wallpaper?: tl.TypeWallPaper;
        stories?: tl.TypePeerStories;
        businessWorkHours?: tl.TypeBusinessWorkHours;
        businessLocation?: tl.TypeBusinessLocation;
        businessGreetingMessage?: tl.TypeBusinessGreetingMessage;
        businessAwayMessage?: tl.TypeBusinessAwayMessage;
        businessIntro?: tl.TypeBusinessIntro;
        birthday?: tl.TypeBirthday;
        personalChannelId?: number;
        personalChannelMessage?: number;
        stargiftsCount?: number;
        starrefProgram?: tl.TypeStarRefProgram;
        botVerification?: tl.TypeBotVerification;
        sendPaidMessagesStars?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     require_premium: flags.6?true
     *     resale_ton_only: flags.7?true
     *     theme_available: flags.9?true
     *     gift_id: long
     *     resell_amount: flags.4?Vector<StarsAmount>
     *     released_by: flags.5?Peer
     *     value_amount: flags.8?long
     *     value_currency: flags.8?string
     *     theme_peer: flags.10?Peer
     *     peer_color: flags.11?PeerColor
     *     host_id: flags.12?Peer
     */
    interface RawStarGiftUnique_layer202 {
        _: 'starGiftUnique_layer202';
        id: Long;
        title: string;
        slug: string;
        num: number;
        ownerId?: tl.TypePeer;
        ownerName?: string;
        ownerAddress?: string;
        attributes: tl.TypeStarGiftAttribute[];
        availabilityIssued: number;
        availabilityTotal: number;
        giftAddress?: string;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     require_premium: flags.7?true
     *     limited_per_user: flags.8?true
     *     peer_color_available: flags.10?true
     *     auction: flags.11?true
     *     availability_resale: flags.4?long
     *     resell_min_stars: flags.4?long
     *     title: flags.5?string
     *     released_by: flags.6?Peer
     *     per_user_total: flags.8?int
     *     per_user_remains: flags.8?int
     *     locked_until_date: flags.9?int
     *     auction_slug: flags.11?string
     *     gifts_per_round: flags.11?int
     */
    interface RawStarGift_layer202 {
        _: 'starGift_layer202';
        limited?: boolean;
        soldOut?: boolean;
        birthday?: boolean;
        id: Long;
        sticker: tl.TypeDocument;
        stars: Long;
        availabilityRemains?: number;
        availabilityTotal?: number;
        convertStars: Long;
        firstSaleDate?: number;
        lastSaleDate?: number;
        upgradeStars?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     prepaid_upgrade: flags.11?true
     *     assigned: flags.13?true
     *     resale_amount: flags.8?StarsAmount
     *     can_transfer_at: flags.9?int
     *     can_resell_at: flags.10?int
     *     drop_original_details_stars: flags.12?long
     */
    interface RawMessageActionStarGiftUnique_layer202 {
        _: 'messageActionStarGiftUnique_layer202';
        upgrade?: boolean;
        transferred?: boolean;
        saved?: boolean;
        refunded?: boolean;
        gift: tlCompat.TypeStarGift;
        canExportAt?: number;
        transferStars?: Long;
        fromId?: tl.TypePeer;
        peer?: tl.TypePeer;
        savedId?: Long;
    }
    /**
     * Entry was removed from the schema
     */
    interface RawPhoneCallDiscardReasonAllowGroupCall_layer202 {
        _: 'phoneCallDiscardReasonAllowGroupCall_layer202';
        encryptedKey: Uint8Array;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     broadcast_messages_allowed: flags2.16?true
     *     monoforum: flags2.17?true
     *     forum_tabs: flags2.19?true
     *     linked_monoforum_id: flags2.18?int53
     * Changed arguments:
     *     stories_max_id: flags2.4?int => flags2.4?RecentStory
     */
    interface RawChannel_layer203 {
        _: 'channel_layer203';
        creator?: boolean;
        left?: boolean;
        broadcast?: boolean;
        verified?: boolean;
        megagroup?: boolean;
        restricted?: boolean;
        signatures?: boolean;
        min?: boolean;
        scam?: boolean;
        hasLink?: boolean;
        hasGeo?: boolean;
        slowmodeEnabled?: boolean;
        callActive?: boolean;
        callNotEmpty?: boolean;
        fake?: boolean;
        gigagroup?: boolean;
        noforwards?: boolean;
        joinToSend?: boolean;
        joinRequest?: boolean;
        forum?: boolean;
        storiesHidden?: boolean;
        storiesHiddenMin?: boolean;
        storiesUnavailable?: boolean;
        signatureProfiles?: boolean;
        autotranslation?: boolean;
        id: number;
        accessHash?: Long;
        title: string;
        username?: string;
        photo: tl.TypeChatPhoto;
        date: number;
        restrictionReason?: tl.TypeRestrictionReason[];
        adminRights?: tl.TypeChatAdminRights;
        bannedRights?: tl.TypeChatBannedRights;
        defaultBannedRights?: tl.TypeChatBannedRights;
        participantsCount?: number;
        usernames?: tl.TypeUsername[];
        storiesMaxId?: number;
        color?: tl.TypePeerColor;
        profileColor?: tl.TypePeerColor;
        emojiStatus?: tlCompat.TypeEmojiStatus;
        level?: number;
        subscriptionUntilDate?: number;
        botVerificationIcon?: Long;
        sendPaidMessagesStars?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     flags: #
     *     broadcast_messages_allowed: flags.0?true
     */
    interface RawMessageActionPaidMessagesPrice_layer203 {
        _: 'messageActionPaidMessagesPrice_layer203';
        stars: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     send_paid_messages_stars: flags2.21?long
     *     main_tab: flags2.22?ProfileTab
     */
    interface RawChannelFull_layer204 {
        _: 'channelFull_layer204';
        canViewParticipants?: boolean;
        canSetUsername?: boolean;
        canSetStickers?: boolean;
        hiddenPrehistory?: boolean;
        canSetLocation?: boolean;
        hasScheduled?: boolean;
        canViewStats?: boolean;
        blocked?: boolean;
        canDeleteChannel?: boolean;
        antispam?: boolean;
        participantsHidden?: boolean;
        translationsDisabled?: boolean;
        storiesPinnedAvailable?: boolean;
        viewForumAsMessages?: boolean;
        restrictedSponsored?: boolean;
        canViewRevenue?: boolean;
        paidMediaAllowed?: boolean;
        canViewStarsRevenue?: boolean;
        paidReactionsAvailable?: boolean;
        stargiftsAvailable?: boolean;
        paidMessagesAvailable?: boolean;
        id: number;
        about: string;
        participantsCount?: number;
        adminsCount?: number;
        kickedCount?: number;
        bannedCount?: number;
        onlineCount?: number;
        readInboxMaxId: number;
        readOutboxMaxId: number;
        unreadCount: number;
        chatPhoto: tl.TypePhoto;
        notifySettings: tl.TypePeerNotifySettings;
        exportedInvite?: tl.TypeExportedChatInvite;
        botInfo: tl.TypeBotInfo[];
        migratedFromChatId?: Long;
        migratedFromMaxId?: number;
        pinnedMsgId?: number;
        stickerset?: tl.TypeStickerSet;
        availableMinId?: number;
        folderId?: number;
        linkedChatId?: number;
        location?: tl.TypeChannelLocation;
        slowmodeSeconds?: number;
        slowmodeNextSendDate?: number;
        statsDc?: number;
        pts: number;
        call?: tl.TypeInputGroupCall;
        ttlPeriod?: number;
        pendingSuggestions?: string[];
        groupcallDefaultJoinAs?: tl.TypePeer;
        themeEmoticon?: string;
        requestsPending?: number;
        recentRequesters?: number[];
        defaultSendAs?: tl.TypePeer;
        availableReactions?: tl.TypeChatReactions;
        reactionsLimit?: number;
        stories?: tl.TypePeerStories;
        wallpaper?: tl.TypeWallPaper;
        boostsApplied?: number;
        boostsUnrestrict?: number;
        emojiset?: tl.TypeStickerSet;
        botVerification?: tl.TypeBotVerification;
        stargiftsCount?: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     saved_peer_id: flags.28?Peer
     */
    interface RawMessageService_layer204 {
        _: 'messageService_layer204';
        out?: boolean;
        mentioned?: boolean;
        mediaUnread?: boolean;
        reactionsArePossible?: boolean;
        silent?: boolean;
        post?: boolean;
        legacy?: boolean;
        id: number;
        fromId?: tl.TypePeer;
        peerId: tl.TypePeer;
        replyTo?: tlCompat.TypeMessageReplyHeader;
        date: number;
        action: tlCompat.TypeMessageAction;
        reactions?: tl.TypeMessageReactions;
        ttlPeriod?: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     paid_suggested_post_stars: flags2.8?true
     *     paid_suggested_post_ton: flags2.9?true
     *     suggested_post: flags2.7?SuggestedPost
     *     schedule_repeat_period: flags2.10?int
     */
    interface RawMessage_layer204 {
        _: 'message_layer204';
        out?: boolean;
        mentioned?: boolean;
        mediaUnread?: boolean;
        silent?: boolean;
        post?: boolean;
        fromScheduled?: boolean;
        legacy?: boolean;
        editHide?: boolean;
        pinned?: boolean;
        noforwards?: boolean;
        invertMedia?: boolean;
        offline?: boolean;
        videoProcessingPending?: boolean;
        id: number;
        fromId?: tl.TypePeer;
        fromBoostsApplied?: number;
        peerId: tl.TypePeer;
        savedPeerId?: tl.TypePeer;
        fwdFrom?: tl.TypeMessageFwdHeader;
        viaBotId?: number;
        viaBusinessBotId?: number;
        replyTo?: tlCompat.TypeMessageReplyHeader;
        date: number;
        message: string;
        media?: tlCompat.TypeMessageMedia;
        replyMarkup?: tl.TypeReplyMarkup;
        entities?: tl.TypeMessageEntity[];
        views?: number;
        forwards?: number;
        replies?: tl.TypeMessageReplies;
        editDate?: number;
        postAuthor?: string;
        groupedId?: Long;
        reactions?: tl.TypeMessageReactions;
        restrictionReason?: tl.TypeRestrictionReason[];
        ttlPeriod?: number;
        quickReplyShortcutId?: number;
        effect?: Long;
        factcheck?: tl.TypeFactCheck;
        reportDeliveryUntilDate?: number;
        paidMessageStars?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     require_premium: flags.6?true
     *     resale_ton_only: flags.7?true
     *     theme_available: flags.9?true
     *     gift_id: long
     *     resell_amount: flags.4?Vector<StarsAmount>
     *     released_by: flags.5?Peer
     *     value_amount: flags.8?long
     *     value_currency: flags.8?string
     *     theme_peer: flags.10?Peer
     *     peer_color: flags.11?PeerColor
     *     host_id: flags.12?Peer
     * Removed arguments: resell_stars
     */
    interface RawStarGiftUnique_layer206 {
        _: 'starGiftUnique_layer206';
        id: Long;
        title: string;
        slug: string;
        num: number;
        ownerId?: tl.TypePeer;
        ownerName?: string;
        ownerAddress?: string;
        attributes: tl.TypeStarGiftAttribute[];
        availabilityIssued: number;
        availabilityTotal: number;
        giftAddress?: string;
        resellStars?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     require_premium: flags.7?true
     *     limited_per_user: flags.8?true
     *     peer_color_available: flags.10?true
     *     auction: flags.11?true
     *     released_by: flags.6?Peer
     *     per_user_total: flags.8?int
     *     per_user_remains: flags.8?int
     *     locked_until_date: flags.9?int
     *     auction_slug: flags.11?string
     *     gifts_per_round: flags.11?int
     */
    interface RawStarGift_layer206 {
        _: 'starGift_layer206';
        limited?: boolean;
        soldOut?: boolean;
        birthday?: boolean;
        id: Long;
        sticker: tl.TypeDocument;
        stars: Long;
        availabilityRemains?: number;
        availabilityTotal?: number;
        availabilityResale?: Long;
        convertStars: Long;
        firstSaleDate?: number;
        lastSaleDate?: number;
        upgradeStars?: Long;
        resellMinStars?: Long;
        title?: string;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     todo_item_id: flags.11?int
     */
    interface RawMessageReplyHeader_layer206 {
        _: 'messageReplyHeader_layer206';
        replyToScheduled?: boolean;
        forumTopic?: boolean;
        quote?: boolean;
        replyToMsgId?: number;
        replyToPeerId?: tl.TypePeer;
        replyFrom?: tl.TypeMessageFwdHeader;
        replyMedia?: tlCompat.TypeMessageMedia;
        replyToTopId?: number;
        quoteText?: string;
        quoteEntities?: tl.TypeMessageEntity[];
        quoteOffset?: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     theme: flags.15?ChatTheme
     *     stars_rating: flags2.17?StarsRating
     *     stars_my_pending_rating: flags2.18?StarsRating
     *     stars_my_pending_rating_date: flags2.18?int
     *     main_tab: flags2.20?ProfileTab
     *     saved_music: flags2.21?Document
     *     note: flags2.22?TextWithEntities
     * Removed arguments: theme_emoticon
     */
    interface RawUserFull_layer209 {
        _: 'userFull_layer209';
        blocked?: boolean;
        phoneCallsAvailable?: boolean;
        phoneCallsPrivate?: boolean;
        canPinMessage?: boolean;
        hasScheduled?: boolean;
        videoCallsAvailable?: boolean;
        voiceMessagesForbidden?: boolean;
        translationsDisabled?: boolean;
        storiesPinnedAvailable?: boolean;
        blockedMyStoriesFrom?: boolean;
        wallpaperOverridden?: boolean;
        contactRequirePremium?: boolean;
        readDatesPrivate?: boolean;
        sponsoredEnabled?: boolean;
        canViewRevenue?: boolean;
        botCanManageEmojiStatus?: boolean;
        displayGiftsButton?: boolean;
        id: number;
        about?: string;
        settings: tl.TypePeerSettings;
        personalPhoto?: tl.TypePhoto;
        profilePhoto?: tl.TypePhoto;
        fallbackPhoto?: tl.TypePhoto;
        notifySettings: tl.TypePeerNotifySettings;
        botInfo?: tl.TypeBotInfo;
        pinnedMsgId?: number;
        commonChatsCount: number;
        folderId?: number;
        ttlPeriod?: number;
        themeEmoticon?: string;
        privateForwardName?: string;
        botGroupAdminRights?: tl.TypeChatAdminRights;
        botBroadcastAdminRights?: tl.TypeChatAdminRights;
        wallpaper?: tl.TypeWallPaper;
        stories?: tl.TypePeerStories;
        businessWorkHours?: tl.TypeBusinessWorkHours;
        businessLocation?: tl.TypeBusinessLocation;
        businessGreetingMessage?: tl.TypeBusinessGreetingMessage;
        businessAwayMessage?: tl.TypeBusinessAwayMessage;
        businessIntro?: tl.TypeBusinessIntro;
        birthday?: tl.TypeBirthday;
        personalChannelId?: number;
        personalChannelMessage?: number;
        stargiftsCount?: number;
        starrefProgram?: tl.TypeStarRefProgram;
        botVerification?: tl.TypeBotVerification;
        sendPaidMessagesStars?: Long;
        disallowedGifts?: tl.TypeDisallowedGiftsSettings;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     require_premium: flags.7?true
     *     limited_per_user: flags.8?true
     *     peer_color_available: flags.10?true
     *     auction: flags.11?true
     *     per_user_total: flags.8?int
     *     per_user_remains: flags.8?int
     *     locked_until_date: flags.9?int
     *     auction_slug: flags.11?string
     *     gifts_per_round: flags.11?int
     */
    interface RawStarGift_layer209 {
        _: 'starGift_layer209';
        limited?: boolean;
        soldOut?: boolean;
        birthday?: boolean;
        id: Long;
        sticker: tl.TypeDocument;
        stars: Long;
        availabilityRemains?: number;
        availabilityTotal?: number;
        availabilityResale?: Long;
        convertStars: Long;
        firstSaleDate?: number;
        lastSaleDate?: number;
        upgradeStars?: Long;
        resellMinStars?: Long;
        title?: string;
        releasedBy?: tl.TypePeer;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     theme: flags.15?ChatTheme
     *     stars_my_pending_rating: flags2.18?StarsRating
     *     stars_my_pending_rating_date: flags2.18?int
     *     main_tab: flags2.20?ProfileTab
     *     saved_music: flags2.21?Document
     *     note: flags2.22?TextWithEntities
     * Removed arguments: theme_emoticon
     */
    interface RawUserFull_layer210 {
        _: 'userFull_layer210';
        blocked?: boolean;
        phoneCallsAvailable?: boolean;
        phoneCallsPrivate?: boolean;
        canPinMessage?: boolean;
        hasScheduled?: boolean;
        videoCallsAvailable?: boolean;
        voiceMessagesForbidden?: boolean;
        translationsDisabled?: boolean;
        storiesPinnedAvailable?: boolean;
        blockedMyStoriesFrom?: boolean;
        wallpaperOverridden?: boolean;
        contactRequirePremium?: boolean;
        readDatesPrivate?: boolean;
        sponsoredEnabled?: boolean;
        canViewRevenue?: boolean;
        botCanManageEmojiStatus?: boolean;
        displayGiftsButton?: boolean;
        id: number;
        about?: string;
        settings: tl.TypePeerSettings;
        personalPhoto?: tl.TypePhoto;
        profilePhoto?: tl.TypePhoto;
        fallbackPhoto?: tl.TypePhoto;
        notifySettings: tl.TypePeerNotifySettings;
        botInfo?: tl.TypeBotInfo;
        pinnedMsgId?: number;
        commonChatsCount: number;
        folderId?: number;
        ttlPeriod?: number;
        themeEmoticon?: string;
        privateForwardName?: string;
        botGroupAdminRights?: tl.TypeChatAdminRights;
        botBroadcastAdminRights?: tl.TypeChatAdminRights;
        wallpaper?: tl.TypeWallPaper;
        stories?: tl.TypePeerStories;
        businessWorkHours?: tl.TypeBusinessWorkHours;
        businessLocation?: tl.TypeBusinessLocation;
        businessGreetingMessage?: tl.TypeBusinessGreetingMessage;
        businessAwayMessage?: tl.TypeBusinessAwayMessage;
        businessIntro?: tl.TypeBusinessIntro;
        birthday?: tl.TypeBirthday;
        personalChannelId?: number;
        personalChannelMessage?: number;
        stargiftsCount?: number;
        starrefProgram?: tl.TypeStarRefProgram;
        botVerification?: tl.TypeBotVerification;
        sendPaidMessagesStars?: Long;
        disallowedGifts?: tl.TypeDisallowedGiftsSettings;
        starsRating?: tl.TypeStarsRating;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     albums: flags.19?Vector<int>
     */
    interface RawStoryItem_layer210 {
        _: 'storyItem_layer210';
        pinned?: boolean;
        public?: boolean;
        closeFriends?: boolean;
        min?: boolean;
        noforwards?: boolean;
        edited?: boolean;
        contacts?: boolean;
        selectedContacts?: boolean;
        out?: boolean;
        id: number;
        date: number;
        fromId?: tl.TypePeer;
        fwdFrom?: tl.TypeStoryFwdHeader;
        expireDate: number;
        caption?: string;
        entities?: tl.TypeMessageEntity[];
        media: tlCompat.TypeMessageMedia;
        mediaAreas?: tl.TypeMediaArea[];
        privacy?: tl.TypePrivacyRule[];
        views?: tl.TypeStoryViews;
        sentReaction?: tl.TypeReaction;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     prepaid_upgrade: flags.11?true
     *     assigned: flags.13?true
     *     resale_amount: flags.8?StarsAmount
     *     drop_original_details_stars: flags.12?long
     * Removed arguments: resale_stars
     */
    interface RawMessageActionStarGiftUnique_layer210 {
        _: 'messageActionStarGiftUnique_layer210';
        upgrade?: boolean;
        transferred?: boolean;
        saved?: boolean;
        refunded?: boolean;
        gift: tlCompat.TypeStarGift;
        canExportAt?: number;
        transferStars?: Long;
        fromId?: tl.TypePeer;
        peer?: tl.TypePeer;
        savedId?: Long;
        resaleStars?: Long;
        canTransferAt?: number;
        canResellAt?: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     resale_ton_only: flags.7?true
     *     theme_available: flags.9?true
     *     gift_id: long
     *     resell_amount: flags.4?Vector<StarsAmount>
     *     value_amount: flags.8?long
     *     value_currency: flags.8?string
     *     theme_peer: flags.10?Peer
     *     peer_color: flags.11?PeerColor
     *     host_id: flags.12?Peer
     * Removed arguments: resell_stars
     */
    interface RawStarGiftUnique_layer210 {
        _: 'starGiftUnique_layer210';
        requirePremium?: boolean;
        id: Long;
        title: string;
        slug: string;
        num: number;
        ownerId?: tl.TypePeer;
        ownerName?: string;
        ownerAddress?: string;
        attributes: tl.TypeStarGiftAttribute[];
        availabilityIssued: number;
        availabilityTotal: number;
        giftAddress?: string;
        resellStars?: Long;
        releasedBy?: tl.TypePeer;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     theme: flags.15?ChatTheme
     *     main_tab: flags2.20?ProfileTab
     *     saved_music: flags2.21?Document
     *     note: flags2.22?TextWithEntities
     * Removed arguments: theme_emoticon
     */
    interface RawUserFull_layer211 {
        _: 'userFull_layer211';
        blocked?: boolean;
        phoneCallsAvailable?: boolean;
        phoneCallsPrivate?: boolean;
        canPinMessage?: boolean;
        hasScheduled?: boolean;
        videoCallsAvailable?: boolean;
        voiceMessagesForbidden?: boolean;
        translationsDisabled?: boolean;
        storiesPinnedAvailable?: boolean;
        blockedMyStoriesFrom?: boolean;
        wallpaperOverridden?: boolean;
        contactRequirePremium?: boolean;
        readDatesPrivate?: boolean;
        sponsoredEnabled?: boolean;
        canViewRevenue?: boolean;
        botCanManageEmojiStatus?: boolean;
        displayGiftsButton?: boolean;
        id: number;
        about?: string;
        settings: tl.TypePeerSettings;
        personalPhoto?: tl.TypePhoto;
        profilePhoto?: tl.TypePhoto;
        fallbackPhoto?: tl.TypePhoto;
        notifySettings: tl.TypePeerNotifySettings;
        botInfo?: tl.TypeBotInfo;
        pinnedMsgId?: number;
        commonChatsCount: number;
        folderId?: number;
        ttlPeriod?: number;
        themeEmoticon?: string;
        privateForwardName?: string;
        botGroupAdminRights?: tl.TypeChatAdminRights;
        botBroadcastAdminRights?: tl.TypeChatAdminRights;
        wallpaper?: tl.TypeWallPaper;
        stories?: tl.TypePeerStories;
        businessWorkHours?: tl.TypeBusinessWorkHours;
        businessLocation?: tl.TypeBusinessLocation;
        businessGreetingMessage?: tl.TypeBusinessGreetingMessage;
        businessAwayMessage?: tl.TypeBusinessAwayMessage;
        businessIntro?: tl.TypeBusinessIntro;
        birthday?: tl.TypeBirthday;
        personalChannelId?: number;
        personalChannelMessage?: number;
        stargiftsCount?: number;
        starrefProgram?: tl.TypeStarRefProgram;
        botVerification?: tl.TypeBotVerification;
        sendPaidMessagesStars?: Long;
        disallowedGifts?: tl.TypeDisallowedGiftsSettings;
        starsRating?: tl.TypeStarsRating;
        starsMyPendingRating?: tl.TypeStarsRating;
        starsMyPendingRatingDate?: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     main_tab: flags2.22?ProfileTab
     */
    interface RawChannelFull_layer211 {
        _: 'channelFull_layer211';
        canViewParticipants?: boolean;
        canSetUsername?: boolean;
        canSetStickers?: boolean;
        hiddenPrehistory?: boolean;
        canSetLocation?: boolean;
        hasScheduled?: boolean;
        canViewStats?: boolean;
        blocked?: boolean;
        canDeleteChannel?: boolean;
        antispam?: boolean;
        participantsHidden?: boolean;
        translationsDisabled?: boolean;
        storiesPinnedAvailable?: boolean;
        viewForumAsMessages?: boolean;
        restrictedSponsored?: boolean;
        canViewRevenue?: boolean;
        paidMediaAllowed?: boolean;
        canViewStarsRevenue?: boolean;
        paidReactionsAvailable?: boolean;
        stargiftsAvailable?: boolean;
        paidMessagesAvailable?: boolean;
        id: number;
        about: string;
        participantsCount?: number;
        adminsCount?: number;
        kickedCount?: number;
        bannedCount?: number;
        onlineCount?: number;
        readInboxMaxId: number;
        readOutboxMaxId: number;
        unreadCount: number;
        chatPhoto: tl.TypePhoto;
        notifySettings: tl.TypePeerNotifySettings;
        exportedInvite?: tl.TypeExportedChatInvite;
        botInfo: tl.TypeBotInfo[];
        migratedFromChatId?: Long;
        migratedFromMaxId?: number;
        pinnedMsgId?: number;
        stickerset?: tl.TypeStickerSet;
        availableMinId?: number;
        folderId?: number;
        linkedChatId?: number;
        location?: tl.TypeChannelLocation;
        slowmodeSeconds?: number;
        slowmodeNextSendDate?: number;
        statsDc?: number;
        pts: number;
        call?: tl.TypeInputGroupCall;
        ttlPeriod?: number;
        pendingSuggestions?: string[];
        groupcallDefaultJoinAs?: tl.TypePeer;
        themeEmoticon?: string;
        requestsPending?: number;
        recentRequesters?: number[];
        defaultSendAs?: tl.TypePeer;
        availableReactions?: tl.TypeChatReactions;
        reactionsLimit?: number;
        stories?: tl.TypePeerStories;
        wallpaper?: tl.TypeWallPaper;
        boostsApplied?: number;
        boostsUnrestrict?: number;
        emojiset?: tl.TypeStickerSet;
        botVerification?: tl.TypeBotVerification;
        stargiftsCount?: number;
        sendPaidMessagesStars?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     theme_available: flags.9?true
     *     gift_id: long
     *     value_amount: flags.8?long
     *     value_currency: flags.8?string
     *     theme_peer: flags.10?Peer
     *     peer_color: flags.11?PeerColor
     *     host_id: flags.12?Peer
     */
    interface RawStarGiftUnique_layer211 {
        _: 'starGiftUnique_layer211';
        requirePremium?: boolean;
        resaleTonOnly?: boolean;
        id: Long;
        title: string;
        slug: string;
        num: number;
        ownerId?: tl.TypePeer;
        ownerName?: string;
        ownerAddress?: string;
        attributes: tl.TypeStarGiftAttribute[];
        availabilityIssued: number;
        availabilityTotal: number;
        giftAddress?: string;
        resellAmount?: tl.TypeStarsAmount[];
        releasedBy?: tl.TypePeer;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     peer_color_available: flags.10?true
     *     auction: flags.11?true
     *     locked_until_date: flags.9?int
     *     auction_slug: flags.11?string
     *     gifts_per_round: flags.11?int
     */
    interface RawStarGift_layer211 {
        _: 'starGift_layer211';
        limited?: boolean;
        soldOut?: boolean;
        birthday?: boolean;
        requirePremium?: boolean;
        limitedPerUser?: boolean;
        id: Long;
        sticker: tl.TypeDocument;
        stars: Long;
        availabilityRemains?: number;
        availabilityTotal?: number;
        availabilityResale?: Long;
        convertStars: Long;
        firstSaleDate?: number;
        lastSaleDate?: number;
        upgradeStars?: Long;
        resellMinStars?: Long;
        title?: string;
        releasedBy?: tl.TypePeer;
        perUserTotal?: number;
        perUserRemains?: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     prepaid_upgrade: flags.13?true
     *     upgrade_separate: flags.16?true
     *     auction_acquired: flags.17?true
     *     prepaid_upgrade_hash: flags.14?string
     *     gift_msg_id: flags.15?int
     *     to_id: flags.18?Peer
     */
    interface RawMessageActionStarGift_layer211 {
        _: 'messageActionStarGift_layer211';
        nameHidden?: boolean;
        saved?: boolean;
        converted?: boolean;
        upgraded?: boolean;
        refunded?: boolean;
        canUpgrade?: boolean;
        gift: tlCompat.TypeStarGift;
        message?: tl.TypeTextWithEntities;
        convertStars?: Long;
        upgradeMsgId?: number;
        upgradeStars?: Long;
        fromId?: tl.TypePeer;
        peer?: tl.TypePeer;
        savedId?: Long;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     theme: ChatTheme
     * Removed arguments: emoticon
     */
    interface RawMessageActionSetChatTheme_layer211 {
        _: 'messageActionSetChatTheme_layer211';
        emoticon: string;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     note: flags2.22?TextWithEntities
     */
    interface RawUserFull_layer214 {
        _: 'userFull_layer214';
        blocked?: boolean;
        phoneCallsAvailable?: boolean;
        phoneCallsPrivate?: boolean;
        canPinMessage?: boolean;
        hasScheduled?: boolean;
        videoCallsAvailable?: boolean;
        voiceMessagesForbidden?: boolean;
        translationsDisabled?: boolean;
        storiesPinnedAvailable?: boolean;
        blockedMyStoriesFrom?: boolean;
        wallpaperOverridden?: boolean;
        contactRequirePremium?: boolean;
        readDatesPrivate?: boolean;
        sponsoredEnabled?: boolean;
        canViewRevenue?: boolean;
        botCanManageEmojiStatus?: boolean;
        displayGiftsButton?: boolean;
        id: number;
        about?: string;
        settings: tl.TypePeerSettings;
        personalPhoto?: tl.TypePhoto;
        profilePhoto?: tl.TypePhoto;
        fallbackPhoto?: tl.TypePhoto;
        notifySettings: tl.TypePeerNotifySettings;
        botInfo?: tl.TypeBotInfo;
        pinnedMsgId?: number;
        commonChatsCount: number;
        folderId?: number;
        ttlPeriod?: number;
        theme?: tl.TypeChatTheme;
        privateForwardName?: string;
        botGroupAdminRights?: tl.TypeChatAdminRights;
        botBroadcastAdminRights?: tl.TypeChatAdminRights;
        wallpaper?: tl.TypeWallPaper;
        stories?: tl.TypePeerStories;
        businessWorkHours?: tl.TypeBusinessWorkHours;
        businessLocation?: tl.TypeBusinessLocation;
        businessGreetingMessage?: tl.TypeBusinessGreetingMessage;
        businessAwayMessage?: tl.TypeBusinessAwayMessage;
        businessIntro?: tl.TypeBusinessIntro;
        birthday?: tl.TypeBirthday;
        personalChannelId?: number;
        personalChannelMessage?: number;
        stargiftsCount?: number;
        starrefProgram?: tl.TypeStarRefProgram;
        botVerification?: tl.TypeBotVerification;
        sendPaidMessagesStars?: Long;
        disallowedGifts?: tl.TypeDisallowedGiftsSettings;
        starsRating?: tl.TypeStarsRating;
        starsMyPendingRating?: tl.TypeStarsRating;
        starsMyPendingRatingDate?: number;
        mainTab?: tl.TypeProfileTab;
        savedMusic?: tl.TypeDocument;
    }
    /**
     * Entry was removed from the schema
     */
    interface RawEmojiStatusUntil_layer214 {
        _: 'emojiStatusUntil_layer214';
        documentId: Long;
        until: number;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     peer_color: flags.11?PeerColor
     *     host_id: flags.12?Peer
     */
    interface RawStarGiftUnique_layer214 {
        _: 'starGiftUnique_layer214';
        requirePremium?: boolean;
        resaleTonOnly?: boolean;
        themeAvailable?: boolean;
        id: Long;
        giftId: Long;
        title: string;
        slug: string;
        num: number;
        ownerId?: tl.TypePeer;
        ownerName?: string;
        ownerAddress?: string;
        attributes: tl.TypeStarGiftAttribute[];
        availabilityIssued: number;
        availabilityTotal: number;
        giftAddress?: string;
        resellAmount?: tl.TypeStarsAmount[];
        releasedBy?: tl.TypePeer;
        valueAmount?: Long;
        valueCurrency?: string;
        themePeer?: tl.TypePeer;
    }
    /**
     * Compared to the current schema, changes from this entry:
     * 
     * Added arguments:
     *     assigned: flags.13?true
     *     drop_original_details_stars: flags.12?long
     */
    interface RawMessageActionStarGiftUnique_layer214 {
        _: 'messageActionStarGiftUnique_layer214';
        upgrade?: boolean;
        transferred?: boolean;
        saved?: boolean;
        refunded?: boolean;
        prepaidUpgrade?: boolean;
        gift: tlCompat.TypeStarGift;
        canExportAt?: number;
        transferStars?: Long;
        fromId?: tl.TypePeer;
        peer?: tl.TypePeer;
        savedId?: Long;
        resaleAmount?: tl.TypeStarsAmount;
        canTransferAt?: number;
        canResellAt?: number;
    }
    interface RpcCallReturn {
    }
    type TypeStarGift = tlCompat.RawStarGiftUnique_layer197 | tlCompat.RawStarGiftUnique_layer198 | tlCompat.RawStarGiftUnique_layer202 | tlCompat.RawStarGift_layer202 | tlCompat.RawStarGiftUnique_layer206 | tlCompat.RawStarGift_layer206 | tlCompat.RawStarGift_layer209 | tlCompat.RawStarGiftUnique_layer210 | tlCompat.RawStarGiftUnique_layer211 | tlCompat.RawStarGift_layer211 | tlCompat.RawStarGiftUnique_layer214 | tl.TypeStarGift
    type TypeEmojiStatus = tlCompat.RawEmojiStatus_layer197 | tlCompat.RawEmojiStatusUntil_layer214 | tl.TypeEmojiStatus
    type TypeMessageMedia = tlCompat.RawMessageMediaDocument_layer197 | tl.TypeMessageMedia
    type TypeChatFull = tlCompat.RawChannelFull_layer197 | tlCompat.RawChannelFull_layer204 | tlCompat.RawChannelFull_layer211 | tl.TypeChatFull
    type TypeMessageAction = tlCompat.RawMessageActionStarGiftUnique_layer197 | tlCompat.RawMessageActionStarGift_layer197 | tlCompat.RawMessageActionStarGiftUnique_layer202 | tlCompat.RawMessageActionPaidMessagesPrice_layer203 | tlCompat.RawMessageActionStarGiftUnique_layer210 | tlCompat.RawMessageActionStarGift_layer211 | tlCompat.RawMessageActionSetChatTheme_layer211 | tlCompat.RawMessageActionStarGiftUnique_layer214 | tl.TypeMessageAction
    type TypeUserFull = tlCompat.RawUserFull_layer199 | tlCompat.RawUserFull_layer200 | tlCompat.RawUserFull_layer209 | tlCompat.RawUserFull_layer210 | tlCompat.RawUserFull_layer211 | tlCompat.RawUserFull_layer214 | tl.TypeUserFull
    type TypePremiumGiftOption = tlCompat.RawPremiumGiftOption_layer199
    type TypeUser = tlCompat.RawUser_layer199 | tl.TypeUser
    type TypeChat = tlCompat.RawChannel_layer199 | tlCompat.RawChannel_layer203 | tl.TypeChat
    type TypeMessage = tlCompat.RawMessage_layer199 | tlCompat.RawMessageService_layer204 | tlCompat.RawMessage_layer204 | tl.TypeMessage
    type TypePhoneCallDiscardReason = tlCompat.RawPhoneCallDiscardReasonAllowGroupCall_layer202 | tl.TypePhoneCallDiscardReason
    type TypeMessageReplyHeader = tlCompat.RawMessageReplyHeader_layer206 | tl.TypeMessageReplyHeader
    type TypeStoryItem = tlCompat.RawStoryItem_layer210 | tl.TypeStoryItem

    type TlObject =
        | tlCompat.RawStarGiftUnique_layer197
        | tlCompat.RawEmojiStatus_layer197
        | tlCompat.RawMessageMediaDocument_layer197
        | tlCompat.RawChannelFull_layer197
        | tlCompat.RawMessageActionStarGiftUnique_layer197
        | tlCompat.RawMessageActionStarGift_layer197
        | tlCompat.RawStarGiftUnique_layer198
        | tlCompat.RawUserFull_layer199
        | tlCompat.RawPremiumGiftOption_layer199
        | tlCompat.RawUser_layer199
        | tlCompat.RawChannel_layer199
        | tlCompat.RawMessage_layer199
        | tlCompat.RawUserFull_layer200
        | tlCompat.RawStarGiftUnique_layer202
        | tlCompat.RawStarGift_layer202
        | tlCompat.RawMessageActionStarGiftUnique_layer202
        | tlCompat.RawPhoneCallDiscardReasonAllowGroupCall_layer202
        | tlCompat.RawChannel_layer203
        | tlCompat.RawMessageActionPaidMessagesPrice_layer203
        | tlCompat.RawChannelFull_layer204
        | tlCompat.RawMessageService_layer204
        | tlCompat.RawMessage_layer204
        | tlCompat.RawStarGiftUnique_layer206
        | tlCompat.RawStarGift_layer206
        | tlCompat.RawMessageReplyHeader_layer206
        | tlCompat.RawUserFull_layer209
        | tlCompat.RawStarGift_layer209
        | tlCompat.RawUserFull_layer210
        | tlCompat.RawStoryItem_layer210
        | tlCompat.RawMessageActionStarGiftUnique_layer210
        | tlCompat.RawStarGiftUnique_layer210
        | tlCompat.RawUserFull_layer211
        | tlCompat.RawChannelFull_layer211
        | tlCompat.RawStarGiftUnique_layer211
        | tlCompat.RawStarGift_layer211
        | tlCompat.RawMessageActionStarGift_layer211
        | tlCompat.RawMessageActionSetChatTheme_layer211
        | tlCompat.RawUserFull_layer214
        | tlCompat.RawEmojiStatusUntil_layer214
        | tlCompat.RawStarGiftUnique_layer214
        | tlCompat.RawMessageActionStarGiftUnique_layer214
        | tl.TlObject
}