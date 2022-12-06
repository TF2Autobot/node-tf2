import SteamUser from 'steam-user';
import EventEmitter from 'events';

declare class TF2 extends EventEmitter {
    constructor(client: SteamUser);

    haveGCSession: boolean;

    premium: boolean;

    backpackSlots: number | undefined;

    setLang(localizationFile: string): void;

    craft(items: string[], recipe?: number): void;

    deleteItem(item: string): void;

    useItem(item: string): void;

    sortBackpack(sortType: number): void;

    removeItemAttribute(item: string, attribute: TF2.Attributes): void;

    // Maybe just add
    applyStrangePart(item: string, strangPartItemID: string): void;

    applyStrangifierOrUnusualifier(item: string, strangifierOrUnusualifierID: string): void;

    on(event: 'systemMessage', handler: (message: string) => void): this;

    on(event: 'displayNotification', handler: (title: string, body: string) => void): this;

    on(event: 'itemBroadcast', handler: (message: string, username: string, wasDestruction: boolean, defindex: number) => void): this;
}

declare namespace TF2 {
    export enum Attributes {
        Paint = 1031,
        CustomTexture = 1051,
        MakersMark = 1053,
        Killstreak = 1094,
        GiftedBy = 2570,
        Festivizer = 2572
    }
}

export = TF2;