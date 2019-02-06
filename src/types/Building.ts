export interface Building {
    readonly _id: string;
    readonly name: string;
    readonly description: string;
    readonly image: string;
}

export interface BuildingResponse {
    readonly items: Building[];
    readonly hasMore: boolean;
}