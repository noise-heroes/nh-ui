// Foundation Components
export { Box } from './box';
export { Box as NHBox } from './box';
export type { BoxProps } from './box';
export type { BoxProps as NHBoxProps } from './box';

export { Text } from './text';
export { Text as NHText } from './text';
export type { TextProps } from './text';
export type { TextProps as NHTextProps } from './text';

export { Stack, VStack, HStack } from './stack';
export { Stack as NHStack, VStack as NHVStack, HStack as NHHStack } from './stack';
export type { StackProps } from './stack';
export type { StackProps as NHStackProps } from './stack';

export { Grid, GridItem } from './grid';
export { Grid as NHGrid, GridItem as NHGridItem } from './grid';
export type { GridProps, GridItemProps } from './grid';
export type { GridProps as NHGridProps, GridItemProps as NHGridItemProps } from './grid';

export { Container, Section, Article, Main } from './container';
export { Container as NHContainer, Section as NHSection, Article as NHArticle, Main as NHMain } from './container';
export type { ContainerProps } from './container';
export type { ContainerProps as NHContainerProps } from './container';

export { Flex, FlexItem, Spacer } from './flex';
export { Flex as NHFlex, FlexItem as NHFlexItem } from './flex';
export type { FlexProps, FlexItemProps } from './flex';
export type { FlexProps as NHFlexProps, FlexItemProps as NHFlexItemProps } from './flex';

export { NHSpacer } from './spacer';
export type { NHSpacerProps } from './spacer';

// Button
export { NHButton } from './button';
export type { NHButtonProps } from './button';

// Card
export { NHCard, NHCardBody, NHCardHeader, NHCardFooter } from './card';
export type { NHCardProps, NHCardBodyProps, NHCardHeaderProps, NHCardFooterProps } from './card';

// Chip
export { NHChip } from './chip';
export type { NHChipProps } from './chip';

// Logo
export { NHLogoFromFile } from './nh-logo';
export { NHLogoFromFile as NHLogo } from './nh-logo';

// For now, re-export other components directly from HeroUI
// These will be wrapped in future iterations
export {
  // Layout
  Divider as NHDivider,
  
  // Navigation
  Link as NHLink,
  Navbar as NHNavbar,
  NavbarBrand as NHNavbarBrand,
  NavbarContent as NHNavbarContent,
  NavbarItem as NHNavbarItem,
  NavbarMenu as NHNavbarMenu,
  NavbarMenuItem as NHNavbarMenuItem,
  NavbarMenuToggle as NHNavbarMenuToggle,
  
  // Data Display
  Avatar as NHAvatar,
  Badge as NHBadge,
  Code as NHCode,
  Snippet as NHSnippet,
  
  // Feedback
  // Progress is now a custom component
  
  // Navigation
  Tab as NHTab,
  Tabs as NHTabs,
  
  // Provider
  HeroUIProvider as NHProvider,
} from '@heroui/react';

// Re-export types for the above components
export type {
  DividerProps as NHDividerProps,
  LinkProps as NHLinkProps,
  NavbarProps as NHNavbarProps,
  AvatarProps as NHAvatarProps,
  BadgeProps as NHBadgeProps,
  CodeProps as NHCodeProps,
  SnippetProps as NHSnippetProps,
  TabsProps as NHTabsProps,
  useDisclosure,
} from '@heroui/react';

// Define missing types
export type NHTabProps = {
  key: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  [key: string]: any;
};

// Form Components
export { NHInput } from './input';
export type { NHInputProps } from './input';

export { NHTextarea } from './textarea';
export type { NHTextareaProps } from './textarea';

export { NHSelect, NHSelectItem } from './select';
export type { NHSelectProps } from './select';

export { NHCheckbox, NHCheckboxGroup } from './checkbox';
export type { NHCheckboxProps, NHCheckboxGroupProps } from './checkbox';

export { NHRadio, NHRadioGroup } from './radio';
export type { NHRadioProps, NHRadioGroupProps } from './radio';

export { NHSwitch } from './switch';
export type { NHSwitchProps } from './switch';

export { NHSlider } from './slider';
export type { NHSliderProps } from './slider';

export { NHDatePicker } from './date-picker';
export type { NHDatePickerProps } from './date-picker';

export { NHTimePicker } from './time-picker';
export type { NHTimePickerProps } from './time-picker';

export { NHColorPicker } from './color-picker';
export type { NHColorPickerProps } from './color-picker';

export { NHFileUpload } from './file-upload';
export type { NHFileUploadProps } from './file-upload';

export { NHForm, useFormContext } from './form';
export type { NHFormProps } from './form';

export { NHFormField } from './form-field';
export type { NHFormFieldProps } from './form-field';

export { NHSearchInput } from './search-input';
export type { NHSearchInputProps } from './search-input';

export { NHPasswordInput } from './password-input';
export type { NHPasswordInputProps } from './password-input';

