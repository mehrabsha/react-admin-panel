import { PageTitle } from "../../../_metronic/layout/core"
import UsersT from "../../templates/users/UsersT"

const Users = () => {
    return (
       <>
        <PageTitle breadcrumbs={[]}>Users</PageTitle>
        <UsersT/>
       </>
    )
}

export default Users