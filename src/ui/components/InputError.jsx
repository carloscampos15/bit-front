export const InputError = ({ param, display = "" }) => {
    if (!!param) return (
        <div className={`invalid-feedback ${display}`}>
            {param.message}
        </div>
    )
}
