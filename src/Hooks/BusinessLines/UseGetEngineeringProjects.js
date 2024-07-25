

const UseGetEngineeringProjects = async () => {
    try {
        const response = await fetch(process.env.SERVER_URL +'/projects?category=1',
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

export default UseGetEngineeringProjects;

