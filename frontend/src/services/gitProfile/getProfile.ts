import axios from "axios"

const GetProfile = async (profile: string) => {

    let item: Array<any> = []


    // await axios.get(`${process.env.REACT_APP_API}/top-terms`)
    await axios.get(`http://localhost:8010/profile/${profile}`)
        .then((response) => {
            item = response.data
        })
        .catch((error) => {
            console.log(error)
        })

        return item
    
}

export default GetProfile