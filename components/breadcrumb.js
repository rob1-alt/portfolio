import { Link } from 'next/link';

const Breadcrumb = (props) => {
  const { items } = props;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          return (
            <li key={index} className="breadcrumb-item">
              <Link href={item.url}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
