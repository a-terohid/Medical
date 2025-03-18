import localFont from "next/font/local";

 export const Plus_Jakarta_Sans = localFont({
    display: 'swap',
    variable: '--font-Plus-Jakarta-Sans',
    src: [
        {
            path: "/public/Fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "/public/Fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "/public/Fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "/public/Fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "/public/Fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
    ]
})



export const FONTS =`${ Plus_Jakarta_Sans.variable }`
