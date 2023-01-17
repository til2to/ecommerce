import styled from 'styled-components';


export const Container = styled.div`
  justify-content: center;
  padding: 10px;
  margin: 0 25px 0 25px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductImg = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 1;
  margin-left: 20px;
  margin-top: 15px;
  justify-content: center;
  max-width: 480px;
`;
export const Image = styled.img`
  display: flex;
  border: 0.5px;
  widht: 400px;
  height: 400px;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5% 0 0 40px;
`;
export const Brand = styled.span`
  font-weight: 400;
  font-size: 25px;
  line-height: 27px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const Name = styled.span`
  line-height: 27px;
  width: 192;
  display: flex;
  align-items: center;
  font-weight: 250;
  font-size: 25px;
  font-style: normal;
  color: #1d1f22;
`;
export const AttributesContainer = styled.div`
  margin-top: 15px;
`;
export const AttributePrice = styled.span`
  font-weight: 700;
  margin-bottom: 10px;
`;
export const PriceInfo = styled.span`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.div`
  font-weight: 600;
  color: white;
  background-color: #5ece7b;
  height: 40px;
  width: 250px;
  display: flex;
  justify-content: center;
  border-radius: 3px;
  opacity: 0.85;
  font-size: 13px;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 10px;
  align-items: center;
`;
export const ProductDescription = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 256px;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  margin-top: 5px;
`;
export const SideImgContainer = styled.div`
  margin-left: 20px;
  margin-top: 100px;

  display: flex;
  justify-content: flex-end;
`;
export const SideWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Empty = styled.span`
  color: red;
  font-size: 18px;
  font-weight: 500px;
  flex-wrap: wrap;
`;

export const SideImage = styled.img`
  width: 130px;
  height: 90px; 
  object-fit: contain;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  cursor: pointer;
`