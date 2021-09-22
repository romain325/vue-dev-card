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

async function getUserProfileReadme(username){
    const res = await fetch(`${GH_API_ENDPOINT}/repos/${username}/${username}/readme`, {
        headers:{ 'accept': 'application/vnd.github.3+json' }
    });
    if(res.status != 200) throw res.body;
    const content = (await res.json()).content;
    return ghMarkdown(Buffer.from(content, 'base64').toString());
}

async function ghMarkdown(markdownContent){
    const res = await fetch(`${GH_API_ENDPOINT}/markdown`, {
        headers:{ 'accept': 'application/vnd.github.3+json', 'Content-Type': 'application/json', },
        method: "POST",
        body: JSON.stringify({"text": markdownContent,})
    });
    return await res.text();
}

export {
    getUserInformations,
    getUserProfileReadme
}