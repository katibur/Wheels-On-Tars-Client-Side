import { useEffect, useState } from "react"


const useBuyer = email => {

    const [isBuyerLoading, setIsBuyerLoading] = useState(true);

    const [isBuyer, setIsBuyer] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [email]);
    return [isBuyer, isBuyerLoading];
}

export default useBuyer;