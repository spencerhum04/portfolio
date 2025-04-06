export default function Workplace({ name, role, date, image } : { name: String, role: String, date: String, image: string }) {
    return (
        <div className="flex flex-col bg-white px-5 pt-5 rounded-xl shadow-xl w-full max-w-[614px] text-center">
            <div className="flex flex-col mt-4">
                <div className="text-3xl font-bold">{name}</div>
                <div className="text-darkgray p-4">{role}</div>
                <div className="text-lg text-emerald-600 mb-10">{date}</div>
            </div>
            <img src={image} className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover" />
        </div>
    )
}