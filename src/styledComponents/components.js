import styled from 'styled-components'



// Reuseable components
export const SectionTitle =  styled.h3`
    font-size: ${props => props.fontSize ? props.fontSize : '3rem'};
    font-family: ${props => props.theme.fonts.primary};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    margin-bottom: 2rem;
`
export const BodyText = styled.p`
    font-size: 1rem;
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.color.text};
    margin-bottom: ${props => props.margin ? props.margin : "1.5rem"};
`

export const IconCard = styled.div`
    width: ${props => props.width ? props.width : "65px"};
    height: ${props => props.height ? props.height : "65px"};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    background-color: ${props => props.theme.color.primaryMain};
    background-image: ${props => props.gradientColor};
`
export const IconListItem = styled.li`
    display: flex;
    gap: 1rem;
    margin-bottom: 0.5rem;
`



export const ContendButton = styled.button`
    outline: none;
    border: none;
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.sm ? '1rem' : '1.2rem'};
    color: ${props => props.theme.color.white};
    background: ${props => props.theme.color.primaryMain};
    padding: ${props => props.sm ? '0.5rem 1rem' : '.80rem 1.5rem'};
    border-radius: 0.5rem;
    box-shadow: 0px 16px 22px -15px ${props => props.theme.color.primaryMain};
`
export const LinkButton = styled.button`
    outline: none;
    border: none;
    background: none;
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.sm ? '1rem' : '1.2rem'};
    color: ${props => props.theme.color.secondaryMain};
    padding-bottom: 0.2rem;
    border-bottom: 2px solid ${props => props.theme.color.secondaryMain};
`


// Footer
export const WidgetTitle = styled.h4`
    padding-bottom: 3rem;
    font-size: 1.4rem;
    font-weight: 500;
`
export const WidgetList = styled.ul`
    list-style: none;
`
export const WidgetListItem = styled.li`
    padding-bottom: 10px;
    color: ${props => props.theme.color.text}
`
export const Widget = styled.div`

`