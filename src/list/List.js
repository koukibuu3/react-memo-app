const List = () => {
  const list = ['hoge', 'huga', 'piyo'];

  return (
    <div className="App">
      <ul>
        { list.map((value) => <li>{value}</li>)}
      </ul>
    </div>
  );
}

export default List;
