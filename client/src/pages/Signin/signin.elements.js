import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);   
    color: ${({theme}) => theme.text};
    flex-direction: column; 
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`

export const Title = styled.h1`
    font-size: 24px;

`

export const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
`

export const Input = styled.input`
    border: 1px solid ${({theme}) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
`

export const Button = styled.button`
    border-radius: 3px;
    border: 1px solid #3ea6ff;
    padding: 10px 20px;
    width: 100%;
    cursor: pointer;
    background-color: transparent;
    color: #3ea6ff;
    font-weight: 500;

    &:hover{
        color: white;
        background-color: #3ea6ff;
    }
`

export const More = styled.div`
    display: flex;
    font-size: 12px;
    color: ${({theme}) => theme.textSoft};
    margin-top: 10px;

`
export const Links = styled.div`
    margin-left: 40px;
`
export const Link = styled.span`
    margin-left: 20px;
`
