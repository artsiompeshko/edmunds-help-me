import style from './search-result.styles.scss';

const SearchResult = ({ searchResult }) => (
  <div class={style['search-result']}>
    <h6>I bet you are looking for:</h6>
    <ul>
      {searchResult?.e?.items.map(edmundsLinkItem => (
        <li class={style['search-result-item']}>
          <a href={edmundsLinkItem.link} target="_blank" rel="noreferrer">
            <div
              class={style['search-result-img']}
              style={`background-image: url(${
                edmundsLinkItem?.pagemap?.cse_image?.[0]?.src || '/assets/icons/edmunds-logo.png'
              });`}
            />
            <div>
              <p>{edmundsLinkItem.title.slice(0, 65)}</p>
            </div>
          </a>
        </li>
      ))}
      <h6>Also checkout our YouTube channel:</h6>
      {searchResult?.y?.items.map(youtubeLinkItem => (
        <li class={style['search-result-item']}>
          <a href={youtubeLinkItem.link} target="_blank" rel="noreferrer">
            <div
              class={style['search-result-img']}
              style={`background-image: url(${
                youtubeLinkItem?.snippet?.thumbnails?.default?.url || '/assets/icons/youtube-logo.jpg'
              });`}
            />
            <div class={style['search-result-description']}>
              <p>
                {
                  new DOMParser().parseFromString(youtubeLinkItem.snippet.title.slice(0, 65), 'text/html').body
                    .innerHTML
                }
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SearchResult;
