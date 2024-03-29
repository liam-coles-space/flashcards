import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: 'topics',
  initialState : {
    topics:{} 
  },
  reducers: {
    addTopic : (state, action) => {
      const {id, name, icon} = action.payload;
      state.topics[id] = {
        id:id,
        name: name,
        icon,
        quizIds:[]
      };
    },
    addQuizIdForTopic : (state,action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const { addTopic,addQuizIdForTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
export const selectTopics = (state) => state.topics.topics;

