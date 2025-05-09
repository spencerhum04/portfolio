import '../landing.css';
import canadaComputers from "../../../assets/canada-computers.png";
import yupi from "../../../assets/yupi.png";
import Workplace from '../../../components/Workplace';

export default function Experience() {
    return (
        <div className="flex flex-col items-center px-6 pt-24 pb-40">
            <div className="header font-bold text-center mb-4">My Professional Experience.</div>
            <div className="subheader text-darkgray text-center">As a student, I'm eager to expand my knowledge and gain diverse experience.</div>
            <div className="w-full flex flex-wrap place-content-center gap-10 mt-12">
                <Workplace name={"Canada Computers & Electronics"} role={"Business Applications Developer · Internship"} date={"Sept. 2024 - Dec. 2024"} image={canadaComputers} />
                <Workplace name={"Yupi.ca"} role={"Software Engineer · Internship"} date={"May. 2025 - Present"} image={yupi} />
            </div>
        </div>
    )
}