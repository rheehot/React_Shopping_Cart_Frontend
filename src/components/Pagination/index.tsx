import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeProductListCurrentPage } from 'actions/productListAction';
import {
    PaginationProps,
    PaginationButtonProps,
} from 'components/Pagination/PaginationProps';

const PaginationContainer = styled.div`
    position: absolute;
    bottom: 5%;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PaginationButton = styled.button<PaginationButtonProps>`
    height: 100%;
    width: 40px;
    margin: 0 5px;
    color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
    background-color: ${(props) =>
        props.isActive ? 'rgba(0, 0, 0, 0.7)' : '#f2f2f2'};
    visibility: ${(props) =>
        props.isFirst || props.isLast ? 'hidden' : 'visible'};
    border: none;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;

    &:focus {
        outline: none;
    }
`;

function Pagination({
    currentPage,
    range,
}: PaginationProps): React.ReactElement {
    const dispatch = useDispatch();
    let pattern = null;

    switch (true) {
        case range < 7:
            pattern = [...new Array(range)].map((_, i) => i + 1);
            break;
        case currentPage < 4:
            pattern = [1, 2, 3, 4, 5, '...', range];
            break;
        case currentPage > range - 4:
            pattern = [
                1,
                '...',
                range - 4,
                range - 3,
                range - 2,
                range - 1,
                range,
            ];
            break;
        default:
            pattern = [
                1,
                '...',
                currentPage - 1,
                currentPage,
                currentPage + 1,
                '...',
                range,
            ];
    }

    return (
        range !== 0 && (
            <PaginationContainer>
                <PaginationButton
                    disabled={currentPage <= 1}
                    onClick={() =>
                        dispatch(changeProductListCurrentPage(currentPage - 1))
                    }
                    isActive={false}
                    isFirst={currentPage === 1}
                    isLast={false}
                >
                    {'<'}
                </PaginationButton>
                {pattern.map((label) => (
                    <PaginationButton
                        key={label}
                        disabled={label === '...'}
                        onClick={() =>
                            dispatch(changeProductListCurrentPage(label))
                        }
                        isActive={currentPage === label}
                        isFirst={false}
                        isLast={false}
                    >
                        {label}
                    </PaginationButton>
                ))}
                <PaginationButton
                    disabled={currentPage >= range}
                    onClick={() =>
                        dispatch(changeProductListCurrentPage(currentPage + 1))
                    }
                    isActive={false}
                    isFirst={false}
                    isLast={currentPage === range}
                >
                    {'>'}
                </PaginationButton>
            </PaginationContainer>
        )
    );
}

export default Pagination;
