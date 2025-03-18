// Code: InputFields Component
// This component is used to create input fields for the login form. It takes two props, type and placeholder, which are used to define the type of input field and the placeholder text, respectively. The input field is required to be filled in by the user. The component is used in the Log_in_Page component to create input fields for the email and password.
interface InputFieldsProps {
    type: string;
    placeholder: string;
}

export default function InputFields({ type, placeholder }: InputFieldsProps) {
    return (
        <div>
            <input type={type} className="login-form--input" placeholder={placeholder} required />
        </div>
    );
}