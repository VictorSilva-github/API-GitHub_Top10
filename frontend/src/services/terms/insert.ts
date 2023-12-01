import axios from "axios"

const InsertTerm = async (term: string) => {

    const newItem = {
        termo: term
    }

    await axios.post(`http://localhost:8010/search-terms`, newItem , {})
        .then(() => {
            console.log("sucesso na inserção")
        })
        .catch((error) => {
            console.log(error)
        })
    
}

export default InsertTerm