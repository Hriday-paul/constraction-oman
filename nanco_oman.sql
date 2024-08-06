-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2024 at 07:32 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nanco_oman`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `user_name`, `email`, `password`) VALUES
(1, 'ami admin', 'hridoychandrapaul.10@gmail.com', '$2b$11$SUo./kiF.tVl6Y1FA/2cNuFCbu7PuJrmdg1EvPI.GhzH5dd8pGnLi');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `type_name` text NOT NULL,
  `icon_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `type_name`, `icon_image`) VALUES
(1, 'Engineering & Construction', 'https://res.cloudinary.com/devlj6p7h/image/upload/v1720981922/test/vme2u6nfm371girkmiyz.png'),
(2, 'Water proof & Flooring facilities', 'https://res.cloudinary.com/devlj6p7h/image/upload/v1720981922/test/vme2u6nfm371girkmiyz.png'),
(3, 'MEPI', 'https://res.cloudinary.com/devlj6p7h/image/upload/v1720981922/test/vme2u6nfm371girkmiyz.png');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `image` text NOT NULL,
  `name` text DEFAULT NULL,
  `website_url` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `image`, `name`, `website_url`) VALUES
(1, 'https://elitecons.vercel.app/assets/images/brand/brand-1-2.png', 'Royal Oman Pollice', NULL),
(2, 'https://elitecons.vercel.app/assets/images/brand/brand-1-3.png', 'National Bank of Oman', 'https://hriday-paul.github.io'),
(3, 'https://elitecons.vercel.app/assets/images/brand/brand-1-4.png', 'Ministry of Health', ''),
(4, 'https://elitecons.vercel.app/assets/images/brand/brand-1-5.png', 'Gasoline', 'https://hriday-paul.github.io'),
(5, 'https://elitecons.vercel.app/assets/images/brand/brand-1-1.png', 'Consumable', NULL),
(8, '/clients/1722533342788-brand-1-2.png', 'Hriday client', 'https://hriday-paul.github.io');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `country` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `lat` float NOT NULL,
  `longi` float NOT NULL,
  `post_code` int(11) DEFAULT NULL,
  `toll_free` varchar(10) DEFAULT NULL,
  `telephone` varchar(200) DEFAULT NULL,
  `fax` varchar(10) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `head_office` varchar(200) DEFAULT NULL,
  `company` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `country`, `address`, `lat`, `longi`, `post_code`, `toll_free`, `telephone`, `fax`, `email`, `head_office`, `company`) VALUES
(1, 'Oman', 'P.O.Box : 100', 23.5827, 58.5413, 311, '800 8 0101', '78312911, 78556674', '78556674', 'nanccooman@gmail.com', 'Hamriyah, Muscat', 'mshary abw qasm almmyzt L.L.C');

-- --------------------------------------------------------

--
-- Table structure for table `directors`
--

