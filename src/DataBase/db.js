export default function Db(props){
    let tempData = 1
    let base = {
        idNow: tempData,
        user: {
            Id: 1,
            firstNameUser1:"John",
            lastNameUser1:"Doe"
        }
    }

    let functionAdd = () => {
        base.idNow = base.idNow + 1
    }
}