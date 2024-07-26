
const UseGetDirectors_pManagers = async () => {
    try {
        const response = await fetch(process.env.SERVER_URL +`/peoples`,
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

export default UseGetDirectors_pManagers;

