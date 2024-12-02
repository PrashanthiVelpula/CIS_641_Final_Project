// import React from 'react';
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import styles from './ItemCategories.module.css';
// import './ItemCategories.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { database } from '../firebase'; // Import your Firebase database instance
// import { ref, onValue, push, remove } from 'firebase/database';

// function Itemcategories() {
//     const navigate = useNavigate();
//     const [categories, setCategories] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [showConfirmation, setShowConfirmation] = useState(false); 


//     // Fetch categories from Firebase on component mount
//     useEffect(() => {
//         const categoriesRef = ref(database, 'categories');
//         onValue(categoriesRef, (snapshot) => {
//             const data = snapshot.val();
//             const categoriesArray = data ? Object.values(data) : [];
//             setCategories(categoriesArray);
//         });
//     }, []);

//     // Navigate to item types in the selected category
//     const handleItemTypesNavigation = (categoryName) => {
//         navigate(`/item-types/${categoryName}`);
//     };

//     // Navigate to add new category page
//     const handleAddCategory = () => {
//         navigate("/add-item-categories");
//     };

//     // Delete a category from Firebase
//     // const handleDelete = (deleteItem) => {
//     //     // const categoryRef = ref(database, `categories/${deleteItem}`);
//     //     const categoryRef = ref(database, `items/${deleteItem}`);
//     //     remove(categoryRef).then(() => {
//     //         setCategories((prevCategories) =>
//     //             prevCategories.filter((category) => category !== deleteItem)
//     //         );
//     //     });
//     // };
//     // Modify the handleDelete function to delete both category and items


//     const handleDelete = (deleteItem) => {
//         // Ask for confirmation before proceeding with the deletion
//         const confirmed = window.confirm(`Are you sure you want to delete ${deleteItem}?`);
        
//         if (confirmed) {
//             // Reference to the 'categories' node to locate the key of the category to delete
//             const categoriesRef = ref(database, 'categories');
//             onValue(categoriesRef, (snapshot) => {
//                 const data = snapshot.val();
                
//                 // Find the key for the category
//                 const categoryKey = Object.keys(data).find(key => data[key] === deleteItem);
    
//                 if (categoryKey) {
//                     // Delete from 'categories' node
//                     const categoryRef = ref(database, `categories/${categoryKey}`);
//                     remove(categoryRef).then(() => {
//                         console.log(`Deleted ${deleteItem} from categories`);
    
//                         // Delete from 'items' node as well
//                         const itemsRef = ref(database, `items/${deleteItem}`);
//                         return remove(itemsRef);
//                     }).then(() => {
//                         console.log(`Deleted ${deleteItem} from items`);
//                         // Update the state to remove the deleted category
//                         setCategories((prevCategories) =>
//                             prevCategories.filter((category) => category !== deleteItem)
//                         );
//                     }).catch((error) => {
//                         console.error("Error deleting category: ", error);
//                     });
//                 }
//             }, { onlyOnce: true });
//         } else {
//             console.log(`Deletion of ${deleteItem} was cancelled.`);
//         }
//     };

//     const handledeleteconfirm=(event)=>{
//         event.preventDefault();
//         setShowConfirmation(true)
//     }
    
//     const handleCancel = () => {
//         setShowConfirmation(false); 
//     };
    
//     const filteredCategories = categories.filter(category =>
//         category.toLowerCase().includes(searchTerm.toLowerCase()));

//     return (
//         <div>

//             <div className={styles.search_item}>
//                 <h1>Item Categories Page</h1>
//                 <input type="text" placeholder="Search The Item" className={styles.searchBar} onChange={(event) => setSearchTerm(event.target.value)}/>
//                 <button className="add-button"onClick={handleAddCategory}>Add New Category</button>
//             </div>

//             {/* <div className={styles.item_styles}>
//                 {filteredCategories.map((name) => (
//                     <div key={name}>
//                         <div className={styles.item}>
//                             <h1 onClick={() => handleItemTypesNavigation(name)}> {name} </h1>
//                         </div>

//                         <div>
//                             <FontAwesomeIcon  icon={faTrash} className={styles.delete_icon} onClick={() => handleDelete(name)}/>
//                         </div>
//                     </div>
//                 ))}
//             </div> */}
//             <div className={styles.item_styles}>
//     {filteredCategories.map((name) => (
//         <div key={name} className={styles.item}>
//             <h1 onClick={() => handleItemTypesNavigation(name)}> {name} </h1>
//             <FontAwesomeIcon
//                 icon={faTrash}
//                 className={styles.delete_icon}
//                 onClick={() => handledeleteconfirm}
//             />
//         </div>
//     ))}


// </div>
// {showConfirmation &&(
//     <>
//         <div>
//             <p>Are you sure you want to delete</p>
//             <button onClick={handleDelete(name)}> Yes</button>
//             <button onClick={handleCancel}>No</button>        
//         </div>
//     </>
// )}


//         </div>
//     );
// }

// export default Itemcategories;

//ABOVE ONE IS ORIGINAL CODE
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './ItemCategories.module.css';
import './ItemCategories.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { database } from '../firebase'; // Import your Firebase database instance
import { ref, onValue, remove } from 'firebase/database';
import { useTheme } from "../ThemeContext";

