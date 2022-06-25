import { useCounter,useFetch } from "../hooks";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {

      const {counter,increment} = useCounter()

const {data,isLoading,hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
                    //Acá estamos preguntando si la data es false devolveme data[0]    
const {author,quote} = !!data && data[0];

return (
    <>
    <h1>Breaking Bad Quotes</h1>
    <hr/>
    {/* {
        isLoading ? (
      <div className="alert alert-info text-center">
        Loading...
      </div>
        ): (
            <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )
    } */}
    {
        isLoading ? <LoadingQuote/> : <Quote quote={quote} author={author}/>
    }

    <button disabled={isLoading} onClick={() => increment()} className="btn btn-primary">
        Next Quote
    </button>
    
   

    </>


    )
}
