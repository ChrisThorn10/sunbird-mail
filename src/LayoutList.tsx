import Layout from './Layout';
import Hero1 from '../src/assets/layouts/hero-1.jpg'
import Hero2 from '../src/assets/layouts/hero-2.jpg'


const LayoutList = (props : any) => {

  const LAYOUTS = [
    { id: 1, name: 'hero1', ref: Hero1 },
    { id: 2, name: 'hero2', ref: Hero2 },
]

  return (
    <div className="Layout" style={{overflow: "auto"}}>
      <h1>Layout Panel</h1>
      <p>Select a Layout</p>
      {LAYOUTS.map(layout => 
        <Layout key={layout.id} draggable id={layout.id} imgAlt={layout.name} name={layout.name} imgSrc={layout.ref} />
      )}  
    </div>  
  );
}

export default LayoutList;
