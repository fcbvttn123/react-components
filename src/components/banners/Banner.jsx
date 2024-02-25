export function Banner({status, title, text, ...props}) {
    let colorTheme = null
    let iconPath = null
    let textColor = null

    if(status.toLowerCase() == "success") {
        colorTheme = "bg-green-100"
        iconPath = "./banner-icons/checked.png"
        textColor = "green"
    } else if(status.toLowerCase() == "attention") {
        colorTheme = "bg-yellow-100"
        iconPath = "./banner-icons/attention.png"
        textColor = "yellow"
    }   else if(status.toLowerCase() == "error") {
        colorTheme = "bg-red-100"
        iconPath = "./banner-icons/error.png"
        textColor = "red"
    } else {
        colorTheme = "bg-blue-100"
        iconPath = "./banner-icons/information.png"
        textColor = "blue"
    }

    return (
        <div className={`${colorTheme} flex items-stretch gap-x-3 max-w-3xl p-3 rounded-lg`}>
            <div className={`flex ${title ? "items-start mt-1" : "items-center"}`}>
                <img className="w-5" src={iconPath} alt="" />
            </div>
            <div className="items-start">
                <h1 className={`text-${textColor}-900 font-semibold`}>{title}</h1>
                <p className={`text-${textColor}-900`}>{text}</p>
            </div>
        </div>
    )
}