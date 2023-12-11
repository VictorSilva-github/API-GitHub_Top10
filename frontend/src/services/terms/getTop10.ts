import axios from "axios"

interface ITop {
  id: number
  term: string
}


const GetTop10 = async () => {

    let item: Array<ITop> = []


    // await axios.get(`${process.env.REACT_APP_API}/top-terms`)
    await axios.get(`http://localhost:8010/top-terms`)
        .then((response) => {
          // console.log(response.data.top)
          item = response.data.top

        })
        .catch((error) => {
            console.log(error)
        })

        return item

}

export default GetTop10
