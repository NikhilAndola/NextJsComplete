import { useRouter } from "next/router"
import Navbar from "../../components/Navbar";

const pageNo = () => {

    const router = useRouter();
    const pageNumber = router.query.pageNo;

    return (
            <>
        <div>
        <Navbar/>
            dynamic route file. using []- square brackets.
        <h1>My {pageNumber} content </h1>
        </div>
        </>
    )
}

export default pageNo
