export default function getColor(status: string): string {
    if (status === "1") {
      return "green";
    } else if (status === "2") {
      return "yellow";
    } else if (status === "3") {
      return "red";
    } else if (status === "6") {
      return "blue";
    } else {
      return "black";
    }
  }