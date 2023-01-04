import SteamUser from 'steam-user';
import EventEmitter from 'events';
import * as Backpack from 'tf2-backpack';
import SteamID from 'steamid';

declare class TF2 extends EventEmitter {
    constructor(client: SteamUser);

    haveGCSession: boolean;

    itemSchema: Backpack.ItemsGame;

    backpack: Backpack.NodeTF2Backpack;

    premium: boolean;

    backpackSlots: number | undefined;

    canSendProfessorSpeks: boolean;

    setLang(localizationFile: string): void;

    craft(items: string[], recipe?: number): void;

    trade(steamID: SteamID): void;

    cancelTradeRequest(): void;

    respondToTrade(tradeID: string, accept: boolean): void;

    setStyle(item: string, style: number): void;

    setPosition(item: string, position: number): void;

    deleteItem(item: string): void;

    wrapItem(wrapID: string, itemID: string): void;

    deliverGift(gift: string, steamID: SteamID): void;

    unwrapGift(gift: string): void;

    useItem(item: string): void;

    tradeUP(items: string[]): void;

    removeItemAttribute(item: string, attribute: TF2.Attributes): void;

    // Maybe just add
    applyStrangePart(item: string, strangPartItemID: string): void;

    applyStrangifierOrUnusualifier(item: string, strangifierOrUnusualifierID: string): void;

    sortBackpack(sortType: number): void;

    sendProfessorSpeks(steamID: SteamID): void;

    createServerIdentity(): void;

    getRegisteredServers(): void;

    resetServerIdentity(id: string): void;

    openCrate(keyID: string, crateID: string): void;

    requestWarStats(warID?: number, callback?: (err: Error, data: TF2.WarStats) => void): void;

    on(event: 'connectedToGC', handler: (version: string) => void): this;

    on(event: 'disconnectedToGC', handler: (reason: string) => void): this;

    on(event: 'itemSchema', handler: (version: string, itemsGameUrl: string) => void): this;

    on(event: 'itemSchemaLoaded', handler: () => void): this;

    on(event: 'itemSchemaError', handler: (err: Error) => void): this;

    on(event: 'systemMessage', handler: (message: string) => void): this;

    on(event: 'displayNotification', handler: (title: string, body: string) => void): this;

    on(
        event: 'itemBroadcast',
        handler: (message: string, username: string, wasDestruction: boolean, defindex: number) => void
    ): this;

    on(event: 'tradeResponse', handler: (response: number, tradeID: string) => void): this;

    on(event: 'backpackLoaded', handler: () => void): this;

    on(event: 'accountLoaded', handler: () => void): this;

    on(event: 'accountUpdate', handler: (oldData: Record<string, any>) => void): this;

    on(event: 'itemAcquired', handler: (item: Backpack.BackpackEntry) => void): this;

    on(event: 'itemChanged', handler: (oldItem: Backpack.BackpackEntry, newItem: Backpack.BackpackEntry) => void): this;

    on(event: 'itemRemoved', handler: (item: Backpack.BackpackEntry) => void): this;

    on(event: 'craftingComplete', handler: (recipe: number, itemsGained: Backpack.BackpackEntry[]) => void): this;

    on(event: 'professorSpeksSent', handler: () => void): this;

    on(
        event: 'createIdentity',
        handler: (status: TF2.EStatus, created: boolean, id: string, token: string) => void
    ): this;

    on(event: 'registeredServers', handler: (servers: TF2.ServerTF2) => void): this;

    on(event: 'resetIdentity', handler: (reset: boolean, id: string, token: string) => void): this;

    on(event: 'warStats', handler: (scores: TF2.WarStats) => void): this;
}

declare namespace TF2 {
    export enum GCGoodbyeReason {
        GC_GOING_DOWN = 1,
	    NO_SESSION = 2
    }

    export enum TradeResponse {
        Accepted = 0,
        Declined = 1,
        TradeBannedInitiator = 2,
        TradeBannedTarget = 3,
        TargetAlreadyTrading = 4,
        Disabled = 5,
        NotLoggedIn = 6,
        Cancel = 7,
        TooSoon = 8,
        TooSoonPenalty = 9,
        ConnectionFailed = 10,
        AlreadyTrading = 11,
        AlreadyHasTradeRequest = 12,
        NoResponse = 13,
        CyberCafeInitiator = 14,
        CyberCafeTarget = 15,
        SchoolLabInitiator = 16,
        SchoolLabTarget = 16, // ?
        InitiatorBlockedTarget = 18,
        InitiatorNeedsVerifiedEmail = 20,
        InitiatorNeedsSteamGuard = 21,
        TargetAccountCannotTrade = 22,
        InitiatorSteamGuardDuration = 23,
        InitiatorPasswordResetProbation = 24,
        InitiatorNewDeviceCooldown = 25,
        OKToDeliver = 50
    }

    export enum Class {
        Scout = 1,
        Sniper = 2,
        Soldier = 3,
        Demoman = 4,
        Medic = 5,
        Heavy = 6,
        Pyro = 7,
        Spy = 8,
        Engineer = 9
    }

    export enum ItemSlot {
        Primary = 0,
        Secondary = 1,
        Melee = 2,
        // 3 appears to be unused
        Sapper = 4, // Sapper
        PDA = 5,
        PDA2 = 6,
        Cosmetic1 = 7,
        Cosmetic2 = 8,
        Action = 9,
        Cosmetic3 = 10,
        Taunt1 = 11,
        Taunt2 = 12,
        Taunt3 = 13,
        Taunt4 = 14,
        Taunt5 = 15,
        Taunt6 = 16,
        Taunt7 = 17,
        Taunt8 = 18
    }

    export enum ItemFlags {
        CannotTrade = (1 << 0),
        CannotCraft = (1 << 1),
        NotEcon = (1 << 3),
        Preview = (1 << 7)
    }

    export enum War {
        HeavyVsPyro = 0
    }

    export enum HeavyVsPyroWarSide {
        Heavy = 0,
        Pyro = 1
    }

    export enum Attributes {
        Paint = 1031,
        CustomTexture = 1051,
        MakersMark = 1053,
        Killstreak = 1094,
        GiftedBy = 2570,
        Festivizer = 2572
    }

    export enum EStatus {
        kStatus_GenericFailure = 0,
        kStatus_TooMany = -1,
        kStatus_NoPrivs = -2,
        kStatus_Created = 1
    }

    export interface ServerTF2 {
        game_server_account_id: number;
        game_server_identity_token: string;
        game_server_standing: number;
        game_server_standing_trend: number;
    }

    export interface WarStats {
        [side: string]: number;
    }
}

export = TF2;
