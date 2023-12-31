import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Organization {
  id: string;
  name: string;
  type: string;
  // Add other properties as needed
}

interface OrganizationDetailsState {
  loading: boolean;
  organizationDetails: Organization[];
  errorMsg: string;
}

const initialState: OrganizationDetailsState = {
  loading: false,
  organizationDetails: [],
  errorMsg: "",
};

export const organizationDetailsSlice = createSlice({
  name: "organizationDetails",
  initialState,
  reducers: {
    isLoading(state) {
      state.loading = true;
    },
    setIsLoadingFalse(state) {
      state.loading = false;
    },
    getOrganizationDetailsSuccess(
      state,
      action: PayloadAction<Organization[]>
    ) {
      state.loading = false;
      state.organizationDetails = action.payload;
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMsg = action.payload;
    },
    deleteOrganizationDetails(
      state,
      action: PayloadAction<string>
    ) {
      state.loading = false;
      state.organizationDetails = state.organizationDetails.filter(
        (org) => org.id !== action.payload
      );
      
    },
    
  },
});

export const {
  isLoading,
  setIsLoadingFalse,
  getOrganizationDetailsSuccess,
  setErrorMessage,
  deleteOrganizationDetails,
} = organizationDetailsSlice.actions;

export default organizationDetailsSlice.reducer;

