import Navbar from "../../components/Navbar"

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((curElem) => {
        return {
            params: { 
                pageNo: curElem.id.toString(),
             },
        };
    });

    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps = async (context) => {
    const id = context.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  };

const myData = ({data}) => {
    return (
        <>
    <Navbar/>
    <div key={data.id}>
            <h3>{data.id}</h3>   
            <h2>{data.title}</h2>   
            <p>{data.body}</p>   
    </div>

        </>
    )
}

export default myData
