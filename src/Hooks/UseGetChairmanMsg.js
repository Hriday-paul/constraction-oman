

const UseGetChairmanMsg = async (position) => {
    try {
        const response = await fetch(process.env.SERVER_URL +`/director?position=${position}`,
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

export default UseGetChairmanMsg;
