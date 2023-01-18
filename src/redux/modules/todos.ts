import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../config/configStore";
import { RootState } from "../config/configStore";

interface datatype {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  displaytoggle: boolean;
}

export const __getTodo = createAsyncThunk(
  "todos/getTodo",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3003/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload: datatype, thunkAPI) => {
    try {
      await axios.post("http://localhost:3003/todos", payload);
      const data = await axios.get("http://localhost:3003/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (payload: datatype, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3003/todos/${payload}`);
      const data = await axios.get("http://localhost:3003/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (payload: datatype, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3003/todos/${payload.id}`, payload);
      const data = await axios.get("http://localhost:3003/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  todos: [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      isDone: false,
      displaytoggle: true,
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      isDone: false,
      displaytoggle: true,
    },
  ],
  isLoading: false,
  //   error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getTodo
    builder.addCase(__getTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__getTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(__getTodo.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload;
    });

    // addTodo
    builder.addCase(__addTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(__addTodo.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload;
    });

    // deleteTodo
    builder.addCase(__deleteTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(__deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload;
    });

    // updateTodo
    builder.addCase(__updateTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__updateTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(__updateTodo.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload;
    });
  },
});

// export const { addTodo, deleteTodo, toggleTodo, updateTodo, toggleDisplay } =
//   todosSlice.actions;
export default todosSlice.reducer;
