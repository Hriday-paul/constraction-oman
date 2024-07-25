

const UseGetClients = async () => {
    try {
        const response = await fetch(process.env.SERVER_URL +'/clients',
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

export default UseGetClients;
