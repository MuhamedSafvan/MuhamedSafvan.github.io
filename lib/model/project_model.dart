class Project {
  final String name;
  final String description;
  final String image;
  // final String link;
  Project(
    this.name,
    this.description,
    this.image,
    //  this.link
  );
}

List<Project> projectList = [
  Project(
    'Weather App',
    "Announcing my latest project: a Weather App crafted with Flutter, delivering accurate forecasts and real-time weather updates. With a user-friendly interface, users can effortlessly check current conditions, view forecasts, and track weather patterns with ease. Stay informed and prepared for any forecasted conditions with this intuitive Flutter Weather App.",
    'assets/images/Weather-App-Poster.png',
  ),
  Project(
    'Instagram Clone',
    'Introducing a sleek Instagram Clone crafted with Flutter. With its intuitive interface, users can seamlessly browse, upload, and engage with photos and videos, just like on the original platform. Experience the essence of Instagram with this versatile Flutter creation',
    'assets/images/Instagram-Poster.png',
  ),
  Project(
    'WhatsApp Clone',
    "Presenting a WhatsApp Clone designed with Flutter. This powerful application mirrors the functionality of WhatsApp, allowing users to chat, share media, and connect with friends effortlessly. Enjoy the familiar WhatsApp experience with the convenience and flexibility of Flutter technology.",
    'assets/images/WhatsApp-Poster.png',
  ),
  Project(
    'Amazon Clone',
    "Introducing my latest creation: a Flutter-powered Amazon Clone showcasing a vast array of products for browsing pleasure. Explore an extensive catalog of items, curated to emulate the Amazon experience, providing users with a seamless platform for discovering new products and trends.",
    'assets/images/Amazon-Poster.png',
  ),
  Project(
    'News Feed App',
    "Introducing my newest creation: a News Feed App powered by Flutter, delivering a personalized and dynamic news experience. Stay informed and engaged with the latest headlines, articles, and updates tailored to your interests. Explore a diverse range of topics and sources, all within a sleek and intuitive interface designed for seamless browsing and discovery.",
    'assets/images/News-App-Poster.png',
  ),
  Project(
    'Restaurant App',
    "Introducing my latest project: a Restaurant App revolutionized with Flutter, offering a delightful dining experience at your fingertips. Explore a curated selection of restaurants, browse menus, and make reservations effortlessly. With intuitive navigation and vibrant visuals, discover new culinary delights and plan your next dining adventure with ease.",
    'assets/images/Restaurant-App-Poster.png',
  ),
  Project(
    'Salon App',
    "Presenting my latest creation: a Salon Service Booking App re-imagined with Flutter, bringing convenience and style to your beauty routine. Browse a variety of services, from haircuts to spa treatments, and book appointments seamlessly. With an intuitive interface and real-time availability, scheduling your next salon visit has never been easier. Experience the ultimate in beauty and relaxation with this innovative Flutter Salon Service Booking App.",
    'assets/images/Salon-App-Poster.png',
  ),
];
