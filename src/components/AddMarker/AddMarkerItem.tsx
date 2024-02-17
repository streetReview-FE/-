import {
    AddMarkerItemContent,
    AddMarkerItemTitle,
    AddMarkerItemWrapper,
} from "./stlyeAddMarkerItem";

interface AddMarkerItemProp {
  // id: number;
  streetName: string;
  streetAddress: string;
  reviewCount: number;
  likey: number;
}
const AddMarkerItem: React.FC<AddMarkerItemProp> = ({
  streetName,
  streetAddress,
  reviewCount,
  likey,
}) => {
  return (
    <AddMarkerItemWrapper>
      <AddMarkerItemTitle>{streetName}</AddMarkerItemTitle>
      <br />
      <AddMarkerItemContent>주소 : {streetAddress}</AddMarkerItemContent>
      <AddMarkerItemContent>리뷰수 : {reviewCount}</AddMarkerItemContent>
      <AddMarkerItemContent>좋아요 수 : {likey}</AddMarkerItemContent>
    </AddMarkerItemWrapper>
  );
};
export default AddMarkerItem;
