import CategoryItem from '../category-item/category-item';

import './directory.scss';

const Directory = ({categories}) => {
    return(
        <div className='directory-container'>
          {
            categories.map((category) => {
              return <CategoryItem categories={category} key={category.id}/>
            })
          }
        </div>
        )
};

export default Directory;
