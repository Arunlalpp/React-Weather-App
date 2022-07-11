import React, { useState } from "react";
import data from "../data";

const CARD_FIRST_ROW_COUNT = 4;

export default function CardTitle() {
	const [shouldShowMoreButton, setShowMoreButton] = useState(
		data.length > CARD_FIRST_ROW_COUNT
	);

	const loadMoreData = (
		<>
			<div className="md:grid lg:grid-cols-4 gap-12 mt-8 grid grid-cols-2 ">
				{data.map((item, i) => {
					return (
						i > 4 && (
							<>
								<div>
									<div>
										<img
											className="rounded-lg md:h-[15vh]"
											src={item.image}
											alt=""
										/>
									</div>
									<div className="mt-3">
										<p className="md:text-[14px] text-[15px] leading-[1.2] hover:text-blue-500 cursor-pointer">
											{item.title}
										</p>
									</div>
								</div>
							</>
						)
					);
				})}
			</div>
			{!shouldShowMoreButton && (
				<button
					className=" inline-block mt-6 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					onClick={() => {
						setShowMoreButton(true);
					}}
				>
					Show Less
				</button>
			)}
		</>
	);

	return (
		<div className="bg-white lg:w-[52%] lg:ml-[12.5%] w-9xl ml-[3.3%] rounded-b-lg">
			<div className="p-4 ">
				<div className="md:grid grid-cols-4 md:gap-12 flex flex-row gap-2 overflow-auto overflow-y-hidden scrollbar-hide scroll-smooth">
					{data.map((item, i) => {
						return (
							i < 4 && (
								<div className="md:min-w-[0] min-w-[40vw]">
									<div>
										<img
											className="rounded-lg md:h-[15vh] w-[100%]"
											src={item.image}
											alt=""
										/>
									</div>
									<div className="mt-3 hover:text-blue-500 cursor-pointer md:text-[14px] text-[15px] leading-[1.2]  ">
										<p>{item.title}</p>
									</div>
								</div>
							)
						);
					})}
				</div>
				{shouldShowMoreButton && (
					<button
						className=" inline-block mt-6 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						onClick={() => {
							setShowMoreButton(false);
						}}
					>
						Show More
					</button>
				)}
				{!shouldShowMoreButton &&
					data.length > CARD_FIRST_ROW_COUNT &&
					loadMoreData}
			</div>
		</div>
	);
}
