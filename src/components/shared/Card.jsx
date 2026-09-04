function Card({ className = '', children, as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`bg-white border border-slate-200 rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] transition-shadow duration-200 ease-out ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Card.Header = function CardHeader({ className = '', children }) {
  return <div className={`mb-3 ${className}`}>{children}</div>
}

Card.Body = function CardBody({ className = '', children }) {
  return <div className={className}>{children}</div>
}

Card.Footer = function CardFooter({ className = '', children }) {
  return <div className={`mt-4 pt-4 border-t border-slate-100 ${className}`}>{children}</div>
}

export default Card
