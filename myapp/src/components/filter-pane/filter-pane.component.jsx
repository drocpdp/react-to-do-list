
const FilterPane = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div 
                        className="d-flex align-items-center p-3 border rounded bg-light" 
                        style={{ width: 'fit-content' }}
                    >
                        <div 
                            className="label-container" 
                            style={{ marginRight: '20px' }}
                        >
                            <label 
                                htmlFor="dropdownMenuLink" 
                                className="mb-0"
                            > 
                                <span>Filter by:</span>
                            </label>
                        </div>
                        <a 
                            className="btn btn-secondary dropdown-toggle" 
                            href="#" 
                            role="button" 
                            id="dropdownMenuLink" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                        >
                            Filter
                        </a>
                        <div 
                            className="flex-grow-1">
                        </div> {/* Filler column */}
                    </div>
                </div>
            </div>
        </div>




    )
}

export default FilterPane;