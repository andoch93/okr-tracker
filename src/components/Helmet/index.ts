import React, { ReactElement } from 'react';
import Helmet from 'react-helmet';

export function Head(): ReactElement {
  return (
    <Helmet>
      <meta name="title" content="okr-tracker" />
      <meta name="description" content="Fresh new app" />
      <meta name="keywords" content="social media, productivity" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="12 days" />
      <meta name="author" content="Creative type" />
      <title>okr-tracker</title>
    </Helmet>
  );
}
