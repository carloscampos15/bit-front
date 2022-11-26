export const InputRead = ({ title, value, col }) => {
    return (
        <div className={`col-md-${col} col-sm-12`}>
            <label>{title}</label>
            <input type="text" className="form-control" disabled readOnly value={value} />
        </div>
    )
}
