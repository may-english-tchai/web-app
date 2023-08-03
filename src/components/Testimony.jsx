import { useEffect, useState } from "react";
import { graphql } from "../store/http";
import "../assets/styles/testimony.scss";
import Title from "./elements/Title";
import Card from "./testimony/Card";
import Form from "./testimony/Form";
import { toast } from "react-hot-toast";

const Testimony = () => {
	const [testimonyData, setTestimonyData] = useState([]);

	const fetchTestimonies = () => {
		graphql({
			query: `{
        testimonies(last: 5) {
          edges {
            node {
              id name createdAt subject content
            }
          }
        }
      }`,
		})
			.then((response) => {
				const testimonies = response.data.data.testimonies.edges.map(
					(edge) => edge.node,
				);
				setTestimonyData(testimonies);
			})
			.catch((error) => {
				toast.error(`Une erreur est survenue : ${error.message}`);
			});
	};

	useEffect(() => {
		fetchTestimonies();
	}, []);

	return (
		<div id="testimony-section">
			<Title text="Temoignage" textColor="#FD6C9E" hrColor="#FD6C9E" />

			<div id="testimony-container">
				<div>
					<div>
						<img
							src="img/guillemet2.svg"
							alt="Testimony"
							className="w-20 h-40 sm:w-20 sm:h-20"
						/>
					</div>
					<ul>
						<li>
							{testimonyData.map((testimony) => (
								<Card testimony={testimony} key={testimony.id} />
							))}
						</li>
					</ul>
					<div className="flex justify-end">
						<img
							src="img/guillemet2.svg"
							alt="Testimony"
							className="w-20 h-40 sm:w-20 sm:h-20 transform rotate-180"
						/>
					</div>
				</div>

				<Form />
			</div>
		</div>
	);
};

export default Testimony;
