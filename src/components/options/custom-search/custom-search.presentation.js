import style from './custom-search.styles.scss';

const CustomSearch = ({ query, handleQueryChange, handleOnSubmit, loading }) => (
  <form onSubmit={handleOnSubmit} class={style['custom-search']}>
    <input
      name="edm-hm-search"
      id="edm-hm-search"
      value={query}
      placeholder="e.g. What’s faster: a 911 or a Mustang?"
      onInput={handleQueryChange}
      autoFocus
    />
    <button disabled={loading} type="submit">
      GO
    </button>
  </form>
);

export default CustomSearch;
