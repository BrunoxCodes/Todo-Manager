import { useEffect, useState } from "react";

interface quoteProps{
    id: number,
    quote: string,
    author: string
}

export default function useQuotes() {
    const[quote,setQuote] = useState<quoteProps | null>(null);
    // const[loader,setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const getQuote = async() => {
            try{
                const res = await fetch("https://dummyjson.com/quotes/random");
                const data: quoteProps = await res.json();

                if(!res.ok){
                    throw new Error("Quote not found")
                }

                console.log(data);
                setQuote(data)
            }catch(error){
                console.error(error);
            }
            // finally{
            //     setLoading(false)
            // }
        }

        getQuote()
    },[])

    return { quote }
};