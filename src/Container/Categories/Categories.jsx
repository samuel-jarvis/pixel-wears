import React from 'react'
import { Heading, SubHeading} from '../../globalStyles';
import {CategoriesContainer, 
  CategoriesList,
  CategoriesItem,
  RoundLogo
} from './CategoriesStyled';
import categories from '../../Data/categories';
import roundLogo from '../../assets/roundLogo.png';

const Categories = () => {
  return (
    <CategoriesContainer>
      <Heading>Categories</Heading>
      <SubHeading>Explore by category</SubHeading>

      <CategoriesList>
        {categories.map(category => (
          <CategoriesItem to='/shop' key={category.id}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </CategoriesItem>
        ))} 
      </CategoriesList>

      <RoundLogo>
        <img src={roundLogo} alt="round logo" />
      </RoundLogo>
    </CategoriesContainer>
  )
}

export default Categories