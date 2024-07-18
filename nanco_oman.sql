-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2024 at 06:14 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
(2, 'Integrated Facilities', 'https://res.cloudinary.com/devlj6p7h/image/upload/v1720981922/test/vme2u6nfm371girkmiyz.png'),
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
(1, 'http://omanshapoorji.com/wp-content/uploads/2016/05/clients-final2.jpg', 'Royal Oman Pollice', NULL),
(2, 'http://omanshapoorji.com/wp-content/uploads/2016/05/clients-final2.jpg', 'National Bank of Oman', NULL),
(3, 'http://omanshapoorji.com/wp-content/uploads/2016/05/clients-final2.jpg', 'Ministry of Health', NULL);

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
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `directors`
--

INSERT INTO `directors` (`id`, `image`, `message`, `position`, `phone`, `email`, `name`) VALUES
(1, 'http://omanshapoorji.com/wp-content/uploads/2016/05/MD-Saini.jpg', 'Shapoorji Pallonji has had the privilege to play a significant role in the growth of not only Mumbai and India, but also several parts of the globe. We pride the fact that our first overseas project was in OMAN, when, in 1971, we became the first Indian construction house to undertake contracts in the Middle East. Shapoorji Pallonji won a global tender to build the palace of HM Sultan Qaboos Bin Said Al Said- in Muscat.\r\n\r\nGoing forward Oman Shapoorji Company (OSCO) won a project in 1975- a nine-storey apartment blocks in Ruwi for HE Sheikh Mustahail Al Mashani. Since then OSCO went on constructing many landmark structures. OSCO has been at the forefront of Oman’s economic renaissance. Today, OSCO has four divisions’ Engineering & Construction, Integrated Facilities Management, MEPI and Infrastructure.\r\n\r\nOver the years, OSCO’s diverse portfolio has included projects for government ministries, educational institutions, public and private housing complexes, hotels and resorts, monuments, mosques, shopping malls and many more. A significant portfolio of OSCO is facility management for Sultan’s Palace and its associated properties in Muscat, Barakah, and Salalah, including the Royal Opera House and Majlis Oman. Developing remote locations has been the hallmark of OSCO. In 1995, it won a contract to build an army post for the ministry of defense near the Yemen border which was executed to the total satisfaction of our clients.\r\n\r\nToday the Shapoorji Pallonji Group stands tall by offering ‘Total Solutions’ in key areas of the economy such as construction and engineering, infrastructure, real estate, water, oil and gas and renewables, amongst several other businesses.\r\n\r\nShapoorji Pallonji has always worked on customer focused solutions based on sustainable business practices and technological leadership, leveraging its capabilities through synergized Group offerings.\r\n\r\nAt Shapoorji Pallonji we stand for all that is good for all the stake holder of its work. We will continue to contribute to Oman in its growth.', 'Chairman', '01565656568', 'xyz@gmail.com', 'Md. Tazri Ullah'),
(2, 'http://omanshapoorji.com/wp-content/uploads/2023/08/KMR-WEBSITE-2.jpg', 'Since then, OSCO has constructed some of the finest landmarks in Muscat. At OSCO, we believe that our businesses must touch the lives of people meaningfully. We have been serving as a trusted construction and facility management partner of the region for over four decades now. As a part of Shapoorji Pallonji Group which has a rich legacy of over 150 years, we have evolved as a multidimensional and diversified global business entity.\r\n\r\nOur success is founded on a very simple philosophy “We put our best in honoring our commitment to all our stakeholders”. I look forward to build further on our areas of expertise to continue serving our customers and welcome you to be a part of our journey!', 'Director', '01565656568', 'xyz@gmail.com', 'Md. Sharif');

-- --------------------------------------------------------

--
-- Table structure for table `peoples`
--

