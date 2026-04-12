/**
 * UiBrium UI — Public API
 *
 * Import any component:
 *   import { Button, Input, Dialog } from '@uibrium/ui'
 *
 * Don't forget to import styles:
 *   import '@uibrium/ui/styles.css'
 */

// ── Components ─────────────────────────────────────────────────────────────────

export { Button, type ButtonProps } from './components/button';
export { Input, type InputProps } from './components/input';
export {
  Alert,
  AlertTitle,
  AlertDescription,
  type AlertProps,
} from './components/alert';
export { Checkbox, type CheckboxProps } from './components/checkbox';
export { Switch, type SwitchProps } from './components/switch';
export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  type DialogProps,
  type DialogContentProps,
} from './components/dialog';
export { Tooltip, TooltipProvider, type TooltipProps } from './components/tooltip';
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  type TabsProps,
} from './components/tabs';
export {
  Avatar,
  AvatarGroup,
  type AvatarProps,
  type AvatarGroupProps,
} from './components/avatar';
export {
  Select,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  type SelectProps,
} from './components/select';
export { Badge, type BadgeProps } from './components/badge';
export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './components/card';
export { Textarea, type TextareaProps } from './components/textarea';
export { RadioGroup, RadioGroupItem } from './components/radio';
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/accordion';
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './components/dropdown';
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from './components/drawer';
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './components/pagination';
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './components/table';
export { CustomCursor } from './components/custom-cursor';
export { Preloader } from './components/preloader';
export { AmbientBackground } from './components/ambient-background';
export { Navbar, type NavbarProps } from './components/navbar';
export { Footer, type FooterProps } from './components/footer';



// ── Theme ──────────────────────────────────────────────────────────────────────

export {
  ThemeProvider,
  useTheme,
  type ThemeProviderProps,
  type ThemeMode,
  type ThemeConfig,
  type ThemeContextValue,
} from './themes';

// ── Hooks ──────────────────────────────────────────────────────────────────────

export { useDisclosure, type UseDisclosureReturn } from './hooks/use-disclosure';
export { useClickOutside } from './hooks/use-click-outside';
export { useMediaQuery } from './hooks/use-media-query';
export { useControllableState } from './hooks/use-controllable-state';

// ── Utilities ──────────────────────────────────────────────────────────────────

export { cn } from './utils/cn';
export { createSafeContext } from './utils/create-context';

// ── Tokens ─────────────────────────────────────────────────────────────────────

export { colors, spacing, fontFamily, fontSize, fontWeight, letterSpacing, radii, shadows } from './tokens';
