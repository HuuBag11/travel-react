import imageDefault from "../../assets/image_default.webp"

export const listDestinations = [
    {
        id: 1,
        name: "Halong Bay",
        thumbnail: "https://images.unsplash.com/photo-1441839438427-ad31d742a202?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Halong Bay, located in northeastern Vietnam, is renowned for its emerald waters and towering limestone pillars. It is a UNESCO World Heritage Site and a top tourist destination known for its stunning natural beauty and diverse marine life. Visitors can explore the bay by taking boat tours, which offer opportunities to see floating fishing villages, explore hidden caves, and enjoy the tranquil scenery. The bay is also famous for its rich cultural history and offers a range of activities from kayaking to hiking on some of the bay's islands.",
        rating: 4.8,
        category: "nature",
        location: "Vietnam",
        price: "$100 - $200 per day"
    },
    {
        id: 2,
        name: "Angkor Wat",
        thumbnail: "https://plus.unsplash.com/premium_photo-1661963188432-5de8a11f21a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Angkor Wat is a vast temple complex located in Cambodia. It is one of the largest religious monuments in the world and a symbol of Cambodia’s rich history and culture. Originally constructed in the early 12th century, Angkor Wat was initially a Hindu temple but later became a Buddhist temple. Its stunning architecture and intricate carvings are a testament to the artistic and engineering prowess of the Khmer Empire. The site attracts millions of visitors annually who come to marvel at its grandeur and learn about its historical significance.",
        rating: 4.9,
        category: "recommended",
        location: "Cambodia",
        price: "$50 - $150 per day"
    },
    {
        id: 3,
        name: "Bali",
        thumbnail: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Bali, an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs, is a top destination for tourists seeking a tropical getaway. The island offers a rich cultural experience with its vibrant arts scene, traditional dance performances, and spiritual practices. Bali is also famous for its luxurious resorts, surfing spots, and unique cuisine. Popular areas include Ubud for its art and culture, Seminyak for its upscale beach resorts, and Uluwatu for its stunning cliffside views and surf breaks.",
        rating: 4.7,
        category: "beach",
        location: "Indonesia",
        price: "$70 - $250 per day"
    },
    {
        id: 4,
        name: "Bangkok",
        thumbnail: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Bangkok, the bustling capital of Thailand, is a city of contrasts where modern skyscrapers sit alongside ancient temples. Known for its vibrant street life, elaborate temples, and bustling markets, Bangkok offers an exciting urban experience. Major attractions include the Grand Palace, Wat Arun, and Wat Phra Kaew. The city is also famous for its street food, offering a variety of delicious and affordable dishes. With its lively nightlife and extensive shopping options, Bangkok is a dynamic and diverse destination.",
        rating: 4.6,
        category: "recommended",
        location: "Thailand",
        price: "$50 - $120 per day"
    },
    {
        id: 5,
        name: "Chiang Mai",
        thumbnail: "https://plus.unsplash.com/premium_photo-1661929242720-140374d97c94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Chiang Mai, located in northern Thailand, is known for its beautiful temples, mountainous landscapes, and rich cultural heritage. The city hosts numerous festivals throughout the year, including the famous Yi Peng Lantern Festival. Chiang Mai's Old City is home to ancient temples such as Wat Phra Singh and Wat Chedi Luang, while the surrounding countryside offers opportunities for trekking, visiting hill tribes, and exploring lush rainforests. The local markets are a great place to sample Northern Thai cuisine and shop for handicrafts.",
        rating: 4.7,
        category: "nature",
        location: "Thailand",
        price: "$40 - $100 per day"
    },
    {
        id: 6,
        name: "Phuket",
        thumbnail: "https://images.unsplash.com/photo-1693494813069-b83e8eaca59a?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Phuket, Thailand's largest island, is famous for its stunning beaches, vibrant nightlife, and diverse range of activities. From the bustling Patong Beach to the serene Phang Nga Bay, Phuket offers something for everyone. Visitors can enjoy water sports, explore local markets, or relax in luxurious beachfront resorts. The island is also known for its cultural attractions, including the Big Buddha and Wat Chalong. With its beautiful scenery and lively atmosphere, Phuket is a popular destination for both relaxation and adventure.",
        rating: 4.6,
        category: "beach",
        location: "Thailand",
        price: "$60 - $200 per day"
    },
    {
        id: 7,
        name: "Hanoi",
        thumbnail: "https://images.unsplash.com/photo-1598249892865-56a0f2c00677?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Hanoi, the capital of Vietnam, is a city steeped in history and culture. Known for its centuries-old architecture, vibrant street life, and delicious cuisine, Hanoi offers a unique blend of old and new. Major attractions include the Ho Chi Minh Mausoleum, the Old Quarter, and the Temple of Literature. The city's bustling markets, street food stalls, and traditional tea houses provide a taste of local life. With its rich history and dynamic atmosphere, Hanoi is a fascinating destination for travelers.",
        rating: 4.5,
        category: "recommended",
        location: "Vietnam",
        price: "$40 - $90 per day"
    },
    {
        id: 8,
        name: "Siem Reap",
        thumbnail: "https://images.unsplash.com/photo-1580334338120-0a3411fbf06e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Siem Reap, located in northwestern Cambodia, is the gateway to the Angkor Archaeological Park. Beyond Angkor Wat, Siem Reap offers a variety of attractions including the floating villages on Tonle Sap Lake, the vibrant Pub Street, and the Angkor National Museum. The town provides a range of accommodations, from budget hostels to luxury resorts, and is known for its friendly atmosphere and bustling markets. Visitors can also explore nearby temples such as Bayon and Ta Prohm, which are famous for their intricate carvings and tree-covered ruins.",
        rating: 4.8,
        category: "recommended",
        location: "Cambodia",
        price: "$50 - $130 per day"
    },
    {
        id: 9,
        name: "Kuala Lumpur",
        thumbnail: "https://images.unsplash.com/photo-1585031039436-16a906da2f05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Kuala Lumpur, the capital city of Malaysia, is a vibrant metropolis known for its impressive skyline dominated by the Petronas Twin Towers. The city offers a mix of modern attractions and cultural experiences, including bustling street markets, high-end shopping malls, and historical sites. Key attractions include the Batu Caves, the KL Tower, and the Islamic Arts Museum. Kuala Lumpur's diverse culinary scene reflects its multicultural population, offering everything from street food to fine dining.",
        rating: 4.5,
        category: "recommended",
        location: "Malaysia",
        price: "$50 - $110 per day"
    },
    {
        id: 10,
        name: "Luang Prabang",
        thumbnail: "https://images.unsplash.com/photo-1633984904221-29bb70dffef8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Luang Prabang, a UNESCO World Heritage Site in Laos, is renowned for its well-preserved architecture, serene temples, and lush natural surroundings. The city is known for its traditional Buddhist culture, with numerous temples and monasteries that offer a glimpse into local life. Highlights include the Kuang Si Falls, the Night Market, and the Royal Palace Museum. Luang Prabang’s peaceful ambiance and charming streets make it a perfect destination for relaxation and cultural exploration.",
        rating: 4.7,
        category: "nature",
        location: "Laos",
        price: "$40 - $100 per day"
    },
    {
        id: 11,
        name: "Manila",
        thumbnail: "https://images.unsplash.com/photo-1462558813106-ae2d242f4ff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Manila, the capital of the Philippines, is a vibrant and bustling city with a rich history and diverse cultural influences. The city is home to historic landmarks such as Intramuros, the historic walled city, and Rizal Park, dedicated to the national hero, José Rizal. Manila offers a lively arts scene, a variety of dining options, and bustling markets. Visitors can also explore nearby attractions such as the Cultural Center of the Philippines and the National Museum.",
        rating: 4.4,
        category: "recommended",
        location: "Philippines",
        price: "$50 - $120 per day"
    },
    {
        id: 12,
        name: "Davao",
        thumbnail: "https://images.unsplash.com/photo-1548585219-8eb7c1801390?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Davao, located on the southern island of Mindanao in the Philippines, is known for its natural beauty and vibrant culture. The city is surrounded by stunning landscapes, including Mount Apo, the highest peak in the Philippines. Davao is famous for its durian fruit, as well as its clean and orderly streets. Visitors can explore the Philippine Eagle Center, enjoy the city’s parks and gardens, or take a trip to nearby Samal Island for beautiful beaches and resorts.",
        rating: 4.6,
        category: "nature",
        location: "Philippines",
        price: "$40 - $100 per day"
    },
    {
        id: 13,
        name: "Yogyakarta",
        thumbnail: "https://images.unsplash.com/photo-1630214801769-24784bfd2b9c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Yogyakarta, often referred to as Jogja, is a city in Indonesia known for its cultural heritage and proximity to the famous Borobudur and Prambanan temples. The city is a center for Javanese culture, art, and education, with attractions including the Sultan’s Palace (Kraton), the vibrant Malioboro Street, and the traditional batik workshops. Yogyakarta offers a unique cultural experience and serves as a gateway to some of Indonesia's most significant historical sites.",
        rating: 4.7,
        category: "recommended",
        location: "Indonesia",
        price: "$40 - $90 per day"
    },
    {
        id: 14,
        name: "Bohol",
        thumbnail: "https://images.unsplash.com/photo-1591506557489-e8ca407063e7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Bohol, an island province in the Philippines, is renowned for its natural wonders, including the famous Chocolate Hills and the tarsier, one of the world’s smallest primates. The island also boasts beautiful beaches, such as those on Panglao Island, and scenic river cruises on the Loboc River. Bohol offers a mix of adventure and relaxation, with opportunities for diving, snorkeling, and exploring historical sites.",
        rating: 4.8,
        category: "nature",
        location: "Philippines",
        price: "$50 - $130 per day"
    },
    {
        id: 15,
        name: "Luang Namtha",
        thumbnail: "https://images.unsplash.com/photo-1707788740199-10baff801150?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Luang Namtha, located in northern Laos, is known for its stunning natural landscapes and diverse ethnic cultures. The area offers opportunities for eco-tourism, including trekking, river rafting, and exploring traditional villages. Visitors can enjoy the scenic beauty of Nam Ha National Protected Area and experience the local customs and traditions of various ethnic groups in the region. Luang Namtha is a great destination for those interested in nature and cultural experiences.",
        rating: 4.6,
        category: "nature",
        location: "Laos",
        price: "$40 - $100 per day"
    },
    {
        id: 16,
        name: "Nha Trang",
        thumbnail: "https://images.unsplash.com/photo-1654930453993-bf69bbb3a00d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Nha Trang, a coastal city in Vietnam, is famous for its beautiful beaches and vibrant marine life. The city offers a range of activities, from relaxing on sandy shores to exploring underwater wonders through snorkeling and diving. Major attractions include Vinpearl Land, a large amusement park and resort complex, and the Po Nagar Cham Towers, which provide a glimpse into the region’s ancient history. Nha Trang also has a lively nightlife scene and a variety of dining options.",
        rating: 4.6,
        category: "beach",
        location: "Vietnam",
        price: "$50 - $120 per day"
    },
    {
        id: 17,
        name: "Penang",
        thumbnail: imageDefault,
        description: "Penang, an island state in Malaysia, is renowned for its rich cultural heritage, vibrant street food, and beautiful beaches. George Town, the capital, is a UNESCO World Heritage Site with well-preserved colonial architecture and a thriving arts scene. Penang offers a mix of modern attractions and traditional experiences, including temples, markets, and street art. The island is also famous for its culinary scene, with a wide variety of local dishes to try.",
        rating: 4.7,
        category: "recommended",
        location: "Malaysia",
        price: "$50 - $110 per day"
    },
    {
        id: 18,
        name: "Vientiane",
        thumbnail: imageDefault,
        description: "Vientiane, the capital of Laos, is known for its laid-back atmosphere and French colonial architecture. The city offers a range of cultural and historical attractions, including the Patuxai Arch, Wat Si Saket, and the That Luang stupa. Vientiane provides a relaxed pace of life compared to other Southeast Asian capitals, with charming cafes, local markets, and serene temples. The city is a great place to explore Laos' unique blend of traditional and colonial influences.",
        rating: 4.4,
        category: "recommended",
        location: "Laos",
        price: "$40 - $90 per day"
    },
    {
        id: 19,
        name: "Sihanoukville",
        thumbnail: imageDefault,
        description: "Sihanoukville, a coastal city in Cambodia, is known for its beautiful beaches and vibrant nightlife. The city offers a range of activities, including relaxing on sandy shores, exploring nearby islands, and enjoying fresh seafood. Popular beaches include Ochheuteal Beach and Serendipity Beach. Sihanoukville is also a gateway to nearby attractions such as the Ream National Park and the picturesque Koh Rong island. The city provides a mix of relaxation and adventure for beach enthusiasts.",
        rating: 4.5,
        category: "beach",
        location: "Cambodia",
        price: "$60 - $150 per day"
    },
    {
        id: 20,
        name: "Kanchanaburi",
        thumbnail: imageDefault,
        description: "Kanchanaburi, located in western Thailand, is known for its historical significance and natural beauty. The city is famous for the Death Railway and the Bridge over the River Kwai, which are key sites from World War II. Visitors can explore the Erawan National Park with its stunning waterfalls, visit the Hellfire Pass Memorial Museum, or take a scenic train ride on the historic railway. Kanchanaburi offers a mix of history, nature, and relaxation.",
        rating: 4.6,
        category: "nature",
        location: "Thailand",
        price: "$50 - $120 per day"
    },
    {
        id: 21,
        name: "Bandung",
        thumbnail: imageDefault,
        description: "Bandung, located in Indonesia's West Java province, is known for its cool climate, colonial architecture, and vibrant arts scene. The city is surrounded by scenic mountains and tea plantations, making it a popular destination for outdoor activities. Attractions include the Tangkuban Perahu volcano, the Saung Angklung Udjo cultural center, and the bustling factory outlet shops. Bandung's mix of natural beauty and cultural experiences makes it a great spot for a getaway from Jakarta.",
        rating: 4.5,
        category: "nature",
        location: "Indonesia",
        price: "$40 - $100 per day"
    },
    {
        id: 22,
        name: "Kota Kinabalu",
        thumbnail: imageDefault,
        description: "Kota Kinabalu, the capital of Malaysia’s Sabah state, is known for its proximity to Mount Kinabalu, the highest peak in Southeast Asia. The city offers a range of attractions, including the Sabah State Museum, the waterfront area, and local markets. Visitors can explore the nearby Tunku Abdul Rahman Marine Park for snorkeling and diving, or take a trip to the hot springs in Poring. Kota Kinabalu is a gateway to the natural wonders of Sabah and a hub for adventure tourism.",
        rating: 4.6,
        category: "nature",
        location: "Malaysia",
        price: "$50 - $110 per day"
    },
    {
        id: 23,
        name: "Pai",
        thumbnail: imageDefault,
        description: "Pai, a small town in northern Thailand, is known for its relaxed atmosphere and beautiful natural surroundings. The town is popular with backpackers and offers a range of activities, including exploring hot springs, waterfalls, and scenic viewpoints. Pai’s laid-back vibe is reflected in its cafes, guesthouses, and local markets. The town is also known for its vibrant night market and traditional Thai culture. Pai is a great destination for those looking to unwind and enjoy the countryside.",
        rating: 4.7,
        category: "nature",
        location: "Thailand",
        price: "$30 - $80 per day"
    },
    {
        id: 24,
        name: "Baliem Valley",
        thumbnail: imageDefault,
        description: "Baliem Valley, located in the highlands of Papua, Indonesia, is known for its stunning landscapes and unique cultural experiences. The valley is home to the Dani people, who have preserved their traditional way of life. Visitors can trek through lush rainforests, explore traditional villages, and witness traditional ceremonies and festivals. The valley offers a remote and authentic experience for those interested in adventure and cultural immersion.",
        rating: 4.6,
        category: "nature",
        location: "Indonesia",
        price: "$100 - $200 per day"
    },
    {
        id: 25,
        name: "Sukothai",
        thumbnail: imageDefault,
        description: "Sukothai, the ancient capital of Thailand, is known for its historical ruins and beautiful temples. The Sukothai Historical Park, a UNESCO World Heritage Site, features well-preserved ruins of temples, palaces, and city walls from the 13th century. Visitors can explore the park by bicycle or on foot, taking in the intricate architecture and serene surroundings. Sukothai offers a glimpse into Thailand's medieval history and is a peaceful destination for history enthusiasts.",
        rating: 4.7,
        category: "recommended",
        location: "Thailand",
        price: "$40 - $90 per day"
    },
    {
        id: 26,
        name: "Gili Islands",
        thumbnail: imageDefault,
        description: "The Gili Islands, located off the coast of Lombok in Indonesia, are known for their pristine beaches, crystal-clear waters, and vibrant marine life. The three islands—Gili Trawangan, Gili Meno, and Gili Air—offer a range of activities including snorkeling, diving, and relaxing on beautiful sandy shores. Each island has its own unique charm, with Gili Trawangan being popular for its nightlife, Gili Meno for its tranquility, and Gili Air for its laid-back atmosphere.",
        rating: 4.8,
        category: "beach",
        location: "Indonesia",
        price: "$60 - $150 per day"
    },
    {
        id: 27,
        name: "Dien Bien Phu",
        thumbnail: imageDefault,
        description: "Dien Bien Phu, located in northwestern Vietnam, is a city with significant historical importance. It was the site of the decisive battle in 1954 that led to the end of French colonial rule in Indochina. Visitors can explore the Dien Bien Phu Museum, the War Cemetery, and the historic battlefields. The surrounding landscape offers beautiful scenery, including rolling hills and lush valleys. Dien Bien Phu is a destination for those interested in history and enjoying scenic views.",
        rating: 4.5,
        category: "nature",
        location: "Vietnam",
        price: "$40 - $90 per day"
    },
    {
        id: 28,
        name: "Kuta",
        thumbnail: imageDefault,
        description: "Kuta, located on the island of Bali, Indonesia, is known for its lively atmosphere and beautiful beaches. The area is popular with surfers and beachgoers, offering a range of activities from surfing and sunbathing to shopping and dining. Kuta Beach is famous for its long sandy stretch and vibrant sunset views. The area also features numerous bars, restaurants, and shops, making it a bustling hub for tourists looking for both relaxation and entertainment.",
        rating: 4.6,
        category: "beach",
        location: "Indonesia",
        price: "$60 - $150 per day"
    },
    {
        id: 29,
        name: "Vang Vieng",
        thumbnail: imageDefault,
        description: "Vang Vieng, located in Laos, is known for its stunning karst landscapes and outdoor adventure opportunities. The town is a popular destination for activities such as tubing along the Nam Song River, exploring caves, and hiking through picturesque scenery. Vang Vieng offers a range of accommodations and dining options, with a relaxed atmosphere that attracts both adventure seekers and those looking to enjoy the natural beauty of the region.",
        rating: 4.7,
        category: "nature",
        location: "Laos",
        price: "$40 - $100 per day"
    },
    {
        id: 30,
        name: "Nakhon Ratchasima",
        thumbnail: imageDefault,
        description: "Nakhon Ratchasima, often called Korat, is a city in northeastern Thailand known for its historical and cultural attractions. The city is a gateway to the Khao Yai National Park, a UNESCO World Heritage Site with diverse wildlife and scenic landscapes. Key attractions include the Phimai Historical Park, which features ancient Khmer ruins, and the Korat Zoo. Nakhon Ratchasima offers a mix of historical, cultural, and natural experiences.",
        rating: 4.5,
        category: "nature",
        location: "Thailand",
        price: "$40 - $100 per day"
    },
    {
        id: 31,
        name: "Pattaya",
        thumbnail: imageDefault,
        description: "Pattaya, a city on Thailand's eastern Gulf coast, is known for its vibrant nightlife, beautiful beaches, and diverse range of activities. The city offers attractions such as the Pattaya Floating Market, Nong Nooch Tropical Garden, and the Sanctuary of Truth, an impressive wooden temple. Pattaya's nightlife scene is bustling, with numerous bars, clubs, and entertainment options. The city also provides opportunities for water sports, shopping, and exploring nearby islands.",
        rating: 4.5,
        category: "beach",
        location: "Thailand",
        price: "$50 - $130 per day"
    },
    {
        id: 32,
        name: "Jogyakarta",
        thumbnail: imageDefault,
        description: "Jogyakarta, or Yogyakarta, is a city in Indonesia that serves as a cultural hub and gateway to historic sites such as Borobudur and Prambanan. Known for its traditional Javanese culture, the city is home to attractions like the Kraton Palace, vibrant markets, and artisan workshops. Visitors can experience traditional dance performances, explore historical sites, and enjoy local cuisine. Jogyakarta offers a blend of cultural immersion and historical exploration.",
        rating: 4.7,
        category: "recommended",
        location: "Indonesia",
        price: "$40 - $90 per day"
    },
    {
        id: 33,
        name: "Labuan Bajo",
        thumbnail: imageDefault,
        description: "Labuan Bajo, located on the western tip of Flores Island in Indonesia, is the gateway to Komodo National Park. The area is known for its stunning marine biodiversity, including the famous Komodo dragons, vibrant coral reefs, and beautiful islands. Visitors can take boat trips to explore the park, go snorkeling or diving, and enjoy the scenic views of the surrounding islands. Labuan Bajo offers a mix of adventure, wildlife viewing, and relaxation.",
        rating: 4.8,
        category: "nature",
        location: "Indonesia",
        price: "$80 - $200 per day"
    },
    {
        id: 34,
        name: "Mandalay",
        thumbnail: imageDefault,
        description: "Mandalay, located in central Myanmar, is known for its rich history and cultural heritage. The city is home to historic sites such as Mandalay Palace, the Mahamuni Pagoda, and U Bein Bridge, the oldest and longest teak bridge in the world. Mandalay offers a glimpse into Myanmar’s traditional culture, with local markets, temples, and artisans. The surrounding region also features scenic landscapes and opportunities for exploring nearby ancient cities and cultural sites.",
        rating: 4.6,
        category: "recommended",
        location: "Myanmar",
        price: "$50 - $120 per day"
    },
    {
        id: 35,
        name: "Batu Caves",
        thumbnail: imageDefault,
        description: "The Batu Caves, located just north of Kuala Lumpur, Malaysia, are a series of limestone caves that house a Hindu temple complex. The site is known for its towering golden statue of Lord Murugan and the colorful steps leading up to the main cave temple. Visitors can explore the cave temples, enjoy panoramic views from the top, and learn about Hindu culture and rituals. The Batu Caves are a significant religious site and a popular tourist attraction.",
        rating: 4.7,
        category: "recommended",
        location: "Malaysia",
        price: "$20 - $50 per day"
    },
    {
        id: 36,
        name: "Surabaya",
        thumbnail: imageDefault,
        description: "Surabaya, Indonesia’s second-largest city, is known for its historical sites, cultural landmarks, and vibrant markets. Key attractions include the House of Sampoerna, a museum dedicated to Indonesia’s cigarette industry, and the Surabaya Zoo. The city also features colonial architecture, bustling shopping districts, and local street food. Surabaya provides a mix of urban experiences and historical exploration, making it a dynamic destination for travelers.",
        rating: 4.5,
        category: "recommended",
        location: "Indonesia",
        price: "$40 - $100 per day"
    },
    {
        id: 37,
        name: "Kep",
        thumbnail: imageDefault,
        description: "Kep, located in southwestern Cambodia, is known for its tranquil beaches, fresh seafood, and nearby national park. The town offers a relaxed atmosphere with attractions such as Kep National Park, the famous crab market, and picturesque sunsets over the Gulf of Thailand. Visitors can explore the park’s trails, enjoy the local cuisine, and visit nearby islands for a serene escape from the city. Kep’s laid-back vibe and natural beauty make it a charming destination.",
        rating: 4.6,
        category: "beach",
        location: "Cambodia",
        price: "$50 - $120 per day"
    }
]
