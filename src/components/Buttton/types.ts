export interface ButtonProps {
    label: string
    variant?: 'primary' | 'secondary' | 'outlined'
    size?: 'small' | 'medium' | 'large' | string
    backgroundColor?: string
    onClick: () => void
}
