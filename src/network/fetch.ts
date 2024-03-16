const baseUrl = 'https://logiclike.com/'
export const fetchData = async (path: string) => {
    try {
        const result = await fetch(`${baseUrl}${path}`)
        return await result.json()
    } catch (err) {
        throw err;
    }
}
