// Packages
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Sections
import {FactsSection} from "./components/sections/factsSection/FactsSection";
import {AboutSection} from "./components/sections/aboutSection/AboutSection";
import {HeroSection} from "./components/sections/heroSection/HeroSection";
import {ProductSection} from "./components/sections/productSection/ProductSection";
import {ServicesSection} from "./components/sections/servicesSection/ServicesSection";
import {TeamSection} from "./components/sections/teamSection/TeamSection";
// Core
import {Modal} from "./components/core/Modal";
// Styling
import './index.css';
import './bootstrap.min.css';
// Assets
import aboutImage from './img/about.jpg'
import {OfferSection} from "./components/sections/offerSection/OfferSection";
import {TestimonialSection} from "./components/sections/testimonialSection/TestimonialSection";
import {FooterSection} from "./components/sections/footerSection/FooterSection";

function App() {
    return (
      <>
        <HelmetProvider>
            <Helmet>
                {/* Google Web Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Oswald:wght@500;600;700&family=Pacifico&display=swap"
                    rel="stylesheet"
                />
                {/* Icon Font Stylesheet */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
                <link href="./lib/owlcarousel/assets/owl.carousel.min.css" />
                {/* JavaScript Libraries */}
                <script src="https://code.jquery.com/jquery-3.4.1.min.js" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
                <script src="./lib/easing/easing.min.js" />
                <script src="./lib/waypoints/waypoints.min.js" />
                <script src="./lib/counterup/counterup.min.js" />
                <script src="./lib/owlcarousel/owl.carousel.min.js" />
                <script src="./lib/lib.js" />
            </Helmet>
        </HelmetProvider>

        <HeroSection
            orangeHeading="Super Crispy"
            mainHeading="CakeZone"
            subHeading="The Best Cake In London"
            readMoreLabel="Read More"
        />

        <Modal fade heading="YouTube Video" modalId="videoModal">
            <iframe
                title="youtube video"
                className="embed-responsive-item" src="" id="video" allowFullScreen
                allow="autoplay" />
        </Modal>

        <AboutSection
            heading="About Us"
            mainHeading="Welcome To CakeZone"
            excerpt="Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet
            labore lorem sit clita duo"
            description="Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit.
                            Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                            tempor eirmod magna dolore erat amet magna"
            cardInfo={[{
                icon: "fa fa-heartbeat fa-2x",
                heading: "100% Healthy",
                description: "Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero"
            },{
                icon: "fa fa-award fa-2x",
                heading: "Award Winning",
                description: "Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero"
            }]}
            aboutImage={aboutImage}
        />

        <FactsSection />

        <ProductSection
            subHeading="Menu & Pricing"
            mainHeading="Explore Our Cakes"
            categories={[{
                name: "Birthday",
                isActive: true,
                tabNumber: 1,
            }, {
                name: "Wedding",
                isActive: false,
                tabNumber: 2,
            }, {
                name: "Custom",
                isActive: false,
                tabNumber: 3,
            }]}
            products={[{
                name: "Biscuit Cake",
                price: "$99.00",
                imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Birthday_cake_%288973445388%29_%28cropped%29.jpg/220px-Birthday_cake_%288973445388%29_%28cropped%29.jpg",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
                category: "birthday",
            }, {
                name: "Mocha Cake",
                price: "$50.00",
                imgSrc: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
                category: "birthday",
            }, {
                name: "Strawberry Cake",
                price: "$75.00",
                imgSrc: "https://hips.hearstapps.com/hmg-prod/images/wdy050121lifeoftheparty-003-1621611282.jpeg",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
                category: "birthday",
            }, {
                name: "Chocolate Cake",
                price: "$100.00",
                imgSrc: "https://assets.epicurious.com/photos/5940644fe5fb577a90d32fe8/16:9/w_2580,c_limit/CALSSIC-YELLOW-CAKE-with-chocolate-frosting-09062017.jpg",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
                category: "birthday",
            }, {
                name: "3 layers White Cake",
                price: "$250.00",
                imgSrc: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
                category: "wedding",
            }, {
                name: "4 layers Cream Cake",
                price: "$375.00",
                imgSrc: "https://www.brides.com/thmb/u5XzTVEfuemJ0fIFipSXGfbhZ6A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/afklj-6648b43fd16546f5a016d5c92fa3f161.png",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
                category: "wedding",
            }, {
                name: "3 layers Roses Cake",
                price: "$400.00",
                imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wedding_cake_with_pillar_supports%2C_2009.jpg",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
                category: "wedding",
            }, {
                name: "Roblox Cake",
                price: "$150.00",
                imgSrc: "https://cdn.shopify.com/s/files/1/1175/4972/products/roblox-cake-133-664140_1200x1200.jpg?v=1659342918",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
                category: "custom",
            }, {
                name: "Starbucks Caramel Cake",
                price: "$785.00",
                imgSrc: "https://hollandcakery.com/wp-content/uploads/2022/01/Starbucks-Caramel-Birthday-Cake.jpg",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
                category: "custom",
            }]}
        />

        <ServicesSection
            services={[{
                name: "Birthday Cake",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum",
                link: "/",
            }, {
                name: "Wedding Cake",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum",
                link: "/",
            }, {
                name: "Custom Cake",
                description: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum",
                link: "/",
            }]}
            ctaHeading="30% Discount For This Summer"
            ctaLabel="Order Now"
            ctaLink="#"
        />

        <TeamSection
          subHeading="Team Members"
          mainHeading="Our Master Chefs"
          teams={[{
              fullName: 'Full name',
              designation: 'Designation',
              imgSrc: 'https://st.depositphotos.com/1075946/4133/i/600/depositphotos_41331473-stock-photo-pastry-chef-showing-desserts.jpg',
              socials: {
                  twitter: 'https://twitter.com/',
                  facebook: 'https://www.facebook.com/',
                  linkedin: 'https://www.linkedin.com/',
              }
          }, {
              fullName: 'Full name',
              designation: 'Designation',
              imgSrc: 'https://media.istockphoto.com/id/1019251738/photo/a-confectioner-with-dessert-in-his-hands.jpg?s=612x612&w=0&k=20&c=dWlGmqy9QyIl7LspopPkgxsF__DIv-teRl6fQuSPlCs=',
              socials: {
                  twitter: 'https://twitter.com/',
                  facebook: 'https://www.facebook.com/',
                  linkedin: 'https://www.linkedin.com/',
              }
          }, {
              fullName: 'Full name',
              designation: 'Designation',
              imgSrc: 'https://media.istockphoto.com/id/624925522/photo/portrait-of-female-confectioner-topping-a-cupcake-with-cream.jpg?s=612x612&w=0&k=20&c=SmdY5AD18vW8qzd-4b7vMgTAEQFde059ida9LX17GT0=',
              socials: {
                  twitter: 'https://twitter.com/',
                  facebook: 'https://www.facebook.com/',
                  linkedin: 'https://www.linkedin.com/',
              }
          }]}
        />

        <OfferSection
            subHeading="Special Kombo Pack"
            mainHeading="Super Crispy Cakes"
            description="Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et."
            ctaLabel="Shop Now"
            ctaLink="/"
            readMore="Read More"
            readMoreLink="/"
        />

        <TestimonialSection
            testimonials={[{
                imgSrc: 'https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png',
                name: 'Client Name',
                profession: 'Profession',
                message: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
            }, {
                imgSrc: 'https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png',
                name: 'Client Name',
                profession: 'Profession',
                message: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
            }, {
                imgSrc: 'https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png',
                name: 'Client Name',
                profession: 'Profession',
                message: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
            }, {
                imgSrc: 'https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png',
                name: 'Client Name',
                profession: 'Profession',
                message: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
            }]}
        />

        <FooterSection />
      </>
    );
}

export default App;
