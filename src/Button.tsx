import './Button.scss'
type Types = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

interface Props {
    type: Types
    children: string
}

export default function Button ({ type, children }: Props){
    return <button className={`btn btn--${type}`}>{children}</button>
}