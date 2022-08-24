import { MyTextField } from 'components/UI/TextField/TextField';


export const GenericFormField = ({id, label, name, type}) => {
    return (
        <MyTextField
            id={id}
            label={label}
            name={name}
            type={type}
        />
    )
}
