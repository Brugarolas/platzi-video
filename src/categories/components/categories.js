import React from 'react';
import Category from './category';
import SearchContainer from '../../widgets/containers/search-container';

function Categories (props) {
  const { categories, openModal } = props;

  const renderCategories = (categories, openModal) => {
    return categories.map((category) => {
      return (
        <Category {...category} openModal={openModal} key={category.id} />
      );
    });
  };

  return (
    <section className='categories'>
      <SearchContainer />
      {
        renderCategories(categories, openModal)
      }
    </section>
  );
}

export default Categories;
