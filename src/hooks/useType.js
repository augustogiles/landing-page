import { useEffect, useState, useCallback } from 'react';

const DELAY_PAUSE_DEFAULT = 600;

export default function useAuth(strings = []) {
  const [phrase, setPhrase] = useState("");
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  const delayUpdateCount = useCallback( word => {
    
    let humanize = Math.round(Math.random() * (100 - 30) + 53.5);
    let delay = word[counter] === '\n' ? DELAY_PAUSE_DEFAULT : humanize;
    
    setPhrase(word.substring(0, counter));
    
    if (word !== phrase)
      return setInterval(incrementCounter, delay);
  
  },[counter, incrementCounter, phrase])
  
  const cleanInterval = (id) => {
    clearInterval(id);
  }
  
  useEffect( () => {
    let id = delayUpdateCount(strings.join('\n'));
    return () => cleanInterval(id);
  }, [counter, delayUpdateCount, strings]);

  return phrase;
};