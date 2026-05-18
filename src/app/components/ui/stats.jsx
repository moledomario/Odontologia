

const StatsItem = ({ title, text, style }) => {
    return (
        <div className={`flex flex-col justify-center items-center ${style}`}>
            <h1 className="text-5xl font-bold text-blue-500 mb-2">{title}</h1>
            <p className="text-gray-700">{text}</p>
        </div>
    )
}

export default StatsItem