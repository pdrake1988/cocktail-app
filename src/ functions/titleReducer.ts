export default function titleReducer(title: string, action: string) {
  switch (action) {
    case "popular":
      title = "Showing Popular Cocktails";
      break;
    case "latest":
      title = "Showing Latest Cocktails";
      break;
    case "random":
      title = "Showing Random Cocktails";
      break;
    case "search by name":
      title = "Showing Cocktails by Name";
      break;
    case "search by first letter":
      title = "Showing Cocktails by First Letter";
      break;
    case "search by ingredient":
      title = "Showing Cocktails by Ingredient";
      break;
    default:
      title = "Showing Popular Cocktails";
      break;
  }
  return title;
}
