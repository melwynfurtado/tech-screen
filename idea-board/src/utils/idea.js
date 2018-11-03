import uuid from 'uuid';
import sortBy from 'lodash/sortBy'

const addToIdea = (idea, time=Date.now()) => {
  return {
    ...idea,
    uuid: uuid(),
    createdTime: time,
    updatedTime: time,
  }
}

const updatedIdea = (idea, time=Date.now()) => {
  return {
    ...idea,
    updatedTime: time,
  }
}

const isIdeaValid = (title, desc) => title.trim() !== '' && desc.trim() !== ''

const sortIdeas = (ideas, key) => {
  return key === 'title' ? sortBy(ideas, idea => idea[key].toLowerCase()) : sortBy(ideas, key)
}

export {
  addToIdea,
  updatedIdea,
  isIdeaValid,
  sortIdeas,
}