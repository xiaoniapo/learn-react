import { appkey, rootURL, allUrl } from './config'

export async function getAllStudent() {
    return await fetch(rootURL + allUrl + '?appkey=' + appkey)
        .then((data) => data.json())
        .then((resp) => resp.data)
}
