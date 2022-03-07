import styled from "styled-components";

export function Input({ type, placeholder }) {
  return <InputField type={type} placeholder={placeholder}></InputField>;
}

const InputField = styled.input`
  border-radius: 0.5rem;
  box-shadow: 0.5rem 0.25rem 0.25rem black;
  margin: 1rem;
`;
