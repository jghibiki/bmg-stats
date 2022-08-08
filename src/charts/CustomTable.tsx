import { Component, For, createMemo, createSignal, createEffect, Show, } from 'solid-js';
import { Tab, Table } from "solid-bootstrap"
import 'solid-simple-table/dist/SimpleTable.css'
import { MatchResult } from '../metrics/MetricsObject';

const CustomTable: Component<{
    contents: Array<MatchResult>
}> = (props) => {

    const data = createMemo(() => props.contents)
    const keys = () => Array.from(Object.keys(data()[0]))

    return (
        <Table striped hover class={"table-sm"}>
            <thead>
                <tr>
                    <For each={keys()}>{(key, i) =>
                        <th>{key}</th>
                    }</For>
                </tr>
            </thead>
            <tbody>
                <For each={data()}>{(row, i) =>
                    <tr>
                        <For each={keys()}>{(key, j) =>
                            <td>{Object.entries(row).filter(e => e[0] === key)[0][1]}</td>
                        }</For>
                    </tr>
                }</For>
            </tbody>
        </Table>
    )

}

export default CustomTable