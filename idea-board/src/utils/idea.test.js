import { 
  addToIdea,
  updatedIdea,
  isIdeaValid,
  sortIdeas,  
 } from './idea';

describe('#addToIdea', () => {
  it('should return complete idea object', () => {
    const idea = {
      title: 'Hello!',
      desc: 'Some description',
    }
    const time = 123456789
    const uuid = 'abc123-efg567'
    const expected = {
      ...idea,
      uuid,
      createdTime: time,
      updatedTime: time,
    }
    expect(addToIdea(idea, time, uuid)).toEqual(expected)
  });
})

describe('#updatedIdea', () => {
  it('should return idea object with updatedTime', () => {
    const time = 123456789
    const uuid = 'abc123-efg567'    
    const idea = {
      title: 'Hello!',
      desc: 'Some description',
      uuid,
      createdTime: time,
      updatedTime: time,
    }
    const newTime = 987654321
    const expected = {
      ...idea,
      updatedTime: newTime,
    }
    expect(updatedIdea(idea, newTime)).toEqual(expected)
  });
})

describe('#isIdeaValid', () => {
  it('should return true when idea is valid', () => {  
    const idea = {
      title: 'Hello!',
      desc: 'Some description',
    }
    expect(isIdeaValid(idea.title, idea.desc)).toEqual(true)
  });

  it('should return false when idea is invalid', () => {  
    const idea = {
      title: '',
      desc: '',
    }
    expect(isIdeaValid(idea.title, idea.desc)).toEqual(false)
  });  
})

describe('#sortIdeas', () => {
  const ideas = [
    {
      uuid: "1371cd20-50be-44a1-95b7-93e7c3641beb",
      title: "Second Idea",
      desc: "This is not as good as first one. But it should work!",
      createdTime: 1541258930814,
      updatedTime: 1541258930814,
    },      
    {
      uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
      title: "First Idea",
      desc: "What else can I say about this? Its brilliant!",
      createdTime: 1541258930810,
      updatedTime: 1541258930814,
    },
  ]

  it('should return sorted ideas by title', () => {  
    const expected = [
      {
        uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
        title: "First Idea",
        desc: "What else can I say about this? Its brilliant!",
        createdTime: 1541258930810,
        updatedTime: 1541258930814,
      },      
      {
        uuid: "1371cd20-50be-44a1-95b7-93e7c3641beb",
        title: "Second Idea",
        desc: "This is not as good as first one. But it should work!",
        createdTime: 1541258930814,
        updatedTime: 1541258930814,
      },
    ]      

    expect(sortIdeas(ideas, 'title')).toEqual(expected)
  });

  it('should return sorted ideas by createdTime', () => { 
    const expected = [
      {
        uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
        title: "First Idea",
        desc: "What else can I say about this? Its brilliant!",
        createdTime: 1541258930810,
        updatedTime: 1541258930814,
      },      
      {
        uuid: "1371cd20-50be-44a1-95b7-93e7c3641beb",
        title: "Second Idea",
        desc: "This is not as good as first one. But it should work!",
        createdTime: 1541258930814,
        updatedTime: 1541258930814,
      },
    ]      

    expect(sortIdeas(ideas, 'createdTime')).toEqual(expected)
  });  
})