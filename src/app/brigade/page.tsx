
import { projectLinks } from "../constants";
import ProjectGrid from "../components/ProjectGrid";
export default function BrigadePage() {
    const brigade = projectLinks.find((p) => p.href === "/brigade");

    if (!brigade) return null;

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">{brigade.label}</h1>
            <p className="text-gray-600 mb-8">{brigade.description}</p>
            <ProjectGrid projects={brigade.projects} />
        </div>
    );
}
