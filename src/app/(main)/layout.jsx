import Footer from "@/components/Shared/Footer/Footer";
import Nav from "@/components/Shared/Nav/Nav";
import ScrollAnim from "@/components/Shared/ScrollAnim/ScrollAnim";

const layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <ScrollAnim>
                {children}
            </ScrollAnim>
            <Footer />
        </div>
    );
};

export default layout;