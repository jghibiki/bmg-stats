
import { MetricsObject, MatchResult, EventMetadata } from '../metrics/MetricsObject';

export function convertTp(tp: number) {
    if (tp == 0) {
        return "L"
    }
    else if (tp == 2) {
        return "D"
    }
    else {
        return "W"
    }
}

export function calculateCrewPlayerCounts(metrics: Array<MatchResult>) {
    var crewPlayers = new Map<string, Set<string>>()
    var crewPlayerCounts = new Map<string, number>()

    for (var metric of metrics) {
        let player = metric.player
        let event_slug = metric.tornament_slug || ""
        let crew = metric.crew

        let _cp = crewPlayers.get(crew) || new Set<string>()
        _cp.add(player + event_slug) // small hack to count cross event players correctly
        crewPlayers.set(
            crew,
            _cp
        )
    }

    for (var crew of crewPlayers.keys()) {
        crewPlayerCounts.set(
            crew,
            crewPlayers.get(crew)?.size || 0
        )
    }

    return crewPlayers
}