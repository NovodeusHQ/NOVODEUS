import React from 'react'
import { IButton } from '@/types/components';
import Link from 'next/link';
import styles from "../../app/page.module.scss";

const Button: React.FC<IButton> = ({
  text,
  className,
  padding,
  link,
  href = "#"
}) => {
  if (link) {
    return (
      <button className={`${className} themeBtn btn btn-primary rounded-pill`}
      >
        <Link href={href} className='no-link-underline text-white'
          style={{ paddingLeft: padding, paddingRight: padding }}
        >{text}</Link>
      </button>
    )
  }

  return (
    <button className={`${className} themeBtn btn btn-primary rounded-pill`}
      style={{ paddingLeft: padding, paddingRight: padding }}
    >
      {text}
    </button>
  )
}

export default Button