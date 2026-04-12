'use client';

import { useCallback, useState } from 'react';

export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Manages open/close state for modals, drawers, dropdowns, etc.
 *
 * @example
 * const { isOpen, onOpen, onClose } = useDisclosure();
 * <Button onClick={onOpen}>Open Modal</Button>
 * <Dialog open={isOpen} onClose={onClose} />
 */
export function useDisclosure(defaultOpen = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, onOpen, onClose, onToggle, setIsOpen };
}
