import axios from "axios"

const termsDeleteAll = async () => {


    // await axios.get(`${process.env.REACT_APP_API}/top-terms`)
    await axios.delete(`http://localhost:8010/terms-all-delete`)
        .then(() => {
          alert("Deletado")

        })
        .catch((error) => {
            console.log(error)
        })
        return

}

export default termsDeleteAll
