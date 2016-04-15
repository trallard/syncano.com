import React from 'react';
import classNames  from 'classnames';

export default ({ theme, headline, children }) => {
  const textPanelsPanelClass = classNames({
    'text-panels__panel': true,
    'text-panels__panel--azure': (theme == 'azure'),
    'text-panels__panel--graphite': (theme == 'graphite'),
    'text-panels__panel--purple': (theme == 'purple')
  });

  return (
    <div className={textPanelsPanelClass}>
      <h3>{headline}</h3>
      {children}
    </div>
  );
}
