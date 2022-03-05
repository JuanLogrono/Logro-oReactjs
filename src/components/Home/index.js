import banner from '../iconos/imagenes/banner.jpg';
import './style.css';
import useGetFirestore from '../../Hooks/useGetFirestore';
import Item from '../ItemList/Item';


const Home = () => {
  const { data, isLoading } = useGetFirestore(undefined, 4)
  if (isLoading) {
    return <b>cargando...</b>
  } else return <article className='principal__article--order'>
    <img className='principal__img--size' src={banner} alt='banner' />
    {data.map((item) => <Item key={item.id} items={item} />)}
  </article>

};

export default Home;
