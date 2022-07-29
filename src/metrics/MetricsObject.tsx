
export interface MatchResult {
    round: number
    table: number
    player: string
    crew: string
    encounter: string
    event: string
    vp: number
    tp: number
    casualty_points: number
}

export interface MetricsObject {
    stats: MatchResult[]
}

export interface EventMetadata {
    name: string
    date: string
    stats: string
    slug: string
}