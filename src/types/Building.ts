export interface BuildingBase {
    readonly _id: string;
    readonly name: string;
    readonly description: string;
    readonly image: string;
}

export interface BuildingPost extends BuildingBase {
    content: string;
}

export interface ItemsResponse<T> {
    readonly items: Array<T>;
    readonly hasMore: boolean;
}