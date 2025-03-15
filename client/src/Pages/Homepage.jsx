import Records from '../Components/Records'
import Form from '../Components/Form'


const Homepage = () => {

   
  return (

    <div className='flex flex-col lg:flex-row justify-around bg-stone-200 h-[100vh]'>
        <Form/>
        <Records/>
    </div>
  )
}

export default Homepage