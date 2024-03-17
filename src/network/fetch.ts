const baseUrl = 'https://logiclike.com/'
export const fetchData = async (path: string): Promise<any> => {
    try {
        const result = await fetch(`${baseUrl}${path}`)
        return await result.json()
    } catch (err) {
        throw err;
    }
}
