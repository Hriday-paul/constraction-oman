import Nav from "@/components/Shared/Nav/Nav";




const layout = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
        </div>
    );
};

export default layout;