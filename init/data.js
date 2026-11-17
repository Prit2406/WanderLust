const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and direct beach access.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1527334030-7c7b3b3b3b3b",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [-118.7798, 34.0259]
        }
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers and business travelers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [-74.006, 40.7128]
        }
    },
    {
        title: "Mountain Retreat",
        description: "Enjoy a peaceful escape in this beautiful mountain cabin surrounded by nature and breathtaking views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
        },
        price: 1800,
        location: "Aspen",
        country: "United States",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [-106.8175, 39.1911]
        }
    },
    {
        title: "Luxury Villa with Pool",
        description: "Experience luxury in this stunning villa featuring a private swimming pool, garden and spacious interiors.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        },
        price: 3500,
        location: "Bali",
        country: "Indonesia",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [115.2167, -8.65]
        }
    },
    {
        title: "Historic Canal House",
        description: "Stay in a beautiful historic house overlooking the famous canals. Perfect for couples and families.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
        },
        price: 2200,
        location: "Amsterdam",
        country: "Netherlands",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [4.9041, 52.3676]
        }
    },
    {
        title: "Seaside Apartment",
        description: "Wake up to beautiful sea views in this modern apartment located just steps away from the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        },
        price: 1600,
        location: "Goa",
        country: "India",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [73.8278, 15.2993]
        }
    },
    {
        title: "Countryside Farmhouse",
        description: "Relax in this peaceful farmhouse surrounded by green fields and beautiful countryside scenery.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        },
        price: 1100,
        location: "Gujarat",
        country: "India",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [72.6369, 23.2156]
        }
    },
    {
        title: "Luxury Penthouse",
        description: "Enjoy a premium stay in this elegant penthouse with panoramic city views and modern amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        },
        price: 4500,
        location: "Dubai",
        country: "United Arab Emirates",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048]
        }
    },
    {
        title: "Wooden Cabin in Forest",
        description: "Experience nature in this cozy wooden cabin surrounded by beautiful trees and peaceful surroundings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
        },
        price: 1400,
        location: "Manali",
        country: "India",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [77.1892, 32.2432]
        }
    },
    {
        title: "Traditional Japanese House",
        description: "Experience traditional Japanese living in this beautiful house with a peaceful garden.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        },
        price: 2000,
        location: "Kyoto",
        country: "Japan",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [135.7681, 35.0116]
        }
    },
    {
        title: "Modern City Apartment",
        description: "A comfortable and stylish apartment located near shopping centers, restaurants and tourist attractions.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        },
        price: 1900,
        location: "London",
        country: "United Kingdom",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [-0.1276, 51.5072]
        }
    },
    {
        title: "Desert Luxury Camp",
        description: "Enjoy a unique desert experience with luxury tents, beautiful sunsets and traditional hospitality.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
        },
        price: 2800,
        location: "Rajasthan",
        country: "India",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [75.7873, 26.9124]
        }
    },
    {
        title: "Lakeview Wooden Cottage",
        description: "Enjoy stunning lake views from this peaceful wooden cottage. Ideal for a relaxing weekend.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        },
        price: 1700,
        location: "Udaipur",
        country: "India",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [73.7125, 24.5854]
        }
    },
    {
        title: "Elegant Paris Apartment",
        description: "Stay in a charming Parisian apartment close to famous landmarks, cafes and shopping streets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        },
        price: 3000,
        location: "Paris",
        country: "France",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [2.3522, 48.8566]
        }
    },
    {
        title: "Tropical Beach Resort",
        description: "Enjoy a tropical paradise with crystal-clear water, beautiful beaches and comfortable accommodation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        },
        price: 4000,
        location: "Phuket",
        country: "Thailand",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [98.3923, 7.8804]
        }
    },
    {
        title: "Snow Mountain Chalet",
        description: "A beautiful chalet offering cozy interiors, mountain views and easy access to skiing activities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-151 ski",
        },
        price: 3200,
        location: "Swiss Alps",
        country: "Switzerland",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [8.2275, 46.8182]
        }
    },
    {
        title: "Minimalist Studio Apartment",
        description: "A modern and affordable studio apartment with stylish interiors and all essential facilities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        },
        price: 900,
        location: "Ahmedabad",
        country: "India",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [72.5714, 23.0225]
        }
    },
    {
        title: "Royal Heritage Haveli",
        description: "Experience royal hospitality in this traditional heritage haveli featuring beautiful architecture.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        },
        price: 2500,
        location: "Jaipur",
        country: "India",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [75.7873, 26.9124]
        }
    },
    {
        title: "Ocean View Luxury Suite",
        description: "Relax in a premium ocean-view suite with elegant interiors, private balcony and modern facilities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        },
        price: 3800,
        location: "Miami",
        country: "United States",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [-80.1918, 25.7617]
        }
    },
    {
        title: "Peaceful Garden Bungalow",
        description: "A lovely bungalow surrounded by beautiful gardens, perfect for families and nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
        },
        price: 1300,
        location: "Lonavala",
        country: "India",
        owner: '6afc0b4464b47cc3146b00fb',
        geometry: {
            type: "Point",
            coordinates: [73.4062, 18.7546]
        }
    }
];

module.exports = { data: sampleListings };