
export interface TraitReference {
    trait_ids: number,
    alternate_name: string
}

export interface Equipment {
    type: string,
    id: number,
    name: string,
    description: string,
    max_count: number,
    funding: number,
    reputation: number,
    traits: Array<TraitReference>
}

export function isEquipment(obj: any): obj is Equipment {
    return obj.type === "equipment"
}

export interface Trait {
    type: string,
    id: number,
    name: string,
    description: string
}

export function isTrait(obj: any): obj is Trait {
    return obj.type === "trait"
}