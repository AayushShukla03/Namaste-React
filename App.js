import React from 'react';
import ReactDOM from 'react-dom/client';
/*
Low level design for our food ordering application:- 
Header 
    - Logo
    - Navigation Menu and Nav Items
Body 
    - Search 
    - Restraunt Container
    - Restraunt Card
Footer
    - Copyright
    - Social Media Links
    - Addrees
    - Contact Us
*/

// First we are building app layout component or the top level layout 
const Header = () =>{
    return(
        <div className = "header">
            <div className="logo-container">
                <img className='logo' src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" />
            </div>
            <div className="nav-items"> 
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    );
};
// const styleCard ={
    // backgroundColor: "#f0f0f0"
// }
// const resObj = {
//     info:{
//     "id": "118873",
//     "name": "KFC",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/0a394524-ec41-4e42-9b44-a3e4dff3b623_118873.JPG",
//     "locality": "Magneto Mall",
//     "areaName": "Shankar Nagar",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Burgers",
//       "Fast Food",
//       "Rolls & Wraps"
//     ],
//     "avgRating": 4.2,
//     "parentId": "547",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "1K+",
//     "sla": {
//       "deliveryTime": 33,
//       "lastMileTravel": 6.6,
//       "serviceability": "SERVICEABLE",
//       "slaString": "30-35 mins",
//       "lastMileTravelString": "6.6 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-05-20 00:00:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "Rxawards/_CATEGORY-Burger.png",
//           "description": "Delivery!"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Rxawards/_CATEGORY-Burger.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "20% OFF",
//       "subHeader": "UPTO ₹50"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   }
// };
const resList = [
        {
          "info": {
            "id": "84718",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "jail road",
            "areaName": "Devendra Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-20 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹189",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-jail-road-devendra-nagar-raipur-84718",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "493172",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
            "locality": "Shyam Square",
            "areaName": "Devendra Nagar",
            "costForTwo": "₹120 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "Ratnesh_Badges/test2.png",
                  "shortDescription": "Perfect ice cream delivery",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "Ratnesh_Badges/test2.png",
                        "shortDescription": "Perfect ice cream delivery"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹169"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/nic-ice-creams-shyam-square-devendra-nagar-raipur-493172",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "217033",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "Railway Station Road",
            "areaName": "Moudhapara",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "2456",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-20 00:55:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹179",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-railway-station-road-moudhapara-raipur-217033",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "415161",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Telibandha Talab",
            "areaName": "Civil Lines",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 4.6,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "4.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-20 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-telibandha-talab-civil-lines-raipur-415161",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "102210",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fedaee6f-c5e9-4f19-8188-93627e6d6776_102210.JPG",
            "locality": "Magneto Mall",
            "areaName": "Shankar Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 7.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "7.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-magneto-mall-shankar-nagar-raipur-102210",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "118873",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/0a394524-ec41-4e42-9b44-a3e4dff3b623_118873.JPG",
            "locality": "Magneto Mall",
            "areaName": "Shankar Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
            ],
            "avgRating": 4.2,
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 6.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "6.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-20 00:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-magneto-mall-shankar-nagar-raipur-118873",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "87256",
            "name": "Hotel Al-Taha",
            "cloudinaryImageId": "y3br6vk0mpp85risrm9z",
            "locality": "Mehbubia Chowk",
            "areaName": "Baijnathpara",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Mughlai"
            ],
            "avgRating": 3.9,
            "parentId": "8543",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-20 02:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  "description": "OnlyOnSwiggy"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "OnlyOnSwiggy",
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹179",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-al-taha-mehbubia-chowk-baijnathpara-raipur-87256",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "739706",
            "name": "Haldiram's Restaurant",
            "cloudinaryImageId": "1abb89624b491497c8cff182d95ac457",
            "locality": "Opp. To telibandha talab",
            "areaName": "Civil Lines",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Biryani",
              "Chinese",
              "Chaat",
              "Thalis",
              "Bakery",
              "Sweets",
              "Beverages",
              "Desserts",
              "Snacks",
              "Continental",
              "Momos",
              "Pastas",
              "Burgers"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "351771",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 4.4,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-20 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹179",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/haldirams-restaurant-opp-to-telibandha-talab-civil-lines-raipur-739706",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "501410",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/311a4f4d-0451-4e6c-868d-ee12f9d7b716_501410.JPG",
            "locality": "Shyam Square",
            "areaName": "Govind Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Snacks",
              "Bakery",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "4444",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-shyam-square-govind-nagar-raipur-501410",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "501411",
            "name": "The Good Bowl",
            "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
            "locality": "Shyam Square",
            "areaName": "Govind Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "7918",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-good-bowl-shyam-square-govind-nagar-raipur-501411",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "631561",
            "name": "Ibaco",
            "cloudinaryImageId": "mlohrpnuxzruuqmr9zop",
            "locality": "Telebandha Main Road",
            "areaName": "Civil Lines",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.8,
            "veg": true,
            "parentId": "3481",
            "avgRatingString": "4.8",
            "totalRatingsString": "20+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 4.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "4.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-20 02:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹179",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/ibaco-telebandha-main-road-civil-lines-raipur-631561",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "453433",
            "name": "Apsara Ice Creams",
            "cloudinaryImageId": "kz5isjze0euhr7nv4gwf",
            "locality": "Indravati Colony",
            "areaName": "Civil Lines",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "35219",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 4.6,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "4.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹179",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/apsara-ice-creams-indravati-colony-civil-lines-raipur-453433",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "84850",
            "name": "Natural Ice Cream",
            "cloudinaryImageId": "wozukncyrf7sresquu7u",
            "locality": "Nagar Nigam Colony",
            "areaName": "Samta Colony",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "2093",
            "avgRatingString": "4.7",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "Ratnesh_Badges/test2.png",
                  "shortDescription": "Perfect ice cream delivery",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "Ratnesh_Badges/test2.png",
                        "shortDescription": "Perfect ice cream delivery"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/natural-ice-cream-nagar-nigam-colony-samta-colony-raipur-84850",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "284656",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "c1ytzqzbp29qza5qyu0p",
            "locality": "Jai Stambh Chowk",
            "areaName": "Jawahar Nagar",
            "costForTwo": "₹100 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:58:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-jai-stambh-chowk-jawahar-nagar-raipur-284656",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "89490",
            "name": "Mario's",
            "cloudinaryImageId": "l0fj2qx8pny7b42k0uxz",
            "locality": "Station Road",
            "areaName": "Pandri",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "rolls",
              "Fast Food",
              "Chinese"
            ],
            "avgRating": 4.2,
            "parentId": "132656",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹179",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/marios-station-road-pandri-raipur-89490",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "86674",
            "name": "Manju Mamta Restaurant",
            "cloudinaryImageId": "nvlymkbshaq3hrua2jxw",
            "locality": "Ramsagar Para",
            "areaName": "Jawahar Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "South Indian",
              "Street Food",
              "Fast Food"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "131961",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-20 00:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹50 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/manju-mamta-restaurant-ramsagar-para-jawahar-nagar-raipur-86674",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "501407",
            "name": "The Biryani Life",
            "cloudinaryImageId": "mwbhlk7hhovnsiy7igez",
            "locality": "Shyam Square",
            "areaName": "Pandri",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Biryani",
              "Mughlai",
              "Lucknowi",
              "Hyderabadi",
              "Kebabs",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "8496",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹179",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-biryani-life-shyam-square-pandri-raipur-501407",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "652666",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "d20fdc8c86aa8bd0638f47dd013d46f9",
            "locality": "GE Road",
            "areaName": "Samta Colony",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4,
            "parentId": "4961",
            "avgRatingString": "4.0",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 3.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-20 00:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-ge-road-samta-colony-raipur-652666",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "501408",
            "name": "Oven Story Pizza - Standout Toppings",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/22/0f892ee4-b444-47a9-bff4-8ca1e745a5f1_501408.JPG",
            "locality": "Shyam Square",
            "areaName": "Govind Nagar",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "3534",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹179",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-shyam-square-govind-nagar-raipur-501408",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "501409",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "z1oq4fnnrgw5zpey6l2p",
            "locality": "Shyam Square",
            "areaName": "Govind Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Punjabi",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4925",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-19 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹159"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-shyam-square-govind-nagar-raipur-501409",
            "type": "WEBLINK"
          }
        }
];
const RestrauntCard = (props) => { // props is just like an argument to a function, like in react world we say that we have passed props to a react component, whenever you have to pass dynamically some data to a component, you pass it as a props 
    // console.log(props); // prints objectwhere resname : Meghana Foods and cuisine, similarly for KFC also
    const {resData} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData.info; // doing oprional chaining and destructiring on the flyer
    return(
        <div className="res-card" style = {{backgroundColor: "#f0f0f0"}}>
            <img className= "res-logo" alt = "res-logo" src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>            
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );  
};

