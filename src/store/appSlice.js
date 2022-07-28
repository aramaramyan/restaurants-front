import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    restaurants: [
      {
        "id": 1,
        "name": "Sherep",
        "reviews": [
          {
            id: "l64nf8mfq5w30r0szog",
            name: "Samvel Gasparyan",
            rate: 5,
            review: "One of the best places I visited. Service is top! Food so delicious, especially hinkaliDefinitely recommend to visit!",
            date: 1658897683122
          },
          {
            id: "l64nf9i5e1fz7g58hrt",
            name: "Nver Gevorgyan",
            rate: 5,
            review: "Everything was super delicious and the service is great. The fried khinkali is amazing. Our waiter Argijthi was very friendly and attentive.",
            date: 1658897704724
          }
        ],
        "rates": [5, 5, 4, 5],
        "phone": "+374 43 600880",
        "location": "Amiryan str. 1, Yerevan 0010 Armenia",
        "webPage": "https://www.yeremyanprojects.com/en/restaurants/sherep",
        "openTime": "09:30 AM - 12:00 AM",
        "kitchenType": ["Middle Eastern", "Eastern European", "Central European", "Armenian", "Barbecue", "Healthy"],
        "images": [
          "https://drive.google.com/uc?id=1fTtZBdfzo-6PqGPtj_PV7H1WQ9c7bhdW",
          "https://drive.google.com/uc?id=1HQlE1p-IitTeVxUsMSmqmLJC_umHwDkX",
          "https://drive.google.com/uc?id=1d9AkRv6jISZUEhzrW3m-FTOxC5dXwt-S",
          "https://drive.google.com/uc?id=1VQ5JJCtwEq2qDfTdMztvrgx5ynMsvtCt",
          "https://drive.google.com/uc?id=1aUw007erNJzmhKP6cErogAz21rh8vQPQ",
        ]
      },
      {
        "id": 2,
        "name": "Yasaman",
        "reviews": [
          {
            id: "l64nfaeiyk93l8jkvdq",
            name: "Nane Babayan",
            rate: 5,
            review: "I came here with my family and the food was amazing, reasonable price and excellent flavors, i would recommend you to come here.",
            date: 1658897844839
          },
          {
            id: "l64nfay9ofgsk0dqn4c",
            name: "Suren Mkrtchyan",
            rate: 4,
            review: "I've been in Yerevan so many times from 2019 this is my first that i eat here food is great and the environment is so lovely and cozy. I will come again and again",
            date: 1658898674765
          }
        ],
        "rates": [5, 4, 4, 3],
        "phone": "+374 11 803333",
        "location": "Yekmalyan str. 111, Yerevan 0002 Armenia",
        "webPage": "https://www.facebook.com/YasamanYVN/",
        "openTime": "10:00 AM - 12:00 AM",
        "kitchenType": ["Armenian", "Caucasian", "Barbecue", "Contemporary"],
        "images": [
          "https://drive.google.com/uc?id=1rQVg3ONWWUYryZI7hSiafFU15lfpy0Zq",
          "https://drive.google.com/uc?id=1xAXt6hLhh6dUpjxbE09jvIvIqjNOTlPv",
          "https://drive.google.com/uc?id=1M4BjRWTHQUpNjn-Y-ElayRDDwEDJM7pQ",
          "https://drive.google.com/uc?id=1oHYMDb0XISveqF2QWal-aUg58q5PLynd",
          "https://drive.google.com/uc?id=1wAYNMB5CWG1Wso1si6O9Am8nk597OcDz",
        ]
      },
      {
        "id": 3,
        "name": "Seasons",
        "reviews": [
          {
            id: "l64nffwihv21yvawffn",
            name: "Gurgen Gasparyan",
            rate: 4,
            review: "This was our 1st food experience in Yerevan. A place were authentic Armenian food meets with European cuisine. Excellent customer service as well as atmosphere. Price was fair.",
            date: 1658897961363
          },
          {
            id: "l64nfay9ofgsk0dqn4c",
            name: "Taron Hovhannisyan",
            rate: 4,
            review: "Amazing service and delicious food. Good place for breakfast and brunch, dinner. They have also very tasty options of desserts.",
            date: 1658898001994
          }
        ],
        "rates": [3, 4, 5],
        "phone": "+374 43 709070",
        "location": "Mesrop Mashtots Ave. 15, Yerevan 0002 Armenia",
        "webPage": "https://www.yeremyanprojects.com/en/restaurants/seasons",
        "openTime": "12:00 PM - 12:00 AM",
        "kitchenType": ["European", "Armenian", "Contemporary"],
        "images": [
          "https://drive.google.com/uc?id=1eKqpszjyba6NzkAT4RIyZK_jfL0LVJ_m",
          "https://drive.google.com/uc?id=1J8-W4mEg-4uwf3A27yoewV6-J8goBODP",
          "https://drive.google.com/uc?id=1ua2Y_4JzywUmHLk1VMFcxbA9gQ84PlEA",
          "https://drive.google.com/uc?id=1I2LOdDIw-bSi9obz4Ep3QqJ-iUcKbsHm",
          "https://drive.google.com/uc?id=1fAZOPUZdzMKkjfBy6s0HEtafL_QVV1GU",
        ]
      },
      {
        "id": 4,
        "name": "el Garden",
        "reviews": [
          {
            id: "l64nn0vig7ck2kzun1c",
            name: "Tigran Danielyan",
            rate: 5,
            review: "This is a unique and beautiful place to chill, remember to do a reservation on weekends or else you won’t be able to find a spot!",
            date: 1658898220646
          },
          {
            id: "l64nn1e85eucsdeo4jb",
            name: "Meruj Darbinyan",

            rate: 5,
            review: "Beautiful place, nature, delicious food, Thank you for the garden. :\n" +
              "Aren was very hospitable. We also thank him.",
            date: 1658898246118
          },
          {
            id: "l64nn1v18vc6hi2g10l",
            name: "Garnik Tonoyan",
            rate: 5,
            title: "Dear Diana, Thank you very much for your review! We are happy that you saved such a good memory about our restaurant! Looking forward to welcoming you again on your next visit to Armenia!",
            date: 1658898271914
          }
        ],
        "rates": [4, 4, 5],
        "phone": "+374 41 490000",
        "location": "Tsitsernakaberd Park 8, Yerevan 0082 Armenia",
        "webPage": "https://www.elgarden.am/",
        "openTime": "10:00 AM - 02:00 AM",
        "kitchenType": ["Sushi", "European", "Bar", "Cafe", "Armenian"],
        "images": [
          "https://drive.google.com/uc?id=1YpU9UfzD9nZgtHkpDOe1v8N7GSUs3mi4",
          "https://drive.google.com/uc?id=16bAg-9ckBVATtpJHEJ6Sv8VHUeV9ZMJ4",
          "https://drive.google.com/uc?id=1JVxJQUvR3ju0qehlGKNA_P2KqAnEzl-T",
          "https://drive.google.com/uc?id=1pEq0rcpuANX0rqM7W3HVYSSYRiqV5XeF",
          "https://drive.google.com/uc?id=1rlJq_HZP_5MTUN9JdaToE9sRgu7BbCBR",
        ]
      },
      {
        "id": 5,
        "name": "Mezzo",
        "reviews": [
          {
            id: "l64nn1v18vc1232g10l",
            name: "Hakob Samvelyan",
            rate: 5,
            review: "Had a great time with friends. The live music was fantastics. Special thanks to Stepan for the warm welcome and fabulous service!!!",
            date: 1658898441357
          },
          {
            id: "l64nn1v1ed78hi2g10l",
            name: "Aram Karapetyan",
            rate: 5,
            review: "The music is good, the hall was cold and mainly why I leave 1 point , as we are here for about 2 hours and still waiting for our food!!! Don’t have words ...",
            date: 1658898475577
          }
        ],
        "rates": [3, 5, 5],
        "phone": "+374 10 524211",
        "location": "st. Isahakyan 28, Yerevan 0009 Armenia",
        "webPage": "https://www.mezzo.am/",
        "openTime": "12:00 PM - 12:00 AM",
        "kitchenType": ["Sushi", "European", "Eastern European", "Central European", "Bar", "International"],
        "images": [
          "https://drive.google.com/uc?id=1c1GXBGn8JTqcuC9mPeAR6DjTcW49V6Mg",
          "https://drive.google.com/uc?id=1vRsmPQMNCMrZOxsDnZhcXOleILCNeiLq",
          "https://drive.google.com/uc?id=1J4kYhw8eC0iv-IZI84C_nUABuwYS3YI8",
          "https://drive.google.com/uc?id=1vg966MHH6_vtBhmmTfLPhZMMo2yWUJ4F",
          "https://drive.google.com/uc?id=1mORSDr2xHIIy_nFirab5JbLLWhohK73v",
        ]
      }
    ],
  },
  reducers: {

  }
});

export const {} = appSlice.actions;
export default appSlice.reducer;