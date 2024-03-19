import { atom, useRecoilState } from "recoil"
export const counterState = atom({ default: 0, key: 'counter' })
export const useCounterState = () => {
  return useRecoilState(counterState);
}
