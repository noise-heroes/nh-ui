"use client";

import React, { useState } from "react";
import {
  NHContainer,
  NHSection,
  NHText,
  NHBox,
  VStack,
  HStack,
  NHNav,
  NHBreadcrumbs,
  NHPagination,
  NHSidebar,
  NHNavbar2,
  NHSteps,
  NHMenu,
  NHCommandPalette,
  NHButton,
  NavItem,
  BreadcrumbItem,
  SidebarSection,
  Step,
  MenuItem,
  CommandItem,
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
} from "@nh-ui/ui";

export default function NavigationShowcase() {
  const [selectedNavItem, setSelectedNavItem] = useState("home");
  const [currentPage, setCurrentPage] = useState(3);
  const [currentStep, setCurrentStep] = useState(1);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Navigation items
  const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: <HomeIcon className="w-5 h-5" />, badge: "New" },
    { id: "projects", label: "Projects", icon: <FolderIcon className="w-5 h-5" /> },
    { id: "documents", label: "Documents", icon: <DocumentIcon className="w-5 h-5" />, badge: 12 },
    { id: "settings", label: "Settings", icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { id: "projects", label: "Projects", href: "#" },
    { id: "nh-ui", label: "NH-UI", href: "#" },
    { id: "components", label: "Components", href: "#" },
    { id: "navigation", label: "Navigation", isCurrent: true },
  ];

  // Sidebar sections
  const sidebarSections: SidebarSection[] = [
    {
      id: "main",
      items: [
        { id: "dashboard", label: "Dashboard", icon: <ChartBarIcon className="w-5 h-5" /> },
        { id: "projects", label: "Projects", icon: <FolderIcon className="w-5 h-5" />, badge: 3 },
        { id: "tasks", label: "Tasks", icon: <DocumentIcon className="w-5 h-5" />, badge: 12, badgeColor: "danger" },
      ],
    },
    {
      id: "workspace",
      title: "Workspace",
      items: [
        {
          id: "components",
          label: "Components",
          icon: <CubeIcon className="w-5 h-5" />,
          subItems: [
            { id: "buttons", label: "Buttons" },
            { id: "forms", label: "Forms" },
            { id: "navigation", label: "Navigation", isActive: true },
          ],
        },
        { id: "media", label: "Media", icon: <PhotoIcon className="w-5 h-5" /> },
        { id: "utilities", label: "Utilities", icon: <WrenchIcon className="w-5 h-5" /> },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      items: [
        { id: "docs", label: "Documentation", icon: <BookOpenIcon className="w-5 h-5" /> },
        { id: "themes", label: "Themes", icon: <PaintBrushIcon className="w-5 h-5" /> },
        { id: "security", label: "Security", icon: <LockClosedIcon className="w-5 h-5" /> },
      ],
    },
  ];

  // Steps
  const steps: Step[] = [
    { id: "setup", title: "Setup", description: "Configure your environment" },
    { id: "design", title: "Design", description: "Create your components" },
    { id: "develop", title: "Develop", description: "Build the functionality" },
    { id: "test", title: "Test", description: "Verify everything works" },
    { id: "deploy", title: "Deploy", description: "Ship to production" },
  ];

  // Menu items
  const menuItems: MenuItem[] = [
    { id: "profile", label: "Profile", icon: <UserIcon className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <Cog6ToothIcon className="w-5 h-5" /> },
    { id: "notifications", label: "Notifications", icon: <BellIcon className="w-5 h-5" /> },
    { id: "logout", label: "Logout", isDestructive: true },
  ];

  // Command palette items
  const commandItems: CommandItem[] = [
    {
      id: "search",
      title: "Search documentation",
      description: "Search through all documentation",
      icon: <MagnifyingGlassIcon className="w-5 h-5" />,
      shortcut: "⌘K",
      section: "general",
      onSelect: () => console.log("Search selected"),
    },
    {
      id: "new-project",
      title: "Create new project",
      description: "Start a new NH-UI project",
      icon: <FolderIcon className="w-5 h-5" />,
      shortcut: "⌘N",
      section: "actions",
      onSelect: () => console.log("New project selected"),
    },
    {
      id: "run-dev",
      title: "Run development server",
      description: "Start the local development server",
      icon: <CommandLineIcon className="w-5 h-5" />,
      shortcut: "⌘D",
      section: "actions",
      onSelect: () => console.log("Run dev selected"),
    },
    {
      id: "deploy",
      title: "Deploy to production",
      description: "Deploy your application",
      icon: <RocketLaunchIcon className="w-5 h-5" />,
      shortcut: "⌘P",
      section: "actions",
      onSelect: () => console.log("Deploy selected"),
    },
  ];

  return (
    <NHContainer size="3xl" className="py-12">
      <VStack spacing={12} align="stretch">
        {/* Header */}
        <NHSection>
          <VStack spacing={4}>
            <NHText variant="display">Navigation Components</NHText>
            <NHText variant="body" size="lg" color="secondary">
              Navigation components for building intuitive user interfaces with NH brand integration.
            </NHText>
          </VStack>
        </NHSection>

        {/* NHNavbar */}
        <NHSection>
          <VStack spacing={6}>
            <NHText variant="headline">Navbar</NHText>
            <NHBox
              p={0}
              bg="gray-100"
              rounded="lg"
              className="overflow-hidden"
            >
              <NHNavbar2
                brandLogo={<NHBox className="w-8 h-8 bg-orange-500 rounded-md" />}
                brandText="NH-UI"
                variant="sticky"
                centerContent={
                  <NHNav
                    items={navItems}
                    activeId={selectedNavItem}
                    onItemClick={(item) => setSelectedNavItem(item.id)}
                    variant="underline"
                  />
                }
                endContent={
                  <HStack spacing={2}>
                    <NHButton
                      size="sm"
                      variant="ghost"
                      startContent={<MagnifyingGlassIcon className="w-4 h-4" />}
                      onPress={() => setCommandPaletteOpen(true)}
                    >
                      Search
                    </NHButton>
                    <NHMenu
                      trigger={
                        <NHButton
                          size="sm"
                          variant="ghost"
                          isIconOnly
                        >
                          <UserIcon className="w-4 h-4" />
                        </NHButton>
                      }
                      items={menuItems}
                    />
                  </HStack>
                }
                menuToggle={
                  <NHButton
                    size="sm"
                    variant="ghost"
                    isIconOnly
                  >
                    <Bars3Icon className="w-5 h-5" />
                  </NHButton>
                }
              />
            </NHBox>
          </VStack>
        </NHSection>

        {/* NHNav */}
        <NHSection>
          <VStack spacing={6}>
            <NHText variant="headline">Navigation</NHText>
            <VStack spacing={4}>
              <NHBox>
                <NHText variant="label" className="mb-2">Default</NHText>
                <NHNav
                  items={navItems}
                  activeId={selectedNavItem}
                  onItemClick={(item) => setSelectedNavItem(item.id)}
                />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">Pills</NHText>
                <NHNav
                  items={navItems}
                  activeId={selectedNavItem}
                  onItemClick={(item) => setSelectedNavItem(item.id)}
                  variant="pills"
                />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">Underline</NHText>
                <NHNav
                  items={navItems}
                  activeId={selectedNavItem}
                  onItemClick={(item) => setSelectedNavItem(item.id)}
                  variant="underline"
                />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">Vertical Sidebar</NHText>
                <NHNav
                  items={navItems}
                  activeId={selectedNavItem}
                  onItemClick={(item) => setSelectedNavItem(item.id)}
                  variant="sidebar"
                  orientation="vertical"
                />
              </NHBox>
            </VStack>
          </VStack>
        </NHSection>

        {/* NHBreadcrumbs */}
        <NHSection>
          <VStack spacing={6}>
            <NHText variant="headline">Breadcrumbs</NHText>
            <VStack spacing={4}>
              <NHBox>
                <NHText variant="label" className="mb-2">Default</NHText>
                <NHBreadcrumbs items={breadcrumbItems} />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">Solid</NHText>
                <NHBreadcrumbs items={breadcrumbItems} variant="solid" />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">With Max Items</NHText>
                <NHBreadcrumbs
                  items={[...breadcrumbItems, ...breadcrumbItems]}
                  maxItems={5}
                  itemsBeforeCollapse={1}
                  itemsAfterCollapse={2}
                />
              </NHBox>
            </VStack>
          </VStack>
        </NHSection>

        {/* NHPagination */}
        <NHSection>
          <VStack spacing={6}>
            <NHText variant="headline">Pagination</NHText>
            <VStack spacing={4}>
              <NHBox>
                <NHText variant="label" className="mb-2">Default</NHText>
                <NHPagination
                  total={10}
                  page={currentPage}
                  onChange={setCurrentPage}
                />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">Bordered</NHText>
                <NHPagination
                  total={10}
                  page={currentPage}
                  onChange={setCurrentPage}
                  variant="bordered"
                />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">Solid with Jump Controls</NHText>
                <NHPagination
                  total={10}
                  page={currentPage}
                  onChange={setCurrentPage}
                  variant="solid"
                  showJumpControls
                />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">Compact</NHText>
                <NHPagination
                  total={10}
                  page={currentPage}
                  onChange={setCurrentPage}
                  isCompact
                />
              </NHBox>
            </VStack>
          </VStack>
        </NHSection>

        {/* NHSteps */}
        <NHSection>
          <VStack spacing={6}>
            <NHText variant="headline">Steps</NHText>
            <VStack spacing={4}>
              <NHBox>
                <NHText variant="label" className="mb-2">Default</NHText>
                <NHSteps
                  steps={steps}
                  currentStep={currentStep}
                  onStepClick={(_, index) => setCurrentStep(index)}
                />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">Solid</NHText>
                <NHSteps
                  steps={steps}
                  currentStep={currentStep}
                  onStepClick={(_, index) => setCurrentStep(index)}
                  variant="solid"
                />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">Vertical</NHText>
                <NHSteps
                  steps={steps}
                  currentStep={currentStep}
                  onStepClick={(_, index) => setCurrentStep(index)}
                  orientation="vertical"
                />
              </NHBox>
            </VStack>
          </VStack>
        </NHSection>

        {/* NHSidebar */}
        <NHSection>
          <VStack spacing={6}>
            <NHText variant="headline">Sidebar</NHText>
            <HStack spacing={4} align="start">
              <NHBox className="flex-shrink-0">
                <NHSidebar
                  sections={sidebarSections}
                  activeId="navigation"
                  isCollapsed={sidebarCollapsed}
                  header={
                    <HStack justify="between">
                      <HStack spacing={2}>
                        <NHBox className="w-8 h-8 bg-orange-500 rounded-md flex-shrink-0" />
                        {!sidebarCollapsed && <NHText variant="subtitle">NH-UI</NHText>}
                      </HStack>
                      <NHButton
                        size="sm"
                        variant="ghost"
                        isIconOnly
                        onPress={() => setSidebarCollapsed(!sidebarCollapsed)}
                      >
                        <Bars3Icon className="w-4 h-4" />
                      </NHButton>
                    </HStack>
                  }
                  footer={
                    !sidebarCollapsed && (
                      <VStack spacing={2}>
                        <NHButton variant="flat" size="sm" className="w-full">
                          Upgrade to Pro
                        </NHButton>
                      </VStack>
                    )
                  }
                />
              </NHBox>
              <NHBox className="flex-1 p-6 bg-gray-100 rounded-lg">
                <NHText variant="body">
                  Main content area. The sidebar can be collapsed and expanded.
                  It supports nested items, badges, and sections.
                </NHText>
              </NHBox>
            </HStack>
          </VStack>
        </NHSection>

        {/* NHMenu */}
        <NHSection>
          <VStack spacing={6}>
            <NHText variant="headline">Menu</NHText>
            <HStack spacing={4}>
              <NHBox>
                <NHText variant="label" className="mb-2">Default</NHText>
                <NHMenu
                  trigger={<NHButton>Menu</NHButton>}
                  items={menuItems}
                />
              </NHBox>
              <NHBox>
                <NHText variant="label" className="mb-2">With Sections</NHText>
                <NHMenu
                  trigger={<NHButton variant="flat">Options</NHButton>}
                  sections={[
                    {
                      id: "user",
                      title: "User",
                      items: menuItems.slice(0, 2),
                    },
                    {
                      id: "danger",
                      title: "Danger Zone",
                      items: menuItems.slice(3),
                    },
                  ]}
                />
              </NHBox>
            </HStack>
          </VStack>
        </NHSection>

        {/* Command Palette */}
        <NHSection>
          <VStack spacing={6}>
            <NHText variant="headline">Command Palette</NHText>
            <NHButton
              startContent={<CommandLineIcon className="w-5 h-5" />}
              onPress={() => setCommandPaletteOpen(true)}
            >
              Open Command Palette (⌘K)
            </NHButton>
          </VStack>
        </NHSection>

        <NHCommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          items={commandItems}
          sections={[
            { id: "general", title: "General" },
            { id: "actions", title: "Actions" },
          ]}
        />
      </VStack>
    </NHContainer>
  );
}