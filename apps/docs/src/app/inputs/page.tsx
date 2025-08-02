"use client";

import {
  Container,
  Stack,
  Text,
  Grid,
  Box,
  NHInput,
  NHTextarea,
  NHSelect,
  NHSelectItem,
  NHCheckbox,
  NHCheckboxGroup,
  NHRadio,
  NHRadioGroup,
  NHSwitch,
  NHSlider,
  NHDatePicker,
  NHTimePicker,
  NHColorPicker,
  NHFileUpload,
  NHSearchInput,
  NHPasswordInput,
  NHNumberInput,
  NHPinInput,
  NHRating,
  NHTagInput,
  NHAutocomplete,
  NHForm,
  NHFormField,
  NHCard,
  NHCardBody,
  NHCardHeader,
  NHDivider,
  NHButton,
} from "@nh-ui/ui";
import { useState } from "react";

export default function InputsPage() {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [checkboxGroupValue, setCheckboxGroupValue] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [timeValue, setTimeValue] = useState<string | null>(null);
  const [colorValue, setColorValue] = useState("#FF5500");
  const [searchValue, setSearchValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [numberValue, setNumberValue] = useState("0");
  const [pinValue, setPinValue] = useState("");
  const [ratingValue, setRatingValue] = useState(3);
  const [tagsValue, setTagsValue] = useState<string[]>([]);
  const [autocompleteValue, setAutocompleteValue] = useState("");

  const selectOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const checkboxOptions = [
    { label: "Checkbox 1", value: "1" },
    { label: "Checkbox 2", value: "2" },
    { label: "Checkbox 3", value: "3" },
  ];

  const radioOptions = [
    { label: "Radio 1", value: "1" },
    { label: "Radio 2", value: "2" },
    { label: "Radio 3", value: "3" },
  ];

  const autocompleteOptions = [
    { label: "Audio Interface", value: "audio-interface" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
    { label: "Elderberry", value: "elderberry" },
  ];

  return (
    <Container size="xl">
      <Stack spacing={12} className="py-12">
        <div>
          <Text variant="display" gradient="brand" className="mb-4">
            Input Components
          </Text>
          <Text size="lg" color="muted">
            A comprehensive collection of form input components for building professional interfaces
          </Text>
        </div>

        <Grid cols={{ base: 1, md: 2 }} gap={8}>
          {/* Text Inputs */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Text Inputs</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={6}>
                <NHFormField label="Basic Input" helperText="Standard text input">
                  <NHInput
                    placeholder="Enter text..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </NHFormField>

                <NHFormField label="Search Input" helperText="With debouncing">
                  <NHSearchInput
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </NHFormField>

                <NHFormField label="Password Input" helperText="With strength indicator">
                  <NHPasswordInput
                    placeholder="Enter password..."
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    showStrength
                  />
                </NHFormField>

                <NHFormField label="Number Input" helperText="With steppers">
                  <NHNumberInput
                    value={numberValue}
                    onChange={(e) => setNumberValue(e.target.value)}
                    min={0}
                    max={100}
                    step={5}
                  />
                </NHFormField>
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Selection Inputs */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Selection Inputs</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={6}>
                <NHFormField label="Select" helperText="Dropdown selection">
                  <NHSelect
                    placeholder="Choose an option"
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                  >
                    {selectOptions.map((option) => (
                      <NHSelectItem key={option.value}>
                        {option.label}
                      </NHSelectItem>
                    ))}
                  </NHSelect>
                </NHFormField>

                <NHFormField label="Autocomplete" helperText="With suggestions">
                  <NHAutocomplete
                    placeholder="Start typing..."
                    value={autocompleteValue}
                    onSelectionChange={(value) => setAutocompleteValue(value || "")}
                    items={autocompleteOptions}
                  />
                </NHFormField>

                <NHFormField label="Color Picker" helperText="Choose a color">
                  <NHColorPicker
                    value={colorValue}
                    onChange={(value) => setColorValue(value)}
                  />
                </NHFormField>
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Toggle Inputs */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Toggle Inputs</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={6}>
                <NHFormField label="Checkbox" helperText="Single checkbox">
                  <NHCheckbox
                    isSelected={checkboxValue}
                    onValueChange={setCheckboxValue}
                  >
                    Accept terms and conditions
                  </NHCheckbox>
                </NHFormField>

                <NHFormField label="Checkbox Group" helperText="Multiple selection">
                  <NHCheckboxGroup
                    value={checkboxGroupValue}
                    onValueChange={setCheckboxGroupValue}
                  >
                    {checkboxOptions.map((option) => (
                      <NHCheckbox key={option.value} value={option.value}>
                        {option.label}
                      </NHCheckbox>
                    ))}
                  </NHCheckboxGroup>
                </NHFormField>

                <NHFormField label="Radio Group" helperText="Single selection">
                  <NHRadioGroup
                    value={radioValue}
                    onValueChange={setRadioValue}
                  >
                    {radioOptions.map((option) => (
                      <NHRadio key={option.value} value={option.value}>
                        {option.label}
                      </NHRadio>
                    ))}
                  </NHRadioGroup>
                </NHFormField>

                <NHFormField label="Switch" helperText="Toggle switch">
                  <NHSwitch
                    isSelected={switchValue}
                    onValueChange={setSwitchValue}
                  >
                    Enable notifications
                  </NHSwitch>
                </NHFormField>
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Advanced Inputs */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Advanced Inputs</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={6}>
                <NHFormField label="Textarea" helperText="Multi-line text">
                  <NHTextarea
                    placeholder="Enter multiple lines..."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                  />
                </NHFormField>

                <NHFormField label="Slider" helperText="Range selection">
                  <NHSlider
                    value={sliderValue}
                    onChange={(value) => setSliderValue(Array.isArray(value) ? value[0] : value)}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    showTooltip
                  />
                </NHFormField>

                <NHFormField label="Rating" helperText="Star rating">
                  <NHRating
                    value={ratingValue}
                    onChange={(value) => setRatingValue(value)}
                  />
                </NHFormField>

                <NHFormField label="PIN Input" helperText="4-digit PIN">
                  <NHPinInput
                    length={4}
                    value={pinValue}
                    onChange={(value) => setPinValue(value)}
                  />
                </NHFormField>
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* Date & Time */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">Date & Time</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={6}>
                <NHFormField label="Date Picker" helperText="Select a date">
                  <NHDatePicker
                    value={dateValue}
                    onChange={(value) => setDateValue(value)}
                  />
                </NHFormField>

                <NHFormField label="Time Picker" helperText="Select a time">
                  <NHTimePicker
                    value={timeValue}
                    onChange={(value) => setTimeValue(value)}
                  />
                </NHFormField>
              </Stack>
            </NHCardBody>
          </NHCard>

          {/* File & Tags */}
          <NHCard>
            <NHCardHeader>
              <Text variant="title">File & Tags</Text>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={6}>
                <NHFormField label="File Upload" helperText="Drag & drop or click">
                  <NHFileUpload
                    accept="image/*"
                    multiple
                    onChange={(files) => console.log(files)}
                  />
                </NHFormField>

                <NHFormField label="Tag Input" helperText="Add multiple tags">
                  <NHTagInput
                    value={tagsValue}
                    onChange={(value) => setTagsValue(value)}
                    placeholder="Type and press Enter..."
                  />
                </NHFormField>
              </Stack>
            </NHCardBody>
          </NHCard>
        </Grid>

        {/* Form Example */}
        <NHCard>
          <NHCardHeader>
            <Text variant="headline">Complete Form Example</Text>
          </NHCardHeader>
          <NHCardBody>
            <NHForm onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
              <Grid cols={{ base: 1, md: 2 }} gap={6}>
                <NHFormField label="Name" isRequired>
                  <NHInput placeholder="John Doe" />
                </NHFormField>

                <NHFormField label="Email" isRequired>
                  <NHInput type="email" placeholder="john@example.com" />
                </NHFormField>

                <NHFormField label="Phone">
                  <NHInput type="tel" placeholder="+1 (555) 123-4567" />
                </NHFormField>

                <NHFormField label="Country">
                  <NHSelect placeholder="Select country">
                    <NHSelectItem key="us">United States</NHSelectItem>
                    <NHSelectItem key="uk">United Kingdom</NHSelectItem>
                    <NHSelectItem key="ca">Canada</NHSelectItem>
                  </NHSelect>
                </NHFormField>

                <NHFormField label="Message" className="md:col-span-2">
                  <NHTextarea placeholder="Tell us more..." />
                </NHFormField>

                <NHFormField className="md:col-span-2">
                  <NHCheckbox>
                    I agree to the terms and conditions
                  </NHCheckbox>
                </NHFormField>
              </Grid>

              <Box className="mt-6">
                <NHButton type="submit" color="primary">
                  Submit Form
                </NHButton>
              </Box>
            </NHForm>
          </NHCardBody>
        </NHCard>
      </Stack>
    </Container>
  );
}