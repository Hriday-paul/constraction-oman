
const UseGetProjectsByFilter = async ({ category_id, sector_id, search }) => {
    try {
        let url = '/projects?list=1'
        if (category_id) {
            url = url + `&category=${category_id}`
        }
        if (sector_id) {
            url = url + `&sector=${sector_id}`
        }
        if (search) {
            url = url + `&search=${search}`
        }
        const response = await fetch(process.env.SERVER_URL + url,
            {
                next:
                    { revalidate: 5 }
            });
        if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }
        const res = response.json();
        return res
    } catch (err) {
        console.log(err);
        throw new Error('fetching error')
    }
};

export default UseGetProjectsByFilter;