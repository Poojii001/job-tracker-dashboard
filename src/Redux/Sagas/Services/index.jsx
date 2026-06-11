//use this function if payload doesn't contain any file field like an image
export async function createRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    }
    catch (error) {
        // console.log(`Error In API Calling Service : ${error}`)
        console.log(error)
        return []
    }
}

//use this function if payload contains any file field like image
export async function createMultipartRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
            },
            body: payload
        })
        response = await response.json()
        return response
    }
    catch (error) {
        // console.log(`Error In API Calling Service : ${error}`)
        console.log(error)
        return []
    }
}


export async function getRecord(collection,payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method : "GET",
            headers : {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        return response
    } catch (error) {
        // console.log(`Error In API Calling Service : ${error}`)
        console.log(error)
        return []
    }
}


export async function updateRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    }
    catch (error) {
        // console.log(`Error In API Calling Service : ${error}`)
        console.log(error)
        return []
    }
}


//use this function if payload contains any file field like image
export async function updateMultipartRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.get("id")}`, {
            method: "PUT",
            headers: {
            },
            body: payload
        })
        response = await response.json()
        return response
    }
    catch (error) {
        // console.log(`Error In API Calling Service : ${error}`)
        console.log(error)
        return []
    }
}

export async function deleteRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        return response
    }
    catch (error) {
        // console.log(`Error In API Calling Service : ${error}`)
        console.log(error)
        return []
    }
}