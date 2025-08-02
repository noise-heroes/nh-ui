"use client";

import React, { forwardRef, useState, useMemo } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../utils/cn";
import { Fragment } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const commandPaletteVariants = tv({
  slots: {
    overlay: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity",
    dialog: "fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20",
    panel: "mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all dark:divide-gray-800 dark:bg-gray-900 dark:ring-gray-700",
    inputWrapper: "relative",
    inputIcon: "pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400",
    input: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm dark:text-gray-100 dark:placeholder:text-gray-500",
    results: "max-h-80 scroll-py-2 overflow-y-auto",
    section: "py-2",
    sectionTitle: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",
    option: "cursor-pointer select-none px-4 py-2 text-sm flex items-center gap-3",
    optionIcon: "flex-shrink-0",
    optionContent: "flex-1 flex flex-col",
    optionTitle: "font-medium",
    optionDescription: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
    optionShortcut: "ml-auto text-xs text-gray-400 dark:text-gray-500",
    emptyState: "px-6 py-14 text-center text-sm",
  },
  variants: {
    size: {
      sm: {
        panel: "max-w-lg",
        input: "h-10",
        option: "py-1.5",
      },
      md: {
        panel: "max-w-2xl",
        input: "h-12",
        option: "py-2",
      },
      lg: {
        panel: "max-w-3xl",
        input: "h-14 text-base",
        option: "py-3 text-base",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  section?: string;
  keywords?: string[];
  onSelect: () => void;
}

export interface NHCommandPaletteProps extends VariantProps<typeof commandPaletteVariants> {
  isOpen: boolean;
  onClose: () => void;
  items: CommandItem[];
  placeholder?: string;
  emptyStateMessage?: string;
  showShortcuts?: boolean;
  sections?: { id: string; title: string }[];
}

export const NHCommandPalette = forwardRef<HTMLDivElement, NHCommandPaletteProps>(
  (
    {
      isOpen,
      onClose,
      items,
      placeholder = "Search commands...",
      emptyStateMessage = "No results found.",
      showShortcuts = true,
      sections,
      size,
    },
    ref
  ) => {
    const [query, setQuery] = useState("");
    const styles = commandPaletteVariants({ size });

    const filteredItems = useMemo(() => {
      if (!query) return items;

      const lowerQuery = query.toLowerCase();
      return items.filter((item) => {
        const searchableText = [
          item.title,
          item.description,
          ...(item.keywords || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(lowerQuery);
      });
    }, [items, query]);

    const groupedItems = useMemo(() => {
      const groups = new Map<string, CommandItem[]>();

      // Group items by section
      filteredItems.forEach((item) => {
        const section = item.section || "default";
        if (!groups.has(section)) {
          groups.set(section, []);
        }
        groups.get(section)!.push(item);
      });

      // Sort sections according to provided order
      if (sections) {
        const orderedGroups = new Map<string, CommandItem[]>();
        sections.forEach((section) => {
          if (groups.has(section.id)) {
            orderedGroups.set(section.id, groups.get(section.id)!);
            groups.delete(section.id);
          }
        });
        // Add remaining groups
        groups.forEach((items, key) => {
          orderedGroups.set(key, items);
        });
        return orderedGroups;
      }

      return groups;
    }, [filteredItems, sections]);

    const handleSelect = (item: CommandItem) => {
      item.onSelect();
      onClose();
      setQuery("");
    };

    return (
      <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery("")}>
        <Dialog
          ref={ref}
          as="div"
          className="relative z-50"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={styles.overlay()} />
          </Transition.Child>

          <div className={styles.dialog()}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={styles.panel()}>
                <Combobox
                  value={null}
                  onChange={(item: CommandItem | null) => {
                    if (item) handleSelect(item);
                  }}
                >
                  <div className={styles.inputWrapper()}>
                    <MagnifyingGlassIcon className={styles.inputIcon()} />
                    <Combobox.Input
                      className={styles.input()}
                      placeholder={placeholder}
                      onChange={(event) => setQuery(event.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  {filteredItems.length > 0 ? (
                    <Combobox.Options
                      static
                      className={styles.results()}
                    >
                      {Array.from(groupedItems.entries()).map(([sectionId, sectionItems]) => {
                        const section = sections?.find((s) => s.id === sectionId);
                        return (
                          <div key={sectionId} className={styles.section()}>
                            {section && (
                              <div className={styles.sectionTitle()}>
                                {section.title}
                              </div>
                            )}
                            {sectionItems.map((item) => (
                              <Combobox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  cn(
                                    styles.option(),
                                    active
                                      ? "bg-orange-50 text-orange-900 dark:bg-orange-900/20 dark:text-orange-400"
                                      : "text-gray-900 dark:text-gray-100"
                                  )
                                }
                              >
                                {item.icon && (
                                  <span className={cn(styles.optionIcon(), "h-5 w-5")}>
                                    {item.icon}
                                  </span>
                                )}
                                <div className={styles.optionContent()}>
                                  <div className={styles.optionTitle()}>
                                    {item.title}
                                  </div>
                                  {item.description && (
                                    <div className={styles.optionDescription()}>
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                                {showShortcuts && item.shortcut && (
                                  <kbd className={styles.optionShortcut()}>
                                    {item.shortcut}
                                  </kbd>
                                )}
                              </Combobox.Option>
                            ))}
                          </div>
                        );
                      })}
                    </Combobox.Options>
                  ) : (
                    <div className={styles.emptyState()}>
                      <p className="text-gray-500 dark:text-gray-400">
                        {emptyStateMessage}
                      </p>
                    </div>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
);

NHCommandPalette.displayName = "NHCommandPalette";