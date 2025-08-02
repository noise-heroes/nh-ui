"use client";

import { 
  Table as HeroUITable, 
  TableHeader as HeroUITableHeader,
  TableBody as HeroUITableBody,
  TableColumn as HeroUITableColumn,
  TableRow as HeroUITableRow,
  TableCell as HeroUITableCell,
  TableProps as HeroUITableProps,
} from "@heroui/react";
import { forwardRef } from "react";

// Table component
export interface NHTableProps extends HeroUITableProps {
  /**
   * Whether the table should have a blur effect background
   */
  isBlurred?: boolean;
}

export const NHTable = forwardRef<HTMLTableElement, NHTableProps>(
  ({ isBlurred, className, ...props }, ref) => {
    const blurClasses = isBlurred 
      ? 'backdrop-blur-md bg-white/70 dark:bg-black/70' 
      : '';
    
    return (
      <HeroUITable
        ref={ref}
        className={`${blurClasses} ${className || ''}`}
        {...props}
      />
    );
  }
);

NHTable.displayName = "NHTable";

// Export other table components
export const NHTableHeader = HeroUITableHeader;
export const NHTableBody = HeroUITableBody;
export const NHTableColumn = HeroUITableColumn;
export const NHTableRow = HeroUITableRow;
export const NHTableCell = HeroUITableCell;

// Export types
export type { 
  TableHeaderProps as NHTableHeaderProps,
  TableBodyProps as NHTableBodyProps,
  TableColumnProps as NHTableColumnProps,
  TableRowProps as NHTableRowProps,
  TableCellProps as NHTableCellProps,
} from "@heroui/react";