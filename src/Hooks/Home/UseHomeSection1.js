

const UseHomeSection1 = async () => {
    try {
        const response = await fetch(process.env.SERVER_URL +'/home/section1',
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

export default UseHomeSection1;