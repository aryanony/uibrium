'use client';

import { useCallback, useRef, useState } from 'react';

type SetStateAction<T> = T | ((prev: T) => T);

/**
 * Manages controlled/uncontrolled component state — the Radix pattern.
 *
 * If `controlledValue` is provided, the component is controlled externally.
 * Otherwise, it uses its own internal state with `defaultValue`.
 *
 * @example
 * function Toggle({ value, defaultValue, onChange }) {
 *   const [checked, setChecked] = useControllableState({
 *     value,
 *     defaultValue: defaultValue ?? false,
 *     onChange,
 *   });
 *   return <button onClick={() => setChecked(!checked)}>{checked ? 'On' : 'Off'}</button>;
 * }
 */
export function useControllableState<T>({
  value: controlledValue,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}): [T, (next: SetStateAction<T>) => void] {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<T>(defaultValue);

  const value = isControlled ? controlledValue : internalValue;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const setValue = useCallback(
    (next: SetStateAction<T>) => {
      const nextValue = typeof next === 'function' ? (next as (prev: T) => T)(value) : next;

      if (!isControlled) {
        setInternalValue(nextValue);
      }

      onChangeRef.current?.(nextValue);
    },
    [isControlled, value],
  );

  return [value, setValue];
}
