import * as React from 'react';
import { useDispatch } from 'react-redux';
import { changeProductListCurrentPage } from 'actions/productListAction';
import { PaginationProp } from 'components/Pagination/PaginationProp';

function Pagination({
    currentPage,
    range,
}: PaginationProp): React.ReactElement {
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
        <div className="container">
            <button
                disabled={currentPage <= 1}
                onClick={() =>
                    dispatch(changeProductListCurrentPage(currentPage - 1))
                }
            >
                {'<'}
            </button>
            {pattern.map((label) => (
                <button
                    className={currentPage === label ? 'active' : ''}
                    onClick={() =>
                        dispatch(changeProductListCurrentPage(label))
                    }
                >
                    {label}
                </button>
            ))}
            <button
                disabled={currentPage >= range}
                onClick={() =>
                    dispatch(changeProductListCurrentPage(currentPage + 1))
                }
            >
                {'>'}
            </button>
        </div>
    );
}

export default Pagination;
