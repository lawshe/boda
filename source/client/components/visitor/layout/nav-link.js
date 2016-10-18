import React from 'react';
import Link from 'react-router/lib/Link';

export default () => {
  const isActive = this.context.router.isActive(this.props.to, true);
  let className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <Link {...this.props}>
        {this.props.children}
      </Link>
    </li>
  );
};
