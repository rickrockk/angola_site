import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/documents")({
    component: Documents,
});

function Documents() {
    return (
        <div>
            <h1>Документы</h1>
        </div>
    )
}