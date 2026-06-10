import React from 'react'

export default function FormValidator(e) {
    let { name, value } = e.target

    switch (name) {
        case "name":
            if (!value || value.length === 0)
                return name + "Field is Mandatory"
            else if (value.length < 3 || value.length > 30)
                return name + "Field Length Must be 3-30 Characters"
            else
                return ""

        default:
            if (!value || value.length === 0)
                return name + " Field is Mandatory"
            else if (value.length < 2)
                return name + " must be at least 2 characters"
            else
                return ""


    }

}
