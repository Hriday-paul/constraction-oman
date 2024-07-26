
const UseGetContactInfo = async () => {
    try {
        const response = await fetch(process.env.SERVER_URL +`/contact`,
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

export default UseGetContactInfo;

