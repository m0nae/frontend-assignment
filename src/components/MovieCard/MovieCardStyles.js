import styled from "styled-components";

export const Container = styled.div`
  height: 348px;
  width: 282px;
  background-color: white;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e3e6;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: all 0.2s ease-in-out;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  background-color: gray;
  height: 84%;
  width: 100%;
  overflow: hidden;
`;

export const Title = styled.p`
  text-align: center;
  padding: 0 1rem;
  margin: 0;
  margin-top: 7px;
`;

export const Rating = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #000;
  height: 34px;
  width: 34px;
  padding: 3px;
  text-align: center;
  vertical-align: middle;
  line-height: 2;
  left: 13px;
  top: 14px;
  font-weight: 600;
`;

export const Image = styled.img`
  position: absolute;
  top: -60px;
  object-fit: cover;
  width: 100%;
`;
