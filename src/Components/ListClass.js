const ListClass = (props) => {
    return (
       <div>
           {
               props.items.map(item => {
                   return (
                    <div>
                        <div className="list-group mt-3 w-50" key={item.key}>
                        <button type="button" className="list-group-item  list-group-item-action list-group-item-secondary">
                                {item.todo}
                        </button>
                        </div>
                        <button type="button" className="btn btn-danger mt-2" onClick={ () => props.deleteItem(item.key)}>Delete</button>
                    </div>
                   )
               })
           }
       </div>
    )
}

export default ListClass;