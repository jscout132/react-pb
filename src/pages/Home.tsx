import Background from '../assets/city-pop.png'

function Home() {
  return (
    <div 
    style={{ backgroundImage:`url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
      <div className='flex place-item-center h-screen'>
        <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>
          Welcome to the phonebook
        </h3>
      </div>
    </div>
  );
}

export default Home;
