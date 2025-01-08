import '../landing.css';
import canadaComputers from "../../../assets/canada-computers.png";

const companies = [
    { image: canadaComputers, name: "Canada Computers & Electronics", role: "Business Applications Developer · Internship", date: "Sept. 2024 - Dec. 2024"},
]

export default function Experience() {
    return (
        <div className="flex flex-col items-center px-6 pt-24 pb-40">
            <div className="header font-bold text-center mb-4">My Professional Experience.</div>
            <div className="subheader text-darkgray text-center">As a student, I'm eager to expand my knowledge and gain diverse experience.</div>
            <div className="w-full flex flex-wrap place-content-center gap-10 mt-12">
                {companies.map((company, index) => (
                    <div key={index} className="flex flex-col bg-white px-5 pt-5 rounded-xl shadow-xl w-full max-w-[614px] text-center">
                        <div className="flex flex-col mt-4">
                            <div className="text-3xl font-bold">{company.name}</div>
                            <div className="text-darkgray p-4">{company.role}</div>
                            <div className="text-lg text-emerald-600 mb-10">{company.date}</div>
                        </div>
                        <img src={company.image} className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}