import { useNavigate } from "react-router-dom";

// category 
const category = [
    {
        image: 'https://i.pinimg.com/736x/df/49/33/df4933b4a587f7c187b252a105fc67c0.jpg',
        name: 'fashion'
    },
    {
        image: 'https://i.pinimg.com/564x/d2/05/e5/d205e5e02162779b9f862379a5fd5db7.jpg',
        name: 'cosmatics'
    },
    {
        image: 'https://i.pinimg.com/236x/83/c1/8b/83c18b53cfddc068c46f4f02dd2fe548.jpg',
        name: 'grocery'
    },
    {
        image: 'https://i.pinimg.com/564x/d6/af/91/d6af91a226883839f448b4bba0fa2e7b.jpg',
        name: 'mobile'
    },
    {
        image: 'https://i.pinimg.com/236x/20/ca/a3/20caa341782a8c576064f4c9ce6fd61a.jpg',
        name: 'laptop'
    },
    {
        image: 'https://i.pinimg.com/564x/c3/06/ef/c306ef8f81b9cd59d71b6b98bc3ea8da.jpg',
        name: 'footwear'
    },
    {
        image: 'https://i.pinimg.com/564x/54/1e/ad/541eadd0c9ebdc09d5f751bb0871fa39.jpg',
        name: 'Appliances'
    },
    {
        image: 'https://i.pinimg.com/236x/66/e9/09/66e909cf0f6239f0d67f060484c7647b.jpg',
        name: 'books'
    }
]

const Category = () => {
    
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col mt-5 ">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div 
                                    onClick={() => navigate(`/category/${item.name}`)}
                                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-indigo-500 transition-all hover:bg-indigo-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img 
                                            className="rounded-full"
                                            src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
        </div>
    );
}

export default Category;


// import { useNavigate } from "react-router";

// const category = [
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
//         name: 'Fashion'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
//         name: 'Shirt'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
//         name: 'Jacket'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
//         name: 'Mobile'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
//         name: 'Laptop'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
//         name: 'Shoes'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
//         name: 'Home'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
//         name: 'Books'
//     }
// ]

// const Category = () => {
//     const navigate = useNavigate();
//     return (
//         <div>
//             <div className="flex flex-col mt-5">
//                 <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
//                     <div className="flex ">
//                         {category.map((item, index) => {
//                             return (
//                                 <div key={index} className="px-3 lg:px-10">
//                                     <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 "  >
//                                         <div className="flex justify-center mb-12">
//                                             <img src={item.image} alt="img" />
//                                         </div>
//                                     </div>

//                                     <h1 className=' text-sm lg:text-lg text-center font-medium title-font '>{item.name}</h1>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// }

// export default Category;