const Body = () =>{
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className="res-container">
                {/* <RestrauntCard resData = {resList[0]}/>
                <RestrauntCard resData = {resList[1]}/>
                <RestrauntCard resData = {resList[2]}/>
                <RestrauntCard resData = {resList[3]}/>
                <RestrauntCard resData = {resList[4]}/>
                <RestrauntCard resData = {resList[5]}/>
                <RestrauntCard resData = {resList[6]}/>
                <RestrauntCard resData = {resList[7]}/>
                <RestrauntCard resData = {resList[8]}/>
                <RestrauntCard resData = {resList[9]}/>
                <RestrauntCard resData = {resList[10]}/>
                <RestrauntCard resData = {resList[11]}/>
                <RestrauntCard resData = {resList[12]}/>
                <RestrauntCard resData = {resList[13]}/>
                <RestrauntCard resData = {resList[14]}/>
                <RestrauntCard resData = {resList[15]}/>
                <RestrauntCard resData = {resList[16]}/>
                <RestrauntCard resData = {resList[17]}/>
                <RestrauntCard resData = {resList[18]}/>
                <RestrauntCard resData = {resList[19]}/> */}
                {resList.map(restraunt => (<RestrauntCard key = {restraunt.info.id} resData={restraunt}/>))};
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
    //  in this div now we will tsart building our app
    <div className = "app">
        {/* lets try to build our header first and we have to create a header component for it */}
        <Header />
        <Body/>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);