CREATE TABLE `directors` (
  `id` int(11) NOT NULL,
  `image` text NOT NULL,
  `message` text NOT NULL,
  `position` text NOT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `name` text NOT NULL,
  `facebook` text DEFAULT '#',
  `instagram` text DEFAULT '#',
  `linkedin` text DEFAULT '#'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `directors`
--

INSERT INTO `directors` (`id`, `image`, `message`, `position`, `phone`, `email`, `name`, `facebook`, `instagram`, `linkedin`) VALUES
(1, '/peoples/1722454033284-1722442316263-md1.jpg', 'Shapoorji Pallonji has had the privilege to play a significant role in the growth of not only Mumbai and India, but also several parts of the globe. We pride the fact that our first overseas project was in OMAN, when, in 1971, we became the first Indian construction house to undertake contracts in the Middle East. Shapoorji Pallonji won a global tender to build the palace of HM Sultan Qaboos Bin Said Al Said- in Muscat.\r\n\r\nGoing forward Oman Shapoorji Company (OSCO) won a project in 1975- a nine-storey apartment blocks in Ruwi for HE Sheikh Mustahail Al Mashani. Since then OSCO went on constructing many landmark structures. OSCO has been at the forefront of Oman’s economic renaissance. Today, OSCO has four divisions’ Engineering & Construction, Integrated Facilities Management, MEPI and Infrastructure.\r\n\r\n', 'Chairman', '01892814892', 'hridoychandrapaul.10@gmail.com', 'Hriday paul', 'Hriday paul', '', 'https://www.linkedin.com/in/hriday-paul-65aabb272/'),
(2, '/peoples/1722454033284-1722442316263-md1.jpg', 'Our journey as NANCO started on 10th January 2022. Although our beginning is not long. But we have many days of experience in the construction sector. We have been in this business for a long time and we have been faithful to the quality of work with our streakholders. We believe in equal benefits with our stakeholders. Under no circumstances are we willing to compromise the quality of our work. Nanco is always committed to the quality of work. That\'s why every one of our employees can proudly say that Nanco is a shining star in the world of construction', 'Managing director', '01565656568', 'xyz@gmail.com', 'Hriday paul', 'Hriday paul', '', 'https://www.linkedin.com/in/hriday-paul-65aabb272/');

-- --------------------------------------------------------

--
-- Table structure for table `draft_images`
--

CREATE TABLE `draft_images` (
  `id` int(11) NOT NULL,
  `image` text NOT NULL,
  `created` date DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `message` text NOT NULL,
  `company` text DEFAULT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `isNew` tinyint(1) DEFAULT 0,
  `reply_msg` text DEFAULT NULL,
  `reply_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `phone`, `message`, `company`, `date_time`, `isNew`, `reply_msg`, `reply_date`) VALUES
(8, 'Anup saha 3', 'anup3@gmail.com', '015454544542', 'We are the world class engineering manufacturer providing the highest quality products, services and solutions to our customers.', 'bdtask3', '2024-08-03 17:15:25', 0, 'Node Package Manager (npm) is a javascript runtime environment for web pages. It dynamically imports all the environmental requirements for hosting your website locally. Meanwhile, while working on your web projects, there\'s a pile of cache that is generated for the frequently used elements, and this cache is needed to be cleared since it may hamper your backend performance to a great extend. Therefore, npm offers a clear cache feature to solve this issue.\n\nAdditionally, all the npm data is passed for fully verified integrity on extraction and insertion and this will trigger the cache corruption error and signal the pacote to fetch the data automatically. Thus, you should be very sure before clearing the cache for any reason. You may rather think of reclaiming your disk space.\n\nMoreover, there are no certain methods in npm to directly manage the cache contents or inspect them. To access these cache contents cacache should be directly used because npm is not responsible for directly removing the data itself as the cache grows when more packages are installed.', '2024-08-05 09:13:05');

-- --------------------------------------------------------

--
-- Table structure for table `peoples`
--

CREATE TABLE `peoples` (
  `id` int(11) NOT NULL,
  `position` text NOT NULL,
  `name` text NOT NULL,
  `is_most_valuable` tinyint(1) DEFAULT 0,
  `image` text DEFAULT '#',
  `facebook` text DEFAULT NULL,
  `instagram` text DEFAULT NULL,
  `linkedin` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peoples`
--

INSERT INTO `peoples` (`id`, `position`, `name`, `is_most_valuable`, `image`, `facebook`, `instagram`, `linkedin`) VALUES
(1, 'Project Manager', 'Salma Begum', 0, 'https://demo2.wpopal.com/rebuilto/wp-content/uploads/2024/03/team-8.jpg', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://www.linkedin.com/'),
(2, 'Project Manager', 'Shafin', 0, 'https://construction.vamtam.com/wp-content/uploads/2014/04/people_4.jpg', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://www.linkedin.com/'),
(4, 'Mern stack developer', 'Hriday paul', 0, '/peoples/1722457262354-unnamed.jpg', 'Hriday paul', '', 'https://www.linkedin.com/in/hriday-paul-65aabb272/');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(64) NOT NULL,
  `name` text NOT NULL,
  `project_type_id` int(11) DEFAULT NULL,
  `details` text NOT NULL,
  `start_date` date NOT NULL DEFAULT curdate(),
  `end_date` date NOT NULL DEFAULT curdate(),
  `location` text NOT NULL,
  `project_manager` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `is_best_projects` tinyint(1) NOT NULL DEFAULT 0,
  `budget` float NOT NULL DEFAULT 0,
  `client_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `project_type_id`, `details`, `start_date`, `end_date`, `location`, `project_manager`, `category_id`, `is_best_projects`, `budget`, `client_id`) VALUES
(1, 'Office Construction', 1, 'Lorem ipsum dolor sit amet consectetur. Erat orci libero maecenas sem etiam tempor imperdiet venenatis posuere. Vitae morbi posuere neque imperdie scelerisque. Ultrices sed cum diam orci netus urna sed. Eget vel et arcu platea. Cursus vitae eget enim quis sed ut. Ut mauris pellentesque dui dictum. Aliquam velit sapien aliquam in liber. Aenean erat lectus mattis elit. Gravida aenean suspendisse pellent esque nisl in enim nec neque. Sit ut velit at urna facilisis orci nunc. Erat leo accumsan nulla sapien facilisi nullam. Et feugiat id turpis nisi. Diam varius sed tincidunt amet netus nibh eget facilisis nunc. Senec tus sollicitudin et est id amet. Non duis congue mauris vitae magna neque arcu maecenas. Commodo sit mauris sed risus. Mauris partu rient volu tpat viverra magna congue elit est urna. Risus nisi neque in sem. Risus in neque vel nullam fames. Aliquet cursus feugiat dictumst sit. Vitae aliquam in sed nunc velit quis mattis duis convallis. Lobortis enim vel vulputate dolor.', '2023-06-14', '2024-07-14', '203 Madison Ave, New York, USA', 1, 1, 1, 70000, 1),
(2, 'House Construction', 1, 'Lorem ipsum dolor sit amet consectetur. Erat orci libero maecenas sem etiam tempor imperdiet venenatis posuere. Vitae morbi posuere neque imperdie scelerisque. Ultrices sed cum diam orci netus urna sed. Eget vel et arcu platea. Cursus vitae eget enim quis sed ut. Ut mauris pellentesque dui dictum. Aliquam velit sapien aliquam in liber. Aenean erat lectus mattis elit. Gravida aenean suspendisse pellent esque nisl in enim nec neque. Sit ut velit at urna facilisis orci nunc. Erat leo accumsan nulla sapien facilisi nullam.', '2023-08-01', '2024-10-30', '203 Madison Ave, Oman', 2, 2, 1, 500500, 2),
(3, 'Room Construction', 2, 'Vitae morbi posuere neque imperdie scelerisque. Ultrices sed cum diam orci netus urna sed. Eget vel et arcu platea. Cursus vitae eget enim quis sed ut. Ut mauris pellentesque dui dictum. Aliquam velit sapien aliquam in liber. Aenean erat lectus mattis elit. Gravida aenean suspendisse pellent esque nisl in enim nec neque. Sit ut velit at urna facilisis orci nunc. Erat leo accumsan nulla sapien facilisi nullam.', '2023-11-01', '2023-10-10', '203 Madison Ave, Oman', 1, 1, 1, 456000, 3),
(4, 'Hammer Construction', 4, 'Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra the a\r\n.Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mentum ullamcorper viverra\r\nAliquam eros justo, posuere loborti vive rra laoreet mattirt', '2024-07-27', '2024-07-27', 'Dhaka, Bangladesh', 1, 1, 1, 120000, 2),
(5, 'Precision Craftsmen', 5, 'Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra the a\r\n.Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mentum ullamcorper viverra\r\nAliquam eros justo, posuere loborti vive rra laoreet mattirt', '2024-07-27', '2024-07-27', 'Dhaka, Bangladesh', 1, 2, 1, 120000, 2),
(6, 'BuildTech Solutions', 6, 'Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra the a\r\n.Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mentum ullamcorper viverra\r\nAliquam eros justo, posuere loborti vive rra laoreet mattirt', '2024-07-27', '2024-07-27', 'Cumilla, Bangladesh', 1, 1, 1, 500000, 2),
(7, 'Renovate Right', 7, 'Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra the a\r\n.Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mentum ullamcorper viverra\r\nAliquam eros justo, posuere loborti vive rra laoreet mattirt', '2024-07-27', '2024-07-27', 'Dhaka, Bangladesh', 1, 3, 1, 880000, 2),
(8, 'MasterCraft Construction', 3, 'Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra the a\r\n.Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mentum ullamcorper viverra\r\nAliquam eros justo, posuere loborti vive rra laoreet mattirt', '2024-07-27', '2024-07-27', 'Dhaka, Bangladesh', 1, 1, 1, 2546500, 2),
(9, 'Precision Craftsmen', 3, 'Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra the a\r\n.Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mentum ullamcorper viverra\r\nAliquam eros justo, posuere loborti vive rra laoreet mattirt', '2024-07-27', '2024-07-27', 'Cumilla, Bangladesh', 1, 2, 1, 120000, 2),
(10, 'MasterCraft Construction', 5, 'Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra the a\r\n.Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mentum ullamcorper viverra\r\nAliquam eros justo, posuere loborti vive rra laoreet mattirt', '2024-07-26', '2024-07-26', 'Dhaka, Bangladesh', 1, 1, 0, 45600000, 2),
(11, 'Renovate Right', 4, 'Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra the a\r\n.Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mentum ullamcorper viverra\r\nAliquam eros justo, posuere loborti vive rra laoreet mattirt', '2024-07-27', '2024-07-27', 'Cumilla, Oman', 1, 2, 1, 156000, 2);

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE `project_images` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_images`
--

INSERT INTO `project_images` (`id`, `project_id`, `image`) VALUES
(1, 1, '/projects/03.jpg'),
(2, 1, 'https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p-1-slide-2.webp'),
(3, 2, 'https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p1-img-5.webp'),
(4, 3, 'https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p-1-slide-1.webp'),
(5, 4, 'https://elitecons.vercel.app/assets/images/project/project-details-img-1.jpg'),
(6, 5, 'https://elitecons.vercel.app/assets/images/project/project-3-3.jpg'),
(7, 6, 'https://elitecons.vercel.app/assets/images/project/project-3-5.jpg'),
(8, 7, 'https://elitecons.vercel.app/assets/images/project/project-3-6.jpg'),
(9, 8, 'https://elitecons.vercel.app/assets/images/project/project-3-2.jpg'),
(10, 9, 'https://elitecons.vercel.app/assets/images/project/project-3-3.jpg'),
(11, 10, 'https://elitecons.vercel.app/assets/images/project/project-3-5.jpg'),
(12, 11, 'https://elitecons.vercel.app/assets/images/project/project-3-6.jpg'),
(13, 18, '/projects/1722599489062-unnamed.jpg'),
(14, 19, '/projects/1722599489062-unnamed.jpg'),
(15, 20, '/projects/1722599489062-unnamed.jpg'),
(16, 20, '/projects/1722599629767-unnamed.png'),
(17, 20, '/projects/1722599638548-brand-1-2.png');

-- --------------------------------------------------------

--
-- Table structure for table `project_types`
--

CREATE TABLE `project_types` (
  `id` int(11) NOT NULL,
  `service_name` text NOT NULL,
  `icon` text DEFAULT NULL,
  `category_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_types`
--

INSERT INTO `project_types` (`id`, `service_name`, `icon`, `category_id`) VALUES
(1, 'Commercial', '/sector/commercial-2.png', 0),
(2, 'Hospitality', '/sector/Hospitality.png', 1),
(3, 'Residential', '/sector/house.png', 1),
(4, 'HEALTHCARE', '/sector/hospitals-black.png', 1),
(5, 'LUXURY PROPERTIES', '/sector/luxury-houses-black.png', 1),
(6, 'BUSINESS CENTRE', '/sector/business-centers-1.png', 2),
(7, 'EDUCATIONAL', '/sector/educational.png', 2),
(8, 'MOSQUE', '/sector/mosque-black.png', 1),
(18, 'Aman ullah\'s', '/sector/1722579818101-unnamed.png', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `draft_images`
--
ALTER TABLE `draft_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peoples`
--
ALTER TABLE `peoples`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_images`
--
ALTER TABLE `project_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_types`
--
ALTER TABLE `project_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `directors`
--
ALTER TABLE `directors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `draft_images`
--
ALTER TABLE `draft_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `peoples`
--
ALTER TABLE `peoples`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `project_types`
--
ALTER TABLE `project_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
