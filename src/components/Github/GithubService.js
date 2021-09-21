const GH_API_ENDPOINT = "https://api.github.com"

async function getUserInformations(username){
    const res = await fetch(GH_API_ENDPOINT + '/users/' + username, {
        headers: {
            "Accept": "application/vnd.github.v3+json"
        }
    });
    if(res.status != 200) throw res.body;
    return await res.json();
}

export {
    getUserInformations
}