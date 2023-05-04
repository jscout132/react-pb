// you can add a user token using local window storage
// for this specific project, we should grab a profile token from the existing
// phone book application and set it to token
// this project is pulling what we did in insomnia into the site
// we know the calls work because we tested them in insomia, now we're bringing them
// into the application
// same with using the glitch url

 

let token = '30fed3a1a5522598552e18b9f2a1a1a7b13177d531182211'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://kind-bumpy-stork.glitch.me/api/contacts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },


// TODO: finish server calls
}