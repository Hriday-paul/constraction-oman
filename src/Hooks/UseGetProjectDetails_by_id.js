
const UseGetProjectDetails_by_id = async ({id}) => {
    try {
        const response = await fetch(process.env.SERVER_URL +`/projects/${id}`,
            {
                next:
                    { revalidate: 5 }
            });
        const res = response.json();
        return res
    } catch (err) {
        console.log(err);
        throw new Error('fetching error')
    }
};

export default UseGetProjectDetails_by_id;
