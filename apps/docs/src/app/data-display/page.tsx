"use client";

import {
  Container,
  Stack,
  Text,
  Grid,
  NHCard,
  NHCardBody,
  NHCardHeader,
  NHTable,
  NHTableHeader,
  NHTableBody,
  NHTableColumn,
  NHTableRow,
  NHTableCell,
  NHList,
  NHListItem,
  NHStat,
  NHStatGroup,
  NHChip,
  NHButton,
  NHAvatar,
  NHTooltip,
  NHPopover,
  NHPopoverTrigger,
  NHPopoverContent,
  NHDrawer,
  NHImage,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  InformationCircleIcon,
  EllipsisVerticalIcon,
} from "@nh-ui/ui";
import { useState } from "react";

export default function DataDisplayPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Sample data for table
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer", status: "active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager", status: "inactive" },
  ];

  return (
    <Container size="xl">
      <Stack spacing={12} className="py-12">
        {/* Header */}
        <div>
          <Text variant="display" gradient="brand" className="mb-4">
            Data Display Components
          </Text>
          <Text size="lg" color="muted">
            Components for presenting data in tables, lists, stats, and more
          </Text>
        </div>

        {/* Stats */}
        <div>
          <Text variant="headline" className="mb-6">Statistics</Text>
          
          <NHStatGroup>
            <NHStat
              label="Total Revenue"
              value="$45,231"
              description="12% increase from last month"
              trend={{ value: 12, direction: 'up', label: 'vs last month' }}
              icon={<CurrencyDollarIcon className="h-6 w-6 text-primary" />}
            />
            
            <NHStat
              label="Active Users"
              value="2,345"
              description="5% decrease from last week"
              trend={{ value: 5, direction: 'down', label: 'vs last week' }}
              icon={<UserGroupIcon className="h-6 w-6 text-secondary" />}
            />
            
            <NHStat
              label="Conversion Rate"
              value="3.2%"
              description="Best performance this quarter"
              trend={{ value: 18, direction: 'up' }}
              icon={<ArrowTrendingUpIcon className="h-6 w-6 text-success" />}
            />
            
            <NHStat
              label="Avg. Order Value"
              value="$126"
              description="Steady growth maintained"
              icon={<ChartBarIcon className="h-6 w-6 text-warning" />}
            />
          </NHStatGroup>

          <Grid cols={{ base: 1, md: 2 }} gap={6} className="mt-6">
            <NHCard>
              <NHCardHeader>
                <Text variant="title">Stat Variants</Text>
              </NHCardHeader>
              <NHCardBody>
                <Stack spacing={4}>
                  <NHStat
                    variant="card"
                    label="Card Variant"
                    value="1,234"
                    description="With card styling"
                  />
                  
                  <NHStat
                    variant="minimal"
                    label="Minimal Variant"
                    value="5,678"
                    description="Clean and simple"
                  />
                </Stack>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardHeader>
                <Text variant="title">Custom Stats</Text>
              </NHCardHeader>
              <NHCardBody>
                <Grid cols={{ base: 2 }} gap={4}>
                  <NHStat
                    label="Projects"
                    value="24"
                    variant="minimal"
                  />
                  <NHStat
                    label="Tasks"
                    value="139"
                    variant="minimal"
                  />
                  <NHStat
                    label="Hours"
                    value="892"
                    variant="minimal"
                  />
                  <NHStat
                    label="Commits"
                    value="1.2k"
                    variant="minimal"
                  />
                </Grid>
              </NHCardBody>
            </NHCard>
          </Grid>
        </div>

        {/* Tables */}
        <div>
          <Text variant="headline" className="mb-6">Tables</Text>
          
          <NHCard>
            <NHCardHeader>
              <Text variant="title">User Management</Text>
            </NHCardHeader>
            <NHCardBody>
              <NHTable aria-label="User table">
                <NHTableHeader>
                  <NHTableColumn>NAME</NHTableColumn>
                  <NHTableColumn>EMAIL</NHTableColumn>
                  <NHTableColumn>ROLE</NHTableColumn>
                  <NHTableColumn>STATUS</NHTableColumn>
                  <NHTableColumn>ACTIONS</NHTableColumn>
                </NHTableHeader>
                <NHTableBody>
                  {tableData.map((user) => (
                    <NHTableRow key={user.id}>
                      <NHTableCell>
                        <div className="flex items-center gap-3">
                          <NHAvatar size="sm" name={user.name} />
                          <Text>{user.name}</Text>
                        </div>
                      </NHTableCell>
                      <NHTableCell>{user.email}</NHTableCell>
                      <NHTableCell>{user.role}</NHTableCell>
                      <NHTableCell>
                        <NHChip
                          color={user.status === 'active' ? 'success' : 'default'}
                          variant="flat"
                          size="sm"
                        >
                          {user.status}
                        </NHChip>
                      </NHTableCell>
                      <NHTableCell>
                        <div className="flex items-center gap-2">
                          <NHTooltip content="View details">
                            <NHButton isIconOnly size="sm" variant="light">
                              <InformationCircleIcon className="h-4 w-4" />
                            </NHButton>
                          </NHTooltip>
                          
                          <NHPopover>
                            <NHPopoverTrigger>
                              <NHButton isIconOnly size="sm" variant="light">
                                <EllipsisVerticalIcon className="h-4 w-4" />
                              </NHButton>
                            </NHPopoverTrigger>
                            <NHPopoverContent>
                              <div className="px-1 py-2 w-40">
                                <div className="text-small font-bold">Actions</div>
                                <div className="text-tiny text-default-400 mt-1">Choose an action</div>
                                <Stack spacing={2} className="mt-3">
                                  <NHButton size="sm" variant="light" className="justify-start">
                                    Edit
                                  </NHButton>
                                  <NHButton size="sm" variant="light" className="justify-start">
                                    Duplicate
                                  </NHButton>
                                  <NHButton size="sm" variant="light" color="danger" className="justify-start">
                                    Delete
                                  </NHButton>
                                </Stack>
                              </div>
                            </NHPopoverContent>
                          </NHPopover>
                        </div>
                      </NHTableCell>
                    </NHTableRow>
                  ))}
                </NHTableBody>
              </NHTable>
            </NHCardBody>
          </NHCard>
        </div>

        {/* Lists */}
        <div>
          <Text variant="headline" className="mb-6">Lists</Text>
          
          <Grid cols={{ base: 1, md: 2 }} gap={6}>
            <NHCard>
              <NHCardHeader>
                <Text variant="title">Simple List</Text>
              </NHCardHeader>
              <NHCardBody>
                <NHList>
                  <NHListItem>First item in the list</NHListItem>
                  <NHListItem>Second item in the list</NHListItem>
                  <NHListItem>Third item in the list</NHListItem>
                </NHList>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardHeader>
                <Text variant="title">List Variants</Text>
              </NHCardHeader>
              <NHCardBody>
                <Stack spacing={6}>
                  <div>
                    <Text size="sm" weight="semibold" className="mb-2">Bordered</Text>
                    <NHList variant="bordered">
                      <NHListItem>Item one</NHListItem>
                      <NHListItem>Item two</NHListItem>
                    </NHList>
                  </div>
                  
                  <div>
                    <Text size="sm" weight="semibold" className="mb-2">Divided</Text>
                    <NHList variant="divided" spacing="none">
                      <NHListItem className="py-2">Item one</NHListItem>
                      <NHListItem className="py-2">Item two</NHListItem>
                    </NHList>
                  </div>
                </Stack>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardHeader>
                <Text variant="title">Complex List Items</Text>
              </NHCardHeader>
              <NHCardBody>
                <NHList>
                  <NHListItem
                    icon={<NHAvatar size="sm" name="John Doe" />}
                    title="John Doe"
                    description="Software Engineer"
                    actions={
                      <NHButton size="sm" variant="flat" color="primary">
                        Contact
                      </NHButton>
                    }
                  />
                  
                  <NHListItem
                    icon={<NHAvatar size="sm" name="Jane Smith" />}
                    title="Jane Smith"
                    description="Product Designer"
                    actions={
                      <NHButton size="sm" variant="flat" color="primary">
                        Contact
                      </NHButton>
                    }
                  />
                  
                  <NHListItem
                    icon={<NHAvatar size="sm" name="Bob Johnson" />}
                    title="Bob Johnson"
                    description="Project Manager"
                    actions={
                      <NHButton size="sm" variant="flat" color="primary">
                        Contact
                      </NHButton>
                    }
                  />
                </NHList>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardHeader>
                <Text variant="title">Task List</Text>
              </NHCardHeader>
              <NHCardBody>
                <NHList variant="divided" spacing="none">
                  <NHListItem
                    className="py-3"
                    title="Complete project documentation"
                    description="Due in 2 days"
                    actions={
                      <NHChip size="sm" color="warning" variant="flat">
                        In Progress
                      </NHChip>
                    }
                  />
                  
                  <NHListItem
                    className="py-3"
                    title="Review pull requests"
                    description="3 pending reviews"
                    actions={
                      <NHChip size="sm" color="danger" variant="flat">
                        Urgent
                      </NHChip>
                    }
                  />
                  
                  <NHListItem
                    className="py-3"
                    title="Update dependencies"
                    description="Last updated 1 week ago"
                    actions={
                      <NHChip size="sm" color="success" variant="flat">
                        Completed
                      </NHChip>
                    }
                  />
                </NHList>
              </NHCardBody>
            </NHCard>
          </Grid>
        </div>

        {/* Utilities Demo */}
        <div>
          <Text variant="headline" className="mb-6">Utility Components</Text>
          
          <NHCard>
            <NHCardBody>
              <Stack spacing={6}>
                <div>
                  <Text variant="title" className="mb-4">Tooltips & Popovers</Text>
                  <div className="flex gap-4 flex-wrap">
                    <NHTooltip content="This is a tooltip">
                      <NHButton variant="flat">Hover for Tooltip</NHButton>
                    </NHTooltip>
                    
                    <NHTooltip content="Blurred tooltip" isBlurred>
                      <NHButton variant="flat">Blurred Tooltip</NHButton>
                    </NHTooltip>
                    
                    <NHPopover>
                      <NHPopoverTrigger>
                        <NHButton variant="flat">Click for Popover</NHButton>
                      </NHPopoverTrigger>
                      <NHPopoverContent>
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">Popover Title</div>
                          <div className="text-tiny">This is the popover content</div>
                        </div>
                      </NHPopoverContent>
                    </NHPopover>
                  </div>
                </div>

                <div>
                  <Text variant="title" className="mb-4">Drawer</Text>
                  <NHButton 
                    color="primary" 
                    variant="flat"
                    onPress={() => setIsDrawerOpen(true)}
                  >
                    Open Drawer
                  </NHButton>
                </div>
              </Stack>
            </NHCardBody>
          </NHCard>
        </div>

        {/* Media Components */}
        <div>
          <Text variant="headline" className="mb-6">Media Components</Text>
          
          <Grid cols={{ base: 1, md: 2 }} gap={6}>
            <NHCard>
              <NHCardHeader>
                <Text variant="title">Images</Text>
              </NHCardHeader>
              <NHCardBody>
                <Stack spacing={4}>
                  <NHImage
                    width={300}
                    height={200}
                    src="https://picsum.photos/300/200"
                    alt="Sample image"
                  />
                  
                  <NHImage
                    isBlurred
                    width={300}
                    height={200}
                    src="https://picsum.photos/301/201"
                    alt="Blurred loading image"
                  />
                </Stack>
              </NHCardBody>
            </NHCard>
          </Grid>
        </div>

        {/* Drawer Component */}
        <NHDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title="Drawer Example"
          description="This is a drawer component that slides in from the side"
        >
          <Stack spacing={4}>
            <Text>
              Drawers are perfect for forms, filters, or any content that needs 
              temporary focus without leaving the current page.
            </Text>
            
            <Text>
              They support different positions (left, right, top, bottom) and 
              sizes (sm, md, lg, xl, full).
            </Text>
            
            <NHButton 
              color="primary" 
              className="mt-4"
              onPress={() => setIsDrawerOpen(false)}
            >
              Close Drawer
            </NHButton>
          </Stack>
        </NHDrawer>
      </Stack>
    </Container>
  );
}