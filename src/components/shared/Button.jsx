import { Link } from 'react-router-dom'

const SIZE_CLASSES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base',
}

const VARIANT_CLASSES = {
  primary:
    'bg-brand-blue text-white shadow-[0_4px_6px_rgba(37,99,235,0.15)] hover:bg-brand-blue-dark',
  secondary:
    'bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white',
  'secondary-inverse':
    'bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-blue',
  'primary-inverse':
    'bg-white text-brand-blue hover:bg-slate-100',
  text: 'bg-transparent text-brand-blue font-semibold hover:underline p-0',
}

/**
 * Shared Button. Renders a <Link> when `to` is provided (internal route),
 * an anchor when `href` is provided (in-page smooth scroll / external),
 * otherwise a <button>.
 *
 * Props: variant, size, icon (Lucide component), iconPosition ('left'|'right'),
 * to, href, onClick, disabled, className, children
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  to,
  href,
  onClick,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-[0.01em] transition-all duration-200 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
  const sizeClasses =
    variant === 'text' ? 'text-base min-h-[44px]' : `${SIZE_CLASSES[size]} min-h-[48px]`
  const classes = `${base} ${sizeClasses} ${VARIANT_CLASSES[variant]} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  )
}
