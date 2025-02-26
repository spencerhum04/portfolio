import "../landing.css";

const projects = [
    { tools: ["TypeScript", "JavaScript", "React", "TailwindCSS", "ExpressJS", "PostgreSQL"], title: "CookKeeper", body: "Full-stack recipe management website designed to help you catalog, organize, and easily access your favorite personal recipes.", github: "https://github.com/spencerhum04/CookKeeper" },
    { tools: ["TypeScript", "JavaScript", "React", "TailwindCSS", "ExpressJS", "MongoDB"], title: "Workout Planner", body: "Full-stack CRUD application to organize and plan workouts using the workout type, weight/load, and number of repetitions.", github: "https://github.com/spencerhum04/workout-planner" },
    { tools: ["JavaScript", "p5js"], title: "Genetic Rockets", body: "A program where rockets learn to increase accuracy progressively to reach a certain point using the results of previous attempts.", github: "https://github.com/spencerhum04/Genetic-Rockets" },
]

export default function Projects() {
    return (
        <div className="flex flex-col py-24 lg:items-center">
            <div className="header font-bold text-center mb-4 px-6">My Personal Projects.</div>
            <div className="subheader text-darkgray text-center px-6">Personal projects allow me to apply my skills, explore new technologies, and create meaningful solutions.</div>
            <div className="overflow-x-auto hide-scrollbar mt-12">
                <div className="flex flex-row gap-x-4 justify-start w-max px-6">
                    {projects.map((project, index) => (
                        <div key={index} className="shadow-sm bg-white w-full max-w-[358px] h-[300px] rounded-[40px] px-6 py-8 relative overflow-hidden">
                            <div className="flex flex-col items-center justify-between h-full text-center">
                                <div className="flex flex-col px-2.5 gap-y-2.5">
                                    <div className="text-2xl font-bold">{project.title}</div>
                                    <div className="text-darkgray text-sm">{project.body}</div>
                                </div>
                                <div className="px-2.5 py-4">
                                    <div className="flex flex-wrap gap-2 place-content-center">
                                        {project.tools.map((tool, index) => (
                                            <div key={index} className="bg-emerald-400 text-xs font-medium rounded-2xl px-2.5 py-1">{tool}</div>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-2 items-center">
                                    <div className="un font-medium">GitHub</div>
                                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}