function Itemcategories() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

    const { isDarkTheme } = useTheme();

    // Fetch categories from Firebase on component mount
    useEffect(() => {
        const categoriesRef = ref(database, 'categories');
        onValue(categoriesRef, (snapshot) => {
            const data = snapshot.val();
            const categoriesArray = data ? Object.values(data) : [];
            setCategories(categoriesArray);
        });
    }, []);

    // Navigate to item types in the selected category
    const handleItemTypesNavigation = (categoryName) => {
        navigate(`/item-types/${categoryName}`);
    };

    // Navigate to add new category page
    const handleAddCategory = () => {
        navigate("/add-item-categories");
    };

    // Handle delete confirmation
    const confirmDelete = (deleteItem) => {
        setCategoryToDelete(deleteItem);
        setShowConfirmation(true);
    };

    const handleDelete = () => {
        if (categoryToDelete) {
            const categoriesRef = ref(database, 'categories');
            onValue(
                categoriesRef,
                (snapshot) => {
                    const data = snapshot.val();
                    const categoryKey = Object.keys(data).find(
                        (key) => data[key] === categoryToDelete
                    );

                    if (categoryKey) {
                        const categoryRef = ref(database, `categories/${categoryKey}`);
                        remove(categoryRef)
                            .then(() => {
                                console.log(`Deleted ${categoryToDelete} from categories`);

                                // Delete from 'items' node as well
                                const itemsRef = ref(database, `items/${categoryToDelete}`);
                                return remove(itemsRef);
                            })
                            .then(() => {
                                console.log(`Deleted ${categoryToDelete} from items`);
                                setCategories((prevCategories) =>
                                    prevCategories.filter((category) => category !== categoryToDelete)
                                );
                                setCategoryToDelete(null);
                                setShowConfirmation(false);
                            })
                            .catch((error) => {
                                console.error("Error deleting category: ", error);
                            });
                    }
                },
                { onlyOnce: true }
            );
        }
    };

    const handleCancel = () => {
        setCategoryToDelete(null);
        setShowConfirmation(false);
    };

    const filteredCategories = categories.filter((category) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const textStyle = {
        color: isDarkTheme ? '#f8f8f8' : '#333',  // Use theme colors for text
    };
    const textStyle1 = {
        backgroundColor: isDarkTheme ? '#333':'#fff'
    };
   
    return (
        <div>
            <div className={styles.search_item}>
                <h1 style={textStyle}>Item Categories</h1>
                <input
                    type="text"
                    placeholder="Search The Item"
                    className={styles.searchBar}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button className="add-button" onClick={handleAddCategory}>
                    Add New Category
                </button>
            </div>

            <div className={styles.item_styles} >
                {filteredCategories.map((name) => (
                    <div key={name} className={styles.item} >
                        <h1 style={textStyle} onClick={() => handleItemTypesNavigation(name)}> {name} </h1>
                        <FontAwesomeIcon
                            icon={faTrash}
                            className={styles.delete_icon}
                            onClick={() => confirmDelete(name)}
                        />
                    </div>
                ))}
            </div>

            {showConfirmation && (
                <div className={styles.outer} style={textStyle}>
                    <div className={styles.confirmation} style={textStyle1} >
                        <p>Are you sure you want to delete {categoryToDelete}?</p>
                        <button onClick={handleDelete} >Yes</button>
                        <button onClick={handleCancel}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Itemcategories;





// import { useState } from "react";
// import {useNavigate } from "react-router-dom";
// import styles from './ItemCategories.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// function Itemcategories({categories,handleDelete})
// {
//     const navigate=useNavigate()
//     const handle_itemtypes_navigation=(category_name)=>{

//        return navigate(`/item-types/${category_name}`)
//     }
//     const handle_addcategory=()=>{
//         navigate("/add-item-categories")
//     }

//     // const[categories,setCategories]=useState(['Furniture','Decor','extra','something','done'])
//     const[searchTerm,setsearchTerm]=useState('')
//     const filteredCategories = categories.filter(category =>
//         category.toLowerCase().includes(searchTerm.toLowerCase())
//     );
  
// return(
//     <div>
//         <div className={styles.search_item}>
//         <h1>Item Categories Page</h1>
//         <input type="text" placeholder="Search The Item" className={styles.searchBar} onChange={(event)=>{setsearchTerm(event.target.value)}}></input>
//         <button onClick={handle_addcategory}>Add New Category</button>
//         </div>

//         <div className={styles.item_styles}>
//             {filteredCategories.map((name,index) => (
//             <div key={name}>
//                 {/* make sure to include key on high level like above div not below div */}
                
//             <div className={styles.item}>
//              <h1 onClick={()=>handle_itemtypes_navigation(name)}> {name} </h1>
//             </div>

//              <div>
//              <FontAwesomeIcon icon={faTrash} className={styles.delete_icon} onClick={() => handleDelete(name)}/>
//              </div>

//              </div>
               
//             ))}

//         </div>
        
//     </div>
// )
// }
// export default Itemcategories;