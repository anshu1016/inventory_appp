import {
	ADD_ITEM,
	ADD_SALE,
	DATA_LOADED,
	ERROR,
	LOADING,
	LOAD_SALE,
	REMOVE_ITEM,
	UPDATE_ITEM,
} from "./const";

const initialState = {
	items: [],
	sales: [],
	loading: false,
	error: false,
};

export const itemReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ADD_ITEM: {
			return {
				...state,
				items: [...state.items, payload],
				loading: false,
			};
		}
		case DATA_LOADED: {
			return {
				...state,
				items: payload,
				loading: false,
			};
		}
		case REMOVE_ITEM: {
			return {
				...state,
				loading: false,
				items: state.items.filter((item) => item._id !== payload),
			};
		}
		case UPDATE_ITEM: {
			return {
				...state,
				loading: false,

				items: state.items.map((item) =>
					item._id === payload._id
						? {
								...item,
								name: payload.name,
								quantity: payload.quantity,
								price: payload.price,
						  }
						: item
				),
			};
		}
		case LOAD_SALE: {
			return {
				...state,
				loading: false,

				sales: payload,
			};
		}
		case ADD_SALE: {
			return {
				...state,
				loading: false,
				sales: [...state.sales, payload],
			};
		}
		case ERROR: {
			return {
				...state,
				loading: false,
				error: true,
			};
		}
		default: {
			return state;
		}
	}
};
