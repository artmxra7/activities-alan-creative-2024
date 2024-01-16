const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input type={type} className='text-sm border rounded w-full px-4 py-2 text-slate-700 placeholder:opacity-50' placeholder={placeholder} name={name} id={name} />
    );
};

export default Input;
