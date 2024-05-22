// Input box for signin and signup fields
const InputBox = ({name, type, id, value, placeholder, iconName}) => {
    return(
        
        <div className="relative w-[100%] m-4">
            <input 
                name={name}
                type={type}
                id={id}
                placeholder={placeholder}
                defaultValue={value}
                className="input-box"
            />
            <i className={"fi " + iconName + " input-icon"}></i>
        </div>
        
    )

}

export default InputBox;