export { NHNumberInput } from './number-input';
export type { NHNumberInputProps } from './number-input';

export { NHPinInput } from './pin-input';
export type { NHPinInputProps } from './pin-input';

export { NHRating } from './rating';
export type { NHRatingProps } from './rating';

export { NHTagInput } from './tag-input';
export type { NHTagInputProps } from './tag-input';

export { NHAutocomplete } from './autocomplete';
export type { NHAutocompleteProps, AutocompleteItem } from './autocomplete';

// Feedback Components
export { NHAlert } from './alert';
export type { NHAlertProps } from './alert';

export { NHToast, ToastProvider, useToast } from './toast';
export type { NHToastProps, ToastOptions, Toast } from './toast';

export { NHModal, NHModalContent, NHModalHeader, NHModalBody, NHModalFooter } from './modal';
export type { NHModalProps, NHModalContentProps, NHModalHeaderProps, NHModalBodyProps, NHModalFooterProps } from './modal';

export { NHDialog } from './dialog';
export type { NHDialogProps } from './dialog';

export { NHNotification } from './notification';
export type { NHNotificationProps } from './notification';

export { NHProgress } from './progress';
export type { NHProgressProps } from './progress';

export { NHSpinner } from './spinner';
export type { NHSpinnerProps } from './spinner';

export { NHSkeleton } from './skeleton';
export type { NHSkeletonProps } from './skeleton';

export { NHLoadingOverlay } from './loading-overlay';
export type { NHLoadingOverlayProps } from './loading-overlay';

export { NHEmptyState } from './empty-state';
export type { NHEmptyStateProps } from './empty-state';

export { NHErrorBoundary } from './error-boundary';
export type { NHErrorBoundaryProps, ErrorFallbackProps } from './error-boundary';

export { NHBanner } from './banner';
export type { NHBannerProps } from './banner';

// Navigation Components
export { NHNav } from './navigation/nav';
export type { NHNavProps, NavItem } from './navigation/nav';

export { NHBreadcrumbs } from './navigation/breadcrumbs';
export type { NHBreadcrumbsProps, BreadcrumbItem } from './navigation/breadcrumbs';

export { NHPagination } from './navigation/pagination';
export type { NHPaginationProps } from './navigation/pagination';

export { NHSidebar } from './navigation/sidebar';
export type { NHSidebarProps, SidebarItem, SidebarSection } from './navigation/sidebar';

export { NHNavbar as NHNavbar2 } from './navigation/navbar';
export type { NHNavbarProps as NHNavbar2Props } from './navigation/navbar';

export { NHSteps } from './navigation/steps';
export type { NHStepsProps, Step } from './navigation/steps';

export { NHMenu } from './navigation/menu';
export type { NHMenuProps, MenuItem, MenuSection } from './navigation/menu';

export { NHCommandPalette } from './navigation/command-palette';
export type { NHCommandPaletteProps, CommandItem } from './navigation/command-palette';

// Re-export useful icons for convenience
export {
  MoonIcon,
  SunIcon,
  HomeIcon,
  FolderIcon,
  DocumentIcon,
  Cog6ToothIcon,
  UserIcon,
  BellIcon,
  MagnifyingGlassIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  CubeIcon,
  ChartBarIcon,
  PhotoIcon,
  WrenchIcon,
  BookOpenIcon,
  PaintBrushIcon,
  LockClosedIcon,
  Bars3Icon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SparklesIcon,
  SwatchIcon,
  CodeBracketIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  BeakerIcon,
  ArrowDownTrayIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ShieldCheckIcon,
  BoltIcon,
  EyeIcon,
  CubeTransparentIcon,
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  InformationCircleIcon,
  EllipsisVerticalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

// Special Effects Components
export { NHBlurCard } from './nh-blur-card';
export type { NHBlurCardProps } from './nh-blur-card';

export { NHBlurSection } from './nh-blur-section';
export type { NHBlurSectionProps } from './nh-blur-section';

// Data Display Components
export { NHTable, NHTableHeader, NHTableBody, NHTableColumn, NHTableRow, NHTableCell } from './table';
export type { NHTableProps, NHTableHeaderProps, NHTableBodyProps, NHTableColumnProps, NHTableRowProps, NHTableCellProps } from './table';

export { NHList, NHListItem } from './list';
export type { NHListProps, NHListItemProps } from './list';

export { NHStat, NHStatGroup } from './stat';
export type { NHStatProps, NHStatGroupProps } from './stat';

// Utility Components
export { NHTooltip } from './tooltip';
export type { NHTooltipProps } from './tooltip';

export { NHPopover, NHPopoverTrigger, NHPopoverContent } from './popover';
export type { NHPopoverProps, NHPopoverContentProps } from './popover';

export { NHDrawer } from './drawer';
export type { NHDrawerProps } from './drawer';

// Media Components
export { NHImage } from './image';
export type { NHImageProps } from './image';