import React, { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  startNewClallenge: () => void;
  levelUp: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewClallenge() {
    console.log('New challenge');
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewClallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
