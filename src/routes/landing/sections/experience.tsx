import canadaComputers from "../../../assets/canada-computers.png";

const companies = [
    { image: canadaComputers, name: "Canada Computers & Electronics", role: "Business Applications Developer", type: "Internship", date: "Sept. 2024 - Dec. 2024", location: "Richmond Hill, ON"  },
]

export default function Experience() {
    return (
        <div className="flex flex-col items-center gap-y-10 py-20 h-[1000px] overflow-hidden">
            <div className="text-3xl font-medium text-center">Experience</div>
                <div className="flex flex-col">
                {companies.map((company) => (
                    <div className="flex flex-row gap-x-10">
                        <img src={canadaComputers} className="h-60" />
                        <div className="flex flex-col">
                            <div>{company.name}</div>
                            <div>{company.role}</div>
                            <div>{company.type}</div>
                        </div>
                        <div className="flex flex-col">
                            <div>{company.date}</div>
                            <div>{company.location}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}