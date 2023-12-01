import axios from "axios"

const GetTop10 = async () => {

    let item: Array<any> = []


    // await axios.get(`${process.env.REACT_APP_API}/top-terms`)
    await axios.get(`http://localhost:8010/top-terms`)
        .then((response) => {
            item = response.data
        })
        .catch((error) => {
            console.log(error)
        })

        return item
    
}

export default GetTop10