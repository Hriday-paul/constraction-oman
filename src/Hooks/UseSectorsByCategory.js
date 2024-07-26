
const UseSectorsByCategory = async ({category_id}) => {
    try {
        const response = await fetch(process.env.SERVER_URL +`/sectors?category=${category_id}`,
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

export default UseSectorsByCategory;
