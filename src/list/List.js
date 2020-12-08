import { Link } from 'react-router-dom';

const List = () => {
  const list = ['hoge', 'huga', 'piyo'];

  return (
    <div className="List">
      <ul>
        { list.map((value) => <li>{value} <Link to="/detail"><button className="default">to detail</button></Link></li>) }
      </ul>
    </div>
  );
}

export default List;