CREATE TABLE `peoples` (
  `id` int(11) NOT NULL,
  `position` text NOT NULL,
  `name` text NOT NULL,
  `is_most_valuable` tinyint(1) DEFAULT 0,
  `image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peoples`
--

INSERT INTO `peoples` (`id`, `position`, `name`, `is_most_valuable`, `image`) VALUES
(1, 'Project Manager', 'Rabbi', 0, NULL),
(2, 'Project Manager', 'Shafin', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(64) NOT NULL,
  `name` text NOT NULL,
  `project_type_id` int(11) NOT NULL,
  `details` text NOT NULL,
  `start_date` date NOT NULL DEFAULT curdate(),
  `end_date` date NOT NULL DEFAULT curdate(),
  `location` text NOT NULL,
  `project_manager` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `is_best_projects` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `project_type_id`, `details`, `start_date`, `end_date`, `location`, `project_manager`, `category_id`, `is_best_projects`) VALUES
(1, 'Office Construction', 1, 'Lorem ipsum dolor sit amet consectetur. Erat orci libero maecenas sem etiam tempor imperdiet venenatis posuere. Vitae morbi posuere neque imperdie scelerisque. Ultrices sed cum diam orci netus urna sed. Eget vel et arcu platea. Cursus vitae eget enim quis sed ut. Ut mauris pellentesque dui dictum. Aliquam velit sapien aliquam in liber. Aenean erat lectus mattis elit. Gravida aenean suspendisse pellent esque nisl in enim nec neque. Sit ut velit at urna facilisis orci nunc. Erat leo accumsan nulla sapien facilisi nullam. Et feugiat id turpis nisi. Diam varius sed tincidunt amet netus nibh eget facilisis nunc. Senec tus sollicitudin et est id amet. Non duis congue mauris vitae magna neque arcu maecenas. Commodo sit mauris sed risus. Mauris partu rient volu tpat viverra magna congue elit est urna. Risus nisi neque in sem. Risus in neque vel nullam fames. Aliquet cursus feugiat dictumst sit. Vitae aliquam in sed nunc velit quis mattis duis convallis. Lobortis enim vel vulputate dolor.', '2023-06-15', '2024-07-15', '203 Madison Ave, New York, USA', 1, 1, 1),
(2, 'House Construction', 1, 'Lorem ipsum dolor sit amet consectetur. Erat orci libero maecenas sem etiam tempor imperdiet venenatis posuere. Vitae morbi posuere neque imperdie scelerisque. Ultrices sed cum diam orci netus urna sed. Eget vel et arcu platea. Cursus vitae eget enim quis sed ut. Ut mauris pellentesque dui dictum. Aliquam velit sapien aliquam in liber. Aenean erat lectus mattis elit. Gravida aenean suspendisse pellent esque nisl in enim nec neque. Sit ut velit at urna facilisis orci nunc. Erat leo accumsan nulla sapien facilisi nullam.', '2023-08-01', '2024-07-15', '203 Madison Ave, Oman', 2, 2, 1),
(3, 'Room Construction', 2, 'Vitae morbi posuere neque imperdie scelerisque. Ultrices sed cum diam orci netus urna sed. Eget vel et arcu platea. Cursus vitae eget enim quis sed ut. Ut mauris pellentesque dui dictum. Aliquam velit sapien aliquam in liber. Aenean erat lectus mattis elit. Gravida aenean suspendisse pellent esque nisl in enim nec neque. Sit ut velit at urna facilisis orci nunc. Erat leo accumsan nulla sapien facilisi nullam.', '2023-11-01', '2024-07-15', '203 Madison Ave, Oman', 1, 1, 1);

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
(1, 1, 'https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p-1-slide-1.webp'),
(2, 1, 'https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p-1-slide-2.webp'),
(3, 2, 'https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p1-img-5.webp'),
(4, 3, 'https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p-1-slide-1.webp');

-- --------------------------------------------------------

--
-- Table structure for table `project_types`
--

CREATE TABLE `project_types` (
  `id` int(11) NOT NULL,
  `service_name` text NOT NULL,
  `icon` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_types`
--

INSERT INTO `project_types` (`id`, `service_name`, `icon`) VALUES
(1, 'Commercial', NULL),
(2, 'Hospitality', NULL),
(3, 'Residential', NULL),
(4, 'Cultural', NULL),
(5, 'Retail', NULL),
(6, 'Offices', NULL),
(7, 'Cultural and Community', NULL),
(8, 'INFRASTRUCTURE', NULL);

--
-- Indexes for dumped tables
--

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
-- Indexes for table `directors`
--
ALTER TABLE `directors`
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
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `directors`
--
ALTER TABLE `directors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `peoples`
--
ALTER TABLE `peoples`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `project_types`
--
ALTER TABLE `project_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
