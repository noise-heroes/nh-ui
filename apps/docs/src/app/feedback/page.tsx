"use client";

import {
  Container,
  Stack,
  Text,
  Grid,
  Box,
  NHCard,
  NHCardBody,
  NHCardHeader,
  NHButton,
  NHAlert,
  NHToast,
  ToastProvider,
  useToast,
  NHModal,
  NHModalHeader,
  NHModalBody,
  NHModalFooter,
  NHDialog,
  NHNotification,
  NHProgress,
  NHSpinner,
  NHSkeleton,
  NHLoadingOverlay,
  NHEmptyState,
  NHBanner,
  useDisclosure,
} from "@nh-ui/ui";
import { useState } from "react";
import { 
  CheckCircleIcon, 
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

function FeedbackContent() {
  const toast = useToast();
  const { isOpen: modalOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();
  const { isOpen: dialogOpen, onOpen: openDialog, onClose: closeDialog } = useDisclosure();
  const [showLoading, setShowLoading] = useState(false);
  const [progress, setProgress] = useState(65);
  const [showBanner, setShowBanner] = useState(true);

  const showToast = (type: 'success' | 'error' | 'info' | 'warning') => {
    const messages = {
      success: { title: 'Success!', description: 'Your changes have been saved.' },
      error: { title: 'Error', description: 'Something went wrong. Please try again.' },
      info: { title: 'Info', description: 'Here\'s some helpful information.' },
      warning: { title: 'Warning', description: 'Please review before proceeding.' },
    };
    
    toast[type](messages[type]);
  };

  return (
    <>
      <Stack spacing={12} className="py-12">
        <div>
          <Text variant="display" gradient="brand" className="mb-4">
            Feedback Components
          </Text>
          <Text size="lg" color="muted">
            Keep users informed with beautiful feedback components
          </Text>
        </div>

        {/* Banner */}
        {showBanner && (
          <NHBanner
            variant="gradient"
            isCloseable
            onClose={() => setShowBanner(false)}
          >
            🎉 New NH-UI version 2.0 is now available with 143 components!
          </NHBanner>
        )}

        <Grid cols={{ base: 1, md: 2 }} gap={8}>
          {/* Alerts */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Alerts</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={4}>
                <NHAlert
                  variant="solid"
                  color="success"
                  title="Success!"
                  description="Your payment has been processed."
                  icon={<CheckCircleIcon className="w-5 h-5" />}
                  isCloseable
                />
                
                <NHAlert
                  variant="bordered"
                  color="error"
                  title="Error"
                  description="Failed to save changes."
                  icon={<XCircleIcon className="w-5 h-5" />}
                />
                
                <NHAlert
                  variant="flat"
                  color="warning"
                  title="Warning"
                  description="Your session will expire in 5 minutes."
                  icon={<ExclamationCircleIcon className="w-5 h-5" />}
                />
                
                <NHAlert
                  variant="faded"
                  color="info"
                  title="Info"
                  description="New features are available."
                  icon={<InformationCircleIcon className="w-5 h-5" />}
                />
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Toast Notifications */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Toast Notifications</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={4}>
                <Text size="sm" color="muted">
                  Click buttons to show toast notifications
                </Text>
                <Grid cols={2} gap={3}>
                  <NHButton
                    color="success"
                    variant="flat"
                    onPress={() => showToast('success')}
                  >
                    Success
                  </NHButton>
                  <NHButton
                    color="danger"
                    variant="flat"
                    onPress={() => showToast('error')}
                  >
                    Error
                  </NHButton>
                  <NHButton
                    color="warning"
                    variant="flat"
                    onPress={() => showToast('warning')}
                  >
                    Warning
                  </NHButton>
                  <NHButton
                    color="primary"
                    variant="flat"
                    onPress={() => showToast('info')}
                  >
                    Info
                  </NHButton>
                </Grid>
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Progress */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Progress Indicators</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={6}>
                <div>
                  <Text size="sm" color="muted" className="mb-2">
                    Determinate Progress
                  </Text>
                  <NHProgress 
                    value={progress} 
                    color="primary"
                    showValueLabel
                  />
                  <Box mt={2}>
                    <NHButton
                      size="sm"
                      variant="flat"
                      onPress={() => setProgress(Math.min(100, progress + 10))}
                    >
                      Increase
                    </NHButton>
                  </Box>
                </div>
                
                <div>
                  <Text size="sm" color="muted" className="mb-2">
                    Indeterminate Progress
                  </Text>
                  <NHProgress 
                    isIndeterminate
                    color="secondary"
                  />
                </div>
                
                <div>
                  <Text size="sm" color="muted" className="mb-2">
                    Striped & Animated
                  </Text>
                  <NHProgress 
                    value={75}
                    color="warning"
                    isStriped
                    isAnimated
                  />
                </div>
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Spinners */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Loading Spinners</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={6}>
                <div>
                  <Text size="sm" color="muted" className="mb-3">
                    Variants
                  </Text>
                  <Grid cols={4} gap={4}>
                    <Box className="text-center">
                      <NHSpinner size="lg" />
                      <Text size="xs" color="muted" className="mt-2">
                        Default
                      </Text>
                    </Box>
                    <Box className="text-center">
                      <NHSpinner variant="dots" size="lg" color="primary" />
                      <Text size="xs" color="muted" className="mt-2">
                        Dots
                      </Text>
                    </Box>
                    <Box className="text-center">
                      <NHSpinner variant="pulse" size="lg" color="secondary" />
                      <Text size="xs" color="muted" className="mt-2">
                        Pulse
                      </Text>
                    </Box>
                    <Box className="text-center">
                      <NHSpinner variant="bars" size="lg" color="warning" />
                      <Text size="xs" color="muted" className="mt-2">
                        Bars
                      </Text>
                    </Box>
                  </Grid>
                </div>
                
                <div>
                  <Text size="sm" color="muted" className="mb-3">
                    With Label
                  </Text>
                  <NHSpinner 
                    size="md" 
                    color="primary"
                    label="Loading your content..."
                  />
                </div>
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Skeletons */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Skeleton Loaders</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={4}>
                <NHSkeleton variant="text" />
                <NHSkeleton variant="text" className="w-4/5" />
                <NHSkeleton variant="text" className="w-3/5" />
                
                <Box className="flex items-center gap-4">
                  <NHSkeleton variant="circular" className="w-12 h-12" />
                  <div className="flex-1">
                    <NHSkeleton variant="text" className="mb-2" />
                    <NHSkeleton variant="text" className="w-3/5" />
                  </div>
                </Box>
                
                <NHSkeleton variant="rectangular" className="h-30" />
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Notifications */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Notifications</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={4}>
                <NHNotification
                  avatar={{ src: "https://i.pravatar.cc/150?u=a042581f4e29026024d" }}
                  title="New follower"
                  description="Sarah Johnson started following you"
                  time="2 minutes ago"
                  actions={[
                    { label: "View", color: "primary", onClick: () => console.log("View") },
                    { label: "Follow back", color: "default", onClick: () => console.log("Follow") }
                  ]}
                />
                
                <NHNotification
                  avatar={{ src: "https://i.pravatar.cc/150?u=a04258a2462d826712d" }}
                  title="New message"
                  description="Hey! Check out this new track I've been working on..."
                  time="1 hour ago"
                  isRead={false}
                />
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Empty States */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Empty States</Text>
            </NHCardHeader>
            <NHCardBody>
              <NHEmptyState
                icon={<SparklesIcon className="w-12 h-12" />}
                title="No data yet"
                description="Start by creating your first item"
                actions={[{
                  label: "Create Item",
                  color: "primary",
                  onClick: () => console.log("Create")
                }]}
              />
            </NHCardBody>
          </NHCard>

          {/* Loading Overlay */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Loading Overlay</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={4}>
                <Text size="sm" color="muted">
                  Click to show full-page loading overlay
                </Text>
                <NHButton
                  color="primary"
                  onPress={() => {
                    setShowLoading(true);
                    setTimeout(() => setShowLoading(false), 3000);
                  }}
                >
                  Show Loading (3s)
                </NHButton>
              </Stack>
            </NHCardBody>
          </NHCard>
        </Grid>

        {/* Modals & Dialogs */}
        <NHCard>
          <NHCardHeader>
            <Text variant="title">Modals & Dialogs</Text>
          </NHCardHeader>
          <NHCardBody>
            <Grid cols={{ base: 1, md: 3 }} gap={4}>
              <NHButton
                color="primary"
                variant="flat"
                onPress={openModal}
              >
                Open Modal
              </NHButton>
              
              <NHButton
                color="warning"
                variant="flat"
                onPress={openDialog}
              >
                Open Dialog
              </NHButton>
              
              {/* Custom Toast - Coming Soon */}
              {/* <NHButton
                color="secondary"
                variant="flat"
                onPress={() => {
                  // Custom toast functionality to be added
                }}
              >
                Custom Toast
              </NHButton> */}
            </Grid>
          </NHCardBody>
        </NHCard>
      </Stack>

      {/* Modal */}
      <NHModal isOpen={modalOpen} onClose={closeModal} size="lg">
        <NHModalHeader>Create New Project</NHModalHeader>
        <NHModalBody>
          <Stack spacing={4}>
            <Text>
              Fill in the details below to create a new music project.
            </Text>
            <Text>Project creation form would go here with:</Text>
            <Text size="sm" color="muted">• Project name input</Text>
            <Text size="sm" color="muted">• Genre selection</Text>
            <Text size="sm" color="muted">• Description textarea</Text>
          </Stack>
        </NHModalBody>
        <NHModalFooter>
          <NHButton variant="light" onPress={closeModal}>
            Cancel
          </NHButton>
          <NHButton color="primary" onPress={closeModal}>
            Create Project
          </NHButton>
        </NHModalFooter>
      </NHModal>

      {/* Dialog */}
      <NHDialog
        isOpen={dialogOpen}
        onClose={closeDialog}
        type="warning"
        title="Delete Project?"
        description="This action cannot be undone. All project files and data will be permanently deleted."
        confirmLabel="Delete"
        confirmButtonColor="danger"
        onConfirm={() => {
          console.log("Deleting...");
          closeDialog();
        }}
      />

      {/* Loading Overlay */}
      <NHLoadingOverlay
        isOpen={showLoading}
        variant="blur"
        label="Processing your request..."
      />
    </>
  );
}

export default function FeedbackPage() {
  return (
    <ToastProvider>
      <Container size="xl">
        <FeedbackContent />
      </Container>
    </ToastProvider>
  );
}