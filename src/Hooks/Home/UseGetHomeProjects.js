

const UseGetHomeProjects = async () => {
    try {
        const response = await fetch(process.env.SERVER_URL +'/projects?type=best&limit=8',
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

export default UseGetHomeProjects;