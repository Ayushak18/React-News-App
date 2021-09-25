import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [articles, setarticle] = useState();
  let [country, setCountry] = useState('us');
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=e32f45482d5041bbba0d456fbef10099`
    )
      .then((newData) => newData.json())
      .then((news) => setarticle(news.articles));
  });

  function handleChange(event) {
    setCountry(event.target.options[event.target.options.selectedIndex].value);
  }

  if (articles) {
    return (
      <>
        <div className="drop-down">
          <select onChange={handleChange}>
            <option value="" key="">
              Select Country
            </option>
            <option value="us" key="us">
              USA
            </option>
            <option value="ar" key="ar">
              Argetina
            </option>
            <option value="ae" key="ae">
              UAE
            </option>
            <option value="at" key="at">
              Austria
            </option>
            <option value="ca" key="ca">
              Canada
            </option>
          </select>
        </div>
        <div className="news-articles">
          {articles.map((article, index) => {
            if (index < 12) {
              return (
                <div className="news-article" key={index}>
                  <img src={article.urlToImage} alt={article.title} />
                  <p>
                    <strong>Author</strong> - {article.author}
                  </p>
                  <h3 key={index}>{article.title}</h3>
                  <a href={article.url}>Link</a>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  } else {
    return <h1>No Data</h1>;
  }
}

export default App;
