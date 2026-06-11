export default function ImageValidator(e) {
    if (e.target.files.length === 0)
        return "Pic Field Is Mandatory"
    else if (e.target.files.length === 1) {
        let pic = e.target.files[0]
        if (pic.size > 1048576)
            return "Pic is Too Heavy, Please Upload an Image Less Then Or Equal 1 MB"
        else if (!(pic.type === "image/jpg" || pic.type === "image/jpeg" || pic.type === "image/png" || pic.type === "image/gif" || pic.type === "image/jpeg" || pic.type === "image/avif"))
            return "Invalid Pic Format, Please Upload an Image of Type .jpg,.jpeg,.png,.Git"
        else
            return ""
    }
    else {
        let files = Array.from(e.target.files)
        let errorMessage = []
        files.forEach((pic, index) => {
            if (pic.size > 1048576)
                errorMessage.push(`Pic size ${index + 1} to Too High ,Please Upload an Image less than 1mb`)
            else if (!(pic.type === "image/jpg" || pic.type === "image/jpeg" || pic.type === "image/png" || pic.type === "image/gif" || pic.type === "image/jpeg" || pic.type === "image/avif"))
                errorMessage.push(`Invalid Pic${index} Format, Please Upload an Image of Type .jpg,.jpeg,.png,.Git`)
        })
        return errorMessage.length ? errorMessage : ""
    }

}
