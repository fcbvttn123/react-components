export function Badge({children, bgColor, shape="square", ...props}) {
    let btnShape = shape == "square" ? "px-3 py-1 rounded-lg" : "px-5 py-1 rounded-2xl"

    const colorMatch = bgColor.match(/bg-(\w+)-\d+/)
    const color = colorMatch ? colorMatch[1] : null;
    let textStyle = `text-${color}-800`

    return (
        <button 
            className={`${bgColor} ${btnShape} ${textStyle} font-semibold`} 
            {...props}
        >
            {children}
        </button>
    )
}