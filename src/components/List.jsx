import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return { 
    articles: state.articles, 
    articleMessages: state.articleMessages };
};

const ConnectedList = ({articles,articleMessages}) => (
  console.dir(articles),  
  console.dir(articleMessages),
  <div>
    <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
  <ul className="list-group list-group-flush">
    {articleMessages.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.message}
      </li>
    ))}
  </ul>
  </div>
);
// const ArticleMessages = ({articleMessages}) => (

// );
const List = connect(mapStateToProps) (ConnectedList);

export default List;