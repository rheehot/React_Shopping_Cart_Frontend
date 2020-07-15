import * as React from 'react';
import styled from 'styled-components';
import { ProductItemType } from './ProductType';
import { AiFillHeart } from 'react-icons/ai';
import { RiCoupon2Line } from 'react-icons/ri';

const ProductItemContainer = styled.li`
    display: inline-flex;
    width: 30%;
    height: auto;
    flex-direction: column;
    margin: 15px;
    cursor: pointer;
    overflow: hidden;
`;

const ProductImageContainer = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 10px;
    overflow: hidden;

    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.2s ease;
`;

const ProductDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ProductTitle = styled.h2`
    font-size: 14px;
    margin: 10px 0 5px 0;
`;

const ProductScore = styled.div`
    font-size: 11px;
    margin: 0px 8px 0px 0px;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
`;

const ProductScoreIcon = styled(AiFillHeart)`
    height: 12px;
    margin-right: 2px;
    fill: rgb(133, 138, 141);
`;

const ProductScoreText = styled.span`
    color: rgb(133, 138, 141);
`;

type ProductPriceType = {
    availableCoupon: boolean;
    color: string;
};

const ProductPriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductPrice = styled.div<ProductPriceType>`
    display: inline-flex;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.15px;
    color: ${(props) => props.color};
    font-weight: bold;
    text-decoration: ${(props) =>
        props.availableCoupon ? 'line-through' : 'none'};
`;

const CouponIcon = styled(RiCoupon2Line)`
    fill: red;
    height: 14px;
    margin-left: 6px;
    margin-right: 2px;
`;

const Divisor = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid rgb(242, 244, 245);
`;

function ProductItem({
    id,
    title,
    coverImage,
    price,
    score,
    availableCoupon = true,
}: ProductItemType): React.ReactElement {
    return (
        <ProductItemContainer>
            <ProductImageContainer>
                <ProductImage src={coverImage} />
            </ProductImageContainer>
            <ProductDetailContainer>
                <ProductTitle>{title}</ProductTitle>
                <ProductScore>
                    <ProductScoreIcon />
                    <ProductScoreText>{score}</ProductScoreText>
                </ProductScore>
                <Divisor />
                <ProductPriceContainer>
                    <ProductPrice
                        availableCoupon={availableCoupon}
                        color="rgb(27, 28, 29)"
                    >
                        {price}원
                    </ProductPrice>
                    {availableCoupon && (
                        <>
                            <CouponIcon />
                            <ProductPrice availableCoupon={false} color="red">
                                쿠폰 적용 가능
                            </ProductPrice>
                        </>
                    )}
                </ProductPriceContainer>
            </ProductDetailContainer>
        </ProductItemContainer>
    );
}

export default ProductItem;
