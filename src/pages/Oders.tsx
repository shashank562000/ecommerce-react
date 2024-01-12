import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";
type Datatype= {
    _id:string;
    amount:number;
    quantity:number;
    discount:number;
    status :ReactElement;
    action :ReactElement;
}

const column : Column<Datatype>[]= [
    {
        Header:"ID",
        accessor:"_id"
    },
    {
        Header:"Quantity",
        accessor:"quantity"
    },{
        Header:"Discount",
        accessor:"discount"
    },{
        Header:"Amount",
        accessor:"amount"
    },{
        Header:"Status",
        accessor:"status"
    },{
        Header:"Action",
        accessor:"action"
    }
]

function Oders() {
    const [row] = useState<Datatype[]>([
        {_id:"sdsdsdsssdsfsdsdsd",
        amount:2232,
        quantity:3,
        discount:200,
        status :<span className="red">
            Processing
        </span>,
        action :<Link to={`order/sdsdsdsd`}>View</Link>}
    ])

    const Table = TableHOC<Datatype>(column,row, "dashboard-product-box", "Orders",false)();
  return (
    <div className="contaner">

        <h1>My Orders</h1>
        {Table}

    </div>
  )
}

export default Oders