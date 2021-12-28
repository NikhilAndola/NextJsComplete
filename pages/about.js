import Navbar from "../components/Navbar"
import Image from "next/image"
import Head from "next/head"

const aboutPage = () => {
    return (
        <>
        <Head>
        <title>About</title>
      </Head>
        <Navbar/>
        <style jsx>
            {`  
                #jsxStyle {
                    color: green;
                }
            `}
         </style>

         <h1>This is About page</h1>   
         
         <h1 style={{color: "red"}}>Using inline styling</h1>

         <h1 id="jsxStyle">Using jsx inline styling</h1>

         <Image src="/monster.jpg" width='500' height= "300"></Image>

         {/* <Image alt="External image in next js"
                src="https://images.pexels.com/photos/9459781/pexels-photo-9459781.jpeg?cs=srgb&dl=pexels-leticia-azevedo-9459781.jpg&fm=jpg" width='500' height= "300"></Image> */}

         {/* <Image alt="External image in next js"
                src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg" width='500' height= "300"></Image> */}
      
        </>
    )
    }

export default aboutPage
