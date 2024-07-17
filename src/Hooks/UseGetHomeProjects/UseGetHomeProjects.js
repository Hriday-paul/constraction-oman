

const UseGetHomeProjects = async () => {
    try {
        const response = await fetch('/http://localhost:3000/api/projects?type=best&limit=5',
            {
                next:
                    { revalidate: 5 }
            });
        const res = response.json();
        return res
    } catch (err) {
        console.log(err);
        //throw new Error('fetching error')
    }
};

export default UseGetHomeProjects;