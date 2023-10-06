import {createSlice, nanoid} from '@reduxjs/toolkit';
const initialState = {
  data1: [],
  tot: 0,
  cc: 0,
  log: true,
  favitem: [],
  cartitem: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    aaddapidata: (state, action) => {
      state.data1 = action.payload;
    },
    addtot: (state, action) => {
      state.tot = action.payload;
    },

    addcc: (state, action) => {
      state.cc = action.payload;
    },
    addlog: (state, action) => {
      state.log = action.payload;
    },
    addfav: (state, action) => {
      const id1 = action.payload;

      const r = state.data1.filter((val, ind) => {
        return val.id == id1;
      });

      state.favitem.push(...r);
    },
    removefav: (state, action) => {
      const id1 = action.payload;

      const r = state.favitem.filter((val, ind) => {
        return val.id != id1;
      });

      state.favitem = r;
    },
    addcart: (state, action) => {
      const id1 = action.payload;

      const r = state.data1.filter((val, ind) => {
        val.count = 1;
        return val.id == id1;
      });

      state.cc = state.cc + 1;
      state.cartitem.push(...r);
    },
    removecart: (state, action) => {
      const id1 = action.payload;

      const r = state.cartitem.filter((val, ind) => {
        return val.id != id1;
      });

      state.cc = state.cc - 1;

      state.cartitem = r;
    },
    inccount: (state, action) => {
      const id1 = action.payload;
      const r = state.cartitem.map((val, ind) => {
        if (val.id == id1) {
          val.count = val.count + 1;
        }

        return val;
      });

      state.cartitem = r;
    },
    deccount: (state, action) => {
      const id1 = action.payload;
      const r = state.cartitem.map((val, ind) => {
        if (val.id == id1) {
          val.count = val.count - 1;
        }

        return val;
      });

      state.cartitem = r;
    },
    remcartitem: (state, action) => {
      const id1 = action.payload;
      const r = state.cartitem.filter((val, ind) => {
        if (val.id == id1) {
          state.tot = state.tot - val.count * val.price;
        }
        return val.id != id1;
      });

      state.cartitem = r;
      state.cc = state.cc - 1;
    },
    emptycart: (state, action) => {
      state.cartitem = [];
      state.cc = 0;
      state.tot = 0;
      state.data1 = state.data1.map(val => {
        val.count = 0;
        return val;
      });
    },
  },
});

export const {
  aaddapidata,
  addtot,
  addcc,
  addlog,
  addfav,
  removefav,
  addcart,
  removecart,
  inccount,
  deccount,
  remcartitem,
  emptycart,
} = todoSlice.actions;

export default todoSlice.reducer;




