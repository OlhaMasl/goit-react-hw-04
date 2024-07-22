import { MagnifyingGlass } from "react-loader-spinner";
import s from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={s.loader}>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="rgb(14, 13, 13)"
            />
        </div>
    );
};
export default Loader;