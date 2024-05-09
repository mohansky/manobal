// searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const categoryVariants = ["active", "leisure", "culture"];

//   const active = ["", "cycling", "trekking", "multi-activity", "overland"];
//   const leisure = ["", "comfort", "offbeat", "wildlife", "roadtrip"];
//   const culture = ["", "arunachal", "assam", "nagaland"];

//   const tours: Tours[] = allTours
//     .filter((tour) => tour.category !== "departures")
//     .sort((a, b) => a.weight! - b.weight!)
//     .filter((tour) => !tour.draft);

//   let selectedCategory = searchParams.category;
//   let selectedTag = searchParams.tag;

//   const filterByTag = (filteredData: any[]) => {
//     if (!selectedTag) {
//       return filteredData;
//     }
//     const filteredTours = filteredData.filter(
//       (tour: Tours) => tour.tags?.indexOf(`${selectedTag}`) !== -1
//     );
//     return filteredTours;
//   };
//   const filterByCategory = (filteredData: Tours[]) => {
//     if (!selectedCategory) {
//       return filteredData;
//     }
//     const filteredTours = filteredData.filter(
//       (tour: Tours) => tour.category === selectedCategory
//     );
//     return filteredTours;
//   };
//   let filteredData = filterByTag(tours);
//   filteredData = filterByCategory(filteredData);


// <div className=" text-center">
// {categoryVariants.map((item, index) => (
//   <Link
//     key={index}
//     href={`?category=${item}&tag=`}
//     scroll={false}
//     className="mr-3"
//   >
//     <Button className="capitalize">{item}</Button>
//   </Link>
// ))}
// </div> 