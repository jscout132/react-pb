// you can add a user token using local window storage
// for this specific project, we should grab a profile token from the existing
// phone book application and set it to token
// this project is pulling what we did in insomnia into the site
// we know the calls work because we tested them in insomia, now we're bringing them
// into the application
// same with using the glitch url

 
//find a way to get the current user token
let token = '100b7c26a8725b54c6ef31436b8cdd59ea699705f9e88652'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://kind-bumpy-stork.glitch.me/api/contacts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()//read more about this
    },

    create: async (data: any={}) => {
        const response = await fetch(`https://kind-bumpy-stork.glitch.me/api/contacts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)//read more about this
    });

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any={}) => {
        const response = await fetch(`https://kind-bumpy-stork.glitch.me/api/contacts/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
    });
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },


    delete: async (id: string) => {
        const response = await fetch(`https://kind-bumpy-stork.glitch.me/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
    });
        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}