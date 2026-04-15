import { Dispatch, SetStateAction, useState } from "react";
import { useDebounce } from "use-debounce";

export function useDebounceState<T>(): [
  T | undefined,
  Dispatch<SetStateAction<T | undefined>>,
] {
  const [state, setState] = useState<T>();

  const [value] = useDebounce(state, 300);

  return [value, setState];
}
