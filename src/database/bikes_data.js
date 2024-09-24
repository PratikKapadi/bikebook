const bikes = [
    {
        model: "Hunter 350",
        price: "₹1,49,900",
        brand: "Royal Enfield",
        type: "Cruiser",
        year: 2023,
        imageURL: "/asset/images/Bike/royal_enfield_hunter_350.png",
        description: "The Royal Enfield Hunter 350 is a stylish and feature-packed motorcycle that is designed to appeal to a wide range of riders.",
        specifications: {
            Engine: "349cc",
            Max_Torque: "27Nm @ 4000rpm",
            Kerb_Weight: "181kg",
            Fuel_Tank_Capacity: "13L",
            Body_Type: "Cruiser",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2055mm",
            Max_Power: "20.2bhp",
            Mileage: "35 kmpl",
            Brake_Type: "Disc",
            Transmission: "5-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "800mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 8Ah",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "R15 V4",
        price: "₹1,72,000",
        brand: "Yamaha",
        type: "Sportbike",
        year: 2023,
        imageURL: "/asset/images/Bike/yamaha_r15_v4.png",
        description: "The Yamaha R15 V4 is the perfect supersport for those who want to learn and be a better rider on the race track, and as a consequence, on public roads as well. It may have a not-so-practical riding posture but if you can overlook that aspect, it's a fantastic, feature-packed bike in its segment.",
        specifications: {
            Engine: "155cc",
            Max_Torque: "14.2Nm @ 7500rpm",
            Kerb_Weight: "142kg",
            Fuel_Tank_Capacity: "11L",
            Body_Type: "Sportbike",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Assist & Slipper",
            Overall_Length: "1990mm",
            Max_Power: "18.6bhp",
            Mileage: "40 kmpl",
            Brake_Type: "Disc",
            Transmission: "6-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "815mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 4Ah",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Fully Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Pulsar N160",
        price: "₹1,23,000",
        brand: "Bajaj",
        type: "Naked Bike",
        year: 2023,
        imageURL: "/asset/images/Bike/bajaj_pulsar_n160.png",
        description: "The Bajaj Pulsar N160 stands out in the 160cc segment with its impressive performance, refinement, excellent brakes, and fantastic fuel economy. It handles well and changes directions quickly.",
        specifications: {
            Engine: "164.82cc",
            Max_Torque: "14.65Nm @ 6500rpm",
            Kerb_Weight: "154kg",
            Fuel_Tank_Capacity: "14L",
            Body_Type: "Naked",
            ABS: "Single Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "1983mm",
            Max_Power: "15.68bhp",
            Mileage: "40 kmpl",
            Brake_Type: "Disc",
            Transmission: "5-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "795mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 5Ah",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "S1 Pro",
        price: "₹1,39,999",
        brand: "OLA",
        type: "Electric Scooter",
        year: 2024,
        imageURL: "/asset/images/Bike/ola_s1_pro.png",
        description: "Overall, the Ola S1 Pro is a powerful electric scooter with modern functions and an attractive look. It has a high peak speed and a long range, making it a viable and environmentally friendly mode of transportation. However, its hefty price may deter some purchasers.",
        specifications: {
            Engine: "Electric",
            Max_Torque: "58Nm",
            Kerb_Weight: "125kg",
            Fuel_Tank_Capacity: "NA",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Digital",
            Clutch: "NA",
            Overall_Length: "1850mm",
            Max_Power: "8.5kW",
            Mileage: "NA",
            Brake_Type: "Disc",
            Transmission: "Automatic",
            no_of_Cylinders: "NA",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Electric",
            Seat_Height: "792mm"
        },
        features: {
            Touch_Screen_Display: "Yes",
            Odometer: "Digital",
            Fuel_Gauge: "No",
            Stant_Alarm: "Yes",
            Battery: "Lithium-ion",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "No",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "No",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "No"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Activa 6G",
        price: "₹73,000",
        brand: "Honda",
        type: "Scooter",
        year: 2023,
        imageURL: "/asset/images/Bike/honda_activa_6g.png",
        description: "The Honda Activa has been the brand’s best selling two-wheeler for quite some time now, and is also India’s highest-selling scooter. Honda revolutionised the scooter segment in our country with the Activa and because of its presence in India for more than two decades now, the Activa has become “India’s favourite scooter",
        specifications: {
            Engine: "109.51cc",
            Max_Torque: "8.79Nm @ 5250rpm",
            Kerb_Weight: "107kg",
            Fuel_Tank_Capacity: "5.3L",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Analogue",
            Clutch: "Automatic",
            Overall_Length: "1833mm",
            Max_Power: "7.68bhp",
            Mileage: "45 kmpl",
            Brake_Type: "Drum",
            Transmission: "CVT",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Analogue",
            Fuel_Type: "Petrol",
            Seat_Height: "692mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Analogue",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V,3Ah",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Analogue",
            Hazard_Warning_Indicator: "No",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Duke 390",
        price: "₹3,10,000",
        brand: "KTM",
        type: "Naked Bike",
        year: 2023,
        imageURL: "/asset/images/Bike/ktm_duke_390.png",
        description: "The KTM Duke 390 has become more practical while retaining all of KTM’s trademark madness. So if you want an aggressive, performance-oriented streetfighter, nothing beats the KTM 390 Duke in this segment, especially considering its mouth-watering price tag.",
        specifications: {
            Engine: "373.2cc",
            Max_Torque: "37Nm @ 7000rpm",
            Kerb_Weight: "172kg",
            Fuel_Tank_Capacity: "13.5L",
            Body_Type: "Naked",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Assist & Slipper",
            Overall_Length: "2072mm",
            Max_Power: "43.5bhp",
            Mileage: "25 kmpl",
            Brake_Type: "Disc",
            Transmission: "6-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "830mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 8Ah",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Guerrilla 450",
        price: "₹2,50,000",
        brand: "Royal Enfield",
        type: "Adventure",
        year: 2024,
        imageURL: "/asset/images/Bike/royal_enfield_guerrilla_450.png",
        description: "The Royal Enfield Guerrilla 450 roadster is based on the same platform as the Himalayan 450. While it has a retro styling, it’s equipped with modern features, and has a liquid-cooled engine unlike any of the other retro-styled Royal Enfield bikes.",
        specifications: {
            Engine: "450cc",
            Max_Torque: "40Nm @ 4000rpm",
            Kerb_Weight: "190kg",
            Fuel_Tank_Capacity: "15L",
            Body_Type: "Adventure",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2185mm",
            Max_Power: "40bhp",
            Mileage: "30 kmpl",
            Brake_Type: "Disc",
            Transmission: "6-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "825mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 8Ah",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Shotgun 650",
        price: "₹3,00,000",
        brand: "Royal Enfield",
        type: "Cruiser",
        year: 2024,
        imageURL: "/asset/images/Bike/royal_enfield_shotgun_650.png",
        description: "The Royal Enfield Shotgun 650 is a unique and exciting option in its category because it's the only bobber available there. It has a good combination of unique styling, torquey motor and good handling characteristics. The bike will be perfect for someone that is looking for a bike that will stand out amongst all the other bikes in the market currently.",
        specifications: {
            Engine: "648cc",
            Max_Torque: "52Nm @ 5250rpm",
            Kerb_Weight: "240kg",
            Fuel_Tank_Capacity: "13.7L",
            Body_Type: "Cruiser",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Assist & Slipper",
            Overall_Length: "2122mm",
            Max_Power: "47bhp",
            Mileage: "25 kmpl",
            Brake_Type: "Disc",
            Transmission: "6-speed",
            no_of_Cylinders: 2,
            LED_light: "Yes",
            Speedometer: "Analogue",
            Fuel_Type: "Petrol",
            Seat_Height: "765mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Analogue",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 12Ah",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Analogue",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Classic 350",
        price: "₹1,90,000",
        brand: "Royal Enfield",
        type: "Cruiser",
        year: 2023,
        imageURL: "/asset/images/Bike/royal_enfield_classic_350.png",
        description: "the Royal Enfield Classic 350 stands as a well-built and reliable motorcycle with a timeless design. It presents an attractive option for riders seeking both comfort and style. Its limitations include its weight and somewhat lack of power.",
        specifications: {
            Engine: "349cc",
            Max_Torque: "27Nm @ 4000rpm",
            Kerb_Weight: "195kg",
            Fuel_Tank_Capacity: "13L",
            Body_Type: "Cruiser",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2145mm",
            Max_Power: "20.2bhp",
            Mileage: "35 kmpl",
            Brake_Type: "Disc",
            Transmission: "5-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Analogue",
            Fuel_Type: "Petrol",
            Seat_Height: "805mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Analogue",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 8Ah",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Analogue",
            Hazard_Warning_Indicator: "No",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Himalayan",
        price: "₹2,15,000",
        brand: "Royal Enfield",
        type: "Adventure",
        year: 2023,
        imageURL: "/asset/images/Bike/royal_enfield_himalayan.png",
        description: "The Royal Enfield Himalayan 450 is an adventure bike and gets the brand’s first liquid-cooled single-cylinder engine. It can easily handle everyday commutes, long distance touring, and off-riding. ",
        specifications: {
            Engine: "411cc",
            Max_Torque: "32Nm @ 4000rpm",
            Kerb_Weight: "199kg",
            Fuel_Tank_Capacity: "15L",
            Body_Type: "Adventure",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2190mm",
            Max_Power: "24.3bhp",
            Mileage: "30 kmpl",
            Brake_Type: "Disc",
            Transmission: "5-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "800mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 8Ah",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "FZS-FI V3",
        price: "₹1,25,000",
        brand: "Yamaha",
        type: "Naked Street",
        year: 2023,
        imageURL: "/asset/images/Bike/yamaha_fzs_fi_v3.png",
        description: "The FZ-Fi V3 is a decent 150cc commuter. Sure the bike doesn’t pack many features as its competitors but it is able to offer a comfortable riding experience and the engine is very well refined and offers great mileage. It is a good option for those who are looking for a premium commuter in this segment.",
        specifications: {
            Engine: "149cc",
            Max_Torque: "13.3Nm @ 5500rpm",
            Kerb_Weight: "135kg",
            Fuel_Tank_Capacity: "13L",
            Body_Type: "Naked",
            ABS: "Single Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "1990mm",
            Max_Power: "12.4bhp",
            Mileage: "45 kmpl",
            Brake_Type: "Disc",
            Transmission: "5-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "790mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 4Ah",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Fascino 125 Fi Hybrid",
        price: "₹85,000",
        brand: "Yamaha",
        type: "Scooter",
        year: 2023,
        imageURL: "/asset/images/Bike/yamaha_fascino_125_fi_hybrid.png",
        description: "To the discerning rider, the Fascino may feel dated and lacking in features. But it is perfect for the average consumer who is looking to step up to the 125cc segment but does not want to let go of affordability and good mileage associated with 110cc scooters.",
        specifications: {
            Engine: "125cc",
            Max_Torque: "10.3Nm @ 5000rpm",
            Kerb_Weight: "99kg",
            Fuel_Tank_Capacity: "5.2L",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Digital",
            Clutch: "Automatic",
            Overall_Length: "1920mm",
            Max_Power: "8.2bhp",
            Mileage: "55 kmpl",
            Brake_Type: "Drum",
            Transmission: "CVT",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "780mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 5Ah",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "No",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "FZX",
        price: "₹1,20,000",
        brand: "Yamaha",
        type: "Retro Street",
        year: 2023,
        imageURL: "/asset/images/Bike/yamaha_fz_x.png",
        description: "The Yamaha FZ-X looks unique and is based on the reliable Yamaha FZ platform. However, the performance is not really exciting and can be underwhelming for a 150cc bike. The FZ-X feels like a half-way product for riders who are waiting for the XSR155 to launch in India.",
        specifications: {
            Engine: "149cc",
            Max_Torque: "13.3Nm @ 5500rpm",
            Kerb_Weight: "139kg",
            Fuel_Tank_Capacity: "10L",
            Body_Type: "Retro",
            ABS: "Single Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2020mm",
            Max_Power: "12.4bhp",
            Mileage: "45 kmpl",
            Brake_Type: "Disc",
            Transmission: "5-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "810mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 4Ah",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "MT 15 V2",
        price: "₹1,60,000",
        brand: "Yamaha",
        type: "Naked Sport",
        year: 2024,
        imageURL: "/asset/images/Bike/yamaha_mt_15_v2.png",
        description: "The updates to the Yamaha MT 15 V2 have improved its handling and the addition of dual-channel ABS has made the braking even better. The bike now also has a wide range of colours to choose from. However, the lack of bottom-end performance and an expensive price tag makes it a slightly less desirable option in the segment.",
        specifications: {
            Engine: "155cc",
            Max_Torque: "14.1Nm @ 7500rpm",
            Kerb_Weight: "139kg",
            Fuel_Tank_Capacity: "10L",
            Body_Type: "Naked",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Assist & Slipper",
            Overall_Length: "2015mm",
            Max_Power: "18.4bhp",
            Mileage: "45 kmpl",
            Brake_Type: "Disc",
            Transmission: "6-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "810mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 5Ah",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Pulsar 180",
        price: "₹1,15,000",
        brand: "Bajaj",
        type: "Sport",
        year: 2023,
        imageURL: "/asset/images/Bike/bajaj_pulsar_180.png",
        description: "The Bajaj Pulsar 180 is one of the best selling Bajaj bikes in India, and is also the cheapest 150cc bike in the country. While it was considered to be a performance bike when it was first launched, it is more of a sporty commuter bike now.",
        specifications: {
            Engine: "178.6cc",
            Max_Torque: "14.2Nm @ 6500rpm",
            Kerb_Weight: "151kg",
            Fuel_Tank_Capacity: "15L",
            Body_Type: "Naked",
            ABS: "Single Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2035mm",
            Max_Power: "16.8bhp",
            Mileage: "45 kmpl",
            Brake_Type: "Disc",
            Transmission: "5-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "790mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 9Ah",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Chetak",
        price: "₹1,60,000",
        brand: "Bajaj",
        type: "Electric Scooter",
        year: 2023,
        imageURL: "/asset/images/Bike/bajaj_chetak.png",
        description: "The Chetak electric scooter is the revival of the OG Chetak scooter of Bajaj in a modern electric avatar. This scooter is a big step forward for the company as it’s their first modern electric scooter.",
        specifications: {
            Engine: "Electric",
            Max_Torque: "16Nm",
            Kerb_Weight: "132kg",
            Fuel_Tank_Capacity: "N/A",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Digital",
            Clutch: "Automatic",
            Overall_Length: "1890mm",
            Max_Power: "4.2kW",
            Mileage: "95 km/charge",
            Brake_Type: "Disc",
            Transmission: "Automatic",
            no_of_Cylinders: "N/A",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Electric",
            Seat_Height: "770mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "No",
            Stant_Alarm: "Yes",
            Battery: "Lithium-Ion",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "N/A",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "N/A"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Dominar 400",
        price: "₹2,20,000",
        brand: "Bajaj",
        type: "Tourer",
        year: 2023,
        imageURL: "/asset/images/Bike/bajaj_dominar_400.png",
        description: "The Bajaj Dominar 400 is a great motorcycle in city traffic conditions and stands out with its muscular styling. It also offers good performance and gets an upright riding position, which makes it a great tourer as well.",
        specifications: {
            Engine: "373.3cc",
            Max_Torque: "35Nm @ 6500rpm",
            Kerb_Weight: "187kg",
            Fuel_Tank_Capacity: "13L",
            Body_Type: "Tourer",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Slipper Clutch",
            Overall_Length: "2156mm",
            Max_Power: "39.4bhp",
            Mileage: "27 kmpl",
            Brake_Type: "Disc",
            Transmission: "6-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "800mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 8Ah",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Pulsar NS400Z",
        price: "₹1,80,000",
        brand: "Bajaj",
        type: "Street",
        year: 2023,
        imageURL: "/asset/images/Bike/bajaj_pulsar_ns400z.png",
        description: "The Bajaj Pulsar NS400Z is an easily recommendable motorcycle for those looking for exciting performance on a strict budget, as long as they’re willing to live with some compromises. But for those with slightly higher budgets, there are far better options out there.",
        specifications: {
            Engine: "373.3cc",
            Max_Torque: "34Nm @ 7000rpm",
            Kerb_Weight: "175kg",
            Fuel_Tank_Capacity: "12L",
            Body_Type: "Naked",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2090mm",
            Max_Power: "40bhp",
            Mileage: "30 kmpl",
            Brake_Type: "Disc",
            Transmission: "6-speed",
            no_of_Cylinders: 1,
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "805mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V, 9Ah",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "S1 X",
        price: "₹90,000",
        brand: "OLA",
        type: "Electric Scooter",
        year: 2023,
        imageURL: "/asset/images/Bike/ola_s1_x.png",
        description: "Ola faced challenges in maintaining the initially proposed pricing for the S1 Air upon its launch in October 2022, primarily due to unexpected changes in FAME 2 subsidies. However, with the Ola S1 X series, it appears that the EV manufacturer can now provide a genuinely eco-friendly alternative at a price comparable to 100-110cc petrol-powered scooters.",
        specifications: {
            Engine: "Electric",
            Max_Torque: "58Nm",
            Kerb_Weight: "103kg",
            Fuel_Tank_Capacity: "N/A",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Digital",
            Clutch: "Automatic",
            Overall_Length: "1859mm",
            Max_Power: "6kW",
            Mileage: "151 km/charge",
            Brake_Type: "Disc",
            Transmission: "Automatic",
            no_of_Cylinders: "N/A",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Electric",
            Seat_Height: "792mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "No",
            Stant_Alarm: "Yes",
            Battery: "Lithium-Ion",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "N/A",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "N/A"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Roadster",
        price: "₹1,20,000",
        brand: "OLA",
        type: "Electric Bike",
        year: 2023,
        imageURL: "/asset/images/Bike/ola_roadster.png",
        description: "The Ola Roadster is a range of the electric bikes. It will have three variants – X, Standard, and Pro. These vary from each other in terms of battery, motor, range, and other features. ",
        specifications: {
            Engine: "Electric",
            Max_Torque: "100Nm",
            Kerb_Weight: "125kg",
            Fuel_Tank_Capacity: "N/A",
            Body_Type: "Motorcycle",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Automatic",
            Overall_Length: "1985mm",
            Max_Power: "9kW",
            Mileage: "200 km/charge",
            Brake_Type: "Disc",
            Transmission: "Automatic",
            no_of_Cylinders: "N/A",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Electric",
            Seat_Height: "785mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "No",
            Stant_Alarm: "Yes",
            Battery: "Lithium-Ion",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "N/A",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "N/A"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Roadster Pro",
        price: "₹1,40,000",
        brand: "OLA",
        type: "Electric Bike",
        year: 2023,
        imageURL: "/asset/images/Bike/ola_roadster_pro.png",
        description: "The Ola Roadster Pro is available in two variants with battery pack options of 8kWh and 16kWh. The 16kWh capacity battery pack has a claimed range of 579km, peak power output of 70.7PS and a top speed of 194kmph.",
        specifications: {
            Engine: "Electric",
            Max_Torque: "120Nm",
            Kerb_Weight: "130kg",
            Fuel_Tank_Capacity: "N/A",
            Body_Type: "Motorcycle",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Automatic",
            Overall_Length: "2000mm",
            Max_Power: "11kW",
            Mileage: "250 km/charge",
            Brake_Type: "Disc",
            Transmission: "Automatic",
            no_of_Cylinders: "N/A",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Electric",
            Seat_Height: "780mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "No",
            Stant_Alarm: "Yes",
            Battery: "Lithium-Ion",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "N/A",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "N/A"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "S1 Air",
        price: "₹85,000",
        brand: "OLA",
        type: "Electric Scooter",
        year: 2023,
        imageURL: "/asset/images/Bike/ola_s1_air.png",
        description: "The Ola S1 Air is a mid-level electric scooter in Ola Electric’s S1 range. It has a single battery pack option but offers a decent range and performance. ",
        specifications: {
            Engine: "Electric",
            Max_Torque: "50Nm",
            Kerb_Weight: "102kg",
            Fuel_Tank_Capacity: "N/A",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Digital",
            Clutch: "Automatic",
            Overall_Length: "1800mm",
            Max_Power: "4.5kW",
            Mileage: "125 km/charge",
            Brake_Type: "Drum",
            Transmission: "Automatic",
            no_of_Cylinders: "N/A",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Electric",
            Seat_Height: "775mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "No",
            Stant_Alarm: "Yes",
            Battery: "Lithium-Ion",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "N/A",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "N/A"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Mavrick 440",
        price: "₹1,50,000",
        brand: "Hero",
        type: "Motorcycle",
        year: 2023,
        imageURL: "/asset/images/Bike/hero_mavrick_440.png",
        description: "The Hero Mavrick 440 is available in three variants: Base, Mid and Top. The base variant is available in a single colour scheme called Arctic White and gets spoke wheels with tubed tyres. The Mid variant is available in two colour schemes: Fearless Red and Celestial Blue while the Top variant gets two colour options called Phantom Black and Enigma Black. The Mid and Top variants get alloy wheels with tubeless tyres. ",
        specifications: {
            Engine: "440cc",
            Max_Torque: "40Nm",
            Kerb_Weight: "160kg",
            Fuel_Tank_Capacity: "12L",
            Body_Type: "Motorcycle",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2100mm",
            Max_Power: "35hp",
            Mileage: "35 km/l",
            Brake_Type: "Disc",
            Transmission: "6-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "800mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Splendor Plus",
        price: "₹75,000",
        brand: "Hero",
        type: "Motorcycle",
        year: 2023,
        imageURL: "/asset/images/Bike/hero_splendor_plus.png",
        description: "The Hero Splendor is a decent motorcycle that is able to deliver reliable performance and a comfortable riding experience. The bike also comes with a decent set of features but when there are 110cc alternatives around at the same price, it doesn't make sense to go with the Spendor.",
        specifications: {
            Engine: "97.2cc",
            Max_Torque: "8Nm",
            Kerb_Weight: "112kg",
            Fuel_Tank_Capacity: "9.8L",
            Body_Type: "Commuter",
            ABS: "No",
            Tripmeter: "Analog",
            Clutch: "Wet Multiplate",
            Overall_Length: "1970mm",
            Max_Power: "8hp",
            Mileage: "65 km/l",
            Brake_Type: "Drum",
            Transmission: "4-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "No",
            Speedometer: "Analog",
            Fuel_Type: "Petrol",
            Seat_Height: "785mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Analog",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Analog",
            Hazard_Warning_Indicator: "No",
            Low_Battery_Indicator: "No",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Xtreme 125R",
        price: "₹95,000",
        brand: "Hero",
        type: "Motorcycle",
        year: 2023,
        imageURL: "/asset/images/Bike/hero_xtreme_125r.png",
        description: "The Hero Xtreme 125R is the cheapest 125cc sporty commuter bike with ABS in India. It is designed to offer a balance of sportiness, mileage and features, making it ideal for young buyers who want a good looking.",
        specifications: {
            Engine: "125cc",
            Max_Torque: "11Nm",
            Kerb_Weight: "139kg",
            Fuel_Tank_Capacity: "11L",
            Body_Type: "Street",
            ABS: "Single Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2010mm",
            Max_Power: "11hp",
            Mileage: "50 km/l",
            Brake_Type: "Disc",
            Transmission: "5-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "795mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Xpulse 200T 4V",
        price: "₹ 1,30,000",
        brand: "Hero",
        type: "Adventure Motorcycle",
        year: 2023,
        imageURL: "/asset/images/Bike/hero_xpulse_200_4v.png",
        description: "View image gallery of Hero XPulse 200T 4V. XPulse 200T 4V has 13 pictures and 360 views. Take a look at the front & rear view, side & top view & up to date photo gallery of XPulse 200T 4V. Also Hero XPulse 200T 4V is available in 3 colours.",
        specifications: {
            Engine: "199.6cc",
            Max_Torque: "17.35Nm",
            Kerb_Weight: "157kg",
            Fuel_Tank_Capacity: "13L",
            Body_Type: "Adventure",
            ABS: "Single Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2220mm",
            Max_Power: "19hp",
            Mileage: "40 km/l",
            Brake_Type: "Disc",
            Transmission: "5-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "825mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Pleasure Plus",
        price: "₹70,000",
        brand: "Hero",
        type: "Scooter",
        year: 2023,
        imageURL: "/asset/images/Bike/hero_pleasure_plus.png",
        description: "This scooter is a great choice in the basic segment, especially for female drivers. It offers lower maintenance costs compared to other scooters from competing brands.",
        specifications: {
            Engine: "110cc",
            Max_Torque: "8.7Nm",
            Kerb_Weight: "104kg",
            Fuel_Tank_Capacity: "4.8L",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Analog",
            Clutch: "Automatic",
            Overall_Length: "1750mm",
            Max_Power: "8hp",
            Mileage: "50 km/l",
            Brake_Type: "Drum",
            Transmission: "CVT",
            no_of_Cylinders: "1",
            LED_light: "No",
            Speedometer: "Analog",
            Fuel_Type: "Petrol",
            Seat_Height: "765mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Analog",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Analog",
            Hazard_Warning_Indicator: "No",
            Low_Battery_Indicator: "No",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Shine",
        price: "₹80,000",
        brand: "Honda",
        type: "Commuter",
        year: 2023,
        imageURL: "/asset/images/Bike/honda_shine.png",
        description: "The Honda Shine 125 offers a nice package of a refined engine, good ride quality and decent looks. It doesn't have many features to offer like its competitors, but what it does bring to the table is reliable performance and good handling, which is ideal for a commuter bike.",
        specifications: {
            Engine: "124cc",
            Max_Torque: "11Nm",
            Kerb_Weight: "114kg",
            Fuel_Tank_Capacity: "10.5L",
            Body_Type: "Commuter",
            ABS: "Single Channel",
            Tripmeter: "Analog",
            Clutch: "Wet Multiplate",
            Overall_Length: "2046mm",
            Max_Power: "10.5hp",
            Mileage: "55 km/l",
            Brake_Type: "Drum/Disc",
            Transmission: "5-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "No",
            Speedometer: "Analog",
            Fuel_Type: "Petrol",
            Seat_Height: "791mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Analog",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Analog",
            Hazard_Warning_Indicator: "No",
            Low_Battery_Indicator: "No",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Unicorn",
        price: "₹1,05,000",
        brand: "Honda",
        type: "Commuter",
        year: 2023,
        imageURL: "/asset/images/Bike/honda_unicorn.png",
        description: "The Honda Unicorn is a powerful and premium commuter motorcycle and undisputedly one of the best-selling bikes from the Japanese brand. Introduced in 2004, the Unicorn nameplate has stood the test of time in the competitive 150-200cc segment. It offers a good combination of style, features, performance, and reliability. ",
        specifications: {
            Engine: "162.7cc",
            Max_Torque: "14Nm",
            Kerb_Weight: "140kg",
            Fuel_Tank_Capacity: "13L",
            Body_Type: "Commuter",
            ABS: "Single Channel",
            Tripmeter: "Analog",
            Clutch: "Wet Multiplate",
            Overall_Length: "2081mm",
            Max_Power: "12.73hp",
            Mileage: "50 km/l",
            Brake_Type: "Disc",
            Transmission: "5-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "No",
            Speedometer: "Analog",
            Fuel_Type: "Petrol",
            Seat_Height: "798mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Analog",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Analog",
            Hazard_Warning_Indicator: "No",
            Low_Battery_Indicator: "No",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Dio",
        price: "₹70,000",
        brand: "Honda",
        type: "Scooter",
        year: 2023,
        imageURL: "/asset/images/Bike/honda_dio.png",
        description: "The Honda Dio is a stylish and reliable choice in the 110cc scooter segment. The H-smart variant adds keyless operation, but smartphone connectivity with navigation would have been a useful addition.",
        specifications: {
            Engine: "109.51cc",
            Max_Torque: "9Nm",
            Kerb_Weight: "105kg",
            Fuel_Tank_Capacity: "5.3L",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Digital",
            Clutch: "Automatic",
            Overall_Length: "1808mm",
            Max_Power: "7.65hp",
            Mileage: "50 km/l",
            Brake_Type: "Drum",
            Transmission: "CVT",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "765mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "No",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Hornet 2.0",
        price: "₹1,40,000",
        brand: "Honda",
        type: "Naked Street",
        year: 2023,
        imageURL: "/asset/images/Bike/honda_hornet_2.0.png",
        description: "In India, the current crop of 200cc motorcycles are the real gateways into the world of sport riding. While 160cc nakeds have sporty credentials, they still have to be good commuters.",
        specifications: {
            Engine: "184.4cc",
            Max_Torque: "16.1Nm",
            Kerb_Weight: "142kg",
            Fuel_Tank_Capacity: "12L",
            Body_Type: "Naked",
            ABS: "Single Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2047mm",
            Max_Power: "17hp",
            Mileage: "45 km/l",
            Brake_Type: "Disc",
            Transmission: "5-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "790mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Duke 200",
        price: "₹1,90,000",
        brand: "KTM",
        type: "Naked Street",
        year: 2023,
        imageURL: "/asset/images/Bike/ktm_duke_200.png",
        description: "The 200 Duke is the original bike that really introduced India to KTM and still remains a favourite among buyers. Although it hasn’t received a huge amount of updates since its inception, it still remains one of the most thrilling bikes you can get at this price point.",
        specifications: {
            Engine: "199.5cc",
            Max_Torque: "19.3Nm",
            Kerb_Weight: "159kg",
            Fuel_Tank_Capacity: "13.4L",
            Body_Type: "Naked",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2050mm",
            Max_Power: "25hp",
            Mileage: "35 km/l",
            Brake_Type: "Disc",
            Transmission: "6-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "830mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "RC200",
        price: "₹2,15,000",
        brand: "KTM",
        type: "Sportbike",
        year: 2023,
        imageURL: "/asset/images/Bike/ktm_rc_200.png",
        description: "The new RC200 has evolved in all the right ways. It’s now much easier to live with everyday and will offer significantly more thrills when you decide to thrash it around corners. Overall, the KTM RC 200 is a great option for riders who are looking for a powerful and sporty motorcycle",
        specifications: {
            Engine: "199.5cc",
            Max_Torque: "19.3Nm",
            Kerb_Weight: "160kg",
            Fuel_Tank_Capacity: "13.7L",
            Body_Type: "Sport",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2070mm",
            Max_Power: "25hp",
            Mileage: "32 km/l",
            Brake_Type: "Disc",
            Transmission: "6-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "835mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "RC390",
        price: "₹3,16,000",
        brand: "KTM",
        type: "Sportbike",
        year: 2023,
        imageURL: "/asset/images/Bike/ktm_rc_390.png",
        description: "The extensive enhancements in the latest iteration of the RC 390 render it a finely poised motorcycle suitable for both daily commuting and spirited weekend rides on twisty mountain roads or track outings. The advancements in the chassis and powertrain have elevated the bike's performance to such an extent that the existing tires find themselves slightly outmatched. ",
        specifications: {
            Engine: "373.2cc",
            Max_Torque: "37Nm",
            Kerb_Weight: "172kg",
            Fuel_Tank_Capacity: "13.7L",
            Body_Type: "Sport",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Assist & Slipper Clutch",
            Overall_Length: "2145mm",
            Max_Power: "43hp",
            Mileage: "26 km/l",
            Brake_Type: "Disc",
            Transmission: "6-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "820mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "390 Adventure",
        price: "₹3,70,000",
        brand: "KTM",
        type: "Adventure",
        year: 2023,
        imageURL: "/asset/images/Bike/ktm_390_adventure.png",
        description: "The KTM 390 Adventure is great for touring and quite good for off-road riding as well with its powerful motor, comfortable ergonomics and extensive list of features and rider aids. And with three different variants, you can pick and choose which one works out for you the best.",
        specifications: {
            Engine: "373.2cc",
            Max_Torque: "37Nm",
            Kerb_Weight: "177kg",
            Fuel_Tank_Capacity: "14.5L",
            Body_Type: "Adventure",
            ABS: "Dual Channel with Off-Road Mode",
            Tripmeter: "Digital",
            Clutch: "Assist & Slipper Clutch",
            Overall_Length: "2154mm",
            Max_Power: "43hp",
            Mileage: "30 km/l",
            Brake_Type: "Disc",
            Transmission: "6-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "855mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Jupiter",
        price: "₹72,000",
        brand: "TVS",
        type: "Scooter",
        year: 2023,
        imageURL: "/asset/images/Bike/tvs_jupiter.png",
        description: "The Jupiter 110 is one of TVS’ best-selling scooters in India and has been thoroughly updated for 2024.  It sports a modern design and is now powered by a new hybrid engine that claims improved performance and mileage.",
        specifications: {
            Engine: "109.7cc",
            Max_Torque: "8.4Nm",
            Kerb_Weight: "107kg",
            Fuel_Tank_Capacity: "6L",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Analogue",
            Clutch: "Automatic",
            Overall_Length: "1834mm",
            Max_Power: "7.3hp",
            Mileage: "50 km/l",
            Brake_Type: "Drum",
            Transmission: "CVT",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Analogue",
            Fuel_Type: "Petrol",
            Seat_Height: "765mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Analogue",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "No",
            Battery: "12V",
            Anti_Theft_Alarm: "No",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Analogue",
            Hazard_Warning_Indicator: "No",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "No",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "No",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Apache RTR 160",
        price: "₹1,15,000",
        brand: "TVS",
        type: "Naked Street",
        year: 2023,
        imageURL: "/asset/images/Bike/tvs_apache_rtr_160.png",
        description: "The TVS Apache RTR 160 has been on sale for quite some time now and is one of the most popular TVS bikes in India. In order to keep it relevant, TVS updated it with new features, colours, and even some design tweaks making it look sharper.",
        specifications: {
            Engine: "159.7cc",
            Max_Torque: "14.12Nm",
            Kerb_Weight: "139kg",
            Fuel_Tank_Capacity: "12L",
            Body_Type: "Naked",
            ABS: "Single Channel",
            Tripmeter: "Digital",
            Clutch: "Wet Multiplate",
            Overall_Length: "2030mm",
            Max_Power: "15.53hp",
            Mileage: "45 km/l",
            Brake_Type: "Disc",
            Transmission: "5-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "800mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "No",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "NTORQ 125",
        price: "₹87,000",
        brand: "TVS",
        type: "Scooter",
        year: 2023,
        imageURL: "/asset/images/Bike/tvs_ntorq_125.png",
        description: "The TVS NTorq caters to a wide variety of riders with different preferences - the base model is for budget-conscious riders, the Race XP can be for enthusiasts who want performance and the XT is the perfect choice for tech-savvy buyers. The TVS NTorq is undoubtedly one of the finest scooters in India.",
        specifications: {
            Engine: "124.8cc",
            Max_Torque: "10.5Nm",
            Kerb_Weight: "118kg",
            Fuel_Tank_Capacity: "5.8L",
            Body_Type: "Scooter",
            ABS: "No",
            Tripmeter: "Digital",
            Clutch: "Automatic",
            Overall_Length: "1861mm",
            Max_Power: "9.25hp",
            Mileage: "47 km/l",
            Brake_Type: "Disc",
            Transmission: "CVT",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "770mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Ronin",
        price: "₹1,49,000",
        brand: "TVS",
        type: "Cruiser",
        year: 2023,
        imageURL: "/asset/images/Bike/tvs_ronin.png",
        description: "The TVS Ronin is a 225cc neo-retro roadster, which has the design elements of a cruiser and a scrambler. It is positioned as a premium commuter and offers adequate performance and comes with a bunch of features.",
        specifications: {
            Engine: "225.9cc",
            Max_Torque: "19.93Nm",
            Kerb_Weight: "160kg",
            Fuel_Tank_Capacity: "14L",
            Body_Type: "Cruiser",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Assist & Slipper Clutch",
            Overall_Length: "2040mm",
            Max_Power: "20.4hp",
            Mileage: "35 km/l",
            Brake_Type: "Disc",
            Transmission: "5-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "795mm"
        },
        features: {
            Touch_Screen_Display: "No",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "No",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    },
    {
        model: "Apache RTR 310",
        price: "₹2,40,000",
        brand: "TVS",
        type: "Sportbike",
        year: 2023,
        imageURL: "/asset/images/Bike/tvs_apache_rtr_310.png",
        description: "The TVS Apache RTR 310 can be a lot of fun as a sporty commuter given its good looks, peppy engine and effortless handling. So if you're looking for a feature-packed streetfighter that's quite fun in the city and don't intend to go out on the highway a lot, it can be a good option.",
        specifications: {
            Engine: "312.2cc",
            Max_Torque: "27.3Nm",
            Kerb_Weight: "174kg",
            Fuel_Tank_Capacity: "11L",
            Body_Type: "Sport",
            ABS: "Dual Channel",
            Tripmeter: "Digital",
            Clutch: "Assist & Slipper Clutch",
            Overall_Length: "2001mm",
            Max_Power: "33.5hp",
            Mileage: "30 km/l",
            Brake_Type: "Disc",
            Transmission: "6-Speed Manual",
            no_of_Cylinders: "1",
            LED_light: "Yes",
            Speedometer: "Digital",
            Fuel_Type: "Petrol",
            Seat_Height: "810mm"
        },
        features: {
            Touch_Screen_Display: "Yes",
            Odometer: "Digital",
            Fuel_Gauge: "Yes",
            Stant_Alarm: "Yes",
            Battery: "12V",
            Anti_Theft_Alarm: "Yes",
            Automatic_headlight_on: "Yes",
            GPS_Navigation: "Yes",
            Pillion_Seat: "Yes",
            Instrument_Console: "Digital",
            Hazard_Warning_Indicator: "Yes",
            Low_Battery_Indicator: "Yes",
            Call_SMS_Alerts: "Yes",
            Low_Fuel_Indicator: "Yes",
            Mobile_Phone_Connectivity: "Yes",
            Passenger_Footrest: "Yes",
            USB_Charging_Port: "Yes",
            Low_Oil_Indicator: "Yes"
        },
        customer_review: {
            reviews: [
                {
                    name: "John Doe",
                    rating: 4.5,
                    comment: "Amazing bike! The ride quality is smooth, and the engine performance is impressive."
                },
                {
                    name: "Jane Smith",
                    rating: 3.6,
                    comment: "Great value for the money. The mileage is decent and very comfortable for long rides."
                },
                {
                    name: "Sam Wilson",
                    rating: 5.0,
                    comment: "Fantastic! The build quality is top-notch, and it handles really well in city traffic."
                },
                {
                    name: "Emily Davis",
                    rating: 4.2,
                    comment: "Very reliable bike. Perfect for both city commuting and long weekend rides."
                }
            ]
        }
    }
];

export default bikes;
