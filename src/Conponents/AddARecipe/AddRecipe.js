import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import HeadTitle from '../../Shared/HeadTitle';

const AddRecipe = () => {

  const { user } = useContext(AuthContext)
  const imgbbUrl = "https://api.imgbb.com/1/upload?key=33925baffb85e91b514a5e50db64550e"

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const productName = form.productName.value;
    const purchase = form.purchase.value;
    const description = form.description.value;
    const postingDate = form.postingDate.value;
    const ingredient = form.ingredient.value;
    const method = form.method.value;
    const sellerEmail = user.email;

    // console.log(postingDate, productName, purchase, sellerEmail, selling, usedYears, location)
    // image adding to imgbb
    const image = form.image.files[0];
    const formData = new FormData()
    formData.append('image', image)

    fetch(imgbbUrl,
      {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(photoData => {

        // product data posting in the database.
        if (photoData.success) {
          const productData = {
            product_name: productName,
            price: purchase,
            description,
            postingDate,
            sellerEmail,
            img: photoData.data.display_url,
            ingredient,
            method,
          }
          fetch('http://localhost:5000/addedTopProducts', {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(productData)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.data.acknowledged) {
                toast.success('Product Added successfully');
                form.reset()
              }
            })
        }
        else {
          toast.error('please provide a valid photo')
        }
      })
  }

  return (
    <section className="p-6 bg-[#f2e8d1cc] text-gray-500 w-3/5 mx-auto">
      <HeadTitle title="AddRecipe"></HeadTitle>

      <h1 className='text-center py-5 text-4xl font-bold text-orange-600'>Add Your Recipe</h1>
      <form
        className="container flex flex-col mx-auto space-y-12 w-3/5 "
        onSubmit={handleOnSubmit}>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full ">
              <label htmlFor="productName" className="text-sm ml-2">Product Name</label>
              <input
                id="productName"
                name='productName'
                type="text"
                placeholder="Your car Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3"
                required
              />
            </div>
            <div className="col-span-full ">
              <label htmlFor="image" className="text-sm ml-2">Product Image</label>
              <input
                id="image"
                type="file"
                name='image'
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3 flex-grow  h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300  shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline pt-2"
                required />
            </div>
            <div className="col-span-full">
              <label htmlFor="description" className="text-sm">Product Details</label>
              <textarea
                id="description"
                name='description'
                placeholder=" your food description in brief"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                required></textarea>
            </div>
            <div className="col-span-full lg:col-span-3 ">
              <label htmlFor="purchase" className="text-sm ml-2"> Price</label>
              <input
                id="purchase"
                name='purchase'
                type="text"
                placeholder="what's the price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3"
                required />
            </div>
            <div className="col-span-full  lg:col-span-3">
              <label htmlFor="postingDate" className="text-sm ml-2">Posting Date</label>
              <input
                id="postingDate"
                name='postingDate'
                type="text"
                value={new Date()}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" disabled />
            </div>
            <div className="col-span-full">
              <label htmlFor="ingredient" className="text-sm">Ingredients</label>
              <textarea
                id="ingredient"
                name='ingredient'
                placeholder=" your food making ingredients"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="method" className="text-sm">Cooking Method</label>
              <textarea
                id="method"
                name='method'
                placeholder=" your recipe cooking method"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
            </div>



          </div>
          <div className="col-span-full">

            <div className='flex justify-center  w-full mt-5'>
              <button type='submit' className='w-3/4  px-6  mx-auto font-semibold transition duration-200 rounded shadow-md  p-3 text-center text-xl   bg-[#53a0ba] text-[#E1D7C6]  hover:bg-[#579]  hover:border-[#579] focus:shadow-outline focus:outline-none'>
                Add Recipe
              </button>
            </div>
          </div>

        </fieldset>
      </form>
    </section>
  );
};

export default AddRecipe;