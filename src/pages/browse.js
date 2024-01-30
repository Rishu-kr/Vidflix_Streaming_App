import React from 'react';
 import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';


export default function Browse() {
  const { series } = useContent('series');
  console.log(series);
  const { films } = useContent('films');
  console.log(films);
  const slides = selectionFilter({ series, films });
  console.log(slides);
  return <BrowseContainer slides={slides} />;
}