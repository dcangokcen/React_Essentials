import { CORE_CONCEPTS } from "../data.js";
import CoreConsept from "./CoreConcept";


export default function CoreConsepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConsept key={conceptItem.title} {...conceptItem} />
                ))}
            </ul>
        </section>
    );
}